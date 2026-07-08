import React from "react";
import PageHero from "../components/PageHero.jsx";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using this website, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use this site.",
  },
  {
    title: "2. Services",
    body: "Chez IT Solutions Pvt Ltd provides AI-powered digital marketing, website design and development, automation, and related services as described on this site. Specific engagements, deliverables, and pricing are agreed separately in a signed proposal or contract with each client.",
  },
  {
    title: "3. Use of This Website",
    body: "You agree to use this website only for lawful purposes and not to submit false, misleading, or fraudulent information through any form on this site, including the Growth Audit, Strategy Call, and Contact forms.",
  },
  {
    title: "4. Intellectual Property",
    body: "All content on this website — including text, graphics, logos, and the AI/robot illustrations — is the property of Chez IT Solutions Pvt Ltd or its licensors and may not be reproduced without permission.",
  },
  {
    title: "5. No Guarantee of Results",
    body: "While we work to deliver strong marketing performance for our clients, specific outcomes (such as lead volume, conversion rates, or ROAS) depend on many factors outside our control and are not guaranteed by anything stated on this website.",
  },
  {
    title: "6. Third-Party Links & Platforms",
    body: "This site links to third-party platforms including WhatsApp and social media. We are not responsible for the content, privacy practices, or availability of those third-party services.",
  },
  {
    title: "7. Limitation of Liability",
    body: "Chez IT Solutions Pvt Ltd is not liable for any indirect, incidental, or consequential damages arising from your use of this website, to the fullest extent permitted by law.",
  },
  {
    title: "8. Changes to These Terms",
    body: "We may update these Terms & Conditions from time to time. Continued use of this site after changes are posted constitutes acceptance of the updated terms.",
  },
  {
    title: "9. Governing Law",
    body: "These terms are governed by the laws of India, and any disputes will be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.",
  },
];

export default function TermsOfService() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Last updated: July 2026"
      />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm leading-relaxed text-navy-900/60">
          These Terms & Conditions govern your use of the Chez IT Solutions website. Please read
          them carefully.
        </p>
        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-bold text-navy-900">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-navy-900/60">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-navy-900/50">
          Questions about these terms? Reach us any time via the details on our{" "}
          <a href="/contact" className="font-medium text-brand-indigo hover:underline">
            Contact page
          </a>
          .
        </p>
      </section>
    </>
  );
}