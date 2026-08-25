import type { Metadata } from 'next';
import DiagnosticoWizard from '../../components/DiagnosticoWizard';

export const metadata: Metadata = {
    title: 'Diagnóstico gratuito | Small Business Digital Enablement | DigiSenda AI',
    description:
        'Responde 10 preguntas y recibe tu Action Plan personalizado: qué necesita tu negocio y con qué banda de precio.',
};

export default function DiagnosticoPage() {
    return (
        <div className="min-h-screen bg-ivory pt-32 pb-20 px-6">
            <header className="text-center mb-12 max-w-2xl mx-auto">
                <p className="eyebrow-warm mb-6 flex items-center justify-center gap-2">
                    <span className="w-4 h-px bg-gold-soft/50" />
                    Diagnóstico gratuito
                    <span className="w-4 h-px bg-gold-soft/50" />
                </p>
                <h1 className="font-display text-3xl md:text-5xl font-medium text-ink mb-4 leading-[1.08] tracking-tight">
                    ¿Qué le falta a tu negocio<br className="hidden md:block" />{' '}
                    <span className="italic text-graphite-warm">para crecer</span>?
                </h1>
                <p className="text-graphite-warm/70 text-base md:text-lg leading-relaxed">
                    10 preguntas, 2 minutos. Al final recibes tu Action Plan con lo que
                    necesitas y su banda de precio — sin compromiso.
                </p>
            </header>

            <DiagnosticoWizard />
        </div>
    );
}
