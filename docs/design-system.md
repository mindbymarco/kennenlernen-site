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


## 6. Oktober 2026 — Angebot für kleine Unternehmen

Die Startseite verwendet jetzt `src/components/BusinessHome.tsx` und den Angebotsrechner. Die früheren Mittelstands-Komponenten bleiben als Bestand erhalten, werden auf der Startseite aber nicht mehr geladen. Die bisherigen Vite-Pfade und alten Farbwerte oben dokumentieren einen früheren Stand. Maßgeblich für die aktuelle Seite sind `src/app/globals.css` und `src/app/layout.tsx`.

- Warme Flächen (`--background #F6F2EC`, `--card #FFFEFB`) und ein zurückhaltendes Grün (`--primary #303F35`) unterstützen einfache Alltagserklärungen.
- Inter für Überschriften, Krub für Fließtext bleiben erhalten. Text wird statisch angezeigt; kein Scroll-Reveal erforderlich.
- Editorial-Aufbau für Leistungen und Zusammenarbeit. Karten werden gezielt für die konkreten Eingangs-/Ergebnisbeispiele und den Rechner verwendet. Das erweitert die frühere Regel gegen Kartengitter innerhalb des autorisierten Visualisierungsauftrags.
- Große Branchenschalter, Formularflächen und Aktionen mit mindestens 46 px Höhe. Drei Demonstrationsschritte nebeneinander auf Desktop, vertikal auf Mobilgeräten.
- Semantische Theme-Tokens gelten auch für die vorhandenen shadcn/Base-UI-Komponenten. Kein zweites UI-System installiert.
- Referenzen und Bibliotheksentscheidung: [UI Exploration](./ui-exploration.md). Positionierung und Beispielpreisannahmen: [Angebotskonzept](./offer-strategy.md).


## 6. Oktober 2026 — Individuelle Betriebsseiten

Die Hauptnavigation bietet nun die tatsächliche Auswahl der Betriebsart. Desktop: Navigation Menu mit fünf Bereichsspalten und 25 Betriebslinks. Mobil: Sheet mit benannten Bereichen und zugänglichem Accordion. Verweise auf Bereichs- und Betriebsseiten öffnen den Seitenanfang.

Die 25 Betriebsseiten und fünf Bereichsseiten verwenden die gemeinsame Gestaltung, aber eigene Texte, Aufgaben und Demonstrationen. Handwerk erhält eine beschriftete Auftragsübersicht; Salons nutzen große Zeitblöcke; Sportbetriebe sehen Kursübersichten; Vor-Ort-Service nutzt Aufgabenlisten; Handel und Selbstständige verwenden Dokumentvorschauen. Die passende Aufgabenart hat Vorrang vor einer starren Zuordnung zur Branche.

Zur Wiedererkennung variieren die Akzentfarben behutsam: Handwerk Grün, Schönheit gedecktes Violett, Sport Petrol, Vor-Ort-Service Oliv und Handel Schiefer-Violett. Bedeutung bleibt immer als Text erkennbar. Desktop und Mobil verwenden dieselbe Informationsreihenfolge.

Auswahl und Begründung der Komponenten, offizielle Quellen und Prüfung: [Individuelle Branchenführung](./industry-pages.md).


## 7. Oktober 2026 — Visuelle Führung für kleine Unternehmen

Aktueller Stil: ruhig und persönlich. Die bisherige warme Grundpalette bleibt bestehen. Creme trennt die Seite von den weißen Arbeitsbeispielen; Grün markiert vorbereitete Ergebnisse und Hauptaktionen. Schrift, Icons und Flächen bekommen konkrete Aufgaben. Eine neue Bibliothek wird nicht benötigt.

### Blickführung

Die Startseite führt vom Nutzen zur Handlung: kurze Überschrift links, greifbare Morgenübersicht rechts, eine hervorgehobene Aktion zum Alltagsbeispiel. Das kleine echte Porträt verbindet die Hilfe mit ihrem Ansprechpartner. Auf Mobilgeräten erscheinen dieselben Elemente nacheinander. Die Beispiele benötigen keine Animation und keine Vorkenntnisse.

| Besucherfrage | Ort / Komponente | Nächster Schritt |
|---|---|---|
| Was bekomme ich? | Hero und dreiteilige Leistungsleiste | Alltagsbeispiel ansehen |
| Wie hilft mir das? | Drei Tabs mit Ausgangslage → vorbereitete Hilfe | Passende Aufgabe im Rechner auswählen |
| Gibt es echte Erfahrung? | Anonymisierter Praxisfall mit 10-/5-Stunden-Balken | Eigene Aufgabe besprechen |
| Passt es zu meinem Betrieb? | Fünf aufklappbare Bereiche, darunter je fünf Betriebslinks | Individuelle Betriebsseite |
| Wie starten wir und was kostet es? | Vier Arbeitsschritte, danach kostenloser Rechner | Auswahl herunterladen / Gespräch vereinbaren |

