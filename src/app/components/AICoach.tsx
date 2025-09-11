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
  User,
} from "lucide-react";

type Msg = { role: "user" | "assistant"; text: string };
type TabKey = "anxiety" | "motivation" | "sleep";

const scenarios: Record<TabKey, Msg[]> = {
  anxiety: [
    { role: "user", text: "I'm feeling really anxious about my presentation tomorrow." },
    {
      role: "assistant",
      text: "I understand that feeling. Let's take a moment together. What's the main thought that's coming up for you?",
    },
    {
      role: "user",
      text: "I'm worried I'll forget everything and everyone will think I'm incompetent.",
    },
    {
      role: "assistant",
      text: "Let's examine that thought. What evidence supports it? What evidence challenges it?",
    },
    {
      role: "assistant",
      text: "A balanced perspective might be: 'I've prepared, and even if I make a mistake, it doesn't define my worth.'",
    },
  ],
  motivation: [
    { role: "user", text: "I can't seem to start this important project." },
    {
      role: "assistant",
      text: "That's okay. Let's break it down. What's the absolute smallest first step you can take?",
    },
    { role: "user", text: "Maybe just open the document and write one sentence." },
    {
      role: "assistant",
      text: "Perfect. Set a 5-minute timer for that one sentence. You can stop after or continue if you feel able.",
    },
  ],
  sleep: [
    { role: "user", text: "My thoughts won’t stop at night." },
    {
      role: "assistant",
      text: "Try this: name 3 things you’re grateful for today.",
    },
    {
      role: "assistant",
      text: "Now let’s breathe: inhale 4, hold 7, exhale 8.",
    },
  ],
};

const tabs = [
  {
    key: "anxiety",
    label: "Anxious Thoughts",
    icon: Brain,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    key: "motivation",
    label: "Motivation",
    icon: Lightbulb,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    key: "sleep",
    label: "Sleep Wind-down",
    icon: Zap,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
] as const;

export default function AICoach() {
  const [tab, setTab] = useState<TabKey>("anxiety");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    const idx = tabs.findIndex((t) => t.key === tab);
    if (idx === -1) return;

    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = (idx + 1) % tabs.length;
      setTab(tabs[next].key);
      tabRefs.current[next]?.focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = (idx - 1 + tabs.length) % tabs.length;
      setTab(tabs[prev].key);
      tabRefs.current[prev]?.focus();
    }
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-blue-50/30">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200 rounded-full px-5 py-2 mb-6 shadow-sm">
            <MessageCircle className="h-4 w-4 text-blue-600" />
            <span className="font-semibold text-blue-700">AI Coach</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-4">
            Your compassionate{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              AI companion
            </span>
          </h2>
          <p className="text-lg text-textBody leading-relaxed">
            Gentle CBT-informed support that helps reframe unhelpful thoughts, build habits, and
            stay grounded.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LEFT: Interactive chat demo */}
          <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100">
            {/* Tabs */}
            <div
              role="tablist"
              aria-label="AI Coach scenarios"
              className="flex flex-wrap gap-2 mb-6"
              onKeyDown={onKeyDown}
            >
              {tabs.map((t, i) => {
                const IconComponent = t.icon;
                const selected = tab === t.key;
                return (
                  <button
                    key={t.key}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`tab-${t.key}`}
                    aria-selected={selected}
                    aria-controls={`panel-${t.key}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setTab(t.key)}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all ${
                      selected
                        ? `${t.bgColor} ${t.color} border-transparent shadow-sm`
                        : "text-textBody hover:bg-gray-50"
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    {t.label}
                  </button>
                );
              })}
            </div>

            {/* Chat panel */}
            <div className="mt-4">
              {tabs.map((t) => {
                const selected = tab === t.key;
                const msgs = scenarios[t.key as TabKey];
                return (
                  <div
                    key={t.key}
                    role="tabpanel"
                    id={`panel-${t.key}`}
                    aria-labelledby={`tab-${t.key}`}
                    hidden={!selected}
                  >
                    <div className="h-[360px] overflow-y-auto rounded-2xl bg-gradient-to-b from-gray-50 to-white p-4 border shadow-sm">
                      <div className="space-y-4">
                        {msgs.map((m, i) => {
                          const isUser = m.role === "user";
                          return (
                            <div
                              key={i}
                              className={`flex ${isUser ? "justify-end" : "justify-start"} animate-fade-in`}
                              style={{ animationDelay: `${i * 150}ms` }}
                            >
                              <div
                                className={`flex items-start gap-2 max-w-[85%] ${
                                  isUser ? "flex-row-reverse" : ""
                                }`}
                              >
                                {!isUser && (
                                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                                    <Sparkles className="h-4 w-4 text-primary" />
                                  </div>
                                )}
                                <div
                                  className={`rounded-2xl px-4 py-2.5 text-sm md:text-base leading-relaxed ${
                                    isUser
                                      ? "bg-blue-500 text-white rounded-tr-none shadow-sm"
                                      : "bg-white border border-gray-200 shadow-sm rounded-tl-none"
                                  }`}
                                >
                                  {m.text}
                                </div>
                                {isUser && (
                                  <div className="bg-gray-100 p-2 rounded-full flex-shrink-0">
                                    <User className="h-4 w-4 text-textBody" />
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <p className="mt-4 pt-3 border-t text-xs text-textBody/70 text-center">
                      <AlertTriangle className="h-3 w-3 inline mr-1" />
                      Example only — not a replacement for professional care.
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Features */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-textMain mb-4">How it helps</h3>
              <ul className="space-y-3 text-sm text-textBody">
                <li>🌱 Thought reframing with CBT techniques</li>
                <li>✅ Breaking tasks into manageable steps</li>
                <li>💡 Gentle habit-building and reminders</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-textMain mb-4">Safety & Privacy</h3>
              <ul className="space-y-3 text-sm text-textBody">
                <li>🔒 Private by design with encryption</li>
                <li>🧠 Guidance only, not a diagnosis</li>
                <li>🚨 Crisis resources always available</li>
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
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
