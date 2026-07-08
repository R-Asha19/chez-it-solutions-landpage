import React from "react";

export const Eyebrow = ({ children, light }) => (
  <p
    className={`text-center text-xs font-semibold uppercase tracking-wider ${
      light ? "text-blue-300" : "text-brand-indigo"
    }`}
  >
    {children}
  </p>
);

export const SectionHeading = ({ eyebrow, title, subtitle, light }) => (
  <div className="mx-auto max-w-2xl text-center">
    {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
    <h2
      className={`mt-3 text-3xl font-bold sm:text-4xl ${light ? "text-white" : "text-navy-900"}`}
    >
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-4 text-base ${light ? "text-white/60" : "text-navy-900/60"}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export const IconTile = ({ icon: Icon, className = "" }) => (
  <span
    className={`grid h-12 w-12 place-items-center rounded-xl bg-brand-indigo/10 text-brand-indigo ${className}`}
  >
    <Icon size={22} />
  </span>
);

export const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl border border-navy-900/8 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${className}`}
  >
    {children}
  </div>
);

export const StatPill = ({ icon: Icon, value, label, dark }) => (
  <div className="flex flex-col items-center gap-2 px-4 py-2 text-center">
    <span
      className={`grid h-11 w-11 place-items-center rounded-full ${
        dark ? "bg-white/10 text-white" : "bg-brand-indigo/10 text-brand-indigo"
      }`}
    >
      <Icon size={20} />
    </span>
    <span className={`text-2xl font-extrabold ${dark ? "text-white" : "text-navy-900"}`}>
      {value}
    </span>
    <span className={`text-xs ${dark ? "text-white/60" : "text-navy-900/50"}`}>{label}</span>
  </div>
);
