# 90-Tage GEO-Aktionsplan — marcogrotemeyer.de

**Ziel:** In Perplexity / ChatGPT / Google AI Overviews häufiger als Quelle zitiert werden für DACH-Mittelstand Queries rund um „KI Use Cases finden, priorisieren und produktiv machen". **Explizit ohne OWL/Bielefeld-Fokus** — national formulieren, OWL/Bielefeld nur als Profil-Detail belassen.

**Ausgang:** Audit `docs/geo-audit.md` — Score 4.8/10 → Ziel 8/10 ohne neuen Blog, nur On-Site + Schema + gezielte externe Signale. Freigaben: OWL vermeiden, Beyond925/LinkedIn/`sameAs` ok, leichtes Content-Budget (1 Glossar-Block + FAQ-Erweiterung) ok.

---

## Woche 1-2 — Fundament (On-Site, kein neuer Content nötig)

| Maßnahme | Datei | Erledigt |
|---|---|---|
| JSON-LD `Person` (Marco) + `Organization` (marcogrotemeyer.de) + `WebSite`/`WebPage` mit `sameAs` [LinkedIn, Beyond925, Founders Foundation] | `index.html` `<head>` | ☐ |
| JSON-LD `FAQPage` aus bestehenden 8 FAQs generieren | `index.html` | ☐ |
| `sitemap.xml:9` Fix `#angebot` → `#services`; `robots.txt:3-4` Disallows entfernen (Legal nur niedrige Prios) | `sitemap.xml`, `robots.txt` | ☐ |
| `section aria-labelledby` + H2 `id` je Section ergänzen | `SectionHead.jsx` + alle Sections | ☐ |
| OG-Image bereits live (`og:image`/`twitter:image`) validieren (opengraph.xyz) | — | ☑ |

**Erfolgskriterium Ende W2:** Schema-Validator (validator.schema.org + Google Rich Results) grün, Sitemap ohne 404-Fragment, Lighthouse SEO 100.

## Woche 3-6 — Content-Verdichtung (zitierfähige Antworten)

| Maßnahme | Datei | Erledigt |
|---|---|---|
| FAQ 8→11/12 erweitern (siehe Audit Gaps), je 45-60 Wörter, ein Zahlenbeispiel bei Kosten/ROI | `src/components/Faq.jsx` + `FAQPage` Schema erweitern | ☐ |
| Glossar-Block `dl` auf bestehender Seite: „Was ist ein AI Workspace?", „Was ist Agentic Engineering?", „Was ist das 4-Säulen-Framework?" — je 40-60 Wörter, als `DefinedTerm` oder in `Service` Description | `src/components/Workspace.jsx` (oder Mini-Section vor Services) | ☐ |
| Methodik-Anker schärfen: „4-Säulen-Framework" als eigene H3 + 1 Satz Definition (zitierbare Entity) | `src/components/Services.jsx` | ☐ |
| Interne Querverlinkungen: Builds „NL→SQL" → Ablauf Schritt 3 „Pilot", Services Säule 1 → Workspace | `DemoBuilds.jsx`, `Services.jsx` | ☐ |
| Wording-Pass: „DACH Mittelstand" / „Mittelstand" konsistent, OWL nur Footer/Profil | alle Komponenten | ☐ |

**Intents neu abgedeckt:** „KI Beratung Kosten Mittelstand", „ChatGPT Grenzen Unternehmen", „KI Use Cases Mittelstand schnellster ROI", „Use Case Discovery Methode", „KI DSGVO Betriebsrat Absicherung".

## Woche 7-10 — Autorität (Off-Site, leichtgewichtig)

| Maßnahme | Kanal | Erledigt |
|---|---|---|
| `sameAs` im Schema bereits gesetzt — LinkedIn-Profil + Beyond925 + Founders Foundation verifizieren (Links erreichbar) | `index.html` | ☐ |
| 1-2 externe Citations anstoßen (kein Blog-Zwang): z. B. Branchenverzeichnis-Eintrag (mittelstand-digital), Podcast/Gastbeitrag-Pitch mit Link auf `marcogrotemeyer.de/#use-cases` | Off-Site | ☐ |
| LinkedIn: 2 Posts mit Link auf vertiefte FAQ-Antwort + Glossar-Begriff (UTM sauber) — signalisiert Frische ohne Blog-Hub | LinkedIn | ☐ |

## Woche 11-12 — Messung & Nachschärfen

| Maßnahme | Tool | Erledigt |
|---|---|---|
| GSC: AI Overview Impressions + Klicks auf Ziel-Queries tracken (Vergleich W1 vs W12) | Google Search Console | ☐ |
| Spot-Checks: 10 Ziel-Queries in Perplexity, ChatGPT, Google AI Mode manuell testen — Zitationsrate notieren | Manuell | ☐ |
| Schema erneut validieren, Sitemap neu einreichen, OG-Preview erneut testen | Validatoren | ☐ |
| Entscheidung: Reicht On-Site? Falls Zitation < Ziel → Blog-Hub als Phase 2 planen, sonst bei leichtgewichtigem Modell bleiben | — | ☐ |

---

## Messung

- **Primär:** Zitationsrate auf 10 Ziel-Queries (z. B. „KI Use Cases Mittelstand finden", „KI Beratung Mittelstand Kosten", „ChatGPT reicht nicht Unternehmen", „DSGVO KI Betriebsrat Checkliste", „RAG Wissensdatenbank Mittelstand"...) — 0/10 heute → Ziel ≥3/10 nach 90 Tagen.
- **Sekundär:** GSC AI Overviews, Rich Results (FAQ), OG-CTR (LinkedIn/Slack).
- **Kein OWL-Tracking** — alle Queries national.

## Nicht-Ziele (bewusst)

Kein neuer Blog-Hub, kein tägliches Posten, keine Keyword-Stuffing, keine OWL-Landingpages.

## Nächster Schritt

Freigabe → Woche 1-2 direkt umsetzen (Schema + Fixes) in einem Rutsch, dann W3-6 Content. Schätzung gesamt On-Site: ~4-5h Entwicklung.
