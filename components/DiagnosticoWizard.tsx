'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { MODULOS, type ModuloId } from '../lib/enablement';
import { captureUtm, getUtm } from '../lib/utm';
import { trackEvent, trackLead } from '../lib/analytics';

type Answer = 0 | 50 | 100;

type Question = {
    id: string;
    moduloId: ModuloId;
    text: string;
};

const QUESTIONS: Question[] = [
    { id: 'f1', moduloId: 'fundacion', text: '¿Tu negocio ya está formalmente registrado (LLC, EIN)?' },
    { id: 'f2', moduloId: 'fundacion', text: '¿Tienes tus finanzas separadas del negocio (cuenta bancaria propia)?' },
    { id: 'f3', moduloId: 'fundacion', text: '¿Tienes claro qué te falta para operar con cumplimiento básico?' },
    { id: 'p1', moduloId: 'presencia', text: '¿Tienes un sitio web profesional propio?' },
    { id: 'p2', moduloId: 'presencia', text: '¿Tu Google Business Profile está configurado y optimizado?' },
    { id: 'p3', moduloId: 'presencia', text: '¿Tienes correo profesional con tu propio dominio?' },
    { id: 'c1', moduloId: 'captacion', text: '¿Tienes un sistema para captar y dar seguimiento a clientes potenciales?' },
    { id: 'c2', moduloId: 'captacion', text: '¿Corres campañas (orgánicas o pagadas) para atraer clientes?' },
    { id: 'o1', moduloId: 'operaciones', text: '¿Usas un CRM o sistema para organizar clientes y tareas?' },
    { id: 'o2', moduloId: 'operaciones', text: '¿Tienes automatizadas tus comunicaciones (recordatorios, confirmaciones)?' },
];

const ANSWER_OPTIONS: { value: Answer; label: string }[] = [
    { value: 100, label: 'Sí' },
    { value: 50, label: 'Parcial' },
    { value: 0, label: 'No' },
];

const NIVEL_LABELS: Record<string, string> = {
    LAUNCH_READY: 'Launch Ready',
    MARKET_READY: 'Market Ready',
    GROWTH_READY: 'Growth Ready',
};

const CHANNEL_OPTIONS: { value: 'WHATSAPP' | 'SMS' | 'EMAIL'; label: string }[] = [
    { value: 'WHATSAPP', label: 'WhatsApp' },
    { value: 'SMS', label: 'SMS' },
    { value: 'EMAIL', label: 'Email' },
];

const STORAGE_KEY = 'digisenda_diagnostico';

function parseRango(rango: string): { min: number; max: number } {
    const matches = rango.match(/[\d,]+/g) ?? [];
    const nums = matches.map((m) => Number(m.replace(/,/g, '')));
    return { min: nums[0] ?? 0, max: nums[1] ?? nums[0] ?? 0 };
}

function scoreFor(moduloId: ModuloId, answers: Record<string, Answer>): number {
    const relevant = QUESTIONS.filter((q) => q.moduloId === moduloId);
    const answered = relevant.filter((q) => answers[q.id] !== undefined);
    if (answered.length === 0) return 100;
    const sum = answered.reduce((acc, q) => acc + (answers[q.id] ?? 0), 0);
    return Math.round(sum / answered.length);
}

function nivelFor(scores: Record<ModuloId, number>): string | null {
    const gap = (id: ModuloId) => scores[id] < 60;
    if (gap('fundacion')) return 'LAUNCH_READY';
    if (gap('presencia') || gap('captacion')) return 'MARKET_READY';
    if (gap('operaciones')) return 'GROWTH_READY';
    return null;
}

function readSavedState(): { step: number; answers: Record<string, Answer> } {
    if (typeof window === 'undefined') return { step: 0, answers: {} };
    try {
        const raw = sessionStorage.getItem(STORAGE_KEY);
        if (!raw) return { step: 0, answers: {} };
        const saved = JSON.parse(raw) as { step: number; answers: Record<string, Answer> };
        return { step: saved.step ?? 0, answers: saved.answers ?? {} };
    } catch {
        return { step: 0, answers: {} };
    }
}

