# DigiSenda AI - Portal Web Corporativo

## 🚀 Estado del Proyecto

**Versión:** 3.0  
**Framework:** Next.js 16.1.6 (App Router)  
**Estado:** En producción, en desarrollo activo — no es un estado "final"  
**Última actualización:** 2026-08-25  
**Última auditoría:** 2026-08-25 (`digisenda-bexar/auditoria-arquitectura-marca-repos-dominios.md`)

### ✨ Actualización 2026-08
Refresh visual completo a la estética "Warm-Premium Editorial" (ver
`docs/design-system.md`) y construcción del embudo de venta **Small
Business Digital Enablement** (`/services/[modulo]`, `/diagnostico`,
`/programas`) conectado al CRM corporativo (`digisenda-tax-admin`). Cierra
el hallazgo de la auditoría de 2026-08-25: 3 de los 4 subdominios de
ecosistema publicados (`llc.`/`web.`/`business.digisendaai.com`) resultaron
ser NXDOMAIN — nunca se construyó el contenido detrás de ellos. Se
resolvió con contenido real dentro de este mismo sitio, no con DNS nuevo.

---

## 📋 Resumen Ejecutivo

DigiSenda AI es una plataforma web tecnológica corporativa diseñada para ayudar a emprendedores hispanohablantes a **lanzar, escalar y gestionar negocios en Estados Unidos**. El portal ofrece un ecosistema completo de servicios profesionales:

- 🏢 **Creación de empresas** - LLC y obtención de EIN
- 🌐 **Presencia digital** - Desarrollo web y Google Business
- 📈 **Generación de clientes** - SynapLeads (plataforma de leads inteligente)
- 💼 **Gestión financiera** - Preparación de impuestos y bookkeeping

---

## 🏗️ Stack Tecnológico

### Frontend
- **Framework:** Next.js 16.1.6 (App Router)
- **UI Library:** React 19.2.3
- **Lenguaje:** TypeScript 5.x (Strict mode)
- **Estilos:** Tailwind CSS 3.4.19 + CSS Modules
- **Animaciones:** GSAP 3.14.2 con ScrollTrigger
- **Iconos:** Lucide React 0.577.0

### Contenido y Blog
- **Sistema:** MDX (Markdown + React Components)
- **Parser:** gray-matter + next-mdx-remote
- **Gestión:** File-based en `/content`

### SEO y Analytics
- **Metadata:** Next.js Metadata API
- **Structured Data:** Schema.org JSON-LD
- **Sitemap:** Generado dinámicamente
- **Analytics:** Google Analytics 4 + Meta Pixel, activados por `NEXT_PUBLIC_GA_ID`/`NEXT_PUBLIC_META_PIXEL_ID` (ver `.env.example`) — sin esas env vars en Vercel, no se cargan

### Deployment
- **Plataforma:** Vercel (recomendado)
- **Dominio:** digisendaai.com
- **Node:** 20.x

---

## 📁 Estructura del Proyecto