Der Rechner zeigt zuerst Betrieb und Aufgaben. Verbindungen und laufende Betreuung stehen unter „Weitere Wünsche · optional“. Standard bleibt der einfache Start ohne laufende Betreuung; eine gewählte Option bleibt auch nach Zuklappen wirksam und im Ergebnis sichtbar.

### Komponentenentscheidung

[shadcn/Base UI](https://ui.shadcn.com/docs/components/base/card) ist bereits installiert und bietet anpassbare Karten, Tabs, Accordion und Formularbausteine. [Mantine](https://mantine.dev/) wurde als umfangreiche Alternative geprüft; [Radix Themes](https://www.radix-ui.com/themes/docs/overview/getting-started) als stärker vorgegebenes Theme-System. Für diese bestehende Seite überwiegt der Nutzen der vorhandenen Komponenten: gleiche Bedienung, vorhandene Tastatursteuerung und ein einheitlicher Stil. Keine zusätzlichen Abhängigkeiten installiert.

Die [Notion-Analyse](https://getdesign.md/notion/design-md) und ihre visuell geprüfte Vorschau liefern das Prinzip ruhiger Flächen und klarer Handlungshierarchie. Die [Zapier-Analyse](https://getdesign.md/zapier/design-md) und ihre Vorschau ergänzen warme Flächen und verständliche Abläufe. Es handelt sich um unabhängige Analysen; fremde Markenfarben, Logos und Texte werden nicht übernommen. Cal.com wurde zusätzlich als neutrale Formreferenz textlich geprüft.

### Regeln

- Überschrift nennt den Nutzen, darunter eine kurze Erklärung und ein erkennbarer nächster Schritt. Nicht jede Aktion braucht einen ausgefüllten Knopf.
- Icons stehen immer zusammen mit Text. Grün und Balkenlänge sind zusätzliche Hinweise, keine alleinigen Bedeutungsträger.
- Karten dienen konkreten Arbeitsbeispielen und dem Rechner; normale Erklärungen bleiben offene Textflächen.
- Auswahl erfolgt schrittweise: drei Alltagsaufgaben bzw. fünf Bereiche, Detailwahl erst nach Interesse. Die vollständigen Branchenlisten bleiben auf den Übersichts-/Betriebsseiten erhalten.
- Tastaturfokus ist sichtbar. Mobil stapeln die Beispiele in Leserichtung; Pfeil zeigt nach unten. Inhalte bleiben bei reduzierter Bewegung vollständig sichtbar.

Der Praxisfall basiert auf Marcos freigegebener Schilderung. Gemessen wurden 50 % Zeitersparnis für die betrachteten Aufgaben. Die ungefähr zehn bisherigen Stunden monatlich sind eine Näherung; 30 Stunden und 8.250 € über sechs Monate sind daraus abgeleitete Hochrechnungen. Es ist kein Umsatzversprechen für andere Kunden.


## 7. Oktober 2026 — Markenbilder als verbindliche Gestaltungsgrundlage

Dieser Abschnitt definiert die aktuelle Gestaltung. Frühere Paletten und Prototypen darüber sind Historie. Die aktuelle Implementierung liegt in `src/app/globals.css`, `BusinessHome.tsx`, `BrandGeometry.tsx` und den gemeinsamen UI-Komponenten.

### Markenmaterial und Übertragung

| Vorlage von Marco | Übertragung in die Website |
|---|---|
| `Logo.png` / `phibig.gif` | Pixel-Aquarell-Fibonacci-Logo in Navigation und Einstiegsbeispiel; statisches PNG für Ruhe und Erkennbarkeit. |
| Beide Aquarellhintergründe | Breites Originalbild im Einstieg und auf Bereichsseiten; Papierbild als vorhandene alternative Fläche im Asset-Verzeichnis. Textflächen werden mit einer hellen Schicht geschützt. |
| `marco-grotemeyer-logo.png` / vitruvianische Referenz | Menschliche Bildsprache im persönlichen Abschnitt; echte Fotografie bleibt der Beleg für den Ansprechpartner. Kreis und Rechteck ergänzen die Komposition. |
| Läuferbild und Pixeltypografie-Referenz | Pixel bleiben ein Markendetail im Logo. Fließtexte und UI-Schrift bleiben Inter/Krub für Lesbarkeit. |
| Rot-Braun-Palette und geometrischer Screenshot | Vergleichsrichtung Rot/Braun unter `/design`; feine Linien und ein eigenes SVG-Motiv mit Fibonacci-Quadraten für den Standardstil. |

Originaldateien bleiben unverändert. Verwendete Assets sind Kopien unter `public/brand`. Die quadratischen Geometriegrößen des SVG folgen 377, 233, 144, 89, 55, 34, 21, 13, 8, 5. Der Text braucht dieses Wissen nicht; das Motiv ist rein dekorativ und für Hilfsmittel ausgeblendet.

### Farbe und Lesbarkeit

| Rolle | Wert | Zweck |
|---|---|---|
| Papier / Text | `#FAF7F0` / `#222B2E` | Warme Grundlage, Textkontrast 13,51:1. |
| Hauptaktion / Himmel | `#355D78` / `#E7EEF2` | Einheitliche Aktionen auf allen Betriebsseiten; weißer Buttontext 7,03:1. |
| Salbei / Text darauf | `#E3EBDD` / `#344838` | Vorbereitete Ergebnisse und Preisbereich; Kontrast 8,07:1. |
| Erklärender Text / Lavendel | `#5A6367` / `#EDE7EF` | Erklärungen auf Papier 5,75:1; Lavendel als kleine Flächenvariante. |
| Alternative | `#C92828`, `#E8E3D8`, dunkles Braun | Freigegebene Vergleichspalette; weißer Text auf Rot 5,50:1. |

Die Kontrastwerte sind für die angegebenen flachen Farbpaare berechnet. Text im Einstieg liegt auf einer überwiegend deckenden hellen Schicht; Unterlagen und Formulare haben ruhige Kartenflächen. Farbe ergänzt immer Beschriftungen. Branchen variieren nur die zurückhaltenden Flächen; die Hauptaktion bleibt Blau.

### Schrift, Flächen und Bewegung

Inter trägt Überschriften und Orientierung; Krub bleibt für den lesbaren Fließtext. Die bestehende Schrifteinbindung wird weiterverwendet. Hauptüberschriften liegen auf Desktop bei ungefähr 65 px, auf Mobilgeräten bei 38–50 px. Lange Falltitel dürfen umbrechen. Karten verwenden 12 px Rundung, Buttons 8 px. Dekorative Schatten sind schwach und dienen der Unterscheidung der Praxis- und Ergebnisflächen.

Die Benutzeroberfläche bleibt statisch. Es gibt keine automatische Logoanimation oder bewegte Leseflächen. Zur Bewegung gehören nur dezente Zustandswechsel und Seitenanker; reduzierte Bewegung wird berücksichtigt. Die dekorative Geometrie ist auf den Einstiegsbereich begrenzt, damit sie keine mobile Überbreite verursacht.

### Besucherführung und Komponenten

Die Reihenfolge bleibt Nutzen → konkrete Hilfe → echter Praxisfall → eigener Betrieb → Zusammenarbeit → Preisrahmen → persönliche Erfahrung / Fragen → Kontakt. Der Einstieg bietet eine dominierende Aktion zum Alltagsbeispiel und eine ruhigere Kontaktverbindung. Die Leistungsleiste benennt die Einrichtung, gemeinsame Übung und Anleitung.

Der visuelle Vergleich verwendet Tabs, vollständige Card-Komposition und beschriftete Ausgangs-/Ergebnisflächen. Auf Mobilgeräten folgen sie von oben nach unten; der Pfeil dreht sich entsprechend. Die Branchenwahl öffnet fünf Bereiche und erst dann die konkreten Betriebe. Der Rechner zeigt zunächst die wichtigsten Fragen; weitere Wünsche bleiben optional aufklappbar und ihre Auswahl ist im Ergebnis sichtbar.

Die vorhandenen shadcn/Base-UI-Komponenten werden weiterverwendet. Cards, Tabs, Toggle Group, Navigation Menu, Sheet, Accordion, Felder und Checkboxen decken den Bedarf ab. Dadurch bleiben Fokussteuerung, Tastaturbedienung und Layouts einheitlich. Für den Vergleich sind keine neuen Pakete installiert. `/design` zeigt dieselben funktionsfähigen Inhalte mit zwei Farbwelten und ist von der Suchmaschinenindexierung ausgeschlossen.

### Geprüfter Abschluss

35 Inhaltsseiten wurden jeweils bei tatsächlichen 390, 768 und 1280 px geprüft: 105 Kombinationen ohne horizontale Überbreite. Erfasst wurden Startseite, Designvergleich, Branchenübersicht, beide rechtlichen Seiten sowie alle 30 Detailseiten.

Alle 75 Branchenbeispiele wurden im Browser vorbereitet und auf erwarteten Ergebnistext, passende Branche und genau eine ausgewählte Aufgabe im Rechner geprüft. Alle drei Startseitenbeispiele geben die richtige Aufgabe und den korrekten Preisrahmen weiter. Erweiterte Optionen ändern den Rahmen und die Betreuung korrekt. Desktop-Menü: 30 Bereichs-/Betriebslinks. Mobiles Menü: geöffnet, Bereich Sport gewählt, Fitnessstudio aufgerufen und Menü geschlossen.

Tabs sind mit Pfeiltasten erreichbar und mit Enter auswählbar; der Tastaturfokus ist sichtbar. Der Download-Endpunkt liefert UTF-8-Text mit Attachment-Header und korrekter Auswahl. Der Kontaktkalender wurde öffentlich geöffnet und zeigt Discovery mit 30 Minuten. Es wurde keine Buchung ausgelöst. Die E-Mail-Verweise öffnen einen lokalen Entwurf.

Der Praxisfall bleibt unverändert als gemessene Verbesserung mit ausdrücklich gekennzeichneter Hochrechnung formuliert. 50 % gelten für die betrachteten Aufgaben, nicht als Zusage für jeden Betrieb.


## 7. Oktober 2026 — Ressourcen und digitale Assistenten als Inhaltsprobe

Die Referenz [OpusJake](https://opusjake.ai/) wurde live gelesen und visuell geprüft. Die Homepage führt von kostenlosen Anleitungen und Vorlagen über Kontakt/Community zur persönlichen Umsetzung. Ihre kleinen Figuren schweben leicht und tragen Programmsymbole. Daraus folgt für Marco die eigene Inhaltsidee: lernen → eine Alltagshilfe ausprobieren → gemeinsam einrichten lassen. Eine Community oder ein regelmäßiger Newsletter wird daraus nicht automatisch versprochen.

Die bestehende Startseite und das Markendesign werden durch diese Probe nicht ersetzt. `/assistenten-vorschau` ist eine eigenständige, nicht indexierte Inhalts- und Bewegungsprobe in derselben Farbwelt. Sie enthält drei selbst gezeichnete Vektorfiguren für Postfach, Termine und Unterlagen. Keine Figuren, Logos oder Grafikdateien der Referenz wurden übernommen.

Die visuelle Darstellung macht die Aufgabe sichtbar: Eingangsinformationen → Helfer mit vereinbarter Regel → Ergebnis zur Prüfung. Auf Desktop verläuft sie horizontal, auf schmalen Bildschirmen vertikal. Nach Start läuft ein endlicher Beispielablauf von 2,4 Sekunden. Das Ergebnis bleibt anschließend stehen, bis es geprüft oder zurückgesetzt wird. Die Figuren schweben und blinzeln zurückhaltend. Bewegung ist abschaltbar; reduzierte Bewegung wird berücksichtigt. Es gibt keine Verbindung zu echten Kundenkonten und keinen KI-Aufruf.

Die Ressourcen-Probe hat drei Einstiege: vorhandene Programme verbinden, ChatGPT für Entwürfe und Projekte nutzen, Claude mit Unterlagen und festen Projektanweisungen einsetzen. Jeder Einstieg bietet eine konkrete erste Aufgabe und einen offiziellen Quellenlink. Verfügbarkeit und Schreibrechte werden abhängig von Anbieter, Konto und Freigaben beschrieben.

Die spätere Ressourcenbibliothek sollte jeder Anleitung dieselbe Struktur geben: konkrete Büroaufgabe, passende Programme, kurze Schritte, ein kopierbarer Auftrag und ein erkennbares Ergebnis. Ein eigener Ressourceneintrag muss auf tatsächlicher Erfahrung oder verifizierter Dokumentation beruhen. Die persönliche Leistung schließt Auswahl, Einrichtung, Regeln, gemeinsame Übung und Betreuung ein.

Offizielle Grundlagen: [ChatGPT mit E-Mails](https://learn.chatgpt.com/use-cases/manage-your-inbox), [ChatGPT-Projekte](https://learn.chatgpt.com/docs/projects), [Claude-Verbindungen](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities), [Claude-Projekte](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects). Geprüft am 7. Oktober 2026. Die OpusJake-Inhalte sind Inspiration für die Inhaltsarchitektur, keine technische Dokumentation der Anbieter.

Prüfung der Assistenten-Probe: Alle drei Abläufe zeigen nach dem Vorbereiten ihre jeweiligen Ergebnisse, lassen sich als geprüft markieren und zurücksetzen. Die Bewegungssteuerung setzt die Figurenanimation auf „none“. Bei 390, 768 und 1280 px gibt es keine horizontale Überbreite; ein Terminablauf wurde zusätzlich auf Mobilgeräten durchgespielt. Der Ressourcenbereich öffnet seine Quellenlinks. Build und Änderungsprüfung sind erfolgreich. Die Vorschau ist unter `docs/design-previews/assistenten-probe.jpg` gesichert.


## 7. Oktober 2026 — Assistenten auf allen Betriebsseiten und Veröffentlichung

Die freigegebene Figuren- und Ablaufsprache ist in die Startseite sowie alle 25 Betriebsseiten und fünf Bereichsseiten integriert. Jede der 75 Alltagssituationen hat einen eigenen passenden Namen, Arbeitstext und eine konkrete Regel in `src/lib/sectors.json`. Vorhandene Anfragen, Ergebnisse und die fünf Darstellungsarten bleiben erhalten. Termine und Kurszeiten sind wählbar; Aufgaben können abgehakt werden. Der neue Ablauf führt über Vorbereiten und Prüfen, ohne echte Buchungen oder Nachrichten auszulösen.

Der öffentliche Ressourcenbereich liegt unter `/ressourcen` und ist in Navigation und Sitemap aufgenommen. Die frühere Assistenten-Probe führt auf die integrierte Hilfe der Startseite. Die vorhandenen Designproben bleiben nicht indexiert.

Vor Veröffentlichung geprüft: alle 75 individuellen Abläufe auf richtigen Helfer, Regel, Ergebnis, manuelle Prüfmarkierung und exakte Übergabe von Branche/Aufgabe in den Rechner. 35 öffentliche Inhaltsseiten bei tatsächlichen 390, 768 und 1280 px: 105 Prüfungen ohne horizontale Überbreite. Startseiten-Assistenten, 30 Bereichs-/Betriebslinks in der Desktop-Navigation und Ressourcenwechsel funktionieren. Katalog-, Angebots- und HTTP-Prüfungen sowie der Produktionsbuild sind erfolgreich.

Hosting: vorhandenes Vercel-Projekt `kennenlernen-site` und bestehende eigene Domains. Vorherige Produktion: `kennenlernen-site-bcfgfhngi-marco-9913s-projects.vercel.app` (Deployment `dpl_AJgCJZefa32BdReMujWVTDtxLwxE`). Zugangsdaten und interne Arbeitsunterlagen sind vom Upload ausgeschlossen. Zunächst wird eine Veröffentlichungsversion ohne Domainumschaltung erstellt; nach erfolgreicher Prüfung werden die bestehenden Domains umgeschaltet.

Die Hosting-Version ist mit Next.js 16.3.6 fertig gebaut. Laufzeitprüfung mit `npm audit --omit=dev`: keine gemeldeten Sicherheitslücken. Neun Meldungen betreffen weiterhin die Entwicklungswerkzeuge; es wurden keine erzwungenen Downgrades angewendet. Die geschützte Vercel-Version wurde über den bestehenden Hosting-Zugang auf tatsächliche Inhalte geprüft. Domainumschaltung noch ausstehend: Die automatische Freigabeprüfung verlangt eine direkte menschliche Bestätigung für die Umschaltung der beiden bestehenden öffentlichen Domains. Veröffentlichungsversion und Prüfstände sind in `docs/release-2026-10-07.json` dokumentiert.

Veröffentlichung abgeschlossen: Nach der direkten Freigabe „Ja, auf beiden Domains live schalten“ wurde Deployment `dpl_7TP74unsC6pf1QWtLU3sywaZLkJE` auf die bestehenden Domains umgeschaltet. Beide liefern öffentlich die neue Website aus. Alle 30 Betriebs-/Bereichsseiten wurden auf tatsächliche Inhalte, Assistentenregeln, Canonical und Sitemap geprüft. Der Angebotsdownload liefert die richtige Datei und Beispielpreise. Der Salon-Ablauf wurde auf der öffentlichen Website einschließlich Zeitwahl, Prüfmarkierung und Rechnerübergabe durchgespielt; das mobile Menü führt zu den kostenlosen Hilfen. Veröffentlichung und Prüfstand sind in `docs/release-2026-10-07.json` dokumentiert.
