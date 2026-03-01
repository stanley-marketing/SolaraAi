import type { Metadata } from "next";
import { UseCasesContent } from "./use-cases-content";

export const metadata: Metadata = {
  title: "Use Cases — Solara AI | For Business Owners & Marketers",
  description:
    "See how Solara AI works for business owners seeking calm confidence and marketers who need a relentless AI wingman. Content creation, ad management, SEO, and analytics — all on autopilot.",
  openGraph: {
    title: "Use Cases — Solara AI | For Business Owners & Marketers",
    description:
      "Whether you're steering the ship or in the arena — Solara has your back.",
    url: "https://solaraai.com/use-cases",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solara AI Use Cases",
    description: "AI marketing for business owners and marketers.",
  },
  alternates: {
    canonical: "https://solaraai.com/use-cases",
  },
};

export default function UseCasesPage() {
  return <UseCasesContent />;
}
