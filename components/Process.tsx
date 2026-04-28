'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Layers, Rocket, BarChart3 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        num: '01',
        icon: Search,
        title: 'Diagnóstico inicial',
        desc: 'Entendemos tu situación, tus objetivos y tu urgencia. Trazamos el plan correcto para tu caso.',
        detail: 'Llamada sin costo',
        numColor: 'rgba(96,165,250,0.20)',
        iconColor: '#60A5FA',
        borderColor: 'rgba(59,130,246,0.18)',
        glowColor: 'rgba(59,130,246,0.10)',
    },
    {
        num: '02',
        icon: Layers,
        title: 'Tu LLC, lista para operar',
        desc: 'Formamos tu LLC, obtenemos tu EIN y te dejamos listo para recibir pagos y abrir cuenta bancaria.',
        detail: 'LLC + EIN coordinados',
        numColor: 'rgba(34,211,238,0.20)',
        iconColor: '#22D3EE',
        borderColor: 'rgba(6,182,212,0.18)',
        glowColor: 'rgba(6,182,212,0.10)',
    },
    {
        num: '03',
        icon: Rocket,
        title: 'Tu marca, visible para tus clientes',
        desc: 'Construimos tu sitio web, tu perfil de Google y lanzamos tu primera campaña para atraer clientes reales.',
        detail: 'Web + Marketing activos',
        numColor: 'rgba(167,139,250,0.20)',
        iconColor: '#A78BFA',
        borderColor: 'rgba(139,92,246,0.18)',
        glowColor: 'rgba(139,92,246,0.10)',
    },
    {
        num: '04',
        icon: BarChart3,
        title: 'Crecer con todo en su lugar',
        desc: 'Presentamos tus impuestos, ordenamos tus libros y te acompañamos mientras tu negocio escala.',
        detail: 'Taxes + soporte continuo',
        numColor: 'rgba(52,211,153,0.20)',
        iconColor: '#34D399',
        borderColor: 'rgba(16,185,129,0.18)',
        glowColor: 'rgba(16,185,129,0.10)',
    },
];

export default function Process() {
    const processRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
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
                scrollTrigger: {
                    trigger: '.process-track',
                    start: 'top 82%',
                },
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
            className="py-28 px-6 relative z-10 w-full max-w-7xl mx-auto"
        >
            {/* Section header */}
            <div className="text-center mb-16">
                <p className="section-label mb-5 justify-center">
                    <span className="w-5 h-px bg-ai-cyan/40 inline-block" />
                    Cómo trabajamos
                    <span className="w-5 h-px bg-ai-cyan/40 inline-block" />
                </p>
                <h2 className="text-3xl md:text-5xl font-space font-bold text-white mb-5 tracking-tight leading-tight">
                    Cómo trabajamos contigo,{' '}
                    <span className="text-gradient">paso a paso</span>
                </h2>
                <p className="text-silver/60 max-w-lg mx-auto text-base leading-relaxed">
                    Un proceso claro desde la primera llamada hasta que tu negocio esté operando con orden.
                </p>
            </div>

            {/* Animated track line (desktop only) */}
            <div className="process-track hidden lg:block relative mb-8 px-4">
                <div className="relative h-[2px] bg-white/[0.06] rounded-full mx-auto" style={{ maxWidth: '900px' }}>
                    <div
                        className="process-line-fill absolute inset-0 rounded-full"
                        style={{ background: 'linear-gradient(to right, #60A5FA, #22D3EE, #A78BFA, #34D399)' }}
                    />
                </div>
            </div>

            {/* Steps grid */}
            <div className="process-track grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="step-card premium-card p-6 flex flex-col relative group"
                        style={{
                            background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.012) 100%)',
                            borderColor: step.borderColor,
                        }}
                    >
                        {/* Step number — large, colored, protagonist */}
                        <div
                            className="font-space text-6xl font-bold leading-none mb-4 select-none"
                            style={{ color: step.numColor }}
                            aria-hidden="true"
                        >
                            {step.num}
                        </div>

                        {/* Icon */}
                        <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                            style={{
                                background: step.glowColor,
                                border: `1px solid ${step.borderColor}`,
                                boxShadow: `0 0 14px ${step.glowColor}`,
                            }}
                        >
                            <step.icon
                                className="w-4 h-4 transition-colors duration-300"
                                style={{ color: step.iconColor }}
                            />
                        </div>

                        {/* Content */}
                        <h3 className="font-space text-sm font-semibold text-white mb-2 leading-snug">
                            {step.title}
                        </h3>
                        <p className="text-sm text-silver/55 leading-relaxed mb-5 flex-1">
                            {step.desc}
                        </p>

                        {/* Detail tag */}
                        <div className="inline-flex items-center gap-1.5 mt-auto">
                            <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ background: step.iconColor, opacity: 0.55 }}
                            />
                            <span className="text-[0.62rem] font-mono leading-none" style={{ color: step.iconColor, opacity: 0.65 }}>
                                {step.detail}
                            </span>
                        </div>

                        {/* Connector dot for desktop (between cards) */}
                        {index < steps.length - 1 && (
                            <div
                                className="hidden lg:flex absolute -right-3 top-8 z-10 w-5 h-5 rounded-full items-center justify-center"
                                style={{ background: '#0B0F19', border: `1px solid ${step.borderColor}` }}
                                aria-hidden="true"
                            >
                                <div className="w-1.5 h-1.5 rounded-full" style={{ background: step.iconColor, opacity: 0.45 }} />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* CTA hint */}
            <div className="text-center mt-10">
                <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-mono text-silver/45 hover:text-ai-cyan transition-colors duration-300"
                >
                    ¿Por dónde empezamos?
                    <span className="text-ai-cyan/50">→</span>
                    Cuéntanos tu caso
                </a>
            </div>
        </section>
    );
}
