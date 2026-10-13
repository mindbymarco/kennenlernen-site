"use client";
import { useState } from "react";
import { ArrowRight, Mail, CalendarDays, FileText, Check } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { ModuleId } from "@/lib/offer";
const examples = [
  { id: "inbox" as ModuleId, label: "E-Mails", icon: Mail, title: "Aus einzelnen Nachrichten wird ein klarer Überblick.", before: ["Kunde fragt nach dem Angebot", "Lieferant schickt eine Rückfrage", "Newsletter liegt dazwischen"], after: ["Zuerst: Rückfrage zum Angebot beantworten", "Danach: Lieferung mit dem Lieferanten klären", "Später: Newsletter lesen"], result: "Sie sehen, was zuerst dran ist.", work: "Ich richte die Sortierung und eine kurze Zusammenfassung ein. Wir legen gemeinsam fest, was wichtig ist.", next: "E-Mail-Hilfe im Rechner auswählen" },
  { id: "calendar" as ModuleId, label: "Termine", icon: CalendarDays, title: "Aus offenen Absprachen wird ein übersichtlicher Tag.", before: ["Terminwunsch in einer Nachricht", "Rückruf auf einem Zettel", "Büroarbeit irgendwann am Abend"], after: ["09:00 · Kundentermin nach Bestätigung", "11:30 · Rückruf mit Erinnerung", "16:00 · Zeit für Angebote freihalten"], result: "Termine und Bürozeit haben ihren Platz.", work: "Ich helfe Ihnen, Termine zu ordnen und Erinnerungen einzurichten. Sie behalten die Entscheidung über Ihren Kalender.", next: "Termin-Hilfe im Rechner auswählen" },
  { id: "documents" as ModuleId, label: "Unterlagen", icon: FileText, title: "Aus Stichpunkten wird eine vorbereitete Unterlage.", before: ["Kundenwunsch in Gesprächsnotizen", "Angaben in verschiedenen Dateien", "Das Anschreiben wieder neu tippen"], after: ["Kundenwunsch übersichtlich zusammengefasst", "Wichtige Angaben an einer Stelle", "Anschreiben als Entwurf zur Prüfung"], result: "Sie beginnen mit einer passenden Vorlage.", work: "Ich bereite Vorlagen für Ihre wiederkehrenden Unterlagen vor. Wir prüfen gemeinsam, welche Angaben immer gebraucht werden.", next: "Dokument-Hilfe im Rechner auswählen" },
];
export default function EverydayPreview({ onChoose }: { onChoose: (module: ModuleId) => void }) {
  const [active, setActive] = useState("inbox");
  return <section id="hilfe" className="section everyday-section" aria-labelledby="hilfe-heading"><div className="site-wrap">
    <div className="section-heading"><p className="eyebrow">01 · Die Hilfe im Alltag</p><h2 id="hilfe-heading">So sieht die Hilfe aus.</h2><p>Wählen Sie eine Aufgabe. Vergleichen Sie die Ausgangslage mit einer möglichen Hilfe.</p></div>
    <Tabs value={active} onValueChange={value=>setActive(String(value))} className="everyday-tabs"><TabsList aria-label="Alltagsaufgabe wählen">{examples.map(item=><TabsTrigger value={item.id} key={item.id}><item.icon aria-hidden="true" />{item.label}</TabsTrigger>)}</TabsList>
      {examples.map(item=><TabsContent value={item.id} key={item.id}><div className="everyday-caption"><h3>{item.title}</h3><p>So kann Ihr Büroalltag leichter werden.</p></div><div className="before-after-flow">
        <Card><CardHeader><Badge variant="outline">Heute vielleicht so</Badge><CardTitle>Alles einzeln nachhalten</CardTitle><CardDescription>Die Informationen liegen verstreut.</CardDescription></CardHeader><CardContent><ul className="everyday-items">{item.before.map((text,i)=><li key={text}><span className="paper-index" aria-hidden="true">0{i+1}</span><p>{text}</p></li>)}</ul></CardContent><CardFooter><p>Sie müssen selbst suchen und sortieren.</p></CardFooter></Card>
        <div className="flow-connector" aria-hidden="true"><ArrowRight /></div>
        <Card className="prepared-card"><CardHeader><Badge variant="secondary">Mit eingerichteter Hilfe</Badge><CardTitle>Für Sie vorbereitet</CardTitle><CardDescription>Nach den Regeln, die wir gemeinsam festlegen.</CardDescription></CardHeader><CardContent><ul className="everyday-items">{item.after.map(text=><li key={text}><Check aria-hidden="true" /><p>{text}</p></li>)}</ul></CardContent><CardFooter><strong>{item.result}</strong></CardFooter></Card>
      </div><div className="everyday-next"><p>{item.work}</p><Button render={<a href="#rechner" />} nativeButton={false} onClick={()=>onChoose(item.id)}>{item.next}<ArrowRight data-icon="inline-end" /></Button></div></TabsContent>)}
    </Tabs>
  </div></section>;
}
