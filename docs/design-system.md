# Design System — marcogrotemeyer.de

Referenz für alle visuellen und motion-Entscheidungen. Änderungen nur hier dokumentieren. **Code ist Source-of-Truth** — `src/index.css`, `src/components/PixelGradient.jsx`, `index.html` überschreiben Doku bei Drift.

## Tokens (`src/index.css`, Tailwind v4 `@theme`)

| Token | Wert | Nutzung |
|---|---|---|
| `--color-bg` | `#F5F3F0` | Seitenhintergrund |
| `--color-bg-elev` | `#FFFFFF` | Karten/Flächen (sparsam) |
| `--color-bg-soft` | `#EDEEEA` | Alternierende Sections (`py-[88px]` + `border-y` + `bg-soft`) |
| `--color-ink-strong` | `#0A0A09` | Headlines |
| `--color-ink` | `#141413` | Body |
| `--color-ink-muted` | `#4A4A48` | Lede, Sekundärtext |
| `--color-ink-subtle` | `#8A8A86` | Meta, Disclaimer |
| `--color-accent` | `#7BA7D1` | Sky-Blau: 1 Betonung/Zeile (`em`), Index, Featured (aus Läufer-Bild) |
| `--color-accent-bg` | `#E6EEF6` | Icon-Chips |
| `--color-line` / `-soft` | `#D8DDD6` / `#E6E8E3` | Hairline-Divider |
| `--radius-card` / `--radius-sm` | **24px / 16px** | Nur wo sinnvoll (About-Foto `rounded-[var(--radius-card)]`); Panels bewusst `radius-0` — Code `src/index.css:19-20` ist maßgeblich (zuvor fälschlich 22px/14px dokumentiert) |

> **Hinweis Theme-Color Drift:** `index.html:8` setzt `<meta name="theme-color" content="#FAF8F5">` (Canvas-Hintergrund `PixelGradient.jsx: BG #FAF8F5`), während `--color-bg` `#F5F3F0` ist. Differenz 5 Einheiten — bewusst für Canvas-Helligkeit vs. Seitenhintergrund; bei Vereinheitlichung `index.html` + `PixelGradient.jsx:11` synchron anpassen.

## Typografie

| Rolle | Font | Einsatz |
|---|---|---|
| Display (Serif) | **Inter** 400/500/600/700/800 + italic, `tracking −0.02em` (Headings), `font-[family-name:var(--font-serif)]` · Komponenten-Tracking bleibt −0.04em, nur Doku −0.02em | H1/H2/Quotes/Titel — `font-[family-name:var(--font-serif)]`, `em` italic + `var(--color-accent)` (1× pro Headline) |
| Body (Sans) | **Krub** 400/500/600 (+700 emphasis) | Fließtext — `font-[family-name:var(--font-sans)]`, Body 15-17px/1.6, Lede 17-20px |
| Mono | **Krub** 400/500 uppercase `tracking 0.06–0.08em` | Index-Nummern, Labels, Tags, Disclaimer — `font-[family-name:var(--font-mono)]`, `text-xs uppercase` |

Quelle: `src/app/layout.tsx:2-7` (`next/font` Inter/Krub, variables `--font-serif/sans/mono`) + `src/app/globals.css:10-13` (`@theme`).

Größen: H1 `clamp(40px,6.4vw,76px)` · H2 `clamp(32px,4.4vw,52px)` · Quote-Zeilen `clamp(26px,3.4vw,42px)` · Body 17px · Meta 11–13px.

## Brand B — 50/50 Himmel (gewählt 25.08.2026, Next.js + cult UI scaffold)

Brand B gewählt über Next.js Preview `/b` (50/50 Himmel dominiert, vs A Natur 70). Craft Scaffold bleibt, eigene Palette (Cream F5F3F0 / Sage 8FA69A / Slate Blue 7BA7D1 / Dusty B8C6D8) + dünne Geometrie 0.5px/40% + Fibonacci Sub-Mark. Next.js `brand-next-preview/` ist Source für Hintergrund/Grain.

- **Heading-Dominanz:** Inter für Headlines/Quotes (klar, neutral, bold Impact 700-800), Krub für Body (humanistisch, schmal, 15-17px lesbar).
- **Rhythmus:** Alternierend `bg` / `bg-soft` mit `border-y` und `py-[88px]` (verifiziert, siehe Abschnitt Layout-Raster), `max-w 1180px` Editorial / `980px` Fokus (FAQ/CTA).
- **Reduktion:** Keine Card-Grids, stattdessen Index-Lines mit Hairlines, Sticky-Left + Scrolling-Index, Typo-Panels; Sky-Blau nur 1× pro Headline + Index-Zahl/Featured.
- **Tiefe:** Nicht durch Schatten/Gradients auf UI, sondern durch Canvas-Dither (Hero/CTA) + Foto-Pixelate + Grain-Layer.
- **Begründung:** Mittelstands-GF erwartet Seriosität; volle Immersion (Option C) überfordert. Option B trägt These „Befähigung vor Tool" typografisch.

## Kompositions-Prinzipien (Anti-AI-Slop)

