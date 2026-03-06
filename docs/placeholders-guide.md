# 🎯 GUÍA PRÁCTICA DE PLACEHOLDERS PARA PRODUCCIÓN
## DigiSenda AI - Lista Completa de Elementos a Completar

**Última actualización:** 2026-03-06  
**Propósito:** Checklist detallado para preparar el sitio para producción  
**Estado actual:** 95% listo para producción

---

## 📊 RESUMEN EJECUTIVO

### Estado de Completitud

| Categoría | Completos | Pendientes | Total | % |
|-----------|-----------|------------|-------|---|
| **Configuración** | 1 | 2 | 3 | 33% |
| **Assets Visuales** | 1 | 1 | 2 | 50% |
| **Integraciones** | 0 | 2 | 2 | 0% |
| **Contenido** | 5 | 9 | 14 | 36% |
| **Total** | **7** | **14** | **21** | **33%** |

### Elementos Críticos Bloqueantes

Solo **2 elementos críticos** bloquean el lanzamiento a producción:

1. 🔴 **Webhook n8n** (Formulario de contacto no funcional)
2. 🟡 **Google Analytics** (Sin métricas de usuarios)

---

## 🔴 PRIORIDAD CRÍTICA

Estos elementos **bloquean el lanzamiento a producción**. Deben completarse antes del deploy.

---

### 1. 🔴 Webhook n8n (Formulario de Contacto)

**Estado:** ⚠️ Simulación - No captura leads reales  
**Bloqueador:** SÍ - Funcionalidad crítica no operativa  
**Tiempo estimado:** 2-4 horas

#### 📍 Ubicación en el Código

**Archivo:** `app/contact/page.tsx`  
**Líneas:** 16-23

```typescript
// CÓDIGO ACTUAL (Simulación)
async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setStatus('submitting');

  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());

  // SIMULATION of n8n webhook call
  console.log('Sending data to n8n:', data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  setStatus('success');
  // usage: fetch('https://n8n.your-domain.com/webhook/...', { method: 'POST', body: JSON.stringify(data) })
}
```

#### ✅ Solución Requerida

**Paso 1: Configurar instancia n8n**
```bash
# Opción A: n8n Cloud (recomendado)
# 1. Registrarse en https://n8n.io
# 2. Crear workspace
# 3. Ir a Settings > Webhooks

# Opción B: Self-hosted
# 1. Desplegar n8n en servidor/VPS
docker run -it --rm --name n8n -p 5678:5678 n8nio/n8n
```

**Paso 2: Crear Workflow de Captura**

Dentro de n8n, crear workflow:
```
1. Nodo: Webhook
   - Method: POST
   - Path: /contact-form

2. Nodo: Set (Opcional - Validación de datos)
   - Validar email format
   - Sanitizar inputs

3. Nodo: Elegir destino de datos:
   
   Opción A: Enviar Email
   - Usar nodo "Send Email"
   - To: admin@digisendaai.com
   - Subject: "Nuevo Lead desde Web"
   - Body: {{ $json.name }}, {{ $json.email }}, {{ $json.message }}
   
   Opción B: Guardar en Google Sheets
   - Usar nodo "Google Sheets"
   - Operation: Append
   - Spreadsheet ID: [tu-spreadsheet]
   
   Opción C: Enviar a CRM
   - Usar nodo específico del CRM
   - Mapear campos
   
   Opción D: Slack/Discord Notification
   - Nodo "Slack" o "Discord"
   - Channel: #leads
   - Message: "Nuevo contacto: ..."

4. Nodo: Webhook Response
   - Status Code: 200
   - Body: { "success": true, "message": "Gracias por contactarnos" }
```

**Paso 3: Obtener URL del Webhook**

Una vez activado el workflow:
```
URL del webhook: https://n8n.digisenda.com/webhook/abc123xyz
```

**Paso 4: Implementar en el Código**

