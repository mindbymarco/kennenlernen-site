# UI-Bibliotheken und visuelle Erklärung

Diese Dokumentation beschreibt die erste Startseitenversion. Die aktuelle Erweiterung auf fünf Bereichs- und 25 Betriebsseiten, die branchenspezifischen Komponenten und ihre Prüfungen stehen in [Individuelle Branchenführung](./industry-pages.md).

Geprüft am 6. Oktober 2026. Ziel: Kleine Unternehmer erkennen ihren eigenen Alltag und verstehen die Hilfe ohne technisches Vorwissen.

| Bibliothek | Geeignete Bausteine | Entscheidung für dieses Projekt |
| --- | --- | --- |
| [shadcn/ui](https://ui.shadcn.com/) | Tabs, Card, Checkbox, Native Select, Field, Accordion, Badge, Alert | Verwenden. Schon vorhanden, Komponenten im Projekt anpassbar. Branchenwahl, Rechner, Fragen und Beispielkarten auf derselben Basis. |
| [Base UI](https://base-ui.com/) | Interaktions- und Zugänglichkeitsgrundlage ohne vorgegebenes Aussehen | Bereits als Basis von shadcn installiert. Tastaturbedienbare Tabs, Checkboxen und Accordion. |
| [Mantine](https://mantine.dev/) | Große Auswahl fertiger Eingaben und Formularbausteine | Geeignete Alternative für ein neu begonnenes Formularprojekt. Ein zweites Designsystem bringt hier keinen ausreichenden Vorteil. |
| [Magic UI Animated Beam](https://magicui.design/docs/components/animated-beam) | Sichtbare Verbindungen zwischen Elementen, optionale Bewegung | Registry geprüft. Idee einer gut lesbaren Verbindung übernommen; Umsetzung mit beschrifteten Schritten und ruhigen Pfeilen. Animation wäre optional und müsste Reduced Motion respektieren. Paket nicht installiert. |
| [Aceternity UI](https://ui.aceternity.com/components) | Visuelle Produktdemos und animierte Marketingbausteine | Als Vergleich geprüft. Keine zusätzliche Abhängigkeit; die Aufgabenverständlichkeit hat Vorrang vor dekorativen Effekten. |

## Umsetzung

- Vier große Branchenschalter, auf dem Handy in zwei Zeilen. Auswahl über echte Tabs statt visueller Buttons ohne zugehörigen Inhalt.
- Sichtbarer Weg: **Anfrage kommt rein → Angaben werden vorbereitet → Unternehmer prüft und entscheidet.** Je Branche eine eigene, erfundene Nachricht und Antwort.
- Zwei manuelle Schritte statt automatischer Dauerschleife: „Beispiel durchspielen“, dann „Antwort ansehen“. Ergebnis ist ausdrücklich ein unverschickter Entwurf.
- Rechner mit großen Auswahlflächen, zusammengehörigen Labels und Eingaben. Einmaliger und monatlicher Betrag getrennt; Beispielpreisstatus sichtbar. Ergebnis auf dem Handy nach den Eingaben, auf größeren Bildschirmen daneben.
- Zusammenarbeit mit „Mein Beitrag“, „Ihr Beitrag“ und konkretem Ergebnis. Keine technischen Prozessdiagramme auf der Kundenseite.

## Designreferenzen

Die [VoltAgent-Sammlung](https://github.com/VoltAgent/awesome-claude-design) wurde ergänzend geprüft. Es handelt sich um unabhängige Interpretationen, nicht offizielle Designsysteme der genannten Unternehmen.

1. [Cal.com-Analyse](https://getdesign.md/cal/design-md) und [Komponenten-Vorschau](https://getdesign.md/design-md/cal/preview): klare Eingaben, kontrastreiche Hauptaktion, sichtbare Termin- und Produktbeispiele. Übernommen wurden einfache Hierarchie und Produktfragmente; keine Logos, Texte oder Identität.
2. [Zapier-Analyse](https://getdesign.md/zapier/design-md) und [Komponenten-Vorschau](https://getdesign.md/design-md/zapier/preview): freundliche Erklärung von Abläufen. Übernommen wurde die Verbindung zwischen Alltagssituation und vorbereitetem Ergebnis; eigene warme Flächen und zurückhaltendes Grün.

Die Referenzvorschauen wurden als Dokument-/Komponentenbeschreibung gelesen. Visuell geprüft wurde die tatsächlich umgesetzte lokale Website in Browseransichten für Desktop und Handy.

## Offizielle Komponentenquellen

[Tabs](https://ui.shadcn.com/docs/components/base/tabs), [Checkbox](https://ui.shadcn.com/docs/components/base/checkbox), [Field](https://ui.shadcn.com/docs/components/base/field), [Native Select](https://ui.shadcn.com/docs/components/base/native-select), [Card](https://ui.shadcn.com/docs/components/base/card), [Button](https://ui.shadcn.com/docs/components/base/button), [Accordion](https://ui.shadcn.com/docs/components/base/accordion), [Badge](https://ui.shadcn.com/docs/components/base/badge), [Alert](https://ui.shadcn.com/docs/components/base/alert), [Separator](https://ui.shadcn.com/docs/components/base/separator).

Komponenten wurden über die shadcn-CLI ergänzt und anschließend gelesen. Registry-Importe auf die vorhandene Hilfsfunktion unter `@/lib/utils` angepasst; die zusätzlich installierte Hilfsabhängigkeit entfernt. Vorhandene Button-, Card- und Badge-Quelldateien blieben erhalten.


## Prüfung des umgesetzten Stands

- Produktionsbuild einschließlich TypeScript-Prüfung erfolgreich; Downloadroute `/api/angebot` vorhanden.
- Rechenprüfungen: keine Aufgabe, Einzelaufgabe, mehrere Aufgaben, alle Aufgaben mit Programmverbindung, beide Betreuungen, doppelte IDs und die vier Branchenvorauswahlen.
- Browser: alle vier Branchen aufgerufen; SHK-, Friseur-, Fitness- und Handwerksbeispiele bis zum Antwortentwurf durchgespielt. Friseur- und Fitnessvorauswahl korrekt im Rechner übernommen.
- Rechneränderungen im Browser geprüft, leere Auswahl ohne Preis und mit deaktiviertem Download. Branchenverzeichnis enthält 25 Einträge, Fragebereich öffnet Antworten.
- Ansichten bei 1440 × 900 und 390 × 844 geprüft; auf dem Handy keine horizontale Überbreite. Bilder geladen.
- Tatsächlicher Browserdownload nach `/Users/marcogrotemeyer/Downloads/mein-bueroalltag.txt` bestätigt und Dateiinhalt gelesen. HTTP-Ausgabe ebenfalls mit Dateinamen und passendem Beispielpreis geprüft; ungültige oder leere Downloadanfragen geben Status 400 zurück.

Die Website ist lokal überarbeitet. Eine Veröffentlichung wurde nicht vorgenommen.
