# 📝 Estructura de Contenido - DigiSenda AI

## Visión General

DigiSenda AI utiliza un sistema híbrido de contenido que combina **contenido estático en componentes React** con **contenido dinámico mediante MDX** para el blog. Este documento explica cómo funciona cada sistema y cómo agregar, modificar o eliminar contenido.

---

## 🏠 Contenido de la Landing Page

### Estructura General

La landing page (`/`) está compuesta por 5 secciones principales renderizadas desde componentes React independientes:

```tsx
// app/page.tsx
import Hero from '../components/Hero';
import Ecosystem from '../components/Ecosystem';
import Technology from '../components/Technology';
import Process from '../components/Process';
import Trust from '../components/Trust';

export default function Home() {
  return (
    <>
      <Hero />        {/* Sección 1 */}
      <Ecosystem />   {/* Sección 2 */}
      <Technology />  {/* Sección 3 */}
      <Process />     {/* Sección 4 */}
      <Trust />       {/* Sección 5 */}
    </>
  );
}
```

---

### Sección 1: Hero

**Archivo:** `components/Hero.tsx`  
**Líneas:** 90  
**Tipo:** Client Component

#### Contenido Editable

```typescript
// Badge superior
<span>Infraestructura Digital Activa</span>

// Título principal
<h1>Lanza y haz crecer tu negocio en Estados Unidos</h1>

// Subtexto
<p>
  DigiSenda AI ayuda a emprendedores a crear su empresa, 
  construir su presencia digital, generar clientes y 
  gestionar sus impuestos mediante tecnología avanzada.
</p>

// CTAs
<a href="#create-llc">Crear mi empresa</a>
<a href="#ecosystem">Explorar servicios</a>
```

#### Cómo Modificar

1. Abrir `components/Hero.tsx`
2. Buscar los textos entre las etiquetas JSX
3. Modificar directamente sin afectar las clases CSS
4. Guardar y revisar en navegador

**Ejemplo:**
```tsx
// Cambiar título
<h1 className="...">
  Tu nuevo título aquí
</h1>
```

---

### Sección 2: Ecosystem

**Archivo:** `components/Ecosystem.tsx`  
**Líneas:** 98  
**Tipo:** Client Component

#### Estructura de Datos

Las 4 tarjetas del ecosistema están definidas en un array:

```typescript
const ecosystemData = [
  {
    icon: Building2,
    title: 'Crear empresa',
    sub: 'LLC + EIN',
    desc: 'Registramos y estructuramos tu LLC en EE.UU. de forma rápida y legal.',
    color: 'from-blue-500/20 to-blue-500/0',
    border: 'border-blue-500/30'
  },
  // ... 3 tarjetas más
];
```

#### Cómo Agregar/Modificar Tarjetas

```typescript
// Para modificar una tarjeta existente
{
  icon: Building2,           // Cambiar icono (importar de lucide-react)
  title: 'Nuevo Título',     // Texto principal
  sub: 'Subtítulo',          // Texto pequeño superior
  desc: 'Descripción...',    // Texto descriptivo
  color: 'from-color...',    // Gradiente de fondo
  border: 'border-color...'  // Color del borde del icono
}

// Para agregar una nueva tarjeta
// Agregar objeto al array ecosystemData
```

**Iconos disponibles:** Importar desde `lucide-react`  
**Documentación:** https://lucide.dev/icons

---

### Sección 3: Technology (SynapLeads)

**Archivo:** `components/Technology.tsx`  
**Líneas:** 120  
**Tipo:** Client Component

#### Contenido Principal

```typescript
// Título y subtítulo
<h2>SynapLeads: Plataforma de Leads Inteligente</h2>
<p>SynapLeads captura, califica y transfiere leads en tiempo real...</p>

// 5 Features
const features = [
  { icon: Target, title: 'Lead Capture', desc: '...' },
  { icon: Cpu, title: 'Smart Routing', desc: '...' },
  { icon: Zap, title: 'Live Transfer', desc: '...' },
  { icon: TrendingUp, title: 'Analytics', desc: '...' },
  { icon: Users, title: 'Automation', desc: '...' }
];
```

#### Cómo Modificar

1. **Cambiar título/subtítulo:** Buscar las etiquetas `<h2>` y `<p>`
2. **Modificar features:** Editar array inline en el componente
3. **Cambiar visualización SVG:** Modificar el componente `<svg>` y sus paths

---

### Sección 4: Process

**Archivo:** `components/Process.tsx`  
**Líneas:** 100  
**Tipo:** Client Component

#### Estructura de Pasos

