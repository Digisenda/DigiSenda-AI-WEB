import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Nosotros | DigiSenda AI",
    description: "Conoce la visión y misión de DigiSenda AI, el hub central para servicios profesionales de emprendedores.",
};

const commitments = [
    { label: 'Claridad', desc: 'Explicamos cada proceso en español, sin jerga innecesaria.' },
    { label: 'Especialización', desc: 'Cada servicio es manejado por expertos en su área.' },
    { label: 'Integración', desc: 'Todos los servicios trabajan juntos para tu beneficio.' },
    { label: 'Transparencia', desc: 'Sabes exactamente qué estás obteniendo y cuánto cuesta.' },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-ivory pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <header className="mb-16 text-center">
                    <p className="eyebrow-warm mb-6 flex items-center justify-center gap-2">
                        <span className="w-4 h-px bg-gold-soft/50" />
                        Nuestra Visión
                        <span className="w-4 h-px bg-gold-soft/50" />
                    </p>
                    <h1 className="font-display text-4xl md:text-6xl font-medium text-ink mb-6 leading-[1.06] tracking-tight">
                        Conectando emprendedores<br className="hidden md:block" /> con{' '}
                        <span className="italic text-graphite-warm">oportunidades reales</span>
                    </h1>
                    <p className="text-graphite-warm/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        DigiSenda AI es el hub central que orquesta un ecosistema completo de servicios profesionales para ayudar a emprendedores hispanohablantes a lanzar y escalar negocios en Estados Unidos.
                    </p>
                </header>

                {/* El Desafío */}
                <section className="editorial-card p-8 md:p-12 mb-8">
                    <h2 className="font-display text-2xl md:text-3xl font-medium text-ink mb-6">
                        El Desafío
                    </h2>
                    <p className="text-graphite-warm/75 leading-relaxed mb-4">
                        Crear y hacer crecer un negocio en Estados Unidos implica navegar múltiples áreas: registro legal, presencia digital, marketing, contabilidad y cumplimiento fiscal. Cada área requiere especialización y coordinación.
                    </p>
                    <p className="text-graphite-warm/75 leading-relaxed">
                        Para muchos emprendedores, especialmente quienes hablan español como lengua principal, esto puede ser abrumador y confuso.
                    </p>
                </section>

                {/* Nuestra Solución */}
                <section className="editorial-card p-8 md:p-12 mb-8">
                    <h2 className="font-display text-2xl md:text-3xl font-medium text-ink mb-6">
                        Nuestra Solución
                    </h2>
                    <p className="text-graphite-warm/75 leading-relaxed mb-4">
                        DigiSenda AI actúa como el hub central que conecta y coordina servicios especializados. No intentamos hacerlo todo nosotros mismos. En su lugar, orquestamos un ecosistema de servicios satélite, cada uno enfocado en resolver un problema específico con excelencia.
                    </p>
                    <p className="text-graphite-warm/75 leading-relaxed">
                        Desde la formación de tu LLC hasta la preparación de impuestos, desde el diseño de tu sitio web hasta la generación de clientes, cada servicio opera de manera independiente pero conectada, garantizando que tu negocio tenga todo lo necesario para crecer con orden y claridad.
                    </p>
                </section>

                {/* Nuestro Compromiso */}
                <section className="bg-sand rounded-[1.25rem] border border-ink/[0.06] p-8 md:p-12 mb-12">
                    <h2 className="font-display text-2xl md:text-3xl font-medium text-ink mb-8">
                        Nuestro Compromiso
                    </h2>
                    <ul className="space-y-5">
                        {commitments.map((item) => (
                            <li key={item.label} className="flex items-start gap-4">
                                <span
                                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                                    style={{ background: 'rgba(201,169,97,0.15)', color: '#C9A961', border: '1px solid rgba(201,169,97,0.35)' }}
                                >
                                    ✓
                                </span>
                                <span className="text-graphite-warm/80 leading-relaxed">
                                    <strong className="text-ink font-semibold">{item.label}:</strong>{' '}
                                    {item.desc}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* CTA */}
                <section className="text-center">
                    <h3 className="font-display text-2xl font-medium text-ink mb-4">
                        ¿Listo para empezar?
                    </h3>
                    <p className="text-graphite-warm/65 mb-8 max-w-2xl mx-auto">
                        Contáctanos y descubre cómo podemos ayudarte a lanzar o hacer crecer tu negocio en Estados Unidos.
                    </p>
                    <a href="/contact" className="btn-warm-primary inline-flex">
                        Hablar con nosotros
                    </a>
                </section>
            </div>
        </div>
    );
}
