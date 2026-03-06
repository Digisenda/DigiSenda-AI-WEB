import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Github, Youtube, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative bg-[#05080E] border-t border-white/10 pt-16 pb-8 px-6 z-10 w-full overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '2rem 2rem' }} />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-5 mb-16">
                    <div className="col-span-1 md:col-span-2 relative">
                        <div className="flex items-center gap-3 mb-4 group inline-flex">
                            <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
                                <Image 
                                    src="/logo.png" 
                                    alt="DigiSenda AI Logo" 
                                    width={40} 
                                    height={40}
                                    className="w-full h-full object-contain p-1"
                                />
                            </div>
                            <span className="font-space font-bold tracking-tight text-white group-hover:text-ai-cyan transition-colors">
                                DigiSenda AI
                            </span>
                        </div>

                        <p className="text-silver/60 text-sm max-w-sm mb-6">
                            Hub central del ecosistema de servicios profesionales para emprendedores. Servicios conectados para ayudarte a crear, organizar y hacer crecer tu negocio en Estados Unidos.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-2 text-sm text-silver/60 mb-6">
                            <p>
                                <a href="tel:+12542563909" className="hover:text-ai-cyan transition-colors">
                                    +1 254 256 3909
                                </a>
                            </p>
                            <p>
                                <a href="mailto:admin@digisendaai.com" className="hover:text-ai-cyan transition-colors">
                                    admin@digisendaai.com
                                </a>
                            </p>
                        </div>

                        {/* Active System Indicator */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-mono text-silver/80">Todos los sistemas operativos</span>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-space font-semibold mb-4 text-sm uppercase tracking-wider">Servicios</h4>
                        <ul className="space-y-2 text-sm text-silver/60">
                            <li><a href="https://tax.digisendaai.com/" target="_blank" rel="noopener noreferrer" className="hover:text-ai-cyan transition-colors">Tax Service</a></li>
                            <li><a href="https://llc.digisendaai.com/" target="_blank" rel="noopener noreferrer" className="hover:text-ai-cyan transition-colors">LLC Service</a></li>
                            <li><a href="https://web.digisendaai.com/" target="_blank" rel="noopener noreferrer" className="hover:text-ai-cyan transition-colors">Web Services</a></li>
                            <li><a href="https://business.digisendaai.com/" target="_blank" rel="noopener noreferrer" className="hover:text-ai-cyan transition-colors">Marketing Service</a></li>
                            <li><a href="https://www.synapleads.com/" target="_blank" rel="noopener noreferrer" className="hover:text-ai-cyan transition-colors">SynapLeads</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-space font-semibold mb-4 text-sm uppercase tracking-wider">Empresa</h4>
                        <ul className="space-y-2 text-sm text-silver/60">
                            <li><Link href="/about" className="hover:text-ai-cyan transition-colors">Nosotros</Link></li>
                            <li><Link href="/services" className="hover:text-ai-cyan transition-colors">Servicios</Link></li>
                            <li><Link href="/blog" className="hover:text-ai-cyan transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-ai-cyan transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-space font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-2 text-sm text-silver/60">
                            <li><Link href="/privacy" className="hover:text-ai-cyan transition-colors">Privacidad</Link></li>
                            <li><Link href="/terms" className="hover:text-ai-cyan transition-colors">Términos</Link></li>
                            <li><Link href="/disclaimer" className="hover:text-ai-cyan transition-colors">Disclaimer</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-silver/50">
                    <p>© {new Date().getFullYear()} DigiSenda AI. Todos los derechos reservados.</p>

                    <div className="flex items-center gap-6 mt-4 md:mt-0">
                        <a href="https://www.linkedin.com/in/digisenda-ai-34b3053ab/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://github.com/Digisenda" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.youtube.com/@DigiSenda" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="YouTube">
                            <Youtube className="w-5 h-5" />
                        </a>
                        <a href="https://www.instagram.com/digisendaai/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="https://www.facebook.com/DigiSenda" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                            <Facebook className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
