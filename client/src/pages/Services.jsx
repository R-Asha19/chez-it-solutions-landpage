import React from "react";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import { IconTile } from "../components/UI.jsx";
import { services } from "../data/content.js";
import { useLeadModal } from "../context/LeadModalContext.jsx";

const Services = () => {
  const { openLeadModal } = useLeadModal();

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="AI-Powered Solutions for Every Stage of Growth"
        subtitle="From paid ads to AI chatbots, every service is built to be measured — so you always know what's driving results."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-navy-900/8 p-7 transition hover:shadow-lg"
            >
              <IconTile icon={s.icon} />
              <h3 className="mt-4 text-lg font-semibold text-navy-900">{s.title}</h3>
              <p className="mt-2 text-sm font-medium text-brand-indigo">{s.desc}</p>
              <p className="mt-3 text-sm leading-relaxed text-navy-900/55">{s.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-3xl bg-brand-gradient px-8 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="text-2xl font-bold text-white">Not sure which service fits?</h3>
            <p className="mt-1 text-sm text-white/80">
              Get a free audit and we'll recommend a starting point based on your goals.
            </p>
          </div>
          <button
            onClick={() =>
              openLeadModal({
                title: "Get Your Free Growth Audit",
                subtitle: "We'll review your current marketing and send back a personalized roadmap.",
                source: "growth_audit",
              })
            }
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-indigo transition hover:brightness-95"
          >
            Get Free Growth Audit <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Services;
