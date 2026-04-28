'use client';

import { Building2, Globe2, LineChart, FileText } from 'lucide-react';

const modules = [
    {
        icon: Building2,
        title: 'LLC + EIN',
        sub: 'Estructura inicial',
        color: '#60A5FA',
        border: 'rgba(59,130,246,0.25)',
        bg: 'rgba(59,130,246,0.07)',
        glowColor: 'rgba(59,130,246,0.2)',
        gradId: 'eco-tl',
        gradFrom: 'rgba(96,165,250,0.45)',
        gradTo: 'rgba(96,165,250,0.04)',
        // SVG endpoint (viewBox 0 0 100 100, preserveAspectRatio="none")
        // Container aspect-ratio: 16/13 ≈ 1.23
        // Module at top-left: top 5%, left 4%, width 38%, height ~23% of container height
        // Center x: 4 + 38/2 = 23, Center y: (5 + 23/2) = ~16.5
        lx: 23, ly: 16.5,
        delay: 'ecosystem-line-delay-1',
        pulseDelay: '0s',
    },
    {
        icon: Globe2,
        title: 'Web + Google Business',
        sub: 'Presencia digital',
        color: '#22D3EE',
        border: 'rgba(6,182,212,0.25)',
        bg: 'rgba(6,182,212,0.07)',
        glowColor: 'rgba(6,182,212,0.2)',
        gradId: 'eco-tr',
        gradFrom: 'rgba(34,211,238,0.45)',
        gradTo: 'rgba(34,211,238,0.04)',
        lx: 77, ly: 16.5,
        delay: 'ecosystem-line-delay-2',
        pulseDelay: '0.75s',
    },
    {
        icon: LineChart,
        title: 'Marketing + Leads',
        sub: 'Captación',
        color: '#A78BFA',
        border: 'rgba(139,92,246,0.25)',
        bg: 'rgba(139,92,246,0.07)',
        glowColor: 'rgba(139,92,246,0.2)',
        gradId: 'eco-bl',
        gradFrom: 'rgba(167,139,250,0.45)',
        gradTo: 'rgba(167,139,250,0.04)',
        lx: 23, ly: 83.5,
        delay: 'ecosystem-line-delay-3',
        pulseDelay: '1.5s',
    },
    {
        icon: FileText,
        title: 'Taxes + orden financiero',
        sub: 'Cumplimiento y control',
        color: '#34D399',
        border: 'rgba(16,185,129,0.25)',
        bg: 'rgba(16,185,129,0.07)',
        glowColor: 'rgba(16,185,129,0.2)',
        gradId: 'eco-br',
        gradFrom: 'rgba(52,211,153,0.45)',
        gradTo: 'rgba(52,211,153,0.04)',
        lx: 77, ly: 83.5,
        delay: 'ecosystem-line-delay-4',
        pulseDelay: '2.25s',
    },
];

// Module card — used in both desktop (absolute) and mobile (grid) views
function ServiceModule({
    mod,
    className = '',
}: {
    mod: (typeof modules)[0];
    className?: string;
}) {
    const Icon = mod.icon;
    return (
        <div
            className={`eco-module flex flex-col gap-2 p-3.5 ${className}`}
            style={{ border: `1px solid ${mod.border}`, background: mod.bg }}
        >
            <div className="flex items-center gap-2">
                {/* Pulsing indicator dot */}
                <span
                    className="eco-pulse w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: mod.color, animationDelay: mod.pulseDelay }}
                    aria-hidden="true"
                />
                <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: mod.color }} />
                <span className="font-space text-[0.7rem] font-semibold text-white leading-none truncate">
                    {mod.title}
                </span>
            </div>
            <p className="font-mono text-[0.55rem] uppercase tracking-[0.14em] leading-none" style={{ color: mod.color, opacity: 0.7 }}>
                {mod.sub}
            </p>
        </div>
    );
}

export default function HeroEcosystemVisual() {
    // Center of nucleus in SVG coords (viewBox 0 0 100 100)
    const cx = 50;
    const cy = 50;

    return (
        <div className="w-full select-none" aria-label="Representación visual del ecosistema de servicios DigiSenda AI">
            {/* Header label */}
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-silver/35 mb-3 text-center">
                El ecosistema DigiSenda
            </p>

            {/* ── Desktop layout: absolute modules + SVG lines ── */}
            <div
                className="ecosystem-panel relative hidden md:block w-full"
                style={{ aspectRatio: '16 / 13' }}
            >
                {/* Gold warm accent — subtle atmospheric layer */}
                <div className="hero-gold-accent" aria-hidden="true" />

                {/* Ambient center glow */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] h-[45%] rounded-full pointer-events-none"
                    aria-hidden="true"
                    style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)' }}
                />

                {/* SVG connecting lines */}
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

                    {modules.map((m) => (
                        <path
                            key={m.gradId}
                            d={`M ${cx} ${cy} L ${m.lx} ${m.ly}`}
                            stroke={`url(#${m.gradId})`}
                            strokeWidth="1"
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
                        className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center"
                        style={{
                            background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, rgba(6,182,212,0.10) 100%)',
                            boxShadow: '0 0 28px rgba(37,99,235,0.18), 0 0 10px rgba(6,182,212,0.12)',
                        }}
                        aria-hidden="true"
                    >
                        {/* Inner mark — concentric rings */}
                        <div className="w-3 h-3 rounded-full border border-ai-cyan/40 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-ai-cyan/60" />
                        </div>
                    </div>
                    <span className="font-mono text-[0.5rem] uppercase tracking-[0.18em] text-silver/30 text-center leading-none">
                        DigiSenda AI
                    </span>
                </div>

                {/* ── Service modules — absolutely positioned at corners ── */}
                {/* Top-left: LLC */}
                <div className="absolute top-[5%] left-[4%] w-[37%]">
                    <ServiceModule mod={modules[0]} />
                </div>
                {/* Top-right: Web */}
                <div className="absolute top-[5%] right-[4%] w-[37%]">
                    <ServiceModule mod={modules[1]} />
                </div>
                {/* Bottom-left: Marketing */}
                <div className="absolute bottom-[5%] left-[4%] w-[37%]">
                    <ServiceModule mod={modules[2]} />
                </div>
                {/* Bottom-right: Taxes */}
                <div className="absolute bottom-[5%] right-[4%] w-[37%]">
                    <ServiceModule mod={modules[3]} />
                </div>
            </div>

            {/* ── Mobile layout: compact 2×2 grid ── */}
            <div className="md:hidden ecosystem-panel p-4">
                <div className="grid grid-cols-2 gap-2.5">
                    {modules.map((m) => (
                        <ServiceModule key={m.gradId} mod={m} />
                    ))}
                </div>
                {/* Simple connector line between columns */}
                <div className="mt-4 flex items-center gap-2">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <span className="font-mono text-[0.5rem] uppercase tracking-widest text-silver/30">
                        DigiSenda AI
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent" />
                </div>
            </div>
        </div>
    );
}
