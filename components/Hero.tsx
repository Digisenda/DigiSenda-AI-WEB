'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, ChevronRight } from 'lucide-react';

const metrics = [
    { value: '100+', label: 'Emprendedores activos' },
    { value: '3 sem.', label: 'Tiempo prom. a LLC activa' },
    { value: '4-en-1', label: 'Servicios integrados' },
];

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set('.hero-anim', { y: 28, opacity: 0 });
            gsap.set('.hero-bg-grid', { opacity: 0 });
            gsap.set('.hero-glow-primary', { opacity: 0, scale: 0.75 });
            gsap.set('.hero-glow-secondary', { opacity: 0, scale: 0.75 });
            gsap.set('.hero-metric', { y: 16, opacity: 0 });

            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.to(['.hero-glow-primary', '.hero-glow-secondary'], {
                opacity: 1, scale: 1, duration: 2.2, stagger: 0.3,
            }, 0)
            .to('.hero-bg-grid', { opacity: 1, duration: 1.8 }, 0.1)
            .to('.hero-anim', { y: 0, opacity: 1, duration: 1, stagger: 0.11 }, 0.25)
            .to('.hero-metric', { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 }, 1.1);
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20"
        >
            {/* ── Background system ── */}
            <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
                {/* Primary glow */}
                <div className="hero-glow-primary absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)' }} />

                {/* Accent glow — offset right */}
                <div className="hero-glow-secondary absolute top-1/4 right-[8%] w-[420px] h-[420px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)' }} />

                {/* Precision grid */}
                <div className="hero-bg-grid absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)`,
                        backgroundSize: `4.5rem 4.5rem`,
                        maskImage: `radial-gradient(ellipse 85% 75% at 50% 35%, black, transparent)`,
                    }}
                />

                {/* Vertical accent beam */}
                <div className="absolute top-0 left-[55%] w-px h-2/3 bg-gradient-to-b from-transparent via-ai-cyan/8 to-transparent" />
            </div>

            {/* ── Content ── */}
            <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center">

                {/* Eyebrow badge */}
                <div className="hero-anim inline-flex items-center gap-2.5 px-4 py-1.5 mb-10 rounded-full border border-ai-cyan/20 bg-ai-cyan/[0.07] text-ai-cyan text-sm font-mono backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-ai-cyan animate-pulse-slow flex-shrink-0" />
                    <span>Ecosistema de servicios para emprendedores en EE.UU.</span>
                </div>

                {/* H1 — editorial break, gradient accent */}
                <h1 className="hero-anim font-space text-[2.8rem] sm:text-6xl md:text-[4.5rem] font-bold tracking-tight leading-[1.06] mb-6 text-white text-balance">
                    Tu negocio en<br className="hidden sm:block" />{' '}
                    <span className="text-gradient">Estados Unidos</span>,<br className="hidden sm:block" />{' '}
                    listo para crecer
                </h1>

                {/* Subtext — benefit-first, human tone */}
                <p className="hero-anim max-w-[38rem] text-lg md:text-xl text-silver/70 mb-10 text-balance leading-relaxed">
                    Formamos tu empresa, construimos tu presencia digital, traemos clientes y organizamos tus impuestos — todo desde un solo equipo.
                </p>

                {/* CTA pair */}
                <div className="hero-anim flex flex-col sm:flex-row items-center gap-3.5 w-full justify-center mb-16">
                    <a href="/services" className="btn-primary w-full sm:w-auto group">
                        Ver todos los servicios
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="/contact" className="btn-secondary w-full sm:w-auto group">
                        Hablar con el equipo
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Metrics bar */}
                <div className="w-full max-w-xl">
                    <div className="section-divider mb-7" />
                    <div className="grid grid-cols-3 gap-2">
                        {metrics.map((m, i) => (
                            <div key={i} className="hero-metric flex flex-col items-center gap-1.5 px-2">
                                <span className="font-space text-2xl md:text-3xl font-bold text-white tracking-tight leading-none">
                                    {m.value}
                                </span>
                                <span className="text-[0.65rem] md:text-xs text-silver/45 font-mono text-center leading-tight">
                                    {m.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom fade into next section */}
            <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#0B0F19] to-transparent pointer-events-none z-10" />
        </section>
    );
}
