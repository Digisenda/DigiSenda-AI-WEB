'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';
import FloatingMockupStack from './FloatingMockupStack';

// Pilares cualitativos — sin métricas inventadas. Misma información que la
// versión anterior, recompuesta con tipografía editorial.
const pillars = [
    { label: 'Coordinado', desc: 'Un solo equipo, no cuatro proveedores' },
    { label: 'Profesional', desc: 'Legal, fiscal y digital con criterio' },
    { label: 'Seguro', desc: 'Cumplimiento estatal y federal sin sorpresas' },
];

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const reduced = typeof window !== 'undefined'
            && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced) return;

        const ctx = gsap.context(() => {
            gsap.set('.hero-anim', { y: 22, opacity: 0 });
            gsap.set('.hero-photo-wrap', { opacity: 0, scale: 0.98 });
            gsap.set('.hero-mockups', { opacity: 0, y: 14 });
            gsap.set('.hero-halo', { opacity: 0, scale: 0.85 });

            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.to('.hero-halo', { opacity: 1, scale: 1, duration: 1.6 }, 0)
                .to('.hero-anim', { y: 0, opacity: 1, duration: 0.85, stagger: 0.09 }, 0.15)
                .to('.hero-photo-wrap', { opacity: 1, scale: 1, duration: 1.1, ease: 'power2.out' }, 0.25)
                .to('.hero-mockups', { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' }, 0.55);

            // Parallax muy ligero — la foto se mueve más lento que las cards
            const onScroll = () => {
                const y = window.scrollY;
                if (y > 800) return; // ahorra trabajo fuera del hero
                gsap.to('.hero-photo-wrap', {
                    y: y * 0.06,
                    duration: 0.6,
                    ease: 'power2.out',
                    overwrite: 'auto',
                });
                gsap.to('.hero-mockups', {
                    y: y * 0.02,
                    duration: 0.6,
                    ease: 'power2.out',
                    overwrite: 'auto',
                });
            };
            window.addEventListener('scroll', onScroll, { passive: true });
            return () => window.removeEventListener('scroll', onScroll);
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20 bg-ivory"
        >
            {/* ── Atmósfera de fondo — claro warm ── */}
            <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
                {/* Halo dorado central, justo detrás de la foto */}
                <div
                    className="hero-halo halo-gold absolute top-[40%] right-[10%] w-[680px] h-[680px] rounded-full -translate-y-1/2"
                />
                {/* Blob terracotta diluido — esquina inferior izquierda */}
                <div
                    className="hero-halo halo-terracotta absolute bottom-[-15%] left-[-8%] w-[520px] h-[520px] rounded-full"
                />
                {/* Línea editorial de horizonte (separa zona limpia de zona arena) */}
                <div
                    className="absolute inset-0 opacity-60"
                    style={{
                        background: 'linear-gradient(180deg, #FBF8F2 0%, #F7F3EC 55%, #EDE5D6 100%)',
                    }}
                />
                {/* Trama editorial muy sutil */}
                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle, rgba(14,26,31,0.55) 1px, transparent 1px)',
                        backgroundSize: '3rem 3rem',
                        maskImage:
                            'radial-gradient(ellipse 60% 50% at 30% 35%, black, transparent)',
                        WebkitMaskImage:
                            'radial-gradient(ellipse 60% 50% at 30% 35%, black, transparent)',
                    }}
                />
            </div>

            {/* ── Contenido ── */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-[46%_54%] lg:gap-14 xl:gap-20 items-center">

                    {/* ── Columna izquierda: copy editorial ── */}
                    <div className="flex flex-col items-start">

                        {/* Eyebrow dorado */}
                        <div className="hero-anim eyebrow-warm mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-soft" />
                            <span>LLC · Web · Clientes · Tax</span>
                        </div>

                        {/* H1 editorial serif */}
                        <h1 className="hero-anim font-display text-[2.6rem] sm:text-5xl lg:text-[3.4rem] xl:text-[4rem] font-medium leading-[1.04] tracking-tight mb-6 text-ink text-pretty">
                            Tu negocio en{' '}
                            <span className="italic text-graphite-warm">Estados Unidos</span>,
                            <br className="hidden sm:block" />{' '}
                            hecho con{' '}
                            <span className="gold-underline italic">criterio</span>.
                        </h1>

                        {/* Subtítulo humanista */}
                        <p className="hero-anim text-base md:text-[1.05rem] text-graphite-warm/80 mb-8 leading-relaxed max-w-[32rem]">
                            Te acompañamos a abrir tu empresa, lanzarla en línea, atraer clientes y mantener tus números en orden. Un equipo profesional, no cuatro proveedores distintos.
                        </p>

                        {/* CTAs */}
                        <div className="hero-anim flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-12">
                            <a href="/services" className="btn-warm-primary group">
                                Ver cómo funciona
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="/contact" className="btn-ink-ghost group">
                                Hablar con un asesor
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        {/* Pilares cualitativos */}
                        <div className="hero-anim w-full">
                            <div className="section-divider mb-6" />
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                                {pillars.map((p, i) => (
                                    <div key={i} className="flex flex-col gap-1.5">
                                        <span className="font-display text-[0.95rem] font-semibold text-ink leading-none">
                                            {p.label}
                                        </span>
                                        <span className="text-[0.78rem] text-graphite-warm/65 leading-relaxed">
                                            {p.desc}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Columna derecha: composición humana 2.5D ── */}
                    <div className="relative mt-16 lg:mt-0">
                        {/* Foto editorial — placeholder SVG hasta reemplazo IA */}
                        <div className="hero-photo-wrap relative aspect-[4/5] w-full max-w-[560px] mx-auto rounded-[1.5rem] overflow-hidden shadow-card-premium">
                            <Image
                                src="/img/hero/founder-placeholder.svg"
                                alt="Emprendedor en su pequeño negocio en Estados Unidos"
                                fill
                                priority
                                unoptimized
                                sizes="(min-width: 1024px) 560px, 90vw"
                                className="object-cover"
                            />
                            {/* Borde dorado quirúrgico */}
                            <div
                                className="absolute inset-0 rounded-[1.5rem] pointer-events-none"
                                style={{ boxShadow: 'inset 0 0 0 1px rgba(201,169,97,0.30)' }}
                                aria-hidden="true"
                            />
                            {/* Vignette cálido inferior */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
                                style={{
                                    background:
                                        'linear-gradient(to top, rgba(14,26,31,0.32) 0%, transparent 100%)',
                                }}
                                aria-hidden="true"
                            />
                        </div>

                        {/* Cards 2.5D superpuestas — capa absoluta sobre la foto */}
                        <div
                            className="hero-mockups absolute inset-0 max-w-[640px] mx-auto"
                            style={{ pointerEvents: 'none' }}
                        >
                            <FloatingMockupStack />
                        </div>

                        {/* Etiqueta editorial discreta */}
                        <p className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-graphite-warm/40 mt-5 text-center">
                            Lanza · Estructura · Escala
                        </p>
                    </div>
                </div>
            </div>

            {/* Fade inferior hacia siguiente sección */}
            <div
                className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-10"
                style={{
                    background:
                        'linear-gradient(to top, var(--ivory) 0%, transparent 100%)',
                }}
                aria-hidden="true"
            />
        </section>
    );
}
