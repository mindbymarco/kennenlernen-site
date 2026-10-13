"use client";

import { useState } from "react";
import { ArrowUpRight, Download, Info, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Field, FieldGroup, FieldSet, FieldLegend, FieldLabel, FieldDescription, FieldContent, FieldTitle } from "@/components/ui/field";
import { NativeSelect, NativeSelectOption, NativeSelectOptGroup } from "@/components/ui/native-select";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { calculateOffer, euro, industryGroups, makeSummary, modules, pricing, type ModuleId, type SupportId } from "@/lib/offer";

export default function OfferCalculator({ industry, selected, onIndustry, onSelected }: { industry: string; selected: ModuleId[]; onIndustry: (value: string) => void; onSelected: (value: ModuleId[]) => void }) {
  const [connected, setConnected] = useState(false);
  const [support, setSupport] = useState<SupportId>("none");
  const estimate = calculateOffer(selected, connected, support);
  const summary = makeSummary(industry, selected, connected, support);
  const mail = `mailto:hello@marcogrotemeyer.de?subject=${encodeURIComponent("Mein Büroalltag – unverbindliche Anfrage")}&body=${encodeURIComponent(`Hallo Marco,\n\n${summary}\n\nLass uns dazu sprechen.\n`)}`;

  const downloadParams = new URLSearchParams({ branche: industry, verbindungen: connected ? "ja" : "nein", betreuung: support });
  selected.forEach(id => downloadParams.append("aufgabe", id));
  const downloadUrl = `/api/angebot?${downloadParams.toString()}`;

  return <section id="rechner" className="section calculator-section" aria-labelledby="rechner-heading">
    <div className="site-wrap">
      <div className="section-heading">
        <p className="eyebrow">Kostenloser Angebotsrechner</p>
        <h2 id="rechner-heading">Welche Hilfe passt<br className="hidden sm:block" /> zu Ihrem Alltag?</h2>
        <p>Wählen Sie Ihre Aufgaben. Sie sehen direkt, was wir gemeinsam einrichten könnten und wie ein Preisrahmen aussehen kann.</p>
      </div>
      <Alert className="mb-8" role="note">
        <Info aria-hidden="true" />
        <AlertTitle>Ihr persönlicher Preisrahmen</AlertTitle>
        <AlertDescription>Der Rechner schätzt die Kosten anhand Ihrer Auswahl. Ihr verbindliches Angebot erhalten Sie nach dem Gespräch. Alle Beträge netto; Umsatzsteuer und mögliche Programmkosten kommen gegebenenfalls hinzu.</AlertDescription>
      </Alert>
      <div className="calculator-layout">
        <FieldGroup className="calculator-fields">
          <Field>
            <FieldLabel htmlFor="offer-industry">1. Was für einen Betrieb führen Sie?</FieldLabel>
            <NativeSelect id="offer-industry" value={industry} onChange={e => onIndustry(e.target.value)} className="w-full">
              <NativeSelectOption value="Noch offen">Bitte auswählen</NativeSelectOption>
              {industryGroups.map(group => <NativeSelectOptGroup key={group.label} label={group.label}>{group.items.map(item => <NativeSelectOption key={item} value={item}>{item}</NativeSelectOption>)}</NativeSelectOptGroup>)}
              <NativeSelectOption value="Andere Branche">Andere Branche</NativeSelectOption>
            </NativeSelect>
          </Field>
          <FieldSet>
            <FieldLegend>2. Was möchten Sie leichter erledigen?</FieldLegend>
            <FieldDescription>Eine Aufgabe reicht für den Anfang. Sie können mehrere auswählen. Weitere Wünsche können Sie darunter ergänzen.</FieldDescription>
            <FieldGroup className="task-options">
              {modules.map(module => <FieldLabel key={module.id}>
                <Field orientation="horizontal">
                  <Checkbox id={`offer-${module.id}`} checked={selected.includes(module.id)} onCheckedChange={checked => onSelected(checked ? [...selected, module.id] : selected.filter(id => id !== module.id))} />
                  <FieldContent>
                    <FieldTitle>{module.label}</FieldTitle>
                    <FieldDescription>{module.description}</FieldDescription>
                  </FieldContent>
                </Field>
              </FieldLabel>)}
            </FieldGroup>
          </FieldSet>
          <Accordion className="calculator-details"><AccordionItem value="details"><AccordionTrigger>Weitere Wünsche · optional</AccordionTrigger><AccordionContent><FieldGroup>          <Field>
            <FieldLabel htmlFor="offer-setup">3. Wie möchten Sie starten?</FieldLabel>
            <NativeSelect id="offer-setup" value={connected ? "connected" : "simple"} onChange={e => setConnected(e.target.value === "connected")} className="w-full">
              <NativeSelectOption value="simple">Einfach starten: Vorlagen und vorhandene Programme</NativeSelectOption>
              <NativeSelectOption value="connected">Mehrere Programme miteinander verbinden</NativeSelectOption>
            </NativeSelect>
            <FieldDescription>Wenn Sie unsicher sind, wählen Sie „Einfach starten“. Wir klären die Möglichkeiten gemeinsam.</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="offer-support">4. Möchten Sie danach persönliche Hilfe?</FieldLabel>
            <NativeSelect id="offer-support" value={support} onChange={e => setSupport(e.target.value as SupportId)} className="w-full">
              {Object.entries(pricing.support).map(([id, option]) => <NativeSelectOption key={id} value={id}>{option.label}</NativeSelectOption>)}
            </NativeSelect>
            <FieldDescription>Die Einrichtung enthält eine gemeinsame Einführung. Laufende Betreuung können Sie bei Bedarf ergänzen.</FieldDescription>
          </Field></FieldGroup></AccordionContent></AccordionItem></Accordion>

        </FieldGroup>
        <div className="calculator-result">
          <Card>
            <CardHeader>
              <Badge variant="secondary">Ihre unverbindliche Auswahl</Badge>
              <CardTitle><h3>So könnte Ihr Start aussehen.</h3></CardTitle>
              <CardDescription>{industry === "Noch offen" ? "Für Ihren kleinen Betrieb" : industry}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              {estimate ? <>
                <div role="status" aria-live="polite" aria-atomic="true" className="offer-total">
                  <p>Einmalige Einrichtung</p>
                  <strong>{euro(estimate.low)} – {euro(estimate.high)}</strong>
                  <p>netto · nach gemeinsam abgestimmtem Umfang</p>
                </div>
                <ul className="result-list">{estimate.selected.map(module => <li key={module.id}><Check aria-hidden="true" /><span>{module.label}</span></li>)}</ul>
                <p className="small-copy">Einrichtung: {connected ? "Mehrere Programme miteinander verbinden" : "Mit Vorlagen und vorhandenen Programmen starten"}</p>
                <Separator />
                <div className="price-row"><span>Persönliche Betreuung danach</span><strong>{estimate.monthly ? `${euro(estimate.monthly)} / Monat` : "Keine laufenden Kosten für Betreuung"}</strong></div>
                <p className="small-copy">{estimate.monthly ? `Geschätzte Kosten netto für ${pricing.support[support].hours} ${pricing.support[support].hours === 1 ? "Stunde" : "Stunden"} pro Monat. Für Fragen, gemeinsame Übungen und kleine Anpassungen im vereinbarten Umfang.` : "Sie starten mit der Einrichtung und Einführung. Weitere Hilfe vereinbaren wir bei Bedarf."}</p>
                <Separator />
                <p className="small-copy">Enthalten: Aufgaben besprechen, einrichten, gemeinsam ausprobieren und eine kurze Anleitung. Zusätzliche Programmkosten besprechen wir vor dem Start.</p>
              </> : <p className="empty-selection" role="status">Wählen Sie mindestens eine Aufgabe. Dann erscheint hier Ihr Preisrahmen.</p>}
            </CardContent>
            <CardFooter className="flex flex-col items-stretch gap-3">
              {estimate ? <Button size="lg" render={<a href={downloadUrl} download="mein-bueroalltag.txt" />} nativeButton={false}><Download data-icon="inline-start" /> Auswahl kostenlos herunterladen</Button> : <Button size="lg" disabled><Download data-icon="inline-start" /> Auswahl kostenlos herunterladen</Button>}
              {estimate && <Button size="lg" variant="outline" render={<a href={mail} />} nativeButton={false}>Auswahl per E-Mail besprechen <ArrowUpRight data-icon="inline-end" /></Button>}
              <p className="small-copy">Ohne Anmeldung. Keine Bestellung. Die Berechnung erfolgt direkt. Zum Download wird nur Ihre Auswahl übermittelt. Der E-Mail-Knopf öffnet einen Entwurf in Ihrem Mailprogramm.</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  </section>;
}