```typescript
const steps = [
  { 
    num: '01', 
    title: 'Crear empresa', 
    desc: 'Registro de LLC, obtención de EIN y apertura de cuenta bancaria.' 
  },
  { 
    num: '02', 
    title: 'Construir presencia digital', 
    desc: 'Diseño web técnico y listado de Google para tu negocio.' 
  },
  { 
    num: '03', 
    title: 'Generar clientes', 
    desc: 'Despliegue de SynapLeads para generar flujo mediante anuncios y SEO.' 
  },
  { 
    num: '04', 
    title: 'Escalar negocio', 
    desc: 'Contabilidad activa, soporte fiscal y orquestación constante.' 
  }
];
```

#### Cómo Agregar/Modificar Pasos

```typescript
// Para modificar un paso existente
{
  num: '01',                    // Número del paso (formato '01', '02', etc.)
  title: 'Título del paso',     // Texto principal
  desc: 'Descripción detallada' // Explicación del paso
}

// Para agregar un nuevo paso
// Simplemente agregar un nuevo objeto al array 'steps'
// La numeración y animación se ajustarán automáticamente
```

---

### Sección 5: Trust

**Archivo:** `components/Trust.tsx`  
**Líneas:** 90  
**Tipo:** Client Component

#### Contenido de Pilares

Los 4 pilares están hardcodeados en el JSX:

```tsx
<div className="trust-card ...">
  <Brain className="..." />
  <h3>Tecnología</h3>
  <p>Orquestadores n8n dedicados y flujos automatizados...</p>
</div>

<div className="trust-card ...">
  <CheckCircle2 className="..." />
  <h3>Experiencia</h3>
  <p>Equipo multidisciplinario en desarrollo, marketing digital...</p>
</div>

// ... 2 pilares más
```

#### Cómo Modificar

1. Buscar cada `<div className="trust-card">`
2. Modificar icono, título (`<h3>`) y descripción (`<p>`)
3. Mantener la estructura de clases para preservar el diseño

---

## 📄 Páginas Estáticas

### Página About (/about)

**Archivo:** `app/about/page.tsx`  
**Líneas:** 35

#### Contenido

```tsx
// Título principal
<h1>Our Vision</h1>
<p>Unifying professional identity in a fragmented digital world.</p>

// Sección 1: The Problem
<h2>The Problem</h2>
<p>As professionals scale, they often create multiple brands...</p>

// Sección 2: The Solution
<h2>The Solution: DigiSenda AI</h2>
<p>DigiSenda AI acts as the "Mother Brand"...</p>
```

#### Expansión Recomendada

Esta página es básica y puede expandirse con:
- Historia del fundador
- Misión y valores
- Equipo (fotos y bios)
- Cronología de la empresa
- Logros y certificaciones

---

### Página Services (/services)

**Archivo:** `app/services/page.tsx`  
**Líneas:** 48

#### Estructura

```tsx
<ServiceCard
  title="SynapLeads"
  description="Plataforma inteligente para captura, calificación..."
  link="/contact?service=synapleads"
/>
<ServiceCard
  title="LLC Formation"
  description="Servicio integral para la creación..."
  link="/contact?service=llc"
/>
// ... 3 servicios más
```

#### Cómo Agregar un Nuevo Servicio

```tsx
<ServiceCard
  title="Nombre del Servicio"
  description="Descripción breve del servicio (máx. 150 caracteres)"
  link="/contact?service=nombre-servicio"
/>
```

**Nota:** El parámetro `?service=` se puede usar para pre-llenar el formulario de contacto o categorizar leads.

---

### Páginas Legales

**Archivos:**
- `app/privacy/page.tsx` (172 líneas)
- `app/terms/page.tsx` (227 líneas)
- `app/disclaimer/page.tsx` (131 líneas)

#### Estado Actual

✅ **Completamente redactadas** con contenido legal profesional

#### Contenido

Estas páginas contienen:
- Políticas de privacidad completas (GDPR/CCPA compliant)
- Términos de servicio detallados
- Disclaimers legales
- Información de contacto para asuntos legales

#### Cómo Modificar

⚠️ **Precaución:** Estos documentos tienen implicaciones legales

1. Consultar con abogado antes de modificar
2. Editar solo las secciones que requieran actualización
3. Mantener estructura de encabezados para navegabilidad
4. Actualizar fecha de "Last Updated" en la parte superior

---

## 📱 Componentes de Layout

### Navbar

**Archivo:** `components/Navbar.tsx`

#### Contenido Editable

