import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SectorDirectory from "@/components/SectorDirectory";
export const metadata: Metadata = { title: "Finden Sie Ihren Betrieb | Marco Grotemeyer", description: "Persönliche Bürohilfe für kleine Unternehmen. Wählen Sie Ihren Betrieb und entdecken Sie passende Beispiele, Hilfen und mögliche Ergebnisse.", alternates: { canonical: "https://www.marcogrotemeyer.de/branchen" } };
export default function Page() { return <><a href="#inhalt" className="skip-link">Zum Inhalt</a><Nav /><main id="inhalt" className="business-home"><section className="section branchen-index"><div className="site-wrap"><div className="section-heading"><p className="eyebrow">Fünf Bereiche · Ihr eigener Betriebsalltag</p><h1>Welchen Betrieb führen Sie?</h1><p>Wählen Sie Ihren Bereich oder direkt Ihren Betrieb. Jede Betriebsseite zeigt eigene Probleme, konkrete Hilfen und mögliche Ergebnisse.</p></div><SectorDirectory /></div></section></main><Footer /></>; }
