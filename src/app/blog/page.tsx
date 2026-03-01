import type { Metadata } from "next";
import { BlogContent } from "./blog-content";

export const metadata: Metadata = {
  title: "Blog — Solara AI | AI Marketing Insights & Resources",
  description:
    "Expert insights on AI marketing strategy, content creation, ad optimization, SEO automation, and brand storytelling. Practical guides from the Solara AI team.",
  openGraph: {
    title: "Blog — Solara AI | AI Marketing Insights",
    description:
      "Expert insights on AI marketing strategy, content creation, and growth.",
    url: "https://solaraai.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solara AI Blog",
    description: "AI marketing insights, strategies, and practical guides.",
  },
  alternates: {
    canonical: "https://solaraai.com/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
