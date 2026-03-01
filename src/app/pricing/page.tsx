import type { Metadata } from "next";
import { PricingContent } from "./pricing-content";

export const metadata: Metadata = {
  title: "Pricing — Solara AI | Plans Starting at $39/mo",
  description:
    "Simple, transparent pricing for AI-powered marketing. Start free for 14 days. Plans from $39/mo for solo founders to custom agency solutions. No credit card required.",
  openGraph: {
    title: "Pricing — Solara AI | Plans Starting at $39/mo",
    description:
      "Simple, transparent pricing. Start free for 14 days. Scale when you're ready.",
    url: "https://solaraai.com/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — Solara AI",
    description: "AI marketing plans starting at $39/mo. 14-day free trial.",
  },
  alternates: {
    canonical: "https://solaraai.com/pricing",
  },
};

export default function PricingPage() {
  return <PricingContent />;
}
