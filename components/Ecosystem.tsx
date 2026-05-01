'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Globe2, LineChart, FileText, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ecosystemData = [
    {
        num: '01',
        icon: Building2,
        title: 'Crear empresa',
        sub: 'LLC + EIN',
        desc: 'Registramos tu LLC en EE.UU., obtenemos tu EIN y te dejamos estructurado para operar desde el primer día.',
        href: 'https://llc.digisendaai.com/',
        accent: '#6F8F7B',          // sage
        accentBg: 'rgba(111,143,123,0.10)',
        accentBorder: 'rgba(111,143,123,0.28)',
        numColor: 'rgba(111,143,123,0.18)',
    },
    {
        num: '02',
        icon: Globe2,
        title: 'Presencia digital',
        sub: 'Web + Google Business',
        desc: 'Diseñamos tu sitio web profesional y optimizamos tu perfil de Google para que tus clientes te encuentren.',
        href: 'https://web.digisendaai.com/',
        accent: '#3A8C9C',          // cyan-controlled
        accentBg: 'rgba(58,140,156,0.10)',
        accentBorder: 'rgba(58,140,156,0.28)',
        numColor: 'rgba(58,140,156,0.18)',
    },
    {
        num: '03',
        icon: LineChart,
        title: 'Generación de clientes',
        sub: 'Marketing + Leads',
        desc: 'Activamos campañas y flujos que atraen y califican oportunidades reales para tu negocio.',
        href: 'https://business.digisendaai.com/',
        accent: '#5B4A6B',          // plum
        accentBg: 'rgba(91,74,107,0.10)',
        accentBorder: 'rgba(91,74,107,0.28)',
        numColor: 'rgba(91,74,107,0.18)',
    },
    {
        num: '04',
        icon: FileText,
        title: 'Finanzas e impuestos',
        sub: 'Taxes + Bookkeeping',
        desc: 'Mantenemos tus finanzas en orden y presentamos tus impuestos correctamente, sin sorpresas.',
        href: 'https://tax.digisendaai.com/',
        accent: '#C9A961',          // gold-soft
        accentBg: 'rgba(201,169,97,0.10)',
        accentBorder: 'rgba(201,169,97,0.28)',
        numColor: 'rgba(201,169,97,0.18)',
    },
];

export default function Ecosystem() {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const reduced = typeof window !== 'undefined'
            && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced) return;

        const ctx = gsap.context(() => {
            gsap.from('.eco-card', {
                scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
                y: 36,
                opacity: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power3.out',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="ecosystem"
            ref={sectionRef}
            className="py-28 px-6 bg-ivory relative overflow-hidden"
        >
            {/* Blob dorado decorativo — fondo */}
            <div
                className="absolute top-[-10%] right-[-8%] w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(closest-side, rgba(201,169,97,0.12) 0%, transparent 80%)' }}
                aria-hidden="true"
            />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="eyebrow-warm mb-5 flex items-center justify-center gap-2">
                        <span className="w-5 h-px bg-gold-soft/50 inline-block" />
                        Nuestro ecosistema
                        <span className="w-5 h-px bg-gold-soft/50 inline-block" />
                    </p>
                    <h2 className="font-display text-3xl md:text-5xl font-medium text-ink mb-5 tracking-tight leading-[1.08]">
                        Cuatro servicios,{' '}
                        <span className="italic text-graphite-warm">un mismo equipo</span>,<br className="hidden sm:block" />{' '}
                        una sola dirección.
                    </h2>
                    <p className="text-graphite-warm/65 max-w-lg mx-auto text-base leading-relaxed">
                        Puedes empezar por donde necesites. Todo está diseñado para trabajar junto.
                    </p>
                </div>

                {/* Cards grid */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {/* Connector line desktop */}
                    <div
                        className="hidden lg:block absolute top-[4.8rem] left-[12.5%] right-[12.5%] h-px pointer-events-none z-0"
                        style={{
                            background:
                                'linear-gradient(to right, rgba(111,143,123,0.30), rgba(58,140,156,0.30), rgba(91,74,107,0.30), rgba(201,169,97,0.30))',
                        }}
                        aria-hidden="true"
                    />

                    {ecosystemData.map((item, i) => (
                        <div
                            key={i}
                            className="eco-card editorial-card p-6 flex flex-col relative overflow-hidden group h-full z-10"
                        >
                            {/* Number — protagonista decorativo */}
                            <div
                                className="font-display text-5xl font-semibold leading-none mb-5 select-none"
                                style={{ color: item.numColor }}
                                aria-hidden="true"
                            >
                                {item.num}
                            </div>

                            {/* Icon */}
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                                style={{
                                    background: item.accentBg,
                                    border: `1px solid ${item.accentBorder}`,
                                }}
                            >
                                <item.icon className="w-4.5 h-4.5" style={{ color: item.accent }} strokeWidth={2} />
                            </div>

                            {/* Title */}
                            <h3 className="font-display text-base font-semibold text-ink mb-1 leading-snug">
                                {item.title}
                            </h3>

                            {/* Sub-label mono */}
                            <p
                                className="font-mono text-[0.58rem] uppercase tracking-[0.18em] mb-4"
                                style={{ color: item.accent }}
                            >
                                {item.sub}
                            </p>

                            {/* Description */}
                            <p className="text-sm text-graphite-warm/70 leading-relaxed mt-auto mb-5">
                                {item.desc}
                            </p>

                            {/* CTA link */}
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-mono transition-all duration-300 opacity-50 group-hover:opacity-100 group-hover:gap-2"
                                style={{ color: item.accent }}
                            >
                                Conocer más
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>

                            {/* Bottom accent line */}
                            <div
                                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out rounded-b-xl"
                                style={{ background: `linear-gradient(to right, ${item.accent}80, transparent)` }}
                                aria-hidden="true"
                            />

                            {/* Connector dot desktop */}
                            {i < ecosystemData.length - 1 && (
                                <div
                                    className="hidden lg:flex absolute -right-3 top-[4.8rem] -translate-y-1/2 z-10 w-5 h-5 rounded-full items-center justify-center"
                                    style={{
                                        background: '#F7F3EC',
                                        border: `1px solid ${item.accentBorder}`,
                                    }}
                                    aria-hidden="true"
                                >
                                    <div
                                        className="w-1.5 h-1.5 rounded-full"
                                        style={{ background: item.accent, opacity: 0.55 }}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
