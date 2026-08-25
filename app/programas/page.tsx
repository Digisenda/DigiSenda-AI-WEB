import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import ProgramasForm from '../../components/ProgramasForm';

export const metadata: Metadata = {
    title: 'Programas institucionales | DigiSenda AI',
    description:
        'Small Business Digital Enablement para entidades públicas, SBDC, nonprofits y cohortes — Bexar County y alrededores.',
};

const puntos = [
    'Diseñado para contratos públicos, cohorts, grants, accelerators o programas de asistencia empresarial',
    'Tú defines población, cantidad de participantes y métricas — nosotros configuramos los módulos',
    'Precio por participante, por nivel de servicio o por proyecto/Statement of Work',
    'Registrados como proveedor de Bexar County — commodity codes de consultoría, web, marketing y training',
];

export default function ProgramasPage() {
    return (
        <div className="min-h-screen bg-ivory pt-32 pb-20 px-6">
            <div className="max-w-5xl mx-auto">
                <header className="text-center mb-16 max-w-2xl mx-auto">
                    <p className="eyebrow-warm mb-6 flex items-center justify-center gap-2">
                        <span className="w-4 h-px bg-gold-soft/50" />
                        Programas institucionales
                        <span className="w-4 h-px bg-gold-soft/50" />
                    </p>
                    <h1 className="font-display text-3xl md:text-5xl font-medium text-ink mb-6 leading-[1.08] tracking-tight">
                        Small Business Digital Enablement,{' '}
                        <span className="italic text-graphite-warm">a escala de programa</span>
                    </h1>
                    <p className="text-graphite-warm/70 text-base md:text-lg leading-relaxed">
                        Para entidades públicas, SBDC, organizaciones sin fines de lucro y
                        cohortes que quieren llevar formalización, presencia digital y
                        adquisición de clientes a los pequeños negocios que atienden.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="editorial-card p-8">
                        <h2 className="font-display text-xl font-semibold text-ink mb-6">
                            Cómo trabajamos con instituciones
                        </h2>
                        <ul className="flex flex-col gap-4">
                            {puntos.map((p) => (
                                <li key={p} className="flex items-start gap-3">
                                    <Check className="w-4 h-4 mt-1 shrink-0 text-gold-soft" />
                                    <span className="text-graphite-warm/80 leading-relaxed">{p}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-xs text-graphite-warm/45 mt-8 font-mono">
                            No fijamos precio público institucional aquí — se define por proyecto o
                            Statement of Work según el alcance de cada programa.
                        </p>
                    </div>

                    <ProgramasForm />
                </div>
            </div>
        </div>
    );
}
