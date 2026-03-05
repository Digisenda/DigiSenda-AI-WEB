import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'DigiSenda AI | Lanza y escala tu negocio en Estados Unidos',
  description: 'DigiSenda AI ayuda a emprendedores a crear su empresa (LLC/EIN), construir su presencia digital, generar leads y gestionar impuestos con tecnología.',
  openGraph: {
    title: 'DigiSenda AI | Plataforma Tecnológica Corporativa',
    description: 'Ecosistema completo para lanzar tu LLC, construir presencia digital, adquirir clientes e impuestos en USA.',
    url: 'https://digisenda.ai',
    siteName: 'DigiSenda AI',
    images: [
      {
        url: 'https://digisenda.ai/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DigiSenda AI Banner',
      },
    ],
    locale: 'es_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Structured Data JSON-LD Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DigiSenda AI",
              "url": "https://digisenda.ai",
              "logo": "https://digisenda.ai/logo.png",
              "sameAs": [
                "https://www.linkedin.com/company/digisenda-ai",
                "https://twitter.com/digisendaai"
              ]
            }),
          }}
        />
      </head>
      <body className="antialiased min-h-screen relative bg-[#0B0F19] text-[#CBD5F5] font-inter">
        {/* Global texture */}
        <div className="noise-overlay" aria-hidden="true"></div>

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
