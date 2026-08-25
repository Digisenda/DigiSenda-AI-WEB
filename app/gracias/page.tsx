import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Gracias | DigiSenda AI',
    description: 'Recibimos tu diagnóstico. Nuestro equipo te contactará pronto.',
    robots: { index: false, follow: false },
};

export default function GraciasPage() {
    return (
        <div className="min-h-screen bg-ivory flex items-center justify-center px-6 py-32">
            <div className="editorial-card max-w-lg w-full p-10 text-center">
                <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'rgba(111,143,123,0.10)', border: '1px solid rgba(111,143,123,0.30)' }}
                >
                    <CheckCircle className="w-8 h-8 text-sage" />
                </div>
                <h1 className="font-display text-3xl font-medium text-ink mb-4">
                    ¡Recibimos tu diagnóstico!
                </h1>
                <p className="text-graphite-warm/70 mb-8 leading-relaxed">
                    Un miembro de nuestro equipo revisará tu Action Plan y te contactará
                    en menos de 1 día hábil por el canal que elegiste.
                </p>
                <Link href="/" className="btn-warm-primary inline-flex">
                    Volver al inicio
                </Link>
            </div>
        </div>
    );
}
