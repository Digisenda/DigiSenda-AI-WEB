# 🌐 DigiSenda AI - Ecosystem Hub

**Central validation and orchestration hub for professional services.**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

---

## 📋 Tabla de Contenidos

- [Descripción del Proyecto](#-descripción-del-proyecto)
- [Estado Actual](#-estado-actual)
- [Stack Tecnológico](#-stack-tecnológico)
- [Inicio Rápido](#-inicio-rápido)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Pendientes de Producción](#-pendientes-de-producción)
- [Documentación de Auditoría](#-documentación-de-auditoría)
- [Deploy en Vercel](#-deploy-en-vercel)
- [Contribución](#-contribución)

---

## 🎯 Descripción del Proyecto

**DigiSenda AI** actúa como el "Madre Brand" — un hub estratégico que valida, orquesta y empodera servicios profesionales especializados. Es la única fuente de verdad para reputación, cumplimiento legal y arquitectura técnica.

### Visión
Unificar la identidad profesional en un mundo digital fragmentado, centralizando la gestión de múltiples servicios sin caos operacional.

### Características Principales
- ✅ **Identidad Soberana:** Una autoridad de marca unificada
- ✅ **Orquestación Estratégica:** Gestión centralizada de servicios diversos
- ✅ **Arquitectura Escalable:** Lista para integraciones avanzadas
- ✅ **SEO Optimizado:** Sitemap, robots.txt, y JSON-LD implementados
- ✅ **Blog Dinámico:** Sistema de contenido con MDX

---

## 🚦 Estado Actual

### ✅ Funcional y Desplegado
El sitio está completamente operativo en Vercel y cumple con los estándares de producción técnica.

### ⚠️ Placeholders Identificados
Se han detectado **13 placeholders** que requieren actualización antes del lanzamiento final:

| Categoría | Cantidad | Prioridad |
|-----------|----------|-----------|
| 🔴 **Críticos** | 6 | Alta |
| 🟡 **Importantes** | 5 | Media |
| 🟢 **Opcionales** | 2 | Baja |

**Áreas afectadas:**
- Analytics (Google Analytics placeholder)
- Datos de contacto (teléfono, redes sociales)
- Assets visuales (logo corporativo)
- Integración backend (webhook n8n)
- Contenido legal (Privacidad, Términos)

👉 **Ver detalles completos en:** [`docs/RESUMEN_PLACEHOLDERS.md`](docs/RESUMEN_PLACEHOLDERS.md)

---

## 🛠️ Stack Tecnológico

### Core
- **Framework:** [Next.js 16.1.6](https://nextjs.org/) (App Router)
- **UI Library:** [React 19.2.3](https://react.dev/)
- **Lenguaje:** [TypeScript 5.x](https://www.typescriptlang.org/)

### Contenido y Estilos
- **Markdown:** MDX para blog posts con componentes React
- **Estilos:** CSS Modules + CSS Variables
- **Fuentes:** Inter (Google Fonts)

### Herramientas
- **Linting:** ESLint con configuración Next.js
- **Deployment:** Vercel (CI/CD automático)
- **Analytics:** Google Analytics (pendiente de configurar)

### Dependencias Clave
```json
{
  "@next/mdx": "^16.1.6",
  "@next/third-parties": "^16.1.6",
  "next-mdx-remote": "^5.0.0",
  "gray-matter": "^4.0.3",
  "date-fns": "^4.1.0"
}
```

---

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 20.x o superior
- npm, yarn, pnpm, o bun

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
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Ejecutar ESLint
```

---

## 📁 Estructura del Proyecto

```
DigiSenda-AI-WEB/
├── app/                    # Next.js App Router
│   ├── about/             # Página "Sobre Nosotros"
│   ├── blog/              # Sistema de blog con MDX
│   │   ├── [slug]/        # Rutas dinámicas de posts
│   │   └── page.tsx       # Listado de posts
│   ├── contact/           # Formulario de contacto
│   ├── disclaimer/        # Disclaimer legal
│   ├── privacy/           # Política de privacidad
│   ├── services/          # Servicios del ecosistema
│   ├── terms/             # Términos de servicio
│   ├── layout.tsx         # Layout global
│   ├── page.tsx           # Página de inicio
│   ├── globals.css        # Estilos globales
│   ├── robots.ts          # Configuración robots.txt
│   └── sitemap.ts         # Generación dinámica de sitemap
├── components/            # Componentes React reutilizables
│   ├── Footer.tsx         # Footer con enlaces legales
│   ├── Hero.tsx           # Sección hero de landing
│   ├── JsonLd.tsx         # Schema.org structured data
│   ├── Navbar.tsx         # Navegación principal
│   └── ServiceCard.tsx    # Card de servicio
├── content/               # Archivos MDX para blog
│   └── welcome.mdx        # Post de bienvenida
├── lib/                   # Utilidades y helpers
│   └── posts.ts           # Procesamiento de posts MDX
├── public/                # Assets estáticos
│   └── *.svg              # Iconos y assets gráficos
├── docs/                  # 📚 DOCUMENTACIÓN DE AUDITORÍA (NUEVO)
│   ├── AUDITORIA_REPOSITORIO.md   # Análisis técnico completo
│   ├── RESUMEN_PLACEHOLDERS.md    # Lista ejecutiva de placeholders
│   └── DATOS_REQUERIDOS.md        # Checklist de información pendiente
├── package.json           # Dependencias y scripts
├── tsconfig.json          # Configuración TypeScript
├── next.config.ts         # Configuración Next.js
└── README.md              # Este archivo
```

---

## ⚠️ Pendientes de Producción

### 🔴 Críticos (Bloquean producción final)

1. **Webhook n8n para Formulario de Contacto**
   - Archivo: `app/contact/page.tsx`
   - Estado: Simulación sin conexión real
   - Acción: Configurar instancia n8n y obtener URL de webhook

2. **Logo Corporativo**
   - Archivos: `components/JsonLd.tsx`, `components/Navbar.tsx`
   - Estado: Archivo no existe, texto placeholder
   - Acción: Diseñar y subir logo a `/public/logo.png` (512x512px min)

3. **Datos de Contacto Reales**
   - Archivo: `components/JsonLd.tsx`
   - Estado: Teléfono dummy `+1-555-555-5555`
   - Acción: Proporcionar número corporativo real

4. **URLs de Redes Sociales**
   - Archivo: `components/JsonLd.tsx`
   - Estado: URLs genéricas sin verificar
   - Acción: Confirmar existencia y actualizar con URLs reales

5. **Política de Privacidad Completa**
   - Archivo: `app/privacy/page.tsx`
   - Estado: Contenido mínimo (incumple GDPR/CCPA)
   - Acción: Redacción legal completa con todas las secciones obligatorias

6. **Términos de Servicio Completos**
   - Archivo: `app/terms/page.tsx`
   - Estado: Placeholder explícito
   - Acción: Redacción legal completa

### 🟡 Importantes (Afectan SEO y métricas)

1. **Google Analytics ID**
   - Archivo: `app/layout.tsx`
   - Estado: Comentado con placeholder `G-PLACEHOLDER`
   - Acción: Crear propiedad GA4 y descomentar

2. **Confirmación de Dominio**
   - Archivos: `app/sitemap.ts`, `app/robots.ts`
   - Estado: `https://digisenda.ai` con comentarios "update later"
   - Acción: Confirmar dominio de producción

3. **Descripción Detallada de Servicios**
   - Archivo: `app/services/page.tsx`
   - Estado: Servicios genéricos de ejemplo
   - Acción: Especificar servicios reales con propuestas de valor

### 📚 Documentos de Referencia

Para información detallada sobre cómo completar estos pendientes:

- **[`docs/AUDITORIA_REPOSITORIO.md`](docs/AUDITORIA_REPOSITORIO.md)**
  - Análisis técnico completo del proyecto
  - Clasificación por tipo e impacto
  - Recomendaciones técnicas por fase

- **[`docs/RESUMEN_PLACEHOLDERS.md`](docs/RESUMEN_PLACEHOLDERS.md)**
  - Vista ejecutiva de todos los placeholders
  - Checklist de actualización
  - Orden de implementación recomendado

- **[`docs/DATOS_REQUERIDOS.md`](docs/DATOS_REQUERIDOS.md)**
  - Lista estructurada de datos a proporcionar
  - Formularios para completar
  - Instrucciones de entrega

---

## 📚 Documentación de Auditoría

El repositorio ha sido auditado técnicamente el **2026-02-07**. Toda la documentación generada se encuentra en el directorio `/docs`:

### 📄 Documentos Disponibles

| Documento | Descripción | Audiencia |
|-----------|-------------|-----------|
| [`AUDITORIA_REPOSITORIO.md`](docs/AUDITORIA_REPOSITORIO.md) | Análisis técnico completo, arquitectura, y recomendaciones | Equipo técnico |
| [`RESUMEN_PLACEHOLDERS.md`](docs/RESUMEN_PLACEHOLDERS.md) | Lista ejecutiva de elementos pendientes con prioridades | Project managers |
| [`DATOS_REQUERIDOS.md`](docs/DATOS_REQUERIDOS.md) | Checklist de información a proporcionar para producción | Stakeholders |

### 🎯 Métricas de la Auditoría

- **Placeholders identificados:** 13
- **Archivos afectados:** 8
- **Prioridad alta:** 6 elementos (50%)
- **Prioridad media:** 5 elementos (42%)
- **Estado general:** ✅ Funcional, ⚠️ Pendiente de datos

---

## 📦 Deploy en Vercel

El proyecto está configurado para despliegue automático en Vercel.

### Deploy Manual

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Variables de Entorno (Vercel)

Una vez completados los placeholders, configurar en Vercel:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
N8N_WEBHOOK_URL=https://n8n.digisenda.com/webhook/...
```

### Configuración en Vercel
1. Conectar repositorio GitHub
2. Framework Preset: **Next.js**
3. Build Command: `npm run build`
4. Output Directory: `.next` (automático)
5. Añadir variables de entorno según sea necesario

---

## 🤝 Contribución

### Flujo de Trabajo

1. **Fork** el repositorio
2. Crear una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un **Pull Request**

### Estándares de Código

- Seguir guía de estilo de TypeScript
- Usar ESLint antes de commit
- Componentes React funcionales con hooks
- CSS Modules para estilos específicos de componentes
- Comentarios claros en lógica compleja

### Actualización de Placeholders

Al actualizar placeholders, asegurarse de:
- ✅ Actualizar el código correspondiente
- ✅ Verificar en desarrollo local
- ✅ Marcar como completado en [`docs/RESUMEN_PLACEHOLDERS.md`](docs/RESUMEN_PLACEHOLDERS.md)
- ✅ Hacer commit con mensaje descriptivo (ej: `fix: update Google Analytics ID`)

---

## 📞 Contacto y Soporte

### Equipo DigiSenda
- **Email:** digisenda@gmail.com
- **Repositorio:** [https://github.com/Digisenda/DigiSenda-AI-WEB](https://github.com/Digisenda/DigiSenda-AI-WEB)

### Reportar Issues
Para bugs, sugerencias o preguntas:
1. Ir a la pestaña [Issues](https://github.com/Digisenda/DigiSenda-AI-WEB/issues)
2. Crear un nuevo issue con etiqueta apropiada
3. Describir el problema o sugerencia claramente

---

## 📄 Licencia

Todos los derechos reservados © 2026 DigiSenda AI. 

Este es un proyecto privado. El uso, distribución o modificación sin autorización está prohibido.

---

## 🔗 Enlaces Útiles

### Next.js
- [Documentación de Next.js](https://nextjs.org/docs)
- [Tutorial Interactivo](https://nextjs.org/learn)
- [Repositorio de Next.js](https://github.com/vercel/next.js)

### Recursos del Proyecto
- [Vercel Platform](https://vercel.com)
- [MDX Documentation](https://mdxjs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 🏆 Reconocimientos

Construido con:
- [Next.js](https://nextjs.org/) por Vercel
- [React](https://react.dev/) por Meta
- [TypeScript](https://www.typescriptlang.org/) por Microsoft
- [MDX](https://mdxjs.com/) para contenido enriquecido

---

**Estado del proyecto:** 🟢 Activo  
**Última auditoría:** 2026-02-07  
**Versión:** 0.1.0 (Pre-producción)

---

<div align="center">

**[⬆ Volver arriba](#-digisenda-ai---ecosystem-hub)**

Hecho con ❤️ por el equipo de **DigiSenda AI**

</div>