```tsx
// Logo (texto actual)
<span className="...">DigiSenda AI</span>

// Enlaces de navegación
<Link href="#ecosystem">Ecosistema</Link>
<Link href="#synapleads">Tecnología</Link>
<Link href="#process">Proceso</Link>

// CTA
<Link href="#contact">Crear Empresa</Link>
```

#### Cómo Agregar un Enlace

```tsx
<Link href="/nueva-pagina" className="...">
  Nuevo Enlace
</Link>
```

---

### Footer

**Archivo:** `components/Footer.tsx`

#### Contenido Editable

```tsx
// Descripción
<p>
  Plataforma tecnológica corporativa. Lanzamiento de LLCs, 
  ecosistemas digitales, captación de leads mediante SynapLeads 
  y contabilidad B2B.
</p>

// Columna Soluciones
<Link href="#incorporation">Incorporación de Empresa</Link>
<Link href="#digital">Presencia Digital</Link>
<Link href="#synapleads">SynapLeads</Link>
<Link href="#finance">Impuestos y Finanzas</Link>

// Columna Empresa
<Link href="/about">Nosotros</Link>
<Link href="/blog">Casos de Éxito</Link>
<Link href="/contact">Contacto</Link>

// Redes sociales
<a href="https://twitter.com/digisendaai">...</a>
<a href="https://linkedin.com/company/digisenda-ai">...</a>
```

#### Cómo Agregar Red Social

```tsx
import { Facebook } from 'lucide-react';

<a href="https://facebook.com/digisenda" ...>
  <Facebook className="w-4 h-4" />
</a>
```

---

## 📝 Sistema de Blog (MDX)

### Arquitectura

**Directorio:** `/content`  
**Formato:** `.mdx` (Markdown + React Components)  
**Procesamiento:** `lib/posts.ts` + `gray-matter`

---

### Estructura de un Post

```markdown
---
title: "Título del Post (SEO Friendly)"
date: "2026-03-06"
excerpt: "Resumen breve de 120-160 caracteres para listado y SEO"
author: "Nombre del Autor"
---

# Encabezado Principal

Tu contenido aquí usando Markdown.

## Subtítulo

- Lista 1
- Lista 2

**Texto en negrita** y *cursiva*

[Enlaces](https://ejemplo.com)

```code
Bloques de código
```

![Imágenes](/ruta/imagen.jpg)
```

---

### Frontmatter (Metadata)

#### Campos Obligatorios

| Campo | Tipo | Descripción | Ejemplo |
|-------|------|-------------|---------|
| `title` | string | Título del post | "Cómo crear tu LLC en Texas" |
| `date` | string | Fecha formato YYYY-MM-DD | "2026-03-06" |
| `excerpt` | string | Resumen breve | "Guía paso a paso..." |
| `author` | string | Nombre del autor | "DigiSenda Team" |

#### Campos Opcionales (Futuros)

| Campo | Tipo | Descripción | Ejemplo |
|-------|------|-------------|---------|
| `tags` | array | Categorías del post | `["LLC", "Taxes"]` |
| `image` | string | Imagen destacada | "/blog/post-image.jpg" |
| `featured` | boolean | Post destacado | `true` |

---

### Cómo Crear un Nuevo Post

#### Paso 1: Crear Archivo

```bash
# Crear archivo en /content
touch content/como-preparar-taxes-2026.mdx
```

#### Paso 2: Agregar Frontmatter

```markdown
---
title: "Cómo Preparar Taxes en Estados Unidos - Guía 2026"
date: "2026-03-06"
excerpt: "Guía completa para preparar tus impuestos en EE.UU. como emprendedor. Plazos, formularios y estrategias."
author: "DigiSenda Tax Team"
---
```

#### Paso 3: Escribir Contenido

```markdown
# Introducción

Los impuestos en Estados Unidos pueden ser complejos...

## Plazos Importantes

- **15 de abril:** Declaración individual (Form 1040)
- **15 de marzo:** Declaración de S-Corp (Form 1120-S)

## Formularios Necesarios

### Para Individuos
- Form 1040: Declaración individual
- Schedule C: Ingresos de negocio

### Para LLCs
- Form 1065: Partnership return
- Schedule K-1: Distribución de socios

## Estrategias de Optimización

1. **Deducción de gastos de oficina en casa**
2. **Depreciación acelerada de activos**
3. **Contribuciones a retirement accounts**

## Conclusión

La preparación de impuestos requiere planificación...
```

#### Paso 4: Verificar

```bash
# Iniciar servidor de desarrollo
npm run dev

# Visitar http://localhost:3000/blog
# El nuevo post debería aparecer automáticamente
```

---

