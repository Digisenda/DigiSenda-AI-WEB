import type { LucideIcon } from 'lucide-react';
import { Building2, Globe2, LineChart, Settings2 } from 'lucide-react';

export type ModuloId = 'fundacion' | 'presencia' | 'captacion' | 'operaciones';

export type PrecioItem = {
    label: string;
    rango: string;
};

export type Modulo = {
    id: ModuloId;
    slug: string;
    num: string;
    icon: LucideIcon;
    title: string;
    sub: string;
    objetivo: string;
    servicios: string[];
    limites: string[];
    resultadoMedible: string;
    precios: PrecioItem[];
    accent: string;
    accentBg: string;
    accentBorder: string;
    numColor: string;
};

// Contenido tomado literal de "Arquitectura Comercial v0.1 — Small Business
// Digital Enablement" (Notion, aprobada 2026-08-17/20) y de
// digisenda-bexar/docs/comercial/matriz-precios.md (bandas aprobadas
// 2026-08-20, vigentes para uso con clientes y con el Condado).
// Fuente única de verdad: Ecosystem, Footer, /services y /contact deben leer
// de aquí en vez de mantener sus propias copias del catálogo.
export const MODULOS: Modulo[] = [
    {
        id: 'fundacion',
        slug: 'fundacion',
        num: '01',
        icon: Building2,
        title: 'Business Foundation',
        sub: 'LLC + EIN',
        objetivo:
            'Llevarte de la idea o la informalidad a una estructura empresarial operativa.',
        servicios: [
            'Orientación y acompañamiento para formación de LLC',
            'EIN y organización documental inicial',
            'DBA cuando corresponda',
            'Organización de datos básicos del negocio',
            'Checklist inicial de cumplimiento y próximos pasos',
            'Orientación para apertura bancaria y separación de finanzas',
        ],
        limites: [
            'No es asesoría legal ni servicios financieros regulados',
            'No sustituye a un abogado o contador cuando el caso lo requiere',
        ],
        resultadoMedible:
            'Negocio con estructura básica definida y documentación organizada para operar.',
        precios: [{ label: 'Acompañamiento LLC + EIN', rango: '$150–$350' }],
        accent: '#6F8F7B',
        accentBg: 'rgba(111,143,123,0.10)',
        accentBorder: 'rgba(111,143,123,0.28)',
        numColor: 'rgba(111,143,123,0.18)',
    },
    {
        id: 'presencia',
        slug: 'presencia',
        num: '02',
        icon: Globe2,
        title: 'Digital Presence',
        sub: 'Web + Google Business',
        objetivo:
            'Que tu negocio exista profesionalmente en internet y pueda ser encontrado y contactado.',
        servicios: [
            'Sitio web o landing page profesional',
            'Dominio y configuración básica',
            'Google Business Profile',
            'Configuración de correo profesional',
            'Integración de llamadas, WhatsApp, formularios y citas',
            'Analítica básica y medición de tráfico/conversión',
        ],
        limites: [
            'Dominio, correo y Google Business Profile quedan a tu nombre — DigiSenda opera con acceso delegado, no se apropia de las cuentas',
            'Suscripciones y publicidad de terceros las pagas tú directamente',
        ],
        resultadoMedible:
            'Presencia digital publicada, verificable y con canales de contacto funcionales.',
        precios: [
            { label: 'Sitio web básico', rango: '$1,800–$3,500' },
            { label: 'Google Business Profile (setup)', rango: '$150–$300' },
            { label: 'Mantenimiento mensual', rango: '$75–$150/mes' },
        ],
        accent: '#3A8C9C',
        accentBg: 'rgba(58,140,156,0.10)',
        accentBorder: 'rgba(58,140,156,0.28)',
        numColor: 'rgba(58,140,156,0.18)',
    },
    {
        id: 'captacion',
        slug: 'captacion',
        num: '03',
        icon: LineChart,
        title: 'Customer Acquisition',
        sub: 'Marketing + Leads',
        objetivo:
            'Pasar de tener presencia digital a generar demanda y oportunidades comerciales reales.',
        servicios: [
            'Definición de oferta y mensaje',
            'Activos básicos de redes sociales',
            'Campañas orgánicas',
            'Preparación de campañas pagadas cuando proceda',
            'Lead capture y seguimiento comercial básico',
            'Reputación digital y reseñas',
        ],
        limites: [
            'No garantizamos resultados de ventas o marketing',
            'Cuentas publicitarias y píxeles quedan a tu nombre',
        ],
        resultadoMedible:
            'Sistema mínimo para atraer, registrar y dar seguimiento a prospectos.',
        precios: [{ label: 'Adquisición de clientes', rango: '$400–$900/mes' }],
        accent: '#5B4A6B',
        accentBg: 'rgba(91,74,107,0.10)',
        accentBorder: 'rgba(91,74,107,0.28)',
        numColor: 'rgba(91,74,107,0.18)',
    },
    {
        id: 'operaciones',
        slug: 'operaciones',
        num: '04',
        icon: Settings2,
        title: 'Digital Operations & Automation',
        sub: 'CRM + Automatización',
        objetivo:
            'Reducir el desorden y las tareas manuales repetitivas de tu negocio.',
        servicios: [
            'CRM básico',
            'Formularios e intake',
            'Agenda y citas',
            'Automatización de comunicaciones',
            'Plantillas y procesos internos',
            'Dashboards básicos e integraciones ligeras',
        ],
        limites: [
            'La licencia del software la paga el cliente directo, no está incluida en el setup',
            'No incluye desarrollo de software a la medida',
        ],
        resultadoMedible:
            'Flujo operativo documentado y digitalizado en las actividades seleccionadas.',
        precios: [{ label: 'Setup de operaciones', rango: '$400–$900 (único pago)' }],
        accent: '#C9A961',
        accentBg: 'rgba(201,169,97,0.10)',
        accentBorder: 'rgba(201,169,97,0.28)',
        numColor: 'rgba(201,169,97,0.18)',
    },
];

export function getModulo(slug: string): Modulo | undefined {
    return MODULOS.find((m) => m.slug === slug);
}
