import type { Metadata } from "next";
import BusinessHome from "@/components/BusinessHome";
export const metadata: Metadata = { title: "Designprobe | Marco Grotemeyer", robots: { index: false, follow: false } };
export default function Page() { return <BusinessHome compare />; }
