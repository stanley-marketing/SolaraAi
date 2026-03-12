import type { Metadata } from "next";
import { TopNav } from "@/components/LandingSections";
import { ContactHero } from "@/components/ContactHero";
import { ContactProcess } from "@/components/ContactProcess";
import { ContactFaq } from "@/components/ContactFaq";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Solara AI — Book a Free Strategy Call",
  description:
    "Book a free 45-minute strategy call with Solara AI. Tell us where your marketing stands and we'll show you what AI-powered execution can do for your business.",
  alternates: { canonical: "https://www.solaraai.io/contact" },
  openGraph: {
    title: "Contact Solara AI",
    description:
      "Book a free 45-minute strategy call. AI-powered marketing for growing businesses.",
    url: "https://www.solaraai.io/contact",
    siteName: "Solara AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Solara AI",
    description:
      "Book a free strategy call. AI-powered marketing for growing businesses.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "Organization",
    name: "Solara AI",
    url: "https://www.solaraai.io",
    email: "contact@solaraai.com",
  },
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-white text-ink-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopNav />
      <ContactHero />
      <ContactProcess />
      <ContactFaq />
      <Footer />
    </main>
  );
}
