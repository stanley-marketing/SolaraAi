export type ArticleSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string }
  | { type: "image"; src: string; alt: string }
  | { type: "tool"; number: number; name: string; url?: string; description: string; features: string[]; pricing: string; image?: string };

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
import aiToolsForSocialMediaContentCreation from "./articles/ai-tools-for-social-media-content-creation";
import bestAiAdToolsForUgc from "./articles/best-ai-ad-tools-for-ugc";
import bestAiReelMaker from "./articles/best-ai-reel-maker";
import bestAiVideoAdTools from "./articles/best-ai-video-ad-tools";
import bestEcommerceVideoAds from "./articles/best-ecommerce-video-ads";
import bestProductCommercials from "./articles/best-product-commercials";
import adCreativeAiAlternatives from "./articles/ad-creative-ai-alternatives";
import aiAgencyMarketingStrategies from "./articles/ai-agency-marketing-strategies";
import aiAgentsForMarketing from "./articles/ai-agents-for-marketing";
import aiMarketingAutomationTools from "./articles/ai-marketing-automation-tools";
import aiMarketingAutomation from "./articles/ai-marketing-automation";
import aiToolsForInstagram from "./articles/ai-tools-for-instagram";
import aiToolsForMarketing from "./articles/ai-tools-for-marketing";
import aiMarketingForSmallBusiness from "./articles/ai-marketing-for-small-business";
import businessVideoExamples from "./articles/business-video-examples";
import creatifyAlternatives from "./articles/creatify-alternatives";
import examplesOfAiInMarketingAutomation from "./articles/examples-of-ai-in-marketing-automation";
import futureOfAiInSocialMedia from "./articles/future-of-ai-in-social-media";
import heygenAlternatives from "./articles/heygen-alternatives";
import hootsuiteAlternatives from "./articles/hootsuite-alternatives";
import shortFormVideos from "./articles/short-form-videos";
import socialMediaContentCreationStrategies from "./articles/social-media-content-creation-strategies";
import sproutSocialAlternatives from "./articles/sprout-social-alternatives";
import ugcVideoExamples from "./articles/ugc-video-examples";
import whatIsAnAiMarketingAgency from "./articles/what-is-an-ai-marketing-agency";
import howDoYouImproveVideoQuality from "./articles/how-do-you-improve-the-video-quality-of-social-media-videos";
import howToAutomateUgcVideoProduction from "./articles/how-to-automate-ugc-video-production-for-ecommerce-ads";
import howToCreateAiAvatarVideo from "./articles/how-to-create-ai-avatar-video";
import howToCreateAiVersionOfYourself from "./articles/how-to-create-an-ai-version-of-yourself";
import howToLearnShortFormVideosOnInstagram from "./articles/how-to-learn-to-make-short-form-videos-on-instagram";
import madgicxAlternatives from "./articles/madgicx-alternatives";
import copyAiAlternative from "./articles/copy-ai-alternative";
import jasperAiAlternative from "./articles/jasper-ai-alternative";
import blazeAiAlternative from "./articles/blaze-ai-alternative";

export const articles: Article[] = [
  blazeAiAlternative,
  aiMarketingAutomation,
  aiMarketingForSmallBusiness,
  jasperAiAlternative,
  copyAiAlternative,
  bestAiMarketingTools,
  sproutSocialAlternatives,
  hootsuiteAlternatives,
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
  aiToolsForSocialMediaContentCreation,
  bestAiAdToolsForUgc,
  bestAiReelMaker,
  bestAiVideoAdTools,
  bestEcommerceVideoAds,
  bestProductCommercials,
  adCreativeAiAlternatives,
  aiAgencyMarketingStrategies,
  aiAgentsForMarketing,
  aiMarketingAutomationTools,
  aiToolsForInstagram,
  aiToolsForMarketing,
  businessVideoExamples,
  creatifyAlternatives,
  examplesOfAiInMarketingAutomation,
  futureOfAiInSocialMedia,
  heygenAlternatives,
  shortFormVideos,
  socialMediaContentCreationStrategies,
  ugcVideoExamples,
  whatIsAnAiMarketingAgency,
  howDoYouImproveVideoQuality,
  howToAutomateUgcVideoProduction,
  howToCreateAiAvatarVideo,
  howToCreateAiVersionOfYourself,
  howToLearnShortFormVideosOnInstagram,
  madgicxAlternatives,
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}
