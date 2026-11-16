import { useEffect, useRef, useState } from 'react';
import { identity, nav } from '@/data/portfolio';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  /* Cache la navbar au scroll vers le bas, la réaffiche vers le haut */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y > lastY.current && y > 140 && !open) setHidden(true);
      else setHidden(false);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  /* Fermeture du menu mobile avec Échap */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const initials = `${identity.firstName[0]}${identity.lastName[0]}`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out ${
          hidden ? '-translate-y-[110%]' : 'translate-y-0'
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-4 transition-colors duration-300 md:px-10 ${
            scrolled ? 'bg-ink text-cream' : 'bg-transparent text-cream'
          }`}
        >
          <a
            href="#top"
            className="flex min-h-[44px] items-center gap-2 font-display text-xl font-black uppercase tracking-tight"
            aria-label="Retour en haut"
          >
            <span className="grid h-9 w-9 place-items-center bg-volt text-base text-ink" style={{ borderRadius: '6px' }}>
              {initials}
            </span>
            <span className="hidden sm:inline">{identity.firstName} {identity.lastName}</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="link-underline py-2 text-[15px] font-medium uppercase tracking-wide">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="btn-slide hidden rounded-full bg-volt px-6 py-2.5 text-[15px] font-bold uppercase tracking-wide text-ink md:inline-flex"
            >
              <span className="btn-text">Discutons</span>
              <span className="btn-text" aria-hidden="true">C'est parti →</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              className="grid h-11 w-11 place-items-center rounded-full border-2 border-current md:hidden"
              aria-label="Ouvrir le menu"
            >
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M1 1.5h18M1 7h18M1 12.5h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile plein écran */}
      {open && (
        <div id="menu-mobile" role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-[60] flex flex-col bg-cobalt text-cream on-dark">
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-display text-xl font-black uppercase">{initials}.</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-full border-2 border-cream"
              aria-label="Fermer le menu"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M1 1l14 14M15 1L1 15" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-2 px-6" aria-label="Navigation mobile">
            {nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="display-md py-3 text-5xl text-cream transition-colors active:text-volt"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                <span className="mr-3 align-top font-sans text-sm font-bold text-volt">0{i + 1}</span>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="px-6 pb-10">
            <a href={`mailto:${identity.email}`} className="link-underline text-lg font-medium">
              {identity.email}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
