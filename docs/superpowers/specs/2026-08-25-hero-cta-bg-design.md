# Hero/CTA Background Design — 2026-08-25

## Kontext
Hero und CTA ("Lassen Sie uns schauen...") sollen identischen Hintergrund teilen: Foto (JPG) + PixelGradient Cursor-Animation. Aktuell Hero blau Sky + Canvas vollflächig mit Torn-Paper, CTA bg-soft flach, beide ohne JPG. Kleine Bayer-Punkte vollflächig stören (Screenshot Kreis). Font Krub Bug fixed.

## Entscheidung (Brainstorming 2026-08-25)
- Kein Torn Paper
- Background: `public/hero-bg/hero-v1.jpg` (Hero), `public/hero-bg/cta-v1.jpg` (CTA) als `object-cover` absolut inset-0
- PixelGradient nur rechts, volle Höhe: `absolute right-0 top-0 w-[55%] h-full` Hero, `w-[50%]` CTA, `opacity 0.38`, Cursor-Tracking bleibt
- Bayer-Dithering bleibt nur rechts vorhanden → links sauberes Foto, rechts Pixel-Look
- Spacing Craft: aktuell `py-[72/80]` beibehalten (kein Wechsel auf 88 bis explizit gewünscht)

## Komponenten
- `src/components/Hero.jsx` — Foto Layer + PixelGradient right-55% + Torn Paper entfernen + bg-sky entfernen
- `src/components/Cta.jsx` — Foto Layer + PixelGradient right-50% + bg-soft/border-y gegen Foto tauschen
- `src/components/PixelGradient.jsx` unverändert (LEVELS 18, PIXEL 4, BLOBS rechts orientiert, pointer magnet 0.55+mx*0.35)

## Datenfluss
1. Foto rendert statisch, darunter
2. Canvas drüber rechts, pointermove/touch listener, rAF Loop, dpr capped 2, low-res buf upscale pixelated
3. Text z-10 darüber

## Offene Punkte
- Kontrast Text auf Foto prüfen (Hero Text teils white/ink, CTA ink-muted auf hellem Foto — ggf. Overlay)
- Dithering Stärke später justierbar (LEVELS/PIXEL)

## Verifikation
- `npm run build` static 4 routes
- Visuell: Foto sichtbar, Punkte nur rechts, Cursor bewegt Flecken nur rechts, links clean
