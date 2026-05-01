import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Github, Youtube, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative bg-ink z-10 w-full overflow-hidden">

            {/* Borde superior gold quirúrgico */}
            <div
                className="absolute top-0 left-0 w-full h-px"
                style={{ background: 'linear-gradient(to right, transparent, rgba(201,169,97,0.40) 50%, transparent)' }}
                aria-hidden="true"
            />

            {/* Trama de puntos — cálida, muy sutil */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(201,169,97,0.06) 1px, transparent 1px)',
                    backgroundSize: '2.5rem 2.5rem',
                }}
                aria-hidden="true"
            />

            {/* Halo dorado — esquina inferior central */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(201,169,97,0.07) 0%, transparent 70%)' }}
                aria-hidden="true"
            />

            <div className="max-w-7xl mx-auto relative z-10 px-6">

                {/* Brand statement bar */}
                <div className="py-12 border-b border-bone/[0.07]">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <p className="eyebrow-warm mb-2">
                                Digisenda AI — Ecosistema de negocios
                            </p>
                            <p className="text-bone/80 text-base font-body font-medium max-w-md leading-snug">
                                El socio profesional que tu negocio necesita para crecer en Estados Unidos.
                            </p>
                        </div>
                        <a
                            href="/contact"
                            className="flex-shrink-0 btn-warm-primary text-sm"
                        >
                            Empezar ahora →
                        </a>
                    </div>
                </div>

                {/* Main footer grid */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-5 py-14">

                    {/* Brand column */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block mb-5 group">
                            <Image
                                src="/logo.png"
                                alt="DigiSenda AI Logo"
                                width={220}
                                height={60}
                                className="h-14 md:h-16 w-auto object-contain brightness-110 contrast-125 group-hover:brightness-130 transition-all duration-300"
                                unoptimized
                            />
                        </Link>

                        <p className="text-bone/50 text-sm max-w-xs mb-6 leading-relaxed">
                            Servicios conectados para que emprendedores latinoamericanos creen, organicen y hagan crecer su negocio en EE.UU.
                        </p>

                        {/* Contact */}
                        <div className="space-y-1.5 text-sm mb-7">
                            <p>
                                <a
                                    href="tel:+12542563909"
                                    className="text-bone/45 hover:text-gold-soft transition-colors font-mono text-xs"
                                >
                                    +1 254 256 3909
                                </a>
                            </p>
                            <p>
                                <a
                                    href="mailto:admin@digisendaai.com"
                                    className="text-bone/45 hover:text-gold-soft transition-colors font-mono text-xs"
                                >
                                    admin@digisendaai.com
                                </a>
                            </p>
                        </div>

                        {/* Status indicator */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bone/[0.05] border border-bone/[0.10]">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sage" />
                            </span>
                            <span className="text-[0.65rem] font-mono text-bone/55">Todos los sistemas activos</span>
                        </div>
                    </div>

                    {/* Services column */}
                    <div>
                        <h4 className="text-bone/75 font-body font-semibold mb-5 text-xs uppercase tracking-[0.15em]">Servicios</h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                { href: 'https://llc.digisendaai.com/', label: 'LLC Service' },
                                { href: 'https://web.digisendaai.com/', label: 'Web Services' },
                                { href: 'https://business.digisendaai.com/', label: 'Marketing Service' },
                                { href: 'https://tax.digisendaai.com/', label: 'Tax Service' },
                                { href: 'https://www.synapleads.com/', label: 'SynapLeads' },
                            ].map(({ href, label }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-bone/45 hover:text-gold-soft transition-colors"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company column */}
                    <div>
                        <h4 className="text-bone/75 font-body font-semibold mb-5 text-xs uppercase tracking-[0.15em]">Empresa</h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                { href: '/about', label: 'Nosotros' },
                                { href: '/services', label: 'Servicios' },
                                { href: '/blog', label: 'Blog' },
                                { href: '/contact', label: 'Contacto' },
                            ].map(({ href, label }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="text-bone/45 hover:text-gold-soft transition-colors"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal column */}
                    <div>
                        <h4 className="text-bone/75 font-body font-semibold mb-5 text-xs uppercase tracking-[0.15em]">Legal</h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                { href: '/privacy', label: 'Privacidad' },
                                { href: '/terms', label: 'Términos' },
                                { href: '/disclaimer', label: 'Disclaimer' },
                            ].map(({ href, label }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="text-bone/45 hover:text-gold-soft transition-colors"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row items-center justify-between py-6 border-t border-bone/[0.07] gap-4">
                    <p className="text-[0.7rem] text-bone/30 font-mono">
                        © {new Date().getFullYear()} DigiSenda AI. Todos los derechos reservados.
                    </p>

                    {/* Social icons */}
                    <div className="flex items-center gap-5">
                        {[
                            { href: 'https://www.linkedin.com/in/digisenda-ai-34b3053ab/', label: 'LinkedIn', Icon: Linkedin },
                            { href: 'https://github.com/Digisenda', label: 'GitHub', Icon: Github },
                            { href: 'https://www.youtube.com/@DigiSenda', label: 'YouTube', Icon: Youtube },
                            { href: 'https://www.instagram.com/digisendaai/', label: 'Instagram', Icon: Instagram },
                            { href: 'https://www.facebook.com/DigiSenda', label: 'Facebook', Icon: Facebook },
                        ].map(({ href, label, Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="text-bone/30 hover:text-gold-soft transition-colors duration-300"
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
