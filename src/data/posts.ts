export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string;
  author: Author;
  category: string;
  content: string;
}

const authors: Record<string, Author> = {
  sarah: {
    name: "Sarah Chen",
    role: "Head of AI Strategy",
    avatar: "/images/avatar-1.jpg",
  },
  marcus: {
    name: "Marcus Rivera",
    role: "Content Director",
    avatar: "/images/avatar-2.jpg",
  },
  elena: {
    name: "Elena Vasquez",
    role: "Growth Lead",
    avatar: "/images/avatar-3.jpg",
  },
};

export const posts: Post[] = [
  {
    slug: "ai-marketing-strategy-2026",
    title: "The AI Marketing Strategy That Actually Works in 2026",
    excerpt:
      "Forget the hype. Here's a grounded, tested framework for integrating AI into your marketing stack without losing the human touch.",
    cover: "/images/post-1.jpg",
    date: "2026-02-28",
    author: authors.sarah,
    category: "Strategy",
    content: `<p>The conversation around AI in marketing has shifted dramatically. We've moved past the "will AI replace marketers?" panic and into something far more interesting: how do we build marketing systems where AI and human creativity actually compound each other?</p>

<h2>The Problem with Most AI Marketing</h2>
<p>Most teams are using AI the wrong way. They're generating content in bulk, hoping quantity will make up for the inevitable quality gap. But audiences are getting smarter. They can smell AI-generated content from a mile away — not because the grammar is off, but because the <em>soul</em> is missing.</p>
<p>The strategy that works isn't about replacing your team. It's about giving them superpowers.</p>

<h2>The Three-Layer Framework</h2>
<p>After working with over 200 brands, we've identified three layers where AI creates genuine leverage:</p>

<h3>Layer 1: Research & Intelligence</h3>
<p>AI excels at processing massive amounts of data to surface insights humans would miss. Audience sentiment shifts, emerging keyword clusters, competitor positioning changes — these are signals buried in noise that AI can extract in seconds.</p>

<h3>Layer 2: Content Acceleration</h3>
<p>Not generation — acceleration. The best results come when AI handles the scaffolding (outlines, variations, reformatting across platforms) while humans handle the storytelling. Your brand voice, your angles, your emotional hooks — those stay human.</p>

<h3>Layer 3: Optimization & Learning</h3>
<p>This is where AI truly shines. Real-time budget allocation, creative testing at scale, performance prediction — these are tasks that are mathematically impossible for humans to do as well as machines.</p>

<blockquote>The goal isn't to automate marketing. It's to automate the parts that drain your creativity so you can pour more into the parts that matter.</blockquote>

<h2>Implementation Timeline</h2>
<p>Don't try to do everything at once. Start with Layer 1 (research), prove the value, then expand. Most successful teams take 90 days to fully integrate all three layers.</p>

<p>The brands winning in 2026 aren't the ones using the most AI. They're the ones using it most intentionally.</p>`,
  },
  {
    slug: "content-creation-autopilot",
    title: "How to Put Your Content Creation on Autopilot (Without Losing Quality)",
    excerpt:
      "A practical guide to building content workflows that run autonomously while maintaining your brand's authentic voice.",
    cover: "/images/post-2.jpg",
    date: "2026-02-20",
    author: authors.marcus,
    category: "Content",
    content: `<p>Every marketer knows the feeling: it's Monday morning, the content calendar is half-empty, and three platforms need fresh posts by noon. The scramble is real, and it's killing your best work.</p>

<h2>The Content Engine Concept</h2>
<p>Think of your content operation as an engine with four cylinders: research, creation, distribution, and optimization. When all four are firing in sequence, you get smooth, consistent output. When one stalls, the whole thing shudders.</p>

<p>The key insight is that three of those four cylinders can be largely automated. Research, distribution, and optimization are pattern-based activities. Creation — the actual storytelling — is where your human spark belongs.</p>

<h2>Building Your Workflow</h2>
<p>Start with a content brief system. AI analyzes your top-performing content, identifies patterns, and generates briefs that include topic angle, target keywords, audience pain points, and suggested structure. You approve or modify the brief in 2 minutes instead of spending 30 minutes researching from scratch.</p>

<h3>The Repurposing Multiplier</h3>
<p>One long-form piece becomes 8-12 pieces of content across platforms. A blog post becomes a LinkedIn carousel, three Twitter threads, two Instagram stories, a TikTok script, and an email newsletter segment. AI handles the reformatting; you handle the quality check.</p>

<blockquote>The best content systems don't create more work. They multiply the impact of the work you're already doing.</blockquote>

<h2>Quality Gates</h2>
<p>Automation without quality gates is a recipe for brand damage. Build three checkpoints: tone check (does this sound like us?), accuracy check (are the claims solid?), and value check (would I personally find this useful?).</p>

<p>The brands that nail this balance — automated volume with human quality — are the ones building audiences that actually stick around.</p>`,
  },
  {
    slug: "ad-spend-optimization-ai",
    title: "Stop Wasting Ad Spend: How AI Optimizes Every Dollar",
    excerpt:
      "Your ad budget is probably 30% wasted. Here's how AI identifies the leaks and redirects spend to what's actually converting.",
    cover: "/images/post-3.jpg",
    date: "2026-02-15",
    author: authors.elena,
    category: "Advertising",
    content: `<p>Here's a stat that should make every CMO uncomfortable: the average marketing team wastes 26% of their ad budget on underperforming placements. Not because they're bad at their jobs, but because the volume of decisions required to optimize modern ad campaigns exceeds human cognitive bandwidth.</p>

<h2>The Optimization Gap</h2>
<p>A typical multi-platform campaign generates thousands of data points daily. Click-through rates by time of day, conversion rates by creative variant, cost-per-acquisition by audience segment — the matrix of decisions is enormous.</p>

<p>Human media buyers check in once or twice a day. They make adjustments based on what they see. But the landscape has already shifted by the time they act. AI doesn't sleep, doesn't get distracted, and processes every signal simultaneously.</p>

<h2>Three Areas of Immediate Impact</h2>

<h3>1. Creative Testing at Scale</h3>
<p>Instead of testing 3-4 ad variations, AI can manage 50+ variants simultaneously, identifying winners within hours instead of weeks. The winning creative gets more budget automatically; the losers get cut before they drain resources.</p>

<h3>2. Audience Refinement</h3>
<p>AI continuously analyzes who's converting and builds lookalike models in real time. Your targeting gets sharper every day, not just when someone manually reviews the data.</p>

<h3>3. Budget Allocation</h3>
<p>Dynamic budget shifting between platforms, campaigns, and ad sets based on real-time performance. If Instagram is outperforming Facebook today, budget flows there automatically.</p>

<blockquote>The goal isn't to spend less on ads. It's to make every dollar work harder than the last.</blockquote>

<p>Teams using AI-driven optimization typically see 30-45% improvement in ROAS within the first 60 days. Not because the AI is magic — because it's making thousands of small, correct decisions that no human team could keep up with.</p>`,
  },
  {
    slug: "seo-autonomous-growth",
    title: "Autonomous SEO: How AI Builds Your Organic Traffic Machine",
    excerpt:
      "The new SEO isn't about keyword stuffing. It's about building an intelligent system that grows your organic presence while you sleep.",
    cover: "/images/post-4.jpg",
    date: "2026-02-08",
    author: authors.sarah,
    category: "SEO",
    content: `<p>SEO used to be a craft. You'd research keywords, write optimized content, build backlinks, and wait. The cycle took months. The results were unpredictable. And just when you figured out what worked, Google would change the algorithm.</p>

<h2>The Shift to Autonomous SEO</h2>
<p>Modern SEO isn't a task — it's a system. And systems can be automated. Not the creative parts (your unique perspective and expertise still matter enormously), but the mechanical parts: keyword gap analysis, content brief generation, technical audit monitoring, and performance tracking.</p>

<h3>What AI Handles</h3>
<p>Think of your SEO AI as a research analyst who never stops working. It continuously monitors your keyword landscape, identifies emerging opportunities before competitors spot them, and generates detailed briefs for content that fills gaps in your coverage.</p>

<h3>What You Handle</h3>
<p>The actual thinking. The original research. The expert opinions. The storytelling that makes someone bookmark your page instead of bouncing back to Google. AI can tell you what to write about; only you can write it in a way that builds trust.</p>

<h2>The Compound Effect</h2>
<p>The magic of autonomous SEO is compounding. Every piece of optimized content builds domain authority. Every technical fix improves crawlability. Every internal link strengthens the network. Over 6-12 months, these small improvements stack into something transformative.</p>

<blockquote>SEO isn't about gaming algorithms. It's about systematically becoming the most useful resource for your audience's questions.</blockquote>

<p>The teams seeing the best results aren't the ones with the biggest SEO budgets. They're the ones who've built systems that improve automatically, freeing them to focus on creating genuinely valuable content.</p>`,
  },
  {
    slug: "brand-storytelling-ai-age",
    title: "Brand Storytelling in the AI Age: Finding Your Voice When Everyone Has a Robot",
    excerpt:
      "When every brand has access to the same AI tools, your story becomes your only true differentiator. Here's how to sharpen it.",
    cover: "/images/post-5.jpg",
    date: "2026-01-30",
    author: authors.marcus,
    category: "Storytelling",
    content: `<p>There's a paradox at the heart of AI marketing: the more powerful the tools become, the more important human storytelling gets. When everyone can generate competent copy in seconds, competent isn't enough anymore. You need to be compelling.</p>

<h2>The Commoditization Problem</h2>
<p>AI has democratized content creation. A solo founder can now produce the same volume of content as a team of ten. This is wonderful for access and terrible for differentiation. When the barrier to creating content drops to zero, the market floods.</p>

<p>The signal-to-noise ratio gets worse. Audiences develop "content blindness" — they scroll past anything that feels generic, templated, or obviously AI-generated. Not because it's bad, but because it's unremarkable.</p>

<h2>The Story Advantage</h2>
<p>Stories are resistant to commoditization because they're inherently personal. Your origin story, your failures, your specific point of view on your industry — these can't be replicated by a competitor's AI. They're uniquely yours.</p>

<h3>The Three Elements of Magnetic Brand Stories</h3>
<p><strong>Tension:</strong> Every good story has conflict. What problem did you see that nobody else was solving? What broke in your industry that made you angry enough to build something?</p>
<p><strong>Specificity:</strong> Generic stories are forgettable. Specific ones stick. Don't say "we help businesses grow." Say "we helped a dentist in Tel Aviv go from 3 leads a month to 47 in six weeks."</p>
<p><strong>Vulnerability:</strong> Brands that admit what they don't know, where they've failed, and what they're still figuring out build deeper trust than brands that present a polished facade.</p>

<blockquote>In a world where AI can write anything, the brands that win are the ones brave enough to say something only they can say.</blockquote>

<p>Use AI to amplify your story across channels, formats, and audiences. But never outsource the story itself. That's the one thing that makes you irreplaceable.</p>`,
  },
  {
    slug: "marketing-metrics-that-matter",
    title: "The Only 5 Marketing Metrics That Actually Matter (And How to Track Them)",
    excerpt:
      "Dashboards full of vanity metrics are killing your strategy. Here are the five numbers that actually predict growth.",
    cover: "/images/post-6.jpg",
    date: "2026-01-22",
    author: authors.elena,
    category: "Analytics",
    content: `<p>Every marketing team has too many dashboards and not enough insight. We track impressions, reach, engagement rate, follower count, email open rate, click-through rate, bounce rate, time on page, scroll depth — the list goes on. But how many of these numbers actually change your decisions?</p>

<h2>The Vanity Metric Trap</h2>
<p>Vanity metrics feel good but don't inform strategy. A post getting 10,000 impressions means nothing if none of those people become customers. High follower counts are meaningless if engagement is dead. Even "engagement rate" can be misleading — likes don't pay the bills.</p>

<h2>The Five That Matter</h2>

<h3>1. Customer Acquisition Cost (CAC)</h3>
<p>How much does it cost to acquire one customer across all channels? This is your efficiency number. Track it monthly, by channel, and by campaign. If it's going up, something's broken.</p>

<h3>2. Lead-to-Customer Rate</h3>
<p>What percentage of leads actually convert? This tells you whether your marketing is attracting the right people. A 1% conversion rate on 10,000 leads is worse than a 10% rate on 1,000.</p>

<h3>3. Revenue Per Channel</h3>
<p>Which channels actually drive revenue? Not traffic, not leads — revenue. This kills sacred cows fast. That Instagram account you've been pouring time into might generate zero revenue.</p>

<h3>4. Content-Attributed Pipeline</h3>
<p>How much of your sales pipeline touched your content before converting? This proves content ROI in language the CFO understands.</p>

<h3>5. Time to Value</h3>
<p>How long from first touch to purchase? If your average is 90 days and a competitor's is 30, you're losing deals to impatience, not quality.</p>

<blockquote>Measure what matters. Ignore what doesn't. The clarity is liberating.</blockquote>

<p>Set up a single dashboard with these five metrics. Check it weekly. Make decisions based on trends, not snapshots. Your strategy will sharpen almost immediately.</p>`,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): Post[] {
  const post = getPost(slug);
  if (!post) return posts.slice(0, count);
  return posts.filter((p) => p.slug !== slug).slice(0, count);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
