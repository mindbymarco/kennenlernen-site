import type { Metadata } from "next";
import { Inter, Krub } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-serif", weight: ["400","500","600","700","800"] });
const krub = Krub({ subsets: ["latin"], variable: "--font-sans", weight: ["400","500","600","700"] });
const krubMono = Krub({ subsets: ["latin"], variable: "--font-mono", weight: ["400","500"] });

export const metadata: Metadata = {
  title: "Marco Grotemeyer — KI-Transformation für den Mittelstand",
  description: "Partner für unternehmensweite KI-Transformation. Befähigung und technische Umsetzung aus einer Hand.",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon.png", type: "image/png" }, { url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${krub.variable} ${krubMono.variable}`}>
      <body className="antialiased bg-[#F2E7DE]">{children}</body>
    </html>
  );
}
