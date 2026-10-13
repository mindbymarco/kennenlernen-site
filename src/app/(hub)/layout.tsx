import "../hub.css";
import HubHeader from "@/components/hub/HubHeader";
import HubFooter from "@/components/hub/HubFooter";
import Motion from "@/components/hub/Motion";

export default function HubLayout({ children }: { children: React.ReactNode }) {
  return <div className="hub">
    <a className="skip" href="#inhalt">Zum Inhalt</a>
    <HubHeader />
    <main id="inhalt">{children}</main>
    <HubFooter />
    <Motion />
  </div>;
}
