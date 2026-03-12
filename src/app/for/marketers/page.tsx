import type { Metadata } from "next";
import Script from "next/script";

import { getPartnerPageMetadata, getPartnerPageJsonLd } from "@/lib/partners/seo";
import { MarketerPage } from "@/components/partners/MarketerPage";

export const metadata: Metadata = getPartnerPageMetadata("marketers");

const jsonLdStrings = getPartnerPageJsonLd("marketers", { includeFaq: true });

export default function ForMarketersPage() {
  return (
    <>
      {jsonLdStrings.map((ld, i) => (
        <Script
          key={i}
          id={`marketer-jsonld-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ld }}
        />
      ))}
      <MarketerPage />
    </>
  );
}
