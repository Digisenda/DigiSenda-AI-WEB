import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",

                // ── Warm-Premium Editorial palette (v3) ──
                // Bases claras (60–70 % del sitio)
                ivory: "#F7F3EC",
                sand: "#EDE5D6",
                bone: "#FBF8F2",
                mist: "#E8EAE6",

                // Contraste oscuro editorial
                ink: "#0E1A1F",
                "graphite-warm": "#2A2E2B",
                "navy-deep": "#10243A",

                // Acentos quirúrgicos
                "gold-soft": "#C9A961",
                terracotta: "#C76F4A",
                sage: "#6F8F7B",
                plum: "#5B4A6B",
                "cyan-controlled": "#3A8C9C",

                // ── Legacy tokens (en proceso de retiro Fase 3+) ──
                // Mantenidos para que componentes aún no rediseñados no rompan.
                "deep-space": "#0B0F19",
                "midnight": "#070B14",
                "neural-blue": "#2563EB",
                "neural-blue-light": "#3B82F6",
                "ai-cyan": "#06B6D4",
                "ai-cyan-dim": "#0891B2",
                "silver": "#CBD5F5",
                "silver-dim": "#94A3B8",
                "graphite": "#1E293B",
                "graphite-light": "#2D3F55",
                "gold": "#D4A853",
                "gold-dim": "#A07840",
            },
            fontFamily: {
                // Nuevas (v3) — cargadas vía next/font en app/layout.tsx
                display: ["var(--font-display)", "Georgia", "serif"],
                body: ["var(--font-body)", "system-ui", "sans-serif"],
                mono: ["var(--font-mono)", "monospace"],

                // Legacy aliases — apuntan a las nuevas para no romper className=font-space / font-inter
                space: ["var(--font-display)", "Georgia", "serif"],
                inter: ["var(--font-body)", "system-ui", "sans-serif"],
            },
            animation: {
                "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "glow": "glow 2s ease-in-out infinite alternate",
                "shimmer": "shimmer 2.5s linear infinite",
                "float": "float 6s ease-in-out infinite",
                "float-slow": "float 9s ease-in-out infinite",
                "float-slower": "float 12s ease-in-out infinite",
            },
            keyframes: {
                glow: {
                    "0%": { boxShadow: "0 0 10px rgba(201, 169, 97, 0.18)" },
                    "100%": { boxShadow: "0 0 28px rgba(201, 169, 97, 0.40)" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-8px)" },
                },
            },
            backgroundSize: {
                "200%": "200%",
            },
            boxShadow: {
                // Sombras cálidas editoriales (v3)
                "warm-sm": "0 2px 10px rgba(78, 56, 32, 0.06), 0 1px 2px rgba(78, 56, 32, 0.04)",
                "warm": "0 12px 28px -8px rgba(78, 56, 32, 0.14), 0 4px 10px -2px rgba(78, 56, 32, 0.08)",
                "warm-lg": "0 28px 60px -16px rgba(78, 56, 32, 0.20), 0 10px 24px -6px rgba(78, 56, 32, 0.10)",
                "card-premium": "0 20px 50px -14px rgba(14, 26, 31, 0.18), 0 6px 14px -4px rgba(14, 26, 31, 0.08), 0 0 0 1px rgba(201, 169, 97, 0.10)",
                "gold-ring": "0 0 0 1px rgba(201, 169, 97, 0.35), 0 12px 28px -10px rgba(201, 169, 97, 0.30)",

                // Legacy
                "glow-blue": "0 0 30px rgba(37, 99, 235, 0.25)",
                "glow-cyan": "0 0 30px rgba(6, 182, 212, 0.25)",
                "card-hover": "0 20px 60px -10px rgba(37, 99, 235, 0.15), 0 8px 24px -4px rgba(0,0,0,0.4)",
                "card-base": "0 4px 24px rgba(0,0,0,0.3)",
            },
        },
    },
    plugins: [],
} satisfies Config;
