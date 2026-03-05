'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Users, Zap, TrendingUp, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Technology() {
    const containerRef = useRef<HTMLElement>(null);
    const nodesRef = useRef<SVGSVGElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animate text sections
            gsap.from('.tech-text', {
                scrollTrigger: {
                    trigger: '.tech-text-container',
                    start: 'top 80%',
                },
                y: 30,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: 'power3.out',
            });

            // Simple node animation representing the flow of leads
            gsap.fromTo(
                '.node-path',
                { strokeDashoffset: 1000 },
                {
                    strokeDashoffset: 0,
                    scrollTrigger: {
                        trigger: nodesRef.current,
                        start: 'top 75%',
                        end: 'bottom 25%',
                        scrub: 1,
                    },
                }
            );

            gsap.from('.node-point', {
                scrollTrigger: {
                    trigger: nodesRef.current,
                    start: 'top 60%',
                },
                scale: 0,
                opacity: 0,
                stagger: 0.1,
                duration: 0.5,
                ease: 'back.out(1.7)',
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="synapleads" ref={containerRef} className="py-24 px-6 relative z-10 w-full max-w-7xl mx-auto border-t border-b border-white/5 my-24 bg-[#0B0F19]/50 backdrop-blur-3xl overflow-hidden rounded-[3rem]">
            {/* Background Glow */}
            <div className="absolute -left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-ai-cyan/10 rounded-full blur-[100px]" />

            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Side: Content */}
                <div className="tech-text-container z-10 flex flex-col items-start text-left">
                    <div className="tech-text flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-neural-blue/30 bg-neural-blue/10 text-neural-blue text-sm font-mono">
                        <Cpu className="w-4 h-4" />
                        <span>Motor de Crecimiento</span>
                    </div>

                    <h2 className="tech-text text-4xl md:text-5xl lg:text-6xl font-space font-bold text-white mb-6 leading-tight">
                        Conoce <span className="text-gradient">SynapLeads</span>
                    </h2>

                    <p className="tech-text text-silver/80 text-lg mb-8 leading-relaxed max-w-lg">
                        Nuestra plataforma tecnológica propietaria. No usamos herramientas desconectadas; orquestamos un flujo inteligente que captura, califica y distribuye oportunidades de negocio directamente hacia tu equipo.
                    </p>

                    <ul className="tech-text space-y-4 mb-10 w-full max-w-lg font-mono text-sm text-silver/70">
                        <li className="flex items-center gap-3"><Target className="w-5 h-5 text-ai-cyan" /> Atracción dirigida por Inteligencia Artificial</li>
                        <li className="flex items-center gap-3"><Zap className="w-5 h-5 text-ai-cyan" /> Calificación de prospectos en tiempo real</li>
                        <li className="flex items-center gap-3"><Users className="w-5 h-5 text-ai-cyan" /> CRM Integrado y orquestación con n8n</li>
                        <li className="flex items-center gap-3"><TrendingUp className="w-5 h-5 text-ai-cyan" /> Análisis predictivo de retorno (ROI)</li>
                    </ul>

                    <a href="#synapleads-demo" className="tech-text magnetic-btn px-8 py-4 bg-neural-blue/20 hover:bg-neural-blue border border-neural-blue font-semibold rounded-full text-white transition-all duration-300">
                        Explorar SynapLeads
                    </a>
                </div>

                {/* Right Side: Network Node Graphic */}
                <div className="relative h-[400px] lg:h-[600px] w-full z-10 flexItems-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)] rounded-full blur-xl" />

                    <svg ref={nodesRef} className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Simple placeholder network visualization */}
                        {/* Paths */}
                        <path className="node-path" d="M 50,100 Q 150,150 200,200 T 350,300" stroke="url(#paint0_linear)" strokeWidth="2" strokeDasharray="1000" strokeLinecap="round" />
                        <path className="node-path" d="M 50,300 Q 150,250 200,200 T 350,100" stroke="url(#paint1_linear)" strokeWidth="2" strokeDasharray="1000" strokeLinecap="round" />
                        <path className="node-path" d="M 200,50 L 200,200 L 200,350" stroke="url(#paint2_linear)" strokeWidth="2" strokeDasharray="1000" strokeLinecap="round" />

                        {/* Nodes */}
                        <circle className="node-point" cx="50" cy="100" r="12" fill="#0B0F19" stroke="#06B6D4" strokeWidth="4" />
                        <circle className="node-point" cx="50" cy="300" r="12" fill="#0B0F19" stroke="#2563EB" strokeWidth="4" />
                        <circle className="node-point" cx="200" cy="50" r="12" fill="#0B0F19" stroke="#06B6D4" strokeWidth="4" />
                        <circle className="node-point" cx="200" cy="350" r="12" fill="#0B0F19" stroke="#2563EB" strokeWidth="4" />
                        <circle className="node-point" cx="350" cy="100" r="12" fill="#0B0F19" stroke="#06B6D4" strokeWidth="4" />
                        <circle className="node-point" cx="350" cy="300" r="12" fill="#0B0F19" stroke="#2563EB" strokeWidth="4" />

                        {/* Central Node */}
                        <circle className="node-point animate-glow" cx="200" cy="200" r="24" fill="#0B0F19" stroke="#CBD5F5" strokeWidth="6" />
                        <circle className="node-point animate-pulse" cx="200" cy="200" r="12" fill="#2563EB" />

                        <defs>
                            <linearGradient id="paint0_linear" x1="50" y1="100" x2="350" y2="300" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#06B6D4" />
                                <stop offset="1" stopColor="#2563EB" />
                            </linearGradient>
                            <linearGradient id="paint1_linear" x1="50" y1="300" x2="350" y2="100" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#2563EB" />
                                <stop offset="1" stopColor="#06B6D4" />
                            </linearGradient>
                            <linearGradient id="paint2_linear" x1="200" y1="50" x2="200" y2="350" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#06B6D4" />
                                <stop offset="1" stopColor="#2563EB" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </section>
    );
}
