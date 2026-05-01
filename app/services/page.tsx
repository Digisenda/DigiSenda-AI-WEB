import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
    title: "Servicios | DigiSenda AI",
    description: "Ecosistema completo de servicios profesionales orquestados por DigiSenda AI.",
};

const services = [
    {
        emoji: '💼',
        name: 'DigiSenda AI Tax Service',
        desc: 'Servicio profesional de preparación de impuestos para individuos y pequeños negocios.',
        href: 'https://tax.digisendaai.com/',
        status: 'Operativo',
        accent: '#C9A961',
        accentBg: 'rgba(201,169,97,0.08)',
        accentBorder: 'rgba(201,169,97,0.25)',
    },
    {
        emoji: '🎯',
        name: 'SynapLeads',
        desc: 'Plataforma inteligente para captura, calificación y transferencia de leads en tiempo real.',
        href: 'https://www.synapleads.com/',
        status: 'Operativo',
        accent: '#3A8C9C',
        accentBg: 'rgba(58,140,156,0.08)',
        accentBorder: 'rgba(58,140,156,0.25)',
    },
    {
        emoji: '🏢',
        name: 'DigiSenda AI LLC Service',
        desc: 'Servicio integral para creación y organización legal de LLC en Estados Unidos.',
        href: null,
        status: 'Próximamente',
        accent: '#6F8F7B',
        accentBg: 'rgba(111,143,123,0.08)',
        accentBorder: 'rgba(111,143,123,0.25)',
    },
    {
        emoji: '🌐',
        name: 'DigiSenda AI Web Services',
        desc: 'Diseño y despliegue de sitios web y landing pages orientadas a conversión.',
        href: null,
        status: 'Próximamente',
        accent: '#3A8C9C',
        accentBg: 'rgba(58,140,156,0.08)',
        accentBorder: 'rgba(58,140,156,0.25)',
    },
    {
        emoji: '📈',
        name: 'DigiSenda AI Marketing Service',
        desc: 'Servicios de marketing digital orientados al crecimiento sostenible de negocios.',
        href: null,
        status: 'Próximamente',
        accent: '#5B4A6B',
        accentBg: 'rgba(91,74,107,0.08)',
        accentBorder: 'rgba(91,74,107,0.25)',
    },
];

const howItWorks = [
    { num: '1', title: 'Hub Central', desc: 'DigiSenda AI valida y orquesta todos los servicios del ecosistema' },
    { num: '2', title: 'Servicios Satélite', desc: 'Cada servicio opera de forma independiente con su propia web y procesos' },
    { num: '3', title: 'Especialización', desc: 'Cada servicio captura y gestiona sus propios leads de forma especializada' },
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
                        DigiSenda AI orquesta un ecosistema de servicios especializados. Cada servicio opera de forma independiente con su propia web y sistema de captura de leads.
                    </p>
                </header>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {services.map((svc) => (
                        <div
                            key={svc.name}
                            className="editorial-card p-8 flex flex-col group"
                            style={{ opacity: svc.href ? 1 : 0.80 }}
                        >
                            <div className="flex items-start justify-between mb-5">
                                <div
                                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                                    style={{ background: svc.accentBg, border: `1px solid ${svc.accentBorder}` }}
                                >
                                    {svc.emoji}
                                </div>
                                <span
                                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono"
                                    style={{
                                        background: svc.accentBg,
                                        border: `1px solid ${svc.accentBorder}`,
                                        color: svc.accent,
                                    }}
                                >
                                    {svc.status === 'Operativo' && '● '}{svc.status}
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

                            {svc.href ? (
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
                            ) : (
                                <span className="text-sm font-mono text-graphite-warm/40">
                                    Próximamente disponible
                                </span>
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
                        ¿Necesitas orientación sobre qué servicio es para ti?
                    </h3>
                    <p className="text-graphite-warm/65 mb-8 max-w-2xl mx-auto">
                        Contáctanos y te ayudamos a navegar el ecosistema
                    </p>
                    <Link href="/contact" className="btn-warm-primary inline-flex">
                        Contactar
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