```
digisenda-ai/
├── app/                    # Next.js App Router
│   ├── (pages)/           # 9 páginas públicas
│   ├── layout.tsx         # Layout raíz con metadata global
│   ├── page.tsx           # Landing page (5 secciones)
│   ├── globals.css        # Sistema de diseño global
│   ├── robots.ts          # Robots.txt dinámico
│   └── sitemap.ts         # Sitemap dinámico
│
├── components/             # 10 componentes React
│   ├── Navbar.tsx         # Navegación con logo real y menú mobile ✨
│   ├── Footer.tsx         # Footer con redes sociales y contacto ✨
│   ├── Hero.tsx           # Sección hero con copy mejorado ✨
│   ├── Ecosystem.tsx      # 4 pilares del ecosistema ✨
│   ├── SuccessStories.tsx # Casos de éxito (reemplaza Technology) 🆕
│   ├── Process.tsx        # Proceso de 4 pasos ✨
│   ├── Trust.tsx          # Pilares de confianza ✨
│   ├── ServiceCard.tsx    # Card reutilizable
│   └── JsonLd.tsx         # Structured data
│
├── content/                # Posts de blog en MDX
│   └── *.mdx              # 1 post existente (10 recomendados)
│
├── lib/                    # Utilidades
│   └── posts.ts           # Sistema de lectura de posts
│
├── public/                 # Assets estáticos
│   ├── logo.png           # Logo corporativo (692 KB) ✅
│   ├── favicon.ico        # Favicon ✅
│   └── *.svg              # Iconos decorativos
│
└── docs/                   # 📚 Documentación técnica
    ├── final-implementation-report.md       # 🆕 Reporte de actualización 2.0
    ├── AUDITORIA_TECNICA_COMPLETA_2026.md  # ⭐ Auditoría completa
    ├── architecture.md                      # Arquitectura detallada
    ├── content-structure.md                 # Sistema de contenido
    ├── placeholders-guide.md                # ⭐ Guía para producción
    ├── design-system.md                     # Sistema de diseño
    ├── branding.md                          # Identidad de marca
    └── animations.md                        # Guía de animaciones GSAP
```

**Total de código:** ~1,500 líneas TypeScript/React (+110 líneas vs v1.0)

---

## 🎯 Características Principales

### Landing Page Moderna
- ✅ **5 secciones animadas** con GSAP y ScrollTrigger
- ✅ **Diseño "AI Corporate Nexus"** - Estética tecnológica premium
- ✅ **Responsive** - Mobile-first design
- ✅ **Performance optimizado** - Server Components + Image optimization

### Sistema de Blog MDX
- ✅ **File-based CMS** - Posts en Markdown + React
- ✅ **Metadata automática** - Frontmatter con gray-matter
- ✅ **Rutas dinámicas** - `/blog/[slug]` generadas estáticamente
- ✅ **Ordenamiento por fecha** - Posts más recientes primero

### SEO Profesional
- ✅ **Sitemap dinámico** - Incluye páginas y posts
- ✅ **Robots.txt** - Configuración optimizada
- ✅ **Schema.org** - JSON-LD Organization markup
- ✅ **Open Graph** - Metadata para redes sociales
- ✅ **Metadata por página** - Title, description personalizados

### Contenido Legal Completo
- ✅ **Política de Privacidad** - 172 líneas (GDPR/CCPA compliant)
- ✅ **Términos de Servicio** - 227 líneas
- ✅ **Disclaimer** - 131 líneas
- ✅ **Twilio A2P ready** - Preparado para verificación

---

## 🎨 Sistema de Diseño "Warm-Premium Editorial" (v3)

Reemplaza el diseño anterior "AI Corporate Nexus" (paleta oscura Deep
Space/Neural Blue/AI Cyan), abandonado en el refresh de 2026-08. Resumen
rápido — el detalle completo vive en [`docs/design-system.md`](./docs/design-system.md):

- **Paleta:** bases claras (ivory/sand/bone), contraste en tinta oscura
  (`ink`), acentos quirúrgicos por pilar (gold-soft, terracotta, sage,
  plum, cyan-controlled).
- **Tipografía:** Fraunces (display, con énfasis en cursiva), Plus Jakarta
  Sans (body), JetBrains Mono (UI/mono).
- **Componentes:** `.editorial-card`, `.btn-warm-primary`,
  `.eyebrow-warm`, ritmo de secciones ivory→sand→bone→ink.

---

## ⚠️ Elementos Pendientes para Producción

*(Actualizado 2026-08-25 — los 4 primeros puntos de la versión anterior de
esta lista ya estaban resueltos y quedaron confirmados aquí; el webhook n8n
nunca se implementó porque la arquitectura de captación cambió por
completo — ver abajo.)*

