import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: "Contacto | DigiSenda AI",
    description: "Contacta con DigiSenda AI. Hub central para orientación sobre servicios del ecosistema.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-32 pb-16 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <header className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-ai-cyan/30 bg-ai-cyan/10 text-ai-cyan text-sm font-mono">
                        <span className="w-2 h-2 rounded-full bg-ai-cyan animate-pulse-slow" />
                        <span>Hub Central de Orientación</span>
                    </div>
                    
                    <h1 className="font-space text-4xl md:text-6xl font-bold text-white mb-6">
                        Estamos aquí para orientarte
                    </h1>
                    
                    <p className="text-silver/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        DigiSenda AI es el hub central del ecosistema. Te ayudamos a encontrar el servicio específico que necesitas para hacer crecer tu negocio.
                    </p>
                </header>

                {/* Contact Information Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <div className="glass-panel p-6 flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-neural-blue/20 border border-neural-blue flex items-center justify-center mb-4">
                            <Mail className="w-6 h-6 text-ai-cyan" />
                        </div>
                        <h3 className="font-space font-semibold text-white mb-2">Email</h3>
                        <a href="mailto:admin@digisendaai.com" className="text-silver/80 hover:text-ai-cyan transition-colors text-sm">
                            admin@digisendaai.com
                        </a>
                    </div>

                    <div className="glass-panel p-6 flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-neural-blue/20 border border-neural-blue flex items-center justify-center mb-4">
                            <Phone className="w-6 h-6 text-ai-cyan" />
                        </div>
                        <h3 className="font-space font-semibold text-white mb-2">Teléfono</h3>
                        <a href="tel:+19405487913" className="text-silver/80 hover:text-ai-cyan transition-colors text-sm">
                            +1 (940) 548-7913
                        </a>
                    </div>

                    <div className="glass-panel p-6 flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-neural-blue/20 border border-neural-blue flex items-center justify-center mb-4">
                            <MapPin className="w-6 h-6 text-ai-cyan" />
                        </div>
                        <h3 className="font-space font-semibold text-white mb-2">Ubicación</h3>
                        <p className="text-silver/80 text-sm">
                            San Antonio, Texas<br />USA
                        </p>
                    </div>
                </div>

                {/* Services Ecosystem Section */}
                <div className="glass-panel p-8 md:p-12 mb-16">
                    <h2 className="font-space text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                        Explora Nuestro Ecosistema de Servicios
                    </h2>
                    
                    <p className="text-silver/80 text-center mb-10 max-w-2xl mx-auto">
                        Cada servicio opera de forma independiente con su propia web y sistema de captura de leads. Te orientamos hacia la solución correcta.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* DigiSenda AI Tax Service */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-neural-blue/50 transition-colors">
                            <h3 className="font-space text-xl font-semibold text-white mb-3">
                                DigiSenda AI Tax Service
                            </h3>
                            <p className="text-silver/70 text-sm mb-4 leading-relaxed">
                                Servicio profesional de preparación de impuestos para individuos y pequeños negocios en Estados Unidos.
                            </p>
                            <a 
                                href="https://digisenda-ai-tax-service.vercel.app" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-ai-cyan hover:text-neural-blue transition-colors text-sm font-mono"
                            >
                                Visitar sitio web
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        {/* SynapLeads */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-neural-blue/50 transition-colors">
                            <h3 className="font-space text-xl font-semibold text-white mb-3">
                                SynapLeads
                            </h3>
                            <p className="text-silver/70 text-sm mb-4 leading-relaxed">
                                Plataforma inteligente para captura, calificación y transferencia de leads en tiempo real.
                            </p>
                            <span className="inline-flex items-center gap-2 text-silver/50 text-sm font-mono">
                                Próximamente
                            </span>
                        </div>

                        {/* LLC Formation */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-neural-blue/50 transition-colors">
                            <h3 className="font-space text-xl font-semibold text-white mb-3">
                                LLC Formation
                            </h3>
                            <p className="text-silver/70 text-sm mb-4 leading-relaxed">
                                Creación y estructuración legal de LLC en Estados Unidos.
                            </p>
                            <span className="inline-flex items-center gap-2 text-silver/50 text-sm font-mono">
                                Próximamente
                            </span>
                        </div>

                        {/* Web Development */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-neural-blue/50 transition-colors">
                            <h3 className="font-space text-xl font-semibold text-white mb-3">
                                Web Development
                            </h3>
                            <p className="text-silver/70 text-sm mb-4 leading-relaxed">
                                Landing pages y sitios web profesionales orientados a conversión.
                            </p>
                            <span className="inline-flex items-center gap-2 text-silver/50 text-sm font-mono">
                                Próximamente
                            </span>
                        </div>
                    </div>
                </div>

                {/* Information Note */}
                <div className="bg-neural-blue/10 border border-neural-blue/30 rounded-2xl p-6 text-center">
                    <p className="text-silver/80 text-sm">
                        <strong className="text-white">Nota importante:</strong> DigiSenda AI es el hub central de orientación. 
                        Cada servicio satélite gestiona su propia captación de leads y procesos comerciales de forma independiente.
                    </p>
                </div>

                {/* Additional Actions */}
                <div className="mt-16 text-center">
                    <p className="text-silver/60 mb-6">
                        ¿Quieres conocer más sobre nuestro ecosistema?
                    </p>
                    <Link 
                        href="/services" 
                        className="inline-flex items-center gap-2 px-8 py-4 bg-neural-blue/20 hover:bg-neural-blue border border-neural-blue font-semibold rounded-full text-white transition-all duration-300"
                    >
                        Explorar todos los servicios
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
