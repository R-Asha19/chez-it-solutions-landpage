import React from "react";
import { Target, Users, Lightbulb, ShieldCheck } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import { StatPill } from "../components/UI.jsx";
import { Rocket, Bot, Gauge } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results Over Vanity Metrics",
    desc: "We report on qualified leads and revenue impact, not just impressions and clicks.",
  },
  {
    icon: Lightbulb,
    title: "AI as a Force Multiplier",
    desc: "We use AI to remove guesswork from targeting, bidding, and reporting — never to replace strategy.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent by Default",
    desc: "Live dashboards and honest reporting, including the campaigns that didn't work.",
  },
  {
    icon: Users,
    title: "A Dedicated Growth Partner",
    desc: "One strategist who knows your business, not a rotating account manager.",
  },
];

const About = () => (
  <>
    <PageHero
      eyebrow="About Us"
      title="We Build Growth Engines, Not Just Campaigns"
      subtitle="Chez IT Solutions is an AI-powered digital marketing team helping businesses turn ad spend into predictable, measurable growth."
    />

    <section className="mx-auto max-w-4xl px-6 py-16 text-center">
      <h2 className="text-2xl font-bold text-navy-900">Our Story</h2>
      <p className="mt-4 text-sm leading-relaxed text-navy-900/60 sm:text-base">
        Chez IT Solutions started with a simple observation: most businesses were paying for
        marketing activity, not marketing outcomes. We set out to build a team that treats every
        campaign as an engineering problem — instrument it, measure it, and optimize it with AI
        until the numbers move in the right direction. Today we help healthcare providers, real
        estate developers, manufacturers, educators, SaaS companies, and e-commerce brands turn
        their marketing into a predictable source of qualified leads.
      </p>
    </section>

    <section className="bg-navy-950 px-6 py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-4">
        <StatPill icon={Rocket} value="5X" label="Average ROAS" dark />
        <StatPill icon={Target} value="300+" label="Campaigns Managed" dark />
        <StatPill icon={Gauge} value="95%" label="Client Retention" dark />
        <StatPill icon={Bot} value="8" label="Industries Served" dark />
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center text-2xl font-bold text-navy-900">What We Value</h2>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v) => (
          <div key={v.title} className="rounded-2xl border border-navy-900/8 p-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-indigo/10 text-brand-indigo">
              <v.icon size={20} />
            </span>
            <h3 className="mt-4 text-sm font-semibold text-navy-900">{v.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-900/55">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default About;
