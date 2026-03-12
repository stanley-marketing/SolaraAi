import type { ComponentPropsWithoutRef } from "react";

import { getCtaHref, type PartnerCtaVariant } from "@/lib/partners/cta-flows";

type PartnerCtaButtonProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  label: string;
  slug: string;
  variant?: PartnerCtaVariant;
};

const baseClassName =
  "inline-flex items-center justify-center rounded-[999px] px-6 py-3 text-[14px] font-medium tracking-[1px] transition-colors duration-200";

const variantClassNames: Record<PartnerCtaVariant, string> = {
  primary: "bg-ink-900 text-white hover:bg-ink-800",
  secondary: "border border-ink-900/20 text-ink-900 hover:bg-ink-900/5",
};

export function PartnerCtaButton(props: PartnerCtaButtonProps) {
  const { className, label, slug, variant = "primary", ...anchorProps } = props;

  return (
    <a
      {...anchorProps}
      href={getCtaHref(slug, variant)}
      className={[baseClassName, variantClassNames[variant], className].filter(Boolean).join(" ")}
    >
      {label}
    </a>
  );
}
