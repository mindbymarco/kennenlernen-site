# Decision Log — marcogrotemeyer.de

Chronologisch, mit Begründung. Neue Entscheidungen unten anhängen.

---

## D1 — Statisch → React/Vite/Tailwind/Framer Motion (Aug 2026)
**Kontext:** Erster Bau war plain HTML/CSS/JS. Marco wollte Design-Skills, UI/UX-Patterns und Framer Motion.
**Entscheidung:** Neubau als Vite + React 19 + Tailwind v4 + Framer Motion im Projekt-Root; statische Dateien blieben als `*-static.*` gesichert.
**Begründung:** Motion-System, Komponenten-Architektur und spätere Erweiterbarkeit.

## D2 — ASCII-Direction verworfen (Aug 2026)
**Entscheidung:** Kein ASCII-Background (auch nicht der Spike `spikes/ascii-framer`).
**Begründung:** Marco stoppte die Direction explizit; Kontrast/Lesbarkeit ungelöst. Iterationen bleiben in `docs/ascii-iterations/` als Referenz.

## D3 — Redesign nach Spec, dann Anti-Cards (Aug 2026)
**Entscheidung:** Struktur/Copy aus der Redesign-Spec (`docs/superpowers/specs/2026-08-20-…`), aber Komposition umgebaut: Card-Grids (Pain/Workspace/DemoBuilds/Services) ersetzt durch Index-Zeilen, Sticky-Split, Typo-Panels.
**Begründung:** Box-in-Box-Grids = erkennbares „AI-built"-Muster. Ziel: Framer-/Editorial-Ästhetik (Referenzen: Exo Ape, Locomotive, unfuture.de).

## D4 — Richtung „C-Light Craft Proof" + Pixel-Dither (Aug 2026)
**Kontext:** Wahl zwischen Editorial-Index (A), Swiss Brutal (B), Immersive Scroll (C). Marco wählte C + Pinterest-Referenz „Pixel Gradient Backgrounds".
**Entscheidung:** Hybrid: immersive Momente (Hero-Canvas, Hover-Reveals, Draw-on-Scroll, CTA-Dither), Body bleibt editorial-ruhig. Pixel-Style in Brand-Palette statt Retro-Neon.
**Begründung:** Site = Portfolio eines AI Builders (Craft-Beweis); volle Immersion riskiert GF-Zielgruppe zu frustrieren. Pixelierung erzählt die Dienstleistung: Rohpotenzial → Klarheit.

## D5 — Font-Trio: Fraunces + Instrument Sans + Geist Mono (Aug 2026)
**Entscheidung:** Inter ersetzt durch Instrument Sans (Body); Geist Mono neu für Meta/Index/Tags.
**Begründung:** Inter gilt als generisch (Anti-AI-Slop); Mono-Ebene gibt „digitale Handschrift", passend zum Pixel-Stil.
**Update 25.08.2026:** Nach Brand B (Newsreader/Inter/JetBrains) zurück auf **Montserrat + Karla + Karla** — finale Brand (siehe `design-system.md`).

## D6 — Watercolor × Pixel-Hybrid statt reiner Canvas-Look (Aug 2026)
**Entscheidung:** Marcos GPT-generierte Watercolor-Bilder bleiben im System: Hero hatte Bild-Variante, CTA läuft das Bild zur Laufzeit durch Bayer-Dither (`DitherImage`).
**Begründung:** Einzigartige Bridge aus eigenen Assets + Pixel-Ästhetik; kein Stock-Look.

## D7 — Parallax im Hero entfernt (Aug 2026)
**Entscheidung:** Keine y/scale-Transforms auf dem Hero-BG mehr; nur sanftes Opacity-Fade beim Scrollen.
**Begründung:** Marco-Feedback: externe Transforms konkurrierten mit der Canvas-internen Animation. Die Auflösungs-Story ist der Effekt — Doppel-Motion raus.

