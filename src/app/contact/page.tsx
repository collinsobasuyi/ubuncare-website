"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, CheckCircle } from "lucide-react";

const subjects = [
  "Investors",
  "Press & Media",
  "Jobs & Careers",
  "Get Involved",
  "General Enquiry",
];

const reasons = [
  { icon: "💼", title: "Investors",       desc: "Interested in supporting Ubuncare's growth?" },
  { icon: "📰", title: "Press & Media",   desc: "Writing about mental wellness or the app?" },
  { icon: "🌱", title: "Jobs & Careers",  desc: "Want to help build something meaningful?" },
  { icon: "🤝", title: "Get Involved",    desc: "Partnerships, collaborations, or community?" },
];

export default function ContactPage() {
  const [form, setForm]       = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus]   = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      }
    } catch {
      setErrorMsg("Failed to send. Please try again or email us directly.");
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#FDFAF6" }}>
      {/* Header */}
      <div className="py-16 md:py-20" style={{ backgroundColor: "#1D6B52" }}>
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.9)" }}>
            Get in touch
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Contact us
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)" }} className="text-base">
            Investors, press, careers, or just want to say hello — we&apos;d love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-5 gap-12">

          {/* Left — reasons + email */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <h2 className="text-lg font-bold mb-4" style={{ color: "#1A2420" }}>Who we hear from</h2>
              <div className="flex flex-col gap-3">
                {reasons.map((r) => (
                  <div key={r.title} className="flex items-start gap-3 p-4 rounded-2xl"
                    style={{ backgroundColor: "#FFFFFF", border: "1px solid #E2EBE6" }}>
                    <span className="text-xl flex-shrink-0">{r.icon}</span>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "#1A2420" }}>{r.title}</p>
                      <p className="text-xs mt-0.5" style={{ color: "#4A5E57" }}>{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl" style={{ backgroundColor: "#EBF5F0", border: "1px solid #2E9B7830" }}>
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#1D6B52" }} aria-hidden="true" />
                <p className="text-sm font-semibold" style={{ color: "#1D6B52" }}>Email us directly</p>
              </div>
              <a href="mailto:contact@ubuncare.com"
                className="text-sm font-medium underline underline-offset-2"
                style={{ color: "#1D6B52" }}>
                contact@ubuncare.com
              </a>
              <p className="text-xs mt-2" style={{ color: "#4A5E57" }}>
                We aim to respond within 2 business days.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
                <CheckCircle className="w-12 h-12" style={{ color: "#1D6B52" }} aria-hidden="true" />
                <h2 className="text-2xl font-bold" style={{ color: "#1A2420" }}>Message sent</h2>
                <p className="text-base max-w-sm" style={{ color: "#4A5E57" }}>
                  Thanks for reaching out. We&apos;ll get back to you within 2 business days.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors hover:bg-[#2E9B78]"
                  style={{ backgroundColor: "#1D6B52" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-semibold" style={{ color: "#1A2420" }}>
                      Your name <span aria-hidden="true" style={{ color: "#C62828" }}>*</span>
                    </label>
                    <input
                      id="name" name="name" type="text" required
                      placeholder="Jane Smith"
                      value={form.name} onChange={handleChange}
                      className="px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{ backgroundColor: "#FFFFFF", border: "1.5px solid #E2EBE6", color: "#1A2420" }}
                      onFocus={(e) => (e.target.style.borderColor = "#1D6B52")}
                      onBlur={(e) => (e.target.style.borderColor = "#E2EBE6")}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-semibold" style={{ color: "#1A2420" }}>
                      Email address <span aria-hidden="true" style={{ color: "#C62828" }}>*</span>
                    </label>
                    <input
                      id="email" name="email" type="email" required
                      placeholder="jane@example.com"
                      value={form.email} onChange={handleChange}
                      className="px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{ backgroundColor: "#FFFFFF", border: "1.5px solid #E2EBE6", color: "#1A2420" }}
                      onFocus={(e) => (e.target.style.borderColor = "#1D6B52")}
                      onBlur={(e) => (e.target.style.borderColor = "#E2EBE6")}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-sm font-semibold" style={{ color: "#1A2420" }}>
                    Reason for contact <span aria-hidden="true" style={{ color: "#C62828" }}>*</span>
                  </label>
                  <select
                    id="subject" name="subject" required
                    value={form.subject} onChange={handleChange}
                    className="px-4 py-3 rounded-xl text-sm outline-none transition-all appearance-none cursor-pointer"
                    style={{ backgroundColor: "#FFFFFF", border: "1.5px solid #E2EBE6", color: form.subject ? "#1A2420" : "#7A9590" }}
                    onFocus={(e) => (e.target.style.borderColor = "#1D6B52")}
                    onBlur={(e) => (e.target.style.borderColor = "#E2EBE6")}
                  >
                    <option value="" disabled>Select a reason…</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-semibold" style={{ color: "#1A2420" }}>
                    Message <span aria-hidden="true" style={{ color: "#C62828" }}>*</span>
                  </label>
                  <textarea
                    id="message" name="message" required rows={6}
                    placeholder="Tell us a bit about yourself and how we can help…"
                    value={form.message} onChange={handleChange}
                    className="px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                    style={{ backgroundColor: "#FFFFFF", border: "1.5px solid #E2EBE6", color: "#1A2420" }}
                    onFocus={(e) => (e.target.style.borderColor = "#1D6B52")}
                    onBlur={(e) => (e.target.style.borderColor = "#E2EBE6")}
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm font-medium px-4 py-3 rounded-xl"
                    style={{ backgroundColor: "#FCEBEB", color: "#C62828" }}>
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="py-3.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 disabled:opacity-60"
                  style={{ backgroundColor: "#1D6B52" }}
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="border-t py-8" style={{ borderColor: "#E2EBE6" }}>
        <p className="text-center text-sm" style={{ color: "#4D7068" }}>
          <Link href="/privacy" className="underline" style={{ color: "#1D6B52" }}>Privacy Policy</Link>
          {" "}·{" "}
          <Link href="/terms" className="underline" style={{ color: "#1D6B52" }}>Terms of Use</Link>
          {" "}·{" "}
          <Link href="/" className="underline" style={{ color: "#1D6B52" }}>Back to home</Link>
        </p>
      </div>
    </main>
  );
}
