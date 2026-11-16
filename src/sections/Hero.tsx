import Marquee from '@/components/Marquee';
import { BlobOne, BlobTwo, RotatingBadge, Sparkle } from '@/components/Blobs';
import { identity, marqueeWords } from '@/data/portfolio';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-cobalt text-cream on-dark">
      {/* Blobs décoratifs en parallaxe */}
      <BlobOne className="float-soft absolute -right-24 top-16 w-[340px] text-azur opacity-80 md:w-[480px]" data-parallax="18" />
      <BlobTwo className="absolute -left-28 bottom-40 w-[300px] text-[#013a9e] md:w-[420px]" data-parallax="-14" />
      <Sparkle className="float-soft absolute left-[38%] top-[15%] w-10 text-volt md:w-14" data-parallax="30" />
      <Sparkle className="absolute bottom-[30%] right-[16%] w-7 text-pop" data-parallax="-24" />

      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-5 pb-16 pt-32 md:px-10">
        <p data-hero="chip" className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border-2 border-cream/40 px-4 py-2 text-sm font-bold uppercase tracking-widest">
          <span className="h-2.5 w-2.5 rounded-full bg-volt" aria-hidden="true" />
          {identity.availability}
        </p>

        {/* Typographie géante éclatée gauche / droite */}
        <h1 className="display-xl text-[clamp(2.3rem,10vw,10rem)]">
          <span data-hero="line" className="block text-left">
            Développeur
          </span>
          <span data-hero="line" className="block text-right text-volt">
            Web <span className="text-cream">&</span> Mobile
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
          <p data-hero="tagline" className="max-w-[52ch] text-lg leading-relaxed text-cream/90 md:text-xl">
            {identity.tagline} Basé en {identity.location}.
          </p>
          <div data-hero="cta" className="flex flex-wrap items-center gap-4">
            <a
              href="#projets"
              className="btn-slide rounded-full bg-volt px-8 py-4 text-base font-bold uppercase tracking-wide text-ink"
            >
              <span className="btn-text">Voir mes projets</span>
              <span className="btn-text" aria-hidden="true">C'est par ici ↓</span>
            </a>
            <a
              href="#contact"
              className="btn-slide rounded-full border-2 border-cream px-8 py-4 text-base font-bold uppercase tracking-wide text-cream"
            >
              <span className="btn-text">Me contacter</span>
              <span className="btn-text" aria-hidden="true">Écris-moi →</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bande marquee en bas du hero */}
      <div className="relative z-10 border-t-4 border-ink bg-volt py-4 text-ink">
        <RotatingBadge
          text="CEO DESERTCOM • Full-Stack • Web & Mobile •"
          className="absolute -top-14 right-[5%] z-20 h-24 w-24 md:-top-16 md:h-32 md:w-32"
        />
        <Marquee duration={28} ariaLabel="Domaines d'expertise">
          {marqueeWords.map((w) => (
            <span key={w} className="mx-6 flex items-center gap-6 font-display text-xl font-black uppercase tracking-tight md:text-2xl">
              {w}
              <Sparkle className="w-5 text-ink" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
