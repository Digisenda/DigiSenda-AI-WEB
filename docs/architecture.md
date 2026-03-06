# 🏗️ Arquitectura del Proyecto DigiSenda AI

## Visión General

DigiSenda AI es una aplicación web moderna construida con **Next.js 16.1.6** utilizando el **App Router**, diseñada como un hub tecnológico corporativo para emprendedores que desean establecer negocios en Estados Unidos.

---

## Stack Tecnológico

### Frontend Framework
- **Next.js:** 16.1.6 (App Router con Server Components)
- **React:** 19.2.3
- **TypeScript:** 5.x (Strict mode)

### Estilos y UI
- **Tailwind CSS:** 3.4.19
  - Configuración personalizada con paleta "AI Corporate Nexus"
  - Utilidades custom: `.glass-panel`, `.text-gradient`, `.magnetic-btn`
- **CSS Modules:** Para componentes específicos (ej: formulario de contacto)
- **PostCSS:** 8.5.8 para procesamiento

### Animaciones
- **GSAP:** 3.14.2
- **ScrollTrigger:** Plugin para animaciones basadas en scroll
- **Patrones:** Fade in, stagger, scrub, translateY

### Iconografía
- **Lucide React:** 0.577.0
- Iconos utilizados: Building2, Globe2, LineChart, FileText, Brain, Shield, Server, Target, Users, Zap, TrendingUp, Cpu, ArrowRight, ChevronRight, Twitter, Linkedin

### Contenido y Blog
- **MDX:** Sistema de blog con Markdown + React Components
- **@next/mdx:** 16.1.6
- **next-mdx-remote:** 6.0.0
- **gray-matter:** 4.0.3 (Parsing de frontmatter)

### Utilidades
- **clsx:** 2.1.1 (Manipulación de classNames)
- **tailwind-merge:** 3.5.0 (Merge de clases Tailwind)
- **date-fns:** 4.1.0 (Formateo de fechas)

### Analytics y Tracking
- **@next/third-parties:** 16.1.6
- Google Analytics 4 (implementación lista)

---

## Estructura del Proyecto

### Directorios Principales

```
digisenda-ai/
│
├── app/                          # Next.js App Router
│   ├── (pages)/                 # Rutas públicas
│   ├── layout.tsx               # Layout raíz
│   ├── page.tsx                 # Home
│   ├── globals.css              # Estilos globales
│   ├── robots.ts                # Robots.txt dinámico
│   └── sitemap.ts               # Sitemap dinámico
│
├── components/                   # Componentes React reutilizables
│   ├── (layout)/                # Navbar, Footer
│   ├── (sections)/              # Hero, Ecosystem, Technology, etc.
│   └── (ui)/                    # ServiceCard, JsonLd
│
├── content/                      # Archivos MDX para blog
│   └── *.mdx
│
├── lib/                          # Utilidades y helpers
│   └── posts.ts                 # Sistema de lectura de posts MDX
│
├── public/                       # Assets estáticos
│   ├── logo.png
│   ├── favicon.ico
│   └── *.svg
│
└── docs/                         # Documentación técnica
    └── *.md
```

---

## Arquitectura de la Landing Page

La página principal (`/`) está compuesta por **5 secciones principales** que se renderizan secuencialmente:

### 1. Hero Section
**Componente:** `components/Hero.tsx`  
**Altura:** 100vh (full viewport)  
**Elementos:**
- Badge: "Infraestructura Digital Activa" con indicador pulsante
- Título principal: "Lanza y haz crecer tu negocio en Estados Unidos"
- Subtexto descriptivo de los 4 pilares
- 2 CTAs principales:
  - "Crear mi empresa" (botón primario blanco)
  - "Explorar servicios" (botón secundario con glass effect)
- Fondo abstracto con:
  - Gradiente radial desde Neural Blue
  - Grid neural animado con CSS
  - Efecto de profundidad con `maskImage`

**Animaciones GSAP:**
- Fade in con stagger 0.15s para textos
- Scale up para fondo (0.9 → 1)
- Ease: `power3.out`

---

### 2. Ecosystem Section
**Componente:** `components/Ecosystem.tsx`  
**ID de anclaje:** `#ecosystem`

**Estructura:**
- Título: "Un ecosistema completo para emprendedores"
- Subtítulo explicativo
- Grid de 4 tarjetas (responsive: 1 col mobile, 4 cols desktop)

