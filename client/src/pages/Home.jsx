import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, CalendarDays, Star, CheckCircle2, Rocket, Target,
  Sparkles as SparklesIcon, ShieldCheck, Bot, Gauge,
} from "lucide-react";
import { useLeadModal } from "../context/LeadModalContext.jsx";
import { services, industries } from "../data/content.js";
import { SectionHeading, Card, IconTile, StatPill } from "../components/UI.jsx";
import AIChipGraphic from "../components/AIChipGraphic.jsx";
import RobotMascot from "../components/RobotMascot.jsx";

const Home = () => {
  const { openLeadModal } = useLeadModal();

  const openAudit = () =>
    openLeadModal({
      title: "Get Your Free Growth Audit",
      subtitle: "We'll review your current marketing and send back a personalized roadmap.",
      source: "growth_audit",
    });

  const openCall = () =>
    openLeadModal({
      title: "Book a Strategy Call",
      subtitle: "30 minutes with a growth strategist — no obligation.",
      source: "strategy_call",
    });

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-900">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(124,58,237,0.25),transparent_45%)]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-block rounded-full bg-brand-gradient px-4 py-1.5 text-[11px] font-semibold tracking-wide text-white">
              AI-DRIVEN. DATA-BACKED. RESULTS-FOCUSED.
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              AI-Powered Performance Marketing That Drives Real{" "}
              <span className="gradient-text">Business Growth</span>
            </h1>
            <p className="mt-6 max-w-lg text-base text-white/60">
              We help businesses generate qualified leads, increase sales, and maximize ROI using
              AI-driven Google Ads, Meta Ads, SEO, websites, automation, and analytics.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={openAudit} className="btn-primary">
                Get Free Growth Audit <ArrowRight size={16} />
              </button>
              <button onClick={openCall} className="btn-outline">
                <CalendarDays size={16} /> Book a Strategy Call
              </button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-white/50">
              <span className="text-sm font-semibold text-white/70">Google Partner</span>
              <span className="text-sm font-semibold text-white/70">∞ Meta Business Partner</span>
              <span className="flex items-center gap-1 text-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1">4.9/5 Rating on Google</span>
              </span>
            </div>
          </div>

          <div className="relative">
            <AIChipGraphic className="mx-auto h-72 w-72 sm:h-80 sm:w-80" />
            <div className="pointer-events-none absolute inset-0 grid grid-cols-2 gap-4 p-2 sm:p-4">
              <HeroCallout icon={Target} title="Predictive Targeting" desc="AI identifies high-intent audiences" className="pointer-events-auto self-start" />
              <HeroCallout icon={Gauge} title="Smart Optimization" desc="AI optimizes bids for better ROI" align="right" className="pointer-events-auto self-start justify-self-end" />
              <HeroCallout icon={SparklesIcon} title="Automated Insights" desc="AI turns data into actionable insights" className="pointer-events-auto self-end" />
              <HeroCallout icon={ShieldCheck} title="Better Results" desc="More leads, sales & higher ROAS" align="right" className="pointer-events-auto self-end justify-self-end" />
            </div>
            <div className="mx-auto -mt-4 h-2 w-40 rounded-full bg-brand-indigo/30 blur-md" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white px-6 py-20">
        <SectionHeading
          eyebrow="Our Services"
          title="AI-Powered Solutions for Every Stage of Growth"
        />
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Card key={s.title}>
              <IconTile icon={s.icon} />
              <h3 className="mt-4 text-base font-semibold text-navy-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-900/55">{s.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US / PERFORMANCE OVERVIEW */}
      <section className="bg-navy-950 px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Your Growth Partner Backed by AI &amp; Data
            </h2>
            <ul className="mt-6 space-y-3">
              {[
                "AI-powered campaign optimization",
                "Data-driven marketing decisions",
                "Qualified lead generation",
                "Transparent ROI reporting",
                "Conversion-focused landing pages",
                "Dedicated growth strategist",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-indigo">
                    <CheckCircle2 size={12} className="text-white" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-2xl">
            <p className="text-sm font-semibold text-navy-900">Performance Overview</p>
            <div className="mt-5 grid grid-cols-4 gap-3">
              {[
                { label: "Total Leads", value: "12,540", delta: "+26.3%" },
                { label: "Conversions", value: "3,258", delta: "+35.1%" },
                { label: "ROAS", value: "5.32x", delta: "+42.3%" },
                { label: "Cost Per Lead", value: "$7.45", delta: "-40.2%" },
              ].map((m) => (
                <div key={m.label}>
                  <p className="text-[11px] text-navy-900/45">{m.label}</p>
                  <p className="text-lg font-bold text-navy-900">{m.value}</p>
                  <p className="text-[11px] font-medium text-emerald-500">{m.delta}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="col-span-2 rounded-xl bg-navy-900/[0.03] p-3">
                <MiniTrendChart />
                <p className="mt-1 text-[11px] font-medium text-brand-indigo">
                  AI Optimization +42% Improvement
                </p>
              </div>
              <div className="rounded-xl bg-navy-900/[0.03] p-3">
                <p className="mb-2 text-[11px] font-semibold text-navy-900/60">Top Channels</p>
                <DonutLegend />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-white px-6 py-20">
        <SectionHeading eyebrow="Industries We Serve" title="Solutions Tailored for Every Industry" />
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-4 gap-6 sm:grid-cols-8">
          {industries.map((ind) => (
            <Link
              key={ind.label}
              to="/industries"
              className="group flex flex-col items-center gap-2 text-center"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-navy-900/5 text-navy-900/70 transition group-hover:bg-brand-indigo/10 group-hover:text-brand-indigo">
                <ind.icon size={22} />
              </span>
              <span className="text-xs font-medium text-navy-900/60">{ind.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* PROVEN RESULTS */}
      <section className="bg-white px-6 pb-20">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-brand-indigo">
          Proven Results
        </p>
        <div className="mx-auto mt-6 grid max-w-5xl grid-cols-2 gap-6 rounded-3xl bg-navy-900 px-8 py-12 sm:grid-cols-4">
          <StatPill icon={Rocket} value="5X" label="Average ROAS" dark />
          <StatPill icon={Target} value="40%" label="Lower Cost Per Lead" dark />
          <StatPill icon={Gauge} value="300+" label="Campaigns Managed" dark />
          <StatPill icon={Bot} value="95%" label="Client Retention" dark />
        </div>
      </section>

      {/* AI TECHNOLOGIES */}
      <section className="bg-white px-6 pb-20">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-brand-indigo">
          AI Technologies We Use
        </p>
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {[
            "Predictive Analytics", "Marketing Automation", "AI Chatbots", "Audience Segmentation",
            "Smart Bid Optimization", "AI Content Assistance", "CRM Integration",
          ].map((tech) => (
            <div
              key={tech}
              className="flex flex-col items-center gap-2 rounded-xl border border-navy-900/8 px-3 py-5 text-center"
            >
              <SparklesIcon size={20} className="text-brand-indigo" />
              <span className="text-xs font-medium text-navy-900/60">{tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="px-6 pb-20">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-brand-gradient px-8 py-10 pl-8 sm:pl-40">
          <RobotMascot className="absolute -bottom-2 left-2 hidden h-40 w-auto drop-shadow-xl sm:block" />
          <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h3 className="text-2xl font-bold text-white">Ready to Scale Your Business with AI?</h3>
              <p className="mt-1 text-sm text-white/80">
                Book a free consultation and receive a personalized digital growth roadmap.
              </p>
            </div>
            <button
              onClick={openCall}
              className="inline-flex flex-none items-center gap-2 whitespace-nowrap rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-indigo transition hover:brightness-95"
            >
              Get Started Today <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

const HeroCallout = ({ icon: Icon, title, desc, className = "" }) => (
  <div
    className={`h-fit max-w-[150px] rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm ${className}`}
  >
    <div className="flex items-center gap-2">
      <span className="grid h-7 w-7 flex-none place-items-center rounded-lg bg-brand-indigo/20 text-brand-indigo">
        <Icon size={14} />
      </span>
      <span className="text-xs font-semibold text-white">{title}</span>
    </div>
    <p className="mt-1.5 text-[11px] leading-snug text-white/50">{desc}</p>
  </div>
);

const MiniTrendChart = () => (
  <svg viewBox="0 0 220 70" className="h-16 w-full">
    <polyline
      points="0,55 30,45 60,50 90,30 120,35 150,15 180,20 220,5"
      fill="none"
      stroke="#4f46e5"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DonutLegend = () => {
  const rows = [
    { label: "Google Ads", value: "45%", color: "bg-brand-indigo" },
    { label: "Meta Ads", value: "30%", color: "bg-brand-purple" },
    { label: "SEO", value: "15%", color: "bg-blue-400" },
    { label: "Others", value: "10%", color: "bg-navy-900/20" },
  ];
  return (
    <ul className="space-y-1.5">
      {rows.map((r) => (
        <li key={r.label} className="flex items-center justify-between text-[11px] text-navy-900/60">
          <span className="flex items-center gap-1.5">
            <span className={`h-2 w-2 rounded-full ${r.color}`} /> {r.label}
          </span>
          <span className="font-medium">{r.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default Home;