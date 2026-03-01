export interface Tool {
  name: string;
  description: string;
  category: string;
  url: string;
}

export const categories = [
  "All",
  "Content",
  "SEO",
  "Ads",
  "Analytics",
  "Social",
  "Email",
] as const;

export type Category = (typeof categories)[number];

export const tools: Tool[] = [
  {
    name: "Jasper",
    description: "AI writing assistant for marketing teams. Generates blog posts, ads, emails, and social content at scale.",
    category: "Content",
    url: "https://jasper.ai",
  },
  {
    name: "Surfer SEO",
    description: "Content optimization tool that analyzes SERPs and provides real-time suggestions for ranking higher.",
    category: "SEO",
    url: "https://surferseo.com",
  },
  {
    name: "AdCreative.ai",
    description: "Generate conversion-focused ad creatives and banners using AI trained on high-performing ads.",
    category: "Ads",
    url: "https://adcreative.ai",
  },
  {
    name: "Mixpanel",
    description: "Product analytics that helps you understand user behavior and measure the impact of marketing efforts.",
    category: "Analytics",
    url: "https://mixpanel.com",
  },
  {
    name: "Buffer",
    description: "Social media management platform for scheduling, publishing, and analyzing content across channels.",
    category: "Social",
    url: "https://buffer.com",
  },
  {
    name: "Mailchimp",
    description: "Email marketing platform with AI-powered send time optimization, segmentation, and content suggestions.",
    category: "Email",
    url: "https://mailchimp.com",
  },
  {
    name: "Copy.ai",
    description: "AI-powered copywriting tool for generating marketing copy, product descriptions, and social posts.",
    category: "Content",
    url: "https://copy.ai",
  },
  {
    name: "Ahrefs",
    description: "Comprehensive SEO toolset for keyword research, backlink analysis, site audits, and competitor tracking.",
    category: "SEO",
    url: "https://ahrefs.com",
  },
  {
    name: "Meta Ads Manager",
    description: "Official platform for managing Facebook and Instagram advertising campaigns with AI-driven optimization.",
    category: "Ads",
    url: "https://business.facebook.com",
  },
  {
    name: "Google Analytics 4",
    description: "Event-based analytics platform with AI insights, predictive metrics, and cross-platform measurement.",
    category: "Analytics",
    url: "https://analytics.google.com",
  },
  {
    name: "Hootsuite",
    description: "Enterprise social media management with AI content suggestions, scheduling, and performance analytics.",
    category: "Social",
    url: "https://hootsuite.com",
  },
  {
    name: "ConvertKit",
    description: "Creator-focused email marketing with visual automations, landing pages, and subscriber tagging.",
    category: "Email",
    url: "https://convertkit.com",
  },
  {
    name: "Writesonic",
    description: "AI writing platform for SEO-optimized blog posts, landing pages, and marketing copy generation.",
    category: "Content",
    url: "https://writesonic.com",
  },
  {
    name: "Semrush",
    description: "All-in-one marketing toolkit for SEO, PPC, content marketing, and competitive research.",
    category: "SEO",
    url: "https://semrush.com",
  },
  {
    name: "Sprout Social",
    description: "Social media management and intelligence platform with AI-powered publishing and analytics.",
    category: "Social",
    url: "https://sproutsocial.com",
  },
  {
    name: "Amplitude",
    description: "Digital analytics platform that helps teams understand user behavior and optimize conversion funnels.",
    category: "Analytics",
    url: "https://amplitude.com",
  },
];
