import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'DigiSenda AI | Lanza y escala tu negocio en Estados Unidos',
  description: 'DigiSenda AI ayuda a emprendedores a crear su empresa (LLC/EIN), construir su presencia digital, generar leads y gestionar impuestos con tecnología.',
  openGraph: {
    title: 'DigiSenda AI | Lanza • Estructura • Escala',
    description: 'Tu negocio en Estados Unidos: LLC • Presencia digital • Clientes • Taxes',
    url: 'https://digisendaai.com',
    siteName: 'DigiSenda AI',
    images: [
      {
        url: 'https://digisendaai.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DigiSenda AI - Lanza, Estructura y Escala tu negocio en Estados Unidos',
      },
    ],
    locale: 'es_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DigiSenda AI | Lanza • Estructura • Escala',
    description: 'Tu negocio en Estados Unidos: LLC • Presencia digital • Clientes • Taxes',
    images: ['https://digisendaai.com/og-image.png'],
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
              "url": "https://digisendaai.com",
              "logo": "https://digisendaai.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-254-256-3909",
                "contactType": "customer service",
                "email": "admin@digisendaai.com"
              },
              "sameAs": [
                "https://www.linkedin.com/in/digisenda-ai-34b3053ab/",
                "https://github.com/Digisenda",
                "https://www.youtube.com/@DigiSenda",
                "https://www.instagram.com/digisendaai/",
                "https://www.facebook.com/DigiSenda"
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
