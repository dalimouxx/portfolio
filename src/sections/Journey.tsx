import { journey } from '@/data/portfolio';
import { BlobOne } from '@/components/Blobs';

const ACCENTS = ['border-volt', 'border-pop', 'border-azur', 'border-cobalt'];
const BADGES = ['bg-volt text-ink', 'bg-pop text-ink', 'bg-azur text-ink', 'bg-cobalt text-cream'];

export default function Journey() {
  return (
    <section id="parcours" className="relative overflow-hidden bg-ink py-24 text-cream on-dark md:py-36">
      <BlobOne className="absolute -left-32 top-10 w-[380px] text-cobalt opacity-40" data-parallax="16" />
      <BlobOne className="absolute -right-28 bottom-10 w-[320px] text-pop opacity-25" data-parallax="-12" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <h2 data-reveal className="display-xl mb-16 text-[clamp(2.8rem,9vw,8rem)] md:mb-24">
          Mon <span className="hl hl-azur">parcours</span>
        </h2>

        <ol className="relative space-y-14 md:space-y-0">
          {journey.map((j, i) => (
            <li
              key={j.title}
              data-reveal
              className={`relative border-l-4 pl-8 md:grid md:grid-cols-12 md:gap-8 md:border-l-0 md:pl-0 md:py-10 ${ACCENTS[i % ACCENTS.length]}`}
            >
              {/* Ligne de séparation desktop */}
              <div className="absolute inset-x-0 top-0 hidden border-t-2 border-cream/15 md:block" aria-hidden="true" />

              <div className={`md:col-span-4 ${i % 2 === 1 ? 'md:order-3 md:text-right' : ''}`}>
                <span className={`inline-block rounded-full px-4 py-1.5 font-display text-sm font-black uppercase tracking-wide ${BADGES[i % BADGES.length]}`}>
                  {j.period}
                </span>
              </div>

              <div className={`mt-4 md:col-span-7 md:mt-0 ${i % 2 === 1 ? 'md:order-1 md:col-start-1 md:text-right' : 'md:col-start-6'}`}>
                <h3 className="display-md mb-1 text-3xl text-cream md:text-4xl">{j.title}</h3>
                <p className="mb-3 font-display text-base font-bold uppercase tracking-widest text-volt">{j.place}</p>
                <p className={`max-w-[52ch] text-lg leading-relaxed text-cream/80 ${i % 2 === 1 ? 'md:ml-auto' : ''}`}>{j.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
