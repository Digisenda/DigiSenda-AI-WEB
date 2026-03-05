'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Setup elements with opacity 0 and slightly shifted
            gsap.set('.hero-anim', { y: 30, opacity: 0 });
            gsap.set('.hero-bg-lines', { scale: 0.9, opacity: 0 });

            // Animate background
            gsap.to('.hero-bg-lines', {
                scale: 1,
                opacity: 0.4,
                duration: 2,
                ease: 'power3.out',
            });

            // Animate Texts
            gsap.to('.hero-anim', {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.15,
                ease: 'power3.out',
                delay: 0.2, // Let the background settle a bit
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20"
        >
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center">
                {/* Glow center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] rounded-full bg-neural-blue/10 blur-[120px]" />

                {/* Abstract lines (Placeholder for grid/neural net) */}
                <div className="hero-bg-lines absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)`,
                        backgroundSize: `4rem 4rem`,
                        maskImage: `radial-gradient(circle at center, black, transparent 80%)`,
                    }}
                />
            </div>

            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
                {/* Mini Pill */}
                <div className="hero-anim inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-ai-cyan/30 bg-ai-cyan/10 text-ai-cyan text-sm font-mono backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-ai-cyan animate-pulse-slow" />
                    <span>Infraestructura Digital Activa</span>
                </div>

                {/* Heading */}
                <h1 className="hero-anim font-space text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6 text-white text-balance">
                    Lanza y haz crecer tu negocio en Estados Unidos
                </h1>

                {/* Subtext */}
                <p className="hero-anim max-w-2xl text-lg md:text-xl text-silver/80 mb-10 text-balance leading-relaxed">
                    DigiSenda AI ayuda a emprendedores a crear su empresa, construir su presencia digital, generar clientes y gestionar sus impuestos mediante tecnología avanzada.
                </p>

                {/* Buttons */}
                <div className="hero-anim flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                    <a href="#create-llc" className="magnetic-btn w-full sm:w-auto px-8 py-4 bg-white text-deep-space font-semibold rounded-full flex items-center justify-center gap-2 group hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Crear mi empresa
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a href="#ecosystem" className="magnetic-btn w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full flex items-center justify-center gap-2 group backdrop-blur-md hover:bg-white/10">
                        Explorar servicios
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
}
