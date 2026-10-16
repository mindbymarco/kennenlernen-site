# marcogrotemeyer.de

Persönliche Bürohilfe und digitale Assistenten für kleine Unternehmen. Die Website verwendet Next.js, React, Tailwind und vorhandene shadcn/Base-UI-Komponenten.

## Lokal starten

```sh
npm install
npm run dev -- --port 3100
```

Vorschau: http://localhost:3100/

## Prüfen

```sh
npm run build
node scripts/check-offer.mjs
CHECK_SITE_ORIGIN=http://localhost:3100 node scripts/check-sectors.mjs
```

Der Katalog enthält 25 Betriebe mit jeweils drei individuellen Alltagssituationen, Assistentenrollen und Arbeitsregeln. Die fünf Bereichsseiten verwenden Beispiele aus ihrem eigenen Bereich. Die Startseite zeigt drei allgemeine Assistenten. `/ressourcen` bietet kostenlose Einstiege und offizielle Quellen.

## Veröffentlichung

Seit 15.10.2026 liegt die Seite bei **Cloudflare Workers** (Worker `marcogrotemeyer-de`, Konto marcoicloudalternative@gmail.com), nicht mehr bei Vercel. Next.js wird statisch exportiert (`output: "export"` → `out/`).

- **Push auf `main` = Deploy.** Cloudflare Workers Builds baut bei jedem Push auf `main` (`npm run build`, dann `npx wrangler deploy`) und veröffentlicht live auf `www.marcogrotemeyer.de`.
- Arbeiten auf einem Branch, PR öffnen, lokal prüfen (`npx wrangler@4.145.0 dev`), dann mergen.
- Manuell deployen geht auch: `npx wrangler@4.145.0 deploy` (baut selbst mit `next build`).
- Zurückrollen: im Cloudflare-Dashboard unter Workers → `marcogrotemeyer-de` → Deployments eine frühere Version wählen.
- Weiterleitungen stehen in `public/_redirects`, Sicherheits- und Cache-Header in `public/_headers`. `worker/index.js` beantwortet Range-Anfragen für Videos (Safari).
- Es gibt keine Server-Funktionen und keine Zugangsdaten im Projekt.

## Maßgebliche Dateien

- `src/lib/sectors.json`: individuelle Betriebsfälle, Assistentenrollen und Regeln.
- `src/components/SectorDemo.tsx`: fünf Darstellungsarten und der vorbereiten/prüfen-Ablauf.
- `src/components/AssistantDemo.tsx`: eigene Figuren und allgemeine Startseitenbeispiele.
- `src/components/OfferCalculator.tsx`: unverbindlicher Rechner mit Beispielpreisen.
- `docs/design-system.md`: Markendesign, Besucherführung und Prüfprotokolle.

Die Demonstrationen verwenden erfundene Angaben. Sie buchen keine Termine und versenden keine Nachrichten. Einrichtung, Einführung und persönliche Begleitung werden im Gespräch konkret vereinbart. Der freigegebene Praxisfall trennt gemessene Zeitersparnis von einer Hochrechnung des Zeitwerts.
