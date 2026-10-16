import "../hub.css";
import "../betriebe.css";
import Header from "@/components/betriebe/Header";
import Footer from "@/components/betriebe/Footer";
import Motion from "@/components/hub/Motion";

// Bereich Betriebe (Sitemap H23): Look der Dachmarke mit Akzent Tanne, Ansprache Sie, eigene Kopfzeile, ohne Ablauf-Leiste.
export default function BetriebeLayout({ children }: { children: React.ReactNode }) {
  return <div className="hub bb" data-bereich="betriebe">
    <a className="skip" href="#inhalt">Zum Inhalt</a>
    <Header />
    <main id="inhalt">{children}</main>
    <Footer />
    <Motion />
  </div>;
}
