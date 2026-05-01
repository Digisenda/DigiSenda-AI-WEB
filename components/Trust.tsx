'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Brain, Users, Server, ArrowRight, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const trustPillars = [
    {
        icon: Brain,
        stat: 'Automatizado',
        title: 'Tecnología real',
        desc: 'Sistemas y flujos optimizados para que tu negocio opere con menos fricción y más velocidad.',
        accent: '#3A8C9C',          // cyan-controlled
        accentBg: 'rgba(58,140,156,0.08)',
        accentBorder: 'rgba(58,140,156,0.22)',
    },
    {
        icon: Users,
        stat: 'Multidisciplinario',
        title: 'Equipo experto',
        desc: 'Especialistas en legal, desarrollo web, marketing digital y finanzas trabajando en conjunto.',
        accent: '#5B4A6B',          // plum
        accentBg: 'rgba(91,74,107,0.08)',
        accentBorder: 'rgba(91,74,107,0.22)',
    },
    {
        icon: Shield,
        stat: '100% compliance',
        title: 'Cumplimiento legal',
        desc: 'LLC, EIN, BOI reporting y declaración de taxes estatal/federal. Sin errores, sin sorpresas.',
        accent: '#6F8F7B',          // sage
        accentBg: 'rgba(111,143,123,0.08)',
        accentBorder: 'rgba(111,143,123,0.22)',
    },
    {
        icon: Server,
        stat: 'Vercel + GCP',
        title: 'Infraestructura sólida',
        desc: 'Hosting de alto rendimiento, bases de datos seguras y Google Workspace completamente configurado.',
        accent: '#C9A961',          // gold-soft
        accentBg: 'rgba(201,169,97,0.08)',
        accentBorder: 'rgba(201,169,97,0.22)',
    },
];

const ctaChecklist = [
    'LLC activa en aproximadamente 3 semanas',
    'Todos los servicios coordinados desde un solo equipo',
    'Soporte continuo mientras tu negocio crece',
];

export default function Trust() {
    const trustRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const reduced = typeof window !== 'undefined'
            && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced) return;

        const ctx = gsap.context(() => {
            gsap.from('.trust-card', {
                scrollTrigger: { trigger: '.trust-grid', start: 'top 82%' },
                y: 40,
                opacity: 0,
                stagger: 0.13,
                duration: 0.8,
                ease: 'power3.out',
            });

            gsap.from('.cta-block', {
                scrollTrigger: { trigger: '.cta-block', start: 'top 85%' },
                y: 32,
                opacity: 0,
                duration: 0.9,
                ease: 'power3.out',
            });
        }, trustRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={trustRef} className="relative overflow-hidden">

            {/* ── Parte superior — tarjetas de confianza sobre marfil ── */}
            <div className="py-28 px-6 bg-ivory relative">
                {/* Blob plum decorativo */}
                <div
                    className="absolute top-[-8%] right-[-5%] w-[380px] h-[380px] rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(closest-side, rgba(91,74,107,0.10) 0%, transparent 80%)' }}
                    aria-hidden="true"
                />

                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <p className="eyebrow-warm mb-5 flex items-center justify-center gap-2">
                            <span className="w-5 h-px bg-gold-soft/50 inline-block" />
                            Por qué DigiSenda
                            <span className="w-5 h-px bg-gold-soft/50 inline-block" />
                        </p>
                        <h2 className="font-display text-3xl md:text-5xl font-medium text-ink mb-5 tracking-tight leading-[1.08]">
                            Una base{' '}
                            <span className="italic text-graphite-warm">sólida para crecer</span>
                        </h2>
                        <p className="text-graphite-warm/65 max-w-xl mx-auto text-base leading-relaxed">
                            No solo herramientas. Un equipo que entiende tu negocio y trabaja para que avances.
                        </p>
                    </div>

                    {/* Pillars grid */}
                    <div className="trust-grid grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {trustPillars.map((pillar, i) => (
                            <div
                                key={i}
                                className="trust-card editorial-card p-7 flex flex-col relative group"
                            >
                                {/* Icon */}
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                                    style={{
                                        background: pillar.accentBg,
                                        border: `1px solid ${pillar.accentBorder}`,
                                    }}
                                >
                                    <pillar.icon className="w-4.5 h-4.5" style={{ color: pillar.accent }} strokeWidth={2} />
                                </div>

                                {/* Stat — eyebrow */}
                                <p
                                    className="font-mono text-[0.6rem] uppercase tracking-[0.18em] mb-2"
                                    style={{ color: pillar.accent }}
                                >
                                    {pillar.stat}
                                </p>

                                {/* Title */}
                                <h3 className="font-display font-semibold text-ink mb-2.5 text-base leading-snug">
                                    {pillar.title}
                                </h3>

                                {/* Desc */}
                                <p className="text-sm text-graphite-warm/70 leading-relaxed">
                                    {pillar.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── CTA block — isla oscura ink editorial ── */}
            <div className="cta-block relative bg-ink overflow-hidden">
                {/* Halo dorado — arriba centro */}
                <div
                    className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse, rgba(201,169,97,0.12) 0%, transparent 65%)' }}
                    aria-hidden="true"
                />
                {/* Borde superior gold */}
                <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: 'linear-gradient(to right, transparent, rgba(201,169,97,0.45) 50%, transparent)' }}
                    aria-hidden="true"
                />

                <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                        {/* Left: headline + checklist */}
                        <div className="flex-1 max-w-lg">
                            <p className="eyebrow-warm mb-5">
                                El siguiente paso
                            </p>
                            <h2 className="font-display text-3xl md:text-4xl font-medium text-bone mb-4 leading-[1.1]">
                                ¿Listo para dar<br className="hidden sm:block" />{' '}
                                <span className="italic" style={{ color: '#C9A961' }}>el primer paso</span>?
                            </h2>
                            <p className="text-bone/60 text-base mb-8 leading-relaxed">
                                Cuéntanos tu situación. Construimos juntos el camino más eficiente para tu negocio en EE.UU.
                            </p>
                            <ul className="space-y-3">
                                {ctaChecklist.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="w-5 h-5 rounded-full bg-sage/20 border border-sage/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-sage" strokeWidth={2.5} />
                                        </span>
                                        <span className="text-sm text-bone/75 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: CTAs */}
                        <div className="flex flex-col gap-4 w-full md:w-auto md:min-w-[220px]">
                            <a
                                href="/services"
                                className="btn-warm-primary group justify-center"
                            >
                                Crear mi LLC
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/contact"
                                className="btn-ink-ghost group justify-center"
                                style={{
                                    color: '#F7F3EC',
                                    borderColor: 'rgba(251,248,242,0.30)',
                                }}
                            >
                                Hablar con el equipo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
