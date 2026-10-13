// Inhalte für Hub und Beratung. Quelle: ~/Movies/Content/marcogrotemeyer.de/Strategie/POSITIONIERUNG.md und STARTSEITE-TEXTE.md (H11, H16, H24).
// Nur belegte Aussagen: keine Zahlen ohne Messung, keine Kundenstimmen, kein HR-Autopilot (H14).

export const CAL_URL = "https://cal.com/marco-grotemeyer/discovery";
export const MAIL = "hello@marcogrotemeyer.de";
export const HANDSCHRIFT_URL = "https://handschrift.studio";

export type Build = {
  slug: string;
  title: string;
  short: string;
  tags: string[];
  media: { video?: string; poster?: string; contain?: boolean; term?: string[] };
  status: string;
  task: string;
  approach: string[];
  result: string;
  note?: string;
};

export const builds: Build[] = [
  {
    slug: "reel-system",
    title: "Reel-System",
    short: "Claude schneidet meine Reels aus meinem eigenen Material.",
    tags: ["Claude Code", "Skills", "ffmpeg"],
    media: { video: "/hub/reel-system.mp4", poster: "/hub/reel-system.jpg" },
    status: "Läuft täglich",
    task: "Meine Reels entstehen aus vielen Stunden eigenem Material. Den richtigen Clip zu finden, zu schneiden und Farben anzugleichen, hat früher den größten Teil der Arbeit gefressen.",
    approach: [
      "Ein Index beschreibt jeden Moment im Material: wer zu sehen ist, wie viel Energie die Szene hat, wo sie beginnt und endet.",
      "Claude sucht darin mit einfachen Befehlen und findet passende Momente in Sekunden.",
      "Skills legen fest, wie geschnitten wird: Captions, Takt, Farblook. Ich gebe Anmerkungen, Claude setzt sie um.",
    ],
    result: "Der Schnitt geht schneller, und das Ergebnis ist besser, als wenn ich ihn selbst auf diesem Niveau gelernt hätte. Gemessene Stunden folgen bei den nächsten Reels.",
  },
  {
    slug: "achilleus",
    title: "Achilleus",
    short: "Was ich per Telegram schicke, landet sortiert in Craft.",
    tags: ["n8n", "Telegram", "Craft"],
    media: { term: ["<b>telegram</b> neue Nachricht", "„Idee: Reel …“", "<b>→</b> Idee · Content", "<b>→</b> craft: Notiz", "<b>→</b> Frist: Freitag", "<i>✓ fertig</i>"] },
    status: "Läuft auf eigenem Server",
    task: "Ideen, Aufgaben und Notizen kommen unterwegs. Wenn ich sie nicht sofort ablege, sind sie weg. Wenn ich sie ablege, kostet das jedes Mal Zeit.",
    approach: [
      "Ich schicke alles, was mir einfällt, an einen Telegram-Bot.",
      "Ein Ablauf in n8n erkennt, was es ist (Idee, Aufgabe, Notiz), und liest Fristen heraus.",
      "Das Ergebnis landet an der richtigen Stelle in Craft, Aufgaben bekommen ihr Datum.",
    ],
    result: "Ich sortiere nichts mehr von Hand. Alles, was ich unterwegs festhalte, liegt danach an seinem Platz.",
  },
  {
    slug: "karussell-werkzeug",
    title: "Karussell-Werkzeug",
    short: "Aus Videos und Text wird ein fertiges Instagram-Karussell.",
    tags: ["Python", "Claude"],
    media: { video: "/hub/karussell.mp4", poster: "/hub/karussell.jpg", contain: true },
    status: "Läuft",
    task: "Karussells sind auf Instagram stark, aber jede Folie einzeln zu gestalten dauert. Ich wollte meine Videos und meinen Text direkt in fertige Folien verwandeln.",
    approach: [
      "Ein Werkzeug nimmt kurze Videoschleifen aus meinem Material und legt Text darüber, immer im selben Stil.",
      "Claude schreibt mit mir den Text und wählt passende Momente aus dem Index.",
      "Heraus kommen fertige Folien im richtigen Format, bereit zum Hochladen.",
    ],
    result: "Ein Karussell entsteht aus Material, das ohnehin da ist, in einem einheitlichen Look.",
  },
  {
    slug: "raijin",
    title: "Raijin",
    short: "Mehrere Agenten, die ich über Discord anspreche, verbunden mit Notizen und Kontakten.",
    tags: ["OpenClaw", "Discord"],
    media: { term: ["<b>discord</b> @raijin", "„Was steht morgen an?“", "<b>→</b> craft: Notizen", "<b>→</b> kontakte", "<b>→</b> Übersicht", "<i>✓ geantwortet</i>"] },
    status: "Eigenes Projekt",
    task: "Ich wollte einen Assistenten, den ich von überall aus ansprechen kann und der meine Notizen und Kontakte kennt.",
    approach: [
      "Mehrere spezialisierte Agenten laufen hinter einem gemeinsamen Zugang über Discord und eine Weboberfläche.",
      "Sie lesen und schreiben in meinen Notizen und in meiner Kontaktverwaltung.",
      "Jeder Agent hat eine klare Aufgabe und feste Regeln, was er darf.",
    ],
    result: "Ein Assistent, den ich im Alltag frage, statt zwischen Programmen zu springen.",
  },
];

