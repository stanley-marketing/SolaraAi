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
  alternates: { canonical: "https://solaraai.com/contact" },
  openGraph: {
    title: "Contact Solara AI",
    description:
      "Book a free 45-minute strategy call. AI-powered marketing for growing businesses.",
    url: "https://solaraai.com/contact",
    siteName: "Solara AI",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "SolaraAI — The AI Era In Marketing",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Solara AI",
    description:
      "Book a free strategy call. AI-powered marketing for growing businesses.",
    images: ["/opengraph-image.png"],
  },
};

const SITE_URL = "https://solaraai.com";

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Solara AI \u2014 Book a Free Strategy Call",
  url: `${SITE_URL}/contact`,
  description:
    "Book a free 45-minute strategy call with Solara AI. Tell us where your marketing stands and we'll show you what AI-powered execution can do.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: `${SITE_URL}/contact`,
      },
    ],
  },
  mainEntity: {
    "@type": "Organization",
    name: "Solara AI",
    url: SITE_URL,
    email: "contact@solaraai.com",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Solara actually do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solara runs your marketing end-to-end \u2014 paid ads, content, SEO, social \u2014 using AI-native execution with human strategic oversight. You get a full marketing team without hiring one.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing depends on scope. Most clients start between $2,000\u20135,000/month. We'll discuss specifics on the call based on your goals and channels.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly will I see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients see measurable traction within 30\u201360 days. We set expectations during onboarding based on your industry and starting position.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to provide content or assets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We handle everything \u2014 copy, creative, campaign setup, optimization. You approve what goes live, but you don't need to produce anything.",
      },
    },
    {
      "@type": "Question",
      name: "What if it doesn't work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There are no long-term contracts. If we're not delivering value, you can pause or cancel anytime. Every asset we create belongs to you.",
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-white text-ink-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <TopNav />
      <ContactHero />
      <ContactProcess />
      <ContactFaq />
      <Footer />
    </main>
  );
}
