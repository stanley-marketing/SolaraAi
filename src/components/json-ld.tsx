interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Solara AI",
  url: "https://solaraai.com",
  logo: "https://solaraai.com/images/logo.svg",
  description:
    "AI-powered marketing platform. A full marketing department in software — storytelling, strategy, and research on auto-pilot.",
  foundingDate: "2024",
  sameAs: [
    "https://linkedin.com/company/solaraai",
    "https://instagram.com/solaraai",
    "https://facebook.com/solaraai",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@solaraai.com",
    contactType: "sales",
    availableLanguage: "English",
  },
};

export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Solara AI",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://solaraai.com",
  description:
    "AI marketing platform that handles content creation, ad management, SEO, and analytics.",
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      price: "39",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
      url: "https://solaraai.com/pricing",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "89",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
      url: "https://solaraai.com/pricing",
    },
    {
      "@type": "Offer",
      name: "Premium",
      price: "179",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
      url: "https://solaraai.com/pricing",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
  },
};

export function createFaqSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function createArticleSchema(post: {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  cover: string;
  author: { name: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `https://solaraai.com${post.cover}`,
    datePublished: post.date,
    dateModified: post.date,
    url: `https://solaraai.com/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Solara AI",
      logo: {
        "@type": "ImageObject",
        url: "https://solaraai.com/images/logo.svg",
      },
    },
  };
}

export function createBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
