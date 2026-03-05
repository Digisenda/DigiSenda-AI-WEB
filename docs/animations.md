# Animaciones

## Entorno y Librerías
- Utilizamos `GSAP` junto con el plugin `ScrollTrigger` para manejar animaciones vinculadas al scroll y secuencias de entrada sofisticadas.

## Props de Animación Básicas
- **Easing**: `power3.out`. Provee una sensación premium, empezando rápida y terminando muy suave.
- **Micro-interacciones**: 
  - Botones "magnéticos": `scale: 1.03` al hacer hover usando transiciones CSS.
  - El blur en el navbar se activa inmediatamente interactuando con ScrollTrigger al comenzar a viajar por la página.

## Flujos principales
1. **Hero**: 
   - Elementos del titular tienen un stagger (aparición progresiva en cascada).
   - "Líneas abstractas" de estilo red neuronal animadas sutilmente en el fondo (usualmente implementado con animaciones infinitas rotativas o pulso).
2. **Ecosistema**:
   - Tarjetas entran con `y: 50`, `opacity: 0` y escalados individuales coordinados por el trigger de Scroll.
3. **SynapLeads (Nodos)**:
   - "Flujo de leads conectando nodos" implementado con elementos visuales que se ilumina o traza en dirección a un punto focal en el scroll.

*NOTA:* Para evitar colisiones en React 19 / Next.js, se usa `useGSAP` o `gsap.context` para limpiar correctamente las referencias al desmontar componentes.