export const buildBySlug = (slug: string) => builds.find(b => b.slug === slug);

export type Stufe = { stufe: string; was: string; preis: string; alt?: string; hi?: boolean };
export const ladder: Stufe[] = [
  { stufe: "Erstgespräch", was: "20 Minuten per Video. Ich sage dir ehrlich, ob sich ein Agent für dich lohnt.", preis: "0 €" },
  { stufe: "Build-Session", was: "90 Minuten live. Wir bauen zusammen einen kleinen Agenten. Aufzeichnung und Anleitung bekommst du am nächsten Tag. Der Preis wird drei Monate lang voll auf einen Pilot angerechnet.", preis: "390 €" },
  { stufe: "Pilot-Build", was: "Nach zwei Wochen läuft ein Ablauf. Wir testen mit echten Fällen, dann folgen Übergabe und 14 Tage Nachbetreuung. Die ersten drei Piloten kosten 990 €, dafür messen wir zusammen und ich darf darüber berichten.", preis: "990 €", alt: "1.490 €", hi: true },
  { stufe: "Build-Sprint", was: "3–4 Wochen, zwei bis drei verbundene Abläufe. Den Umfang legen wir vorher schriftlich fest.", preis: "ab 2.900 €" },
  { stufe: "Betreuung", was: "Nur nach einem Pilot: Anpassungen, Fragen und ein Call im Monat. Monatlich kündbar.", preis: "149 € / Monat" },
];
export const training: Stufe = { stufe: "Team-Training", was: "Auf Anfrage: ein halber Tag, bis 6 Personen, am eigenen Material.", preis: "ab 990 €" };

export const promises = [
  { t: "Am Ende läuft etwas.", d: "Ein gebauter Ablauf, kein eingerichteter Chat und keine Folien." },
  { t: "Es gehört dir.", d: "Konten, Schlüssel und Code bleiben bei dir, dazu Anleitung und Aufzeichnung." },
  { t: "Sonst Geld zurück.", d: "Läuft es 14 Tage nach Übergabe nicht wie vereinbart, bessere ich nach oder du bekommst dein Geld zurück." },
];

export const faq = [
  { q: "Was baust du genau?", a: "Einen Ablauf, der eine wiederkehrende Aufgabe übernimmt oder vorbereitet. Mit Claude, ChatGPT, n8n oder Telegram und verbunden mit den Programmen, die du schon nutzt." },
  { q: "Brauche ich Technik-Wissen?", a: "Nein. Du solltest ChatGPT oder Claude schon nutzen und deine Aufgabe beschreiben können. Den Rest machen wir zusammen." },
  { q: "Wie lange dauert es?", a: "Eine Build-Session dauert 90 Minuten, ein Pilot läuft nach zwei Wochen." },
  { q: "Was kostet der Betrieb danach?", a: "Laufende Kosten für Claude, API oder Hosting zahlst du direkt beim Anbieter. Du siehst sie, bevor wir anfangen." },
  { q: "Was, wenn es nicht klappt?", a: "Läuft der Ablauf 14 Tage nach Übergabe nicht wie schriftlich vereinbart, bessere ich nach oder du bekommst dein Geld zurück." },
  { q: "Wann sagst du ab?", a: "Wenn sich ein Agent für deine Aufgabe nicht lohnt. Das sage ich dir schon im Erstgespräch." },
  { q: "Was machst du nicht?", a: "Keine Erreichbarkeit rund um die Uhr, keine Apps oder große Software und keine Strategie-Folien ohne Umsetzung." },
];
