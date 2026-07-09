import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Sparkles, Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/logo.jpeg";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const serviceLinks = [
  "AI Performance Marketing",
  "SEO & AI Powered AEO & GEO Optimization",
  "Website Design & Development",
  "AI Chatbots & Automation",
  "Google Ads & Meta Ads",
  "Analytics & Reporting",
];

// NOTE: no confirmed social accounts for Chez IT Solutions yet — these are
// clean placeholder root links so the "Connect" buttons don't break.
// Swap each `href` for the real profile URL as soon as you have it.
const socialLinks = [
  { Icon: Facebook, href: "https://www.facebook.com/people/Chez-it-Solutions-PVT-Ltd/61574821846087/", label: "Facebook" },
  { Icon: Instagram, href: "https://www.instagram.com/chezitsolutionspvtltd/", label: "Instagram" },
  { Icon: Linkedin, href: "https://in.linkedin.com/company/chez-it-solutions-pvt-ltd", label: "LinkedIn" },
  { Icon: Youtube, href: "https://www.youtube.com/@chezITSolutions", label: "YouTube" },
];

// Real contact details (shared with the 1Ground property — same registered
// office). tel: opens the dialer, mailto: opens the visitor's mail app, and
// the maps link opens the exact pinned location in a new tab.
const PHONES = [
  { display: "044 4580 6259", href: "tel:04445806259" },
  { display: "+91 91500 08013", href: "tel:+919150008013" },
];
const EMAIL = "info@chezitsolutions.com";
const MAPS_HREF =
  "https://www.google.com/maps/place/Chez+IT+Solutions+Pvt+Ltd/@12.950289,80.1427074,851m/data=!3m1!1e3!4m6!3m5!1s0x3a525fe6b14617b7:0x85c21eb34295f5cf!8m2!3d12.9506236!4d80.1447244!16s%2Fg%2F11x6plywmd?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D";
const ADDRESS_LINES = ["Chez IT Solutions Pvt Ltd, 61/87, Station Rd, Radha Nagar,", "Chromepet, Chennai, Tamil Nadu 600044"];

const Footer = () => (
  <footer className="bg-navy-950 pt-16 text-white">
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-12 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <div className="flex items-center gap-2">
          <img src={logo} alt="Chez IT Solutions logo" className="h-8 w-8 rounded-lg object-cover" />
<span className="leading-tight">
  <span className="block text-sm font-bold">Chez IT Solutions Pvt Ltd</span>
  <span className="block text-[10px] text-white/40">AI-Powered Digital Marketing</span>
</span>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-white/50">
          Helping businesses grow with AI-powered marketing, automation &amp; data-driven
          strategies.
        </p>
        <div className="mt-5 flex gap-3">
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-8 w-8 place-items-center rounded-full bg-white/5 text-white/60 transition hover:bg-white/10 hover:text-white"
              aria-label={label}
              title={label}
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-white">Quick Links</h4>
        <ul className="mt-4 space-y-2.5 text-sm text-white/50">
          {quickLinks.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="transition hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-white">Services</h4>
        <ul className="mt-4 space-y-2.5 text-sm text-white/50">
          {serviceLinks.map((s) => (
            <li key={s}>
              <Link to="/services" className="transition hover:text-white">
                {s}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-white">Contact Us</h4>
        <ul className="mt-4 space-y-3 text-sm text-white/50">
          {PHONES.map((p) => (
  <li key={p.href} className="flex items-center gap-2">
    <Phone size={14} className="flex-none" />
    <a href={p.href} className="transition hover:text-white">
      {p.display}
    </a>
  </li>
))}
          <li className="flex items-center gap-2">
            <Mail size={14} className="flex-none" />
            <a href={`mailto:${EMAIL}`} className="transition hover:text-white">
              {EMAIL}
            </a>
          </li>
          <li className="flex items-start gap-2">
            <MapPin size={14} className="mt-0.5 flex-none" />
            <a
              href={MAPS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              {ADDRESS_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/5 px-6 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-white/40 sm:flex-row">
        <p>© 2025 Chez IT Solutions Pvt Ltd. All Rights Reserved.</p>
        <div className="flex gap-5">
          <Link to="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-white">
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;