import { NextResponse } from 'next/server';
import { isRateLimited } from '../../../lib/rate-limit';
import { MODULOS } from '../../../lib/enablement';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CHANNELS = ['WHATSAPP', 'SMS', 'EMAIL', 'CALL'] as const;
type Channel = (typeof CHANNELS)[number];
const MODULO_IDS = MODULOS.map((m) => m.id);
const NIVELES = ['LAUNCH_READY', 'MARKET_READY', 'GROWTH_READY'] as const;

type IntakeMeta = {
    scores?: Record<string, number>;
    modulosRecomendados?: string[];
    nivel?: string;
    bandaEstimada?: { min: number; max: number };
    utm?: {
        source?: string;
        medium?: string;
        campaign?: string;
        referrer?: string;
    };
    pageUrl?: string;
    notes?: string;
};

type LeadPayload = {
    name: string;
    phone: string;
    email?: string;
    consent: true;
    consentChannels: Channel[];
    businessUnit: 'BEXAR';
    program?: string;
    organizationName?: string;
    intake?: IntakeMeta;
};

function isBoundedString(value: unknown, maxLength: number): value is string {
    return typeof value === 'string' && value.length <= maxLength;
}

// Mirrors digisenda-tax-admin's intakeMetaSchema shape. This object is
// forwarded verbatim into the CRM's ingestion payload, so it gets its own
// explicit validation here rather than relying solely on the receiving
// side's zod parse to reject anything malformed.
function isValidIntake(value: unknown): value is IntakeMeta {
    if (value === undefined) return true;
    if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
    const v = value as Record<string, unknown>;

    if (v.scores !== undefined) {
        if (!v.scores || typeof v.scores !== 'object' || Array.isArray(v.scores)) return false;
        for (const val of Object.values(v.scores as Record<string, unknown>)) {
            if (typeof val !== 'number' || val < 0 || val > 100) return false;
        }
    }

    if (v.modulosRecomendados !== undefined) {
        if (
            !Array.isArray(v.modulosRecomendados) ||
            v.modulosRecomendados.length > 4 ||
            !v.modulosRecomendados.every((m) => MODULO_IDS.includes(m as (typeof MODULO_IDS)[number]))
        ) {
            return false;
        }
    }

    if (v.nivel !== undefined && !NIVELES.includes(v.nivel as (typeof NIVELES)[number])) {
        return false;
    }

    if (v.bandaEstimada !== undefined) {
        const b = v.bandaEstimada;
        if (
            !b ||
            typeof b !== 'object' ||
            typeof (b as Record<string, unknown>).min !== 'number' ||
            typeof (b as Record<string, unknown>).max !== 'number' ||
            (b as { min: number }).min < 0 ||
            (b as { max: number }).max < 0
        ) {
            return false;
        }
    }

    if (v.utm !== undefined) {
        if (!v.utm || typeof v.utm !== 'object' || Array.isArray(v.utm)) return false;
        const utm = v.utm as Record<string, unknown>;
        for (const key of ['source', 'medium', 'campaign'] as const) {
            if (utm[key] !== undefined && !isBoundedString(utm[key], 200)) return false;
        }
        if (utm.referrer !== undefined && !isBoundedString(utm.referrer, 2000)) return false;
    }

    if (v.pageUrl !== undefined && !isBoundedString(v.pageUrl, 2000)) return false;
    if (v.notes !== undefined && !isBoundedString(v.notes, 1000)) return false;

    // Reject anything else — no unexpected keys pass through to the CRM.
    const allowedKeys = ['scores', 'modulosRecomendados', 'nivel', 'bandaEstimada', 'utm', 'pageUrl', 'notes'];
    if (Object.keys(v).some((k) => !allowedKeys.includes(k))) return false;

    return true;
}

function isValidPayload(body: unknown): body is LeadPayload {
    if (!body || typeof body !== 'object') return false;
    const b = body as Record<string, unknown>;

    // Honeypot: a real visitor never fills the hidden "company" field.
    // Checked here (not just client-side) so a bot posting directly to this
    // route can't bypass it.
    if (typeof b.company === 'string' && b.company.trim().length > 0) {
        return false;
    }

    if (typeof b.name !== 'string' || b.name.trim().length < 2 || b.name.length > 200) {
        return false;
    }

    if (typeof b.phone !== 'string' || b.phone.replace(/\D/g, '').length < 10) {
        return false;
    }

    if (b.email !== undefined && (typeof b.email !== 'string' || !EMAIL_RE.test(b.email))) {
        return false;
    }

    if (b.consent !== true) {
        return false;
    }

    if (
        !Array.isArray(b.consentChannels) ||
        b.consentChannels.length === 0 ||
        !b.consentChannels.every((c) => CHANNELS.includes(c as Channel))
    ) {
        return false;
    }

    if (b.organizationName !== undefined && !isBoundedString(b.organizationName, 200)) {
        return false;
    }

    if (b.program !== undefined && !isBoundedString(b.program, 120)) {
        return false;
    }

    if (!isValidIntake(b.intake)) {
        return false;
    }

    return true;
}

// Vercel appends the real connecting IP as the LAST hop of an existing
// X-Forwarded-For chain rather than replacing it — the first entry is
// whatever the client itself sent and is trivially spoofable, which would
// let a caller defeat the rate limiter by rotating a fake leading IP on
// every request.
function realClientIp(request: Request): string {
    const forwardedFor = request.headers.get('x-forwarded-for');
    if (!forwardedFor) return 'unknown';
    const parts = forwardedFor.split(',').map((p) => p.trim());
    return parts[parts.length - 1] || 'unknown';
}

export async function POST(request: Request) {
    const ip = realClientIp(request);

    if (isRateLimited(ip)) {
        return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    let body: unknown;

    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }

    if (!isValidPayload(body)) {
        return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const intakeUrl = process.env.LEAD_INTAKE_URL;
    const intakeToken = process.env.LEAD_INTAKE_TOKEN;

    if (!intakeUrl || !intakeToken) {
        console.error('[lead] LEAD_INTAKE_URL/LEAD_INTAKE_TOKEN not configured');
        return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
    }

    try {
        const res = await fetch(intakeUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-lead-intake-token': intakeToken,
                'x-original-forwarded-for': ip,
            },
            body: JSON.stringify({
                name: body.name,
                phone: body.phone,
                email: body.email,
                consent: true,
                consentChannels: body.consentChannels,
                businessUnit: 'BEXAR',
                program: body.program,
                organizationName: body.organizationName,
                intake: body.intake,
            }),
            signal: AbortSignal.timeout(8000),
        });

        if (!res.ok) {
            console.error('[lead] intake responded with', res.status);
            return NextResponse.json({ error: 'Intake failed' }, { status: 502 });
        }
    } catch (error) {
        console.error('[lead] failed to reach intake endpoint', error);
        return NextResponse.json({ error: 'Intake unreachable' }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
}
