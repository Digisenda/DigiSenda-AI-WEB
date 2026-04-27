import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Github, Youtube, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative bg-[#05080E] z-10 w-full overflow-hidden">

            {/* Top divider with glow */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Dot grid texture */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)',
                    backgroundSize: '2.5rem 2.5rem',
                }}
            />

            {/* Ambient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.06) 0%, transparent 70%)' }} />

            <div className="max-w-7xl mx-auto relative z-10 px-6">

                {/* Brand statement bar */}
                <div className="py-12 border-b border-white/[0.06]">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <p className="text-xs font-mono uppercase tracking-[0.2em] text-silver/35 mb-2">
                                Digisenda AI — Ecosistema de negocios
                            </p>
                            <p className="text-white/80 text-base font-space font-medium max-w-md leading-snug">
                                El socio profesional que tu negocio necesita para crecer en Estados Unidos.
                            </p>
                        </div>
                        <a
                            href="/contact"
                            className="flex-shrink-0 px-6 py-2.5 rounded-full border border-ai-cyan/25 bg-ai-cyan/[0.07] text-ai-cyan text-sm font-mono hover:bg-ai-cyan/[0.12] hover:border-ai-cyan/40 transition-all duration-300"
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

                        <p className="text-silver/50 text-sm max-w-xs mb-6 leading-relaxed">
                            Servicios conectados para que emprendedores latinoamericanos creen, organicen y hagan crecer su negocio en EE.UU.
                        </p>

                        {/* Contact */}
                        <div className="space-y-1.5 text-sm mb-7">
                            <p>
                                <a href="tel:+12542563909" className="text-silver/45 hover:text-ai-cyan transition-colors font-mono text-xs">
                                    +1 254 256 3909
                                </a>
                            </p>
                            <p>
                                <a href="mailto:admin@digisendaai.com" className="text-silver/45 hover:text-ai-cyan transition-colors font-mono text-xs">
                                    admin@digisendaai.com
                                </a>
                            </p>
                        </div>

                        {/* Status indicator */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                            </span>
                            <span className="text-[0.65rem] font-mono text-silver/60">Todos los sistemas activos</span>
                        </div>
                    </div>

                    {/* Services column */}
                    <div>
                        <h4 className="text-white/80 font-space font-semibold mb-5 text-xs uppercase tracking-[0.15em]">Servicios</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="https://llc.digisendaai.com/" target="_blank" rel="noopener noreferrer" className="text-silver/45 hover:text-ai-cyan transition-colors">LLC Service</a></li>
                            <li><a href="https://web.digisendaai.com/" target="_blank" rel="noopener noreferrer" className="text-silver/45 hover:text-ai-cyan transition-colors">Web Services</a></li>
                            <li><a href="https://business.digisendaai.com/" target="_blank" rel="noopener noreferrer" className="text-silver/45 hover:text-ai-cyan transition-colors">Marketing Service</a></li>
                            <li><a href="https://tax.digisendaai.com/" target="_blank" rel="noopener noreferrer" className="text-silver/45 hover:text-ai-cyan transition-colors">Tax Service</a></li>
                            <li><a href="https://www.synapleads.com/" target="_blank" rel="noopener noreferrer" className="text-silver/45 hover:text-ai-cyan transition-colors">SynapLeads</a></li>
                        </ul>
                    </div>

                    {/* Company column */}
                    <div>
                        <h4 className="text-white/80 font-space font-semibold mb-5 text-xs uppercase tracking-[0.15em]">Empresa</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/about" className="text-silver/45 hover:text-ai-cyan transition-colors">Nosotros</Link></li>
                            <li><Link href="/services" className="text-silver/45 hover:text-ai-cyan transition-colors">Servicios</Link></li>
                            <li><Link href="/blog" className="text-silver/45 hover:text-ai-cyan transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="text-silver/45 hover:text-ai-cyan transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Legal column */}
                    <div>
                        <h4 className="text-white/80 font-space font-semibold mb-5 text-xs uppercase tracking-[0.15em]">Legal</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/privacy" className="text-silver/45 hover:text-ai-cyan transition-colors">Privacidad</Link></li>
                            <li><Link href="/terms" className="text-silver/45 hover:text-ai-cyan transition-colors">Términos</Link></li>
                            <li><Link href="/disclaimer" className="text-silver/45 hover:text-ai-cyan transition-colors">Disclaimer</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row items-center justify-between py-6 border-t border-white/[0.05] gap-4">
                    <p className="text-[0.7rem] text-silver/30 font-mono">
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
                                className="text-silver/30 hover:text-white transition-colors duration-300"
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
