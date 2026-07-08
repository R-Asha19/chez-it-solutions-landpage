import React, { useState } from "react";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import { useLeadModal } from "../context/LeadModalContext.jsx";
import { submitLead } from "../api/leads.js";

const initialForm = { name: "", email: "", phone: "", company: "", website: "", message: "" };

const LeadModal = () => {
  const { modalConfig, closeLeadModal } = useLeadModal();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  if (!modalConfig) return null;

  const { title, subtitle, source } = modalConfig;

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleClose = () => {
    setForm(initialForm);
    setStatus("idle");
    setErrorMsg("");
    closeLeadModal();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      await submitLead({ ...form, source });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err?.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-1 text-navy-900/50 transition hover:bg-navy-900/5 hover:text-navy-900"
        >
          <X size={20} />
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center py-6 text-center">
            <CheckCircle2 className="mb-4 text-emerald-500" size={48} />
            <h3 className="text-xl font-bold text-navy-900">You're all set!</h3>
            <p className="mt-2 text-sm text-navy-900/70">
              Thanks, {form.name.split(" ")[0] || "there"}. A strategist from Chez IT Solutions
              will reach out within one business day.
            </p>
            <button onClick={handleClose} className="btn-primary mt-6 w-full">
              Done
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-bold text-navy-900">{title}</h3>
            {subtitle && <p className="mt-1 text-sm text-navy-900/60">{subtitle}</p>}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-navy-900/70">
                    Phone
                  </label>
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
                <label className="mb-1 block text-xs font-semibold text-navy-900/70">
                  Website
                </label>
                <input
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  placeholder="https://yourcompany.com"
                  className="w-full rounded-lg border border-navy-900/15 px-3 py-2.5 text-sm outline-none transition focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold text-navy-900/70">
                  What are you looking to grow?
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us a bit about your goals..."
                  className="w-full resize-none rounded-lg border border-navy-900/15 px-3 py-2.5 text-sm outline-none transition focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20"
                />
              </div>

              {status === "error" && (
                <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{errorMsg}</p>
              )}

              <button type="submit" disabled={status === "loading"} className="btn-primary w-full">
                {status === "loading" ? (
                  <>
                    <Loader2 className="animate-spin" size={16} /> Submitting...
                  </>
                ) : (
                  "Submit request"
                )}
              </button>
              <p className="text-center text-xs text-navy-900/40">
                No spam, ever. We'll only contact you about your growth audit.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LeadModal;
