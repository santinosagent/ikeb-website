# IKEB Pisa - Kebab Italiano

Sito web vetrina per IKEB, un fast food kebab innovativo che richiama la cultura italiana. Il sito è stato sviluppato con Next.js 15, Tailwind CSS 4, Framer Motion e next-intl per l'internazionalizzazione.

## Caratteristiche

- **Design System**: Estetica poster art Bauhaus rivisitata in chiave italiana
- **Internazionalizzazione**: Supporto per italiano e inglese
- **Responsive**: Mobile-first design
- **Animazioni**: Smooth animations con Framer Motion
- **Pagine**: Home, Chi Siamo, Menu, Contattaci

## Tech Stack

- Next.js 15.1.6
- React 19.0.0
- Tailwind CSS 4.2.0
- Framer Motion 12.0.0
- next-intl 3.26.3
- TypeScript 5.7.3

## Getting Started

1. Installa le dipendenze:
```bash
npm install
```

2. Avvia il server di sviluppo:
```bash
npm run dev
```

3. Apri [http://localhost:3000](http://localhost:3000) nel tuo browser.

## Struttura del Progetto

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── chi-siamo/
│   │   ├── menu/
│   │   └── contattaci/
│   ├── globals.css
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── ChiSiamoPreview.tsx
│       ├── MenuHighlight.tsx
│       └── CTACollaboratori.tsx
├── i18n/
│   ├── request.ts
│   └── routing.ts
├── messages/
│   ├── it.json
│   └── en.json
└── middleware.ts
```

## License

MIT