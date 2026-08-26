# GEO-Audit — marcogrotemeyer.de

**Datum:** 2026-08-23  
**Scope:** Generative Engine Optimization für Zitation in Perplexity / ChatGPT / Google AI Overviews. **Zielgebiet DACH Mittelstand, explizit ohne OWL/Bielefeld-Fokus** (national).  
**Auditierte Artefakte:** `index.html:1-27`, `src/components/*`, `sitemap.xml`, `robots.txt`, `public/og-image.jpg`, `vercel.json`

## Executive Summary

| Dimension | Score | Kurzbefund |
|---|---|---|
| 1 Content-Struktur | 6/10 | Heading-Outline sauber (H1→H2), Entities vorhanden aber nicht als zitierbare Definitionen ausgezeichnet |
| 2 FAQ-Abdeckung | 5/10 | 8 solide FAQs, 4-5 AI-Suchintents fehlen (Kosten-Transparenz, ChatGPT-Limits, Methoden-Vergleich) |
| 3 Semantisches HTML | 6/10 | `header/nav/main/section/footer` korrekt, aber keine `aria-labelledby`, kein `time/address`, Listen teils ohne `dl` |
| 4 Interne Verlinkung + Sitemap | 5/10 | Anker-Nav vollständig, aber `sitemap.xml:9` verweist noch auf `#angebot` (existiert nicht mehr → 404-Anker), Orphan-Potential für „Ablauf" |
| 5 Schema.org + Externe Citations | 2/10 | **Kein `application/ld+json`** im gesamten Projekt (`Grep` leer) — für GEO kritisch. Keine `sameAs`, keine `Organization`/`Person` Verknüpfung |

**Gesamt-Readiness:** 4.8/10 — Starke Inhalte & Design, aber für KI-Zitation fehlen die maschinenlesbaren Anker. Mit Phasen 1-2 des 90-Tage-Plans auf 8/10 hebbar ohne neuen Blog.

---

## 1. Content-Struktur (6/10)

**Positiv:**
- `index.html:6` einziger `H1` (Hero): „KI-Erfolg entsteht nicht beim Tool..." — klare Hauptthese, E-E-A-T Verankerung über `Hero.jsx:53-84` (Befähigung + Umsetzung, Lede + Profile-Strip mit „AI Builder · Remote DACH").
- `SectionHead.jsx` liefert konsistente H2 je Section (`pain`, `workspace`, `use-cases`, `services`, `prozess`, `ueber-mich`, `faq`, `erstgespraech`) — Outline ohne Sprünge.
- 4-Pillar-Narrativ vorhanden (Hero These → Pain → Workspace Proof → Builds → Säulen → Ablauf). Zitierfähige Entities existieren als Begriffe, aber nicht als Definitionen.

**Lücken:**
- `src/components/Services.jsx`: Säulen listen Leistungen als `ul>li` — für KI besser als `dl` mit `dt` (Begriff) + `dd` (Erklärung), aktuell nicht fragmentierbar für AI Overviews.
- `src/components/Workspace.jsx:15-30`: „Was drin ist" implizit, aber kein zitierbarer Glossar-Block („Was ist ein AI Workspace?"). AI Overviews bevorzugen 40-60 Wort Definitionen.
- Keine Datums/Aktualitäts-Signale (`time` fehlt) — für „KI 2026 Mittelstand" Queries schwächer.
- OWL noch im Text (`Hero.jsx:83` „Bielefeld / Remote DACH", `About.jsx:5-11` „Region OWL...") — laut Vorgabe national halten, OWL de-emphasieren (nicht löschen, aber nicht optimieren).

**Belegstellen:** `index.html:6`, `src/components/SectionHead.jsx:1-28`, `src/components/Services.jsx:1-45`, `src/components/Workspace.jsx:10-60`

## 2. FAQ-Abdeckung (5/10)

**Heute 8 FAQs (`src/components/Faq.jsx:5-35`):**
ChatGPT reicht nicht · 30 MA Lohnt sich · Kosten · Erfolg messen · Datenschutz/Betriebsrat · Selbst bauen · Dauer bis Wirkung · Wie starten.

**Deckt ab:** Einwandbehandlung solide, Antworten 40-65 Wörter — gute Länge für Zitation.

**Fehlt für GEO (Gap vs. Perplexity/ChatGPT Intents, DACH-Mittelstand):**

| Fehlende Frage (Vorschlag) | Intent |
|---|---|
| Was kostet eine KI-Beratung für den Mittelstand konkret? (Tagessatz vs. Sprint-Pauschale, Beispiel-Rechnung 30 MA) | „KI Beratung Kosten Mittelstand" |
| Wo stößt ChatGPT im Unternehmen an Grenzen vs. Plattform-Lösung? | „ChatGPT Grenzen Unternehmen" |
| Welche KI-Use-Cases bringen im Mittelstand am schnellsten ROI? | „KI Use Cases Mittelstand Beispiele" |
| Wie läuft ein Use-Case-Discovery-Workshop ab (4-Säulen-Framework)? | „Use Case Discovery Methode" — eigene Entity schärfen |
| Wie sichern wir EU-DSGVO + Betriebsrat bei KI-Einführung ab? (erweiterte Fassung) | Vertiefung zu bestehender FAQ, heute zu kurz für Zitation |

