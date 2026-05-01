'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Zap, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const successStories = [
    {
        icon: Zap,
        metric: '3 semanas',
        metricLabel: 'de consulta inicial a LLC activa',
        title: 'LLC en tiempo récord',
        description: 'Emprendedor de México formó su LLC en Florida, obtuvo su EIN y abrió cuenta bancaria en menos de un mes, sin salir de su país.',
        tags: ['LLC Service', 'EIN'],
        accent: '#6F8F7B',          // sage
        accentBg: 'rgba(111,143,123,0.08)',
        accentBorder: 'rgba(111,143,123,0.22)',
    },
    {
        icon: TrendingUp,
        metric: '+45%',
        metricLabel: 'en consultas entrantes',
        title: 'Web que convierte visitas en clientes',
        description: 'Negocio de servicios profesionales triplicó sus consultas entrantes tras lanzar su nueva identidad digital con DigiSenda.',
        tags: ['Web Services', 'Landing Page'],
        accent: '#3A8C9C',          // cyan-controlled
        accentBg: 'rgba(58,140,156,0.08)',
        accentBorder: 'rgba(58,140,156,0.22)',
    },
    {
        icon: ShieldCheck,
        metric: 'Sin estrés',
        metricLabel: 'en la primera declaración federal',
        title: 'Finanzas claras desde el inicio',
        description: 'Pequeño negocio organizó sus libros contables y presentó sus impuestos por primera vez sin complicaciones ni sorpresas.',
        tags: ['Tax Service', 'Bookkeeping'],
        accent: '#C9A961',          // gold-soft
        accentBg: 'rgba(201,169,97,0.08)',
        accentBorder: 'rgba(201,169,97,0.22)',
    },
];

export default function SuccessStories() {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const reduced = typeof window !== 'undefined'
            && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced) return;

        const ctx = gsap.context(() => {
            gsap.from('.success-card', {
                scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
                y: 40,
                opacity: 0,
                stagger: 0.14,
                duration: 0.85,
                ease: 'power3.out',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="success-stories"
            ref={sectionRef}
            className="py-28 px-6 bg-sand relative overflow-hidden"
        >
            {/* Blob terracotta — decorativo */}
            <div
                className="absolute bottom-[-12%] left-[-6%] w-[420px] h-[420px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(closest-side, rgba(199,111,74,0.10) 0%, transparent 80%)' }}
                aria-hidden="true"
            />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="eyebrow-warm mb-5 flex items-center justify-center gap-2">
                        <span className="w-5 h-px bg-gold-soft/50 inline-block" />
                        Resultados reales
                        <span className="w-5 h-px bg-gold-soft/50 inline-block" />
                    </p>
                    <h2 className="font-display text-3xl md:text-5xl font-medium text-ink mb-5 tracking-tight leading-[1.08]">
                        Negocios que{' '}
                        <span className="italic text-graphite-warm">avanzan con nosotros</span>
                    </h2>
                    <p className="text-graphite-warm/65 max-w-xl mx-auto text-base leading-relaxed">
                        Ejemplos del impacto real que generamos para emprendedores y pequeños negocios en EE.UU.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                    {successStories.map((story, index) => (
                        <div
                            key={index}
                            className="success-card editorial-card p-8 flex flex-col relative overflow-hidden group"
                        >
                            {/* Metric block */}
                            <div
                                className="mb-7 pb-6"
                                style={{ borderBottom: `1px solid ${story.accentBorder}` }}
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                                        style={{
                                            background: story.accentBg,
                                            border: `1px solid ${story.accentBorder}`,
                                        }}
                                    >
                                        <story.icon className="w-4.5 h-4.5" style={{ color: story.accent }} strokeWidth={2} />
                                    </div>
                                    <div>
                                        <p
                                            className="font-display text-3xl font-semibold leading-none mb-1"
                                            style={{ color: story.accent }}
                                        >
                                            {story.metric}
                                        </p>
                                        <p className="text-xs text-graphite-warm/55 font-mono leading-tight">
                                            {story.metricLabel}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Body */}
                            <h3 className="font-display text-lg font-semibold text-ink mb-3 leading-snug">
                                {story.title}
                            </h3>
                            <p className="text-graphite-warm/70 text-sm mb-6 leading-relaxed flex-1">
                                {story.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {story.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 rounded-full text-xs font-mono border"
                                        style={{
                                            color: story.accent,
                                            borderColor: story.accentBorder,
                                            background: story.accentBg,
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Bottom accent line */}
                            <div
                                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out rounded-b-[1.25rem]"
                                style={{ background: `linear-gradient(to right, ${story.accent}70, transparent)` }}
                                aria-hidden="true"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
