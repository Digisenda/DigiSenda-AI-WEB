# Checklist de Placeholders

Este archivo lista todos los elementos temporales creados durante el desarrollo del diseño corporativo "AI Corporate Nexus".

### 1. Imágenes Decorativas en SynapLeads
- **Componente**: `Technology`
- **Archivo**: `components/Technology.tsx`
- **Ubicación**: Sección Tecnología (Nodos de red)
- **Acción requerida**: Si se requieren imágenes reales de la UI de SynapLeads, reemplazar el diseño basado en SVG actual por exportaciones definitivas en PNG o animaciones Lottie más precisas.

### 2. URL de Botones de Acción
- **Componente**: `Navbar`, `Hero`, `Ecosystem`, `Technology`, `Footer`, `Trust`
- **Archivo**: `components/*.tsx` (Varios)
- **Ubicación**: Enlaces `href` que apuntan temporalmente a `'#'`.
- **Acción requerida**: Reemplazar `'#'` con las rutas finales hacia el portal de clientes, servicios específicos, u OpenAPI de n8n.

### 3. Logotipo de la Empresa
- **Componente**: `Navbar`, `Footer`
- **Archivo**: `components/Navbar.tsx`, `components/Footer.tsx`
- **Ubicación**: Placeholder de texto `<span className="font-bold">DigiSenda AI</span>`
- **Acción requerida**: Intercambiar por el logo corporativo o un componente `img` / `next/image` usando el SVG final.

### 4. Datos de Contacto en Footer
- **Componente**: `Footer`
- **Archivo**: `components/Footer.tsx`
- **Ubicación**: Links sociales y correos de ejemplo.
- **Acción requerida**: Llenar con perfiles verdaderos y correso válidos del negocio en USA.