### 🟢 Ya resueltos (confirmados 2026-08-25)
- Google Analytics / Meta Pixel — activados por env en `components/Analytics.tsx`.
- Imagen Open Graph — existe en `/public/og-image.png`.
- Logo en Navbar/Footer — `next/image` con `/logo.png`, ya no es texto.
- Captación de leads del formulario — reemplaza por completo el plan de
  "webhook n8n" de la lista anterior: `/diagnostico` → `/api/lead` →
  reenvío server-to-server al CRM (`digisenda-tax-admin`). Ver
  `docs/functional-reconnection-report.md` (marcado histórico) para el
  contexto de por qué se había quitado la captación del sitio madre, y por
  qué esa decisión se revirtió.

### 🟡 Sigue pendiente
1. **Contenido de Blog** — solo 1 post de los ~10 recomendados, y ese post
   (`content/welcome.mdx`) está en inglés en un sitio `lang="es"`.
   📍 `/content`
2. **Casos de éxito / testimonios** — `components/SuccessStories.tsx` y
   `components/Trust.tsx` usan métricas no sustanciadas ("100%
   compliance", "+45%"/"triplicó" — internamente contradictorio). No
   reemplazar por afirmaciones inventadas; el taller de alfabetización
   digital propuesto en `digisenda-bexar/docs/bexar/propuesta-talleres-digitales-BORRADOR.md`
   está pensado justo para generar casos reales.
3. **CAPTCHA anti-spam** en los formularios — hoy solo hay honeypot +
   rate limit en memoria (no distribuido entre instancias).
4. ~~Verificar modo de Cloudflare del dominio~~ — **verificado por Juan
   2026-08-25**: ninguno de los registros DNS en uso tiene el proxy activado
   (todos en modo DNS only), así que Vercel es el primer salto real y
   `app/api/lead/route.ts` tomando el último IP de `x-forwarded-for` es
   correcto tal como está. No cambiar a `CF-Connecting-IP`.

---

## 🚀 Iniciar el Proyecto

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/Digisenda/DigiSenda-AI-WEB.git
cd DigiSenda-AI-WEB

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

### Comandos Disponibles

```bash
npm run dev      # Servidor de desarrollo (localhost:3000)
npm run build    # Build de producción
npm run start    # Servidor de producción local
npm run lint     # Linting con ESLint
```

---

## 📝 Agregar Contenido

### Crear Nuevo Post de Blog

```bash
# 1. Crear archivo MDX
touch content/mi-nuevo-post.mdx
```

```markdown
---
title: "Título del Post SEO-Friendly"
date: "2026-03-06"
excerpt: "Resumen breve de 120-160 caracteres"
author: "Tu Nombre"
---

# Contenido del Post

Tu contenido aquí usando Markdown...
```

El post aparecerá automáticamente en `/blog`.

### Modificar Servicios

Editar `app/services/page.tsx`:

```tsx
<ServiceCard
  title="Nuevo Servicio"
  description="Descripción breve del servicio"
  link="/contact?service=nuevo-servicio"
/>
```

### Modificar Contenido del Hero

Editar `components/Hero.tsx` (líneas 66-73):

```tsx
<h1>Tu nuevo título aquí</h1>
<p>Tu nueva descripción aquí</p>
```

**Ver guía completa:** `/docs/content-structure.md`

---

## 📚 Documentación

### Guías Principales

| Documento | Descripción | Leer cuando... |
|-----------|-------------|----------------|
| **[AUDITORIA_TECNICA_COMPLETA_2026.md](docs/AUDITORIA_TECNICA_COMPLETA_2026.md)** | ⭐ Auditoría completa del proyecto | Necesites visión general del estado |
| **[placeholders-guide.md](docs/placeholders-guide.md)** | ⭐ Guía para completar el sitio | Vayas a preparar para producción |
| **[architecture.md](docs/architecture.md)** | Arquitectura técnica detallada | Necesites entender el código |
| **[content-structure.md](docs/content-structure.md)** | Sistema de contenido y blog | Vayas a agregar/modificar contenido |
| **[design-system.md](docs/design-system.md)** | Sistema de diseño visual | Necesites guía de estilos |
| **[branding.md](docs/branding.md)** | Identidad de marca | Quieras entender la marca |
| **[animations.md](docs/animations.md)** | Guía de animaciones GSAP | Vayas a modificar animaciones |

### Documentación Legacy

- `AUDITORIA_REPOSITORIO.md` - Auditoría previa (2026-02-07)
- `RESUMEN_PLACEHOLDERS.md` - Resumen de placeholders anterior
- `DATOS_REQUERIDOS.md` - Checklist de datos (completado)

---

## 🔍 Páginas Existentes

| Ruta | Estado | Descripción |
|------|--------|-------------|
| `/` | ✅ | Landing con secciones animadas |
| `/about` | ✅ | Página "Nuestra Visión" |
| `/services` | ✅ | Índice de servicios (4 módulos internos + Tax Service/SynapLeads externos) |
| `/services/[modulo]` | ✅ | Página por módulo de Small Business Digital Enablement |
| `/diagnostico` | ✅ | Diagnóstico con Readiness Score → Action Plan → captura |
| `/programas` | ✅ | Ruta institucional (Bexar County, SBDC, nonprofits, cohortes) |
| `/gracias` | ✅ | Confirmación post-envío (`noindex`) |
| `/blog` | ✅ | Sistema de blog MDX (1 post) |
| `/blog/[slug]` | ✅ | Posts individuales dinámicos |
| `/contact` | ✅ | Contacto directo + enlaces al ecosistema |
| `/privacy` | ✅ | Política de privacidad completa |
| `/terms` | ✅ | Términos de servicio completos |
| `/disclaimer` | ✅ | Disclaimer legal |

---

## 🧪 Testing

### Manual Testing

```bash
# Verificar todas las rutas
npm run dev
# Navegar a cada página y verificar:
# - Contenido se muestra correctamente
# - Animaciones funcionan
# - Links no están rotos
# - Responsive design funciona
```

### SEO Testing

```bash
# 1. Verificar sitemap
curl http://localhost:3000/sitemap.xml

# 2. Verificar robots.txt
curl http://localhost:3000/robots.txt

# 3. Verificar metadata
# Usar View Page Source en navegador
```

### Performance Testing

```bash
# Lighthouse en Chrome DevTools
# Objetivo: Performance 90+, SEO 100
```

---

## 🚀 Deployment a Vercel

### Método 1: Desde GitHub (Recomendado)

```bash
1. Push código a GitHub
2. Ir a https://vercel.com/new
3. Importar repositorio
4. Configurar:
   - Framework Preset: Next.js
   - Build Command: npm run build
   - Output Directory: (auto)
5. Agregar variables de entorno:
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
6. Deploy
```

### Método 2: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Configuración de Dominio

```bash
1. En Vercel Dashboard → Settings → Domains
2. Agregar: digisendaai.com
3. Configurar DNS según instrucciones
4. Esperar propagación (5-60 minutos)
```

---

## 📞 Datos de Contacto

### Empresa
- **Nombre:** DigiSenda AI
- **Dominio:** https://digisendaai.com
- **Teléfono:** +1 (254) 256-3909
- **Ubicación:** San Antonio, Texas, USA

### Emails
- **General:** admin@digisendaai.com
- **Soporte:** soporte@digisendaai.com

### Teléfono
- **Principal:** +1 254 256 3909 (Llamadas, WhatsApp, SMS)

### Redes Sociales (Todas activas y visibles en el sitio)
- **LinkedIn:** https://www.linkedin.com/in/digisenda-ai-34b3053ab/
- **GitHub:** https://github.com/Digisenda
- **YouTube:** https://www.youtube.com/@DigiSenda
- **Instagram:** https://www.instagram.com/digisendaai/
- **Facebook:** https://www.facebook.com/DigiSenda

---

## 🎯 Roadmap

### ✅ Fase 1: Lanzamiento (Completada - Marzo 2026)
- [x] Logo real implementado en Navbar/Footer
- [x] Imagen Open Graph configurada
- [x] Menú mobile funcional
- [x] Redes sociales visibles
- [x] Metadata y SEO optimizado
- [x] Copy mejorado en todo el sitio
- [x] Jerarquía de servicios equilibrada
- [x] 🚀 Listo para producción

### ✅ Fase 2: Refresh visual + embudo de venta (Completada - 2026-08-25)
- [x] Refresh visual completo a "Warm-Premium Editorial" v3
- [x] ~~Webhook n8n~~ — superado: captación real vía `/diagnostico` → `/api/lead` → CRM corporativo
- [x] Google Analytics + Meta Pixel activados (por env, con eventos de conversión reales)
- [x] Embudo Small Business Digital Enablement: `/services/[modulo]` (4 módulos), diagnóstico con Readiness Score, `/programas` (ruta institucional)
- [x] Integración con CRM — `digisenda-tax-admin`, lead → `Contact` + `Opportunity` en `BEXAR`
- [x] Rate limiting básico en formularios (honeypot + límite en memoria)
- [ ] Generar 9 posts de blog adicionales (`content/` sigue con solo 1, en inglés)
- [ ] Reemplazar casos de éxito placeholder con contenido real (no sustanciado hoy)
- [ ] Agregar testimonios de clientes reales (3-5)
- [ ] Crear FAQ page (20-30 preguntas)

### Fase 3: Optimización (siguiente)
- [ ] CAPTCHA anti-spam (rate limit actual es solo en memoria, no distribuido)
- [ ] Optimizaciones de performance
- [ ] A/B testing de CTAs
- [ ] Redirección 301 de `llc.`/`web.`/`business.digisendaai.com` a las rutas internas nuevas (decisión pendiente de Juan, DNS en Cloudflare)

### Fase 4: Escalamiento
- [ ] Panel de administración
- [ ] Dashboard de analytics
- [ ] Sistema de autenticación
- [ ] Internacionalización (i18n)

---

## 🤝 Contribuir

Este es un proyecto privado corporativo. Para contribuir:

1. Crear branch desde `main`
2. Hacer cambios y commits descriptivos
3. Push y crear Pull Request
4. Solicitar review del equipo técnico

---

## 📜 Licencia

**Propietario:** DigiSenda AI  
**Código:** Privado - Todos los derechos reservados  
**Uso:** Exclusivamente para DigiSenda AI y servicios relacionados

---

## 📊 Métricas del Proyecto

- **Líneas de código:** ~1,390 (TypeScript/React)
- **Componentes:** 9
- **Páginas:** 9 estáticas + 1 dinámica
- **Posts de blog:** 1 (10 recomendados)
- **Dependencies:** 11 producción + 8 desarrollo
- **Completitud:** 95% listo para producción

---

## 🆘 Soporte

**Email técnico:** digisenda@gmail.com  
**Repositorio:** https://github.com/Digisenda/DigiSenda-AI-WEB  
**Documentación:** `/docs` (7 guías técnicas)

---

**Última actualización:** 2026-03-06  
**Versión:** 2.0  
**Preparado por:** DigiSenda Technical Team
px de altura (responsive)
  - Eliminados contenedores restrictivos y texto redundante
  - Agregado `unoptimized` prop para mejor visualización
  - Filtros de brillo/contraste para visibilidad óptima

#### 🧭 Navegación y UX
- **Navbar Mejorado**
  - Logo más grande y visible (3-4x más grande que v1.0)
  - Menú mobile completamente funcional con overlay
  - Menú hamburguesa con iconos Menu/X
  - Blog con mayor visibilidad
  - Tipografía mejorada (text-base, font-medium)
  - Mayor espaciado entre elementos (gap-8)

#### 🌐 Footer Corporativo
- **Redes Sociales Visibles**
  - LinkedIn, GitHub, YouTube, Instagram, Facebook
  - Iconos tamaño w-5 h-5 con efectos hover
  - URLs reales y verificadas
- **Información de Contacto**
  - Teléfono: +1 254 256 3909
  - Email: admin@digisendaai.com
- **Estructura Mejorada**
  - Columnas: Servicios, Empresa, Legal
  - Enlaces a todos los servicios del ecosistema

#### 📝 Contenido Actualizado
- **Hero Section**
  - Pill: "Servicios empresariales conectados"
  - Copy más humano y directo
  - Botones: "Ver servicios" y "Hablar con nosotros"
- **Ecosystem Section**
  - Subtítulo enfocado en beneficios prácticos
  - Menos jerga técnica
- **Process Section**
  - Título: "Así funciona DigiSenda AI"
  - Descripciones simplificadas
  - Lenguaje más claro y accesible
- **Trust Section**
  - Nuevo título: "Una base sólida para crecer con orden"
  - Eliminada frase "primer millón en MRR"
  - Mensajes más realistas para emprendedores
- **About Page**
  - Reescritura completa en español
  - Estructura mejorada: El Desafío, Nuestra Solución, Nuestro Compromiso
  - Copy más humano y menos abstracto

#### 🔄 Componentes
- **NUEVO: SuccessStories.tsx**
  - Reemplaza Technology.tsx
  - 3 casos de éxito placeholder
  - Jerarquía equilibrada entre servicios
  - Sin protagonismo excesivo de SynapLeads
- **ACTUALIZADO: Todos los componentes principales**
  - Navbar, Footer, Hero, Ecosystem, Process, Trust
  - Mejoras en copy y usabilidad

#### 🔗 Enlaces y Servicios
- **Services Page**
  - URLs reales de todos los servicios:
    - Tax Service: https://tax.digisendaai.com/
    - LLC Service: https://llc.digisendaai.com/
    - Web Services: https://web.digisendaai.com/
    - Marketing Service: https://business.digisendaai.com/
    - SynapLeads: https://www.synapleads.com/
  - Jerarquía visual equilibrada para todos los servicios
  - SynapLeads marcado como "Operativo"

#### 🎯 SEO y Metadata
- **Open Graph**
  - Imagen corregida: /og-image.png (extensión correcta)
  - Título: "Lanza • Estructura • Escala"
  - Descripción: "LLC • Presencia digital • Clientes • Taxes"
  - Dominio corregido: digisendaai.com
- **Twitter Card**
  - Metadata agregada para mejor compartición social
- **JSON-LD Structured Data**
  - URLs actualizadas a digisendaai.com
  - Todas las redes sociales incluidas
  - Información de contacto agregada (teléfono y email)

#### 📚 Documentación
- **NUEVO: final-implementation-report.md**
  - Reporte detallado de todos los cambios
  - Estadísticas y comparativas
  - Placeholders pendientes
  - Enlaces verificados

#### 🔧 Correcciones Técnicas
- Domain references: digisenda.ai → digisendaai.com
- Teléfono actualizado: +1 254 256 3909
- Email actualizado: admin@digisendaai.com
- Eliminado servicio "Business Consulting" (no estaba en especificaciones)

---

### Version 1.0 - Febrero 2026 (Lanzamiento Inicial)
- Estructura inicial del proyecto
- Sistema de diseño "AI Corporate Nexus"
- 9 páginas funcionales
- Sistema de blog MDX
- Animaciones GSAP
- SEO básico implementado

---

## 🆘 Soporte

**Email técnico:** digisenda@gmail.com  
**Repositorio:** https://github.com/Digisenda/DigiSenda-AI-WEB  
**Documentación:** `/docs` (7 guías técnicas)

---

**Última actualización:** 2026-03-06  
**Versión:** 2.0  
**Preparado por:** DigiSenda Technical Team
