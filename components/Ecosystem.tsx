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
        accentBg: 'rgba(59,130,246,0.10)',
        accentBorder: 'rgba(59,130,246,0.22)',
        iconColor: '#60A5FA',
        glowColor: 'rgba(59,130,246,0.18)',
        numColor: 'rgba(96,165,250,0.18)',
    },
    {
        num: '02',
        icon: Globe2,
        title: 'Presencia digital',
        sub: 'Web + Google Business',
        desc: 'Diseñamos tu sitio web profesional y optimizamos tu perfil de Google para que tus clientes te encuentren.',
        href: 'https://web.digisendaai.com/',
        accentBg: 'rgba(6,182,212,0.10)',
        accentBorder: 'rgba(6,182,212,0.22)',
        iconColor: '#22D3EE',
        glowColor: 'rgba(6,182,212,0.18)',
        numColor: 'rgba(34,211,238,0.18)',
    },
    {
        num: '03',
        icon: LineChart,
        title: 'Generación de clientes',
        sub: 'Marketing + Leads',
        desc: 'Activamos campañas y flujos que atraen y califican oportunidades reales para tu negocio.',
        href: 'https://business.digisendaai.com/',
        accentBg: 'rgba(139,92,246,0.10)',
        accentBorder: 'rgba(139,92,246,0.22)',
        iconColor: '#A78BFA',
        glowColor: 'rgba(139,92,246,0.18)',
        numColor: 'rgba(167,139,250,0.18)',
    },
    {
        num: '04',
        icon: FileText,
        title: 'Finanzas e impuestos',
        sub: 'Taxes + Bookkeeping',
        desc: 'Mantenemos tus finanzas en orden y presentamos tus impuestos correctamente, sin sorpresas.',
        href: 'https://tax.digisendaai.com/',
        accentBg: 'rgba(16,185,129,0.08)',
        accentBorder: 'rgba(16,185,129,0.20)',
        iconColor: '#34D399',
        glowColor: 'rgba(16,185,129,0.15)',
        numColor: 'rgba(52,211,153,0.18)',
    },
];

export default function Ecosystem() {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.eco-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 78%',
                },
                y: 40,
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
            className="py-28 px-6 relative z-10 w-full max-w-7xl mx-auto"
        >
            {/* Section header */}
            <div className="text-center mb-16">
                <p className="section-label mb-5 justify-center">
                    <span className="w-5 h-px bg-ai-cyan/40 inline-block" />
                    Nuestro ecosistema
                    <span className="w-5 h-px bg-ai-cyan/40 inline-block" />
                </p>
                <h2 className="text-3xl md:text-5xl font-space font-bold text-white mb-5 tracking-tight leading-tight">
                    Cuatro servicios, un mismo equipo,{' '}
                    <span className="text-gradient">una sola dirección</span>
                </h2>
                <p className="text-silver/60 max-w-lg mx-auto text-base leading-relaxed">
                    Puedes empezar por donde necesites. Todo está diseñado para trabajar junto.
                </p>
            </div>

            {/* Cards grid */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                {/* Connector line (desktop only) — sits between cards */}
                <div className="hidden lg:block absolute top-[4.5rem] left-[12.5%] right-[12.5%] h-px pointer-events-none z-0"
                    style={{ background: 'linear-gradient(to right, rgba(96,165,250,0.15), rgba(34,211,238,0.2), rgba(167,139,250,0.2), rgba(52,211,153,0.15))' }}
                />

                {ecosystemData.map((item, i) => (
                    <div
                        key={i}
                        className="eco-card premium-card p-6 flex flex-col relative overflow-hidden group h-full z-10"
                        style={{
                            background: `linear-gradient(155deg, ${item.accentBg} 0%, rgba(255,255,255,0.015) 60%)`,
                            borderColor: item.accentBorder,
                        }}
                    >
                        {/* Step number — prominent, styled */}
                        <div
                            className="font-space text-5xl font-bold leading-none mb-5 select-none"
                            style={{ color: item.numColor }}
                            aria-hidden="true"
                        >
                            {item.num}
                        </div>

                        {/* Icon */}
                        <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                            style={{
                                background: `rgba(255,255,255,0.05)`,
                                border: `1px solid ${item.accentBorder}`,
                                boxShadow: `0 0 18px ${item.glowColor}`,
                            }}
                        >
                            <item.icon className="w-4.5 h-4.5" style={{ color: item.iconColor }} />
                        </div>

                        {/* Title */}
                        <h3 className="font-space text-base font-semibold text-white mb-1 leading-snug">
                            {item.title}
                        </h3>

                        {/* Service sub-label */}
                        <p
                            className="font-mono text-[0.57rem] uppercase tracking-[0.16em] mb-4"
                            style={{ color: item.iconColor, opacity: 0.72 }}
                        >
                            {item.sub}
                        </p>

                        {/* Description */}
                        <p className="text-sm text-silver/58 leading-relaxed mt-auto mb-5">
                            {item.desc}
                        </p>

                        {/* CTA link */}
                        <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-mono transition-all duration-300 opacity-40 group-hover:opacity-90 group-hover:gap-2"
                            style={{ color: item.iconColor }}
                        >
                            Conocer más
                            <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>

                        {/* Bottom accent line — extends on hover */}
                        <div
                            className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out"
                            style={{ background: `linear-gradient(to right, ${item.iconColor}60, transparent)` }}
                        />

                        {/* Connector dot (desktop, between cards) */}
                        {i < ecosystemData.length - 1 && (
                            <div
                                className="hidden lg:flex absolute -right-3 top-[4.5rem] -translate-y-1/2 z-10 w-5 h-5 rounded-full items-center justify-center"
                                style={{ background: '#0B0F19', border: `1px solid ${item.accentBorder}` }}
                                aria-hidden="true"
                            >
                                <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.iconColor, opacity: 0.5 }} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
