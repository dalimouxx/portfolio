/* Maquettes SVG dessinées en code pour les covers de projets —
   précises, cohérentes avec la palette, aucune image externe. */

export type CoverColor = 'cobalt' | 'volt' | 'pop' | 'azur' | 'cherry';
export type CoverKind = 'dashboard' | 'mobile' | 'social' | 'analytics' | 'shop';

const PALETTE: Record<CoverColor, { bg: string; fg: string; soft: string }> = {
  cobalt: { bg: '#0148c6', fg: '#e1dedc', soft: '#3d6fd6' },
  volt: { bg: '#ffe600', fg: '#191919', soft: '#e6cf00' },
  pop: { bg: '#ff0098', fg: '#191919', soft: '#ff4db4' },
  azur: { bg: '#4dabf7', fg: '#191919', soft: '#7ec2f9' },
  cherry: { bg: '#f71f1a', fg: '#e1dedc', soft: '#f95c58' },
};

const INK = '#191919';
const CREAM = '#e1dedc';

function Dots({ x, y, color }: { x: number; y: number; color: string }) {
  const rows = [0, 1, 2];
  const cols = [0, 1, 2, 3];
  return (
    <g fill={color}>
      {rows.map((r) =>
        cols.map((c) => <circle key={`${r}-${c}`} cx={x + c * 16} cy={y + r * 16} r="3.4" />),
      )}
    </g>
  );
}

function Squiggle({ x, y, color }: { x: number; y: number; color: string }) {
  return (
    <path
      d={`M${x} ${y} q 10 -18 20 0 t 20 0 t 20 0 t 20 0`}
      fill="none"
      stroke={color}
      strokeWidth="5"
      strokeLinecap="round"
    />
  );
}

function BrowserChrome() {
  return (
    <>
      <rect x="70" y="70" width="660" height="460" rx="18" fill={CREAM} />
      <rect x="70" y="70" width="660" height="52" rx="18" fill={INK} />
      <rect x="70" y="104" width="660" height="18" fill={INK} />
      <circle cx="102" cy="96" r="7" fill="#f71f1a" />
      <circle cx="126" cy="96" r="7" fill="#ffe600" />
      <circle cx="150" cy="96" r="7" fill="#00c853" />
      <rect x="180" y="86" width="300" height="20" rx="10" fill="#ffffff" opacity="0.18" />
    </>
  );
}

function PhoneFrame({ x, y }: { x: number; y: number }) {
  return (
    <>
      <rect x={x} y={y} width="240" height="480" rx="34" fill={INK} />
      <rect x={x + 12} y={y + 12} width="216" height="456" rx="24" fill={CREAM} />
      <rect x={x + 88} y={y + 24} width="64" height="12" rx="6" fill={INK} />
    </>
  );
}

function AnalyticsArt({ p }: { p: (typeof PALETTE)[CoverColor] }) {
  return (
    <>
      {BrowserChrome()}
      <rect x="98" y="150" width="130" height="352" rx="12" fill={INK} />
      <rect x="116" y="172" width="70" height="12" rx="6" fill={p.bg} />
      <rect x="116" y="206" width="94" height="10" rx="5" fill={CREAM} opacity="0.5" />
      <rect x="116" y="232" width="80" height="10" rx="5" fill={CREAM} opacity="0.5" />
      <rect x="116" y="258" width="94" height="10" rx="5" fill={CREAM} opacity="0.5" />
      <rect x="116" y="284" width="66" height="10" rx="5" fill={CREAM} opacity="0.5" />
      {/* Stat pills */}
      <rect x="254" y="150" width="140" height="70" rx="12" fill={p.bg} />
      <rect x="270" y="168" width="60" height="10" rx="5" fill={p.fg} opacity="0.8" />
      <rect x="270" y="188" width="90" height="16" rx="8" fill={p.fg} />
      <rect x="410" y="150" width="140" height="70" rx="12" fill={INK} />
      <rect x="426" y="168" width="60" height="10" rx="5" fill={CREAM} opacity="0.6" />
      <rect x="426" y="188" width="90" height="16" rx="8" fill={p.bg} />
      <rect x="566" y="150" width="140" height="70" rx="12" fill={p.soft} />
      <rect x="582" y="168" width="60" height="10" rx="5" fill={INK} opacity="0.6" />
      <rect x="582" y="188" width="90" height="16" rx="8" fill={INK} />
      {/* Courbe */}
      <rect x="254" y="244" width="452" height="258" rx="12" fill="#ffffff" />
      <polyline
        points="280,450 340,400 400,420 460,340 520,360 580,290 660,310 690,268"
        fill="none"
        stroke={p.bg}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="460" cy="340" r="10" fill={INK} />
      <circle cx="580" cy="290" r="10" fill={INK} />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="280" y1={300 + i * 50} x2="690" y2={300 + i * 50} stroke={INK} strokeOpacity="0.08" strokeWidth="2" />
      ))}
    </>
  );
}

