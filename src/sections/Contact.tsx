import Marquee from '@/components/Marquee';
import { BlobTwo, Sparkle } from '@/components/Blobs';
import { identity, nav, socials } from '@/data/portfolio';

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-cobalt text-cream on-dark">
      <BlobTwo className="absolute -left-24 top-24 w-[320px] text-[#013a9e]" data-parallax="14" />
      <Sparkle className="float-soft absolute right-[10%] top-[18%] w-12 text-volt" data-parallax="-22" />
      <Sparkle className="absolute bottom-[36%] left-[8%] w-8 text-pop" data-parallax="20" />

      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-5 py-28 md:px-10">
        <p data-reveal className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-volt">
          Un projet en tête ?
        </p>
        <h2 data-reveal className="display-xl mb-10 text-[clamp(2.3rem,10.5vw,10rem)]">
          Travaillons
          <br />
          <span className="hl hl-volt">ensemble</span>
        </h2>

        <div data-reveal className="mb-14">
          <a
            href={`mailto:${identity.email}`}
            className="link-underline inline-block max-w-full break-all font-display text-2xl font-black lowercase tracking-tight text-cream md:text-5xl"
          >
            {identity.email}
          </a>
        </div>

        <div data-reveal className="flex flex-wrap gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-slide rounded-full border-2 border-cream px-6 py-3 text-[15px] font-bold uppercase tracking-wide text-cream"
            >
              <span className="btn-text">{s.label}</span>
              <span className="btn-text" aria-hidden="true">{s.label} ↗</span>
            </a>
          ))}
        </div>
      </div>

      {/* Bande marquee */}
      <div className="relative z-10 border-y-4 border-ink bg-pop py-4 text-ink">
        <Marquee duration={32} ariaLabel="Contact">
          {['Disponible', 'Freelance', 'Remote friendly', 'Réponse rapide', 'Devis gratuit'].map((w) => (
            <span key={w} className="mx-6 flex items-center gap-6 font-display text-xl font-black uppercase tracking-tight md:text-2xl">
              {w}
              <span className="h-3 w-3 rounded-full bg-ink" aria-hidden="true" />
            </span>
          ))}
        </Marquee>
      </div>

      {/* Footer */}
      <footer className="bg-ink text-cream">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            <p className="font-display text-lg font-black uppercase">
              {identity.firstName} {identity.lastName}
            </p>
            <p className="text-sm text-cream/60">© {year} — Tous droits réservés</p>
          </div>
          <nav className="flex flex-wrap items-center gap-6" aria-label="Pied de page">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="link-underline py-2 text-sm font-bold uppercase tracking-wide text-cream/80">
                {n.label}
              </a>
            ))}
            <a href="#top" className="btn-slide rounded-full bg-volt px-5 py-2.5 text-sm font-bold uppercase text-ink">
              <span className="btn-text">Haut de page</span>
              <span className="btn-text" aria-hidden="true">↑ Go</span>
            </a>
          </nav>
        </div>
      </footer>
    </section>
  );
}
