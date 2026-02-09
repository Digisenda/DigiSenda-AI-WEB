# 📦 DATOS REQUERIDOS PARA PRODUCCIÓN FINAL
## DigiSenda AI - Checklist de Información Pendiente

**Fecha:** 2026-02-07  
**Propósito:** Lista estructurada de datos que el equipo debe proporcionar  
**Estado:** Pendiente de completar  

---

## 🎯 RESUMEN

Este documento detalla **TODOS** los datos externos que deben ser proporcionados por el equipo de DigiSenda para completar el sitio web y llevarlo a producción final.

### Categorías de Datos
1. **Datos Corporativos** (4 elementos)
2. **Credenciales y Configuración** (3 elementos)
3. **Assets Visuales** (2 elementos)
4. **Contenido Legal** (3 elementos)
5. **Contenido de Marketing** (2 elementos)
6. **Opcionales** (4 elementos)

---

## 1️⃣ DATOS CORPORATIVOS

### 1.1 Teléfono de Contacto
- **Tipo:** Obligatorio
- **Formato:** Internacional (ej: `+1-234-567-8900`, `+34-XXX-XXX-XXX`)
- **Uso:** 
  - Schema.org JSON-LD
  - Posible visualización en footer
  - Metadatos para SEO local
- **Consideraciones:**
  - Debe ser un número operativo
  - Preferiblemente línea corporativa
  - Puede ser número VoIP profesional
- **Ubicación en código:** `components/JsonLd.tsx` línea 14

**📝 DATO A PROPORCIONAR:**
```
Teléfono: 940) 548-7913
_
```

---

### 1.2 Perfiles de Redes Sociales

#### Twitter/X
- **Tipo:** Opcional (pero recomendado si existe)
- **Formato:** URL completa (ej: `https://twitter.com/digisenda`)
- **Validación requerida:** Verificar que el perfil existe y es activo
- **Ubicación en código:** `components/JsonLd.tsx` línea 9

**📝 DATO A PROPORCIONAR:**
```
Twitter URL: https://x.com/DIGISENDAAI
¿Perfil verificado?: [ X] Sí [ ] No
```

#### LinkedIn
- **Tipo:** Opcional (pero recomendado si existe)
- **Formato:** URL completa (ej: `https://linkedin.com/company/digisenda`)
- **Validación requerida:** Verificar que la página existe y está activa
- **Ubicación en código:** `components/JsonLd.tsx` línea 10

**📝 DATO A PROPORCIONAR:**
```
LinkedIn URL: https://www.linkedin.com/in/digisenda-ai-34b3053ab/
¿Página verificada?: [ x] Sí [ ] No
```

#### Otras Redes (Opcional)
Si DigiSenda tiene presencia en otras plataformas:
- GitHub 
- YouTube
- Facebook
- Instagram

**📝 DATO A PROPORCIONAR:**
```
GitHub: https://github.com/Digisenda
YouTube: https://www.youtube.com/@DigiSenda
Facebook: https://www.facebook.com/settings?tab=profile&section=username
Instagram: https://www.instagram.com/digisendaai/
```

---

### 1.3 Dominio de Producción
- **Tipo:** Obligatorio para SEO correcto
- **Valor actual:** `https://digisenda.ai` (sin verificar)
- **Uso:**
  - Sitemap.xml
  - Robots.txt
  - Schema.org
  - Open Graph tags
- **Consideraciones:**
  - ¿Es el dominio final confirmado?
  - ¿Está configurado en Vercel?
  - ¿SSL activo?

**📝 DATO A PROPORCIONAR:**
```
Dominio de producción: https://digisendaai.com
¿Ya está configurado en Vercel?: [ ] Sí [x ] No
¿SSL activo?: [x ] Sí [ ] No
```

---

### 1.4 Email Corporativo de Contacto
- **Tipo:** Obligatorio
- **Uso:**
  - Política de Privacidad (contacto DPO)
  - Términos de Servicio
  - Footer del sitio
  - Confirmaciones de formulario
- **Formato:** profesional (ej: `contact@digisenda.ai`, `info@digisenda.ai`)

**📝 DATO A PROPORCIONAR:**
```
Email general: admin@digisendaai.com
Email legal/DPO: 
Email soporte: soporte@digisendaai.com
```

---

## 2️⃣ CREDENCIALES Y CONFIGURACIÓN

