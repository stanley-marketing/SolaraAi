import type { Metadata } from "next";

import { getPartnerPageMetadata, getPartnerPageJsonLd } from "@/lib/partners/seo";
import { SetupOperatorPage } from "@/components/partners/SetupOperatorPage";

export const metadata: Metadata = getPartnerPageMetadata("setup-operators");

export default function SetupOperatorsPage() {
  const jsonLd = getPartnerPageJsonLd("setup-operators", { includeFaq: true });

  return <SetupOperatorPage jsonLd={jsonLd} />;
}
