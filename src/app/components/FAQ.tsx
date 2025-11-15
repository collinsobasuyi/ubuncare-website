"use client";

import { useId, useState, KeyboardEvent } from "react";
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
import type { FaqItem } from "@/helpers/Types/IFAQ";

const faqs: FaqItem[] = [
  {
    q: "Is Ubuncare therapy?",
    a: "No. Ubuncare is a guided self-help tool based on Cognitive Behavioral Therapy (CBT) principles. It’s designed to complement professional care, not replace it. Always consult a licensed therapist or healthcare provider for diagnosis or treatment.",
    icon: MessageCircle,
    color: "text-teal-700",
    bgColor: "bg-teal-50",
  },
  {
    q: "Can I use Ubuncare alongside therapy?",
    a: "Absolutely. Many users find Ubuncare helpful between therapy sessions. It reinforces what you discuss with your therapist and helps you reflect daily on your thoughts and feelings — building emotional awareness and continuity.",
    icon: Users,
    color: "text-cyan-700",
    bgColor: "bg-cyan-50",
  },
  {
    q: "Will you share my data?",
    a: "Never. Your reflections are encrypted end-to-end and stored only temporarily. Nothing is sold, shared, or used for AI training or advertising. You remain in full control of your data export and deletion.",
    icon: Shield,
    color: "text-emerald-700",
    bgColor: "bg-emerald-50",
  },
  {
    q: "When is the beta launching?",
    a: "We’re preparing for our private beta launch. Join the waitlist to get early access and help shape Ubuncare’s direction through feedback. Early users will enjoy feature previews and lifetime discounts.",
    icon: Calendar,
    color: "text-sky-700",
    bgColor: "bg-sky-50",
  },
  {
    q: "How does the AI coach work?",
    a: "Ubuncare’s AI Coach applies evidence-based CBT techniques to help you reframe thoughts, reduce rumination, and build healthy habits. It adapts to your emotional tone over time while maintaining ethical, non-diagnostic boundaries.",
    icon: Sparkles,
    color: "text-teal-700",
    bgColor: "bg-teal-50",
  },
  {
    q: "Is Ubuncare suitable for crisis situations?",
    a: "No. Ubuncare is not intended for emergencies. If you’re in crisis or feel unsafe, please contact local emergency services or a crisis helpline immediately. Crisis links are available in the app footer for quick access.",
    icon: HelpCircle,
    color: "text-rose-700",
    bgColor: "bg-rose-50",
  },
  {
    q: "What makes Ubuncare different?",
    a: "Ubuncare avoids gamification and social scoring. It focuses on gentle, private self-reflection — built around empathy, science, and data privacy, not engagement metrics or algorithms.",
    icon: HelpCircle,
    color: "text-cyan-700",
    bgColor: "bg-cyan-50",
  },
  {
    q: "Who created Ubuncare?",
    a: "Ubuncare was created by a team of psychologists, designers, and AI practitioners passionate about accessible, ethical mental health support. It combines academic psychology, clinical experience, and human-centered AI design.",
    icon: Users,
    color: "text-slate-700",
    bgColor: "bg-slate-50",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionId = useId();

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const onKeyToggle = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      toggleFAQ(index);
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = (index + 1) % faqs.length;
      document.getElementById(`${sectionId}-btn-${next}`)?.focus();
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = (index - 1 + faqs.length) % faqs.length;
      document.getElementById(`${sectionId}-btn-${prev}`)?.focus();
    }
  };

  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative py-12 md:py-20 bg-gradient-to-b from-white via-teal-50/30 to-cyan-50/20 overflow-hidden font-sans"
      aria-labelledby={`${sectionId}-title`}
    >
      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(13,148,136,0.06),transparent)]" />
      <div className="absolute top-6 left-1/4 w-72 h-72 bg-teal-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-6 right-1/4 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl" />

      <div className="relative w-full max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-cyan-50 backdrop-blur-sm rounded-2xl px-5 py-2.5 sm:px-8 sm:py-4 border border-teal-200 shadow-sm mb-6">
            <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600" />
            <span className="text-base sm:text-lg md:text-xl font-semibold text-teal-700">
              FAQ
            </span>
          </div>

          <h2
            id={`${sectionId}-title`}
            data-testid="faq-title"
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
          >
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Questions
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Answers to common questions about Ubuncare’s mission, features, and
            privacy-first approach to mental wellbeing.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-5xl mx-auto space-y-4" data-testid="faq-list">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;
            const panelId = `${sectionId}-panel-${index}`;
            const btnId = `${sectionId}-btn-${index}`;

            return (
              <div
                key={index}
                data-testid={`faq-item-${index}`}
                className={`rounded-2xl border p-5 sm:p-6 transition-colors duration-300 cursor-pointer hover:border-teal-200 hover:bg-teal-50/40 
                            ${isOpen ? "border-teal-300 bg-teal-50/70 shadow-md" : "border-gray-200 bg-white/90"}`}
              >
                <button
                  id={btnId}
                  data-testid={`faq-btn-${index}`}
                  type="button"
                  className="w-full flex items-center justify-between text-left group focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg p-1 -m-1"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFAQ(index)}
                  onKeyDown={(e) => onKeyToggle(e, index)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${faq.bgColor} flex-shrink-0`}>
                      <Icon className={`h-5 w-5 ${faq.color}`} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">
                      {faq.q}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4 
                                    ${isOpen ? "rotate-180 text-teal-600" : ""}`}
                  />
                </button>

                {/* Content Panel - Using max-height/opacity transition for animation */}
                <div
                  id={panelId}
                  data-testid={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={btnId}
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[300px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                >
                  <div className="pl-16 pr-2 sm:pr-4">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed border-l-2 border-teal-200 pl-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Privacy Assurance Banner */}
        <div
          className="mt-12 md:mt-14 max-w-5xl mx-auto bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5 shadow-lg"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-md flex-shrink-0">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">
              Your privacy, protected by design
            </h4>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Ubuncare conversations are encrypted, stored only temporarily, and
              never used for AI model training or advertising. We prioritize
              psychological safety over engagement metrics.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div
          className="mt-10 md:mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 text-sm sm:text-base font-semibold text-teal-800 mb-2 sm:mb-3">
              <Shield className="h-5 w-5 text-teal-700" />
              Important Information
            </div>
            <p className="text-sm sm:text-base text-teal-800/90 leading-relaxed">
              Ubuncare is for educational and self-help purposes only. It does
              not provide medical advice, diagnosis, or treatment. Always seek
              professional medical help for personal mental-health concerns. In
              an emergency, contact your local crisis service immediately.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-10 md:mt-12 text-center"
        >
          <p className="text-gray-700 mb-4 md:mb-5 text-base sm:text-lg md:text-xl">
            Still have questions?
          </p>
          <a
            href="mailto:contact@ubuncare.com"
            data-testid="contact-cta"
            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 ring-4 ring-transparent hover:ring-teal-200/50"
          >
            <Mail className="h-5 w-5" />
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}