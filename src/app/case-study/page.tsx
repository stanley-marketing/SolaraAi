import type { Metadata } from "next";
import { caseStudies } from "@/lib/case-studies";
import { CaseStudyIndexPage } from "@/components/case-study/CaseStudyIndexPage";
import { TopNav } from "@/components/LandingSections";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Case Studies — Real Results from Solara AI",
  description:
    "See how Solara AI built complete digital marketing engines for clients — and the measurable results that followed.",
  alternates: { canonical: "https://solaraai.com/case-study" },
  openGraph: {
    title: "Case Studies — Real Results from Solara AI",
    description:
      "See how Solara AI built complete digital marketing engines for clients.",
    url: "https://solaraai.com/case-study",
    siteName: "Solara AI",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Solara AI Case Studies",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies — Real Results from Solara AI",
    description:
      "See how Solara AI built complete digital marketing engines for clients — and the measurable results that followed.",
    images: ["/opengraph-image.jpg"],
  },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Solara AI Case Studies",
  numberOfItems: 2,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      url: "https://solaraai.com/case-study/maison-remodeling-group",
      name: "Maison Remodeling Group Case Study",
    },
    {
      "@type": "ListItem",
      position: 2,
      url: "https://solaraai.com/case-study/the-missing-piece",
      name: "The Missing Piece Case Study",
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://solaraai.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Case Studies",
      item: "https://solaraai.com/case-study",
    },
  ],
};

export default function CaseStudyIndexRoute() {
  return (
    <main className="min-h-screen bg-white text-[#0a0a0a]">
      <TopNav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CaseStudyIndexPage caseStudies={caseStudies} />
      <Footer />
    </main>
  );
}
