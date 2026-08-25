import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { MODULOS } from '../../lib/enablement';

export const metadata: Metadata = {
    title: "Servicios | DigiSenda AI",
    description: "Ecosistema completo de servicios profesionales orquestados por DigiSenda AI.",
};

type ServiceCard = {
    name: string;
    desc: string;
    status: string;
    accent: string;
    accentBg: string;
    accentBorder: string;
} & (
    | { internal: true; href: string }
    | { internal: false; href: string }
);

const enablementServices: ServiceCard[] = MODULOS.map((m) => ({
    internal: true,
    name: m.title,
    desc: m.objetivo,
    href: `/services/${m.slug}`,
    status: 'Disponible',
    accent: m.accent,
    accentBg: m.accentBg,
    accentBorder: m.accentBorder,
}));

const externalServices: ServiceCard[] = [
    {
        internal: false,
        name: 'DigiSenda AI Tax Service',
        desc: 'Servicio profesional de preparación de impuestos para individuos y pequeños negocios.',
        href: 'https://tax.digisendaai.com/',
        status: 'Operativo',
        accent: '#C9A961',
        accentBg: 'rgba(201,169,97,0.08)',
        accentBorder: 'rgba(201,169,97,0.25)',
    },
    {
        internal: false,
        name: 'SynapLeads',
        desc: 'Plataforma inteligente para captura, calificación y transferencia de leads en tiempo real.',
        href: 'https://www.synapleads.com/',
        status: 'Operativo',
        accent: '#3A8C9C',
        accentBg: 'rgba(58,140,156,0.08)',
        accentBorder: 'rgba(58,140,156,0.25)',
    },
];

const services: ServiceCard[] = [...externalServices, ...enablementServices];

const howItWorks = [
    { num: '1', title: 'Hub Central', desc: 'DigiSenda AI valida y orquesta todos los servicios del ecosistema' },
    { num: '2', title: 'Servicios especializados', desc: 'Cada línea opera con su propio alcance, límites y resultado medible' },
    { num: '3', title: 'Diagnóstico primero', desc: 'Un diagnóstico de 5 minutos te dice qué módulo necesitas y con qué precio' },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-ivory pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <header className="text-center mb-16">
                    <p className="eyebrow-warm mb-6 flex items-center justify-center gap-2">
                        <span className="w-4 h-px bg-gold-soft/50" />
                        Ecosistema de Servicios
                        <span className="w-4 h-px bg-gold-soft/50" />
                    </p>
                    <h1 className="font-display text-4xl md:text-6xl font-medium text-ink mb-6 leading-[1.06] tracking-tight">
                        Soluciones especializadas<br className="hidden md:block" /> para tu negocio
                    </h1>
                    <p className="text-graphite-warm/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        DigiSenda AI orquesta un ecosistema de servicios especializados. Cada uno tiene su propio alcance, sus límites y un resultado medible.
                    </p>
                </header>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {services.map((svc) => (
                        <div
                            key={svc.name}
                            className="editorial-card p-8 flex flex-col group"
                        >
                            <div className="flex items-start justify-between mb-5">
                                <span
                                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono"
                                    style={{
                                        background: svc.accentBg,
                                        border: `1px solid ${svc.accentBorder}`,
                                        color: svc.accent,
                                    }}
                                >
                                    ● {svc.status}
                                </span>
                            </div>

                            <h3
                                className="font-display text-xl font-semibold text-ink mb-3 transition-colors group-hover:text-graphite-warm leading-snug"
                            >
                                {svc.name}
                            </h3>

                            <p className="text-graphite-warm/70 mb-6 leading-relaxed flex-1">
                                {svc.desc}
                            </p>

                            {svc.internal ? (
                                <Link
                                    href={svc.href}
                                    className="inline-flex items-center gap-2 text-sm font-mono transition-all duration-200"
                                    style={{ color: svc.accent }}
                                >
                                    Ver módulo
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            ) : (
                                <a
                                    href={svc.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-mono transition-all duration-200"
                                    style={{ color: svc.accent }}
                                >
                                    Visitar sitio web
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                {/* How it Works */}
                <div className="bg-sand rounded-[1.5rem] border border-ink/[0.06] p-8 md:p-12 mb-16">
                    <h2 className="font-display text-2xl md:text-3xl font-medium text-ink mb-10 text-center">
                        Cómo Funciona el Ecosistema
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {howItWorks.map((step) => (
                            <div key={step.num} className="text-center">
                                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                                    style={{ background: 'rgba(201,169,97,0.12)', border: '1px solid rgba(201,169,97,0.35)' }}>
                                    <span className="font-display font-semibold text-2xl text-gold-soft">{step.num}</span>
                                </div>
                                <h3 className="font-display font-semibold text-ink mb-2">{step.title}</h3>
                                <p className="text-graphite-warm/65 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <h3 className="font-display text-2xl font-medium text-ink mb-4">
                        ¿No sabes por dónde empezar?
                    </h3>
                    <p className="text-graphite-warm/65 mb-8 max-w-2xl mx-auto">
                        Un diagnóstico de 5 minutos te dice qué necesitas y con qué banda de precio.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/diagnostico" className="btn-warm-primary inline-flex">
                            Hacer mi diagnóstico
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/contact" className="btn-ink-ghost inline-flex">
                            Contactar
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