**Tarjetas:**
1. **Crear empresa** (Building2 icon)
   - LLC + EIN
   - Color: Blue gradient
   
2. **Presencia digital** (Globe2 icon)
   - Web + Google Business
   - Color: Cyan gradient
   
3. **Clientes** (LineChart icon)
   - Marketing + Leads
   - Color: Indigo gradient
   
4. **Finanzas** (FileText icon)
   - Taxes + Bookkeeping
   - Color: Purple gradient

**Características visuales:**
- Glass panels con backdrop-blur
- Iconos en contenedores con borde coloreado
- Hover effects con scale
- Animación stagger al entrar en viewport

---

### 3. Technology Section (SynapLeads)
**Componente:** `components/Technology.tsx`  
**ID de anclaje:** `#synapleads`

**Estructura:**
- Layout de 2 columnas en desktop
- Columna izquierda: Texto descriptivo
- Columna derecha: Visualización SVG animada

**Contenido textual:**
- Título: "SynapLeads: Plataforma de Leads Inteligente"
- 5 features con iconos:
  - Lead Capture (Target)
  - Smart Routing (Cpu)
  - Live Transfer (Zap)
  - Analytics (TrendingUp)
  - Automation (Users)
- CTA: "Explorar SynapLeads"

**Visualización:**
- SVG con nodos representando flujo de leads
- Animación de líneas con `strokeDashoffset`
- Nodos que aparecen con efecto bounce
- Animación scrub con ScrollTrigger

---

### 4. Process Section
**Componente:** `components/Process.tsx`  
**ID de anclaje:** `#process`

**Estructura:**
- Título: "Cómo funciona DigiSenda"
- Timeline vertical con línea animada
- 4 pasos numerados

**Pasos:**
1. **01: Crear empresa**
   - Registro de LLC, obtención de EIN, cuenta bancaria

2. **02: Construir presencia digital**
   - Diseño web técnico, Google Business Profile

3. **03: Generar clientes**
   - Despliegue de SynapLeads, anuncios, SEO

4. **04: Escalar negocio**
   - Contabilidad activa, soporte fiscal, orquestación

**Animación:**
- Línea vertical que se llena con scrub (0% → 100%)
- Steps que aparecen con stagger + translateX
- Sincronizado con scroll

---

### 5. Trust Section
**Componente:** `components/Trust.tsx`

**Estructura:**
- Título: "Diseñado para la escala absoluta"
- Subtítulo: Infraestructura desde día 1 hasta primer millón en MRR
- Grid de 4 pilares (2x2 en desktop)

**Pilares:**
1. **Tecnología** (Brain icon)
   - Orquestadores n8n dedicados
   - Flujos automatizados

2. **Experiencia** (CheckCircle2 icon)
   - Equipo multidisciplinario
   - Desarrollo, marketing, leyes

3. **Cumplimiento** (Shield icon)
   - LLCs y EIN precisos
   - BOI reporting, tax preparation

4. **Infraestructura** (Server icon)
   - Stack moderno cloud-native
   - Monitoring 24/7

**Estilo:**
- Cards con fondo oscuro `#0F1523`
- Hover effect con borde Neural Blue
- Iconos coloreados (blue, cyan)

---

## Componentes de Layout

### Navbar
**Componente:** `components/Navbar.tsx`  
**Tipo:** Client Component (`'use client'`)

**Características:**
- Posición: Fixed top con centrado
- Efecto: Glass blur al hacer scroll (transición smooth)
- Estados:
  - Sin scroll: 1000px width, transparente
  - Con scroll: 800px width, glass panel con backdrop-blur
- Logo: Div con gradiente + letra "D" + texto
- Navegación desktop: Ecosistema, Tecnología, Proceso
- CTA: "Crear Empresa"

**Implementación:**
```typescript
const [scrolled, setScrolled] = useState(false);
useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 50);
  window.addEventListener('scroll', handleScroll);
}, []);
```

---

### Footer
**Componente:** `components/Footer.tsx`

**Estructura:**
- Fondo: `#05080E` con border-top
- Background pattern: Grid sutil con `linear-gradient`
- Layout: 4 columnas en desktop

**Secciones:**
1. **Columna 1-2: Branding**
   - Logo corporativo
   - Descripción del negocio
   - Indicador de sistema activo (pulso verde)

