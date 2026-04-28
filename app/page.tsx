import Hero from '../components/Hero';
import Ecosystem from '../components/Ecosystem';
import SuccessStories from '../components/SuccessStories';
import Process from '../components/Process';
import Trust from '../components/Trust';

/**
 * Página principal — alternancia editorial Fase 2:
 * - Hero claro warm (Fase 2 v3)
 * - Bandas legacy envueltas en bg-deep-space para preservar contraste interno
 *   hasta que cada sección sea rediseñada (Fase 3-4). Esto crea la alternancia
 *   claro/oscuro anunciada en el plan §F (Ecosystem editorial dark, etc.).
 */
export default function Home() {
  return (
    <>
      <Hero />

      {/* Banda oscura — cuatro secciones legacy aún con texto white/silver. */}
      <div className="bg-deep-space relative">
        {/* Borde superior gold quirúrgico para hilvanar visualmente con el hero */}
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, transparent, rgba(201,169,97,0.35) 50%, transparent)',
          }}
          aria-hidden="true"
        />
        <Ecosystem />
        <SuccessStories />
        <Process />
        <Trust />
      </div>
    </>
  );
}
