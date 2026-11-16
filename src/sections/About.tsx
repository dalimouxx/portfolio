import Marquee from '@/components/Marquee';
import { Sparkle } from '@/components/Blobs';
import { identity, services, skills } from '@/data/portfolio';

export default function About() {
  const initials = `${identity.firstName[0]}${identity.lastName[0]}`;

  return (
    <section id="apropos" className="relative overflow-hidden bg-azur pt-24 text-ink md:pt-36">
      <Sparkle className="absolute right-[6%] top-24 w-12 text-volt" data-parallax="-20" />

      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-14 md:grid-cols-12 md:gap-12">
          {/* Portrait-sticker (remplace par ta photo si tu veux) */}
          <div data-reveal className="relative md:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border-4 border-ink bg-ink">
              <div className="grid aspect-[4/5] place-items-center">
                <span className="display-xl text-[9rem] text-azur md:text-[12rem]" aria-hidden="true">
                  {initials}
                </span>
                <span className="sr-only">Portrait de {identity.firstName} {identity.lastName}</span>
              </div>
              <div className="flex items-center justify-between border-t-4 border-azur px-5 py-4">
                <span className="font-display text-lg font-black uppercase text-cream">
                  {identity.firstName} {identity.lastName}
                </span>
                <Sparkle className="w-6 text-volt" />
              </div>
            </div>
            {/* Sticker localisation */}
            <div className="absolute -top-5 right-4 flex rotate-6 items-center gap-2 rounded-xl border-4 border-ink bg-volt px-5 py-3 font-display text-base font-black uppercase md:-right-8">
              <svg width="14" height="18" viewBox="0 0 14 18" fill="none" aria-hidden="true">
                <path d="M7 1a6 6 0 0 1 6 6c0 4.5-6 10-6 10S1 11.5 1 7a6 6 0 0 1 6-6Z" stroke="currentColor" strokeWidth="2" />
                <circle cx="7" cy="7" r="2" fill="currentColor" />
              </svg>
              {identity.location}
            </div>
          </div>

          {/* Bio + services */}
          <div className="md:col-span-7">
            <h2 data-reveal className="display-xl mb-8 text-[clamp(2.6rem,7vw,6rem)]">
              À <span className="hl hl-volt">propos</span>
            </h2>
            <div data-reveal className="mb-12 max-w-[58ch] space-y-5 text-lg leading-relaxed md:text-xl">
              <p>
                Salut ! Moi c'est <strong>Mohamed Ali</strong>, développeur full-stack et{' '}
                <strong>CEO de DESERTCOM</strong>. Je transforme des idées en{' '}
                <span className="hl hl-volt">produits concrets</span> : plateformes SaaS,
                e-commerce et outils métier.
              </p>
              <p>
                Full-stack JavaScript (Next.js, NestJS) et PHP (Symfony, Laravel), avec une
                solide expérience de chef de projet. Mon approche : du code propre, des
                performances au top et des interfaces qui ont du{' '}
                <span className="hl hl-cream">caractère</span>.
              </p>
            </div>

            <ul className="space-y-6">
              {services.map((s) => (
                <li
                  key={s.title}
                  data-reveal
                  className="flex gap-5 border-t-4 border-ink pt-6"
                >
                  <svg className="mt-1 h-7 w-7 shrink-0" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <path d="M4 14h20M16 6l8 8-8 8" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <h3 className="display-md mb-1 text-2xl">{s.title}</h3>
                    <p className="max-w-[52ch] text-ink/75">{s.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Compétences en double marquee */}
      <div className="mt-20 -rotate-1 md:mt-28" aria-label="Compétences techniques">
        <div className="border-y-4 border-ink bg-ink py-4 text-cream">
          <Marquee duration={45} ariaLabel="Compétences principales">
            {skills.map((s) => (
              <span key={s} className="mx-5 flex items-center gap-5 font-display text-2xl font-black uppercase tracking-tight md:text-3xl">
                {s}
                <span className="h-3 w-3 rounded-full bg-volt" aria-hidden="true" />
              </span>
            ))}
          </Marquee>
        </div>
        <div className="border-b-4 border-ink bg-volt py-4 text-ink">
          <Marquee duration={52} reverse ariaLabel="Autres compétences">
            {[...skills].reverse().map((s) => (
              <span key={s} className="mx-5 flex items-center gap-5 font-display text-2xl font-black uppercase tracking-tight md:text-3xl">
                {s}
                <span className="h-3 w-3 rounded-full bg-pop" aria-hidden="true" />
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
