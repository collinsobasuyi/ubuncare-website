"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Is Ubuncare therapy?",
    a: "No. Ubuncare is a self-help wellbeing app. Not therapy, not diagnosis, not crisis support. It's designed to complement professional care, not replace it. If you're struggling, please speak to a qualified professional.",
  },
  {
    q: "Does it store my data?",
    a: "No data ever leaves your device. Your mood history, conversations, and reflections are stored locally on your phone and never uploaded, sold, or shared with anyone. You can delete everything from Settings at any time.",
  },
  {
    q: "Do I need an account?",
    a: "No account, no login, no email address. You just open the app and start. There is nothing to sign up for and nothing we collect.",
  },
  {
    q: "Is it free?",
    a: "Yes, completely. Mood check-ins, wellness tools, guide conversations, and history are all free. No subscription, no paywall, no hidden tier.",
  },
  {
    q: "Can I use it alongside therapy?",
    a: "Absolutely. Many people find it helpful between sessions. It reinforces reflection habits and helps you track how you feel over time. Because everything stays on your device, you stay in full control of what you share.",
  },
  {
    q: "What are the wellness guides?",
    a: "Amani, Kora, Nova, and Zuri are four wellness guides, each with their own style. Amani is calm and grounded; Kora is warm and encouraging; Nova is reflective and insightful; Zuri is gentle and uplifting. You choose one at setup and can switch any time from Settings.",
  },
  {
    q: "What if I'm in crisis?",
    a: "Ubuncare is not a crisis service. If you're in danger or distress, please call 999 (emergency), Samaritans on 116 123 (free, 24/7), or text SHOUT to 85258. These numbers are always one tap away inside the app.",
  },
  {
    q: "Which platforms is it available on?",
    a: "Ubuncare is available on iOS and Android. Download it free from the App Store or Google Play.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative py-10 md:py-14 overflow-hidden"
      style={{ backgroundColor: "#FDFAF6" }}
    >
      <div className="max-w-3xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: "#EBF5F0", color: "#1D6B52" }}
          >
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight" style={{ color: "#1A2420" }}>
            Frequently asked questions
          </h2>
          <p className="text-base" style={{ color: "#4A5E57" }}>
            Honest answers about what Ubuncare is, what it isn&apos;t, and how it works.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="rounded-2xl border overflow-hidden"
                style={{
                  backgroundColor: isOpen ? "#EBF5F0" : "#FFFFFF",
                  borderColor: isOpen ? "#2E9B78" : "#E2EBE6",
                }}
              >
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sm md:text-base pr-4" style={{ color: "#1A2420" }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
                    style={{
                      color: "#1D6B52",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p
                        className="px-5 pb-5 text-sm leading-relaxed border-l-2 ml-5"
                        style={{ color: "#4A5E57", borderColor: "#2E9B78" }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-8 rounded-2xl p-5 border"
          style={{ backgroundColor: "#EBF5F0", borderColor: "#2E9B7840" }}
        >
          <p className="text-sm leading-relaxed text-center" style={{ color: "#4A5E57" }}>
            Ubuncare is for personal wellbeing and self-reflection. It is not a substitute for medical advice, diagnosis, or treatment.
            In an emergency, always contact your local crisis service immediately.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
