# Individuelle Branchenführung und Komponentenentscheidung

Stand: 6. Oktober 2026. Aktueller lokaler Stand nach Ausbau von einer allgemeinen Startseite zu Bereichs- und Betriebsseiten.

## Seitenstruktur

Die Navigation „Welchen Betrieb führen Sie?“ zeigt fünf Bereiche und darunter jeweils fünf konkrete Betriebe. Die Bereichsauswahl öffnet eine eigene Bereichsseite. Die Betriebsauswahl öffnet direkt die individuelle Betriebsseite am Seitenanfang. Auf dem Handy werden die Bereiche in einem aufklappbaren Menü gezeigt.

Es gibt fünf Bereichsseiten, 25 individuelle Betriebsseiten und eine Gesamtübersicht unter `/branchen`. Jede Detailseite führt durch den jeweiligen Alltag, drei konkrete Hilfen, mögliche Ergebnisse, einen kontextbezogenen Angebotsrechner und die persönliche Zusammenarbeit.

75 Fälle sind individuell formuliert. Die Bereiche greifen drei passende Fälle ihrer zugehörigen Betriebe auf. Die Beispiele sind erfunden und erläutern eine mögliche Hilfe; sie sind keine Kundenreferenz, Live-Buchung oder Zusage einer fertigen Programmanbindung.

## Bibliotheken und Bausteine: geprüfte Alternativen