export default function DiagnosticoWizard() {
    const router = useRouter();
    const stepRef = useRef<HTMLDivElement>(null);

    const [step, setStep] = useState<number>(() => readSavedState().step);
    const [answers, setAnswers] = useState<Record<string, Answer>>(
        () => readSavedState().answers,
    );
    const [hydrated, setHydrated] = useState(false);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [channels, setChannels] = useState<Set<string>>(new Set(['WHATSAPP']));
    const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        captureUtm();
        setHydrated(true);
        const resumed = step > 0 || Object.keys(answers).length > 0;
        if (!resumed) {
            trackEvent('diagnostico_start');
        }
        // Intentionally runs once on mount only — `step`/`answers` are read
        // from their initial (possibly sessionStorage-restored) values here,
        // not tracked reactively.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!hydrated) return;
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ step, answers }));
    }, [step, answers, hydrated]);

    useEffect(() => {
        const reduced =
            typeof window !== 'undefined' &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced || !stepRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                stepRef.current,
                { opacity: 0, y: 16 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
            );
        });
        return () => ctx.revert();
    }, [step]);

    const scores = useMemo(() => {
        const result = {} as Record<ModuloId, number>;
        for (const m of MODULOS) {
            result[m.id] = scoreFor(m.id, answers);
        }
        return result;
    }, [answers]);

    const modulosRecomendados = useMemo(
        () => MODULOS.filter((m) => scores[m.id] < 60),
        [scores],
    );

    const nivel = useMemo(() => nivelFor(scores), [scores]);

    const bandaEstimada = useMemo(() => {
        if (modulosRecomendados.length === 0) return null;
        return modulosRecomendados.reduce(
            (acc, m) => {
                const { min, max } = parseRango(m.precios[0].rango);
                return { min: acc.min + min, max: acc.max + max };
            },
            { min: 0, max: 0 },
        );
    }, [modulosRecomendados]);

    const totalSteps = QUESTIONS.length;
    const isQuestionStep = step < totalSteps;
    const isPlanStep = step === totalSteps;
    const isFormStep = step === totalSteps + 1;

    function answer(value: Answer) {
        const q = QUESTIONS[step];
        const nextAnswers = { ...answers, [q.id]: value };
        setAnswers(nextAnswers);
        trackEvent('diagnostico_step', { questionId: q.id, step: step + 1, value });
        setStep((s) => s + 1);

        if (step + 1 === totalSteps) {
            // Computed directly from nextAnswers (not the memoized `scores`/
            // `nivel` in this closure) because those are derived from the
            // answers state before this update — React hasn't re-rendered
            // yet, so the memo wouldn't reflect this last answer either way.
            const finalScores = {} as Record<ModuloId, number>;
            for (const m of MODULOS) {
                finalScores[m.id] = scoreFor(m.id, nextAnswers);
            }
            trackEvent('diagnostico_complete', {
                scores: finalScores,
                nivel: nivelFor(finalScores),
                modulosRecomendados: MODULOS.filter((m) => finalScores[m.id] < 60).map((m) => m.id),
            });
        }
    }

    function toggleChannel(value: string) {
        setChannels((prev) => {
            const next = new Set(prev);
            if (next.has(value)) next.delete(value);
            else next.add(value);
            return next;
        });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (channels.size === 0) {
            setStatus('error');
            setErrorMessage('Selecciona al menos un canal de contacto.');
            return;
        }

        setStatus('submitting');
        setErrorMessage(null);

        let succeeded = false;
        try {
            const res = await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    phone,
                    email: email || undefined,
                    consent: true,
                    consentChannels: [...channels],
                    businessUnit: 'BEXAR',
                    program: 'WEB_DIAGNOSTICO_2026',
                    organizationName: businessName || undefined,
                    intake: {
                        scores,
                        modulosRecomendados: modulosRecomendados.map((m) => m.id),
                        nivel: nivel ?? undefined,
                        bandaEstimada: bandaEstimada ?? undefined,
                        utm: getUtm(),
                        pageUrl: typeof window !== 'undefined' ? window.location.href : undefined,
                    },
                }),
            });

            succeeded = res.ok;
        } catch {
            succeeded = false;
        }

        if (!succeeded) {
            setStatus('error');
            setErrorMessage('No pudimos enviar tu diagnóstico. Intenta de nuevo o llámanos directamente.');
            return;
        }

        // Outside the try/catch above: the lead is already saved in the CRM
        // at this point, so a throw from analytics or navigation must never
        // be reported back to the visitor as a failed submission — that
        // would prompt a resubmit and create a duplicate lead.
        trackLead({ program: 'WEB_DIAGNOSTICO_2026', nivel });
        sessionStorage.removeItem(STORAGE_KEY);
        router.push('/gracias');
    }

    if (!hydrated) {
        return <div className="min-h-[40vh]" />;
    }

    return (
        <div className="max-w-2xl mx-auto">
            {/* Progress */}
            <div className="mb-10">
                <div className="flex justify-between text-xs font-mono text-graphite-warm/50 mb-2">
                    <span>
                        {isFormStep
                            ? 'Últimos datos'
                            : isPlanStep
                              ? 'Tu plan'
                              : `Pregunta ${step + 1} de ${totalSteps}`}
                    </span>
                    <span>
                        {Math.round(
                            (Math.min(step, totalSteps) / totalSteps) * 100,
                        )}
                        %
                    </span>
                </div>
                <div className="h-1.5 rounded-full bg-mist overflow-hidden">
                    <div
                        className="h-full bg-gold-soft transition-all duration-500 ease-out rounded-full"
                        style={{
                            width: `${(Math.min(step, totalSteps) / totalSteps) * 100}%`,
                        }}
                    />
                </div>
            </div>

            <div ref={stepRef}>
                {isQuestionStep && (
                    <div className="editorial-card p-8 md:p-10">
                        <h2 className="font-display text-2xl md:text-3xl font-medium text-ink mb-8 leading-snug">
                            {QUESTIONS[step].text}
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-3">
                            {ANSWER_OPTIONS.map((opt) => (
                                <button
                                    key={opt.value}
                                    type="button"
                                    onClick={() => answer(opt.value)}
                                    className="flex-1 rounded-xl border border-ink/10 px-6 py-4 font-display font-medium text-ink transition-all hover:border-gold-soft hover:bg-gold-soft/[0.06]"
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                        {step > 0 && (
                            <button
                                type="button"
                                onClick={() => setStep((s) => Math.max(0, s - 1))}
                                className="mt-6 text-sm text-graphite-warm/50 hover:text-graphite-warm transition-colors"
                            >
                                ← Volver
                            </button>
                        )}
                    </div>
                )}

                {isPlanStep && (
                    <div className="editorial-card p-8 md:p-10">
                        <p className="eyebrow-warm mb-4">Tu Action Plan</p>
                        {nivel ? (
                            <h2 className="font-display text-2xl md:text-3xl font-medium text-ink mb-2 leading-snug">
                                Tu negocio está en nivel{' '}
                                <span className="italic">{NIVEL_LABELS[nivel]}</span>
                            </h2>
                        ) : (
                            <h2 className="font-display text-2xl md:text-3xl font-medium text-ink mb-2 leading-snug">
                                Ya tienes una base sólida
                            </h2>
                        )}
                        {modulosRecomendados.length > 0 ? (
                            <>
                                <p className="text-graphite-warm/70 mb-8 leading-relaxed">
                                    Con base en tus respuestas, esto es lo que te recomendamos:
                                </p>
                                <div className="flex flex-col gap-4 mb-8">
                                    {modulosRecomendados.map((m) => (
                                        <div
                                            key={m.id}
                                            className="rounded-xl p-5"
                                            style={{ background: m.accentBg, border: `1px solid ${m.accentBorder}` }}
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-display font-semibold text-ink">{m.title}</h3>
                                                <span className="font-mono text-xs" style={{ color: m.accent }}>
                                                    {m.precios[0].rango}
                                                </span>
                                            </div>
                                            <p className="text-sm text-graphite-warm/70">{m.resultadoMedible}</p>
                                        </div>
                                    ))}
                                </div>
                                {bandaEstimada && (
                                    <div className="rounded-xl bg-sand p-5 text-center mb-8">
                                        <p className="text-xs text-graphite-warm/60 mb-1">Inversión estimada</p>
                                        <p className="font-display text-2xl font-semibold text-ink">
                                            ${bandaEstimada.min.toLocaleString('en-US')}–${bandaEstimada.max.toLocaleString('en-US')}
                                        </p>
                                    </div>
                                )}
                            </>
                        ) : (
                            <p className="text-graphite-warm/70 mb-8 leading-relaxed">
                                Tu negocio tiene buena base en los cuatro módulos. Podemos ayudarte con
                                mantenimiento y siguientes pasos de crecimiento.
                            </p>
                        )}
                        <button
                            type="button"
                            onClick={() => setStep((s) => s + 1)}
                            className="btn-warm-primary w-full sm:w-auto justify-center"
                        >
                            Recibir mi plan por escrito
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                )}

                {isFormStep && (
                    <form onSubmit={handleSubmit} className="editorial-card p-8 md:p-10">
                        <p className="eyebrow-warm mb-4">Últimos datos</p>
                        <h2 className="font-display text-2xl font-medium text-ink mb-8 leading-snug">
                            ¿A dónde te enviamos tu plan?
                        </h2>

                        <div className="flex flex-col gap-4 mb-6">
                            <input
                                type="text"
                                required
                                minLength={2}
                                maxLength={200}
                                placeholder="Tu nombre"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full rounded-lg border border-ink/15 px-4 py-3 text-ink focus:border-gold-soft focus:outline-none focus:ring-1 focus:ring-gold-soft"
                            />
                            <input
                                type="text"
                                placeholder="Nombre de tu negocio (opcional)"
                                value={businessName}
                                onChange={(e) => setBusinessName(e.target.value)}
                                className="w-full rounded-lg border border-ink/15 px-4 py-3 text-ink focus:border-gold-soft focus:outline-none focus:ring-1 focus:ring-gold-soft"
                            />
                            <input
                                type="tel"
                                required
                                placeholder="(210) 000-0000"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full rounded-lg border border-ink/15 px-4 py-3 text-ink focus:border-gold-soft focus:outline-none focus:ring-1 focus:ring-gold-soft"
                            />
                            <input
                                type="email"
                                placeholder="Email (opcional)"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-lg border border-ink/15 px-4 py-3 text-ink focus:border-gold-soft focus:outline-none focus:ring-1 focus:ring-gold-soft"
                            />
                            {/* Honeypot: campo oculto que solo un bot rellenaría. */}
                            <input
                                type="text"
                                name="company"
                                tabIndex={-1}
                                autoComplete="off"
                                className="absolute left-[-9999px] h-0 w-0 opacity-0"
                                aria-hidden="true"
                            />
                        </div>

                        <p className="text-sm text-graphite-warm/70 mb-3">
                            Acepto que DigiSenda AI me contacte para darme seguimiento sobre mi
                            diagnóstico y los servicios de Small Business Digital Enablement, por:
                        </p>
                        <div className="flex flex-wrap gap-3 mb-6">
                            {CHANNEL_OPTIONS.map((opt) => (
                                <label
                                    key={opt.value}
                                    className="flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 cursor-pointer select-none"
                                    style={
                                        channels.has(opt.value)
                                            ? { borderColor: '#C9A961', background: 'rgba(201,169,97,0.08)' }
                                            : undefined
                                    }
                                >
                                    <input
                                        type="checkbox"
                                        checked={channels.has(opt.value)}
                                        onChange={() => toggleChannel(opt.value)}
                                        className="sr-only"
                                    />
                                    {channels.has(opt.value) && <Check className="w-3.5 h-3.5 text-gold-soft" />}
                                    <span className="text-sm text-ink">{opt.label}</span>
                                </label>
                            ))}
                        </div>

                        {status === 'error' && errorMessage && (
                            <p className="text-sm text-red-600 mb-4">{errorMessage}</p>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="btn-warm-primary w-full justify-center disabled:opacity-60"
                        >
                            {status === 'submitting' ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <>
                                    Enviar mi plan
                                    <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </button>
                        <p className="text-xs text-graphite-warm/45 mt-4 text-center">
                            Nunca almacenamos documentos fiscales, datos bancarios ni identificaciones en este formulario.
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
}