### 2.1 Google Analytics 4
- **Tipo:** Obligatorio (para métricas)
- **Formato:** `G-XXXXXXXXXX`
- **Instrucciones:**
  1. Ir a [Google Analytics](https://analytics.google.com)
  2. Crear nueva propiedad
  3. Configurar como "Web stream"
  4. Copiar el Measurement ID (formato: `G-XXXXXXXXXX`)
- **Ubicación en código:** `app/layout.tsx` línea 31

**📝 DATO A PROPORCIONAR:**
```
Google Analytics ID: G-3PNSTCCWZG___________________________________
¿Propiedad ya creada?: [ x] Sí [ ] No
```

---

### 2.2 Webhook n8n
- **Tipo:** Obligatorio (formulario de contacto)
- **Formato:** URL completa de webhook
- **Ejemplo:** `https://n8n.digisenda.com/webhook/contact-form-abc123`
- **Instrucciones:**
  1. Configurar instancia n8n (self-hosted o cloud)
  2. Crear workflow de "Webhook → [Acción]"
  3. Acciones sugeridas:
     - Enviar email a equipo
     - Guardar en base de datos
     - Crear ticket en CRM
     - Notificación Slack/Discord
  4. Copiar URL del webhook generado
- **Ubicación en código:** `app/contact/page.tsx` línea 23

**📝 DATOS A PROPORCIONAR:**
```
Webhook URL: DEJARLO PENDIENTE AUN
¿n8n ya está configurado?: [ ] Sí [X ] No
¿Workflow de contacto creado?: [ ] Sí [ X] No
Destino de leads: [ ] Email [ X] CRM [ X] Base de datos [ ] Otro: __________
```

**Estructura esperada del payload:**
```json
{
  "name": "string",
  "email": "string (validado)",
  "message": "string"
}
```

---

### 2.3 Variables de Entorno (si aplica)
- **Tipo:** Según implementación
- **Uso:** Secrets para APIs, bases de datos, etc.
- **Plataforma:** Vercel Environment Variables

**📝 DATOS A PROPORCIONAR (si aplica):**
```
NEXT_PUBLIC_GA_ID=___________________________________
N8N_WEBHOOK_URL=___________________________________
OTROS: ___________________________________
```

---

## 3️⃣ ASSETS VISUALES

### 3.1 Logo Corporativo
- **Tipo:** Obligatorio
- **Formato:** PNG con transparencia
- **Especificaciones:**
  - **Resolución mínima:** 512x512px
  - **Recomendada:** 1024x1024px o superior
  - **Formato:** PNG con canal alpha (transparencia)
  - **Color:** Adaptado para fondos claros y oscuros
- **Variantes necesarias:**
  - Logo principal (cuadrado o rectangular)
  - Favicon (opcional pero recomendado)
- **Uso:**
  - Navbar
  - Footer
  - Schema.org JSON-LD
  - Open Graph images
- **Ubicación:** Se subirá a `/public/logo.png`

**📝 ASSET A PROPORCIONAR:**
```
[ ] Logo principal (PNG, >512px)
[ ] Favicon (opcional, 32x32 o 64x64)
[ ] Versión para fondo oscuro (si difiere)
```

---

### 3.2 Favicon (Opcional pero recomendado)
- **Tipo:** Opcional
- **Formato:** ICO, PNG, o SVG
- **Especificaciones:**
  - Tamaños comunes: 16x16, 32x32, 64x64
  - Puede usar Next.js para generar automáticamente
- **Ubicación:** `/public/favicon.ico` o `/app/icon.png`

**📝 ASSET A PROPORCIONAR:**
```
[ ] Favicon provisto manualmente
[ ] Generar automáticamente desde logo
```

---

## 4️⃣ CONTENIDO LEGAL

### 4.1 Política de Privacidad Completa
- **Tipo:** Obligatorio (compliance legal)
- **Estado actual:** Contenido placeholder mínimo
- **Ubicación:** `app/privacy/page.tsx`
- **Requisitos:**
  - **GDPR** (si opera en Europa)
  - **CCPA** (si opera en California)
  - **Otras jurisdicciones** según aplique
- **Secciones obligatorias:**
  1. Información que recopilamos
  2. Cómo usamos la información
  3. Cookies y tecnologías de seguimiento
  4. Compartir información con terceros
  5. Derechos de los usuarios (acceso, rectificación, eliminación)
  6. Retención de datos
  7. Seguridad de datos
  8. Transferencias internacionales
  9. Datos de contacto del DPO (Data Protection Officer)
  10. Cambios a la política
  11. Ley aplicable

**📝 OPCIONES:**
```
[ ] Redacción legal propia (proporcionar texto completo)
[ X] Usar plantilla legal estándar (indicar jurisdicción) CREAR E INCLUIR LO NECESARIO PARA PASAR VERIFICACION TWILIO A2P
[ ] Contratar asesoría legal especializada
```

**Si proporciona redacción propia:**
- Enviar documento completo en formato Markdown o texto plano
- Incluir todos los puntos obligatorios mencionados

---

### 4.2 Términos de Servicio Completos
- **Tipo:** Obligatorio (protección legal)
- **Estado actual:** Placeholder explícito
- **Ubicación:** `app/terms/page.tsx`
- **Secciones recomendadas:**
  1. Aceptación de términos
  2. Descripción del servicio
  3. Uso aceptable
  4. Cuentas de usuario (si aplica)
  5. Propiedad intelectual
  6. Limitaciones de garantía
  7. Limitación de responsabilidad
  8. Indemnización
  9. Terminación del servicio
  10. Resolución de disputas
  11. Ley aplicable y jurisdicción
  12. Modificaciones a los términos

**📝 OPCIONES:**
```
[ ] Redacción legal propia (proporcionar texto completo)
[ X] Usar plantilla legal estándar 
CREAR E INCLUIR LO NECESARIO PARA PASAR VERIFICACION TWILIO A2P

[ ] Contratar asesoría legal especializada
```

**Si proporciona redacción propia:**
- Enviar documento completo en formato Markdown o texto plano
- Asegurar cobertura de todos los puntos clave

---

### 4.3 Revisión de Disclaimer
- **Tipo:** Recomendado
- **Estado actual:** Contenido básico funcional
- **Ubicación:** `app/disclaimer/page.tsx`
- **Contenido actual:** "DigiSenda AI validates services but is not liable for third-party operational failures of child services."
- **Pregunta:** ¿Este texto es suficiente o requiere ampliación?

**📝 DECISIÓN:**
```
[ ] Mantener texto actual
[ X] Ampliar con (especificar): ACTUALIZAR CON LO QUE SE CONSIDERE NECESARIO ACTUALMENTE 
[ ] Reemplazar completamente (proporcionar nuevo texto)
```

---

## 5️⃣ CONTENIDO DE MARKETING

### 5.1 Descripción Detallada de Servicios
- **Tipo:** Recomendado
- **Estado actual:** Servicios genéricos de ejemplo
- **Ubicación:** `app/services/page.tsx`
- **Servicios actuales (placeholders):**
  - Consulting
  - Development
  - AI Integration

**📝 DATOS A PROPORCIONAR:**

Para cada servicio real ofrecido, especificar:

#### Servicio 1
```
Nombre: ___________________________________
Descripción corta (1 línea): ___________________________________
Descripción larga (párrafo): 
___________________________________
___________________________________
___________________________________

Propuesta de valor única: ___________________________________
URL de contacto/enlace: ___________________________________
Precio indicativo (opcional): [ ] Mostrar [ ] No mostrar
```

#### Servicio 2
```
[Repetir estructura]
```

#### Servicio 3
```
[Repetir estructura]
```
DATOS DE LOS SERVICIOS.

Nombre: SynapLeads
Descripción corta (1 línea): 
Plataforma inteligente para captura, calificación y transferencia de leads en tiempo real.

Descripción larga (párrafo): 
SynapLeads es una plataforma SaaS desarrollada por DigiSenda AI que automatiza la captura, validación y gestión de leads mediante flujos inteligentes y agentes de IA. 
Está diseñada para negocios que necesitan convertir prospectos en oportunidades reales, integrando formularios, CRM, automatizaciones y live transfer telefónico.
El sistema prioriza velocidad, trazabilidad y control total del lead desde el primer contacto hasta la conversión.

Propuesta de valor única: 
Leads calificados y transferidos en tiempo real, con automatización avanzada y control técnico total.

URL de contacto/enlace: ___________________________________
Precio indicativo (opcional): [ ] Mostrar [ ] No mostrar

Nombre: Creación y estructuración de LLC
Descripción corta (1 línea): 
Servicio integral para la creación y organización legal de LLC en Estados Unidos.

Descripción larga (párrafo): 
DigiSenda AI acompaña a emprendedores y pequeños negocios en el proceso completo de creación de su LLC, incluyendo verificación de nombre, filing estatal, estructuración documental y organización inicial.
El servicio no se limita al registro: se enfoca en dejar una base clara, ordenada y lista para operar, escalar o integrarse con sistemas digitales.
Cada LLC se documenta de forma replicable y auditable.

Propuesta de valor única: 
No solo creamos la LLC, la dejamos estructurada y lista para operar correctamente.

URL de contacto/enlace: ___________________________________
Precio indicativo (opcional): [ ] Mostrar [ ] No mostrar

Nombre: Landings y presencia web profesional
Descripción corta (1 línea): 
Diseño y despliegue de sitios web y landing pages orientadas a conversión y visibilidad.

Descripción larga (párrafo): 
DigiSenda AI desarrolla landing pages y sitios web modernos enfocados en conversión, cumplimiento y presencia digital sólida.
Los proyectos incluyen estructura técnica correcta, despliegue en plataformas modernas, integración con analítica y bases listas para campañas.
No se trata solo de diseño visual, sino de crear activos digitales funcionales que trabajen para el negocio.

Propuesta de valor única: 
Webs pensadas como activos de negocio, no solo como páginas bonitas.

URL de contacto/enlace: ___________________________________
Precio indicativo (opcional): [ ] Mostrar [ ] No mostrar


Nombre: Preparación de Taxes en Estados Unidos
Descripción corta (1 línea): 
Servicio profesional de preparación de impuestos para individuos y pequeños negocios en EE.UU.

Descripción larga (párrafo): 
DigiSenda AI ofrece servicios de preparación de taxes enfocados en cumplimiento, optimización legal y correcta interpretación de cada caso.
El servicio se apoya en análisis técnico, simulaciones de escenarios y explicación clara al cliente, priorizando decisiones defendibles ante el IRS.
Está dirigido principalmente a individuos, familias y pequeños negocios que buscan claridad, orden y acompañamiento real durante la temporada fiscal.

Propuesta de valor única: 
No solo se prepara el tax return, se explica y se estructura con criterio técnico.

URL de contacto/enlace: ___________________________________
Precio indicativo (opcional): [ ] Mostrar [ ] No mostrar

Nombre: Marketing digital y educación estratégica en la web
Descripción corta (1 línea): 
Servicios de marketing digital y divulgación educativa enfocados en crecimiento sostenible.

Descripción larga (párrafo): 
DigiSenda AI ofrece servicios de marketing digital combinados con educación práctica para emprendedores y negocios que desean entender y controlar su presencia online.
El enfoque incluye creación de contenido educativo, estructuración de presencia web, orientación en embudos, automatización básica y uso estratégico de herramientas digitales e IA.
No se trata de vender humo ni gestión opaca, sino de enseñar, acompañar y construir activos digitales reales.

Propuesta de valor única: 
Marketing con criterio técnico y educación real, no dependencia de una agencia.

URL de contacto/enlace: ___________________________________
Precio indicativo (opcional): [ ] Mostrar [ ] No mostrar

---

### 5.2 Contenido de Blog Adicional (Opcional)
- **Tipo:** Opcional
- **Estado actual:** 1 post de bienvenida
- **Formato:** MDX (Markdown con componentes React)
- **Ubicación:** `/content/`
- **Estructura de post:**
```markdown
---
title: "Título del Post"
date: "YYYY-MM-DD"
excerpt: "Resumen breve"
author: "Nombre del autor"
---

# Contenido del post aquí...
```

**📝 PREGUNTA:**
```
¿Desean agregar más posts iniciales?: [ x] Sí [ ] No

Si sí, cantidad aproximada: genera 2 post por cada servicio, uno de bienvenida y el segundo de temas referentes y actuales del mismo
Temas sugeridos: 
1. 
2. ___________________________________
3. ___________________________________
```

---

## 6️⃣ DATOS OPCIONALES (MEJORAS)

### 6.1 Datos de SEO Local (si aplica)
- **Tipo:** Opcional
- **Uso:** Google Business Profile, búsquedas locales
- **Datos:**
  - Dirección física
  - Horarios de atención
  - Coordenadas GPS

**📝 DATOS A PROPORCIONAR (si aplica):**
```
Dirección: ___________________________________
Ciudad/Estado: san Antonio Texas
Código Postal: ___________________________________
País: ___________________________________
Horarios: abierto todo el dia
```

---

### 6.2 Metadatos Open Graph Personalizados
- **Tipo:** Opcional
- **Uso:** Compartir en redes sociales
- **Assets:**
  - Imagen OG (1200x630px)
  - Descripción específica para social media

**📝 ASSET A PROPORCIONAR:** MARCALO COMO PENDIENTE
```
[ ] Imagen Open Graph (1200x630px, PNG/JPG)
[ ] Texto social personalizado
```

---

### 6.3 Integración con CRM  MARCALO COMO PENDIENTE
- **Tipo:** Opcional
- **Plataformas comunes:** HubSpot, Salesforce, Pipedrive
- **Uso:** Sincronizar leads del formulario de contacto

**📝 DATOS A PROPORCIONAR (si aplica):**
```
CRM utilizado: ___________________________________
API Key (si aplica): ___________________________________
Preferencia: [ ] Integrar [ ] Solo email [ ] Solo n8n
```

---

### 6.4 Cookie Banner (si se requiere)
- **Tipo:** Según jurisdicción (obligatorio en EU)
- **Uso:** Compliance GDPR
- **Consideraciones:**
  - ¿Opera en Europa? NO OPERA
  - ¿Usa cookies de terceros? NO
  - ¿Google Analytics requiere consentimiento? NO

**📝 DECISIÓN:**
```
[ ] Implementar cookie banner
[ ] No necesario por ahora
[X ] Evaluar más tarde

Si se implementa, preferencia:
[ ] Banner simple (solo aviso)
[ ] Banner con opciones de consentimiento
[ ] Integración con CMP (Consent Management Platform)
```

---

## ✅ CHECKLIST DE RECOPILACIÓN

Use esta lista para rastrear la recopilación de datos:

### Corporativos
- [ x] Teléfono de contacto
- [x ] URLs de redes sociales (Twitter, LinkedIn)
- [ x] Dominio de producción confirmado
- [x ] Emails corporativos (contacto, legal, soporte)

### Configuración
- [ x] Google Analytics ID
- [ ] Webhook n8n URL
- [ ] Variables de entorno (si aplican)

### Assets Visuales
- [ ] Logo corporativo (PNG, >512px)
- [ ] Favicon (opcional)

### Contenido Legal
- [x ] Política de Privacidad completa
- [x ] Términos de Servicio completos
- [ x] Revisión de Disclaimer

### Contenido de Marketing
- [ X] Descripción detallada de servicios reales
- [ ] Posts de blog adicionales (opcional)

### Opcionales
- [ ] Datos de SEO local
- [ ] Imagen Open Graph
- [ ] Integración CRM
- [ ] Cookie banner (decisión)

---

## 📧 ENTREGA DE DATOS

### Método de Entrega
Los datos pueden ser proporcionados mediante:

1. **Documento estructurado:** Completar este mismo archivo
2. **Email:** Enviar a digisenda@gmail.com
3. **Repositorio:** Crear issue en GitHub con los datos
4. **Videollamada:** Sesión de recopilación con el equipo técnico

### Formato de Archivos
- **Textos:** Markdown (.md), texto plano (.txt), o Google Docs
- **Imágenes:** PNG, JPG, SVG (según se especifique)
- **Documentos legales:** PDF o Markdown

---

## 🚀 PRIORIZACIÓN

### Datos Críticos (Bloquean producción final)
1. ✅ Webhook n8n
2. ✅ Política de Privacidad
3. ✅ Términos de Servicio
4. ✅ Logo corporativo
5. ✅ Teléfono de contacto

### Datos Importantes (Afectan SEO/UX)
1. Google Analytics ID
2. URLs de redes sociales
3. Dominio confirmado
4. Servicios detallados

### Datos Opcionales (Mejoras incrementales)
1. SEO local
2. Cookie banner
3. Integración CRM
4. Open Graph personalizado

---

## 📞 CONTACTO PARA CONSULTAS

Si tiene dudas sobre algún dato requerido o necesita asistencia:

- **Email técnico:** digisenda@gmail.com
- **Repositorio:** https://github.com/Digisenda/DigiSenda-AI-WEB
- **Documentación relacionada:**
  - `docs/AUDITORIA_REPOSITORIO.md` → Análisis técnico completo
  - `docs/RESUMEN_PLACEHOLDERS.md` → Vista rápida de pendientes

---

**Última actualización:** 2026-02-07  
**Versión del documento:** 1.0  
**Preparado por:** DigiSenda Technical Team
