import React from "react";
import PageHero from "../components/PageHero.jsx";
import { industries, industryDetails } from "../data/content.js";

const Industries = () => (
  <>
    <PageHero
      eyebrow="Industries We Serve"
      title="Solutions Tailored for Every Industry"
      subtitle="Every industry converts differently. We adapt our playbook to how your buyers actually research and decide."
    />

    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((ind) => (
          <div
            key={ind.label}
            className="rounded-2xl border border-navy-900/8 p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-indigo/10 text-brand-indigo">
              <ind.icon size={22} />
            </span>
            <h3 className="mt-4 text-base font-semibold text-navy-900">{ind.label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-900/55">
              {industryDetails[ind.label]}
            </p>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Industries;
