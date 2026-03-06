import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
    title: "Servicios | DigiSenda AI",
    description: "Ecosistema completo de servicios profesionales orquestados por DigiSenda AI.",
};

export default function ServicesPage() {
    return (
        <div className="min-h-screen pt-32 pb-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-ai-cyan/30 bg-ai-cyan/10 text-ai-cyan text-sm font-mono">
                        <span className="w-2 h-2 rounded-full bg-ai-cyan animate-pulse-slow" />
                        <span>Ecosistema de Servicios</span>
                    </div>
                    
                    <h1 className="font-space text-4xl md:text-6xl font-bold text-white mb-6">
                        Soluciones especializadas para tu negocio
                    </h1>
                    
                    <p className="text-silver/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        DigiSenda AI orquesta un ecosistema de servicios satélite especializados. Cada servicio opera de forma independiente con su propia web y sistema de captura de leads.
                    </p>
                </header>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {/* DigiSenda AI Tax Service - OPERATIONAL */}
                    <div className="glass-panel p-8 hover:border-neural-blue/50 transition-all group">
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neural-blue/20 to-ai-cyan/20 border border-neural-blue/30 flex items-center justify-center">
                                <span className="text-2xl">💼</span>
                            </div>
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-mono">
                                ● Operativo
                            </span>
                        </div>
                        
                        <h3 className="font-space text-2xl font-semibold text-white mb-3 group-hover:text-ai-cyan transition-colors">
                            DigiSenda AI Tax Service
                        </h3>
                        
                        <p className="text-silver/70 mb-6 leading-relaxed">
                            Servicio profesional de preparación de impuestos para individuos y pequeños negocios en Estados Unidos. Enfoque técnico y cumplimiento IRS.
                        </p>
                        
                        <a 
                            href="https://digisenda-ai-tax-service.vercel.app" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-ai-cyan hover:text-neural-blue transition-colors font-mono text-sm"
                        >
                            Visitar sitio web
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>

                    {/* SynapLeads */}
                    <div className="glass-panel p-8 hover:border-white/20 transition-all group opacity-75">
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neural-blue/20 to-ai-cyan/20 border border-white/10 flex items-center justify-center">
                                <span className="text-2xl">🎯</span>
                            </div>
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 border border-white/20 text-silver/50 text-xs font-mono">
                                Próximamente
                            </span>
                        </div>
                        
                        <h3 className="font-space text-2xl font-semibold text-white mb-3">
                            SynapLeads
                        </h3>
                        
                        <p className="text-silver/70 mb-6 leading-relaxed">
                            Plataforma inteligente para captura, calificación y transferencia de leads en tiempo real mediante IA y automatización avanzada.
                        </p>
                        
                        <span className="inline-flex items-center gap-2 text-silver/50 font-mono text-sm">
                            En desarrollo
                        </span>
                    </div>

                    {/* LLC Formation */}
                    <div className="glass-panel p-8 hover:border-white/20 transition-all group opacity-75">
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neural-blue/20 to-ai-cyan/20 border border-white/10 flex items-center justify-center">
                                <span className="text-2xl">🏢</span>
                            </div>
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 border border-white/20 text-silver/50 text-xs font-mono">
                                Próximamente
                            </span>
                        </div>
                        
                        <h3 className="font-space text-2xl font-semibold text-white mb-3">
                            LLC Formation
                        </h3>
                        
                        <p className="text-silver/70 mb-6 leading-relaxed">
                            Servicio integral para la creación y estructuración legal de LLC en Estados Unidos. Incluye registro estatal, EIN y documentación completa.
                        </p>
                        
                        <span className="inline-flex items-center gap-2 text-silver/50 font-mono text-sm">
                            En desarrollo
                        </span>
                    </div>

                    {/* Web Development */}
                    <div className="glass-panel p-8 hover:border-white/20 transition-all group opacity-75">
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neural-blue/20 to-ai-cyan/20 border border-white/10 flex items-center justify-center">
                                <span className="text-2xl">🌐</span>
                            </div>
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 border border-white/20 text-silver/50 text-xs font-mono">
                                Próximamente
                            </span>
                        </div>
                        
                        <h3 className="font-space text-2xl font-semibold text-white mb-3">
                            Web Development
                        </h3>
                        
                        <p className="text-silver/70 mb-6 leading-relaxed">
                            Diseño y despliegue de landing pages y sitios web profesionales orientados a conversión, visibilidad y presencia digital sólida.
                        </p>
                        
                        <span className="inline-flex items-center gap-2 text-silver/50 font-mono text-sm">
                            En desarrollo
                        </span>
                    </div>

                    {/* Digital Marketing */}
                    <div className="glass-panel p-8 hover:border-white/20 transition-all group opacity-75">
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neural-blue/20 to-ai-cyan/20 border border-white/10 flex items-center justify-center">
                                <span className="text-2xl">📈</span>
                            </div>
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 border border-white/20 text-silver/50 text-xs font-mono">
                                Próximamente
                            </span>
                        </div>
                        
                        <h3 className="font-space text-2xl font-semibold text-white mb-3">
                            Digital Marketing
                        </h3>
                        
                        <p className="text-silver/70 mb-6 leading-relaxed">
                            Servicios de marketing digital y educación estratégica enfocados en crecimiento sostenible y control del ecosistema digital.
                        </p>
                        
                        <span className="inline-flex items-center gap-2 text-silver/50 font-mono text-sm">
                            En desarrollo
                        </span>
                    </div>

                    {/* Business Consulting */}
                    <div className="glass-panel p-8 hover:border-white/20 transition-all group opacity-75">
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neural-blue/20 to-ai-cyan/20 border border-white/10 flex items-center justify-center">
                                <span className="text-2xl">💡</span>
                            </div>
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 border border-white/20 text-silver/50 text-xs font-mono">
                                Próximamente
                            </span>
                        </div>
                        
                        <h3 className="font-space text-2xl font-semibold text-white mb-3">
                            Business Consulting
                        </h3>
                        
                        <p className="text-silver/70 mb-6 leading-relaxed">
                            Consultoría estratégica para emprendedores que desean lanzar o escalar operaciones en Estados Unidos con enfoque técnico y práctico.
                        </p>
                        
                        <span className="inline-flex items-center gap-2 text-silver/50 font-mono text-sm">
                            En desarrollo
                        </span>
                    </div>
                </div>

                {/* How it Works Section */}
                <div className="glass-panel p-8 md:p-12 mb-16">
                    <h2 className="font-space text-3xl font-bold text-white mb-6 text-center">
                        Cómo Funciona el Ecosistema
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-8 mt-10">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-neural-blue/20 border border-neural-blue flex items-center justify-center mx-auto mb-4">
                                <span className="font-space font-bold text-2xl text-ai-cyan">1</span>
                            </div>
                            <h3 className="font-space font-semibold text-white mb-2">Hub Central</h3>
                            <p className="text-silver/70 text-sm">
                                DigiSenda AI valida y orquesta todos los servicios del ecosistema
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-neural-blue/20 border border-neural-blue flex items-center justify-center mx-auto mb-4">
                                <span className="font-space font-bold text-2xl text-ai-cyan">2</span>
                            </div>
                            <h3 className="font-space font-semibold text-white mb-2">Servicios Satélite</h3>
                            <p className="text-silver/70 text-sm">
                                Cada servicio opera de forma independiente con su propia web y procesos
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-neural-blue/20 border border-neural-blue flex items-center justify-center mx-auto mb-4">
                                <span className="font-space font-bold text-2xl text-ai-cyan">3</span>
                            </div>
                            <h3 className="font-space font-semibold text-white mb-2">Especialización</h3>
                            <p className="text-silver/70 text-sm">
                                Cada servicio captura y gestiona sus propios leads de forma especializada
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <h3 className="font-space text-2xl font-bold text-white mb-4">
                        ¿Necesitas orientación sobre qué servicio es para ti?
                    </h3>
                    <p className="text-silver/70 mb-8 max-w-2xl mx-auto">
                        Contáctanos y te ayudamos a navegar el ecosistema
                    </p>
                    <Link 
                        href="/contact" 
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-deep-space font-semibold rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
                    >
                        Contactar
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
