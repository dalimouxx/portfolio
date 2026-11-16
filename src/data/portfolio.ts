/* ============================================================
   ✏️  TON CONTENU EST ICI — tout le portfolio se modifie
   dans ce seul fichier : nom, projets, liens, compétences…
   ============================================================ */

export const identity = {
  firstName: 'Mohamed Ali',
  lastName: 'Moussa',
  role: 'Développeur Full-Stack & CEO',
  tagline:
    'CEO de DESERTCOM, je conçois et développe des plateformes web et des applications rapides, élégantes et utiles — du pixel au déploiement.',
  location: 'Tunisie',
  availability: 'Ouvert aux nouveaux projets',
  email: 'dalimoussa00@gmail.com',
};

export const nav = [
  { label: 'Projets', href: '#projets' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Parcours', href: '#parcours' },
  { label: 'Contact', href: '#contact' },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/dalimouxx' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-ali-moussa-75b98438b/' },
];

export type Project = {
  title: string;
  year: string;
  kind: string; // ex. "Plateforme web", "Application mobile"
  description: string;
  stack: string[];
  color: 'cobalt' | 'volt' | 'pop' | 'azur' | 'cherry'; // couleur de la cover
  cover: 'dashboard' | 'mobile' | 'social' | 'analytics' | 'shop'; // style de maquette
  liveUrl?: string; // ← lien de la démo en ligne (optionnel)
  repoUrl?: string; // ← lien du code (optionnel)
};

export const projects: Project[] = [
  {
    title: 'Tunicommerce',
    year: '2026',
    kind: 'Plateforme e-commerce',
    description:
      'Plateforme multi-boutiques complète : espaces marchands et super-admin distincts, catalogue, stock, commandes, COD, factures et statistiques.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma'],
    color: 'cobalt',
    cover: 'shop',
    liveUrl: 'https://tunicom.shop/',
    repoUrl: 'https://github.com/dalimouxx/tunicommerce',
  },
  {
    title: 'Study in World',
    year: '2026',
    kind: 'Plateforme SaaS',
    description:
      'Plateforme de gestion pour agence d’études à l’étranger : CRM, dossiers candidats, visas, finance — interface bilingue français / arabe (RTL).',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Tailwind'],
    color: 'azur',
    cover: 'dashboard',
    liveUrl: 'https://study-in-world.vercel.app',
    repoUrl: 'https://github.com/dalimouxx/study-in-world',
  },
  {
    title: 'Fixi Web',
    year: '2026',
    kind: 'Réseau de réparation',
    description:
      'Écosystème pour réparateurs : marché de pièces, SOS pièce urgente, appels d’experts, academy, wallet client et synchronisation hors-ligne.',
    stack: ['TypeScript', 'Rust', 'Docker', 'PostgreSQL'],
    color: 'pop',
    cover: 'social',
    liveUrl: 'https://fixiphone.io/',
    repoUrl: 'https://github.com/dalimouxx/fixi-web',
  },
  {
    title: 'Restaurant App',
    year: '2025',
    kind: 'Application web',
    description:
      'Application de gestion pour restaurant : prise de commandes, suivi des tables et service en salle, déployée en ligne.',
    stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Render'],
    color: 'volt',
    cover: 'analytics',
    liveUrl: 'https://service-restaurant.onrender.com/',
  },
];

export const skills = [
  'PHP',
  'Symfony',
  'Laravel',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'NestJS',
  'Node.js',
  'PostgreSQL',
  'Prisma',
  'Tailwind CSS',
  'Docker',
  'CakePHP',
];

export const services = [
  {
    title: 'Plateformes web & SaaS',
    text: 'De l’idée au déploiement : applications métier, CRM et plateformes complètes en Next.js, NestJS ou Symfony.',
  },
  {
    title: 'E-commerce & outils sur mesure',
    text: 'Boutiques multi-vendeurs, gestion de stock, paiement et facturation — adaptés au marché tunisien et international.',
  },
  {
    title: 'Pilotage technique de projet',
    text: 'Cadrage, architecture, suivi d’équipe et livraison : une expérience de chef de projet au service de votre produit.',
  },
];

export const journey = [
  {
    period: '2024 — Auj.',
    title: 'CEO & Fondateur',
    place: 'DESERTCOM',
    text: 'Création et direction de ma propre boîte de développement : plateformes web, SaaS et applications pour clients en Tunisie et à l’international.',
  },
  {
    period: '2022 — 2024',
    title: 'Développeur full-stack freelance',
    place: 'Indépendant',
    text: 'Conception et livraison de projets web complets pour divers clients : front-end, back-end, bases de données et mise en production.',
  },
  {
    period: '2021 — 2022',
    title: 'Chef de projet',
    place: 'Labinet',
    text: 'Pilotage de projets de développement au sein de la boîte : coordination d’équipe, relation client et suivi des livraisons.',
  },
  {
    period: '2019 — 2021',
    title: 'Développeur PHP',
    place: 'Labinet',
    text: 'Développement front et back avec Symfony et Laravel pendant 3 ans : applications web métier, APIs et intégration.',
  },
  {
    period: '2024',
    title: 'Licence appliquée en TI',
    place: 'ISET Kébili',
    text: 'Licence appliquée en technologies de l’informatique — formation développement, réseaux et systèmes.',
  },
];

export const marqueeWords = [
  'Sites web',
  'Applications',
  'Plateformes SaaS',
  'E-commerce',
  'PHP & JS',
  'APIs',
];
