// Inhalte für Hub und Beratung. Quelle: ~/Movies/Content/marcogrotemeyer.de/Strategie/POSITIONIERUNG.md und STARTSEITE-TEXTE.md (H11, H16, H25).
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
};

export const builds: Build[] = [
  {
    slug: "reel-system",
    title: "Reel-System",
    short: "Claude schneidet meine Reels aus dem Material, das ich gedreht habe.",
    tags: ["Claude Code", "Skills", "ffmpeg"],
    media: { video: "/hub/reel-system.mp4", poster: "/hub/reel-system.jpg" },
    status: "Läuft täglich",
    task: "Meine Reels schneide ich aus vielen Stunden eigenem Material. Früher ging die meiste Zeit dafür drauf, den richtigen Clip zu finden, ihn zu schneiden und die Farben anzugleichen.",
    approach: [
      "Ein Index beschreibt jeden Moment in meinem Material: wer zu sehen ist, wie viel Energie die Szene hat und wo sie anfängt und aufhört.",
      "Claude durchsucht diesen Index mit einfachen Befehlen und findet passende Momente in Sekunden.",
      "Wie geschnitten wird, steht in Skills, von den Captions über den Takt bis zum Farblook. Ich gebe Anmerkungen, Claude setzt sie um.",
    ],
    result: "Ich bin beim Schneiden schneller, und die Reels sind besser, als wenn ich das alles selbst auf diesem Niveau hätte lernen müssen. Wie viele Stunden das genau spart, messe ich bei den nächsten Reels.",
  },
  {
    slug: "achilleus",
    title: "Achilleus",
    short: "Was ich ihm per Telegram schicke, legt er sortiert in Craft ab.",
    tags: ["n8n", "Telegram", "Craft"],
    media: { term: ["<b>telegram</b> neue Nachricht", "„Idee: Reel …“", "<b>→</b> Idee · Content", "<b>→</b> craft: Notiz", "<b>→</b> Frist: Freitag", "<i>✓ fertig</i>"] },
    status: "Läuft auf eigenem Server",
    task: "Ideen, Aufgaben und Notizen fallen mir unterwegs ein. Lege ich sie nicht sofort ab, sind sie weg. Lege ich sie ab, kostet das jedes Mal Zeit.",
    approach: [
      "Ich schicke alles, was mir einfällt, an einen Telegram-Bot.",
      "Ein Ablauf in n8n erkennt, ob es eine Idee, eine Aufgabe oder eine Notiz ist, und liest Fristen heraus.",
      "Danach landet es an der richtigen Stelle in Craft, und Aufgaben bekommen ihr Datum.",
    ],
    result: "Von Hand sortiere ich nichts mehr. Was ich unterwegs festhalte, liegt danach da, wo es hingehört.",
  },
  {
    slug: "karussell-werkzeug",
    title: "Karussell-Werkzeug",
    short: "Macht aus meinen Videos und meinem Text ein fertiges Instagram-Karussell.",
    tags: ["Python", "Claude"],
    media: { video: "/hub/karussell.mp4", poster: "/hub/karussell.jpg", contain: true },
    status: "Läuft",
    task: "Karussells funktionieren auf Instagram gut, aber jede Folie einzeln zu gestalten dauert. Ich wollte aus meinen Videos und meinem Text direkt fertige Folien machen.",
    approach: [
      "Das Werkzeug nimmt kurze Videoschleifen aus meinem Material und legt den Text darüber, immer im selben Stil.",
      "Den Text schreibe ich mit Claude, und Claude sucht passende Momente aus dem Index heraus.",
      "Heraus kommen fertige Folien im richtigen Format, die ich direkt hochladen kann.",
    ],
    result: "Ein Karussell entsteht aus Material, das sowieso schon da ist, und sieht jedes Mal einheitlich aus.",
  },
  {
    slug: "raijin",
    title: "Raijin",
    short: "Ein Assistent aus mehreren Agenten, den ich über Discord frage. Er kennt meine Notizen und Kontakte.",
    tags: ["OpenClaw", "Discord"],
    media: { term: ["<b>discord</b> @raijin", "„Was steht morgen an?“", "<b>→</b> craft: Notizen", "<b>→</b> kontakte", "<b>→</b> Übersicht", "<i>✓ geantwortet</i>"] },
    status: "Eigenes Projekt",
    task: "Ich wollte einen Assistenten, den ich von überall aus fragen kann und der meine Notizen und Kontakte kennt.",
    approach: [
      "Hinter einem Zugang über Discord und eine Weboberfläche arbeiten mehrere Agenten, jeder mit einer klaren Aufgabe und festen Regeln, was er darf.",
      "Sie lesen und schreiben in meinen Notizen und in meiner Kontaktverwaltung.",
    ],
    result: "Ich frage den Assistenten, statt zwischen Programmen hin und her zu springen.",
  },
];

