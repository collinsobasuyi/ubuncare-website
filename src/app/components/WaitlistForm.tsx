"use client";

import { useState } from "react";
import Container from "./Container";
import { CheckCircle, Lock, Star } from "lucide-react";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    try {
      // Replace with your actual API
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      setIsSubmitted(true);
      setEmail("");
    } catch (err) {
      console.error("Error joining waitlist:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="join" className="py-10 md:py-18 bg-gradient-to-b from-purple-50 to-white">
      <Container className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-5 py-2 mb-6">
            <Star className="h-4 w-4 text-purple-600" />
            <span className="font-semibold text-purple-700">Join the Waitlist</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Be the first to experience{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
              compassionate AI support
            </span>
          </h2>

          <p className="text-lg text-gray-600">
            Get early access to Ubuncare and start transforming your mental wellbeing journey.
          </p>
        </div>

        {/* Waitlist Form */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="bg-green-50 rounded-full p-4 inline-flex mb-5">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">You’re on the list!</h3>
              <p className="text-gray-600">We’ll notify you as soon as Ubuncare is ready.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                  className="flex-1 px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none placeholder-gray-400"
                />
                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </button>
              </div>

              {/* Privacy */}
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Lock className="h-4 w-4 text-purple-500" />
                <span>Your email stays private and secure.</span>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
