# 📋 RESUMEN DE PLACEHOLDERS
## DigiSenda AI - Lista Ejecutiva de Elementos Pendientes

**Fecha:** 2026-02-07  
**Total de placeholders:** 13  
**Archivos afectados:** 8  

---

## 🎯 VISTA RÁPIDA

| # | Placeholder | Archivo | Prioridad | Tipo |
|---|-------------|---------|-----------|------|
| 1 | Google Analytics ID | `app/layout.tsx` | 🟡 Media | Analytics |
| 2 | Teléfono de contacto | `components/JsonLd.tsx` | 🔴 Alta | Contacto |
| 3 | URLs redes sociales | `components/JsonLd.tsx` | 🔴 Alta | Social |
| 4 | Logo corporativo | `components/JsonLd.tsx` | 🔴 Alta | Branding |
| 5 | Logo en navbar | `components/Navbar.tsx` | 🟡 Media | Branding |
| 6 | BaseURL sitemap | `app/sitemap.ts` | 🟡 Media | SEO |
| 7 | Sitemap URL robots | `app/robots.ts` | 🟡 Media | SEO |
| 8 | Webhook n8n | `app/contact/page.tsx` | 🔴 Alta | Backend |
| 9 | Política de Privacidad | `app/privacy/page.tsx` | 🔴 Alta | Legal |
| 10 | Términos de Servicio | `app/terms/page.tsx` | 🔴 Alta | Legal |
| 11 | Disclaimer | `app/disclaimer/page.tsx` | 🟡 Media | Legal |
| 12 | Servicios ejemplo | `app/services/page.tsx` | 🟡 Media | Contenido |

---

## 🔴 CRÍTICOS (6 elementos)

### 1. Webhook n8n para Formulario de Contacto
- **Archivo:** `app/contact/page.tsx` (línea 23)
- **Estado actual:** Simulación sin conexión real
- **Impacto:** El formulario no captura leads reales
- **Código actual:**
```typescript
// usage: fetch('https://n8n.your-domain.com/webhook/...', { method: 'POST', body: JSON.stringify(data) })
```
- **Acción requerida:**
  - Configurar instancia n8n
  - Crear workflow de captura
  - Obtener URL de webhook
  - Implementar fetch real
  - Añadir manejo de errores

---

### 2. Teléfono de Contacto
- **Archivo:** `components/JsonLd.tsx` (línea 14)
- **Valor actual:** `+1-555-555-5555`
- **Impacto:** Datos falsos en schema.org afectan SEO
- **Acción requerida:** Número de teléfono corporativo real

---

### 3. URLs de Redes Sociales
- **Archivo:** `components/JsonLd.tsx` (líneas 9-10)
- **Valores actuales:**
  - Twitter: `https://twitter.com/digisenda`
  - LinkedIn: `https://linkedin.com/company/digisenda`
- **Impacto:** URLs sin verificar afectan autoridad social
- **Acción requerida:**
  - Verificar existencia de perfiles
  - Actualizar con URLs reales
  - O eliminar si no existen aún

---

### 4. Logo Corporativo
- **Archivo:** `components/JsonLd.tsx` (línea 7)
- **Valor actual:** `https://digisenda.ai/logo.png`
- **Estado:** Archivo no existe
- **Impacto:** Schema.org incompleto, imagen rota
- **Acción requerida:**
  - Diseñar logo corporativo
  - Formato: PNG con transparencia
  - Dimensiones: 512x512px mínimo
  - Subir a `/public/logo.png`

---

### 5. Política de Privacidad
- **Archivo:** `app/privacy/page.tsx`
- **Estado:** Contenido mínimo (3 líneas)
- **Impacto:** Incumplimiento GDPR/CCPA
- **Acción requerida:**
  - Redacción legal completa
  - Incluir secciones obligatorias:
    - Recolección de datos
    - Uso de cookies
    - Derechos de usuarios
    - Transferencias internacionales
    - Datos de contacto del DPO

---

### 6. Términos de Servicio
- **Archivo:** `app/terms/page.tsx`
- **Estado:** Placeholder explícito
- **Impacto:** Sin protección legal
- **Acción requerida:**
  - Redacción legal completa
  - Incluir secciones clave:
    - Uso aceptable
    - Propiedad intelectual
    - Limitaciones de garantía
    - Ley aplicable y jurisdicción

---

## 🟡 IMPORTANTES (5 elementos)

### 7. Google Analytics ID
- **Archivo:** `app/layout.tsx` (líneas 30-31)
- **Estado:** Comentado, listo para activar
- **Código actual:**
```typescript
{/* <GoogleAnalytics gaId="G-PLACEHOLDER" /> */}
```
- **Impacto:** Sin métricas de usuarios
- **Acción requerida:**
  - Crear propiedad en Google Analytics 4
  - Obtener ID (formato: `G-XXXXXXXXXX`)
  - Descomentar línea y reemplazar placeholder

---

