'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    { num: '01', title: 'Crear empresa', desc: 'Registro de LLC, obtención de EIN y apertura de cuenta bancaria.' },
    { num: '02', title: 'Construir presencia digital', desc: 'Diseño web técnico y listado de Google para tu negocio.' },
    { num: '03', title: 'Generar clientes', desc: 'Despliegue de SynapLeads para generar flujo mediante anuncios y SEO.' },
    { num: '04', title: 'Escalar negocio', desc: 'Contabilidad activa, soporte fiscal y orquestación constante.' }
];

export default function Process() {
    const processRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Connect steps line animation
            gsap.fromTo('.process-line-fill',
                { height: '0%' },
                {
                    height: '100%',
                    scrollTrigger: {
                        trigger: '.process-container',
                        start: 'top 50%',
                        end: 'bottom 50%',
                        scrub: true,
                    }
                }
            );

            gsap.from('.step-item', {
                scrollTrigger: {
                    trigger: '.process-container',
                    start: 'top 75%',
                },
                x: -40,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: 'power3.out',
            });
        }, processRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="process" ref={processRef} className="py-24 px-6 relative z-10 w-full max-w-4xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-space font-bold text-white mb-4">
                    Cómo funciona DigiSenda
                </h2>
                <p className="text-silver/80 font-inter">Cuatro pilares de integración. Cero fricción.</p>
            </div>

            <div className="process-container relative pl-8 md:pl-0">
                {/* Animated Line (Desktop Center / Mobile Left) */}
                <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 w-[2px] bg-white/10 -translate-x-1/2">
                    <div className="process-line-fill w-full bg-gradient-to-b from-neural-blue to-ai-cyan" />
                </div>

                <div className="space-y-12">
                    {steps.map((step, index) => (
                        <div key={index} className="step-item relative flex flex-col md:flex-row items-start md:items-center justify-between group">

                            {/* Left Side (Empty on even, text on odd) */}
                            <div className={`hidden md:block w-1/2 pr-12 text-right ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                                {index % 2 === 0 && (
                                    <div>
                                        <h3 className="font-space text-2xl font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-silver/70 leading-relaxed text-sm">{step.desc}</p>
                                    </div>
                                )}
                            </div>

                            {/* Node Center */}
                            <div className={`absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-4 border-[#0B0F19] bg-white/10 group-hover:bg-neural-blue transition-colors flex items-center justify-center font-mono text-xs font-bold text-white ${index % 2 !== 0 ? 'md:order-2' : ''} z-10`}>
                                {step.num}
                            </div>

                            {/* Right Side (Text on even, empty on odd) */}
                            <div className={`w-full md:w-1/2 pl-12 ${index % 2 !== 0 ? 'md:order-3' : ''}`}>
                                <div className={`${index % 2 === 0 ? 'md:hidden' : ''}`}>
                                    <h3 className="font-space text-2xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-silver/70 leading-relaxed text-sm">{step.desc}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
