import type { Metadata } from "next";
import Script from "next/script";

import { getPartnerPageMetadata, getPartnerPageJsonLd } from "@/lib/partners/seo";
import { AgencyPartnersPage } from "@/components/partners/AgencyPartnersPage";

export const metadata: Metadata = getPartnerPageMetadata("agencies");

const jsonLdStrings = getPartnerPageJsonLd("agencies", { includeFaq: true });

export default function AgenciesPage() {
  return (
    <>
      {jsonLdStrings.map((ld, i) => (
        <Script
          key={i}
          id={`agencies-jsonld-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ld }}
        />
      ))}
      <AgencyPartnersPage jsonLd={jsonLdStrings} />
    </>
  );
}
