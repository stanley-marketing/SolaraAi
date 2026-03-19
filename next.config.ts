import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {},
  async redirects() {
    return [
      // ── Page redirects (old Webflow URLs → new Next.js URLs) ──
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/faq", destination: "/contact", permanent: true },

      // ── Legal pages (now have real pages) ──
      { source: "/legal-page-template", destination: "/", permanent: false },

      // ── Old route rename ──
      { source: "/solara-plus", destination: "/grow", permanent: true },

      // ── Blog slug near-match ──
      {
        source: "/blog/top-ugc-video-editing-apps-for-content-creators",
        destination: "/blog/top-ugc-video-editing-apps",
        permanent: true,
      },


    ];
  },
};

export default nextConfig;