### 8. BaseURL en Sitemap
- **Archivo:** `app/sitemap.ts` (línea 6)
- **Valor actual:** `https://digisenda.ai`
- **Comentario:** `// Update with actual domain`
- **Impacto:** URLs generadas en sitemap
- **Acción requerida:** Confirmar dominio de producción

---

### 9. Sitemap URL en Robots
- **Archivo:** `app/robots.ts` (línea 10)
- **Valor actual:** `https://digisenda.ai/sitemap.xml`
- **Comentario:** `// Update with actual domain later`
- **Impacto:** Crawlers usan esta URL para indexación
- **Acción requerida:** Sincronizar con dominio final

---

### 10. Logo en Navbar
- **Archivo:** `components/Navbar.tsx` (líneas 9-10)
- **Estado:** Texto en lugar de imagen
- **Comentario:** `{/* We will replace this with an Image once logo is available */}`
- **Impacto:** Identidad visual reducida
- **Acción requerida:**
  - Usar logo corporativo (ver placeholder #4)
  - Implementar con Next.js Image component
  - Optimizar para diferentes tamaños de pantalla

---

### 11. Contenido de Servicios
- **Archivo:** `app/services/page.tsx` (línea 20)
- **Estado:** Servicios genéricos de ejemplo
- **Comentario:** `{/* Example Services - placeholders for future child brands */}`
- **Impacto:** Ofertas no reflejan servicios reales
- **Acción requerida:**
  - Definir servicios específicos ofrecidos
  - Detallar propuestas de valor
  - Considerar landing pages dedicadas

---

## 📊 ESTADÍSTICAS

### Por Tipo
- **Legal:** 3 placeholders (23%)
- **Branding:** 2 placeholders (15%)
- **Contacto/Social:** 2 placeholders (15%)
- **SEO:** 2 placeholders (15%)
- **Backend:** 1 placeholder (8%)
- **Analytics:** 1 placeholder (8%)
- **Contenido:** 1 placeholder (8%)

### Por Archivo
```
components/JsonLd.tsx    → 3 placeholders
app/layout.tsx          → 1 placeholder
app/contact/page.tsx    → 1 placeholder
app/privacy/page.tsx    → 1 placeholder
app/terms/page.tsx      → 1 placeholder
app/sitemap.ts          → 1 placeholder
app/robots.ts           → 1 placeholder
app/services/page.tsx   → 1 placeholder
components/Navbar.tsx   → 1 placeholder
```

### Por Prioridad
- 🔴 **Alta:** 6 placeholders (50%)
- 🟡 **Media:** 5 placeholders (42%)
- 🟢 **Baja:** 0 placeholders

---

## ✅ CHECKLIST DE ACTUALIZACIÓN

Use esta lista para rastrear el progreso:

### Configuración Técnica
- [ ] Google Analytics ID obtenido e implementado
- [ ] Webhook n8n configurado y probado
- [ ] Dominio de producción confirmado
- [ ] URLs actualizadas (sitemap + robots)

### Assets Visuales
- [ ] Logo corporativo diseñado
- [ ] Logo subido a `/public/logo.png`
- [ ] Logo implementado en navbar
- [ ] Favicon actualizado (opcional)

### Datos Corporativos
- [ ] Teléfono corporativo confirmado
- [ ] Perfiles de redes sociales verificados
- [ ] URLs de redes sociales actualizadas
- [ ] Datos de contacto en footer (si aplica)

### Contenido Legal
- [ ] Política de Privacidad completa redactada
- [ ] Términos de Servicio completos redactados
- [ ] Disclaimer revisado y ampliado
- [ ] Cookie banner implementado (si se requiere)

### Contenido de Marketing
- [ ] Servicios reales definidos y listados
- [ ] Descripciones de servicios detalladas
- [ ] Landing pages de servicios (opcional)
- [ ] Contenido de blog adicional (opcional)

---

## 🚀 ORDEN DE IMPLEMENTACIÓN RECOMENDADO

### Fase 1: Crítico (Semana 1)
1. Webhook n8n → Captura de leads operativa
2. Logo corporativo → Identidad visual
3. Teléfono y redes sociales → Contacto real
4. Google Analytics → Métricas desde día 1

### Fase 2: Legal (Semana 2)
1. Política de Privacidad → Compliance
2. Términos de Servicio → Protección legal
3. Revisión de Disclaimer

### Fase 3: Contenido (Semana 3-4)
1. Servicios detallados
2. Logo en navbar
3. Confirmación de dominio
4. Optimizaciones finales

---

## 📧 CONTACTO PARA ACTUALIZACIONES

Para reportar actualizaciones completadas o consultas sobre este documento:
- **Email:** digisenda@gmail.com
- **Repositorio:** https://github.com/Digisenda/DigiSenda-AI-WEB

---

**Última actualización:** 2026-02-07  
**Versión del documento:** 1.0  
**Auditor:** DigiSenda Technical Team
