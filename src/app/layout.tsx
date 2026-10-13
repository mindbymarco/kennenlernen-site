import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

// Dachmarke (H18): Inter für Text und UI, Instrument Serif für Titel, Geist Mono für Labels. Alle beim Build selbst gehostet.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500", "600", "700", "800"] });
const instrument = Instrument_Serif({ subsets: ["latin"], variable: "--font-instrument", weight: "400", style: ["normal", "italic"] });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Marco Grotemeyer · KI-Agenten für Solo-Gründer:innen",
  description: "Du machst alles allein. Ich baue dir einen KI-Agenten, der dir einen Teil davon abnimmt. Festpreis, Übergabe, Geld-zurück-Garantie.",
  metadataBase: new URL("https://www.marcogrotemeyer.de"),
  alternates: { canonical: "/" },
  openGraph: { title: "Marco Grotemeyer · KI-Agenten für Solo-Gründer:innen", description: "Du machst alles allein. Ich baue dir einen KI-Agenten, der dir einen Teil davon abnimmt.", locale: "de_DE", type: "website", images: [{ url: "/profile.jpg", alt: "Marco Grotemeyer" }] },
  icons: {
    icon: [{ url: "/brand/fibonacci-mark.png", type: "image/png" }],
    apple: [{ url: "/brand/fibonacci-mark.png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${instrument.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
