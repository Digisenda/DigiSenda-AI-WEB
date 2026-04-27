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
        desc: 'Entendemos tu situación, tus objetivos y tu urgencia. Trazamos el plan correcto para tu caso específico.',
        detail: 'Llamada sin costo',
    },
    {
        num: '02',
        icon: Layers,
        title: 'Estructuración legal',
        desc: 'Formamos tu LLC, obtenemos tu EIN y te dejamos listo para operar correctamente desde el primer día.',
        detail: 'LLC + EIN en ~3 semanas',
    },
    {
        num: '03',
        icon: Rocket,
        title: 'Activación digital',
        desc: 'Construimos tu sitio web, tu perfil de Google y lanzamos tu primera campaña para traer clientes reales.',
        detail: 'Web + Marketing activos',
    },
    {
        num: '04',
        icon: BarChart3,
        title: 'Crecimiento con orden',
        desc: 'Presentamos tus impuestos, ordenamos tus finanzas y te acompañamos mientras tu negocio escala.',
        detail: 'Taxes + soporte continuo',
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
                        start: 'top 60%',
                        end: 'bottom 60%',
                        scrub: 1,
                    },
                }
            );

            gsap.from('.step-card', {
                scrollTrigger: {
                    trigger: '.process-track',
                    start: 'top 80%',
                },
                y: 36,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
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
                    Tu camino,{' '}
                    <span className="text-gradient">paso a paso</span>
                </h2>
                <p className="text-silver/60 max-w-xl mx-auto text-base leading-relaxed">
                    Un proceso claro y coordinado, desde la primera llamada hasta que tu negocio esté creciendo con orden.
                </p>
            </div>

            {/* Track connector (desktop only) */}
            <div className="process-track hidden lg:block relative mb-8 px-8">
                <div className="relative h-[2px] bg-white/[0.07] rounded-full mx-auto" style={{ maxWidth: '900px' }}>
                    <div className="process-line-fill absolute inset-0 rounded-full"
                        style={{ background: 'linear-gradient(to right, #2563EB, #06B6D4)' }} />
                </div>
            </div>

            {/* Steps grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="step-card premium-card p-7 flex flex-col relative group"
                        style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%)' }}
                    >
                        {/* Step number + icon row */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-neural-blue/40 group-hover:bg-neural-blue/10 transition-all duration-300">
                                <step.icon className="w-4.5 h-4.5 text-silver/60 group-hover:text-neural-blue-light transition-colors duration-300" />
                            </div>
                            <span className="font-mono text-[0.65rem] font-bold tracking-widest text-white/15 select-none">
                                {step.num}
                            </span>
                        </div>

                        {/* Content */}
                        <h3 className="font-space text-base font-semibold text-white mb-2.5 leading-snug">
                            {step.title}
                        </h3>
                        <p className="text-sm text-silver/55 leading-relaxed mb-5 flex-1">
                            {step.desc}
                        </p>

                        {/* Detail tag */}
                        <div className="inline-flex items-center gap-1.5 mt-auto">
                            <span className="w-1.5 h-1.5 rounded-full bg-ai-cyan/50 flex-shrink-0" />
                            <span className="text-[0.65rem] font-mono text-ai-cyan/60 leading-none">
                                {step.detail}
                            </span>
                        </div>

                        {/* Connector arrow for desktop (except last) */}
                        {index < steps.length - 1 && (
                            <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-[#0B0F19] border border-white/10 items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-neural-blue/50" />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* CTA hint */}
            <div className="text-center mt-10">
                <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-mono text-silver/50 hover:text-ai-cyan transition-colors duration-300"
                >
                    ¿Por dónde empezamos?
                    <span className="text-ai-cyan/50">→</span>
                    Cuéntanos tu caso
                </a>
            </div>
        </section>
    );
}