```typescript
// REEMPLAZAR EN app/contact/page.tsx (líneas 16-23)
async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setStatus('submitting');

  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('https://n8n.digisenda.com/webhook/abc123xyz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    setStatus('success');
  } catch (error) {
    console.error('Error submitting form:', error);
    setStatus('error');
    // Opcional: Mostrar mensaje de error al usuario
  }
}
```

**Paso 5: Agregar Variable de Entorno**

```bash
# .env.local (no commitear)
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://n8n.digisenda.com/webhook/abc123xyz
```

```typescript
// Usar en el código
const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
```

#### 📋 Checklist de Implementación

- [ ] Instancia n8n configurada (cloud o self-hosted)
- [ ] Workflow de webhook creado y activado
- [ ] Destino de leads configurado (email/sheets/CRM)
- [ ] URL de webhook obtenida
- [ ] Código actualizado en `app/contact/page.tsx`
- [ ] Variable de entorno configurada en Vercel
- [ ] Testing: Enviar formulario de prueba
- [ ] Verificar: Lead recibido en destino configurado
- [ ] Testing de errores: Simular falla de red
- [ ] Manejo de errores implementado

---

### 2. 🟡 Google Analytics 4

**Estado:** ⚠️ Implementado pero comentado  
**Bloqueador:** NO - Pero sin métricas desde día 1  
**Tiempo estimado:** 15 minutos

#### 📍 Ubicación en el Código

**Archivo:** `app/layout.tsx`  
**Líneas:** 30-31

```typescript
{/* Placeholder GA ID - user to update later */}
{/* <GoogleAnalytics gaId="G-PLACEHOLDER" /> */}
```

#### ✅ Solución Requerida

**Paso 1: Crear Propiedad en Google Analytics**

```
1. Ir a https://analytics.google.com
2. Admin > Create Property
3. Nombre: DigiSenda AI
4. Timezone: America/Chicago (Texas)
5. Currency: USD
6. Create > Web Stream
7. Website URL: https://digisendaai.com
8. Stream name: DigiSenda AI Web
```

**Paso 2: Obtener Measurement ID**

```
Format: G-XXXXXXXXXX
Ejemplo: G-3PNSTCCWZG
```

**Paso 3: Activar en el Código**

```typescript
// REEMPLAZAR EN app/layout.tsx (líneas 30-31)

import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Structured Data JSON-LD Organization */}
        <script type="application/ld+json" ...>
        </script>
        
        {/* Google Analytics */}
        <GoogleAnalytics gaId="G-3PNSTCCWZG" />
      </head>
      <body>...</body>
    </html>
  );
}
```

**Paso 4: Configurar en Vercel**

```bash
# Variables de entorno en Vercel
NEXT_PUBLIC_GA_ID=G-3PNSTCCWZG
```

**Paso 5: Eventos Personalizados (Opcional)**

```typescript
// Trackear clicks en CTAs
<button onClick={() => {
  window.gtag('event', 'click_cta', {
    cta_name: 'crear_empresa',
    page_location: window.location.href
  });
}}>
  Crear mi empresa
</button>
```

#### 📋 Checklist de Implementación

- [ ] Propiedad creada en Google Analytics
- [ ] Measurement ID obtenido
- [ ] Código descomentado en `app/layout.tsx`
- [ ] ID reemplazado con el real
- [ ] Variable de entorno configurada en Vercel
- [ ] Deploy realizado
- [ ] Testing: Verificar en GA Real-Time
- [ ] Eventos de página visualizados
- [ ] (Opcional) Eventos personalizados implementados

---

## 🟡 PRIORIDAD ALTA

Estos elementos **mejoran significativamente** el sitio pero no bloquean el lanzamiento.

---

### 3. 🟡 Imagen Open Graph

**Estado:** ⚠️ Configurada pero archivo no existe  
**Bloqueador:** NO - Pero afecta social sharing  
**Tiempo estimado:** 30-60 minutos

#### 📍 Ubicación en el Código

**Archivo:** `app/layout.tsx`  
**Línea:** 16

