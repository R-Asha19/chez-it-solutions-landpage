import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { useLeadModal } from "../context/LeadModalContext.jsx";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/about", label: "About Us" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { openLeadModal } = useLeadModal();

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition hover:text-white ${
      isActive ? "text-white" : "text-white/60"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-navy-950/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient">
            <Sparkles size={16} className="text-white" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold text-white">Chez IT Solutions</span>
            <span className="block text-[10px] text-white/40">AI-Powered Digital Marketing</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={navLinkClass} end={l.to === "/"}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() =>
            openLeadModal({
              title: "Book a Strategy Call",
              subtitle: "30 minutes with a growth strategist — no obligation.",
              source: "strategy_call",
            })
          }
          className="hidden btn-primary !py-2.5 !px-5 !text-xs lg:inline-flex"
        >
          Book a Strategy Call
        </button>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-navy-950 px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={navLinkClass}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                openLeadModal({
                  title: "Book a Strategy Call",
                  subtitle: "30 minutes with a growth strategist — no obligation.",
                  source: "strategy_call",
                });
              }}
              className="btn-primary w-full !py-2.5 !text-xs"
            >
              Book a Strategy Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
