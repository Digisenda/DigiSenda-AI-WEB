'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Layers, Rocket, BarChart3 } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        num: '01',
        icon: Search,
        title: 'Diagnóstico inicial',
        desc: 'Entendemos tu situación, tus objetivos y tu urgencia. Trazamos el plan correcto para tu caso.',
        detail: 'Llamada sin costo',
        accent: '#6F8F7B',          // sage
        accentBg: 'rgba(111,143,123,0.10)',
        accentBorder: 'rgba(111,143,123,0.26)',
        numColor: 'rgba(111,143,123,0.20)',
    },
    {
        num: '02',
        icon: Layers,
        title: 'Tu LLC, lista para operar',
        desc: 'Formamos tu LLC, obtenemos tu EIN y te dejamos listo para recibir pagos y abrir cuenta bancaria.',
        detail: 'LLC + EIN coordinados',
        accent: '#3A8C9C',          // cyan-controlled
        accentBg: 'rgba(58,140,156,0.10)',
        accentBorder: 'rgba(58,140,156,0.26)',
        numColor: 'rgba(58,140,156,0.20)',
    },
    {
        num: '03',
        icon: Rocket,
        title: 'Tu marca, visible para tus clientes',
        desc: 'Construimos tu sitio web, tu perfil de Google y lanzamos tu primera campaña para atraer clientes reales.',
        detail: 'Web + Marketing activos',
        accent: '#5B4A6B',          // plum
        accentBg: 'rgba(91,74,107,0.10)',
        accentBorder: 'rgba(91,74,107,0.26)',
        numColor: 'rgba(91,74,107,0.20)',
    },
    {
        num: '04',
        icon: BarChart3,
        title: 'Crecer con todo en su lugar',
        desc: 'Presentamos tus impuestos, ordenamos tus libros y te acompañamos mientras tu negocio escala.',
        detail: 'Taxes + soporte continuo',
        accent: '#C9A961',          // gold-soft
        accentBg: 'rgba(201,169,97,0.10)',
        accentBorder: 'rgba(201,169,97,0.26)',
        numColor: 'rgba(201,169,97,0.20)',
    },
];

export default function Process() {
    const processRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const reduced = typeof window !== 'undefined'
            && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced) return;

        const ctx = gsap.context(() => {
            gsap.fromTo('.process-line-fill',
                { scaleX: 0 },
                {
                    scaleX: 1,
                    transformOrigin: 'left center',
                    scrollTrigger: {
                        trigger: '.process-track',
                        start: 'top 65%',
                        end: 'bottom 65%',
                        scrub: 1.2,
                    },
                }
            );

            gsap.from('.step-card', {
                scrollTrigger: { trigger: '.process-track', start: 'top 82%' },
                y: 32,
                opacity: 0,
                stagger: 0.14,
                duration: 0.75,
                ease: 'power3.out',
            });
        }, processRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="process"
            ref={processRef}
            className="py-28 px-6 bg-bone relative overflow-hidden"
        >
            {/* Blob sage — fondo */}
            <div
                className="absolute top-[-8%] left-[-5%] w-[380px] h-[380px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(closest-side, rgba(111,143,123,0.10) 0%, transparent 80%)' }}
                aria-hidden="true"
            />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="eyebrow-warm mb-5 flex items-center justify-center gap-2">
                        <span className="w-5 h-px bg-gold-soft/50 inline-block" />
                        Cómo trabajamos
                        <span className="w-5 h-px bg-gold-soft/50 inline-block" />
                    </p>
                    <h2 className="font-display text-3xl md:text-5xl font-medium text-ink mb-5 tracking-tight leading-[1.08]">
                        Cómo trabajamos contigo,{' '}
                        <span className="italic text-graphite-warm">paso a paso</span>
                    </h2>
                    <p className="text-graphite-warm/65 max-w-lg mx-auto text-base leading-relaxed">
                        Un proceso claro desde la primera llamada hasta que tu negocio esté operando con orden.
                    </p>
                </div>

                {/* Track line — desktop */}
                <div className="process-track hidden lg:block relative mb-8 px-4">
                    <div
                        className="relative h-[1.5px] rounded-full mx-auto overflow-hidden"
                        style={{ maxWidth: '900px', background: 'rgba(14,26,31,0.08)' }}
                    >
                        <div
                            className="process-line-fill absolute inset-0 rounded-full"
                            style={{
                                background:
                                    'linear-gradient(to right, #6F8F7B, #3A8C9C, #5B4A6B, #C9A961)',
                            }}
                        />
                    </div>
                </div>

                {/* Steps grid */}
                <div className="process-track grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="step-card editorial-card p-6 flex flex-col relative group"
                        >
                            {/* Step number */}
                            <div
                                className="font-display text-6xl font-semibold leading-none mb-4 select-none"
                                style={{ color: step.numColor }}
                                aria-hidden="true"
                            >
                                {step.num}
                            </div>

                            {/* Icon */}
                            <div
                                className="w-9 h-9 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                                style={{
                                    background: step.accentBg,
                                    border: `1px solid ${step.accentBorder}`,
                                }}
                            >
                                <step.icon className="w-4 h-4" style={{ color: step.accent }} strokeWidth={2} />
                            </div>

                            {/* Content */}
                            <h3 className="font-display text-sm font-semibold text-ink mb-2 leading-snug">
                                {step.title}
                            </h3>
                            <p className="text-sm text-graphite-warm/70 leading-relaxed mb-5 flex-1">
                                {step.desc}
                            </p>

                            {/* Detail tag */}
                            <div className="inline-flex items-center gap-1.5 mt-auto">
                                <span
                                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                    style={{ background: step.accent, opacity: 0.65 }}
                                />
                                <span
                                    className="text-[0.62rem] font-mono leading-none"
                                    style={{ color: step.accent, opacity: 0.85 }}
                                >
                                    {step.detail}
                                </span>
                            </div>

                            {/* Connector dot — desktop */}
                            {index < steps.length - 1 && (
                                <div
                                    className="hidden lg:flex absolute -right-3 top-8 z-10 w-5 h-5 rounded-full items-center justify-center"
                                    style={{
                                        background: '#FBF8F2',
                                        border: `1px solid ${step.accentBorder}`,
                                    }}
                                    aria-hidden="true"
                                >
                                    <div
                                        className="w-1.5 h-1.5 rounded-full"
                                        style={{ background: step.accent, opacity: 0.50 }}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA hint */}
                <div className="text-center mt-10">
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-sm font-mono text-graphite-warm/50 hover:text-gold-soft transition-colors duration-300"
                    >
                        ¿Por dónde empezamos? Cuéntanos tu caso
                        <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
