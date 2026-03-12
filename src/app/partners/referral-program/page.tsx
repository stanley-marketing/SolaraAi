import type { Metadata } from "next";
import Script from "next/script";

import { PartnerPageShell } from "@/components/partners";
import { ReferralProgramPage } from "@/components/partners/ReferralProgramPage";
import {
  getPartnerPageMetadata,
  getPartnerPageJsonLd,
} from "@/lib/partners/seo";

export const metadata: Metadata = getPartnerPageMetadata("referral-program");

export default function ReferralProgramRoute() {
  const jsonLdStrings = getPartnerPageJsonLd("referral-program", {
    includeFaq: true,
  });

  return (
    <PartnerPageShell jsonLd={jsonLdStrings}>
      <ReferralProgramPage />
    </PartnerPageShell>
  );
}
