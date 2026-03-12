"use client";

import Script from "next/script";

export function CalendlyEmbed() {
  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/ilay-mor-solaraai/45-minute-meeting-full-stack-marketing-manageme-clone"
        style={{ minWidth: "320px", height: "700px" }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
