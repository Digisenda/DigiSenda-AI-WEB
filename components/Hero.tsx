'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, ChevronRight } from 'lucide-react';
import HeroEcosystemVisual from './HeroEcosystemVisual';

// Qualitative pillars — no numeric metrics
const pillars = [
    { label: 'Coordinado', desc: 'Un solo equipo, no cuatro proveedores' },
    { label: 'Profesional', desc: 'Legal, fiscal y digital con criterio' },
    { label: 'Seguro', desc: 'Cumplimiento estatal y federal sin sorpresas' },
];

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set('.hero-anim', { y: 22, opacity: 0 });
            gsap.set('.hero-bg-grid', { opacity: 0 });
            gsap.set('.hero-glow-primary', { opacity: 0, scale: 0.8 });
            gsap.set('.hero-visual', { opacity: 0, x: 18 });

            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.to('.hero-glow-primary', { opacity: 1, scale: 1, duration: 2, }, 0)
                .to('.hero-bg-grid', { opacity: 1, duration: 1.6 }, 0.1)
                .to('.hero-anim', { y: 0, opacity: 1, duration: 0.85, stagger: 0.1 }, 0.2)
                .to('.hero-visual', { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }, 0.5);
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12"
        >
            {/* ── Background ── */}
            <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
                {/* Primary glow */}
                <div
                    className="hero-glow-primary absolute top-[35%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)' }}
                />

                {/* Gold warm accent — top-right, very subtle */}
                <div
                    className="absolute -top-20 right-0 w-[45%] h-[55%] rounded-full"
                    style={{ background: 'radial-gradient(ellipse, rgba(212,168,83,0.05) 0%, transparent 65%)' }}
                />

                {/* Precision grid */}
                <div
                    className="hero-bg-grid absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)`,
                        backgroundSize: `5rem 5rem`,
                        maskImage: `radial-gradient(ellipse 90% 80% at 30% 40%, black, transparent)`,
                    }}
                />
            </div>

            {/* ── Content ── */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-[48%_52%] lg:gap-12 xl:gap-16 items-center">

                    {/* ── Left column: copy ── */}
                    <div className="flex flex-col items-start">

                        {/* Eyebrow badge */}
                        <div className="hero-anim inline-flex items-center gap-2.5 px-4 py-1.5 mb-8 rounded-full border border-ai-cyan/20 bg-ai-cyan/[0.07] text-ai-cyan text-sm font-mono backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-ai-cyan animate-pulse-slow flex-shrink-0" />
                            <span>Un solo equipo. Cuatro servicios. Tu negocio en EE.UU.</span>
                        </div>

                        {/* H1 */}
                        <h1 className="hero-anim font-space text-[2.5rem] sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold tracking-tight leading-[1.06] mb-5 text-white text-pretty">
                            Tu negocio en<br className="hidden sm:block" />{' '}
                            <span className="text-gradient">Estados Unidos</span>,{' '}
                            hecho bien{' '}
                            <br className="hidden xl:block" />
                            desde el primer día.
                        </h1>

                        {/* Subtext */}
                        <p className="hero-anim text-base md:text-lg text-silver/65 mb-9 leading-relaxed max-w-[30rem]">
                            Te acompañamos a abrir tu empresa, lanzarla en línea, atraer clientes y mantener tus números en orden. Un equipo profesional, no cuatro proveedores distintos.
                        </p>

                        {/* CTAs */}
                        <div className="hero-anim flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-10">
                            <a href="/services" className="btn-primary group sm:w-auto">
                                Ver cómo funciona
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="/contact" className="btn-secondary group sm:w-auto">
                                Hablar con un asesor
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        {/* Qualitative pillars — replaces numeric metrics */}
                        <div className="hero-anim w-full">
                            <div className="section-divider mb-6" />
                            {/* Mobile: 1 col stacked for legibility. sm+: 3 cols */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5">
                                {pillars.map((p, i) => (
                                    <div key={i} className="flex flex-col gap-1.5">
                                        <span className="font-space text-sm font-semibold text-white leading-none">
                                            {p.label}
                                        </span>
                                        <span className="text-xs text-silver/60 font-mono leading-relaxed">
                                            {p.desc}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Right column: Ecosystem Command Visual ── */}
                    <div className="hero-visual mt-14 lg:mt-0">
                        <HeroEcosystemVisual />
                    </div>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0F19] to-transparent pointer-events-none z-10" />
        </section>
    );
}
