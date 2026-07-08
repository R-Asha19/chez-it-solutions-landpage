import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Loader2, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import { submitLead } from "../api/leads.js";

const initialForm = { name: "", email: "", phone: "", company: "", website: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      await submitLead({ ...form, source: "contact_page" });
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err?.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Growth"
        subtitle="Tell us a bit about your business and one of our strategists will get back to you within one business day."
      />

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-navy-900">Contact Information</h2>
          <ul className="mt-6 space-y-5 text-sm text-navy-900/60">
            <li className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 flex-none text-brand-indigo" />
              <a href="tel:+917094640322" className="transition hover:text-brand-indigo">
                +91 70946 40322
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 flex-none text-brand-indigo" />
              <a href="mailto:enquiry1ground@gmail.com" className="transition hover:text-brand-indigo">
                enquiry1ground@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 flex-none text-brand-indigo" />
              <a
                href="https://www.google.com/maps/place/Chez+IT+Solutions+Pvt+Ltd/@12.950289,80.1427074,851m/data=!3m1!1e3!4m6!3m5!1s0x3a525fe6b14617b7:0x85c21eb34295f5cf!8m2!3d12.9506236!4d80.1447244!16s%2Fg%2F11x6plywmd?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer" 
                className="transition hover:text-brand-indigo"
              >
                Chez IT Solutions Pvt Ltd, 61/87,<br></br>Station Rd, Radha Nagar, Chromepet,<br></br> Chennai, Tamil Nadu 600044
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle size={18} className="mt-0.5 flex-none text-[#25D366]" />
              <a
                href="https://wa.me/917094640322?text=Hi%20Chez%20IT%20Solutions!%20I%27d%20like%20to%20know%20more%20about%20your%20AI-powered%20marketing%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#25D366] transition hover:brightness-90"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          {status === "success" ? (
            <div className="flex flex-col items-center rounded-2xl border border-navy-900/8 p-10 text-center">
              <CheckCircle2 className="mb-4 text-emerald-500" size={44} />
              <h3 className="text-lg font-bold text-navy-900">Message sent!</h3>
              <p className="mt-2 text-sm text-navy-900/60">
                Thanks for reaching out. A strategist will contact you within one business day.
              </p>
              <button onClick={() => setStatus("idle")} className="btn-primary mt-6">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-navy-900/70">
                    Full name *
                  </label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Priya Sharma"
                    className="w-full rounded-lg border border-navy-900/15 px-3 py-2.5 text-sm outline-none transition focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-navy-900/70">
                    Work email *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="priya@company.com"
                    className="w-full rounded-lg border border-navy-900/15 px-3 py-2.5 text-sm outline-none transition focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-navy-900/70">Phone</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-lg border border-navy-900/15 px-3 py-2.5 text-sm outline-none transition focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-navy-900/70">
                    Company
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="w-full rounded-lg border border-navy-900/15 px-3 py-2.5 text-sm outline-none transition focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold text-navy-900/70">Website</label>
                <input
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  placeholder="https://yourcompany.com"
                  className="w-full rounded-lg border border-navy-900/15 px-3 py-2.5 text-sm outline-none transition focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold text-navy-900/70">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your business and goals..."
                  className="w-full resize-none rounded-lg border border-navy-900/15 px-3 py-2.5 text-sm outline-none transition focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20"
                />
              </div>

              {status === "error" && (
                <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{errorMsg}</p>
              )}

              <button type="submit" disabled={status === "loading"} className="btn-primary w-full sm:w-auto">
                {status === "loading" ? (
                  <>
                    <Loader2 className="animate-spin" size={16} /> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default Contact;