### Cómo Editar un Post Existente

1. Abrir archivo en `/content/nombre-post.mdx`
2. Modificar contenido o frontmatter
3. Guardar archivo
4. Refrescar navegador (hot reload automático en dev)

---

### Cómo Eliminar un Post

1. Eliminar archivo `.mdx` de `/content`
2. El post desaparecerá automáticamente del listado
3. La ruta `/blog/[slug]` dará 404

**Nota:** No es necesario modificar ningún código.

---

### Sistema de Listado de Posts

**Archivo:** `lib/posts.ts`

#### Función: getSortedPostsData()

```typescript
// Obtiene todos los posts del directorio /content
// Los ordena por fecha descendente (más reciente primero)
// Retorna array de objetos con metadata

const posts = getSortedPostsData();
// [
//   { slug: 'post-3', title: '...', date: '2026-03-06', ... },
//   { slug: 'post-2', title: '...', date: '2026-03-05', ... },
//   { slug: 'post-1', title: '...', date: '2026-03-01', ... }
// ]
```

#### Función: getPostData(slug)

```typescript
// Obtiene un post específico con contenido completo
// slug: nombre del archivo sin extensión

const post = getPostData('como-crear-llc');
// {
//   slug: 'como-crear-llc',
//   title: '...',
//   date: '...',
//   excerpt: '...',
//   author: '...',
//   content: '... contenido markdown completo ...'
// }
```

---

### Página de Índice del Blog

**Archivo:** `app/blog/page.tsx`

```tsx
export default function BlogIndex() {
  // Obtiene todos los posts ordenados
  const allPosts = getSortedPostsData();

  return (
    <>
      <h1>Insights</h1>
      <div>
        {allPosts.map(({ slug, title, date, excerpt }) => (
          <article key={slug}>
            <h2><Link href={`/blog/${slug}`}>{title}</Link></h2>
            <small>{date}</small>
            <p>{excerpt}</p>
          </article>
        ))}
      </div>
    </>
  );
}
```

---

### Página Individual de Post

**Archivo:** `app/blog/[slug]/page.tsx`

```tsx
export default async function BlogPost({ params }: { params: { slug: string } }) {
  // Obtiene el post específico
  const post = getPostData(params.slug);

  return (
    <>
      <h1>{post.title}</h1>
      <small>{post.date} por {post.author}</small>
      
      {/* Renderiza el contenido MDX */}
      <MDXRemote source={post.content} />
    </>
  );
}
```

---

## 🎨 Contenido Visual y Assets

### Imágenes en Posts de Blog

#### Método 1: Imágenes en /public

```markdown
![Alt text](/images/blog/nombre-imagen.jpg)
```

**Pasos:**
1. Crear directorio `/public/images/blog/`
2. Subir imagen
3. Referenciar en MDX con ruta absoluta desde `/public`

#### Método 2: Optimización con next/image

```mdx
import Image from 'next/image';

<Image 
  src="/images/blog/imagen.jpg" 
  alt="Descripción" 
  width={800} 
  height={400} 
/>
```

---

### Logo Corporativo

**Estado:** Archivo existe en `/public/logo.png` (692 KB)

**Ubicaciones donde se usa:**
1. Schema.org (URL en metadata)
2. Navbar (actualmente texto, debe implementarse)
3. Footer (actualmente texto, debe implementarse)

#### Cómo Implementar Logo en Navbar

```tsx
import Image from 'next/image';

// Reemplazar en components/Navbar.tsx
<Link href="/">
  <Image 
    src="/logo.png" 
    alt="DigiSenda AI" 
    width={32} 
    height={32}
    priority
  />
  <span>DigiSenda AI</span>
</Link>
```

---

### Favicon

**Estado:** ✅ Existe en `/public/favicon.ico`

**Cómo Reemplazar:**
1. Crear nuevo favicon (16x16, 32x32, 64x64)
2. Herramienta recomendada: https://realfavicongenerator.net
3. Reemplazar archivo `/public/favicon.ico`
4. (Opcional) Agregar `/app/icon.png` para Next.js favicon moderno

---

### Imagen Open Graph

**Estado:** ⚠️ Configurada pero archivo no existe

**Ubicación esperada:** `/public/og-image.jpg`  
**Dimensiones:** 1200x630px  
**Formato:** JPG o PNG

#### Cómo Crear

1. Diseñar imagen 1200x630px con:
   - Logo de DigiSenda AI
   - Texto principal: "Lanza tu negocio en Estados Unidos"
   - Colores corporativos (Deep Space, Neural Blue, AI Cyan)
   
