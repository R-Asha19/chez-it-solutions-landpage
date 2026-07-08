import {
  Rocket, Search, Monitor, Bot, Share2, BarChart3, Mail,
  HeartPulse, Home as HomeIcon, Factory, GraduationCap, Cloud,
  ShoppingCart, Users, Building2,
} from "lucide-react";

export const services = [
  {
    icon: Rocket,
    title: "AI Performance Marketing",
    desc: "AI-driven Google Ads, Meta Ads & programmatic campaigns that maximize ROI.",
    details:
      "We run always-learning campaigns across Google, Meta, and programmatic inventory. Machine-learning bid strategies reallocate spend toward the audiences and creatives that actually convert, so every rupee works harder each week.",
  },
  {
    icon: Search,
    title: "SEO & AI Search Optimization",
    desc: "Rank higher on Google, ChatGPT, Gemini & AI search engines with our strategies.",
    details:
      "Beyond classic SEO, we optimize your content and structured data so AI answer engines like ChatGPT and Gemini surface your brand — technical audits, content clusters, and authoritative backlinks included.",
  },
  {
    icon: Monitor,
    title: "Website Design & Development",
    desc: "High-converting, responsive websites designed to turn visitors into customers.",
    details:
      "Fast, accessible, mobile-first builds on the MERN stack with conversion-focused layouts, clean information architecture, and built-in analytics so every page pulls its weight.",
  },
  {
    icon: Bot,
    title: "AI Chatbots & WhatsApp Automation",
    desc: "Engage, nurture & convert leads 24/7 with intelligent AI chatbots & WhatsApp automation.",
    details:
      "Round-the-clock lead qualification and support through WhatsApp and web chatbots, handing warm leads to your sales team automatically the moment they're ready.",
  },
  {
    icon: Monitor,
    title: "Google Ads & Meta Ads",
    desc: "Expert management of Google Ads & Meta Ads to drive quality traffic and leads.",
    details:
      "Certified Google Partner and Meta Business Partner management — audience research, creative testing, and weekly optimization cycles focused on cost per qualified lead.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build brand awareness, engage audiences & drive growth across social platforms.",
    details:
      "Content calendars, community management, and paid social amplification tuned to where your buyers actually spend their time.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard & Reporting",
    desc: "Real-time insights, AI-powered reports & transparent ROI tracking.",
    details:
      "Live dashboards tie every lead back to the campaign, keyword, or post that generated it, so you always know what's working and what to cut.",
  },
  {
    icon: Mail,
    title: "Email Marketing Automation",
    desc: "Automated email campaigns that nurture leads and boost customer retention.",
    details:
      "Behavior-triggered sequences that nurture new leads, win back dormant customers, and keep your brand top of mind without manual effort.",
  },
];

export const industries = [
  { icon: HeartPulse, label: "Healthcare" },
  { icon: HomeIcon, label: "Real Estate" },
  { icon: Factory, label: "Manufacturing" },
  { icon: GraduationCap, label: "Education" },
  { icon: Cloud, label: "SaaS" },
  { icon: ShoppingCart, label: "E-commerce" },
  { icon: Users, label: "SMEs" },
  { icon: Building2, label: "Enterprises" },
];

export const industryDetails = {
  Healthcare:
    "Patient-acquisition funnels that respect compliance requirements — local SEO, appointment-booking landing pages, and reputation management for clinics and hospitals.",
  "Real Estate":
    "Lead generation for builders, brokers, and portals: property-listing SEO, WhatsApp lead routing, and retargeting for buyers who viewed but didn't enquire.",
  Manufacturing:
    "B2B lead generation through LinkedIn ads, technical SEO for spec-driven searches, and long-cycle email nurture for procurement teams.",
  Education:
    "Admission-cycle campaigns, landing pages for each course/intake, and automated counsellor follow-up via WhatsApp and email.",
  SaaS:
    "Demo-request funnels, product-led SEO content, and trial-to-paid nurture sequences tied into your existing CRM.",
  "E-commerce":
    "Full-funnel Meta and Google Shopping campaigns, abandoned-cart automation, and creative testing at scale.",
  SMEs:
    "Budget-conscious, high-accountability marketing — a single dashboard showing exactly what each rupee returned.",
  Enterprises:
    "Multi-market campaign governance, brand-safe automation, and custom reporting integrated with your existing martech stack.",
};

