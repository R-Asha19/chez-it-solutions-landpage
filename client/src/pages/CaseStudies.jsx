import React from "react";
import PageHero from "../components/PageHero.jsx";
import { caseStudies } from "../data/content.js";

const CaseStudies = () => (
  <>
    <PageHero
      eyebrow="Case Studies"
      title="Real Results for Real Businesses"
      subtitle="A look at how we've helped businesses across industries turn marketing spend into measurable growth."
    />

    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {caseStudies.map((cs) => (
          <div
            key={cs.slug}
            className="flex flex-col rounded-2xl border border-navy-900/8 p-7 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="w-fit rounded-full bg-brand-indigo/10 px-3 py-1 text-[11px] font-semibold text-brand-indigo">
              {cs.industry}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-navy-900">{cs.client}</h3>
            <p className="mt-1 text-sm font-semibold text-emerald-500">{cs.result}</p>
            <p className="mt-3 text-sm leading-relaxed text-navy-900/55">{cs.summary}</p>
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-navy-900/8 pt-5">
              {cs.metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-base font-bold text-navy-900">{m.value}</p>
                  <p className="text-[11px] text-navy-900/45">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default CaseStudies;
