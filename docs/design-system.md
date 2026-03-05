# Design System

## Paleta de Colores
- **Deep Space**: `#0B0F19` (Fondo primario)
- **Neural Blue**: `#2563EB` (Acentos principales)
- **AI Cyan**: `#06B6D4` (Acentos secundarios, glows)
- **Silver**: `#CBD5F5` (Texto principal)
- **Graphite**: `#1E293B` (Bordes, fondos secundarios)

## Tipografía (Importadas vía Google Fonts)
- **Headings**: `'Space Grotesk', sans-serif`
- **Body**: `'Inter', sans-serif`
- **Data/UI**: `'IBM Plex Mono', monospace`

## Interacciones y Estado
- Botones principales: magnéticos (`scale(1.03)` en el hover), con un borde o aura "glow azul".
- Entradas de animación GSAP: configuradas con easing `power3.out`.
- Fondos: "tecnología corporativa" - gradientes oscuros muy sutiles (`bg-gradient-to-b from-[#0B0F19] to-black`).
- "Glassmorphism ligero": `bg-white/5 backdrop-blur-md border border-white/10`.
- Texturas: un SVG `feTurbulence` aplicado como "Noise Overlay" con opacidad `0.03` a nivel global en la página, para dar una sensación premium "analógica".
- Tarjetas redondeadas: `rounded-[2rem]`.
