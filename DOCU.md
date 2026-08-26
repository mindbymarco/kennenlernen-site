# Own Website — Handoff (marcogrotemeyer.de)

**Stand:** 25.08.2026 · Brand B 50/50 Himmel gewählt, Next.js Preview live, Hero Craft-Sky

## Ziel

Persönliche Solo-Site als **AI Builder für den deutschen Mittelstand**. These: „KI-Erfolg entsteht nicht beim Tool, sondern bei der Befähigung der Menschen." Ruhig · menschlich · befähigend (Voice A). Craft Scaffold + eigene Natur/Digital Brand (Sage 8FA69A / Dusty B8C6D8 / Sky 7BA7D1 auf Cream F5F3F0, dünne Geometrie 0.5px/40%, Fibonacci Sub-Mark).

## Aktueller Stack

| Layer | Tech |
|---|---|
| Framework | React 19 + Vite 8 (main), **Next.js 16 + TS + Tailwind + shadcn/cult UI** für Brand-Preview `brand-next-preview/` |
| Styling | Tailwind CSS v4 (`@theme`-Tokens in `src/index.css`) + `src/app/globals.css` im Preview |
| Motion | Framer Motion 12 (`LazyMotion`) · Preview: gleiche PixelHero Canvas |
| Fonts | **Inter** (Serif/Header) · **Krub** (Sans/Body) · **Krub** (Mono) via `next/font` |
| Deploy | Vercel, statisch |

## Design-Richtung — Brand B

- **Hero:** Sky #B8E0F5 full-bleed rounded-[24px] Card, `pt-[120px] pb-[140px]` zentriert, torn-paper unten, PixelHero `LEVELS 18` `BG #B8E0F5` rechts orientiert `rad 0.55/0.62 intens 0.75/0.85`, cursor-magnet
- **Rhythmus:** Flat alternierend `py-[88px]` + `border-y` + `bg-soft #EDEEEA` (Pain/Process/DemoBuilds/Faq ohne, Workspace/Services/About/Cta mit)
- **Services:** Craft Pricing-Anordnung `grid [340px_1fr]` + Bottom-Bar (Kostenlos → Befähigung links, PLUS → Adoption/Engineering rechts)
- **CTA:** Gleiche PixelGradient wie Hero, full-bleed
- **Geometrie:** Kreis 420px + Rechteck 300px weiß 40% hinter PixelHero (Unreal-Ref)

## Section-Map

| # | Section | Komponente | Besonderheit |
|---|---|---|---|
| 1 | Nav | `Nav` | Fixed `top-5/6` pill, gap 12px über Hero Sky (Craft Gap), `backdrop-blur` |
| 2 | Hero | `Hero` + `PixelGradient` | Sky Card #B8E0F5, zentriert, torn-paper, LEVELS 18 rechts |
| 3 | Wo es klemmt | `Pain` | 4 XXL-Quotes, Index 01–04 hairline |
| 4 | AI Workspace | `Workspace` | Sticky Split + Glossar-dl, 6 Rows |
| 5 | Demonstrated Builds | `DemoBuilds` | Index-Liste Toggles Plus→× |
| 6 | Was wir tun | `Services` | 340px + 1fr Craft Cards, Bottom-Bar |
| 7 | Ablauf | `Process` | Linie `useSpring` |
| 8 | Wer ich bin | `About` | Foto Pixelate |
| 9 | FAQ | `Faq` | 12 Fragen |
| 10 | CTA | `Cta` | PixelHero |
| 11 | Footer | `Footer` | Legal |

Preview: `http://192.168.1.188:5174/a` (Natur70) und `/b` (Himmel 50/50) — B gewählt.

## Verifikationsstand

- `npm run lint` clean, `npm run build` clean ~376 KB / gzip 117 KB
- Desktop + 390px visuell (Hero Sky, Services Craft), Reduced-Motion ok
- GEO: Schema valid, sitemap/robots fix, 12 FAQ + DefinedTerm

## Offene Punkte

1. Entscheidung A vs B final in `own-website` übertragen (Palette bereits B, DOCU hiermit aktualisiert)
2. `assets/design-tokens.json` nachziehen (brand sync)
3. `docs/hero-bg` + `phase-2-audit` alte Screenshots archivieren
