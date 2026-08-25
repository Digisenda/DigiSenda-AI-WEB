import { NextResponse } from 'next/server';
import { isRateLimited } from '../../../lib/rate-limit';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CHANNELS = ['WHATSAPP', 'SMS', 'EMAIL', 'CALL'] as const;
type Channel = (typeof CHANNELS)[number];

type LeadPayload = {
    name: string;
    phone: string;
    email?: string;
    consent: true;
    consentChannels: Channel[];
    businessUnit: 'BEXAR';
    program?: string;
    organizationName?: string;
    intake?: {
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
    };
};

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

    if (b.organizationName !== undefined && typeof b.organizationName !== 'string') {
        return false;
    }

    if (b.program !== undefined && typeof b.program !== 'string') {
        return false;
    }

    return true;
}

export async function POST(request: Request) {
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0]?.trim() : 'unknown';

    if (isRateLimited(ip ?? 'unknown')) {
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
