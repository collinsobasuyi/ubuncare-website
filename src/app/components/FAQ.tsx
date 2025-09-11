"use client";

import { useState } from "react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { ChevronDown, HelpCircle, MessageCircle, Shield, Calendar } from "lucide-react";

const faqs = [
  {
    q: "Is Ubuncare therapy?",
    a: "No. Ubuncare is a self-help tool based on proven CBT techniques. It's designed to complement professional care, not replace it. We always recommend consulting with a qualified mental health professional for personalized treatment.",
    icon: MessageCircle,
  },
  {
    q: "Will you share my data?",
    a: "Absolutely not. We built Ubuncare with privacy as a core principle. Your data is encrypted end-to-end, never sold to third parties, and you maintain full control over export and deletion options at all times.",
    icon: Shield,
  },
  {
    q: "When is the beta launching?",
    a: "We're currently preparing for our private beta release. Join the waitlist to be among the first to get access, receive exclusive updates, and help shape the future of Ubuncare with your feedback.",
    icon: Calendar,
  },
  {
    q: "How does the AI coach work?",
    a: "Our AI coach uses evidence-based CBT techniques to help you reframe thoughts, break down tasks, and build healthy habits. It's trained to provide compassionate, non-judgmental support while maintaining appropriate boundaries.",
    icon: HelpCircle,
  },
  {
    q: "Is Ubuncare suitable for crisis situations?",
    a: "No. Ubuncare is not designed for crisis support. If you&apos;re experiencing a mental health emergency, please contact emergency services or a crisis hotline immediately. We provide clear crisis resources within the app.",
    icon: HelpCircle,
  },
  {
    q: "What makes Ubuncare different from other apps?",
    a: "Ubuncare focuses on brief, evidence-based interventions that respect your time and privacy. Unlike many apps, we avoid gamification, social features, and constant notifications, focusing instead on meaningful, private support.",
    icon: HelpCircle,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-blue-50/30">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Everything you need to know about Ubuncare"
        />

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const IconComponent = faq.icon;
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary/20"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-textMain text-lg">{faq.q}</h3>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-textBody transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <div className="pl-11">
                        <p className="text-textBody leading-relaxed border-l-2 border-primary/20 pl-4">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional information */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-sm text-textBody mb-3">
              <Shield className="h-4 w-4 text-primary" />
              Important Information
            </div>
            <p className="text-textBody text-sm">
              Ubuncare is designed for educational purposes and self-help support only. It does not
              provide medical advice, diagnosis, or treatment. Always consult with qualified
              healthcare professionals for personal mental health needs.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <p className="text-textBody mb-4">Still have questions?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Contact our support team
              <ChevronDown className="h-4 w-4 rotate-90" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
