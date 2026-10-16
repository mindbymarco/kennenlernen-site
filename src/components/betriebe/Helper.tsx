import type { LucideIcon } from "lucide-react";

// Der digitale Helfer: ruhiges Zeichen mit Statuspunkt (Tanne, pulsiert während er arbeitet). Ersetzt die Pixel-Figur (H18).
export default function Helper({ icon: Icon }: { icon: LucideIcon }) {
  return <div className="helper" aria-hidden="true"><Icon /><i /></div>;
}
