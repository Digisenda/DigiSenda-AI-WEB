'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { getUtm } from '../lib/utm';

const PROGRAM_TYPES = [
    { value: 'INSTITUTIONAL_BEXAR_SBED', label: 'Bexar County SBED / SBOC' },
    { value: 'INSTITUTIONAL_UTSA_SBDC', label: 'UTSA Small Business Development Center' },
    { value: 'INSTITUTIONAL_NONPROFIT', label: 'Organización sin fines de lucro' },
    { value: 'INSTITUTIONAL_COHORT', label: 'Cohorte / programa de aceleración' },
    { value: 'INSTITUTIONAL_OTHER', label: 'Otro' },
];

const CHANNEL_OPTIONS: { value: 'EMAIL' | 'CALL' | 'WHATSAPP'; label: string }[] = [
    { value: 'EMAIL', label: 'Email' },
    { value: 'CALL', label: 'Llamada' },
    { value: 'WHATSAPP', label: 'WhatsApp' },
];

export default function ProgramasForm() {
    const router = useRouter();

    const [organizationName, setOrganizationName] = useState('');
    const [programType, setProgramType] = useState(PROGRAM_TYPES[0].value);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [notes, setNotes] = useState('');
    const [channels, setChannels] = useState<Set<string>>(new Set(['EMAIL']));
    const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
                    program: programType,
                    organizationName,
                    intake: {
                        pageUrl: typeof window !== 'undefined' ? window.location.href : undefined,
                        utm: getUtm(),
                        modulosRecomendados: notes ? [notes.slice(0, 200)] : undefined,
                    },
                }),
            });

            if (!res.ok) {
                throw new Error('request_failed');
            }

            router.push('/gracias');
        } catch {
            setStatus('error');
            setErrorMessage('No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos a admin@digisendaai.com.');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="editorial-card p-8 md:p-10 max-w-xl mx-auto">
            <div className="flex flex-col gap-4 mb-6">
                <input
                    type="text"
                    required
                    minLength={2}
                    maxLength={200}
                    placeholder="Nombre de la entidad / programa"
                    value={organizationName}
                    onChange={(e) => setOrganizationName(e.target.value)}
                    className="w-full rounded-lg border border-ink/15 px-4 py-3 text-ink focus:border-gold-soft focus:outline-none focus:ring-1 focus:ring-gold-soft"
                />
                <select
                    value={programType}
                    onChange={(e) => setProgramType(e.target.value)}
                    className="w-full rounded-lg border border-ink/15 px-4 py-3 text-ink focus:border-gold-soft focus:outline-none focus:ring-1 focus:ring-gold-soft"
                >
                    {PROGRAM_TYPES.map((p) => (
                        <option key={p.value} value={p.value}>
                            {p.label}
                        </option>
                    ))}
                </select>
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
                <textarea
                    placeholder="Cuéntanos sobre tu programa (población, número de participantes, alcance esperado) — opcional"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
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
                Acepto que DigiSenda AI me contacte sobre esta oportunidad institucional, por:
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
                        Enviar solicitud
                        <ArrowRight className="w-4 h-4" />
                    </>
                )}
            </button>
        </form>
    );
}