export const buildBySlug = (slug: string) => builds.find(b => b.slug === slug);

export type Stufe = { stufe: string; was: string; preis: string; alt?: string; hi?: boolean };
export const ladder: Stufe[] = [
  { stufe: "Erstgespräch", was: "20 Minuten per Video. Ich sage dir ehrlich, ob sich ein Agent für deine Aufgabe lohnt.", preis: "0 €" },
  { stufe: "Build-Session", was: "90 Minuten live, in denen wir an deinem konkreten Fall zusammen einen kleinen Agenten bauen. Am nächsten Tag bekommst du eine kurze technische Dokumentation. Eine Aufzeichnung gibt es nicht. Buchst du innerhalb von drei Monaten einen Pilot, rechne ich die 390 € voll an.", preis: "390 €" },
  { stufe: "Pilot-Build", was: "Nach zwei Wochen läuft dein Ablauf. Vorher testen wir ihn mit echten Fällen, danach übergebe ich ihn und bin noch 14 Tage für Fragen da. Einführungspreis für die ersten drei Pilotprojekte: 990 € Endpreis. Im Gegenzug messen wir gemeinsam, was er bringt. Ob und wie ich darüber berichten darf, vereinbaren wir vorher schriftlich.", preis: "990 €", hi: true },
  { stufe: "Build-Sprint", was: "Drei bis vier Wochen für zwei oder drei Abläufe, die zusammenhängen. Was genau dazugehört, schreiben wir vorher auf.", preis: "ab 2.900 €" },
  { stufe: "Betreuung", was: "Gibt es nur nach einem Pilot. Ich passe an und beantworte Fragen, und einmal im Monat telefonieren wir. Du kannst monatlich kündigen.", preis: "149 € / Monat" },
];
export const training: Stufe = { stufe: "Team-Training", was: "Auf Anfrage. Ein halber Tag mit bis zu sechs Leuten, an eurem eigenen Material.", preis: "ab 990 €" };

// Vertrauen (H25: Variante 6A, ergänzt um 6B)
export const promises = [
  { t: "Den Preis kennst du, bevor du zahlst.", d: "Festpreise, alle als Endpreise. Laufende Kosten für Claude oder Hosting siehst du vorher." },
  { t: "Was ich baue, gehört dir.", d: "Mit allen Konten, Zugängen und dem Code. Dazu bekommst du eine Anleitung." },
  { t: "Sonst Geld zurück.", d: "Läuft der Ablauf 14 Tage nach der Übergabe nicht wie vereinbart, bessere ich nach oder du bekommst dein Geld zurück." },
];
export const honesty = "Wenn sich ein Agent für deine Aufgabe nicht lohnt, sage ich dir das im Erstgespräch. Ich verdiene lieber an einem Pilot, der läuft, als an einem, der dich enttäuscht.";

export const faq = [
  { q: "Was baust du genau?", a: "Einen Ablauf, der eine Aufgabe übernimmt oder vorbereitet, die bei dir immer wieder anfällt. Meist mit Claude, ChatGPT, n8n oder Telegram, verbunden mit den Programmen, die du schon nutzt." },
  { q: "Brauche ich Technik-Wissen?", a: "Nein. Es reicht, wenn du ChatGPT oder Claude schon nutzt und beschreiben kannst, was dich Zeit kostet. Den Rest machen wir zusammen." },
  { q: "Wie lange dauert es?", a: "Eine Build-Session dauert 90 Minuten. Ein Pilot läuft nach zwei Wochen." },
  { q: "Was kostet der Betrieb danach?", a: "Laufende Kosten, etwa für Claude, eine API oder Hosting, zahlst du direkt beim Anbieter. Wie hoch sie sind, siehst du, bevor wir anfangen." },
  { q: "Was, wenn es nicht klappt?", a: "Läuft der Ablauf 14 Tage nach der Übergabe nicht so, wie wir es schriftlich vereinbart haben, bessere ich nach oder du bekommst dein Geld zurück." },
  { q: "Wann sagst du ab?", a: "Wenn sich ein Agent für deine Aufgabe nicht lohnt. Das sage ich dir dann gleich im Erstgespräch." },
  { q: "Was machst du nicht?", a: "Ich bin nicht rund um die Uhr erreichbar, ich baue keine Apps oder große Software, und ich schreibe keine Strategie-Folien, die dann niemand umsetzt." },
];
