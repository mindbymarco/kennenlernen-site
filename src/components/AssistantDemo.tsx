"use client";
import { useEffect, useState } from "react";
import { Mail, CalendarDays, FileText, ArrowRight, Check, Pause, Play, type LucideIcon } from "lucide-react";
import type { ModuleId } from "@/lib/offer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const helpers = [
 {id:"mail",name:"Postfach-Helfer",short:"Postfach",icon:Mail,inputTitle:"Drei Nachrichten kommen an.",input:["Kundin wartet auf ein Angebot.","Lieferant hat eine Rückfrage.","Ein Newsletter liegt dazwischen."],working:"Ich ordne die Nachrichten nach Ihren Regeln.",output:["Zuerst: der Kundin zum Angebot antworten.","Danach: die Rückfrage zur Lieferung klären.","Später: den Newsletter lesen."],outcome:"Sie wissen, was zuerst dran ist.",rule:"Kundenanfragen haben Vorrang. Antworten werden als Entwurf vorbereitet."},
 {id:"calendar",name:"Termin-Helfer",short:"Termine",icon:CalendarDays,inputTitle:"Eine Terminfrage kommt an.",input:["Ein Kunde möchte am Donnerstag vorbeikommen.","Zwei Terminoptionen stehen zur Auswahl.","Die Dauer muss noch geklärt werden."],working:"Ich sammle die Angaben für Ihren Terminvorschlag.",output:["Terminwunsch: Donnerstag.","Terminoptionen zur Prüfung: 10:00 oder 14:00 Uhr.","Offene Frage: Wie lange dauert der Besuch?"],outcome:"Eine klare Grundlage für Ihre Terminantwort.",rule:"Es wird nur ein Vorschlag vorbereitet. Sie prüfen Dauer und Verfügbarkeit."},
 {id:"documents",name:"Unterlagen-Helfer",short:"Unterlagen",icon:FileText,inputTitle:"Eine Gesprächsnotiz liegt vor.",input:["Kunde interessiert sich für die Leistung.","Ein Vor-Ort-Termin soll abgestimmt werden.","Ein Anschreiben wird gebraucht."],working:"Ich bringe die Angaben in Ihre Vorlage.",output:["Kundenwunsch kurz zusammengefasst.","Anschreiben als Entwurf vorbereitet.","Fehlende Angaben als Rückfragen markiert."],outcome:"Sie beginnen mit einem vorbereiteten Entwurf.",rule:"Die Angaben des Kunden bilden die Grundlage. Fehlende Informationen werden nicht erfunden."},
];
export function AssistantFigure({ icon: Icon }: { icon: LucideIcon }) {
 return <div className="assistant-figure" aria-hidden="true"><svg viewBox="0 0 120 130" fill="none"><path d="M60 16V28" stroke="currentColor" strokeWidth="5"/><rect x="54" y="7" width="12" height="12" rx="2" fill="currentColor"/><path d="M24 28H96V36H104V92H96V100H24V92H16V36H24V28Z" fill="currentColor"/><path d="M16 63H6V82H16 M104 63H114V82H104" fill="currentColor"/><path d="M31 100H49V118H31 M71 100H89V118H71" fill="currentColor"/><rect className="assistant-eye" x="35" y="45" width="13" height="15" rx="2" fill="var(--card)"/><rect className="assistant-eye" x="72" y="45" width="13" height="15" rx="2" fill="var(--card)"/><path d="M47 70H73" stroke="var(--card)" strokeWidth="4" strokeLinecap="round"/></svg><div className="assistant-tool"><Icon /></div></div>;
}
export default function AssistantDemo({ id = "assistenten", onChoose }: { id?: string; onChoose?: (module: ModuleId) => void }) {
 const [active,setActive]=useState("mail");
 const [phase,setPhase]=useState<"idle"|"working"|"ready"|"approved">("idle");
 const [motion,setMotion]=useState(true);
 useEffect(()=>{if(phase!=="working") return; const timer=setTimeout(()=>setPhase("ready"),2400);return ()=>clearTimeout(timer);},[phase,active]);
 const ready=phase==="ready"||phase==="approved";
 return <section id={id} className="section assistant-section" aria-labelledby={`${id}-heading`}><div className="site-wrap">
   <div className="section-heading"><p className="eyebrow">Eine Aufgabe. Ein passender Helfer.</p><h2 id={`${id}-heading`}>So arbeitet Ihr digitaler Assistent.</h2><p>Er bekommt Informationen, arbeitet nach Ihren Regeln und bereitet ein Ergebnis vor. Sie prüfen, was damit passiert.</p></div>
   <Tabs value={active} onValueChange={value=>{setActive(String(value));setPhase("idle");}} className="assistant-tabs"><TabsList aria-label="Digitalen Helfer auswählen">{helpers.map(helper=><TabsTrigger key={helper.id} value={helper.id}><helper.icon aria-hidden="true" />{helper.short}</TabsTrigger>)}</TabsList>
   {helpers.map(helper=><TabsContent key={helper.id} value={helper.id}><div className="assistant-stage" data-helper={helper.id} data-phase={phase} data-motion={motion}>
     <div className="assistant-scene-top"><Badge variant="outline">Interaktive Vorschau</Badge><Button variant="ghost" size="sm" onClick={()=>setMotion(!motion)} aria-pressed={!motion}>{motion?<Pause data-icon="inline-start" />:<Play data-icon="inline-start" />}{motion?"Bewegung pausieren":"Bewegung einschalten"}</Button></div>
     <div className="assistant-workflow">
       <Card className="assistant-input"><CardHeader><CardDescription>01 · Informationen hinein</CardDescription><CardTitle>{helper.inputTitle}</CardTitle></CardHeader><CardContent><ul>{helper.input.map(text=><li key={text}><helper.icon aria-hidden="true" /><span>{text}</span></li>)}</ul></CardContent><CardFooter><p>Die Informationen kommen von Ihnen oder einem freigegebenen Programm.</p></CardFooter></Card>
       <div className="assistant-worker"><div className="assistant-path" aria-hidden="true"><span className="assistant-parcel"><FileText /></span></div><AssistantFigure icon={helper.icon}/><h3>{helper.name}</h3><p>{phase==="working"?helper.working:phase==="approved"?"Von Ihnen geprüft.":ready?"Ihr Ergebnis ist vorbereitet.":"Bereit für Ihre Aufgabe."}</p><span className="assistant-role">02 · Nach Ihren Regeln</span></div>
       <Card className="assistant-output"><CardHeader><CardDescription>03 · Ergebnis für Sie</CardDescription><CardTitle>Für Sie vorbereitet.</CardTitle></CardHeader><CardContent>{ready?<ul>{helper.output.map(text=><li key={text}><Check aria-hidden="true" /><span>{text}</span></li>)}</ul>:<p className="assistant-placeholder">{phase==="working"?"Das Ergebnis wird vorbereitet …":"Starten Sie den Ablauf. Hier erscheint das mögliche Ergebnis."}</p>}</CardContent><CardFooter><p>{ready?helper.outcome:"Sie behalten die Entscheidung."}</p></CardFooter></Card>
     </div>
     <div className="assistant-rule"><p><strong>Die vereinbarte Regel</strong><span>{helper.rule}</span></p><div className="assistant-demo-actions">{phase==="idle"?<Button onClick={()=>setPhase("working")}>Ablauf starten<ArrowRight data-icon="inline-end" /></Button>:phase==="working"?<Button disabled>Helfer bereitet vor …</Button>:phase==="ready"?<Button onClick={()=>setPhase("approved")}>Als geprüft markieren<Check data-icon="inline-end" /></Button>:<Button variant="outline" onClick={()=>setPhase("idle")}>Erneut ausprobieren</Button>}</div></div>
     <p className="assistant-state" role="status" aria-live="polite">{phase==="idle"?"Wählen Sie einen Helfer und starten Sie den Ablauf.":phase==="working"?"Der Helfer bereitet das Ergebnis vor.":phase==="ready"?"Das Ergebnis liegt zur Prüfung bereit.":"Vorschau abgeschlossen. Sie haben das Ergebnis geprüft."}</p>
   </div></TabsContent>)}
   </Tabs>
   {onChoose && <div className="assistant-next-action"><Button render={<a href="#rechner" />} nativeButton={false} onClick={()=>onChoose(active === "mail" ? "inbox" : active === "calendar" ? "calendar" : "documents")}>Diese Hilfe im Rechner auswählen<ArrowRight data-icon="inline-end" /></Button><a href="/branchen">Beispiele für meinen Betrieb ansehen<ArrowRight aria-hidden="true" /></a></div>}
   <div className="assistant-marco"><img src="/profile.jpg" alt="Marco Grotemeyer" width="56" height="56"/><p><strong>Ich richte Ihren Helfer ein.</strong><span>Wir legen Regeln fest und üben gemeinsam an einer Aufgabe aus Ihrem Betrieb.</span></p><a href="/#erstgespraech">Mit Marco besprechen <ArrowRight aria-hidden="true"/></a></div>
 </div></section>;
}
