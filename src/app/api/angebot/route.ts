import { industryGroups, makeSummary, modules, pricing, type ModuleId, type SupportId } from "@/lib/offer";

export function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const industry = params.get("branche") || "Noch offen";
  const allowedIndustries = [...industryGroups.flatMap(group => group.items), "Noch offen", "Andere Branche"];
  const selected = params.getAll("aufgabe");
  const connected = params.get("verbindungen") === "ja";
  const support = params.get("betreuung") || "none";
  if (!allowedIndustries.includes(industry) || !selected.length || selected.some(id => !modules.some(module => module.id === id)) || !Object.hasOwn(pricing.support, support)) {
    return new Response("Bitte wählen Sie Ihre Aufgaben im Angebotsrechner aus.", { status: 400 });
  }
  const summary = makeSummary(industry, selected as ModuleId[], connected, support as SupportId);
  return new Response(summary, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": 'attachment; filename="mein-bueroalltag.txt"',
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