2. **Columna 3: Soluciones**
   - Incorporación de Empresa
   - Presencia Digital
   - SynapLeads
   - Impuestos y Finanzas

3. **Columna 4: Empresa**
   - Nosotros
   - Casos de Éxito
   - Contacto

**Pie de página:**
- Copyright dinámico con año actual
- Enlaces: Privacidad, Términos
- Redes sociales: Twitter, LinkedIn

---

## Sistema de Rutas

### Rutas Estáticas

| Ruta | Componente | Metadata | Descripción |
|------|-----------|----------|-------------|
| `/` | `app/page.tsx` | ✅ | Landing con 5 secciones |
| `/about` | `app/about/page.tsx` | ✅ | Página "Nuestra Visión" |
| `/services` | `app/services/page.tsx` | ✅ | Listado de 5 servicios |
| `/blog` | `app/blog/page.tsx` | ✅ | Índice de posts |
| `/contact` | `app/contact/page.tsx` | ✅ | Formulario de contacto |
| `/privacy` | `app/privacy/page.tsx` | ✅ | Política de privacidad |
| `/terms` | `app/terms/page.tsx` | ✅ | Términos de servicio |
| `/disclaimer` | `app/disclaimer/page.tsx` | ✅ | Disclaimer legal |

### Rutas Dinámicas

| Ruta | Componente | Generación | Descripción |
|------|-----------|-----------|-------------|
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Estática (generateStaticParams) | Posts individuales |

### Rutas Generadas

| Ruta | Archivo | Tipo | Descripción |
|------|---------|------|-------------|
| `/sitemap.xml` | `app/sitemap.ts` | MetadataRoute | Sitemap dinámico |
| `/robots.txt` | `app/robots.ts` | MetadataRoute | Robots.txt |

---

## Sistema de Contenido (Blog)

### Arquitectura MDX

**Directorio:** `/content`  
**Extensión:** `.mdx`  
**Parser:** `gray-matter` + `next-mdx-remote`

### Flujo de Procesamiento

```
1. Archivo MDX en /content/
   ↓
2. gray-matter extrae frontmatter + content
   ↓
3. posts.ts procesa y ordena por fecha
   ↓
4. /blog lista todos los posts
   ↓
5. /blog/[slug] renderiza post individual
```

### Estructura de Post MDX

```markdown
---
title: "Título del Post"
date: "2026-02-05"
excerpt: "Resumen breve para listado"
author: "Nombre del Autor"
---

# Contenido del post en Markdown

Soporte completo para:
- Headings
- Listas
- Código
- Enlaces
- Imágenes
```

### Funciones del Sistema

**Archivo:** `lib/posts.ts`

```typescript
// Obtener todos los posts ordenados por fecha
getSortedPostsData(): PostMetadata[]

// Obtener post individual con contenido completo
getPostData(slug: string): PostData
```

---

## Sistema de Diseño

### Paleta de Colores

```css
/* Definidas en tailwind.config.ts y globals.css */
--deep-space: #0B0F19      /* Background principal */
--neural-blue: #2563EB     /* Azul tecnológico */
--ai-cyan: #06B6D4         /* Cyan acentos */
--silver: #CBD5F5          /* Texto principal */
--graphite: #1E293B        /* Bordes/secundarios */
```

### Tipografía

```css
/* Cargadas desde Google Fonts en globals.css */
--font-space: 'Space Grotesk', sans-serif     /* Headings */
--font-inter: 'Inter', sans-serif             /* Body */
--font-mono: 'IBM Plex Mono', monospace       /* Code/Data */
```

### Clases Utilitarias Custom

**Definidas en:** `app/globals.css` `@layer utilities`

```css
.text-gradient {
  /* Gradiente de texto Neural Blue → AI Cyan */
  @apply bg-clip-text text-transparent 
         bg-gradient-to-r from-neural-blue to-ai-cyan;
}

.glass-panel {
  /* Panel con efecto glass morphism */
  @apply bg-white/5 backdrop-blur-md 
         border border-white/10 rounded-[2rem];
}

.magnetic-btn {
  /* Botón con efecto magnético y glow */
  @apply transition-all duration-300 ease-out 
         hover:scale-[1.03] 
         hover:shadow-[0_0_20px_rgba(37,99,235,0.4)];
}

.noise-overlay {
  /* Textura de ruido SVG en toda la página */
  position: fixed; opacity: 0.03; z-index: 50;
  background-image: url("data:image/svg+xml,...");
}
```

