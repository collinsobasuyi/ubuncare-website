"use client";

import { useRef, useState } from "react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import {
  Brain,
  Lightbulb,
  ListChecks,
  ShieldCheck,
  Lock,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  MessageCircle,
  User,
  ChevronRight,
  Zap,
} from "lucide-react";

type Msg = { role: "user" | "assistant"; text: string };
type TabKey = "anxiety" | "motivation" | "sleep";

const scenarios: Record<TabKey, Msg[]> = {
  anxiety: [
    { role: "user", text: "I'm feeling really anxious about my presentation tomorrow." },
    { role: "assistant", text: "I understand that feeling. Let's take a moment together. What's the main thought that's coming up for you?" },
    { role: "user", text: "I'm worried I'll forget everything and everyone will think I'm incompetent." },
    { role: "assistant", text: "Let's examine that thought. What evidence supports it? What evidence challenges it?" },
    { role: "assistant", text: "A balanced perspective might be: 'I've prepared, and even if I make a mistake, it doesn't define my worth.'" },
  ],
  motivation: [
    { role: "user", text: "I can't seem to start this important project." },
    { role: "assistant", text: "That's okay. Let's break it down. What's the absolute smallest first step you can take?" },
    { role: "user", text: "Maybe just open the document and write one sentence." },
    { role: "assistant", text: "Perfect. Set a 5-minute timer for that one sentence. You can stop after or continue if you feel able." },
  ],
  sleep: [
    { role: "user", text: "My mind won't stop racing when I try to sleep." },
    { role: "assistant", text: "Let's try a quick wind-down exercise. Name three things you're grateful for today." },
    { role: "assistant", text: "Now, let's practice a breathing technique: inhale for 4 counts, hold for 7, exhale for 8." },
  ],
};

const tabs = [
  { key: "anxiety", label: "Anxious thoughts", icon: Brain, color: "text-blue-600", bgColor: "bg-blue-50" },
  { key: "motivation", label: "Motivation", icon: Lightbulb, color: "text-amber-600", bgColor: "bg-amber-50" },
  { key: "sleep", label: "Sleep wind-down", icon: Zap, color: "text-purple-600", bgColor: "bg-purple-50" },
] as const;

export default function AICoach() {
  const [tab, setTab] = useState<TabKey>("anxiety");
  const [activeMessage, setActiveMessage] = useState(0);
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
    } else if (e.key === "Home") {
      e.preventDefault();
      setTab(tabs[0].key);
      tabRefs.current[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      const last = tabs.length - 1;
      setTab(tabs[last].key);
      tabRefs.current[last]?.focus();
    }
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-blue-50/30">
      <Container>
        <SectionHeading
          eyebrow="AI Coach"
          title="Your compassionate AI mental health companion"
          subtitle="Evidence-based support with built-in safeguards, available whenever you need it."
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LEFT: Interactive chat demo */}
          <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary/10 p-2 rounded-full">
                <MessageCircle className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-textMain">Try the AI Coach</h3>
            </div>

            {/* Tabs */}
            <div
              role="tablist"
              aria-label="AI Coach scenarios"
              className="flex gap-2 mb-6"
              onKeyDown={onKeyDown}
            >
              {tabs.map((t, i) => {
                const IconComponent = t.icon;
                const selected = tab === t.key;
                return (
                  <button
                    key={t.key}
                    ref={(el) => (tabRefs.current[i] = el)}
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
                    <div className="h-[380px] overflow-y-auto rounded-xl bg-gradient-to-b from-gray-50 to-white p-4 border">
                      <div className="space-y-4">
                        {msgs.map((m, i) => {
                          const isUser = m.role === "user";
                          return (
                            <div 
                              key={i} 
                              className={`flex ${isUser ? "justify-end" : "justify-start"} animate-fade-in`}
                              style={{ animationDelay: `${i * 200}ms` }}
                            >
                              <div className={`flex items-start gap-2 max-w-[85%] ${isUser ? "flex-row-reverse" : ""}`}>
                                {!isUser && (
                                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                                    <Sparkles className="h-4 w-4 text-primary" />
                                  </div>
                                )}
                                <div
                                  className={`rounded-2xl px-4 py-3 text-sm md:text-base leading-relaxed ${
                                    isUser 
                                      ? "bg-primary text-white" 
                                      : "bg-white border shadow-sm"
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
                    <p className="mt-3 text-xs text-textBody/70 flex items-center gap-1">
                      <AlertTriangle className="h-3 w-3" />
                      Example conversation. Not a replacement for professional care.
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Features and safety */}
          <div className="space-y-6">
            {/* Capabilities */}
            <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-green-50 p-2 rounded-full">
                  <Sparkles className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-textMain">How it helps</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-textMain">Thought reframing</h4>
                    <p className="text-sm text-textBody mt-1">Gentle CBT techniques to challenge unhelpful thinking patterns</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ListChecks className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-textMain">Task breakdown</h4>
                    <p className="text-sm text-textBody mt-1">Break overwhelming tasks into manageable 5-minute steps</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-textMain">Habit building</h4>
                    <p className="text-sm text-textBody mt-1">Friendly reminders and check-ins to build consistent practices</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Safety */}
            <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-50 p-2 rounded-full">
                  <ShieldCheck className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-textMain">Safety & privacy</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-textMain">Private by design</h4>
                    <p className="text-sm text-textBody mt-1">End-to-end encryption and full data control</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Brain className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-textMain">Not a diagnosis</h4>
                    <p className="text-sm text-textBody mt-1">Supportive guidance only, not medical advice</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-textMain">Crisis resources</h4>
                    <p className="text-sm text-textBody mt-1">Immediate access to emergency contacts when needed</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}