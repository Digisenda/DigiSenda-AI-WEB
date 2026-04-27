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
                space: ["var(--font-space)", "sans-serif"],
                inter: ["var(--font-inter)", "sans-serif"],
                mono: ["var(--font-mono)", "monospace"],
            },
            animation: {
                "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "glow": "glow 2s ease-in-out infinite alternate",
                "shimmer": "shimmer 2.5s linear infinite",
                "float": "float 6s ease-in-out infinite",
            },
            keyframes: {
                glow: {
                    "0%": { boxShadow: "0 0 10px rgba(37, 99, 235, 0.2)" },
                    "100%": { boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" },
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
                "glow-blue": "0 0 30px rgba(37, 99, 235, 0.25)",
                "glow-cyan": "0 0 30px rgba(6, 182, 212, 0.25)",
                "card-hover": "0 20px 60px -10px rgba(37, 99, 235, 0.15), 0 8px 24px -4px rgba(0,0,0,0.4)",
                "card-base": "0 4px 24px rgba(0,0,0,0.3)",
            },
        },
    },
    plugins: [],
} satisfies Config;
