"use client";
import { useEffect, useState } from "react";
import { ArrowRight, CalendarDays, Check, FileText, ListChecks, Mail, NotebookPen, Megaphone, Pause, Play } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldContent, FieldGroup, FieldLabel, FieldTitle } from "@/components/ui/field";
import { Progress, ProgressLabel } from "@/components/ui/progress";
import { AssistantFigure } from "@/components/AssistantDemo";
import { type Sector, type UseCase, visualForCase } from "@/lib/sectors";

export default function SectorDemo({ sector, useCase }: { sector: Sector; useCase: UseCase }) {
  const [phase, setPhase] = useState<"idle" | "working" | "ready" | "approved">("idle");
  const [motion, setMotion] = useState(true);
  const prepared = phase === "ready" || phase === "approved";
  useEffect(()=>{if(phase!=="working") return; const timer=setTimeout(()=>setPhase("ready"),1600); return ()=>clearTimeout(timer);},[phase]);
  const Icon = useCase.module === "calendar" ? CalendarDays : useCase.module === "notes" ? NotebookPen : useCase.module === "documents" ? FileText : useCase.module === "marketing" ? Megaphone : Mail;
  const [slot, setSlot] = useState("0");
  const [checked, setChecked] = useState<number[]>([]);
  const kind = visualForCase(sector, useCase);
  const picked = sector.slots[Number(slot)];
  const action = kind === "schedule" ? "Terminvorschlag vorbereiten" : kind === "courses" ? "Kursantwort vorbereiten" : kind === "checklist" ? "Aufgabenliste vorbereiten" : kind === "document" ? "Vorlage vorbereiten" : "Anfrage ordnen";
  function prepare() { setPhase(prepared ? "idle" : "working"); setChecked([]); }
  return <div className={`sector-demo assistant-stage demo-${kind}`} data-demo-kind={kind} data-helper={useCase.module} data-phase={phase} data-motion={motion} data-case={useCase.id}>
    <div className="sector-demo-heading"><Badge variant="outline">Interaktive Vorschau</Badge><Button variant="ghost" size="sm" onClick={()=>setMotion(!motion)} aria-pressed={!motion}>{motion ? <Pause data-icon="inline-start" /> : <Play data-icon="inline-start" />}{motion ? "Bewegung pausieren" : "Bewegung einschalten"}</Button></div>
    <div className="sector-demo-layout">
      <Card className="demo-input-card">
        <CardHeader><Icon aria-hidden="true" /><CardTitle>01 · So kommt es bei Ihnen an.</CardTitle><CardDescription>Eine Anfrage oder Notiz aus Ihrem Alltag</CardDescription></CardHeader>
        <CardContent><p>{useCase.request}</p></CardContent>
        <CardFooter><span className="small-copy">Sie geben die Informationen vor.</span></CardFooter>
      </Card>
      <div className="assistant-worker sector-assistant-worker"><div className="assistant-path" aria-hidden="true"><span className="assistant-parcel"><Icon /></span></div><AssistantFigure icon={Icon} /><h3>{useCase.assistant.name}</h3><p>{phase === "working" ? useCase.assistant.working : phase === "approved" ? "Von Ihnen geprüft." : prepared ? "Das Ergebnis liegt für Sie bereit." : "Bereit für Ihre Aufgabe."}</p><span className="assistant-role">02 · Nach Ihren Regeln</span></div>
      <div className="sector-demo-workspace"><p className="mini-label demo-workspace-label">03 · Die vorbereitete Hilfe</p>
        {kind === "board" && <div className="case-board" aria-label="Übersicht einer Kundenanfrage">
          {["Anliegen", "Zu klären", "Nächster Schritt"].map((label,i) => <div key={label} className="case-lane"><p className="lane-label">{label}</p><Card size="sm"><CardContent><p>{i === 0 || prepared ? useCase.facts[i] : "Wird nach dem Ordnen sichtbar."}</p></CardContent></Card></div>)}
        </div>}
        {kind === "schedule" && <Card>
          <CardHeader><CalendarDays aria-hidden="true" /><CardTitle>Eine Terminoption auswählen.</CardTitle><CardDescription>So kann eine verständliche Terminübersicht aussehen.</CardDescription></CardHeader>
          <CardContent><ToggleGroup orientation="vertical" variant="outline" value={[slot]} onValueChange={value => { if (value.length) {setSlot(String(value[0]));setPhase("idle");} }} className="slot-picker w-full" aria-label="Terminoptionen">
            {sector.slots.map((time,i)=><ToggleGroupItem key={time.time} value={String(i)} aria-label={`Terminoption ${time.time}`}><span>{time.time}</span><span>{time.label}</span></ToggleGroupItem>)}
          </ToggleGroup></CardContent>
          <CardFooter><p className="small-copy">Die Verfügbarkeit und Dauer prüfen Sie in Ihrem eigenen Kalender.</p></CardFooter>
        </Card>}
        {kind === "courses" && <Card>
          <CardHeader><CalendarDays aria-hidden="true" /><CardTitle>Ihr Kursangebot auf einen Blick.</CardTitle><CardDescription>Kursübersicht für Ihre Terminabstimmung</CardDescription></CardHeader>
          <CardContent>
            <Table><TableCaption>Drei Möglichkeiten bei {sector.label}.</TableCaption><TableHeader><TableRow><TableHead>Zeit</TableHead><TableHead>Angebot</TableHead></TableRow></TableHeader><TableBody>{sector.slots.map(time=><TableRow key={time.time}><TableCell>{time.time}</TableCell><TableCell>{time.label}</TableCell></TableRow>)}</TableBody></Table>
            <p className="mini-label mt-5 mb-3">Welche Zeit möchten Sie besprechen?</p>
            <ToggleGroup variant="outline" value={[slot]} onValueChange={value => {if(value.length){setSlot(String(value[0]));setPhase("idle");}}} className="course-picker" aria-label="Kurs auswählen">{sector.slots.map((time,i)=><ToggleGroupItem key={time.time} value={String(i)}>{time.time}</ToggleGroupItem>)}</ToggleGroup>
          </CardContent>
          <CardFooter><span className="small-copy">Kursangaben und Plätze werden von Ihnen bestätigt.</span></CardFooter>
        </Card>}
        {kind === "checklist" && <Card>
          <CardHeader><ListChecks aria-hidden="true" /><CardTitle>Eine kurze Liste fürs Nachhalten.</CardTitle><CardDescription>Hier steht, was als Nächstes geklärt werden muss.</CardDescription></CardHeader>
          <CardContent>{prepared ? <FieldGroup className="demo-checklist">{useCase.facts.map((fact,i)=><FieldLabel key={fact}><Field orientation="horizontal"><Checkbox checked={checked.includes(i)} onCheckedChange={done => setChecked(done ? [...checked,i] : checked.filter(index => index !== i))} /><FieldContent><FieldTitle>{fact}</FieldTitle></FieldContent></Field></FieldLabel>)}</FieldGroup> : <p className="demo-placeholder">Bereiten Sie die Liste vor. Danach können Sie die Aufgaben einzeln abhaken.</p>}</CardContent>
          <CardFooter className="flex-col items-stretch"><Progress value={checked.length / useCase.facts.length * 100} max={100}><ProgressLabel>{checked.length} von {useCase.facts.length} Aufgaben abgehakt</ProgressLabel></Progress></CardFooter>
        </Card>}
        {kind === "document" && <Card>
          <CardHeader><FileText aria-hidden="true" /><CardTitle>Eine Vorlage statt einer leeren Seite.</CardTitle><CardDescription>Ihre Angaben bilden die Grundlage.</CardDescription></CardHeader>
          <CardContent><div className="document-paper"><p className="paper-eyebrow">{sector.label} · Arbeitsentwurf</p><h4>{useCase.title}</h4><ul>{useCase.facts.map(fact=><li key={fact}><Check aria-hidden="true" />{fact}</li>)}</ul>{prepared ? <p className="paper-draft">{useCase.output}</p> : <p className="demo-placeholder">Nach dem Vorbereiten erscheint hier der erste Entwurf.</p>}</div></CardContent>
          <CardFooter><Badge variant="outline">Sie prüfen Inhalte und Angaben.</Badge></CardFooter>
        </Card>}
      </div>
    </div>
    <div className="assistant-rule sector-assistant-rule"><p><strong>Die vereinbarte Regel · {sector.label}</strong><span>{useCase.assistant.rule}</span></p></div>
    <div className="sector-demo-actions"><Button size="lg" variant={prepared ? "outline" : "default"} onClick={prepare} disabled={phase === "working"}>{phase === "working" ? "Helfer bereitet vor …" : prepared ? "Erneut ausprobieren" : action}<ArrowRight data-icon="inline-end" /></Button>{phase === "ready" && <Button onClick={()=>setPhase("approved")}>Als geprüft markieren<Check data-icon="inline-end" /></Button>}<p className="small-copy">Wir stimmen den Ablauf auf Ihre Programme und Arbeitsweise ab.</p></div>
    <div className="demo-prepared-output" role="status" aria-live="polite" aria-atomic="true">{prepared ? <><Badge variant="secondary">{phase === "approved" ? "Von Ihnen geprüft" : "Vorbereitet · noch zur Prüfung"}</Badge><p>{useCase.output}</p>{(kind === "schedule" || kind === "courses") && <p className="small-copy">Ausgewählte Terminoption: {picked.time} · {picked.label}. Die Bestätigung erfolgt erst nach Ihrer Prüfung.</p>}{phase === "approved" && <p className="small-copy">Vorschau abgeschlossen. Sie haben das Ergebnis geprüft.</p>}</> : <p className="small-copy">{phase === "working" ? useCase.assistant.working : "Hier sehen Sie nach dem Ausprobieren das vorbereitete Ergebnis."}</p>}</div>
  </div>;
}
