import Hero from '../components/Hero';
import Ecosystem from '../components/Ecosystem';
import SuccessStories from '../components/SuccessStories';
import Process from '../components/Process';
import Trust from '../components/Trust';

/**
 * Página principal — alternancia editorial v3:
 *
 * Hero          bg-ivory    (claro warm)
 * Ecosystem     bg-ivory    (claro warm, editorial-cards)
 * SuccessStories bg-sand    (claro arena)
 * Process       bg-bone     (claro hueso)
 * Trust (cards) bg-ivory    (claro warm)
 * Trust (CTA)   bg-ink      (oscuro editorial — contraste intencional)
 * Footer        bg-ink      (oscuro editorial)
 *
 * Cada sección gestiona su propio background.
 * La banda bg-deep-space temporal de Fase 2 ya no es necesaria.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Ecosystem />
      <SuccessStories />
      <Process />
      <Trust />
    </>
  );
}