→ Von 8 auf 11-12 erweitern, je Antwort 45-60 Wörter, mit konkretem Zahlen-Beispiel wo möglich.

## 3. Semantisches HTML (6/10)

**Positiv:**
- `src/App.jsx`: `header` (Nav) → `main` → 8× `section` → `footer`. Korrekt.
- `src/components/Nav.jsx:31` `aria-label="Hauptnavigation"`, `src/components/Faq.jsx: Button aria-expanded` — vorbildlich.
- `src/components/Pain.jsx`, `Workspace.jsx`: `article` für wiederholbare Items.

**Lücken:**
- Keine `section aria-labelledby` (H2 hat keine `id`). Screenreader + KI-Parser verlieren den Anker-Namen.
- `About.jsx`: Adresse/Region als `span` statt `address`.
- `Faq.jsx`: Struktur ist `div>button + div`, nicht `dl>dt/dd` — für `FAQPage` Schema weniger natürlich.
- Kein `<time datetime>` für „Stand 2026".

**Fix-Aufwand:** Klein, nur Attribute + Wrapper.

## 4. Interne Verlinkung + Sitemap (5/10)

**Positiv:**
- `Nav.jsx:4-10` verlinkt alle Hauptanker, `Footer.jsx` verlinkt Legal, `Cta.jsx` Cal.com + mailto.

**Lücken:**
- `sitemap.xml:9` → `/#angebot` — Anker existiert nicht mehr (heute heißt die Section `services` / „Was wir tun"). Führt zu 404-Fragment, schwächt Crawling + GEO. Ebenso `#prozess` vs. `id="prozess"` ok, aber `#angebot` muss → `#services`.
- `robots.txt:3-4` `Disallow: /impressum.html` + `Disallow: /datenschutz.html` während beide in `sitemap.xml:29-37` gelistet sind — widersprüchlich. Für GEO: Legal nicht disallowen (geringe Prios 0.2 ok, aber nicht blocken).
- Keine Querverlinkung zwischen inhaltlichen Sections (z. B. Builds → Ablauf Schritt 2 „Enablement-Sprint", Services Säule 1 → Workspace). KI folgt internen Links für Kontext.

## 5. Schema.org + Externe Citations (2/10) — Kritisch

**Heute:**
- `Grep` über `src/` + `index.html`: **0 Treffer** für `ld+json`, `schema.org`, `FAQPage`, `Person`, `Organization`. Kein maschinenlesbarer Graph — Perplexity/ChatGPT müssen alles aus Fließtext raten.

**Fehlt:**
- `Person` (Marco Grotemeyer) + `Organization` (marcogrotemeyer.de) mit `sameAs`: LinkedIn, Beyond925, Founders Foundation — freigegeben, aber nicht ausgezeichnet.
- `FAQPage` (8→12 Fragen) — direkt aus `Faq.jsx` speisen.
- `Service` (3 Säulen: Befähigung/Academy, Adoption/Rollout, Agentic Engineering) + `HowTo` (4 Schritte Ablauf) — für AI Overviews Schritt-Antworten.
- `WebSite` + `WebPage` Grundgerüst.
- Externe Citations: kein Presse-/Verzeichnis-Backlink im Code (erwartbar bei Solo-Site, aber `sameAs` ist der erste Schritt; echte externe Zitationen nur off-site).

**Impact:** Ohne Schema verschenkt die Site den größten GEO-Hebel. Mit Schema (Phase 1 des Plans) sofort zitierfähiger, ohne neuen Content.

---

## Priorisierte Befunde (nach Impact)

| Prio | Fix | Datei | Aufwand |
|---|---|---|---|
| P0 | JSON-LD Grundgerüst (Person+Organization+WebSite) + `sameAs` | `index.html` | 0,5h |
| P0 | `FAQPage` Schema (aus bestehenden 8, später 11-12) | `index.html` | 0,5h |
| P0 | `sitemap.xml` Anker `#angebot`→`#services` + `robots.txt` Disallow entfernen | `sitemap.xml`, `robots.txt` | 0,2h |
| P1 | `section aria-labelledby` + H2 `id` ergänzen | `SectionHead.jsx` + alle Sections | 0,5h |
| P1 | FAQ um 3-4 Fragen erweitern (siehe Gap) | `src/components/Faq.jsx` | 1h |
| P1 | Glossar-Block `dl` („Was ist ein AI Workspace? / Agentic Engineering?") | `Workspace.jsx` oder neue Mini-Section | 1h |
| P2 | `Service` + `HowTo` Schema | `index.html` | 0,5h |
| P2 | Interne Querverlinkungen (Builds→Ablauf, Services→Workspace) | `DemoBuilds.jsx`, `Services.jsx` | 0,3h |
| P2 | `sameAs` extern pflegen (LinkedIn, Beyond925) — nur Markierung im Schema, echte Backlinks off-site | `index.html` | 0,1h |

Ohne OWL-Optimierung — alle neuen Inhalte mit „DACH Mittelstand", „Mittelstand", „KI-Transformation" formulieren, Bielefeld nur im Footer/Profil belassen.
