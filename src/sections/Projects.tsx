import ProjectCover from '@/components/ProjectCover';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <section id="projets" className="relative bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        {/* En-tête de section */}
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <h2 data-reveal className="display-xl text-[clamp(2.8rem,9vw,8rem)] text-ink">
            Mes <span className="hl hl-pop">projets</span>
          </h2>
          <p data-reveal className="max-w-[42ch] text-lg leading-relaxed text-ink/80 md:pb-4 md:text-right">
            Une sélection de plateformes web et d'applications que j'ai conçues et développées —{' '}
            <strong className="text-ink">clique pour les visiter en direct</strong>.
          </p>
        </div>

        {/* Liste éditoriale alternée */}
        <div className="flex flex-col gap-20 md:gap-32">
          {projects.map((p, i) => {
            const reversed = i % 2 === 1;
            return (
              <article
                key={p.title}
                data-reveal
                className="group grid items-center gap-8 md:grid-cols-12 md:gap-12"
              >
                {/* Cover cliquable */}
                <a
                  href={p.liveUrl ?? p.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={p.liveUrl ? `Visiter ${p.title} en direct` : `Voir le code de ${p.title} sur GitHub`}
                  className={`relative block overflow-hidden rounded-2xl border-4 border-ink md:col-span-7 ${
                    reversed ? 'md:order-2' : ''
                  }`}
                >
                  <div className="aspect-[4/3] transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                    <ProjectCover color={p.color} kind={p.cover} title={p.title} />
                  </div>
                  <span className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-ink text-cream transition-transform duration-300 group-hover:rotate-45">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 15L15 3M6 3h9v9" />
                    </svg>
                  </span>
                </a>

                {/* Infos */}
                <div className={`md:col-span-5 ${reversed ? 'md:order-1' : ''}`}>
                  <p className="mb-3 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-ink/60">
                    <span className="hl hl-azur">{p.kind}</span>
                    <span>{p.year}</span>
                  </p>
                  <h3 className="display-md mb-4 text-4xl text-ink md:text-5xl">{p.title}</h3>
                  <p className="mb-6 max-w-[46ch] text-lg leading-relaxed text-ink/80">{p.description}</p>
                  <ul className="mb-8 flex flex-wrap gap-2" aria-label="Technologies utilisées">
                    {p.stack.map((s) => (
                      <li key={s} className="rounded-full border-2 border-ink px-3.5 py-1.5 text-sm font-bold uppercase tracking-wide">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap items-center gap-4">
                    {p.liveUrl ? (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-slide rounded-full bg-ink px-7 py-3.5 text-[15px] font-bold uppercase tracking-wide text-cream"
                      >
                        <span className="btn-text">Visiter le site</span>
                        <span className="btn-text" aria-hidden="true">Ouvrir ↗</span>
                      </a>
                    ) : (
                      p.repoUrl && (
                        <a
                          href={p.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-slide rounded-full bg-ink px-7 py-3.5 text-[15px] font-bold uppercase tracking-wide text-cream"
                        >
                          <span className="btn-text">Voir le code</span>
                          <span className="btn-text" aria-hidden="true">GitHub ↗</span>
                        </a>
                      )
                    )}
                    {p.liveUrl && p.repoUrl && (
                      <a
                        href={p.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline py-3 text-[15px] font-bold uppercase tracking-wide text-ink"
                      >
                        Voir le code ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
