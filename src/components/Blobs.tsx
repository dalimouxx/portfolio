/* Formes organiques SVG utilisées comme décors flottants (parallaxe au scroll). */

export function BlobOne({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" focusable="false">
      <path
        d="M45.7,-58.9C58.9,-48.9,69,-34.4,73.6,-18.1C78.2,-1.8,77.3,16.3,70.1,31.2C62.9,46.1,49.4,57.8,34.1,64.5C18.8,71.2,1.7,72.9,-14.8,69C-31.3,65.1,-47.2,55.6,-58.4,42.1C-69.6,28.6,-76.1,11.1,-74.6,-5.6C-73.1,-22.3,-63.6,-38.2,-50.5,-48.3C-37.4,-58.4,-20.7,-62.7,-2.6,-60C15.5,-57.3,32.5,-68.9,45.7,-58.9Z"
        transform="translate(100 100)"
        fill="currentColor"
      />
    </svg>
  );
}

export function BlobTwo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" focusable="false">
      <path
        d="M52.4,-66.3C66.9,-56.3,77,-39.6,79.6,-22.1C82.2,-4.6,77.3,12.7,69.1,27.3C60.9,41.9,49.4,53.8,35.6,60.9C21.8,68,5.7,70.3,-10.5,68.6C-26.7,66.9,-43,61.2,-55.6,50.2C-68.2,39.2,-77.1,22.9,-78.3,5.9C-79.5,-11.1,-73,-28.7,-62.1,-41.3C-51.2,-53.9,-35.9,-61.5,-19.8,-65.5C-3.7,-69.5,13.2,-69.9,28.6,-66.5C44,-63.1,37.9,-76.3,52.4,-66.3Z"
        transform="translate(100 100)"
        fill="currentColor"
      />
    </svg>
  );
}

export function Sparkle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
      <path
        d="M50 0 L58 42 L100 50 L58 58 L50 100 L42 58 L0 50 L42 42 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Badge circulaire tournant avec texte sur cercle. */
export function RotatingBadge({ text, className = '' }: { text: string; className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <svg viewBox="0 0 120 120" className="spin-slow h-full w-full">
        <defs>
          <path id="badge-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <circle cx="60" cy="60" r="58" fill="var(--c-volt)" />
        <circle cx="60" cy="60" r="26" fill="var(--c-ink)" />
        <text fill="var(--c-ink)" fontSize="11.5" fontWeight="700" letterSpacing="2.5" style={{ textTransform: 'uppercase' }}>
          <textPath href="#badge-circle">{text}</textPath>
        </text>
        <path d="M60 48 L64 60 L60 72 L56 60 Z" fill="var(--c-volt)" />
      </svg>
    </div>
  );
}