export const caseStudies = [
  {
    slug: "urbannest-realty",
    client: "UrbanNest Realty",
    industry: "Real Estate",
    result: "3.2x qualified leads in 90 days",
    summary:
      "Rebuilt their lead funnel with WhatsApp automation and hyperlocal Meta campaigns across 6 cities.",
    metrics: [
      { label: "Cost per lead", value: "-46%" },
      { label: "Qualified leads", value: "+320%" },
      { label: "Site speed", value: "+58%" },
    ],
  },
  {
    slug: "greenfield-agritech",
    client: "Greenfield Agritech",
    industry: "Manufacturing",
    result: "5x ROAS on B2B campaigns",
    summary:
      "Combined LinkedIn ABM with a technical SEO overhaul to reach procurement decision-makers.",
    metrics: [
      { label: "ROAS", value: "5.1x" },
      { label: "Organic traffic", value: "+180%" },
      { label: "Sales cycle", value: "-22%" },
    ],
  },
  {
    slug: "brightpath-academy",
    client: "BrightPath Academy",
    industry: "Education",
    result: "2,400+ admission enquiries in one intake",
    summary:
      "Launched course-specific landing pages and an AI chatbot to handle after-hours parent queries.",
    metrics: [
      { label: "Enquiries", value: "2,400+" },
      { label: "Cost per enquiry", value: "-38%" },
      { label: "Response time", value: "<2 min" },
    ],
  },
  {
    slug: "veloce-fashion",
    client: "Veloce Fashion",
    industry: "E-commerce",
    result: "4.8x ROAS across festive season",
    summary:
      "Creative-led Meta and Google Shopping campaigns with automated abandoned-cart recovery.",
    metrics: [
      { label: "ROAS", value: "4.8x" },
      { label: "Cart recovery", value: "+27%" },
      { label: "Repeat purchase", value: "+41%" },
    ],
  },
];

export const blogPosts = [
  {
    slug: "ai-search-optimization-2026",
    title: "How AI Search Is Rewriting the Rules of SEO in 2026",
    excerpt:
      "ChatGPT and Gemini are becoming discovery surfaces of their own. Here's how to structure your content so AI engines cite your brand.",
    category: "SEO & AI Search",
    date: "2026-06-18",
    readTime: "6 min read",
  },
  {
    slug: "whatsapp-automation-lead-response",
    title: "Why WhatsApp Automation Cuts Lead Response Time to Under a Minute",
    excerpt:
      "A look at how automated WhatsApp flows qualify and route leads before your sales team even opens their laptop.",
    category: "Automation",
    date: "2026-05-30",
    readTime: "5 min read",
  },
  {
    slug: "google-ads-vs-meta-ads-2026",
    title: "Google Ads vs Meta Ads in 2026: Where Should Your Next Rupee Go?",
    excerpt:
      "A practical framework for splitting budget between search intent and social discovery, based on your sales cycle.",
    category: "Paid Media",
    date: "2026-05-12",
    readTime: "7 min read",
  },
  {
    slug: "landing-page-conversion-checklist",
    title: "The 12-Point Landing Page Checklist We Use Before Every Launch",
    excerpt:
      "The exact pre-launch checklist our team runs through to make sure a new landing page is ready to convert traffic.",
    category: "Web Design",
    date: "2026-04-22",
    readTime: "4 min read",
  },
  {
    slug: "reporting-dashboards-that-matter",
    title: "Stop Drowning in Metrics: Building a Dashboard That Actually Drives Decisions",
    excerpt:
      "Most marketing dashboards show everything and explain nothing. Here's how we design ones that do the opposite.",
    category: "Analytics",
    date: "2026-04-02",
    readTime: "5 min read",
  },
  {
    slug: "email-nurture-sequences-that-convert",
    title: "5 Email Nurture Sequences Every Growing Business Should Have",
    excerpt:
      "From welcome series to win-back campaigns — the automated sequences that quietly do the selling for you.",
    category: "Email Marketing",
    date: "2026-03-15",
    readTime: "6 min read",
  },
];
