'use client';

import { Building2, Globe2, LineChart, FileText } from 'lucide-react';

// SVG endpoints recalculados para aspect-ratio 16/11, cards w-[43%], posición top/bottom 4%, left/right 3%
// Centro módulo x: 3 + 43/2 = 24.5 / 100-3-21.5 = 75.5
// Centro módulo y: ≈ 15 (top) / ≈ 85 (bottom) — para container 16:11
const modules = [
    {
        icon: Building2,
        title: 'LLC + EIN',
        sub: 'Estructura inicial',
        color: '#60A5FA',
        border: 'rgba(59,130,246,0.28)',
        bg: 'rgba(59,130,246,0.08)',
        gradId: 'eco-tl',
        gradFrom: 'rgba(96,165,250,0.65)',
        gradTo: 'rgba(96,165,250,0.06)',
        lx: 24.5, ly: 15,
        delay: 'ecosystem-line-delay-1',
        pulseDelay: '0s',
    },
    {
        icon: Globe2,
        title: 'Web + Google Business',
        sub: 'Presencia digital',
        color: '#22D3EE',
        border: 'rgba(6,182,212,0.28)',
        bg: 'rgba(6,182,212,0.08)',
        gradId: 'eco-tr',
        gradFrom: 'rgba(34,211,238,0.65)',
        gradTo: 'rgba(34,211,238,0.06)',
        lx: 75.5, ly: 15,
        delay: 'ecosystem-line-delay-2',
        pulseDelay: '0.75s',
    },
    {
        icon: LineChart,
        title: 'Marketing + Leads',
        sub: 'Captación',
        color: '#A78BFA',
        border: 'rgba(139,92,246,0.28)',
        bg: 'rgba(139,92,246,0.08)',
        gradId: 'eco-bl',
        gradFrom: 'rgba(167,139,250,0.65)',
        gradTo: 'rgba(167,139,250,0.06)',
        lx: 24.5, ly: 85,
        delay: 'ecosystem-line-delay-3',
        pulseDelay: '1.5s',
    },
    {
        icon: FileText,
        title: 'Taxes + orden financiero',
        sub: 'Cumplimiento y control',
        color: '#34D399',
        border: 'rgba(16,185,129,0.28)',
        bg: 'rgba(16,185,129,0.08)',
        gradId: 'eco-br',
        gradFrom: 'rgba(52,211,153,0.65)',
        gradTo: 'rgba(52,211,153,0.06)',
        lx: 75.5, ly: 85,
        delay: 'ecosystem-line-delay-4',
        pulseDelay: '2.25s',
    },
];

function ServiceModule({ mod }: { mod: (typeof modules)[0] }) {
    const Icon = mod.icon;
    return (
        <div
            className="eco-module flex flex-col gap-2 p-4"
            style={{
                border: `1px solid ${mod.border}`,
                background: mod.bg,
                boxShadow: `0 4px 16px rgba(0,0,0,0.22), 0 1px 0 rgba(255,255,255,0.04) inset`,
            }}
        >
            <div className="flex items-center gap-2">
                <span
                    className="eco-pulse w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: mod.color, animationDelay: mod.pulseDelay }}
                    aria-hidden="true"
                />
                <Icon className="w-4 h-4 flex-shrink-0" style={{ color: mod.color }} />
                <span className="font-space text-[0.78rem] font-semibold text-white leading-none truncate">
                    {mod.title}
                </span>
            </div>
            <p
                className="font-mono text-[0.62rem] uppercase tracking-[0.13em] leading-none"
                style={{ color: mod.color, opacity: 0.75 }}
            >
                {mod.sub}
            </p>
        </div>
    );
}

