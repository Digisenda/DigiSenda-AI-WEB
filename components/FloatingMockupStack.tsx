'use client';

import { Building2, Globe2, Bell, Receipt, Check } from 'lucide-react';

/**
 * FloatingMockupStack — cuatro tarjetas 2.5D flotantes que representan las
 * cuatro piezas del ecosistema DigiSenda (LLC, Web, Leads, Tax) sobre la foto
 * editorial del hero. NO son imágenes: HTML/CSS puro para nitidez perfecta y
 * peso cero.
 */
export default function FloatingMockupStack() {
    return (
        <div
            className="relative w-full h-full pointer-events-none select-none"
            aria-hidden="true"
        >
            {/* ── Card 1 — LLC formada (top-left) ── */}
            <div
                className="absolute top-[6%] left-[-6%] sm:left-[-3%] w-[58%] sm:w-[52%] max-w-[260px] float-card animate-float-slow"
                style={{ transform: 'rotate(-3deg)' }}
            >
                <div className="p-3.5 sm:p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-sage/15 text-sage">
                            <Building2 className="w-3.5 h-3.5" strokeWidth={2.2} />
                        </span>
                        <span className="font-mono text-[0.55rem] uppercase tracking-[0.20em] text-graphite-warm/55">
                            Estructura
                        </span>
                    </div>
                    <p className="font-display text-[0.95rem] sm:text-base leading-tight text-ink mb-1">
                        LLC formada
                    </p>
                    <p className="text-[0.7rem] text-graphite-warm/70 leading-snug mb-2.5">
                        Articles of Organization filed · EIN asignado
                    </p>
                    <div className="flex items-center gap-1.5">
                        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-sage text-white">
                            <Check className="w-2.5 h-2.5" strokeWidth={3} />
                        </span>
                        <span className="text-[0.65rem] font-mono uppercase tracking-wider text-sage">
                            Listo
                        </span>
                    </div>
                </div>
            </div>

            {/* ── Card 2 — Mockup web mini (top-right) ── */}
            <div
                className="absolute top-[2%] right-[-4%] sm:right-[-2%] w-[55%] sm:w-[48%] max-w-[240px] float-card animate-float-slower"
                style={{ transform: 'rotate(2.5deg)' }}
            >
                <div className="p-3 sm:p-3.5">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-graphite-warm/25" />
                            <span className="w-1.5 h-1.5 rounded-full bg-graphite-warm/25" />
                            <span className="w-1.5 h-1.5 rounded-full bg-graphite-warm/25" />
                        </div>
                        <Globe2 className="w-3 h-3 text-cyan-controlled" strokeWidth={2.2} />
                    </div>
                    {/* Mini hero del sitio del cliente */}
                    <div className="rounded-md overflow-hidden border border-ink/5">
                        <div
                            className="h-14 sm:h-16 relative"
                            style={{
                                background: 'linear-gradient(135deg, #F7F3EC 0%, #EDE5D6 100%)',
                            }}
                        >
                            <div className="absolute top-1.5 left-2 w-8 h-1.5 rounded bg-ink/70" />
                            <div className="absolute top-4 left-2 w-14 h-1 rounded bg-ink/30" />
                            <div className="absolute top-6 left-2 w-10 h-1 rounded bg-ink/20" />
                            <div className="absolute top-2 right-2 flex gap-0.5">
                                <span className="w-1 h-1 rounded-full bg-graphite-warm/40" />
                                <span className="w-1 h-1 rounded-full bg-graphite-warm/40" />
                                <span className="w-1 h-1 rounded-full bg-graphite-warm/40" />
                            </div>
                            <div className="absolute bottom-1.5 left-2 inline-flex items-center justify-center px-1.5 h-2.5 rounded-sm bg-terracotta">
                                <span className="text-[0.4rem] font-semibold text-white tracking-wide">
                                    CTA
                                </span>
                            </div>
                        </div>
                        <div className="bg-bone p-1.5">
                            <div className="h-1 rounded bg-ink/10 mb-1 w-3/4" />
                            <div className="h-1 rounded bg-ink/10 w-1/2" />
                        </div>
                    </div>
                    <p className="font-mono text-[0.55rem] uppercase tracking-wider text-cyan-controlled mt-2">
                        Sitio en línea
                    </p>
                </div>
            </div>

            {/* ── Card 3 — Lead notification (mid-left) ── */}
            <div
                className="absolute top-[44%] sm:top-[42%] left-[-10%] sm:left-[-6%] w-[60%] sm:w-[54%] max-w-[270px] float-card animate-float"
                style={{ transform: 'rotate(2deg)' }}
            >
                <div className="p-3 sm:p-3.5 flex items-start gap-2.5">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-plum/12 text-plum flex-shrink-0">
                        <Bell className="w-3.5 h-3.5" strokeWidth={2.2} />
                    </span>
                    <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                            <span className="font-mono text-[0.55rem] uppercase tracking-[0.20em] text-plum">
                                Nuevo lead
                            </span>
                            <span className="font-mono text-[0.55rem] text-graphite-warm/45">
                                hace 2 min
                            </span>
                        </div>
                        <p className="font-display text-[0.85rem] sm:text-[0.95rem] leading-tight text-ink">
                            María L. — interesada
                        </p>
                        <p className="text-[0.68rem] text-graphite-warm/65 leading-snug mt-0.5">
                            Vino desde Google Business Profile
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Card 4 — Tax-ready (bottom-right) ── */}
            <div
                className="absolute bottom-[2%] right-[-5%] sm:right-[-2%] w-[58%] sm:w-[50%] max-w-[260px] float-card animate-float-slow"
                style={{ transform: 'rotate(-2deg)' }}
            >
                <div className="p-3.5 sm:p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-gold-soft/15 text-gold-soft">
                            <Receipt className="w-3.5 h-3.5" strokeWidth={2.2} />
                        </span>
                        <span className="font-mono text-[0.55rem] uppercase tracking-[0.20em] text-graphite-warm/55">
                            Cumplimiento
                        </span>
                    </div>
                    <p className="font-display text-[0.95rem] sm:text-base leading-tight text-ink mb-2">
                        Tax-ready · Q2
                    </p>
                    {/* Barra mini */}
                    <div className="h-1.5 rounded-full bg-ink/8 overflow-hidden mb-1.5">
                        <div
                            className="h-full rounded-full"
                            style={{
                                width: '78%',
                                background: 'linear-gradient(90deg, #C9A961 0%, #6F8F7B 100%)',
                            }}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-[0.65rem] text-graphite-warm/60 font-mono">
                            Documentos al día
                        </span>
                        <span className="text-[0.65rem] font-semibold text-gold-soft">
                            78%
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
