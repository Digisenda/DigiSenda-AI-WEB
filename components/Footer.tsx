import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative bg-[#05080E] border-t border-white/10 pt-16 pb-8 px-6 z-10 w-full overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '2rem 2rem' }} />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4 mb-16">
                    <div className="col-span-1 md:col-span-2 relative">
                        <div className="flex items-center gap-2 mb-4 group inline-flex">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neural-blue to-ai-cyan grid place-items-center">
                                <span className="text-white font-space font-bold">D</span>
                            </div>
                            <span className="font-space font-bold tracking-tight text-white group-hover:text-ai-cyan transition-colors">
                                DigiSenda AI
                            </span>
                        </div>

                        <p className="text-silver/60 text-sm max-w-sm mb-6">
                            Plataforma tecnológica corporativa. Lanzamiento de LLCs, ecosistemas digitales,
                            captación de leads mediante SynapLeads y contabilidad B2B.
                        </p>

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
                        <h4 className="text-white font-space font-semibold mb-4 text-sm uppercase tracking-wider">Soluciones</h4>
                        <ul className="space-y-2 text-sm text-silver/60">
                            <li><Link href="#incorporation" className="hover:text-ai-cyan transition-colors">Incorporación de Empresa</Link></li>
                            <li><Link href="#digital" className="hover:text-ai-cyan transition-colors">Presencia Digital</Link></li>
                            <li><Link href="#synapleads" className="hover:text-ai-cyan transition-colors">SynapLeads</Link></li>
                            <li><Link href="#finance" className="hover:text-ai-cyan transition-colors">Impuestos y Finanzas</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-space font-semibold mb-4 text-sm uppercase tracking-wider">Empresa</h4>
                        <ul className="space-y-2 text-sm text-silver/60">
                            <li><Link href="/about" className="hover:text-ai-cyan transition-colors">Nosotros</Link></li>
                            <li><Link href="/blog" className="hover:text-ai-cyan transition-colors">Casos de Éxito</Link></li>
                            <li><Link href="/contact" className="hover:text-ai-cyan transition-colors">Contacto</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-silver/50">
                    <p>© {new Date().getFullYear()} DigiSenda AI. Todos los derechos reservados.</p>

                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacidad</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Términos</Link>
                        <div className="ml-4 flex items-center gap-3">
                            <a href="https://twitter.com/digisendaai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
                            <a href="https://linkedin.com/company/digisenda-ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
