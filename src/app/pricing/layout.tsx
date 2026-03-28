import type { Metadata } from "next";

const SITE_URL = "https://solaraai.com";

export const metadata: Metadata = {
  title: "Pricing — Solara AI",
  description:
    "Pick the plan that matches your growth velocity. Starter, Growth, and Pro tiers \u2014 from $29/mo (billed annually). Upgrade or cancel anytime, no hidden fees.",
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    title: "Pricing — Solara AI",
    description:
      "AI-powered marketing plans from $29/mo (billed annually). Ads, social, SEO, and content \u2014 all managed by Solara.",
    url: `${SITE_URL}/pricing`,
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
    title: "Pricing — Solara AI",
    description:
      "AI-powered marketing plans from $29/mo (billed annually). Ads, social, SEO, and content \u2014 all managed by Solara.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
