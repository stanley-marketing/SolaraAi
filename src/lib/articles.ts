export type ArticleSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string }
  | { type: "tool"; number: number; name: string; description: string; features: string[]; pricing: string; image?: string };

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  tag: string;
  thumbnail: string;
  content: ArticleSection[];
}

import bestAiMarketingTools from "./articles/best-ai-marketing-tools";
import aiMarketingAutomationTrends from "./articles/ai-marketing-automation-trends";
import bestAiAdGenerators from "./articles/best-ai-ad-generators";
import topUgcVideoEditingApps from "./articles/top-ugc-video-editing-apps";
import synthesiaIoAlternatives from "./articles/synthesia-io-alternatives";
import howToAddCtas from "./articles/how-to-add-ctas-to-ai-generated-ugc-videos";
import bestInfluencerMarketingTools from "./articles/best-influencer-marketing-tools";
import howToBecomeUgcCreator from "./articles/how-to-become-a-ugc-creator";
import higgsFieldAiAlternatives from "./articles/higgsfield-ai-alternatives";
import ecommerceAdvertisingStrategies from "./articles/ecommerce-advertising-strategies";
import creativeProductAdvertisement from "./articles/creative-product-advertisement";
import ocoyaAlternatives from "./articles/ocoya-alternatives";

export const articles: Article[] = [
  bestAiMarketingTools,
  aiMarketingAutomationTrends,
  bestAiAdGenerators,
  topUgcVideoEditingApps,
  synthesiaIoAlternatives,
  howToAddCtas,
  bestInfluencerMarketingTools,
  howToBecomeUgcCreator,
  higgsFieldAiAlternatives,
  ecommerceAdvertisingStrategies,
  creativeProductAdvertisement,
  ocoyaAlternatives,
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}
