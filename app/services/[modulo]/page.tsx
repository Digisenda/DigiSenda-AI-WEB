import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Check, X } from 'lucide-react';
import { MODULOS, getModulo } from '../../../lib/enablement';

export function generateStaticParams() {
    return MODULOS.map((m) => ({ modulo: m.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ modulo: string }>;
}): Promise<Metadata> {
    const { modulo: slug } = await params;
    const modulo = getModulo(slug);
    if (!modulo) return {};
    return {
        title: `${modulo.title} | Small Business Digital Enablement | DigiSenda AI`,
        description: modulo.objetivo,
    };
}

export default async function ModuloPage({
    params,
}: {
    params: Promise<{ modulo: string }>;
}) {
    const { modulo: slug } = await params;
    const modulo = getModulo(slug);
    if (!modulo) notFound();

    const Icon = modulo.icon;

    return (
        <div className="min-h-screen bg-ivory">
            {/* Hero */}
            <header className="pt-32 pb-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="eyebrow-warm mb-6 flex items-center justify-center gap-2">
                        <span className="w-4 h-px" style={{ background: modulo.accent }} />
                        Módulo {modulo.num} · Small Business Digital Enablement
                        <span className="w-4 h-px" style={{ background: modulo.accent }} />
                    </p>
                    <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                        style={{ background: modulo.accentBg, border: `1px solid ${modulo.accentBorder}` }}
                    >
                        <Icon className="w-8 h-8" style={{ color: modulo.accent }} />
                    </div>
                    <h1 className="font-display text-4xl md:text-6xl font-medium text-ink mb-4 leading-[1.06] tracking-tight">
                        {modulo.title}
                    </h1>
                    <p className="font-mono text-sm uppercase tracking-[0.18em] mb-6" style={{ color: modulo.accent }}>
                        {modulo.sub}
                    </p>
                    <p className="text-graphite-warm/70 text-lg md:text-xl leading-relaxed">
                        {modulo.objetivo}
                    </p>
                </div>
            </header>

            {/* Qué incluye / qué NO incluye */}
            <section className="py-16 px-6 bg-sand">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    <div className="editorial-card p-8">
                        <h2 className="font-display text-xl font-semibold text-ink mb-5">
                            Qué incluye
                        </h2>
                        <ul className="flex flex-col gap-3">
                            {modulo.servicios.map((s) => (
                                <li key={s} className="flex items-start gap-3">
                                    <Check className="w-4 h-4 mt-1 shrink-0" style={{ color: modulo.accent }} />
                                    <span className="text-graphite-warm/80 leading-relaxed">{s}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="editorial-card p-8">
                        <h2 className="font-display text-xl font-semibold text-ink mb-5">
                            Qué NO incluye
                        </h2>
                        <ul className="flex flex-col gap-3">
                            {modulo.limites.map((l) => (
                                <li key={l} className="flex items-start gap-3">
                                    <X className="w-4 h-4 mt-1 shrink-0 text-graphite-warm/40" />
                                    <span className="text-graphite-warm/70 leading-relaxed">{l}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Resultado medible + precio */}
            <section className="py-16 px-6 bg-bone">
                <div className="max-w-4xl mx-auto">
                    <div className="editorial-card p-8 md:p-12 text-center mb-10">
                        <p className="eyebrow-warm mb-4">Resultado medible</p>
                        <p className="font-display text-2xl md:text-3xl font-medium text-ink leading-snug">
                            {modulo.resultadoMedible}
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {modulo.precios.map((p) => (
                            <div
                                key={p.label}
                                className="rounded-2xl p-6 text-center"
                                style={{ background: modulo.accentBg, border: `1px solid ${modulo.accentBorder}` }}
                            >
                                <p className="text-sm text-graphite-warm/70 mb-1">{p.label}</p>
                                <p className="font-display text-2xl font-semibold text-ink">
                                    Desde {p.rango.split('–')[0]}
                                </p>
                                <p className="font-mono text-xs text-graphite-warm/50 mt-1">{p.rango}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-graphite-warm/50 text-xs mt-6 font-mono">
                        Dominio, correo, cuentas y suscripciones quedan siempre a tu nombre — nunca de DigiSenda.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-ink text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="font-display text-3xl md:text-4xl font-medium text-bone mb-4 leading-tight">
                        ¿Este módulo es lo que tu negocio necesita?
                    </h2>
                    <p className="text-bone/60 mb-8 leading-relaxed">
                        Un diagnóstico de 5 minutos te dice exactamente qué te falta y con qué banda de precio.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/diagnostico" className="btn-warm-primary inline-flex">
                            Hacer mi diagnóstico
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/contact"
                            className="btn-ink-ghost inline-flex"
                            style={{ color: '#F7F3EC', borderColor: 'rgba(251,248,242,0.30)' }}
                        >
                            Hablar con el equipo
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
