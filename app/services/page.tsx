import type { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
    title: "Services | DigiSenda AI",
    description: "Explore the ecosystem of professional services validated by DigiSenda AI.",
};

export default function ServicesPage() {
    return (
        <div className="container" style={{ padding: "4rem 2rem" }}>
            <header style={{ marginBottom: "4rem", textAlign: "center" }}>
                <h1 className="metallic-text" style={{ fontSize: "3rem", marginBottom: "1rem" }}>Ecosystem Services</h1>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem" }}>
                    Specialized solutions orchestrated by the central hub.
                </p>
            </header>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "2rem" }}>
                {/* Example Services - placeholders for future child brands */}
                <ServiceCard
                    title="Consulting"
                    description="Strategic advisory for digital transformation."
                    link="/contact?service=consulting"
                />
                <ServiceCard
                    title="Development"
                    description="High-performance web and software engineering."
                    link="/contact?service=development"
                />
                <ServiceCard
                    title="AI Integration"
                    description="Leveraging Large Language Models for business efficiency."
                    link="/contact?service=ai"
                />
            </div>
        </div>
    );
}
