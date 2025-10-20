"use client";

import { useState } from "react";
import {
  ChevronDown,
  MessageCircle,
  Shield,
  Calendar,
  HelpCircle,
  Sparkles,
  Mail,
  Users,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Is Ubuncare therapy?",
    a: "No. Ubuncare is a guided self-help tool based on Cognitive Behavioral Therapy (CBT) principles. It’s designed to complement professional care, not replace it. Always consult a licensed therapist or healthcare provider for diagnosis or treatment.",
    icon: MessageCircle,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    q: "Can I use Ubuncare alongside therapy?",
    a: "Absolutely. Many users find Ubuncare helpful between therapy sessions. It reinforces what you discuss with your therapist and helps you reflect daily on your thoughts and feelings — building emotional awareness and continuity.",
    icon: Users,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
  },
  {
    q: "Will you share my data?",
    a: "Never. Your reflections are encrypted end-to-end and stored only temporarily. Nothing is sold, shared, or used for AI training or advertising. You remain in full control of your data export and deletion.",
    icon: Shield,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    q: "When is the beta launching?",
    a: "We’re preparing for our private beta launch. Join the waitlist to get early access and help shape Ubuncare’s direction through feedback. Early users will enjoy feature previews and lifetime discounts.",
    icon: Calendar,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    q: "How does the AI coach work?",
    a: "Ubuncare’s AI Coach applies evidence-based CBT techniques to help you reframe thoughts, reduce rumination, and build healthy habits. It adapts to your emotional tone over time while maintaining ethical, non-diagnostic boundaries.",
    icon: Sparkles,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    q: "Is Ubuncare suitable for crisis situations?",
    a: "No. Ubuncare is not intended for emergencies. If you’re in crisis or feel unsafe, please contact local emergency services or a crisis helpline immediately. Crisis links are available in the app footer for quick access.",
    icon: HelpCircle,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    q: "What makes Ubuncare different?",
    a: "Ubuncare avoids gamification and social scoring. It focuses on gentle, private self-reflection — built around empathy, science, and data privacy, not engagement metrics or algorithms.",
    icon: HelpCircle,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    q: "Who created Ubuncare?",
    a: "Ubuncare was created by a team of psychologists, designers, and AI practitioners passionate about accessible, ethical mental health support. It combines academic psychology, clinical experience, and human-centered AI design.",
    icon: Users,
    color: "text-gray-700",
    bgColor: "bg-gray-50",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-24 md:py-32 bg-gradient-to-b from-white via-purple-50/30 to-blue-50/20 overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-[100rem] mx-auto px-8 sm:px-10 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-5 py-2 mb-6">
            <HelpCircle className="h-4 w-4 text-purple-600" />
            <span className="font-semibold text-purple-700 text-base">
              FAQ
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Questions
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Answers to common questions about Ubuncare’s mission, features, and
            privacy-first approach to mental wellbeing.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-5xl mx-auto space-y-5">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  backgroundColor: isOpen ? "#faf5ff" : "#ffffff",
                  borderColor: isOpen ? "#e9d5ff" : "#e5e7eb",
                }}
                transition={{ duration: 0.3 }}
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
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                      {faq.q}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-purple-600" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-16 pr-4 mt-4">
                        <p className="text-base text-gray-700 leading-relaxed border-l-2 border-purple-200 pl-4">
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

        {/* Privacy Assurance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm"
        >
          <Shield className="h-10 w-10 text-purple-600 flex-shrink-0" />
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">
              Your privacy, protected by design
            </h4>
            <p className="text-base text-gray-700 leading-relaxed">
              Ubuncare conversations are encrypted, stored only temporarily, and
              never used for AI model training or advertising. We prioritize
              psychological safety over engagement metrics.
            </p>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 text-base font-semibold text-blue-800 mb-3">
              <Shield className="h-5 w-5 text-blue-600" />
              Important Information
            </div>
            <p className="text-base text-blue-700 leading-relaxed">
              Ubuncare is for educational and self-help purposes only. It does
              not provide medical advice, diagnosis, or treatment. Always seek
              professional medical help for personal mental-health concerns. In
              an emergency, contact your local crisis service immediately.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <p className="text-gray-700 mb-6 text-lg md:text-xl">
            Still have questions?
          </p>
          <a
            href="mailto:contact@ubuncare.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <Mail className="h-5 w-5" />
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}
