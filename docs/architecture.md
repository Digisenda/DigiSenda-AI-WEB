# Architecture

Este documento describe la estructura y componentes del landing principal de DigiSenda AI.

## Estructura de la Página (Landing Page)

1. **Header**:
   - Navbar flotante tipo "píldora".
   - Efecto de glass blur integrado al hacer scroll.

2. **Hero (100vh)**:
   - Título principal: *"Lanza y haz crecer tu negocio en Estados Unidos"*
   - Subtexto explicativo de los 4 pilares tecnológicos.
   - Fondos con gradientes tecnológicos y líneas abstractas estilo red neuronal.
   - Acciones principales (CTAs): "Crear mi empresa" y "Explorar servicios".

3. **Sección Ecosistema**:
   - Título: "Un ecosistema completo para emprendedores".
   - Contiene 4 tarjetas animadas: Crear empresa (LLC+EIN), Presencia digital (Web+Google Business), Clientes (Marketing+Leads), Finanzas (Taxes+Bookkeeping).

4. **Sección Tecnología (SynapLeads)**:
   - Presentación de la plataforma tecnológica SynapLeads.
   - Interfaz con animación de flujo de leads conectando nodos.
   - CTA para explorar SynapLeads.

5. **Sección Proceso**:
   - "Cómo funciona DigiSenda".
   - Flujo de pasos: Crear empresa -> Construir presencia digital -> Generar clientes -> Escalar negocio.

6. **Sección Confianza**:
   - Resalta los 4 pilares: Tecnología, Experiencia, Cumplimiento legal e Infraestructura digital.

7. **CTA Final & Footer**:
   - CTA robusta: "Comienza tu negocio hoy".
   - Footer sobre fondo oscuro profundo (`#0B0F19`).
   - Indicador de "Sistema activo" con punto verde pulsante.

## Stack 
- Framework: Next.js + React (App Router).
- Lenguaje: TypeScript.
- Estilos: Tailwind CSS, CSS Modules eventuales para compatibilidad antigua, utilidades integradas.
- Iconos: Lucide React.
- Animación: GSAP y ScrollTrigger.
- Contenido: MDX para blog.
