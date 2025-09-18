"use client";

import { useState } from "react";
import Container from "./Container";
import {
  Brain,
  Lightbulb,
  Zap,
  Heart,
  Shield,
  AlertTriangle,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

// Scenarios
const scenarios = {
  anxiety: [
    { role: "user", text: "I'm feeling really anxious about my presentation tomorrow." },
    { role: "assistant", text: "I understand that feeling. Let's take a moment together. What's the main thought coming up for you?" },
    { role: "user", text: "I'm worried I'll forget everything and everyone will think I'm incompetent." },
    { role: "assistant", text: "Let's examine that thought together. What evidence supports it? What might challenge it?" },
  ],
  motivation: [
    { role: "user", text: "I can't seem to start this important project." },
    { role: "assistant", text: "That's okay. What's the smallest first step you can take?" },
    { role: "user", text: "Maybe just open the document and write one sentence." },
    { role: "assistant", text: "Perfect. Try a 5-minute timer just for that." },
  ],
  sleep: [
    { role: "user", text: "My thoughts won't stop racing at night." },
    { role: "assistant", text: "Let's try a grounding exercise. Name 3 things you can hear right now." },
  ],
  stress: [
    { role: "user", text: "I'm completely overwhelmed with everything." },
    { role: "assistant", text: "I hear you. Let's prioritize together. What feels most urgent right now?" },
  ],
} as const;

const tabs = [
  { key: "anxiety", label: "Anxiety", icon: Brain, color: "blue" },
  { key: "motivation", label: "Motivation", icon: Lightbulb, color: "amber" },
  { key: "sleep", label: "Sleep", icon: Zap, color: "purple" },
  { key: "stress", label: "Stress", icon: Heart, color: "pink" },
] as const;

const benefits = [
  { icon: Brain, title: "Anxiety Support", stat: "62% reduction", description: "in anxiety symptoms", color: "blue" },
  { icon: Lightbulb, title: "Motivation", stat: "3x more likely", description: "to complete tasks", color: "amber" },
  { icon: Zap, title: "Sleep Support", stat: "45% faster", description: "sleep onset", color: "purple" },
  { icon: Heart, title: "Stress Management", stat: "78% report", description: "lower stress levels", color: "pink" },
];

const securityFeatures = [
  "End-to-end encryption",
  "No data stored or shared",
  "Crisis resources always available",
];

export default function AICoachSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof scenarios>("anxiety");

  return (
    <section className="py-20 md:py-28 bg-purple-50">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-5 py-2 mb-6">
            <MessageCircle className="h-4 w-4 text-purple-600" />
            <span className="font-semibold text-purple-700">AI Coach + Results</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conversations that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
              change outcomes
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Preview how Ubuncare supports you in the moment — and the real results people experience.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT: Chat Demo */}
          <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all ${
                      activeTab === tab.key
                        ? `bg-${tab.color}-50 text-${tab.color}-600 shadow-sm`
                        : "text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Chat */}
            <div className="rounded-2xl bg-gradient-to-b from-gray-50 to-white p-6 border border-gray-200 min-h-[360px]">
              <div className="space-y-4">
                {scenarios[activeTab].map((m, i) => (
                  <div
                    key={i}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        m.role === "user"
                          ? "bg-purple-600 text-white rounded-br-none"
                          : "bg-white border border-gray-200 rounded-bl-none shadow-sm"
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-4 flex items-center justify-center text-xs text-gray-500">
              <AlertTriangle className="h-3 w-3 mr-1" />
              Example conversation — not a replacement for professional care
            </p>
          </div>

          {/* RIGHT: Results + Security */}
          <div className="space-y-8">
            {/* Benefits */}
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white rounded-xl p-5 text-center border shadow-sm"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${b.color}-100 mb-3`}>
                      <Icon className={`h-6 w-6 text-${b.color}-600`} />
                    </div>
                    <div className="text-xl font-bold text-gray-900">{b.stat}</div>
                    <div className="text-sm text-gray-600">{b.description}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Security */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Safe & Private</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                {securityFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}