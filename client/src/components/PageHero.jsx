import React from "react";

const PageHero = ({ eyebrow, title, subtitle }) => (
  <section className="relative overflow-hidden bg-navy-900 px-6 py-16 text-center">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.25),transparent_50%)]" />
    <div className="relative mx-auto max-w-2xl">
      {eyebrow && (
        <span className="inline-block rounded-full bg-brand-gradient px-4 py-1.5 text-[11px] font-semibold tracking-wide text-white">
          {eyebrow}
        </span>
      )}
      <h1 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">{title}</h1>
      {subtitle && <p className="mt-4 text-sm text-white/60 sm:text-base">{subtitle}</p>}
    </div>
  </section>
);

export default PageHero;
