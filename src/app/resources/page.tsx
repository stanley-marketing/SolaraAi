import type { Metadata } from "next";
import { ResourcesContent } from "./resources-content";

export const metadata: Metadata = {
  title: "Resources — Solara AI | AI Marketing Toolkit",
  description:
    "A curated collection of the best AI marketing tools — content creation, SEO, advertising, analytics, and social media. Hand-picked and organized by category.",
  openGraph: {
    title: "Resources — Solara AI | AI Marketing Toolkit",
    description:
      "Curated collection of the best AI marketing tools, organized by category.",
    url: "https://solaraai.com/resources",
  },
  twitter: {
    card: "summary",
    title: "AI Marketing Toolkit — Solara AI",
    description: "Best AI marketing tools, curated by the Solara team.",
  },
  alternates: {
    canonical: "https://solaraai.com/resources",
  },
};

export default function ResourcesPage() {
  return <ResourcesContent />;
}
