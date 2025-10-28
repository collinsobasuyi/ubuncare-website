"use client";

import { useId, useState } from "react";
import Container from "./Container";
import { CheckCircle, Lock, Star } from "lucide-react";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState(""); // honeypot
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const emailId = useId();
  const hpId = useId();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (isSubmitting) return;

    // very light email check to catch obvious mistakes
    const basicEmailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!basicEmailOk) {
      setError("Please enter a valid email address.");
      return;
    }

    // bot check
    if (hp.trim().length > 0) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setIsSubmitted(true);
      setEmail("");
    } catch (err) {
      console.error("Error joining waitlist:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="join"
      className="relative py-6 md:py-14 bg-gradient-to-b from-white via-teal-50/30 to-cyan-50/30 overflow-hidden"
    >
      {/* Subtle background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(13,148,136,0.06),transparent)]" />
      <div className="absolute top-6 left-1/4 w-72 h-72 bg-teal-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-6 right-1/4 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl" />

      <Container className="relative max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-cyan-50 backdrop-blur-sm rounded-2xl px-5 py-2.5 sm:px-8 sm:py-4 border border-teal-200 shadow-sm mb-6">
            <Star className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600" />
            <span className="text-base sm:text-lg md:text-xl font-semibold text-teal-700">
              Join the waitlist
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Be the first to try{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              compassionate AI support
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Get early access to Ubuncare and start a calmer, kinder wellbeing journey.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/60">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="bg-emerald-50 rounded-full p-4 inline-flex mb-5 border border-emerald-100">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                You’re on the list!
              </h3>
              <p className="text-gray-600">
                We’ll email you as soon as Ubuncare is ready.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Honeypot (hidden) */}
              <div className="hidden">
                <label htmlFor={hpId}>Leave this field empty</label>
                <input
                  id={hpId}
                  type="text"
                  value={hp}
                  onChange={(e) => setHp(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label
                    htmlFor={emailId}
                    className="sr-only"
                  >
                    Email address
                  </label>
                  <input
                    id={emailId}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none placeholder-gray-400"
                    aria-invalid={!!error}
                    aria-describedby={error ? "waitlist-error" : undefined}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="px-6 sm:px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Joining..." : "Join waitlist"}
                </button>
              </div>

              {/* Error */}
              {error && (
                <p
                  id="waitlist-error"
                  role="alert"
                  className="text-sm text-rose-600"
                >
                  {error}
                </p>
              )}

              {/* Privacy note */}
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Lock className="h-4 w-4 text-teal-600" />
                <span>Your email stays private and secure.</span>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
