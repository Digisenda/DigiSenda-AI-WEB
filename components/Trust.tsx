'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Brain, Users, Server, ArrowRight, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const trustPillars = [
    {
        icon: Brain,
        stat: 'Automatizado',
        title: 'Tecnología real',
        desc: 'Sistemas y flujos optimizados para que tu negocio opere con menos fricción y más velocidad.',
        color: '#60A5FA',
        bg: 'rgba(59,130,246,0.06)',
        border: 'rgba(59,130,246,0.14)',
    },
    {
        icon: Users,
        stat: 'Multidisciplinario',
        title: 'Equipo experto',
        desc: 'Especialistas en legal, desarrollo web, marketing digital y finanzas trabajando en conjunto.',
        color: '#22D3EE',
        bg: 'rgba(6,182,212,0.06)',
        border: 'rgba(6,182,212,0.14)',
    },
    {
        icon: Shield,
        stat: '100% compliance',
        title: 'Cumplimiento legal',
        desc: 'LLC, EIN, BOI reporting y declaración de taxes estatal/federal. Sin errores, sin sorpresas.',
        color: '#A78BFA',
        bg: 'rgba(139,92,246,0.06)',
        border: 'rgba(139,92,246,0.14)',
    },
    {
        icon: Server,
        stat: 'Vercel + GCP',
        title: 'Infraestructura sólida',
        desc: 'Hosting de alto rendimiento, bases de datos seguras y Google Workspace completamente configurado.',
        color: '#34D399',
        bg: 'rgba(16,185,129,0.06)',
        border: 'rgba(16,185,129,0.14)',
    },
];

const ctaChecklist = [
    'LLC activa en aproximadamente 3 semanas',
    'Todos los servicios coordinados desde un solo equipo',
    'Soporte continuo mientras tu negocio crece',
];

export default function Trust() {
    const trustRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.trust-card', {
                scrollTrigger: {
                    trigger: '.trust-grid',
                    start: 'top 82%',
                },
                y: 40,
                opacity: 0,
                stagger: 0.13,
                duration: 0.8,
                ease: 'power3.out',
            });

            gsap.from('.cta-block', {
                scrollTrigger: {
                    trigger: '.cta-block',
                    start: 'top 85%',
                },
                y: 32,
                opacity: 0,
                duration: 0.9,
                ease: 'power3.out',
            });
        }, trustRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={trustRef} className="py-28 px-6 relative z-10 w-full max-w-7xl mx-auto">

            {/* Section header */}
            <div className="text-center mb-16">
                <p className="section-label mb-5 justify-center">
                    <span className="w-5 h-px bg-ai-cyan/40 inline-block" />
                    Por qué DigiSenda
                    <span className="w-5 h-px bg-ai-cyan/40 inline-block" />
                </p>
                <h2 className="text-3xl md:text-5xl font-space font-bold text-white mb-5 tracking-tight leading-tight">
                    Una base <span className="text-gradient">sólida para crecer</span>
                </h2>
                <p className="text-silver/60 max-w-xl mx-auto text-base leading-relaxed">
                    No solo herramientas. Un equipo que entiende tu negocio y trabaja para que avances.
                </p>
            </div>

            {/* Trust pillars grid */}
            <div className="trust-grid grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {trustPillars.map((pillar, i) => (
                    <div
                        key={i}
                        className="trust-card premium-card p-7 flex flex-col relative group"
                        style={{
                            background: `linear-gradient(145deg, ${pillar.bg} 0%, rgba(255,255,255,0.015) 100%)`,
                            borderColor: pillar.border,
                        }}
                    >
                        {/* Icon */}
                        <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                            style={{
                                background: `rgba(255,255,255,0.05)`,
                                border: `1px solid ${pillar.border}`,
                                boxShadow: `0 0 16px ${pillar.bg}`,
                            }}
                        >
                            <pillar.icon className="w-4.5 h-4.5" style={{ color: pillar.color }} />
                        </div>

                        {/* Stat */}
                        <p className="font-mono text-[0.6rem] uppercase tracking-[0.15em] mb-2" style={{ color: pillar.color, opacity: 0.8 }}>
                            {pillar.stat}
                        </p>

                        {/* Title */}
                        <h3 className="font-space font-semibold text-white mb-2.5 text-base leading-snug">
                            {pillar.title}
                        </h3>

                        {/* Desc */}
                        <p className="text-sm text-silver/55 leading-relaxed">
                            {pillar.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* ── Final CTA ── */}
            <div className="cta-block mt-24 relative overflow-hidden rounded-[2.5rem] border border-white/[0.09]"
                style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(6,182,212,0.08) 50%, rgba(11,15,25,0) 100%)' }}
            >
                {/* Top shimmer line */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ai-cyan/40 to-transparent" />

                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)' }} />

                <div className="relative z-10 py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Left: headline + checklist */}
                    <div className="flex-1 max-w-lg">
                        <h2 className="text-3xl md:text-4xl font-space font-bold text-white mb-4 tracking-tight leading-tight">
                            ¿Listo para dar<br className="hidden sm:block" /> el primer paso?
                        </h2>
                        <p className="text-silver/60 text-base mb-8 leading-relaxed">
                            Cuéntanos tu situación. Construimos juntos el camino más eficiente para tu negocio en EE.UU.
                        </p>
                        <ul className="space-y-2.5">
                            {ctaChecklist.map((item, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-ai-cyan flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-silver/70">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: buttons */}
                    <div className="flex flex-col gap-3.5 w-full md:w-auto md:min-w-[200px]">
                        <a
                            href="/services"
                            className="px-8 py-4 bg-neural-blue hover:bg-neural-blue-light text-white font-semibold rounded-full flex items-center justify-center gap-2 group transition-all duration-300 shadow-[0_0_24px_rgba(37,99,235,0.3)] hover:shadow-[0_0_32px_rgba(37,99,235,0.5)]"
                        >
                            Crear mi LLC
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/contact"
                            className="btn-secondary px-8 py-4 rounded-full flex items-center justify-center gap-2"
                        >
                            Hablar con el equipo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
