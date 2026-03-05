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
                "neural-blue": "#2563EB",
                "ai-cyan": "#06B6D4",
                "silver": "#CBD5F5",
                "graphite": "#1E293B",
            },
            fontFamily: {
                space: ["var(--font-space)", "sans-serif"],
                inter: ["var(--font-inter)", "sans-serif"],
                mono: ["var(--font-mono)", "monospace"],
            },
            animation: {
                "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "glow": "glow 2s ease-in-out infinite alternate",
            },
            keyframes: {
                glow: {
                    "0%": { boxShadow: "0 0 10px rgba(37, 99, 235, 0.2)" },
                    "100%": { boxShadow: "0 0 20px rgba(6, 182, 212, 0.6)" },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
