import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { getAllCaseSlugs, getCaseStudy } from "@/lib/case-studies";
import { getCaseStudyJsonLd, getCaseStudyMetadata } from "@/lib/case-studies/seo";
import { MaisonDetailPage } from "@/components/case-study/MaisonDetailPage";

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
    datePublished: "2026-03-12",
  });

  return (
    <>
      {jsonLdNodes.map((node) => {
        const scriptId = `${caseStudy.slug}-jsonld-${String(node["@type"]).toLowerCase()}`;

        return (
          <Script
            key={scriptId}
            id={scriptId}
          type="application/ld+json"
          >
            {JSON.stringify(node)}
          </Script>
        );
      })}
      <MaisonDetailPage caseStudy={caseStudy} />
    </>
  );
}