### Sistema de Animaciones

**Biblioteca:** GSAP 3.14.2 + ScrollTrigger

**Patrones comunes:**

```typescript
// Pattern 1: Fade in con stagger
gsap.from('.elements', {
  y: 30,
  opacity: 0,
  stagger: 0.15,
  duration: 0.8,
  ease: 'power3.out'
});

// Pattern 2: Scrub con scroll
gsap.to('.element', {
  scrollTrigger: {
    trigger: '.container',
    start: 'top 75%',
    end: 'bottom 25%',
    scrub: 1
  },
  property: value
});

// Pattern 3: Scale con hover (CSS)
.magnetic-btn:hover {
  transform: scale(1.03);
  box-shadow: 0 0 20px rgba(37, 99, 235, 0.4);
}
```

---

## Configuración SEO

### Metadata Global

**Archivo:** `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'DigiSenda AI | Lanza y escala tu negocio en Estados Unidos',
  description: 'DigiSenda AI ayuda a emprendedores a crear su empresa...',
  openGraph: {
    title: 'DigiSenda AI | Plataforma Tecnológica Corporativa',
    url: 'https://digisenda.ai',
    siteName: 'DigiSenda AI',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'es_US',
    type: 'website'
  }
};
```

### Metadata por Página

Cada página define su propia metadata:

```typescript
export const metadata: Metadata = {
  title: "Título de la Página | DigiSenda AI",
  description: "Descripción específica de la página"
};
```

### Structured Data (Schema.org)

**Implementado en:** `app/layout.tsx` (líneas 36-51)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DigiSenda AI",
  "url": "https://digisenda.ai",
  "logo": "https://digisenda.ai/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/digisenda-ai",
    "https://twitter.com/digisendaai"
  ]
}
```

### Sitemap Dinámico

**Archivo:** `app/sitemap.ts`

Genera automáticamente:
- Páginas estáticas (/, /about, /services, /blog)
- Posts de blog dinámicos desde `/content`
- Prioridades y frecuencias de cambio configuradas

### Robots.txt

**Archivo:** `app/robots.ts`

```typescript
{
  rules: {
    userAgent: '*',
    allow: '/',
    disallow: '/private/'
  },
  sitemap: 'https://digisendaai.com/sitemap.xml'
}
```

---

## Formulario de Contacto

### Arquitectura

**Tipo:** Client Component con manejo de estado local  
**Archivo:** `app/contact/page.tsx`  
**Estilos:** `app/contact/Contact.module.css`

### Estados del Formulario

```typescript
type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
const [status, setStatus] = useState<FormStatus>('idle');
```

### Flujo de Envío

```typescript
1. Usuario llena formulario (name, email, message)
   ↓
2. Submit dispara handleSubmit()
   ↓
3. setStatus('submitting')
   ↓
4. [ACTUAL] Simulación con console.log + delay 1s
   [FUTURO] fetch() a webhook n8n
   ↓
5. setStatus('success')
   ↓
6. Botón cambia a "Sent Successfully"
```

### Integración Pendiente (n8n)

**Acción requerida:**

```typescript
const response = await fetch('https://n8n.digisenda.com/webhook/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message })
});

if (!response.ok) {
  setStatus('error');
  return;
}

