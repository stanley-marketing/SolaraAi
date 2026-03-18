import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
    ],
  },
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

      // ── Missing blog posts (redirect to blog index to preserve authority) ──
      { source: "/blog/ad-creative-ai-alternatives", destination: "/blog", permanent: false },
      { source: "/blog/ai-agency-marketing-strategies", destination: "/blog", permanent: false },
      { source: "/blog/ai-agents-for-marketing", destination: "/blog", permanent: false },
      { source: "/blog/ai-marketing-automation-tools", destination: "/blog", permanent: false },
      { source: "/blog/ai-tools-for-instagram", destination: "/blog", permanent: false },
      { source: "/blog/ai-tools-for-marketing", destination: "/blog", permanent: false },
      { source: "/blog/ai-tools-for-social-media-content-creation", destination: "/blog", permanent: false },
      { source: "/blog/best-ai-ad-tools-for-ugc", destination: "/blog", permanent: false },
      { source: "/blog/best-ai-reel-maker", destination: "/blog", permanent: false },
      { source: "/blog/best-ai-video-ad-tools", destination: "/blog", permanent: false },
      { source: "/blog/best-ecommerce-video-ads", destination: "/blog", permanent: false },
      { source: "/blog/best-product-commercials", destination: "/blog", permanent: false },
      { source: "/blog/how-do-you-improve-the-video-quality-of-social-media-videos", destination: "/blog", permanent: false },
      { source: "/blog/how-to-automate-ugc-video-production-for-ecommerce-ads", destination: "/blog", permanent: false },
      { source: "/blog/how-to-create-ai-avatar-video", destination: "/blog", permanent: false },
      { source: "/blog/how-to-create-an-ai-version-of-yourself", destination: "/blog", permanent: false },
      { source: "/blog/how-to-learn-to-make-short-form-videos-on-instagram", destination: "/blog", permanent: false },
      { source: "/blog/madgicx-alternatives", destination: "/blog", permanent: false },
      { source: "/blog/short-form-videos", destination: "/blog", permanent: false },
      { source: "/blog/social-media-content-creation-strategies", destination: "/blog", permanent: false },
      { source: "/blog/sprout-social-alternatives", destination: "/blog", permanent: false },
      { source: "/blog/ugc-video-examples", destination: "/blog", permanent: false },
      { source: "/blog/what-is-an-ai-marketing-agency", destination: "/blog", permanent: false },
    ];
  },
};

export default nextConfig;
