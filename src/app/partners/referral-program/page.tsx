import type { Metadata } from "next";

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

  return <ReferralProgramPage jsonLd={jsonLdStrings} />;
}
