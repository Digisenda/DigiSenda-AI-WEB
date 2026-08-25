# Design System — Warm-Premium Editorial v3

> Reemplaza la versión anterior ("AI Corporate Nexus", paleta oscura Deep
> Space/Neural Blue/AI Cyan), abandonada en el refresh visual de 2026-08
> (commits `7e299a2`→`1c6480b`, `8335be5`). Fuente de verdad real:
> `tailwind.config.ts` + `app/globals.css`. Este documento la resume; en caso
> de discrepancia, el código gana.

## Paleta de colores

**Bases claras (60–70% del sitio):**
- **Ivory** `#F7F3EC` — fondo por defecto (`bg-ivory`, `--background`)
- **Sand** `#EDE5D6` — fondo de sección alternado
- **Bone** `#FBF8F2` — extremo claro de gradientes de tarjeta
- **Mist** `#E8EAE6`

**Contraste oscuro editorial:**
- **Ink** `#0E1A1F` — todos los headings, fondo de Navbar/Footer, banda de CTA de Trust
- **Graphite-warm** `#2A2E2B` — texto de cuerpo (`--foreground`)
- **Navy-deep** `#10243A`

**Acentos quirúrgicos** (uno por pilar/módulo, aplicado como `accent` + `accentBg` (~8-10% opacidad) + `accentBorder` (~22-28% opacidad) vía `style` inline, porque Tailwind no genera JIT de valores arbitrarios dinámicos):
- **Gold-soft** `#C9A961` — acento primario: eyebrows, subrayados, hover, bordes
- **Terracotta** `#C76F4A` — color del botón primario (`.btn-warm-primary`)
- **Sage** `#6F8F7B` — pilar Business Foundation / estados de éxito
- **Plum** `#5B4A6B` — pilar Customer Acquisition
- **Cyan-controlled** `#3A8C9C` — pilar Digital Presence

## Tipografía (`next/font/google`, cargadas en `app/layout.tsx`)

| Rol | Fuente | CSS var | Tailwind |
|---|---|---|---|
| Display | **Fraunces** (400/500/600/700, normal + *italic*) | `--font-display` | `font-display` |
| Body | **Plus Jakarta Sans** (300–700) | `--font-body` | `font-body` |
| Mono | **JetBrains Mono** (400/500) | `--font-mono` | `font-mono` |

Todos los `h1`–`h6` heredan Fraunces + `color: var(--ink)` + `letter-spacing: -0.01em` vía `app/globals.css`. Los headings usan `font-medium` (500), no bold.

**Recurso tipográfico distintivo:** énfasis con Fraunces *italic* en el texto del headline, ej. `<span className="italic text-graphite-warm">Estados Unidos</span>` o `.gold-underline.italic`.

## Clases utilitarias reutilizables (`app/globals.css`)

- `.btn-warm-primary` — píldora terracota, texto blanco, elevación al hover. CTA primario.
- `.btn-ink-ghost` — borde ink 1.5px transparente, invierte a ink-sobre-ivory al hover. **Sobre fondo `bg-ink` requiere override inline** (`style={{ color: '#F7F3EC', borderColor: 'rgba(251,248,242,0.30)' }}`), o el borde ink queda invisible sobre ink — ver `components/Trust.tsx`.
- `.editorial-card` — gradiente blanco→bone, borde 1px sutil, radio `1.25rem`, elevación cálida, hover con borde dorado.
- `.eyebrow-warm` — mono, mayúsculas, `letter-spacing: 0.24em`, dorado. Kicker de sección.
- `.gold-underline` — subrayado dorado dibujado a mano detrás del texto.
- `.warm-grain` — ruido `feTurbulence` global fijo, opacidad 0.025, `mix-blend-mode: multiply`.
- `.halo-gold` / `.halo-terracotta`, `.section-divider`, `.float-card`, `.dot-grid`.
- Sombras: `shadow-warm-sm|warm|warm-lg`, `shadow-card-premium`, `shadow-gold-ring`.

**No usar** (paleta oscura legacy, retirada en 2026-08-25 junto con los componentes huérfanos que las usaban): `.text-gradient`, `.btn-primary`, `.service-tag`, los tokens `deep-space`/`neural-blue`/`ai-cyan`/`silver`/`graphite`/`gold`(bare)/`gold-dim`, y los alias de fuente `font-space`/`font-inter`.

## Ritmo de secciones

Cada sección de página gestiona su propio fondo, alternando `ivory` → `sand` → `bone` → cierre en `ink` (banda de CTA oscura antes del Footer, también `ink`). Ver comentario en `app/page.tsx`.

## Interacción y movimiento

GSAP 3 + ScrollTrigger. `ease: 'power3.out'`, entrada `y: 16-40 → 0` con `stagger: 0.09-0.14`, trigger `start: 'top 78%'`. Todo componente animado abre con salida temprana si `prefers-reduced-motion: reduce` y limpia con `gsap.context()` + `ctx.revert()`.
