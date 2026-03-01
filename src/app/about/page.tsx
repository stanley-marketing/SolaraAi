import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About — Solara AI | The Story Behind the Shift",
  description:
    "Solara AI was built to make great marketing accessible to every business. Founded in 2024, backed by $1M pre-seed, trusted by 500+ brands. Meet the team and mission behind the platform.",
  openGraph: {
    title: "About — Solara AI | The Story Behind the Shift",
    description:
      "Making great marketing accessible to every business. Our mission, values, and story.",
    url: "https://solaraai.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Solara AI",
    description: "The story behind AI marketing that actually works.",
  },
  alternates: {
    canonical: "https://solaraai.com/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
