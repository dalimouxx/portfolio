# Mohamed Ali Moussa — Portfolio

Portfolio one-page coloré et animé de **Mohamed Ali Moussa**, développeur full-stack & CEO de **DESERTCOM**.

## Aperçu

Site vitrine personnel présentant :

- **Projets** — Tunicommerce, Study in World, Fixi Web, Restaurant App, avec liens vers les plateformes en ligne et le code
- **À propos** — bio, services, double marquee de compétences (PHP, Symfony, Laravel, Next.js, NestJS…)
- **Parcours** — CEO DESERTCOM, freelance, chef de projet puis développeur PHP chez Labinet, licence TI (ISET Kébili)
- **Contact** — email, GitHub, LinkedIn

## Stack technique

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS** — palette en blocs de couleurs francs (cobalt, volt, magenta, azur)
- **GSAP + ScrollTrigger** — révélations au scroll, parallaxe des blobs
- **Lenis** — smooth scroll
- Polices variables : Archivo (display) + Space Grotesk (corps)
- Covers de projets dessinées en SVG pur, zéro image externe
- Responsive (mobile-first), `prefers-reduced-motion` respecté

## Développement

```bash
npm install
npm run dev      # serveur local sur le port 3000
npm run build    # build de production dans dist/
npm run preview  # prévisualisation du build
```

## Modifier le contenu

Tout le contenu (nom, projets, liens, compétences, parcours) se modifie dans **un seul fichier** :

```
src/data/portfolio.ts
```

Chaque champ y est commenté en français.

## Licence

© Mohamed Ali Moussa — Tous droits réservés.
