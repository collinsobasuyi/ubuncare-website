"use client";

import { useState } from "react";
import Container from "./Container";
import { ChevronDown, MessageCircle, Shield, Calendar, HelpCircle, Sparkles, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Is Ubuncare therapy?",
    a: "No. Ubuncare is a self-help tool based on CBT techniques. It's designed to complement professional care, not replace it. We recommend consulting a qualified mental health professional for personalized treatment.",
    icon: MessageCircle,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    q: "Will you share my data?",
    a: "Never. Your data is encrypted end-to-end, never sold, and you maintain full control over export and deletion. We believe your mental health data should remain private and secure.",
    icon: Shield,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    q: "When is the beta launching?",
    a: "We're preparing for our private beta release. Join the waitlist to be among the first to access and shape Ubuncare with your feedback. Early users will get priority access and special perks.",
    icon: Calendar,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    q: "How does the AI coach work?",
    a: "Our AI coach applies evidence-based CBT strategies to reframe thoughts, break down tasks, and build habits — always with compassion and appropriate boundaries. It learns from your interactions to provide more personalized support over time.",
    icon: Sparkles,
    color: "text-amber-600",
    bgColor: "bg-amber-50"
  },
  {
    q: "Is Ubuncare suitable for crisis situations?",
    a: "No. Ubuncare is not for crisis support. If you're in an emergency, please contact emergency services or a crisis hotline immediately. Crisis resources are provided in-app for quick access.",
    icon: HelpCircle,
    color: "text-red-600",
    bgColor: "bg-red-50"
  },
  {
    q: "What makes Ubuncare different?",
    a: "Ubuncare avoids gamification, social features, and constant notifications. Instead, it focuses on private, evidence-based interventions that respect your time and privacy. We prioritize meaningful support over engagement metrics.",
    icon: HelpCircle,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-gradient-to-b from-white to-purple-50/30">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-5 py-2 mb-6">
            <HelpCircle className="h-4 w-4 text-purple-600" />
            <span className="font-semibold text-purple-700">FAQ</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
              Questions
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Everything you need to know about Ubuncare and how it supports your mental wellbeing journey.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={false}
                animate={{ 
                  backgroundColor: isOpen ? "#faf5ff" : "#ffffff",
                  borderColor: isOpen ? "#e9d5ff" : "#e5e7eb"
                }}
                className="rounded-2xl border-2 p-6 transition-all duration-300 cursor-pointer hover:border-purple-200 hover:bg-purple-50/50"
                onClick={() => toggleFAQ(index)}
              >
                <button
                  className="w-full flex items-center justify-between text-left group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${faq.bgColor}`}>
                      <Icon className={`h-5 w-5 ${faq.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                      {faq.q}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180 text-purple-600" : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-16 pr-4 mt-4">
                        <p className="text-gray-600 leading-relaxed border-l-2 border-purple-200 pl-4">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 text-sm font-medium text-blue-800 mb-3">
              <Shield className="h-5 w-5 text-blue-600" />
              Important Information
            </div>
            <p className="text-sm text-blue-700 leading-relaxed">
              Ubuncare is for educational and self-help purposes only. It does not provide medical advice,
              diagnosis, or treatment. Always consult qualified healthcare professionals for personal care needs.
              In crisis situations, please contact emergency services immediately.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6 text-lg">Still have questions?</p>
          <a
            href="mailto:contact@ubuncare.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <Mail className="h-5 w-5" />
            Contact Support
          </a>
        </motion.div>
      </Container>
    </section>
  );
}