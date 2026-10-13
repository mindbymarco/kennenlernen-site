import type { Metadata } from "next";
import { Inter, Krub } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-serif", weight: ["400","500","600","700","800"] });
const krub = Krub({ subsets: ["latin"], variable: "--font-sans", weight: ["400","500","600","700"] });
const krubMono = Krub({ subsets: ["latin"], variable: "--font-mono", weight: ["400","500"] });

export const metadata: Metadata = {
  title: "Weniger Büroarbeit für kleine Unternehmen | Marco Grotemeyer",
  description: "Digitale Assistenten für kleine Unternehmen: E-Mails, Termine und Unterlagen leichter erledigen. Persönliche Einrichtung, kostenlose Hilfen und ein unverbindlicher Angebotsrechner.",
  metadataBase: new URL("https://www.marcogrotemeyer.de"),
  alternates: { canonical: "/" },
  openGraph: { title: "Mehr Zeit für Ihr Geschäft | Marco Grotemeyer", description: "Digitale Assistenten für kleine Unternehmen – persönlich eingerichtet und verständlich erklärt.", locale: "de_DE", type: "website", images: [{ url: "/profile.jpg", alt: "Marco Grotemeyer" }] },
  icons: {
    icon: [{ url: "/brand/fibonacci-mark.png", type: "image/png" }],
    apple: [{ url: "/brand/fibonacci-mark.png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${krub.variable} ${krubMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
