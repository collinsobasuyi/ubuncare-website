"use client";

import { useState } from "react";
import Container from "./Container";
import { CheckCircle, Lock } from "lucide-react";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      // Replace with your actual API endpoint
      await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      setIsSubmitted(true);
      setEmail("");
    } catch (error) {
      console.error("Error joining waitlist:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="join" className="py-16 md:py-20 bg-gradient-to-b from-blue-50/30 to-white">
      <Container className="text-center max-w-2xl mx-auto">
        {/* Header */}
        <div className="relative">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm font-medium text-primary mb-6 shadow-sm border border-gray-100">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            Early Access Available
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-4">
            Join the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Ubuncare
            </span>{" "}
            Waitlist
          </h2>

          <p className="text-lg text-textBody leading-relaxed mb-8">
            Be among the first to experience compassionate AI mental health support. We will notify
            you when the private beta is ready—no spam, just meaningful updates.
          </p>
        </div>

        {/* Benefits list */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="flex items-center justify-center gap-2 text-sm text-textBody bg-white p-3 rounded-lg shadow-sm border border-gray-100">
            <CheckCircle className="h-4 w-4 text-green-500" />
            Early access
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-textBody bg-white p-3 rounded-lg shadow-sm border border-gray-100">
            <CheckCircle className="h-4 w-4 text-green-500" />
            Exclusive content
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-textBody bg-white p-3 rounded-lg shadow-sm border border-gray-100">
            <CheckCircle className="h-4 w-4 text-green-500" />
            No spam ever
          </div>
        </div>

        {/* Waitlist Form */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="bg-green-50 rounded-full p-3 inline-flex mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-textMain mb-2">You are on the list!</h3>
              <p className="text-textBody">
                Thanks for joining. We will be in touch when Ubuncare is ready.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold rounded-lg hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </button>
              </div>
            </form>
          )}

          {/* Privacy assurance */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-center gap-2 text-sm text-textBody">
              <Lock className="h-4 w-4 text-primary" />
              Your information is secure and private. We respect your data.
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-10">
          <div className="flex items-center justify-center gap-4 text-sm text-textBody">
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-blue-600 border-2 border-white"></div>
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 border-2 border-white"></div>
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-500 to-green-600 border-2 border-white"></div>
            </div>
            <span>
              Join <strong className="text-textMain">217+ people</strong> on the waitlist
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
