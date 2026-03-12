import type { Metadata } from "next";

import { getPartnerPageMetadata, getPartnerPageJsonLd } from "@/lib/partners/seo";
import { MarketerPage } from "@/components/partners/MarketerPage";

export const metadata: Metadata = getPartnerPageMetadata("marketers");

const jsonLdStrings = getPartnerPageJsonLd("marketers", { includeFaq: true });

export default function ForMarketersPage() {
  return <MarketerPage jsonLd={jsonLdStrings} />;
}
