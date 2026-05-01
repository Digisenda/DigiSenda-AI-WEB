import type { Metadata } from 'next';
import { Fraunces, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ── Tipografías v3 (Editorial Warm-Premium) ──
// Display: Fraunces — serif moderna con personalidad editorial.
// Body: Plus Jakarta Sans — humanista contemporánea, no Inter.
// Mono: JetBrains Mono — eyebrows técnicos.
const fontDisplay = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display',
});

const fontBody = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-body',
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono',
});

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
    <html
      lang="es"
      className={`scroll-smooth ${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`}
    >
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
      <body className="antialiased min-h-screen relative bg-ivory text-graphite-warm font-body">
        {/* Warm grain global — 2.5 % */}
        <div className="warm-grain" aria-hidden="true"></div>

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
