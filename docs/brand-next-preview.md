# Brand Preview — Next.js + cult UI scaffold

**Datum:** 2026-08-25  
**Ziel:** Craft als Scaffold, eigene Brand (Mensch+Natur → digital befähigen) vereinheitlichen und auf Content übertragbar machen. TypeScript/Next.js statt lame HTML.

## Warum Next.js + cult UI

- **Statisches HTML** = keine Grain/Blur/Mesh, Dither wirkt flach (dein Feedback: lame, fehlt Hintergrund).
- **Next.js + cult UI** = echte Komponenten: `next/font` (Inter/Krub), `shadcn/ui` Card/Button/Badge, cult Patterns `dot-grid`/`mesh-gradient`, eigene `PixelHero` Canvas mit Bayer-Dither LEVELS 18.
- Hintergrund jetzt: Sage/Lilac/Sky Blobs + cursor-magnet (rad 0.58 intens 0.75) rechts, nicht nur Dots.

## Scaffold-Elemente aus deinen Bildern integriert

| Element | Herkunft | Umsetzung |
|---|---|---|
| Fibonacci-Pixel Spirale | Bild 1 Logo | Sub-Mark 6px Ecke, nicht dominant |
| Dünne Geometrie 0.5px 40% | Bild 2 Unreal Kreis/Rechteck | Hero: Kreis 420px + Rechteck 300px weiß/40% hinter PixelHero |
| Natur-Textur Gras/Himmel | Bild 2 | Rechte Pixel-Zone mit Sage/Blue, Gradient to Cream |
| Palette | Beide | Cream #F5F3F0, Sage #8FA69A, Slate Blue #7BA7D1, Dusty #B8C6D8 |

## Varianten (iterativ — nach jedem Schritt Beispiel)

- **A — Natur 70 / Digital 30** (`/a`): `http://192.168.1.188:5174/a` — Cream Base, nur rechte 54% Dither + Geometrie, links Text, Cards solid. Ruhig menschlich befähigend.
- **B — 50/50 Himmel** (`/b`): `http://192.168.1.188:5174/b` — Full-bleed #B8E0F5 Sky, zentrierte Headline, Torn-Paper unten, Cards 80% blur. Offener digital.

Beide mit gleichem `PixelHero` (LEVELS 18, th/LEVELS, drift, cursor), nur BG und Layout anders.

## Tech

- `brand-next-preview/` — `create-next-app --typescript --tailwind --app --src-dir`
- `shadcn init` + `button/card/badge` (cult registry rate-limited 429, manuell nachgebaut)
- `src/components/PixelHero.tsx` — portiert aus `own-website/src/components/PixelGradient.jsx`
- `next/font` Inter/Krub (Inter 400-800, Krub 400-700)

## Nächste Schritte (nach deinem Go)

1. Du wählst A oder B (oder Mix) → ich übertrage Palette/Typo zurück in `own-website` + update `docs/design-system.md` + `assets/design-tokens.json`
2. Dann `design-tokens` Skill: Tokens für Content (LinkedIn 1200×630, Newsletter) ableiten.

Server: `http://192.168.1.188:5174/` Übersicht, `/a` und `/b` Varianten.