| Bibliothek / Muster | Was geprüft wurde | Entscheidung |
| --- | --- | --- |
| [shadcn + Base UI](https://ui.shadcn.com/docs/components/base/navigation-menu) | Navigation Menu, Sheet, Tabs, Card, Table, Toggle Group, Checkbox, Progress und vorhandene Formulare | Grundlage für alle Seiten. Die Bedienung bleibt über Branchen hinweg vertraut; Inhalte und die Darstellung der Aufgabe unterscheiden sich. |
| [Mantine Calendar](https://mantine.dev/dates/calendar/) und [Timeline](https://mantine.dev/core/timeline/) | Termin- und chronologische Ablaufmuster | Als Alternative und Vergleich gelesen. Eine kleine Auswahl beschrifteter Zeiten erklärt den Salonalltag besser als ein leerer Monatskalender. Chronologische Listen passen zum Nachhalten von Absprachen. Kein zweites Designsystem installiert. |
| [shadcn Calendar](https://ui.shadcn.com/docs/components/base/calendar) | Datumsauswahl, Monats- und Bereichsauswahl auf React DayPicker | Geeignet, sobald ein echtes Datum ausgewählt werden muss. Auf der Angebotsseite zeigen drei verständliche Beispielzeiten die Hilfe unmittelbar; eine Monatsauswahl wurde deshalb nicht hinzugefügt. |
| [FullCalendar](https://fullcalendar.io/docs) | Vollständige Kalenderansichten und Terminereignisse | Geeignet für eine tatsächliche Kalenderanwendung mit Termindaten. Diese Seiten erklären eine Dienstleistung; Kursplan und einfache Zeitauswahl lösen den Kommunikationsbedarf. Keine Kalenderanwendung oder angebundene Buchungsfunktion vorgetäuscht. |
| [Magic UI](https://magicui.design/docs/components/animated-beam) / [Aceternity](https://ui.aceternity.com/components) | Verbindungsmuster und animierte Marketingkomponenten aus der vorherigen Exploration | Vergleich bleibt relevant. Ruhige, beschriftete Ergebnisse stehen im Vordergrund. Es gibt keine automatische Dauerschleife und keine zusätzlichen Effektpakete. |

Ergänzende Designreferenzen: [Cal.com-Analyse](https://getdesign.md/design-md/cal/preview) für eindeutige Terminoberflächen und [Zapier-Analyse](https://getdesign.md/design-md/zapier/preview) für leicht nachvollziehbare Abläufe. Die Analysen sind unabhängige Interpretationen aus der [VoltAgent-Sammlung](https://github.com/VoltAgent/awesome-claude-design), keine offiziellen Unternehmensdesignsysteme. Die Beschreibungen wurden gelesen; die tatsächlich gebauten lokalen Komponenten wurden in Desktop- und Handyansichten visuell geprüft.

## Warum die visuellen Komponenten zur jeweiligen Zielgruppe passen

| Bereich | Wichtigster Alltag | Visuelles Muster | Nutzen für eine nichttechnische Person |
| --- | --- | --- | --- |
| Handwerk & Haus | Anfrage verstehen, Rückfrage und nächsten Schritt festhalten | Beschriftete Auftragsübersicht aus Karten | Die Information wird vom Anliegen über die offene Frage zum nächsten Schritt geordnet. Das funktioniert ohne technisches Ablaufdiagramm. |
| Schönheit & Gesundheit | Terminfragen, organisatorische Hinweise und Verschiebungen | Große auswählbare Zeitblöcke aus Toggle Group und Card | Leistung und Beispielzeit sind sofort sichtbar. Die Person entscheidet selbst; es wird kein echter Termin gebucht. Praxisinformationen werden als Informationsvorlage gezeigt. |
| Sport & Freizeit | Erstbesuch, Kurszeiten und Anmeldung | Kurzübersicht als Table plus große Kurs-/Zeitauswahl | Ein Interessent und ein Betreiber erkennen Kursname, Zeit und Anmeldeweg. Die Informationen stammen im echten Betrieb aus freigegebenen Angaben. |
| Service vor Ort | Fehlende Angaben und offene Einsatzabsprachen | Abhakbare Aufgabenliste aus Field, Checkbox und Progress | Die Person sieht konkrete nächste Aufgaben. Fortschritt bezieht sich nur auf die drei Beispielaufgaben; er behauptet keinen real erledigten Auftrag. |
| Handel & Selbstständige | Kundenantworten, Angebote und begleitende Unterlagen | Dokumentvorschau aus Card und klaren Textabschnitten | Der erste Entwurf wird sichtbar. Bestände, Preise, Bedingungen und fachliche Angaben bleiben als Prüfschritt beim Betrieb. |

Diese Zuordnung ist keine starre Vorgabe für jede Aufgabe. Angebots- und Werbetexte werden auch im Handwerk als Dokument gezeigt. Rückrufaufgaben werden auch in Salons als Liste gezeigt. Im Sportbereich verwenden Kurs- und Einstiegsfälle die Kursübersicht, eine Workshopunterlage verwendet dagegen die Dokumentvorschau.

## Eigene Inhalte je Betrieb

| Betrieb | Individuelle Aufgaben |
| --- | --- |
| Handwerk | Kundenanfragen auf einen Blick. · Aus einer Gesprächsnotiz wird eine Aufgabe. · Angebote mit einer brauchbaren Vorlage starten. |
| Heizung & Sanitär | Wartungsanfragen geordnet vorbereiten. · Terminwünsche in eine klare Übersicht bringen. · Wartungsanschreiben nicht jedes Mal neu tippen. |
| Elektrobetriebe | Besichtigungen mit den wichtigen Angaben vorbereiten. · Materialrückfragen mit Wiedervorlage sammeln. · Leistungsübersichten strukturiert vorbereiten. |
| Malerbetriebe | Raumangaben und Terminwünsche sammeln. · Farbwünsche und Freigaben nachhalten. · Wiederkehrende Angebotstexte vorbereiten. |
| Tischlereien | Wünsche vor dem Aufmaß ordnen. · Änderungswünsche an einem Ort sammeln. · Angebotsunterlagen mit festen Abschnitten vorbereiten. |
| Friseursalons | Terminanfragen mit einer passenden Antwort vorbereiten. · Erinnerungen in Ihrer Terminlösung sinnvoll nutzen. · Öffnungszeiten und Aktionen leichter ankündigen. |
| Kosmetikstudios | Fragen zum Ablauf mit Vorlagen beantworten. · Terminwünsche und Rückmeldungen übersichtlich halten. · Studioinformationen als einfache Beiträge vorbereiten. |
| Nagelstudios | Leistung und Terminwunsch zuerst festhalten. · Offene Terminabsprachen sichtbar machen. · Eigene Arbeiten mit einem kurzen Text zeigen. |
| Massagebetriebe | Häufige organisatorische Fragen vorbereiten. · Verschiebungen und Rückmeldungen geordnet halten. · Informationen zum ersten Besuch übersichtlich schreiben. |
| Physiotherapiepraxen | Organisatorische Auskünfte mit geprüften Vorlagen geben. · Offene Terminrückrufe übersichtlich nachhalten. · Praxisinformationen übersichtlich bereitstellen. |
| Kleine Fitnessstudios | Interessenten zum nächsten Schritt führen. · Kursinformationen an einem Ort vorbereiten. · Kursankündigungen ohne leere Seite starten. |
| Yogastudios | Fragen zum Einstieg ruhig beantworten. · Bestätigte Kurszeiten übersichtlich zeigen. · Workshopunterlagen leichter vorbereiten. |
| Pilatesstudios | Anfragen zum ersten Kurs vorbereiten. · Zeiten und Anmeldung übersichtlich zusammenstellen. · Ein neues Kursangebot einfach ankündigen. |
| Tanzschulen | Schnupperanfragen übersichtlich vorbereiten. · Kurszeiten verständlich zeigen. · Tanzabende mit fertigen Abschnitten ankündigen. |
| Kampfsportschulen | Einstiegsanfragen passend vorbereiten. · Trainingsgruppen verständlich darstellen. · Hinweise zum ersten Besuch vorbereiten. |
| Reinigungsbetriebe | Objektangaben vor der Besichtigung sammeln. · Änderungen und offene Aufgaben festhalten. · Wiederkehrende Leistungen übersichtlich beschreiben. |
| Gartenpflege | Pflegewünsche vor dem Besuch ordnen. · Offene Absprachen nach einem Einsatz festhalten. · Saisonale Leistungen mit Vorlagen erklären. |
| Autowerkstätten | Serviceanfragen mit den nötigen Angaben vorbereiten. · Ersatzteil- und Abholrückfragen nachhalten. · Begleitende Kundentexte mit Vorlagen schreiben. |
| Tierpflege | Terminwünsche mit passenden Rückfragen vorbereiten. · Offene Verschiebungen festhalten. · Organisatorische Hinweise vorab verständlich machen. |
| Ferienwohnungsvermietung | Anfragen mit den wichtigsten Angaben ordnen. · Anreise und nächste Aufgaben auf einer Liste halten. · Anreiseinformationen mit einer festen Vorlage senden. |
| Einzelhandel | Produktanfragen mit passenden Vorlagen beantworten. · Offene Rückmeldungen zu Bestellungen festhalten. · Aktionen mit Ihren eigenen Angaben ankündigen. |
| Floristik | Anlass und Wünsche vor der Rückmeldung sammeln. · Offene Abholabsprachen sichtbar halten. · Eigene Arbeiten mit einem einfachen Beitrag zeigen. |
| Fotografie | Shootingwünsche übersichtlich zusammenfassen. · Organisatorische Shootinghinweise mit Vorlagen teilen. · Offene Auswahl- und Rückmeldeschritte festhalten. |
| Veranstaltungsservice | Veranstaltungsangaben für das erste Gespräch ordnen. · Aus Absprachen eine übersichtliche Aufgabenliste machen. · Ablaufunterlagen mit festen Abschnitten vorbereiten. |
| Beratung & freie Berufe | Projektanfragen vor dem Gespräch ordnen. · Besprochene Aufgaben und Rückmeldungen festhalten. · Wiederkehrende Projektunterlagen einfacher starten. |

## Gemeinsame Bedienungsprinzipien

Die Startseite liefert den Überblick. Eine individuelle Betriebsseite startet mit der tatsächlichen Betriebsart und einem eigenen Einstiegstext. Danach folgen mögliche Probleme, passende Hilfen und Ergebnisse. Eine kurze Seitennavigation erlaubt es, direkt zu Beispielen, Preisrahmen oder Zusammenarbeit zu springen.

Jede Hilfenauswahl erklärt ausdrücklich das Problem, Marcos Hilfe und das mögliche Ergebnis. Die Demonstration lässt sich manuell vorbereiten und zurücksetzen. Eine ausgewählte Hilfe kann als einzelne Startaufgabe in den Rechner übernommen werden; Branche und passende Aufgabe werden vorausgewählt. Der Rechner bleibt kostenlos und verwendet gekennzeichnete Beispielpreise.

Bedienelemente haben auf mobilen Ansichten große Flächen. Unterschiedliche Bereiche bekommen eine zurückhaltende Akzentfarbe, während Aufbau und Bedienung gleich bleiben. Farben erklären keine Zustände allein: Beschriftungen wie „noch zur Prüfung“ und „1 von 3 Beispielaufgaben abgehakt“ tragen die Bedeutung. Die Seiten kommen ohne bewegte Dekoration aus.

## Offizielle Quellen der umgesetzten Komponenten

[Navigation Menu](https://ui.shadcn.com/docs/components/base/navigation-menu), [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu), [Sheet](https://ui.shadcn.com/docs/components/base/sheet), [Table](https://ui.shadcn.com/docs/components/base/table), [Toggle Group](https://ui.shadcn.com/docs/components/base/toggle-group), [Progress](https://ui.shadcn.com/docs/components/base/progress), [Tabs](https://ui.shadcn.com/docs/components/base/tabs), [Checkbox](https://ui.shadcn.com/docs/components/base/checkbox), [Field](https://ui.shadcn.com/docs/components/base/field).

Neue Komponenten wurden über die shadcn-CLI ergänzt, anschließend gelesen und auf die bestehende Hilfsfunktion `@/lib/utils` angepasst. Bestehende Komponenten wurden bei Nachfragen nicht überschrieben. Es wurde kein zusätzliches Designsystem installiert.

## Nachgewiesene Prüfung

- Katalogprüfung: 25 einzigartige Betriebsseiten, fünf Bereiche, je drei vollständig ausgearbeitete Fälle, passende Rechnerzuordnung und alle fünf visuellen Muster.
- Browserprüfung: alle 75 Fälle auf den 25 Betriebsseiten durchgespielt, jeweiliges Ergebnis geprüft und die Auswahl in den Rechner übernommen.
- Bereichsprüfung: alle fünf Bereichsseiten und ihre 15 Beispiele im Browser durchgespielt; die passende konkrete Branche wird im Rechner übernommen.
- HTTP-Prüfung: alle 30 Detailseiten sind erreichbar und enthalten ihre tatsächlichen Probleme, Hilfen, Ergebnisse, Rechner und Zusammenarbeit. Individuelle Seitentitel, Canonical-Verweise, Branchenindex, Sitemap und unbekannte Route mit 404 geprüft.
- Mobile Navigation: alle fünf Bereiche enthalten jeweils fünf Betriebslinks; Auswahl des Yogastudios öffnet seine Seite und landet am Anfang. Desktop-Navigation enthält 25 Betriebs- und fünf Bereichslinks.
- Mobile Layoutprüfung: alle 30 Detailseiten bei 390 × 844 ohne horizontale Seitenüberbreite. Desktopmuster bei 1440 × 900 sowie mobile Termin- und Listenansicht visuell geprüft.
- Zusätzliche Interaktionsprüfung: andere Beispielzeit auswählen und im Ergebnis sehen; Beispielaufgabe abhaken und korrekte Fortschrittsanzeige lesen.

Die Website ist lokal umgesetzt und geprüft. Eine Veröffentlichung erfolgte in diesem Auftrag nicht.
