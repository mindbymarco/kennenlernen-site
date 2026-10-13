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

Das bestehende Vercel-Projekt `kennenlernen-site` ist mit `www.marcogrotemeyer.de` und `marcogrotemeyer.de` verbunden. Eine Veröffentlichung kann vor der Domainumschaltung separat gebaut und geprüft werden:

```sh
vercel deploy --prod --skip-domain --yes
vercel promote <Deployment-URL> --yes
```

`.vercelignore` schließt Zugangsdaten, lokale Builds, Tests, interne Dokumentation und Arbeitsdateien aus. Veröffentlichungen werden über das angemeldete Vercel-Konto ausgeführt; Zugangsdaten gehören nicht ins Projekt.

## Maßgebliche Dateien

- `src/lib/sectors.json`: individuelle Betriebsfälle, Assistentenrollen und Regeln.
- `src/components/SectorDemo.tsx`: fünf Darstellungsarten und der vorbereiten/prüfen-Ablauf.
- `src/components/AssistantDemo.tsx`: eigene Figuren und allgemeine Startseitenbeispiele.
- `src/components/OfferCalculator.tsx`: unverbindlicher Rechner mit Beispielpreisen.
- `docs/design-system.md`: Markendesign, Besucherführung und Prüfprotokolle.

Die Demonstrationen verwenden erfundene Angaben. Sie buchen keine Termine und versenden keine Nachrichten. Einrichtung, Einführung und persönliche Begleitung werden im Gespräch konkret vereinbart. Der freigegebene Praxisfall trennt gemessene Zeitersparnis von einer Hochrechnung des Zeitwerts.
