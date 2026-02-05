import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About | DigiSenda AI",
    description: "The philosophy behind the central hub for professional services.",
};

export default function AboutPage() {
    return (
        <div className="container" style={{ padding: "4rem 2rem" }}>
            <header style={{ marginBottom: "4rem", textAlign: "center" }}>
                <h1 className="metallic-text" style={{ fontSize: "3rem", marginBottom: "1rem" }}>Our Vision</h1>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto" }}>
                    Unifying professional identity in a fragmented digital world.
                </p>
            </header>

            <section className="glass-panel" style={{ padding: "3rem", marginBottom: "3rem" }}>
                <h2 style={{ color: "var(--primary-metal)", marginBottom: "1.5rem" }}>The Problem</h2>
                <p style={{ marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                    As professionals scale, they often create multiple brands, websites, and operational silos.
                    This leads to identity fragmentation, duplicated legal efforts, and a lack of centralized authority.
                </p>
            </section>

            <section className="glass-panel" style={{ padding: "3rem" }}>
                <h2 style={{ color: "var(--primary-metal)", marginBottom: "1.5rem" }}>The Solution: DigiSenda AI</h2>
                <p style={{ marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                    DigiSenda AI acts as the "Mother Brand"—a strategic hub that validates, orchestrates, and empowers
                    child services. It is the single source of truth for reputation, legal compliance, and technical architecture.
                </p>
            </section>
        </div>
    );
}
