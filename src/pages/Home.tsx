import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Navbar from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import Projects from '@/sections/Projects';
import About from '@/sections/About';
import Journey from '@/sections/Journey';
import Contact from '@/sections/Contact';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* Mouvement réduit : tout le contenu reste visible, aucune animation */
    if (reduced) return;

    /* Smooth scroll Lenis synchronisé avec ScrollTrigger */
    const lenis = new Lenis({ autoRaf: true, lerp: 0.1 });
    lenis.on('scroll', ScrollTrigger.update);

    /* Ancres internes via Lenis */
    const onAnchorClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -70, duration: 1.2 });
    };
    document.addEventListener('click', onAnchorClick);

    const ctx = gsap.context(() => {
      /* Intro du hero : séquence étagée */
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from('[data-hero="chip"]', { y: 24, opacity: 0, duration: 0.6 }, 0.15)
        .from('[data-hero="line"]', { yPercent: 60, opacity: 0, duration: 0.9, stagger: 0.12 }, 0.25)
        .from('[data-hero="tagline"]', { y: 30, opacity: 0, duration: 0.7 }, 0.7)
        .from('[data-hero="cta"]', { y: 30, opacity: 0, duration: 0.7 }, 0.85);

      /* Révélations au scroll */
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          y: 44,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      });

      /* Parallaxe des éléments décoratifs */
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        const speed = Number(el.dataset.parallax) || 15;
        gsap.to(el, {
          yPercent: speed,
          ease: 'none',
          scrollTrigger: { trigger: el.closest('section') ?? el, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
        });
      });
    });

    return () => {
      ctx.revert();
      lenis.destroy();
      document.removeEventListener('click', onAnchorClick);
    };
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Journey />
      <Contact />
    </main>
  );
}
