import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Case Studies — Solara AI Marketing Results",
  description:
    "See how Solara AI helps businesses generate leads, close deals, and build pipeline with AI-powered marketing. Real results from real clients.",
  alternates: { canonical: "https://solaraai.com/case-study" },
  openGraph: {
    title: "Case Studies — Solara AI Marketing Results",
    description:
      "See how Solara AI helps businesses generate leads, close deals, and build pipeline with AI-powered marketing.",
    url: "https://solaraai.com/case-study",
    siteName: "Solara AI",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "SolaraAI — The AI Era In Marketing",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies — Solara AI Marketing Results",
    description:
      "See how Solara AI helps businesses generate leads, close deals, and build pipeline with AI-powered marketing.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function CaseStudyPage() {
  redirect("/case-study/maison-remodeling-group");
}
