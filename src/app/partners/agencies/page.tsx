import type { Metadata } from "next";

import { getPartnerPageMetadata, getPartnerPageJsonLd } from "@/lib/partners/seo";
import { AgencyPartnersPage } from "@/components/partners/AgencyPartnersPage";

export const metadata: Metadata = getPartnerPageMetadata("agencies");

const jsonLdStrings = getPartnerPageJsonLd("agencies", { includeFaq: true });

export default function AgenciesPage() {
  return <AgencyPartnersPage jsonLd={jsonLdStrings} />;
}
