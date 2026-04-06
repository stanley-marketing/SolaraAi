export interface CaseStudyMetric {
  label: string;
  value: string;
  context: string;
}

export type CaseStudySectionBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "metrics"; items: CaseStudyMetric[] }
  | { type: "callout"; text: string };

export interface CaseStudySection {
  title: string;
  blocks: CaseStudySectionBlock[];
}

export interface CaseStudyFaqItem {
  question: string;
  answer: string;
}

export interface CaseStudyCta {
  headline: string;
  link: string;
}

export interface CaseStudyHeroImage {
  src: string;
  alt: string;
}

export interface CaseStudyQuote {
  text: string;
  author: string;
  role: string;
  avatar: CaseStudyHeroImage;
}

export interface CaseStudySeoMeta {
  title: string;
  description: string;
  canonical: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  clientName: string;
  industry: string;
  location: string;
  engagementPeriod: string;
  datePublished: string;
  challenge: string;
  executiveSummary: string;
  heroHeadline: string;
  heroHighlight: string;
  heroImage: CaseStudyHeroImage;
  clientLogo: CaseStudyHeroImage;
  quote: CaseStudyQuote;
  metrics: CaseStudyMetric[];
  sections: CaseStudySection[];
  faq: CaseStudyFaqItem[];
  cta: CaseStudyCta;
  seoMeta: CaseStudySeoMeta;
}
