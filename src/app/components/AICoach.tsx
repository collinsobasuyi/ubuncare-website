"use client";

import { useRef, useState } from "react";
import Container from "./Container";
import {
  Brain,
  Lightbulb,
  Zap,
  Sparkles,
  AlertTriangle,
  MessageCircle,
  Shield,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";

type Msg = { role: "user" | "assistant"; text: string };
type TabKey = "anxiety" | "motivation" | "sleep" | "stress";

const scenarios: Record<TabKey, Msg[]> = {
  anxiety: [
    { role: "user", text: "I'm feeling really anxious about my presentation tomorrow." },
    {
      role: "assistant",
      text: "I understand that feeling. Let's take a moment together. What's the main thought coming up for you?",
    },
    {
      role: "user", 
      text: "I'm worried I'll forget everything and everyone will think I'm incompetent.",
    },
    {
      role: "assistant",
      text: "Let's examine that thought together. What evidence supports it? What might challenge it?",
    },
  ],
  motivation: [
    { role: "user", text: "I can't seem to start this important project." },
    {
      role: "assistant",
      text: "That's okay. Let's break it down. What's the smallest first step you can take?",
    },
    { role: "user", text: "Maybe just open the document and write one sentence." },
    {
      role: "assistant",
      text: "Perfect. How about a 5-minute timer for that one sentence?",
    },
  ],
  sleep: [
    { role: "user", text: "My thoughts won't stop racing at night." },
    {
      role: "assistant",
      text: "Let's try a grounding exercise. Name 3 things you can hear right now.",
    },
  ],
  stress: [
    { role: "user", text: "I'm completely overwhelmed with everything." },
    {
      role: "assistant", 
      text: "I hear you. Let's prioritize together. What feels most urgent right now?",
    },
  ]
};

const tabs = [
  {
    key: "anxiety",
    label: "Anxiety Support",
    icon: Brain,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    stat: "62% reduction in anxiety symptoms"
  },
  {
    key: "motivation",
    label: "Motivation",
    icon: Lightbulb, 
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    stat: "3x more likely to complete tasks"
  },
  {
    key: "sleep",
    label: "Sleep Support",
    icon: Zap,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    stat: "45% faster sleep onset"
  },
  {
    key: "stress",
    label: "Stress Management",
    icon: Heart,
    color: "text-pink-600", 
    bgColor: "bg-pink-50",
    stat: "78% report lower stress levels"
  }
] as const;

export default function AICoachDemo() {
  const [activeTab, setActiveTab] = useState<TabKey>("anxiety");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50/50 to-white">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-5 py-2 mb-6">
            <MessageCircle className="h-4 w-4 text-purple-600" />
            <span className="font-semibold text-purple-700">AI Companion Preview</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience supportive conversations that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
              actually help
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            See how our AI companion uses evidence-based techniques to provide compassionate, 
            practical mental health support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Chat Demo */}
          <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100">
            <div className="flex flex-wrap gap-2 mb-6">
              {tabs.map((tab, index) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.key;
                
                return (
                  <button
                    key={tab.key}
                    ref={el => {
                      tabRefs.current[index] = el;
                    }}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all ${
                      isActive 
                        ? `${tab.bgColor} ${tab.color} border border-transparent shadow-sm`
                        : "text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Chat Display */}
            <div className="rounded-2xl bg-gradient-to-b from-gray-50 to-white p-6 border border-gray-200 min-h-[400px]">
              <div className="space-y-4">
                {scenarios[activeTab].map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      message.role === "user"
                        ? "bg-purple-600 text-white rounded-br-none"
                        : "bg-white border border-gray-200 rounded-bl-none shadow-sm"
                    }`}>
                      <p className="text-sm md:text-base">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center text-xs text-gray-500">
              <AlertTriangle className="h-3 w-3 mr-1" />
              Example conversation — not a replacement for professional care
            </div>
          </div>

          {/* Benefits Panel */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-purple-600" />
                How It Helps Real People
              </h3>
              <div className="space-y-3">
                {tabs.map(tab => (
                  <div key={tab.key} className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${tab.bgColor} mt-1`}>
                      <tab.icon className={`h-4 w-4 ${tab.color}`} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{tab.label}</p>
                      <p className="text-sm text-gray-600">{tab.stat}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                Safe & Private Support
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>End-to-end encryption</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>No data stored or shared</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Crisis resources always available</span>
                </div>
              </div>
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