## D8 — A11y-Patterns für Reveal-Komponenten (Final Check, Aug 2026)
**Entscheidung:** DemoBuilds-Zeilen sind echte `<button>`s mit `aria-expanded`; Hover-Reveals nur bei `(hover: hover)` (Touch nutzt Tap); FAQ ebenso.
**Begründung:** Hover-only Interactions funktionieren auf Touch nicht; Keyboard-Fokus war vorher nicht möglich.

## D9 — OG-Image (Aug 2026)
**Entscheidung:** `public/og-image.jpg` 1200×630 mit Claim „KI-Erfolg entsteht nicht beim Tool, sondern bei der Befähigung der Menschen." + `og:image`/`twitter:image` Meta.
**Begründung:** Teilen-Preview ohne Bild = leere Karte.

## D10 — DemoBuilds Affordance (Aug 2026)
**Entscheidung:** Plus→× im Kreis rechts, rotiert bei `open`, `hover:hover` Rand-Coral, Keyboard-fokussierbar. Handy-Test zeigte fehlende Affordance.
**Begründung:** Index-Zeilen waren nicht als aufklappbar erkennbar.

## D11 — GEO Fundament Woche 1-2 (Aug 2026)
**Entscheidung:** `sitemap.xml` Anker `#angebot`→`#workspace`/`#services`, `robots.txt` Disallow entfernt, `aria-labelledby` auf 8 Sections, JSON-LD `Person`/`Organization`/`WebSite` + `sameAs`, `FAQPage` (8), `Service`×3 + `HowTo`, DACH ohne OWL.
**Begründung:** Audit 4.8/10 — fehlender maschinenlesbarer Layer größter Hebel für Zitation in Perplexity/ChatGPT.

## D12 — GEO Woche 3-6 + Hero Final (Aug 2026)
**Entscheidung:** FAQ 8→12 (ChatGPT-Grenzen, ROI-Cases, Discovery-Ablauf, konkrete Kosten), Glossar-`dl` + `DefinedTerm` Schema, interne Links Builds→Ablauf/Services→Workspace, Hero-Scroll-Effekt entfernt (nur Zeit+Cursor, Draft B final), CTA von `DitherImage` auf gleichen `PixelGradient` wie Hero.
**Begründung:** Zitierfähige Antworten + Entities + interne Vernetzung; Hero-Scroll konkurrierte mit Cursor-Magnet (Nutzer-Feedback).