function DashboardArt({ p }: { p: (typeof PALETTE)[CoverColor] }) {
  return (
    <>
      {BrowserChrome()}
      <rect x="98" y="150" width="604" height="16" rx="8" fill={INK} opacity="0.12" />
      {/* 4 cartes */}
      <rect x="98" y="196" width="288" height="140" rx="14" fill={p.bg} />
      <circle cx="150" cy="266" r="34" fill="none" stroke={p.fg} strokeWidth="10" strokeDasharray="160 220" strokeLinecap="round" />
      <rect x="210" y="236" width="140" height="14" rx="7" fill={p.fg} />
      <rect x="210" y="266" width="100" height="12" rx="6" fill={p.fg} opacity="0.7" />
      <rect x="210" y="294" width="120" height="12" rx="6" fill={p.fg} opacity="0.7" />
      <rect x="414" y="196" width="288" height="140" rx="14" fill={INK} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={440 + i * 42} y={316 - 20 - i * 12} width="24" height={20 + i * 12} rx="6" fill={p.bg} />
      ))}
      <rect x="98" y="362" width="604" height="140" rx="14" fill="#ffffff" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx="140" cy={410 + i * 34} r="13" fill={i === 1 ? p.bg : INK} opacity={i === 1 ? 1 : 0.15} />
          <rect x="168" y={402 + i * 34} width={300 - i * 40} height="12" rx="6" fill={INK} opacity="0.15" />
          <rect x="560" y={402 + i * 34} width="90" height="12" rx="6" fill={p.bg} opacity="0.8" />
        </g>
      ))}
    </>
  );
}

function MobileArt({ p }: { p: (typeof PALETTE)[CoverColor] }) {
  return (
    <>
      {PhoneFrame({ x: 280, y: 60 })}
      {/* contenu app */}
      <rect x="304" y="118" width="100" height="14" rx="7" fill={INK} />
      <rect x="304" y="144" width="192" height="90" rx="14" fill={p.bg} />
      <rect x="320" y="162" width="90" height="12" rx="6" fill={p.fg} />
      <rect x="320" y="186" width="140" height="10" rx="5" fill={p.fg} opacity="0.7" />
      {[0, 1].map((i) => (
        <g key={i}>
          <rect x="304" y={252 + i * 78} width="192" height="64" rx="14" fill="#ffffff" />
          <circle cx="334" cy={284 + i * 78} r="16" fill={i === 0 ? p.bg : INK} opacity={i === 0 ? 1 : 0.15} />
          <rect x="360" y={272 + i * 78} width="100" height="10" rx="5" fill={INK} opacity="0.2" />
          <rect x="360" y={290 + i * 78} width="70" height="8" rx="4" fill={INK} opacity="0.12" />
        </g>
      ))}
      {/* tab bar */}
      <rect x="304" y="452" width="192" height="52" rx="16" fill={INK} />
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={336 + i * 44} cy="478" r="9" fill={i === 0 ? p.bg : CREAM} opacity={i === 0 ? 1 : 0.5} />
      ))}
      {/* notification flottante */}
      <rect x="470" y="180" width="220" height="86" rx="16" fill={INK} />
      <circle cx="504" cy="223" r="18" fill={p.bg} />
      <rect x="534" y="204" width="120" height="12" rx="6" fill={CREAM} />
      <rect x="534" y="228" width="86" height="10" rx="5" fill={CREAM} opacity="0.6" />
    </>
  );
}

