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
        accentColor: '#60A5FA',
        accentBg: 'rgba(59,130,246,0.07)',
        accentBorder: 'rgba(59,130,246,0.18)',
    },
    {
        icon: TrendingUp,
        metric: '+45%',
        metricLabel: 'en tasa de conversión web',
        title: 'Web que convierte visitas en clientes',
        description: 'Negocio de servicios profesionales triplicó sus consultas entrantes tras lanzar su nueva identidad digital con DigiSenda.',
        tags: ['Web Services', 'Landing Page'],
        accentColor: '#22D3EE',
        accentBg: 'rgba(6,182,212,0.07)',
        accentBorder: 'rgba(6,182,212,0.18)',
    },
    {
        icon: ShieldCheck,
        metric: 'Sin estrés',
        metricLabel: 'en la primera declaración federal',
        title: 'Finanzas claras desde el inicio',
        description: 'Pequeño negocio organizó sus libros contables y presentó sus impuestos por primera vez sin complicaciones ni sorpresas.',
        tags: ['Tax Service', 'Bookkeeping'],
        accentColor: '#34D399',
        accentBg: 'rgba(16,185,129,0.07)',
        accentBorder: 'rgba(16,185,129,0.18)',
    },
];

export default function SuccessStories() {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.success-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 78%',
                },
                y: 44,
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
            className="py-28 px-6 relative z-10 w-full max-w-7xl mx-auto"
        >
            {/* Section header */}
            <div className="text-center mb-16">
                <p className="section-label mb-5 justify-center">
                    <span className="w-5 h-px bg-ai-cyan/40 inline-block" />
                    Resultados reales
                    <span className="w-5 h-px bg-ai-cyan/40 inline-block" />
                </p>
                <h2 className="text-3xl md:text-5xl font-space font-bold text-white mb-5 tracking-tight leading-tight">
                    Negocios que <span className="text-gradient">avanzan con nosotros</span>
                </h2>
                <p className="text-silver/60 max-w-xl mx-auto text-base leading-relaxed">
                    Ejemplos del impacto real que generamos para emprendedores y pequeños negocios en EE.UU.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
                {successStories.map((story, index) => (
                    <div
                        key={index}
                        className="success-card premium-card p-8 flex flex-col relative overflow-hidden group"
                        style={{
                            background: `linear-gradient(160deg, ${story.accentBg} 0%, rgba(255,255,255,0.02) 50%)`,
                            borderColor: story.accentBorder,
                        }}
                    >
                        {/* Top metric block */}
                        <div className="mb-7 pb-6 border-b border-white/[0.07]">
                            <div className="flex items-start gap-4">
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                                    style={{
                                        background: `rgba(255,255,255,0.05)`,
                                        border: `1px solid ${story.accentBorder}`,
                                        boxShadow: `0 0 16px ${story.accentBg}`,
                                    }}
                                >
                                    <story.icon className="w-4.5 h-4.5" style={{ color: story.accentColor }} />
                                </div>
                                <div>
                                    <p
                                        className="font-space text-3xl font-bold leading-none mb-1"
                                        style={{ color: story.accentColor }}
                                    >
                                        {story.metric}
                                    </p>
                                    <p className="text-xs text-silver/45 font-mono leading-tight">
                                        {story.metricLabel}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Body */}
                        <h3 className="font-space text-lg font-semibold text-white mb-3 leading-snug">
                            {story.title}
                        </h3>
                        <p className="text-silver/60 text-sm mb-6 leading-relaxed flex-1">
                            {story.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {story.tags.map((tag, i) => (
                                <span key={i} className="service-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Side glow on hover */}
                        <div
                            className="absolute -right-8 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
                            style={{ background: story.accentColor }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
