# marcogrotemeyer.de

Persönliche Site — AI Builder für den deutschen Mittelstand. Ruhig · menschlich · befähigend. Craft Scaffold + eigene Brand (Cream/Sage/Sky).

## Quickstart

```bash
npm install
npm run dev      # http://localhost:5173 (Vite main)
npm run build    # → dist/
npm run lint     # oxlint src

# Brand Preview (Next.js + cult UI)
cd brand-next-preview
npm run dev      # http://192.168.1.188:5174 (/a Natur70 /b Himmel)
npm run build
```

Deploy: Vercel (`dist/`).

## Struktur

```
index.html            Vite-Entry (Inter/Krub, OG-Tags)
src/
├── index.css         Tailwind v4 @theme Tokens
└── components/
    ├── Nav.jsx               pill fixed top-5/6
    ├── Hero.jsx              Sky #B8E0F5 Card rounded 24, torn-paper, PixelGradient LEVELS 18 rechts
    ├── PixelGradient.jsx     Canvas Bayer 4x4, cursor-magnet
    ├── Pain.jsx  Workspace.jsx  DemoBuilds.jsx  Services.jsx (340+1fr Craft)
    ├── Process.jsx  About.jsx  Faq.jsx  Cta.jsx  Footer.jsx
brand-next-preview/   Next.js + TS + shadcn (button/card) + PixelHero.tsx
public/               profile.jpg, og-image.jpg
docs/
├── design-system.md   Tokens, Typo, Motion, Tuning-Knobs (B Himmel)
├── decisions.md       D1-D13 (D13 Brand B)
├── brand-next-preview.md  Preview Docu
├── geo-audit.md / geo-90day-plan.md
└── hero-bg/ / phase-2-audit/  (alt, zu archivieren)
```

## Dokumentation

- `docs/design-system.md` — Source-of-Truth (Code überschreibt)
- `docs/decisions.md` — Decision-Log
- `docs/brand-next-preview.md` — Next.js Preview Varianten A/B

## Tokens

Cream #F5F3F0 / Sage #8FA69A / Slate #7BA7D1 / Dusty #B8C6D8 / Ink #0A0A09
Fonts: Inter 400-800 / Krub 400-700 (Body 15-17px/1.6, Mono 400/500 uppercase)
Radius 24/16, LEVELS 18, rad 0.55/0.62 intens 0.75/0.85
```
Branch: Brand B gewählt (Himmel #B8E0F5 full-bleed).
