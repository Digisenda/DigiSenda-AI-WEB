'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const successStories = [
    {
        title: 'LLC formada en tiempo récord',
        description: 'Emprendedor de México logró formar su LLC en Florida y obtener EIN en 3 semanas.',
        tags: ['LLC Service', 'Registro Legal']
    },
    {
        title: 'Landing page que convierte',
        description: 'Negocio de servicios profesionales aumentó su tasa de conversión 45% con su nueva web.',
        tags: ['Web Services', 'Conversión']
    },
    {
        title: 'Impuestos sin complicaciones',
        description: 'Pequeño negocio organizó sus finanzas y presentó impuestos sin estrés por primera vez.',
        tags: ['Tax Service', 'Compliance']
    }
];

export default function SuccessStories() {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.success-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
                y: 40,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: 'power3.out',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="success-stories" ref={sectionRef} className="py-24 px-6 relative z-10 w-full max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-space font-bold text-white mb-4">
                    Casos de <span className="text-gradient">éxito</span>
                </h2>
                <p className="text-silver/80 max-w-2xl mx-auto font-inter">
                    Ejemplos del tipo de soluciones que construimos para emprendedores y pequeños negocios.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {successStories.map((story, index) => (
                    <div
                        key={index}
                        className="success-card glass-panel bg-[#0F1523] p-8 hover:border-neural-blue/50 transition-all group"
                    >
                        <CheckCircle2 className="w-10 h-10 text-ai-cyan mb-4 group-hover:scale-110 transition-transform" />
                        
                        <h3 className="font-space text-xl font-semibold text-white mb-3">
                            {story.title}
                        </h3>
                        
                        <p className="text-silver/70 text-sm mb-6 leading-relaxed">
                            {story.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                            {story.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 rounded-full bg-neural-blue/10 border border-neural-blue/30 text-ai-cyan text-xs font-mono"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
