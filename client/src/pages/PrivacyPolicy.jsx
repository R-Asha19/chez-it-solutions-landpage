import React from "react";
import PageHero from "../components/PageHero.jsx";

const sections = [
  {
    title: "1. Information We Collect",
    body: "When you submit a form on this site — such as the Growth Audit request, Strategy Call booking, or Contact page — we collect the details you provide: your name, email address, phone number, company name, website, and any message you send us. We also collect standard technical information (like browser type and pages visited) through normal website analytics.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use the information you submit to respond to your enquiry, follow up about our services, and improve how we communicate with prospective and existing clients. We do not sell your personal information to third parties.",
  },
  {
    title: "3. WhatsApp Communication",
    body: "If you choose to contact us via the WhatsApp links on this site, you are starting a conversation with us directly on WhatsApp, subject to WhatsApp's own privacy policy and terms. Messages sent this way are used only to respond to your enquiry.",
  },
  {
    title: "4. Data Storage & Security",
    body: "Form submissions are stored securely in our database and are only accessible to authorized members of the Chez IT Solutions team. We take reasonable technical and organizational measures to protect your data from unauthorized access, alteration, or loss.",
  },
  {
    title: "5. Cookies",
    body: "This site may use basic cookies or similar technologies to remember preferences and understand how visitors use the site. You can disable cookies in your browser settings at any time.",
  },
  {
    title: "6. Third-Party Services",
    body: "We may use third-party tools (such as analytics providers, ad platforms, and email/communication tools) to operate this site and deliver our services. These providers only receive the information necessary to perform their function and are not permitted to use it for other purposes.",
  },
  {
    title: "7. Your Rights",
    body: "You can ask us at any time to tell you what personal information we hold about you, correct it, or delete it. To make such a request, contact us using the details on our Contact page.",
  },
  {
    title: "8. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.",
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated: July 2026"
      />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm leading-relaxed text-navy-900/60">
          Chez IT Solutions Pvt Ltd ("we", "us", "our") respects your privacy. This policy
          explains what information we collect through this website, how we use it, and the
          choices you have.
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
          Questions about this policy? Reach us any time via the details on our{" "}
          <a href="/contact" className="font-medium text-brand-indigo hover:underline">
            Contact page
          </a>
          .
        </p>
      </section>
    </>
  );
}