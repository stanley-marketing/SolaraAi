import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudy } from "@/lib/case-studies";
import { getCaseStudyJsonLd } from "@/lib/case-studies/seo";
import { MaisonDetailPage } from "@/components/case-study/MaisonDetailPage";
import { TopNav } from "@/components/LandingSections";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Missing Piece — Standard Layout Preview | Solara AI",
  description: "Internal preview of The Missing Piece case study using the standard Maison-style layout.",
  robots: { index: false, follow: false },
};

export default function TheMissingPieceStandardPreview() {
  const caseStudy = getCaseStudy("the-missing-piece");
  if (!caseStudy) {
    notFound();
  }

  const jsonLdNodes = getCaseStudyJsonLd({
    ...caseStudy,
    datePublished: caseStudy.datePublished,
  });

  return (
    <main className="min-h-screen bg-white text-ink-900">
      <TopNav />
      {jsonLdNodes.map((node) => {
        const scriptId = `${caseStudy.slug}-standard-jsonld-${String(node["@type"]).toLowerCase()}`;
        return (
          <script
            key={scriptId}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
          />
        );
      })}
      <MaisonDetailPage caseStudy={caseStudy} />
      <Footer />
    </main>
  );
}
