import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Nosotros | DigiSenda AI",
    description: "Conoce la visión y misión de DigiSenda AI, el hub central para servicios profesionales de emprendedores.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-32 pb-16 px-6">
            <div className="max-w-4xl mx-auto">
                <header className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-ai-cyan/30 bg-ai-cyan/10 text-ai-cyan text-sm font-mono">
                        <span className="w-2 h-2 rounded-full bg-ai-cyan animate-pulse-slow" />
                        <span>Nuestra Visión</span>
                    </div>
                    
                    <h1 className="font-space text-4xl md:text-6xl font-bold text-white mb-6">
                        Conectando emprendedores con <span className="text-gradient">oportunidades reales</span>
                    </h1>
                    
                    <p className="text-silver/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        DigiSenda AI es el hub central que orquesta un ecosistema completo de servicios profesionales para ayudar a emprendedores hispanohablantes a lanzar y escalar negocios en Estados Unidos.
                    </p>
                </header>

                <section className="glass-panel p-8 md:p-12 mb-12">
                    <h2 className="text-2xl md:text-3xl font-space font-bold text-white mb-6">
                        El Desafío
                    </h2>
                    <p className="text-silver/80 leading-relaxed mb-4">
                        Crear y hacer crecer un negocio en Estados Unidos implica navegar múltiples áreas: registro legal, presencia digital, marketing, contabilidad y cumplimiento fiscal. Cada área requiere especialización y coordinación.
                    </p>
                    <p className="text-silver/80 leading-relaxed">
                        Para muchos emprendedores, especialmente quienes hablan español como lengua principal, esto puede ser abrumador y confuso.
                    </p>
                </section>

                <section className="glass-panel p-8 md:p-12 mb-12">
                    <h2 className="text-2xl md:text-3xl font-space font-bold text-white mb-6">
                        Nuestra Solución
                    </h2>
                    <p className="text-silver/80 leading-relaxed mb-4">
                        DigiSenda AI actúa como el hub central que conecta y coordina servicios especializados. No intentamos hacerlo todo nosotros mismos. En su lugar, orquestamos un ecosistema de servicios satélite, cada uno enfocado en resolver un problema específico con excelencia.
                    </p>
                    <p className="text-silver/80 leading-relaxed">
                        Desde la formación de tu LLC hasta la preparación de impuestos, desde el diseño de tu sitio web hasta la generación de clientes, cada servicio opera de manera independiente pero conectada, garantizando que tu negocio tenga todo lo necesario para crecer con orden y claridad.
                    </p>
                </section>

                <section className="glass-panel p-8 md:p-12 mb-12 bg-gradient-to-r from-neural-blue/10 to-ai-cyan/10">
                    <h2 className="text-2xl md:text-3xl font-space font-bold text-white mb-6">
                        Nuestro Compromiso
                    </h2>
                    <ul className="space-y-4 text-silver/80">
                        <li className="flex items-start gap-3">
                            <span className="text-ai-cyan text-xl">✓</span>
                            <span><strong className="text-white">Claridad:</strong> Explicamos cada proceso en español, sin jerga innecesaria.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-ai-cyan text-xl">✓</span>
                            <span><strong className="text-white">Especialización:</strong> Cada servicio es manejado por expertos en su área.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-ai-cyan text-xl">✓</span>
                            <span><strong className="text-white">Integración:</strong> Todos los servicios trabajan juntos para tu beneficio.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-ai-cyan text-xl">✓</span>
                            <span><strong className="text-white">Transparencia:</strong> Sabes exactamente qué estás obteniendo y cuánto cuesta.</span>
                        </li>
                    </ul>
                </section>

                <section className="text-center">
                    <h3 className="font-space text-2xl font-bold text-white mb-4">
                        ¿Listo para empezar?
                    </h3>
                    <p className="text-silver/70 mb-8 max-w-2xl mx-auto">
                        Contáctanos y descubre cómo podemos ayudarte a lanzar o hacer crecer tu negocio en Estados Unidos.
                    </p>
                    <a 
                        href="/contact" 
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-deep-space font-semibold rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
                    >
                        Hablar con nosotros
                    </a>
                </section>
            </div>
        </div>
    );
}