export default function HeroEcosystemVisual() {
    const cx = 50;
    const cy = 50;

    return (
        <div
            className="w-full select-none"
            aria-label="Representación visual del ecosistema de servicios DigiSenda AI"
        >
            {/* Header label */}
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-silver/35 mb-3 text-center">
                El ecosistema DigiSenda
            </p>

            {/* ── Desktop: absolute layout with SVG connections ── */}
            <div
                className="relative hidden md:block w-full overflow-hidden"
                style={{
                    aspectRatio: '16 / 11',
                    background: 'linear-gradient(145deg, rgba(37,99,235,0.07) 0%, rgba(11,15,25,0.6) 45%, rgba(6,182,212,0.05) 100%)',
                    border: '1px solid rgba(255,255,255,0.11)',
                    borderRadius: '1.5rem',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), inset 0 -1px 0 rgba(0,0,0,0.18), 0 24px 48px rgba(0,0,0,0.22)',
                }}
            >
                {/* Top edge luminous highlight */}
                <div
                    className="absolute top-0 left-[10%] right-[10%] h-px pointer-events-none"
                    style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.18), transparent)' }}
                    aria-hidden="true"
                />

                {/* Static diagonal light sweep — 2.5D depth */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    aria-hidden="true"
                    style={{
                        background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.016) 50%, transparent 70%)',
                    }}
                />

                {/* Gold warm accent — top-right corner */}
                <div
                    className="absolute -top-1/4 -right-1/4 w-[55%] h-[55%] rounded-full pointer-events-none"
                    aria-hidden="true"
                    style={{ background: 'radial-gradient(ellipse, rgba(212,168,83,0.06) 0%, transparent 65%)' }}
                />

                {/* Center ambient glow — stronger */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[55%] rounded-full pointer-events-none"
                    aria-hidden="true"
                    style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)' }}
                />

                {/* SVG layer: connections + orbit ring */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <defs>
                        {modules.map((m) => (
                            <linearGradient
                                key={m.gradId}
                                id={m.gradId}
                                x1={cx}
                                y1={cy}
                                x2={m.lx}
                                y2={m.ly}
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0%" stopColor={m.gradFrom} />
                                <stop offset="100%" stopColor={m.gradTo} />
                            </linearGradient>
                        ))}
                    </defs>

                    {/* Subtle orbit dashes around nucleus */}
                    <circle
                        cx={cx}
                        cy={cy}
                        r="13"
                        stroke="rgba(6,182,212,0.13)"
                        strokeWidth="0.7"
                        fill="none"
                        strokeDasharray="2.5 4"
                        vectorEffect="non-scaling-stroke"
                    />

                    {/* Connecting lines — 1.5px, vivid gradients, animated draw */}
                    {modules.map((m) => (
                        <path
                            key={m.gradId}
                            d={`M ${cx} ${cy} L ${m.lx} ${m.ly}`}
                            stroke={`url(#${m.gradId})`}
                            strokeWidth="1.5"
                            fill="none"
                            strokeDasharray="300"
                            vectorEffect="non-scaling-stroke"
                            className={`ecosystem-line ${m.delay}`}
                        />
                    ))}
                </svg>

                {/* ── Nucleus ── */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 z-10">
                    <div
                        className="w-14 h-14 rounded-full border border-white/18 flex items-center justify-center"
                        style={{
                            background: 'radial-gradient(circle, rgba(37,99,235,0.28) 0%, rgba(6,182,212,0.18) 55%, rgba(6,182,212,0.04) 100%)',
                            boxShadow: '0 0 32px rgba(37,99,235,0.28), 0 0 14px rgba(6,182,212,0.20), 0 0 4px rgba(6,182,212,0.35)',
                        }}
                        aria-hidden="true"
                    >
                        <div className="w-3.5 h-3.5 rounded-full border border-ai-cyan/50 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-ai-cyan/70" />
                        </div>
                    </div>
                    <span className="font-mono text-[0.5rem] uppercase tracking-[0.18em] text-silver/35 text-center leading-none">
                        DigiSenda AI
                    </span>
                </div>

                {/* ── Service modules — corners, 43% wide ── */}
                <div className="absolute top-[4%] left-[3%] w-[43%]">
                    <ServiceModule mod={modules[0]} />
                </div>
                <div className="absolute top-[4%] right-[3%] w-[43%]">
                    <ServiceModule mod={modules[1]} />
                </div>
                <div className="absolute bottom-[4%] left-[3%] w-[43%]">
                    <ServiceModule mod={modules[2]} />
                </div>
                <div className="absolute bottom-[4%] right-[3%] w-[43%]">
                    <ServiceModule mod={modules[3]} />
                </div>
            </div>

            {/* ── Mobile: compact 2×2 grid ── */}
            <div
                className="md:hidden p-4 rounded-2xl"
                style={{
                    background: 'linear-gradient(145deg, rgba(37,99,235,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
                }}
            >
                <div className="grid grid-cols-2 gap-2.5">
                    {modules.map((m) => (
                        <ServiceModule key={m.gradId} mod={m} />
                    ))}
                </div>
                <div className="mt-4 flex items-center gap-2">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
                    <span className="font-mono text-[0.5rem] uppercase tracking-widest text-silver/30">
                        DigiSenda AI
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/12 to-transparent" />
                </div>
            </div>
        </div>
    );
}
