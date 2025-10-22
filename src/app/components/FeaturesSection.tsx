"use client";

import {
  Heart,
  Shield,
  TrendingUp,
  ClipboardList,
  Users,
  MessageCircle,
  Sparkles,
  Lock,
  Zap,
  Target,
  Brain,
  Clock,
  Eye,
} from "lucide-react";

// ----------------------
// Features Data
// ----------------------
const features = [
  {
    icon: Heart,
    title: "Reflective Check-ins",
    desc: "Gentle, guided prompts help you slow down and explore your current wellbeing in a private, non-clinical space.",
    stats: "Private reflections only",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: MessageCircle,
    title: "AI-Guided Conversations",
    desc: "Engage in supportive, CBT-informed chats with your AI wellbeing companion — designed to bring calm, not diagnosis.",
    stats: "Supportive dialogue",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Users,
    title: "Personalized Approach",
    desc: "Select conversation styles that suit you best — empathetic, practical, or motivational. Every session adapts to your tone.",
    stats: "Tailored to you",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
  },
  {
    icon: ClipboardList,
    title: "Wellbeing Activities",
    desc: "Access evidence-informed micro-exercises for mindfulness, stress relief, and emotional awareness.",
    stats: "Practical resources",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: TrendingUp,
    title: "Progress Awareness",
    desc: "View secure, encrypted summaries of your reflections. You decide what's tracked, shared, or deleted.",
    stats: "You own your insights",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50",
  },
  {
    icon: Shield,
    title: "Privacy First",
    desc: "We follow GDPR and the UK Data Protection Act 2018. No data is ever sold or shared for marketing.",
    stats: "Transparent protection",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
  },
];

const trustIndicators = [
  { icon: Lock, text: "End-to-end encrypted" },
  { icon: Zap, text: "Instant support" },
  { icon: Target, text: "Evidence-informed" },
  { icon: Brain, text: "AI-powered" },
  { icon: Clock, text: "24/7 available" },
  { icon: Eye, text: "No data sharing" },
];

// ----------------------
// Component
// ----------------------
export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative py-24 md:py-32 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl" />

      <div className="relative max-w-[100rem] mx-auto px-8 sm:px-10 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 border border-purple-200 shadow-sm mb-8">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-purple-700">
                Supportive tools for everyday wellbeing
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Everything You Need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Feel Better
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            A complete toolkit for mental wellbeing — combining AI-guided reflection, 
            evidence-based activities, and uncompromising privacy.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {trustIndicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 border border-gray-200 shadow-sm"
              >
                <div className="p-1.5 bg-purple-100 rounded-lg">
                  <Icon className="h-4 w-4 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {indicator.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg" />
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-200/50" />
                <div className="relative p-8 h-full flex flex-col">
                  <div className="mb-6">
                    <div
                      className={`p-4 rounded-2xl ${feature.bgColor} inline-flex`}
                    >
                      <div
                        className={`p-2 rounded-xl bg-gradient-to-r ${feature.color}`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow mb-6">
                    {feature.desc}
                  </p>
                  <span className="text-sm font-semibold text-gray-700 bg-gray-100/80 px-3 py-2 rounded-full">
                    {feature.stats}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Inline Compliance Notice */}
        <p className="text-sm text-gray-500 text-center max-w-3xl mx-auto leading-relaxed">
          Ubuncare offers AI wellbeing reflection, not clinical or therapeutic advice.{" "}
          If you&apos;re in crisis,{" "}
          <a
            href="#crisis-support"
            className="text-purple-600 font-medium hover:underline"
          >
            get help here
          </a>
          .
        </p>
      </div>
    </section>
  );
}