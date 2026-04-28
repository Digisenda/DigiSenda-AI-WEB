# DigiSenda AI — Catálogo de Imágenes (v3 Warm-Premium)

Este archivo lista cada imagen humana / mockup que el sitio necesita, con prompt IA listo, especificación técnica y ruta de destino. Reemplazar los placeholders SVG por los assets finales (preferentemente JPG o WebP/AVIF) sin cambiar la ruta.

---

## Reglas globales de estilo

**Lenguaje visual obligatorio**:
- Editorial photography, 35mm, shallow depth of field
- Warm natural lighting (golden hour, ventana lateral, luz cálida cinemática)
- Tonos marfil, dorado mate, terracotta sutil, verde sage, sombras cálidas
- Personas: emprendedores hispanos en Estados Unidos, edades 25–55, expresiones reales (no sonrisas plásticas)
- Contextos: pequeños negocios reales (food truck, salón, panadería, oficina pequeña, taller, café), oficinas tipo home-office cálidas, escritorios con papeles ordenados, manos firmando documentos, laptops con marca neutra
- Composición editorial con espacio negativo intencional (sujeto fuera de centro o tercio)

**Evitar a toda costa**:
- Stock corporate genérico, oficinas vidriadas frías
- Sonrisas falsas dirigidas a cámara, "high-five" team-building
- Saturación azul/cyan, gradientes púrpura sobre blanco
- Personas con dedos extra, manos deformes (revisar siempre)
- Imágenes oscuras, frías, tristes, dramáticas
- Logos reales de terceros visibles

**Formato de salida final**:
- JPG o WebP/AVIF, sRGB
- Hero: 1600×2000 px (vertical 4:5) y 1920×1080 px (horizontal 16:9 fallback)
- Servicios: 1200×900 px (4:3)
- Testimonios: 800×800 px (1:1)
- Peso objetivo: < 180 KB (con `next/image` se optimiza más)

**Quitar `unoptimized` de los `<Image>` en cuanto el asset deje de ser SVG.**

---

## Hero (Fase 2 — actualmente con placeholder SVG)

### `/public/img/hero/founder.jpg` *(reemplaza `founder-placeholder.svg`)*

**Ruta usada en**: `components/Hero.tsx`

**Prompt sugerido (Midjourney / Flux / Ideogram):**
> Editorial portrait of a hispanic small business owner in their warm, sunlit storefront in the United States — a small bakery, salon, or cozy office. Mid-30s woman OR mid-40s man, confident relaxed pose, slight three-quarter angle, looking off-camera with quiet pride. Soft golden hour light streaming through a side window, warm ivory and terracotta tones, shallow depth of field, 35mm film aesthetic, photorealistic. Background slightly blurred showing wood shelves, plants, neutral product packaging. No visible third-party logos. Composition leaves negative space on the right side for floating UI elements. Aspect 4:5.

Variantes a generar (escoger 1):
- A: mujer 30s en panadería pequeña, delantal beige, manos enharinadas
- B: hombre 40s en oficina home-office cálida, camisa terracotta, papeles
- C: pareja joven en su pequeño food truck, mirada cómplice
- D: mujer 50s en su salón de belleza, mirada serena

**Cuándo usar `priority`**: sí, esta imagen es LCP candidate.

---

## Servicios (Fase 3 — pendiente, no se usan todavía)

### `/public/img/services/llc.jpg`
> Hands of a hispanic entrepreneur signing a document on a warm-toned wooden desk, laptop open in the background showing a clean dashboard with state filing confirmation. Soft natural light, ivory paper, fountain pen, gold accent. Editorial, 35mm, photorealistic. No legible third-party logos.

### `/public/img/services/web.jpg`
> Hispanic woman in her late 20s in a warm coffee shop, smiling softly while looking at her own e-commerce site on her phone. Laptop next to her with the same site mockup. Golden window light, terracotta cup, ivory walls. Editorial, 35mm, photorealistic.

### `/public/img/services/marketing.jpg`
> Two hispanic small business co-owners standing inside their boutique store, looking together at a tablet showing analytics charts (warm tones, no cyan). Real shop interior with plants, soft natural light, mid-afternoon. Editorial, 35mm.

### `/public/img/services/tax.jpg`
> Hispanic financial advisor sitting next to a small business owner client at a wooden table, explaining something on a tablet calmly. Warm relaxed atmosphere, papers organized, no stress. Sunlit ivory office. Editorial, 35mm, photorealistic.

---

## Testimonios (Fase 4 — pendiente)

### `/public/img/people/testimonial-{1..6}.jpg`
> Square 1:1 editorial portrait of a real-looking hispanic small business owner in their workplace. Warm natural light, neutral expression with quiet confidence (NOT a stock smile). Terracotta / sage / ivory color tones. Photorealistic.

---

## CTA final (Fase 4 — pendiente)

### `/public/img/hero/cta-overhead.jpg`
> Overhead flat-lay of a warm wooden desk with: a closed laptop, a ceramic mug of coffee, a small stack of organized documents tied with a kraft string, a fountain pen, a single small succulent. Soft directional sunlight from one side, ivory and gold tones, no electronics on screens. Editorial flat-lay, 35mm, photorealistic.

---

## Mockups UI flotantes del Hero

Las cuatro tarjetas flotantes 2.5D del hero (LLC, Web, Leads, Tax) **NO** son imágenes — están construidas en HTML/CSS dentro de `components/FloatingMockupStack.tsx`. No requieren asset externo. Solo si en el futuro queremos un mockup de iPhone/laptop con el sitio real del cliente, se añadiría aquí:

### `/public/img/mockups/site-iphone.png` *(opcional, futuro)*
> Photorealistic mockup of an iPhone 15 Pro standing upright on a warm wooden surface, screen showing a clean modern small-business website (warm tones, ivory background). Soft shadow, no reflections of branded apps.

---

## Checklist al reemplazar placeholders

- [ ] Validar que la ruta y nombre del archivo coinciden con la usada en el componente.
- [ ] Convertir a JPG/WebP/AVIF — no dejar SVGs como assets finales.
- [ ] Quitar `unoptimized` del `<Image>` correspondiente.
- [ ] Ajustar `width`/`height` reales para evitar CLS.
- [ ] Revisar manos y rostros (defectos de IA).
- [ ] Verificar que ningún logo de terceros quedó visible.
- [ ] Lighthouse: LCP < 2.5 s en mobile.