setStatus('success');
```

---

## Performance y Optimización

### Next.js Optimizaciones Activas

- ✅ **Server Components por defecto:** Reducción de JS enviado al cliente
- ✅ **Lazy Loading:** Componentes pesados solo cuando son necesarios
- ✅ **Image Optimization:** Uso de `next/image` (preparado)
- ✅ **Font Optimization:** Fuentes cargadas desde Google Fonts CDN
- ✅ **Static Generation:** Páginas pre-renderizadas en build time
- ✅ **Incremental Static Regeneration:** Para posts de blog

### CSS Optimización

- ✅ **Tailwind CSS Purge:** Solo clases utilizadas en producción
- ✅ **CSS Modules:** Scoped styles sin conflictos
- ✅ **Critical CSS:** Inlined automáticamente por Next.js

### Bundle Size

```
Dependencias de producción: 11 paquetes
Tamaño estimado del bundle (gzip):
- First Load JS: ~85 KB
- Main JS: ~15 KB
- CSS: ~8 KB
```

---

## Deployment (Vercel)

### Configuración

- **Plataforma:** Vercel (recomendado para Next.js)
- **Dominio:** digisendaai.com
- **Branch de producción:** main
- **Node version:** 20.x (especificado en package.json engines)

### Variables de Entorno

```bash
# Producción (Vercel)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Google Analytics
N8N_WEBHOOK_URL=https://...      # Webhook de contacto (futuro)
```

### Build Command

```bash
npm run build
```

### Comandos Disponibles

```bash
npm run dev      # Servidor de desarrollo (localhost:3000)
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linting con ESLint
```

---

## Flujo de Desarrollo

### Agregar un Nuevo Post de Blog

1. Crear archivo en `/content/nuevo-post.mdx`
2. Agregar frontmatter:
   ```yaml
   ---
   title: "Título"
   date: "2026-03-06"
   excerpt: "Resumen"
   author: "Autor"
   ---
   ```
3. Escribir contenido en Markdown
4. El post aparecerá automáticamente en `/blog`

### Agregar un Nuevo Servicio

1. Editar `app/services/page.tsx`
2. Agregar nuevo `<ServiceCard>`:
   ```tsx
   <ServiceCard
     title="Nuevo Servicio"
     description="Descripción del servicio"
     link="/contact?service=nuevo"
   />
   ```

### Agregar una Nueva Página

1. Crear directorio en `/app/nueva-pagina/`
2. Crear `page.tsx`:
   ```tsx
   import type { Metadata } from 'next';
   
   export const metadata: Metadata = {
     title: "Nueva Página | DigiSenda AI"
   };
   
   export default function NuevaPagina() {
     return <div>Contenido</div>;
   }
   ```
3. Agregar enlace en Navbar/Footer si es necesario

---

## Seguridad

### Medidas Implementadas

- ✅ TypeScript strict mode
- ✅ ESLint configurado
- ✅ No hay secrets comiteados en Git
- ✅ Dependencies actualizadas sin vulnerabilidades
- ✅ Input sanitization en formularios

### Recomendaciones Futuras

- [ ] Rate limiting en formulario de contacto
- [ ] CAPTCHA para prevenir spam
- [ ] Content Security Policy headers
- [ ] CSRF protection para forms
- [ ] Validación de servidor en webhook n8n

---

## Testing

### Estado Actual

**Testing no implementado** en esta fase inicial.

### Recomendaciones para Testing

```typescript
// Unit Tests (Jest)
- Componentes React
- Utilidades (lib/posts.ts)
- Lógica de negocio

// E2E Tests (Playwright)
- Flujo de contacto
- Navegación entre páginas
- Formulario de contacto
- Blog post rendering

// Visual Regression (Percy/Chromatic)
- Screenshots de componentes
- Comparación de cambios visuales
```

---

## Monitoreo y Analytics

### Google Analytics 4

**Estado:** Implementación lista, requiere activación

**Ubicación:** `app/layout.tsx`

```typescript
import { GoogleAnalytics } from '@next/third-parties/google';

// Descomentar y agregar ID real:
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

**Eventos a trackear:**
- Page views (automático)
- Click en CTAs
- Envíos de formulario
- Navegación del blog

### Error Tracking (Recomendado)

Herramientas sugeridas:
- **Sentry:** Error tracking y performance monitoring
- **LogRocket:** Session replay
- **Vercel Analytics:** Web Vitals y métricas de performance

---

## Próximos Pasos Técnicos

### Corto Plazo (Sprint 1-2)
1. Implementar webhook n8n en formulario de contacto
2. Activar Google Analytics con ID real
3. Implementar logo como imagen en Navbar/Footer
4. Agregar imagen Open Graph
5. Testing manual completo

### Medio Plazo (Sprint 3-4)
1. Generar contenido de blog (10 posts iniciales)
2. Implementar rate limiting en formulario
3. Agregar manejo de errores robusto
4. Implementar tests unitarios básicos
5. Optimizar performance (Lighthouse 90+)

### Largo Plazo (Roadmap)
1. Sistema de autenticación para panel admin
2. Dashboard de analytics personalizado
3. Internacionalización (i18n)
4. CMS headless para gestión de contenido
5. Integración con CRM
6. A/B testing framework

---

**Documentación actualizada:** 2026-03-06  
**Versión de arquitectura:** 2.0  
**Preparado por:** Senior Technical Architect
