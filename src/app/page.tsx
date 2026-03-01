import type { Metadata } from "next";
import { HomeContent } from "./home-content";
import { JsonLd, organizationSchema, softwareSchema } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Solara AI — AI That Runs Your Marketing on Auto-Pilot",
  description:
    "A full marketing department in software. AI-powered storytelling, strategy, and research that creates content, manages ads, optimizes SEO, and grows your brand — while you sleep. Trusted by 500+ brands.",
  keywords: [
    "AI marketing platform",
    "marketing automation",
    "AI content creation",
    "AI ad management",
    "marketing strategy AI",
    "SEO automation",
    "Solara AI",
    "AI marketing department",
  ],
  openGraph: {
    title: "Solara AI — AI That Runs Your Marketing on Auto-Pilot",
    description:
      "A full marketing department in software. Storytelling, strategy, and research — all powered by AI.",
    type: "website",
    url: "https://solaraai.com",
    siteName: "Solara AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solara AI — AI That Runs Your Marketing on Auto-Pilot",
    description:
      "A full marketing department in software. AI-powered storytelling, strategy, and research.",
  },
  alternates: {
    canonical: "https://solaraai.com",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={softwareSchema} />
      <HomeContent />
    </>
  );
}
