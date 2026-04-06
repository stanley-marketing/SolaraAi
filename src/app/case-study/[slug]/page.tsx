import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCaseSlugs, getCaseStudy } from "@/lib/case-studies";
import { getCaseStudyJsonLd, getCaseStudyMetadata } from "@/lib/case-studies/seo";
import { MaisonDetailPage } from "@/components/case-study/MaisonDetailPage";
import { TheMissingPieceDetailPage } from "@/components/case-study/TheMissingPieceDetailPage";
import { TopNav } from "@/components/LandingSections";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  return getAllCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return getCaseStudyMetadata(slug);
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const caseStudy = getCaseStudy(slug);
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
        const scriptId = `${caseStudy.slug}-jsonld-${String(node["@type"]).toLowerCase()}`;

        return (
          <script
            key={scriptId}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
          />
        );
      })}
      {caseStudy.slug === "the-missing-piece" ? (
        <TheMissingPieceDetailPage caseStudy={caseStudy} />
      ) : (
        <MaisonDetailPage caseStudy={caseStudy} />
      )}
      <Footer />
    </main>
  );
}
