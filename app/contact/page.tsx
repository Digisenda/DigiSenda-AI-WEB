import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: "Contacto | DigiSenda AI",
    description: "Contacta con DigiSenda AI. Hub central para orientación sobre servicios del ecosistema.",
};

const contactItems = [
    { Icon: Mail, label: 'Email', value: 'admin@digisendaai.com', href: 'mailto:admin@digisendaai.com', accent: '#C9A961' },
    { Icon: Phone, label: 'Teléfono', value: '+1 (940) 548-7913', href: 'tel:+19405487913', accent: '#6F8F7B' },
    { Icon: MapPin, label: 'Ubicación', value: 'San Antonio, Texas, USA', href: null, accent: '#3A8C9C' },
];

const ecosystemLinks = [
    {
        name: 'DigiSenda AI Tax Service',
        desc: 'Servicio profesional de preparación de impuestos para individuos y pequeños negocios en Estados Unidos.',
        href: 'https://digisenda-ai-tax-service.vercel.app',
        accent: '#C9A961',
        accentBg: 'rgba(201,169,97,0.07)',
        accentBorder: 'rgba(201,169,97,0.22)',
    },
    {
        name: 'SynapLeads',
        desc: 'Plataforma inteligente para captura, calificación y transferencia de leads en tiempo real.',
        href: null,
        accent: '#3A8C9C',
        accentBg: 'rgba(58,140,156,0.07)',
        accentBorder: 'rgba(58,140,156,0.22)',
    },
    {
        name: 'LLC Formation',
        desc: 'Creación y estructuración legal de LLC en Estados Unidos.',
        href: null,
        accent: '#6F8F7B',
        accentBg: 'rgba(111,143,123,0.07)',
        accentBorder: 'rgba(111,143,123,0.22)',
    },
    {
        name: 'Web Development',
        desc: 'Landing pages y sitios web profesionales orientados a conversión.',
        href: null,
        accent: '#5B4A6B',
        accentBg: 'rgba(91,74,107,0.07)',
        accentBorder: 'rgba(91,74,107,0.22)',
    },
];

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-ivory pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <header className="text-center mb-16">
                    <p className="eyebrow-warm mb-6 flex items-center justify-center gap-2">
                        <span className="w-4 h-px bg-gold-soft/50" />
                        Hub Central de Orientación
                        <span className="w-4 h-px bg-gold-soft/50" />
                    </p>
                    <h1 className="font-display text-4xl md:text-6xl font-medium text-ink mb-6 leading-[1.06] tracking-tight">
                        Estamos aquí<br className="hidden md:block" /> para{' '}
                        <span className="italic text-graphite-warm">orientarte</span>
                    </h1>
                    <p className="text-graphite-warm/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        DigiSenda AI es el hub central del ecosistema. Te ayudamos a encontrar el servicio específico que necesitas para hacer crecer tu negocio.
                    </p>
                </header>

                {/* Contact Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {contactItems.map(({ Icon, label, value, href, accent }) => (
                        <div key={label} className="editorial-card p-6 flex flex-col items-center text-center">
                            <div
                                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                                style={{ background: 'rgba(201,169,97,0.10)', border: `1px solid ${accent}40` }}
                            >
                                <Icon className="w-5 h-5" style={{ color: accent }} strokeWidth={2} />
                            </div>
                            <h3 className="font-display font-semibold text-ink mb-2">{label}</h3>
                            {href ? (
                                <a
                                    href={href}
                                    className="text-graphite-warm/75 hover:text-gold-soft transition-colors text-sm"
                                >
                                    {value}
                                </a>
                            ) : (
                                <p className="text-graphite-warm/75 text-sm">{value}</p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Ecosystem */}
                <div className="bg-sand rounded-[1.25rem] border border-ink/[0.06] p-8 md:p-12 mb-12">
                    <h2 className="font-display text-2xl md:text-3xl font-medium text-ink mb-4 text-center">
                        Explora Nuestro Ecosistema de Servicios
                    </h2>
                    <p className="text-graphite-warm/65 text-center mb-10 max-w-2xl mx-auto">
                        Cada servicio opera de forma independiente con su propia web y sistema de captura de leads. Te orientamos hacia la solución correcta.
                    </p>
                    <div className="grid md:grid-cols-2 gap-5">
                        {ecosystemLinks.map((svc) => (
                            <div
                                key={svc.name}
                                className="rounded-xl p-6 transition-colors"
                                style={{
                                    background: svc.accentBg,
                                    border: `1px solid ${svc.accentBorder}`,
                                }}
                            >
                                <h3 className="font-display text-base font-semibold text-ink mb-3">{svc.name}</h3>
                                <p className="text-graphite-warm/70 text-sm mb-4 leading-relaxed">{svc.desc}</p>
                                {svc.href ? (
                                    <a
                                        href={svc.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-mono transition-colors"
                                        style={{ color: svc.accent }}
                                    >
                                        Visitar sitio web
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                ) : (
                                    <span className="text-sm font-mono text-graphite-warm/40">Próximamente</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Note */}
                <div
                    className="rounded-xl p-6 text-center mb-12"
                    style={{ background: 'rgba(201,169,97,0.08)', border: '1px solid rgba(201,169,97,0.25)' }}
                >
                    <p className="text-graphite-warm/80 text-sm">
                        <strong className="text-ink font-semibold">Nota importante:</strong>{' '}
                        DigiSenda AI es el hub central de orientación. Cada servicio satélite gestiona su propia captación de leads y procesos comerciales de forma independiente.
                    </p>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <p className="text-graphite-warm/60 mb-6">
                        ¿Quieres conocer más sobre nuestro ecosistema?
                    </p>
                    <Link href="/services" className="btn-warm-primary inline-flex">
                        Explorar todos los servicios
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