function SocialArt({ p }: { p: (typeof PALETTE)[CoverColor] }) {
  return (
    <>
      {BrowserChrome()}
      {[0, 1].map((i) => (
        <g key={i}>
          <rect x="98" y={150 + i * 190} width="604" height="166" rx="14" fill="#ffffff" />
          <circle cx="144" cy={196 + i * 190} r="24" fill={i === 0 ? p.bg : INK} />
          <rect x="184" y={180 + i * 190} width="150" height="14" rx="7" fill={INK} opacity="0.7" />
          <rect x="184" y={204 + i * 190} width="90" height="10" rx="5" fill={INK} opacity="0.3" />
          <rect x="122" y={244 + i * 190} width="420" height="12" rx="6" fill={INK} opacity="0.15" />
          <rect x="122" y={266 + i * 190} width="340" height="12" rx="6" fill={INK} opacity="0.15" />
          {/* cœur */}
          <path
            d={`M620 ${268 + i * 190} c -10 -14 -32 -8 -32 8 c 0 12 18 22 32 30 c 14 -8 32 -18 32 -30 c 0 -16 -22 -22 -32 -8 z`}
            fill={i === 0 ? '#f71f1a' : 'none'}
            stroke={i === 0 ? 'none' : INK}
            strokeWidth="4"
          />
        </g>
      ))}
      {/* bulle de commentaire */}
      <rect x="500" y="120" width="200" height="64" rx="18" fill={p.bg} />
      <path d="M540 184 l -6 22 l 26 -22 z" fill={p.bg} />
      <rect x="524" y="142" width="120" height="10" rx="5" fill={p.fg} />
      <rect x="524" y="160" width="80" height="10" rx="5" fill={p.fg} opacity="0.7" />
    </>
  );
}

function ShopArt({ p }: { p: (typeof PALETTE)[CoverColor] }) {
  return (
    <>
      {BrowserChrome()}
      <rect x="98" y="150" width="604" height="58" rx="12" fill={INK} />
      <rect x="122" y="172" width="120" height="14" rx="7" fill={p.bg} />
      <rect x="470" y="170" width="180" height="18" rx="9" fill={CREAM} opacity="0.25" />
      <circle cx="672" cy="179" r="14" fill={p.bg} />
      {/* grille produits */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={98 + i * 208} y="232" width="188" height="270" rx="14" fill="#ffffff" />
          <rect x={114 + i * 208} y="248" width="156" height="130" rx="10" fill={i === 1 ? p.bg : INK} opacity={i === 1 ? 1 : 0.12} />
          <rect x={114 + i * 208} y="396" width="120" height="12" rx="6" fill={INK} opacity="0.6" />
          <rect x={114 + i * 208} y="420" width="80" height="10" rx="5" fill={INK} opacity="0.3" />
          <rect x={114 + i * 208} y="452" width="72" height="26" rx="13" fill={i === 1 ? INK : p.bg} />
          <rect x={204 + i * 208} y="456" width="50" height="18" rx="9" fill={INK} opacity={i === 1 ? 0.15 : 0.7} />
        </g>
      ))}
    </>
  );
}

const ART = { analytics: AnalyticsArt, dashboard: DashboardArt, mobile: MobileArt, social: SocialArt, shop: ShopArt };

export default function ProjectCover({ color, kind, title }: { color: CoverColor; kind: CoverKind; title: string }) {
  const p = PALETTE[color];
  const Art = ART[kind];
  return (
    <svg viewBox="0 0 800 600" role="img" aria-label={`Aperçu du projet ${title}`} className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="800" height="600" fill={p.bg} />
      <Dots x={36} y={36} color={p.fg} />
      <Dots x={688} y={520} color={p.fg} />
      <Squiggle x={620} y={60} color={p.fg} />
      <Squiggle x={60} y={560} color={p.fg} />
      <path d="M760 480 l0 40 M740 500 l40 0" stroke={p.fg} strokeWidth="6" strokeLinecap="round" />
      <path d="M40 200 l0 40 M20 220 l40 0" stroke={p.fg} strokeWidth="6" strokeLinecap="round" />
      <g className="cover-art" style={{ transition: 'transform 0.5s cubic-bezier(0.25,0,0,1)' }}>
        <Art p={p} />
      </g>
    </svg>
  );
}