2. Exportar como `og-image.jpg`

3. Subir a `/public/og-image.jpg`

4. Verificar en metadata (`app/layout.tsx` línea 16)

---

## 🔧 Sistema de Datos Estructurados

### Schema.org Organization

**Archivo:** `app/layout.tsx` (líneas 36-51)

#### Datos Actuales

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

#### Cómo Modificar

1. Actualizar URLs de redes sociales
2. Agregar campos adicionales:

```json
{
  "@type": "Organization",
  "name": "DigiSenda AI",
  "url": "https://digisenda.ai",
  "logo": "https://digisenda.ai/logo.png",
  "telephone": "+1-940-548-7913",
  "email": "admin@digisendaai.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Antonio",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.linkedin.com/company/digisenda-ai",
    "https://twitter.com/digisendaai",
    "https://github.com/Digisenda",
    "https://youtube.com/@DigiSenda",
    "https://instagram.com/digisendaai"
  ]
}
```

---

## 📋 Guía Rápida de Mantenimiento

### Tareas Comunes

#### Agregar Nuevo Post de Blog
```bash
1. Crear /content/nuevo-post.mdx
2. Agregar frontmatter (title, date, excerpt, author)
3. Escribir contenido en Markdown
4. Guardar → Aparece automáticamente en /blog
```

#### Modificar Texto del Hero
```tsx
1. Abrir components/Hero.tsx
2. Buscar <h1> o <p> a modificar
3. Editar texto
4. Guardar → Hot reload automático
```

#### Agregar Nuevo Servicio
```tsx
1. Abrir app/services/page.tsx
2. Agregar <ServiceCard title="..." description="..." link="..." />
3. Guardar
```

#### Actualizar Política de Privacidad
```tsx
1. Abrir app/privacy/page.tsx
2. ⚠️ Consultar con abogado antes de modificar
3. Editar secciones necesarias
4. Actualizar fecha "Last Updated"
5. Guardar
```

#### Cambiar Logo
```bash
1. Preparar logo.png (512x512px mínimo, PNG transparente)
2. Reemplazar /public/logo.png
3. Implementar en Navbar/Footer con next/image
4. Verificar Schema.org apunta a URL correcta
```

---

## 🚀 Contenido Pendiente (Recomendaciones)

### Blog Posts Sugeridos

**Total recomendado:** 10 posts (2 por cada servicio)

#### Servicio: LLC Formation
1. "Cómo crear tu LLC en Texas paso a paso"
2. "LLC vs S-Corp: ¿Cuál elegir para tu negocio?"

#### Servicio: Web Development
3. "10 elementos esenciales de un landing page que convierte"
4. "Por qué tu negocio necesita un sitio web profesional en 2026"

#### Servicio: SynapLeads
5. "Qué es lead scoring y cómo implementarlo"
6. "Automatiza tu generación de leads con IA"

#### Servicio: Tax Preparation
7. "Calendario fiscal 2026: Plazos importantes para tu LLC"
8. "Deducciones fiscales que todo emprendedor debe conocer"

#### Servicio: Digital Marketing
9. "SEO local para pequeños negocios: Guía definitiva"
10. "Cómo crear tu estrategia de marketing digital en 5 pasos"

---

### Secciones Adicionales Sugeridas

#### Testimonios
Agregar sección en landing:
- 3-5 testimonios de clientes
- Foto + nombre + empresa + testimonio
- Formato: Cards con estilo glass-panel

#### FAQ (Preguntas Frecuentes)
Nueva página `/faq` con:
- Preguntas categorizadas por servicio
- Accordion/Collapse UI
- 20-30 preguntas iniciales

#### Case Studies
Nueva página `/casos-exito`:
- Historias detalladas de clientes
- Problema → Solución → Resultados
- Métricas y KPIs
- CTA para contacto

#### Recursos
Nueva página `/recursos`:
- Guías descargables (PDFs)
- Checklist para emprendedores
- Templates y plantillas
- Enlaces útiles

---

## 📊 Métricas de Contenido Actual

### Landing Page
- **Secciones:** 5
- **Palabras totales:** ~800
- **CTAs:** 4 principales
- **Servicios destacados:** 4 pilares

### Blog
- **Posts publicados:** 1
- **Posts recomendados:** 10
- **Pendientes:** 9

### Páginas Estáticas
- **Total de páginas:** 9
- **Páginas legales:** 3 (530 líneas)
- **Palabras en contenido legal:** ~4,000

---

**Documento actualizado:** 2026-03-06  
**Versión:** 1.0  
**Preparado por:** Senior Technical Architect
