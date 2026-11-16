import type { ReactNode } from 'react';

type MarqueeProps = {
  children: ReactNode;
  duration?: number; // secondes
  reverse?: boolean;
  className?: string;
  ariaLabel?: string;
};

/**
 * Bande défilante infinie : contenu dupliqué, pause au survol/focus,
 * masques dégradés sur les bords, désactivée en reduced-motion (CSS).
 */
export default function Marquee({ children, duration = 40, reverse = false, className = '', ariaLabel }: MarqueeProps) {
  return (
    <div className={`marquee ${className}`} role="marquee" aria-label={ariaLabel}>
      <div
        className="marquee-track"
        style={{
          ['--marquee-duration' as string]: `${duration}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
