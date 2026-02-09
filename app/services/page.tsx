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
                <ServiceCard
                    title="SynapLeads"
                    description="Plataforma inteligente para captura, calificación y transferencia de leads en tiempo real."
                    link="/contact?service=synapleads"
                />
                <ServiceCard
                    title="LLC Formation"
                    description="Servicio integral para la creación y organización legal de LLC en Estados Unidos."
                    link="/contact?service=llc"
                />
                <ServiceCard
                    title="Web Development"
                    description="Diseño y despliegue de sitios web y landing pages orientadas a conversión y visibilidad."
                    link="/contact?service=web"
                />
                <ServiceCard
                    title="Tax Preparation"
                    description="Servicio profesional de preparación de impuestos para individuos y pequeños negocios en EE.UU."
                    link="/contact?service=taxes"
                />
                <ServiceCard
                    title="Digital Marketing"
                    description="Servicios de marketing digital y divulgación educativa enfocados en crecimiento sostenible."
                    link="/contact?service=marketing"
                />
            </div>
        </div>
    );
}
