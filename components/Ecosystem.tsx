'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Globe2, LineChart, FileText } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ecosystemData = [
    {
        icon: Building2,
        title: 'Crear empresa',
        sub: 'LLC + EIN',
        desc: 'Registramos y estructuramos tu LLC en EE.UU. de forma rápida y legal.',
        color: 'from-blue-500/20 to-blue-500/0',
        border: 'border-blue-500/30'
    },
    {
        icon: Globe2,
        title: 'Presencia digital',
        sub: 'Web + Google Business',
        desc: 'Desarrollamos una identidad digital sólida y optimizamos tu empresa.',
        color: 'from-cyan-500/20 to-cyan-500/0',
        border: 'border-cyan-500/30'
    },
    {
        icon: LineChart,
        title: 'Clientes',
        sub: 'Marketing + Leads',
        desc: 'Atraemos y calificamos nuevas oportunidades a traves de campañas data-driven.',
        color: 'from-indigo-500/20 to-indigo-500/0',
        border: 'border-indigo-500/30'
    },
    {
        icon: FileText,
        title: 'Finanzas',
        sub: 'Taxes + Bookkeeping',
        desc: 'Mantenemos tus finanzas ordenadas y reportamos los impuestos con precisión.',
        color: 'from-purple-500/20 to-purple-500/0',
        border: 'border-purple-500/30'
    }
];

export default function Ecosystem() {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.eco-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="ecosystem" ref={sectionRef} className="py-24 px-6 relative z-10 w-full max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-space font-bold text-white mb-4">
                    Un <span className="text-gradient">ecosistema completo</span> para emprendedores
                </h2>
                <p className="text-silver/80 max-w-2xl mx-auto font-inter">
                    Servicios conectados para ayudarte a crear, organizar y hacer crecer tu negocio en Estados Unidos.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ecosystemData.map((item, i) => (
                    <div
                        key={i}
                        className={`eco-card glass-panel bg-gradient-to-b ${item.color} p-8 flex flex-col hover:border-white/30 transition-colors group cursor-default h-full`}
                    >
                        <div className={`w-12 h-12 rounded-2xl border ${item.border} bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                            <item.icon className="w-6 h-6 text-white" />
                        </div>

                        <h3 className="font-space text-2xl font-semibold text-white mb-2">{item.title}</h3>
                        <p className="font-mono text-xs text-ai-cyan mb-4 uppercase tracking-wider">{item.sub}</p>

                        <p className="text-sm text-silver/70 leading-relaxed mt-auto">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