```typescript
openGraph: {
  images: [{
    url: 'https://digisenda.ai/og-image.jpg',  // ⚠️ Archivo no existe
    width: 1200,
    height: 630,
    alt: 'DigiSenda AI Banner'
  }]
}
```

#### ✅ Solución Requerida

**Especificaciones del Asset:**
- **Dimensiones:** 1200x630px (exactas)
- **Formato:** JPG o PNG
- **Peso máximo:** 1 MB (recomendado < 300 KB)
- **Ubicación:** `/public/og-image.jpg`

**Contenido recomendado:**
- Logo de DigiSenda AI
- Texto principal: "Lanza tu negocio en Estados Unidos"
- Subtexto: "LLC, Web, Leads, Taxes"
- Colores corporativos: Deep Space (#0B0F19), Neural Blue (#2563EB), AI Cyan (#06B6D4)

**Herramientas para crear:**
- Figma: https://figma.com
- Canva: https://canva.com (Template: Facebook Cover → resize)
- OG Image Generator: https://og-image.vercel.app

**Checklist de Creación:**
- [ ] Diseño creado (1200x630px)
- [ ] Logo incluido
- [ ] Texto legible (fuente mínima 48px)
- [ ] Colores corporativos aplicados
- [ ] Exportado como `/public/og-image.jpg`
- [ ] Peso optimizado (< 300 KB)
- [ ] Testing en https://www.opengraph.xyz
- [ ] Verificado en Twitter Card Validator
- [ ] Verificado en LinkedIn Post Inspector

---

### 4. 🟡 Logo como Imagen en Navbar/Footer

**Estado:** ⚠️ Logo existe pero se usa texto placeholder  
**Bloqueador:** NO - Funcional pero menos profesional  
**Tiempo estimado:** 20 minutos

#### 📍 Ubicación en el Código

**Navbar:** `components/Navbar.tsx` líneas 27-32  
**Footer:** `components/Footer.tsx` líneas 13-20

```tsx
// CÓDIGO ACTUAL (Navbar)
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neural-blue to-ai-cyan grid place-items-center">
  <span className="text-white font-space font-bold">D</span>
</div>
<span className="font-space font-bold tracking-tight text-white">
  DigiSenda AI
</span>
```

#### ✅ Solución Requerida

**Opción A: Implementar Logo Existente**

El archivo `/public/logo.png` (692 KB) ya existe.

```tsx
// REEMPLAZAR EN components/Navbar.tsx (líneas 27-32)
import Image from 'next/image';

<Link href="/" className="flex items-center gap-2 group">
  <Image 
    src="/logo.png" 
    alt="DigiSenda AI" 
    width={32} 
    height={32}
    className="rounded-lg"
    priority
  />
  <span className="font-space font-bold tracking-tight text-white group-hover:text-ai-cyan transition-colors">
    DigiSenda AI
  </span>
</Link>
```

**Opción B: Reemplazar Logo Actual**

Si el logo actual es temporal:

1. **Especificaciones:**
   - Formato: PNG con transparencia
   - Dimensiones: 512x512px mínimo (1024x1024px recomendado)
   - Variantes: Logo completo + Isotipo (solo símbolo)
   - Colores: Adaptado para fondo oscuro y claro

2. **Archivos a crear:**
   ```
   /public/logo.png          # Logo completo
   /public/logo-icon.png     # Solo icono (para mobile)
   ```

3. **Implementar versión responsive:**
   ```tsx
   <Link href="/" className="flex items-center gap-2">
     {/* Desktop: Logo completo */}
     <Image 
       src="/logo.png" 
       alt="DigiSenda AI" 
       width={120} 
       height={32}
       className="hidden md:block"
       priority
     />
     
     {/* Mobile: Solo icono */}
     <Image 
       src="/logo-icon.png" 
       alt="DigiSenda AI" 
       width={32} 
       height={32}
       className="md:hidden"
       priority
     />
   </Link>
   ```

#### 📋 Checklist de Implementación

- [ ] Decidir: ¿Usar logo existente o crear nuevo?
- [ ] Si nuevo: Diseñar logo corporativo
- [ ] Si nuevo: Exportar PNG con transparencia
- [ ] Si nuevo: Optimizar peso (< 50 KB idealmente)
- [ ] Reemplazar archivo en `/public/logo.png`
- [ ] Implementar en Navbar con `next/image`
- [ ] Implementar en Footer con `next/image`
- [ ] Testing visual en desktop
- [ ] Testing visual en mobile
- [ ] Verificar carga con priority

---

### 5. 🟡 Contenido de Blog (9 posts adicionales)

**Estado:** ⚠️ Solo 1 post de 10 recomendados  
**Bloqueador:** NO - Pero blog aparece vacío  
**Tiempo estimado:** 8-16 horas (depende de redacción)

#### 📍 Ubicación

**Directorio:** `/content`  
**Archivo existente:** `welcome.mdx`  
**Posts pendientes:** 9

#### ✅ Solución Requerida

**Estrategia:** 2 posts por cada servicio (10 total)

**Lista de Posts Recomendados:**

##### Servicio: LLC Formation (2 posts)

**Post 1:** `como-crear-llc-texas-2026.mdx`
```markdown
---
title: "Cómo Crear tu LLC en Texas: Guía Completa 2026"
date: "2026-03-15"
excerpt: "Guía paso a paso para registrar tu LLC en Texas. Requisitos, costos, tiempos y documentos necesarios."
author: "DigiSenda Legal Team"
---

# Introducción
Crear una LLC en Texas es...

## Paso 1: Elegir Nombre de la Empresa
## Paso 2: Designar Registered Agent
## Paso 3: Presentar Certificate of Formation
## Paso 4: Obtener EIN
## Paso 5: Abrir Cuenta Bancaria
```

**Post 2:** `llc-vs-scorp-diferencias.mdx`
```markdown
---
title: "LLC vs S-Corp: ¿Cuál es Mejor para tu Negocio?"
date: "2026-03-22"
excerpt: "Comparativa detallada entre LLC y S-Corp. Ventajas, desventajas, impuestos y cuándo elegir cada una."
author: "DigiSenda Tax Team"
---
```

##### Servicio: Web Development (2 posts)

**Post 3:** `elementos-landing-page-conversion.mdx`
**Post 4:** `por-que-necesitas-sitio-web-profesional-2026.mdx`

##### Servicio: SynapLeads (2 posts)

**Post 5:** `que-es-lead-scoring.mdx`
**Post 6:** `automatiza-leads-con-ia.mdx`

##### Servicio: Tax Preparation (2 posts)

**Post 7:** `calendario-fiscal-2026-llc.mdx`
**Post 8:** `deducciones-fiscales-emprendedores.mdx`

##### Servicio: Digital Marketing (2 posts)

**Post 9:** `seo-local-pequenos-negocios.mdx`
**Post 10:** `estrategia-marketing-digital-5-pasos.mdx`

#### 📋 Checklist de Creación de Posts

**Por cada post:**
- [ ] Investigación del tema (30-60 min)
- [ ] Redacción del contenido (1-2 horas)
- [ ] Estructura con headings H2, H3
- [ ] Agregar listas y ejemplos
- [ ] Incluir CTA al final (contacto/servicio relacionado)
- [ ] Revisar SEO del título (keywords)
- [ ] Optimizar excerpt (120-160 caracteres)
- [ ] Verificar fecha y autor
- [ ] Guardar en `/content/nombre-post.mdx`
- [ ] Revisar en localhost:3000/blog
- [ ] Corrección ortográfica y gramática

**Total estimado:**
- 1-2 horas por post × 9 posts = **9-18 horas**
- Recomendación: Escribir 2-3 posts por semana durante 3-4 semanas

---

## 🟢 PRIORIDAD MEDIA

Elementos opcionales que **mejoran la experiencia** pero no son urgentes.

---

### 6. 🟢 Manejo de Errores en Formulario

**Estado:** ⚠️ No implementado  
**Tiempo estimado:** 30 minutos

#### Implementación Recomendada

```typescript
// Agregar en app/contact/page.tsx

try {
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to submit');
  }

  setStatus('success');
} catch (error) {
  setStatus('error');
  
  // Mostrar mensaje al usuario
  alert('Hubo un error al enviar el formulario. Por favor intenta nuevamente o contáctanos directamente a admin@digisendaai.com');
}
```

---

### 7. 🟢 Rate Limiting en Formulario

**Estado:** ⚠️ No implementado  
**Propósito:** Prevenir spam y abuse  
**Tiempo estimado:** 1-2 horas

#### Implementación Recomendada

**Opción A: Client-side (básico)**
```typescript
const [lastSubmit, setLastSubmit] = useState(0);

function handleSubmit() {
  const now = Date.now();
  if (now - lastSubmit < 60000) {  // 1 minuto
    alert('Por favor espera 1 minuto antes de enviar otro mensaje');
    return;
  }
  
  setLastSubmit(now);
  // ... resto del código
}
```

**Opción B: Server-side con n8n**
Implementar lógica de rate limiting en el workflow de n8n usando Redis o base de datos.

---

### 8. 🟢 CAPTCHA Anti-spam

**Estado:** ⚠️ No implementado  
**Recomendación:** Monitorear spam primero, implementar si necesario

#### Opciones

**Google reCAPTCHA v3 (Invisible)**
```bash
npm install react-google-recaptcha-v3
```

**hCaptcha (Privacy-focused)**
```bash
npm install @hcaptcha/react-hcaptcha
```

---

### 9. 🟢 Cookie Banner (Si opera en EU)

**Estado:** ⚠️ No implementado  
**Necesario:** Solo si se tienen usuarios en Europa

#### Implementación

**Opción A: Simple (Solo aviso)**
```tsx
<div className="fixed bottom-0 w-full bg-black/90 p-4 z-50">
  <p>Usamos cookies para mejorar tu experiencia. 
     <Link href="/privacy">Más información</Link>
  </p>
  <button onClick={acceptCookies}>Aceptar</button>
</div>
```

**Opción B: Avanzado (Consent Management)**
- Usar librería como `cookie-consent-banner`
- Integrar con Google Consent Mode v2

---

## 📋 CHECKLIST COMPLETA DE PRODUCCIÓN

### Pre-Lanzamiento (Críticos)

#### Integraciones
- [ ] **Webhook n8n configurado y testeado**
  - [ ] Instancia n8n activa
  - [ ] Workflow funcionando
  - [ ] Leads llegando a destino
  - [ ] Manejo de errores implementado

- [ ] **Google Analytics activado**
  - [ ] ID obtenido
  - [ ] Código descomentado
  - [ ] Variable de entorno en Vercel
  - [ ] Verificado en GA Real-Time

#### Assets Visuales
- [ ] **Imagen Open Graph creada**
  - [ ] Diseño completado (1200x630px)
  - [ ] Archivo en `/public/og-image.jpg`
  - [ ] Validado en herramientas OG

- [ ] **Logo implementado como imagen**
  - [ ] Decidido: usar existente o crear nuevo
  - [ ] Implementado en Navbar
  - [ ] Implementado en Footer
  - [ ] Testing visual completo

### Lanzamiento (Alta Prioridad)

#### Contenido
- [ ] **9 posts de blog adicionales**
  - [ ] 2 posts sobre LLC Formation
  - [ ] 2 posts sobre Web Development
  - [ ] 2 posts sobre SynapLeads
  - [ ] 2 posts sobre Tax Preparation
  - [ ] 2 posts sobre Digital Marketing
  - [ ] (Extra: 1 post de bienvenida ✅)

#### Optimizaciones
- [ ] Manejo de errores en formulario
- [ ] Rate limiting básico
- [ ] Testing de performance (Lighthouse 90+)
- [ ] Testing de SEO
- [ ] Testing de accesibilidad

### Post-Lanzamiento (Media Prioridad)

- [ ] CAPTCHA (si hay spam)
- [ ] Cookie banner (si opera en EU)
- [ ] Testimonios de clientes (3-5)
- [ ] FAQ page (20-30 preguntas)
- [ ] Case studies (3 historias)

---

## 🔧 GUÍA DE TESTING

### Testing de Formulario de Contacto

```bash
# 1. Test básico
- Llenar formulario con datos válidos
- Verificar mensaje de éxito
- Confirmar lead recibido en destino (email/sheet/CRM)

# 2. Test de validación
- Enviar con email inválido → Debe dar error
- Enviar con campos vacíos → Debe dar error
- Enviar con caracteres especiales → Debe sanitizar

# 3. Test de errores
- Simular falla de red (offline)
- Verificar mensaje de error mostrado
- Verificar estado del botón (disabled durante envío)

# 4. Test de UX
- Verificar estados: idle → submitting → success → reset
- Verificar botón cambia a "Sending..." durante envío
- Verificar botón cambia a "Sent Successfully" al completar
```

### Testing de Analytics

```bash
# 1. Verificar instalación
- Abrir DevTools → Network
- Buscar requests a google-analytics.com
- Verificar gtag.js cargado

# 2. Verificar eventos
- Google Analytics → Reports → Realtime
- Navegar por el sitio
- Verificar páginas apareciendo en tiempo real

# 3. Eventos personalizados (si implementados)
- Click en CTAs
- Verificar en GA → Events
```

### Testing de SEO

```bash
# 1. Sitemap
https://digisendaai.com/sitemap.xml
→ Debe mostrar XML válido con todas las páginas

# 2. Robots.txt
https://digisendaai.com/robots.txt
→ Debe mostrar configuración correcta

# 3. Schema.org
- Google Rich Results Test
- Pegar URL del sitio
- Verificar Organization schema detectado

# 4. Open Graph
- https://www.opengraph.xyz
- Pegar URL del sitio
- Verificar imagen y metadata correctos
```

---

## 📊 MÉTRICAS DE ÉXITO

### Objetivos de Lanzamiento

**Performance:**
- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

**SEO:**
- Lighthouse SEO: 100
- Sitemap indexado en Google
- 10+ páginas indexadas en 30 días

**Conversión:**
- 5+ leads/semana desde formulario
- 100+ visitas/semana en primeros 30 días
- Tasa de rebote < 60%

---

## 🚀 PRÓXIMOS PASOS INMEDIATOS

### Día 1: Integraciones Críticas
1. ⏰ 2 horas - Configurar webhook n8n
2. ⏰ 15 min - Activar Google Analytics
3. ⏰ 30 min - Testing completo de formulario

### Día 2: Assets Visuales
1. ⏰ 1 hora - Crear imagen Open Graph
2. ⏰ 20 min - Implementar logo en Navbar/Footer
3. ⏰ 30 min - Testing visual y validación

### Semana 1: Contenido
1. ⏰ 2 horas/día - Escribir posts de blog
2. Objetivo: 3 posts completados
3. Publicar y verificar en /blog

### Semana 2: Contenido Continuado
1. ⏰ 2 horas/día - Continuar posts de blog
2. Objetivo: 3 posts adicionales
3. Total acumulado: 6-7 posts (incluyendo bienvenida)

### Semana 3: Finalización y Deploy
1. Completar posts restantes (3 más)
2. Testing final completo
3. 🚀 **Deploy a producción**

---

## 📞 SOPORTE Y PREGUNTAS

Si tienes dudas sobre algún elemento de esta guía:

**Email técnico:** digisenda@gmail.com  
**Repositorio:** https://github.com/Digisenda/DigiSenda-AI-WEB

**Documentación relacionada:**
- `AUDITORIA_TECNICA_COMPLETA_2026.md` → Análisis completo del proyecto
- `architecture.md` → Arquitectura técnica detallada
- `content-structure.md` → Sistema de contenido y blog

---

**Última actualización:** 2026-03-06  
**Versión:** 1.0  
**Preparado por:** Senior Technical Architect  
**Tiempo estimado total:** 15-20 horas de trabajo
