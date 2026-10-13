import type { Metadata } from "next";
import BusinessHome from "@/components/BusinessHome";

export const metadata: Metadata = {
  title: "Weniger Büroarbeit für kleine Unternehmen | Marco Grotemeyer",
  description: "Digitale Assistenten für kleine Unternehmen: E-Mails, Termine und Unterlagen leichter erledigen. Persönliche Einrichtung, kostenlose Hilfen und ein unverbindlicher Angebotsrechner.",
  alternates: { canonical: "/betriebe" },
  openGraph: { title: "Mehr Zeit für Ihr Geschäft | Marco Grotemeyer", description: "Digitale Assistenten für kleine Unternehmen – persönlich eingerichtet und verständlich erklärt.", locale: "de_DE", type: "website", images: [{ url: "/profile.jpg", alt: "Marco Grotemeyer" }] },
};

export default function Betriebe() {
  return <BusinessHome />;
}
