'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Brain, Server, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Trust() {
    const trustRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.trust-card', {
                scrollTrigger: {
                    trigger: '.trust-grid',
                    start: 'top 80%',
                },
                y: 40,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: 'power3.out',
            });
        }, trustRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={trustRef} className="py-24 px-6 relative z-10 w-full max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-space font-bold text-white mb-4">
                    Diseñado para la <span className="text-gradient">escala absoluta</span>
                </h2>
                <p className="text-silver/80 max-w-2xl mx-auto font-inter">
                    Nuestra infraestructura respalda operaciones desde el día uno hasta tu primer millón en MRR.
                </p>
            </div>

            <div className="trust-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Tecnología */}
                <div className="trust-card p-8 rounded-3xl bg-[#0F1523] border border-white/5 hover:border-neural-blue/50 transition-colors">
                    <Brain className="w-8 h-8 text-neural-blue mb-4" />
                    <h3 className="font-space font-semibold text-white mb-2 text-lg">Tecnología</h3>
                    <p className="text-sm text-silver/70">Orquestadores n8n dedicados y flujos automatizados para minimizar trabajo manual.</p>
                </div>

                {/* Experiencia */}
                <div className="trust-card p-8 rounded-3xl bg-[#0F1523] border border-white/5 hover:border-neural-blue/50 transition-colors">
                    <CheckCircle2 className="w-8 h-8 text-ai-cyan mb-4" />
                    <h3 className="font-space font-semibold text-white mb-2 text-lg">Experiencia</h3>
                    <p className="text-sm text-silver/70">Equipo multidisciplinario en desarrollo, marketing digital y leyes corporativas.</p>
                </div>

                {/* Cumplimiento Legal */}
                <div className="trust-card p-8 rounded-3xl bg-[#0F1523] border border-white/5 hover:border-neural-blue/50 transition-colors">
                    <Shield className="w-8 h-8 text-neural-blue mb-4" />
                    <h3 className="font-space font-semibold text-white mb-2 text-lg">Cumplimiento</h3>
                    <p className="text-sm text-silver/70">Estructuras LLC y EIN precisas. BOI reporting y preparación de taxes estatal/federal.</p>
                </div>

                {/* Infraestructura Digital */}
                <div className="trust-card p-8 rounded-3xl bg-[#0F1523] border border-white/5 hover:border-neural-blue/50 transition-colors">
                    <Server className="w-8 h-8 text-ai-cyan mb-4" />
                    <h3 className="font-space font-semibold text-white mb-2 text-lg">Infraestructura</h3>
                    <p className="text-sm text-silver/70">Hosting Vercel, bases de datos seguras, y Google Workspace integralmente configurado.</p>
                </div>
            </div>

            {/* Final CTA */}
            <div className="mt-32 rounded-[3rem] bg-gradient-to-r from-neural-blue/10 to-ai-cyan/10 border border-white/10 p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ai-cyan to-transparent opacity-50" />
                <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-6 pt-4">Comienza tu negocio hoy</h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#llc" className="magnetic-btn w-full sm:w-auto px-8 py-4 bg-neural-blue text-white font-semibold rounded-full flex items-center justify-center gap-2 drop-shadow-lg">
                        Crear LLC
                    </a>
                    <a href="#advisor" className="magnetic-btn w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full flex items-center justify-center gap-2 backdrop-blur-md">
                        Hablar con un asesor
                    </a>
                </div>
            </div>
        </section>
    );
}