## D13 — Brand B 50/50 Himmel + Next.js Scaffold (25.08.2026)
**Kontext:** Brand inkonsistent (Mischung Craft-Sky, alte Flats, Montserrat), Pixel lame als flache Dots.
**Entscheidung:** Craft als Scaffold behalten, eigene Palette (Cream F5F3F0 / Sage 8FA69A / Dusty B8C6D8 / Sky 7BA7D1) + Fibonacci Sub-Mark + dünne Geometrie 0.5px/40% → Variante B (Himmel #B8E0F5 full-bleed, zentriert, torn-paper) gewinnt vs A (Natur 70). Next.js + TypeScript + cult UI (`shadcn` button/card) für echten Grain/Blur/Mesh. `brand-next-preview/` als Preview, `PixelHero` portiert (LEVELS 18, BG #B8E0F5 hero / #FAF8F5 CTA, rechts orientiert).
**Begründung:** Statisches HTML zu flach; Next.js ermöglicht `next/font` + echte Komponenten. B = offener digital, passt "Mensch im Vordergrund, digital dazu".

## D14 — Font-Pairing Wechsel Montserrat+Karla → Inter (Header) + Krub (Body) (26.08.2026)
**Kontext:** Bild-Referenz blauer Hintergrund Inter header bold + Krub body 15-17px; bisher Montserrat/Karla generisch bzw. inkonsistent mit design-tokens.css (Newsreader/Inter/JetBrains). Ziel: Header Impact + Body Readability.
**Entscheidung:** `--font-serif`/`--font-heading` = Inter (400-800+italic), `--font-sans` = Krub (400-600+italic, 700 optional), `--font-mono` = Krub (400/500 uppercase). Variablen-Namen bleiben, 0 Komponenten-Break. `next/font/google` Inter+Krub, subsets latin, weights wie oben.
**Begründung:** Inter neutral, hoher x-height, bold 700-800 ideal für clamp Headings; Krub humanistisch schmal, 15-17px/1.6 lesbar, Konsistenz Mono=Body. Alternative JetBrains Mono verworfen (zu technisch, bricht Konsistenz).
**Quelle:** Bild-Sample (blauer Hintergrund Inter/Krub) + Design-Validierung Task 2.

## D15 — Umbau zum Hub: Dachmarke, neue Startseite, Betriebe unter /betriebe (13.10.2026)
**Kontext:** marcogrotemeyer.de wird die Hauptseite der Personal Brand (Strategie in `~/Movies/Content/marcogrotemeyer.de/Strategie/`, Entscheidungen H18–H24, G3 im PLAN).
**Entscheidung:**
- Startseite `/` und Unterseiten `/beratung`, `/builds`, `/builds/[slug]`, `/ueber-mich`, `/kontakt` in der Route-Gruppe `src/app/(hub)` nach Probe A „Werkstattbuch“. Styles gekapselt in `src/app/hub.css` (`.hub`), Inhalte in `src/lib/hub.ts`.
- Bisherige Inhalte für Betriebe unter `/betriebe` (Startseite, Branchen, Bereiche, Ressourcen). Alte URLs leiten mit 308 (permanent) weiter, siehe `next.config.ts`. `/design`, `/preview`, `/assistenten-vorschau` entfernt (Stand in `d1d2ff5` erhalten), leiten auf `/betriebe`.
- Schrift: Inter (Text, UI, Titel unter /betriebe), Instrument Serif (Titel im Hub), Geist Mono (Labels). Krub entfällt (ersetzt D14). Unter /betriebe Tanne `#2F6B4F` als einzige Akzentfarbe, keine Aquarellflächen. Fibonacci-Zeichen bleibt.
- Kontakt: Erstgespräch über den bestehenden Cal.com-Link (Datenschutz deckt ihn ab), Build-Session per E-Mail, bis Buchung mit Zahlung steht (G4). Kein Kontaktformular, solange Resend und Datenschutzeintrag fehlen.
- Builds zeigen echte, stumme Ausschnitte aus fertigen Reels und Karussells (`public/hub/`), Achilleus und Raijin als Terminal-Darstellung.
**Quelle:** `~/Movies/Content/marcogrotemeyer.de/Brand/DESIGNSYSTEM.md`, `Strategie/SITEMAP.md`, `Strategie/STARTSEITE-TEXTE.md`.

## D16 — Wording vom Alltag her, drei Visualisierungen, Rechtstexte fertig (13.10.2026)
**Kontext:** Marcos Entscheidungen H25–H27.
**Entscheidung:** Startseite folgt dem Weg Alltag → „Ich kenne das“ → Ergebnis → Aufwand → Builds → Preise und Vertrauen. Drei Motion-Bausteine in `src/components/hub/viz/` (Woche, Checkliste, Vorher/Nachher-Wisch), ohne Videodateien, bei „Bewegung reduzieren“ nur Endzustand. Impressum und Datenschutz liegen jetzt in `src/app/(hub)/` im Look der Dachmarke, beschreiben den tatsächlichen Stand (keine Cookies, kein lokaler Speicher, Cal.com nur als Link) und nennen die Kleinunternehmerregel. „beyond925“ entfernt.
**Quelle:** `~/Movies/Content/marcogrotemeyer.de/Strategie/STARTSEITE-TEXTE.md`, `ENTSCHEIDUNGEN.md`.