1. **Keine Card-Grids.** Inhalte als Index-Zeilen mit Hairline-Dividern, Sticky-Splits oder Typo-Panels.
2. **Rhythmuswechsel** zwischen Sections: ruhig (Pain) ↔ immersiv (Hero/CTA).
3. **Mono-Metadaten** als Strukturelement (`01`, Labels in Uppercase, `tnum`).
4. **Sky-Blau sparsam:** 1 `em` pro Headline, Index-Zahlen, eine Featured-Fläche.
5. Keine Schatten, keine Gradients auf UI-Elementen; Tiefe kommt aus Bild/Canvas.

## Layout-Raster (verifiziert Phase 3 — nicht ändern)

| Regel | Wert | Status |
|---|---|---|
| Vertikal-Rhythmus | `py-[88px]` je Section (Hero ausgenommen: lifted card `pt-[72px]`/`pb-16` im inneren Wrapper) | ✅ alle 9 Content-Sections konsistent |
| Hairline + Alternierung | `border-y border-[var(--color-line)]` + `bg-[var(--color-bg-soft)]` alternierend | ✅ Workspace/Services/About/Cta mit `bg-soft`+`border-y`; Pain/Process/DemoBuilds/Faq ohne |
| Container | `max-w-[1180px]` Editorial (Pain/Workspace/Services/Process/DemoBuilds/About) · `max-w-[980px]` Fokus (Faq/Cta) · `mx-auto px-7` | ✅ |
| Headline-Tracking | `tracking-[-0.04em]` für H2/H3/Section-Titel (Hero H1 `−0.02em`) | ✅ |
| Quelle | `src/components/{Pain,Workspace,Services,Process,DemoBuilds,About,Faq,Cta,Hero}.jsx` + `SectionHead.jsx` | Code maßgeblich |

## Motion-System

| Pattern | Wo | Umsetzung |
|---|---|---|
| Stagger-Load | Hero | Parent-Variants, `staggerChildren: 0.14` |
| Scroll-Reveal | Alle Sections | `whileInView`, `once: true`, `margin: '-30…-60px'` |
| Pointer-Magnet | Hero + CTA Canvas | Blob folgt Maus/Touch (lerp 0.06), Radius 0.55/0.62, Intensität 0.75/0.85, Draft B final — rechts orientiert `px 0.55+mx*0.35` |
| Hover/Tap-Reveal | DemoBuilds | Bild-Cards (Hook + Expand), Button + `aria-expanded`, `AnimatePresence` height |
| Draw-on-Scroll | Process | `useSpring(scrollYProgress)` auf Linien-`scaleX/scaleY` |
| Pixelate-Hover | About-Foto | Canvas: 26→40→1 Blöcke über 650ms (`PhotoPixelate`) |
| Zeit-Drift | Hero/CTA Canvas | Blobs driften via `sin(t*s+p)`, **Bayer 4×4, LEVELS 18**, cols dynamisch 48–320, BG #B8E0F5 (Hero) / #FAF8F5 (CTA) |

### Regeln

- Nur GPU-Eigenschaften animieren (`opacity`, `transform`)
- **Ein aktiver Canvas pro Viewport** (Hero läuft permanent, CTA lazy)
- `useReducedMotion()` überall respektieren → statische Frames, Content immer sichtbar
- Micro-Interactions 150–300ms, Reveals ≤650ms, Easing `[0.22, 1, 0.36, 1]`

## Tuning-Knobs

| Komponente | Knob | Default | Quelle |
|---|---|---|---|
| `PixelGradient` | Spalten | **dynamisch 48–320** (`Math.round(cssW/PIXEL)`, `PIXEL=4`, `clamp 48..320`, `rows 32..320`) — zuvor fälschlich 84 fix | `src/components/PixelGradient.jsx:74-75` |
| `PixelGradient` | `LEVELS` (Dither-Körnung) | **18** — Draft B subtil | `src/components/PixelGradient.jsx:28` |
| `PixelGradient` | `BLOBS` (Farbe/Position/Radius) | Sage/Lilac/Sky-Blau `#7BA7D1` | `PixelGradient.jsx:14-18` |
| `PixelGradient` | `BAYER` | **4×4** Matrix `[[0,8,2,10]…]` | `PixelGradient.jsx:21-26` |
| `PixelGradient` | Portrait-Dämpfung `rScale` | 0.85 bei aspect < 0.9 | `PixelGradient.jsx:84` |
| `PixelGradient` | Cursor-Magnet | Radius 0.55/0.62, Intensität 0.75/0.85, Draft B final | `PixelGradient.jsx:115-116` |
| `PhotoPixelate` | `startBlocks`, `duration` | 26, 650ms | `PhotoPixelate.jsx` |
| `HeroBackground` | `variant` | `'pixel'` (`'watercolor'` = Rückweg) | `Hero.jsx` |

## A11y

- Touch-Targets ≥44px (Buttons/Pills), sichtbare Focus-Ringe (`focus-visible`, Sky-Blau)
- FAQ/DemoBuilds: echte `<button>`s mit `aria-expanded`
- Bilder/Canvas: `alt` bzw. `aria-hidden`; Foto-Canvas mit `role="img"` + Label
- Kontrast: Ink auf Hellgrau >12:1, Sky-Blau nur für große/Akzent-Elemente (4.6:1 auf Hellgrau)
