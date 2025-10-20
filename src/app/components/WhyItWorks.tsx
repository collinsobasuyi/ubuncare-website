"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Heart,
  MessageCircle,
  Sparkles,
  Shield,
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  Zap,
  Star,
  Clock,
  Eye,
} from "lucide-react";

export default function WhyItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const principles = [
    {
      icon: Brain,
      title: "Science That Feels Human",
      description:
        "Evidence-based techniques wrapped in genuine conversation, not clinical jargon.",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Cognitive Behavioral principles",
        "Mindfulness-based methods",
        "Neuroscience-backed reflections",
      ],
    },
    {
      icon: Heart,
      title: "Compassion First",
      description:
        "Change begins with feeling understood, not analyzed. Ubuncare listens with care.",
      color: "from-pink-500 to-rose-500",
      features: [
        "Judgment-free conversations",
        "Emotional validation",
        "Self-kindness focus",
      ],
    },
    {
      icon: MessageCircle,
      title: "Conversation That Connects",
      description:
        "Real dialogue that helps you discover your own insights and emotional clarity.",
      color: "from-purple-500 to-indigo-500",
      features: [
        "Active listening AI",
        "Gentle question flow",
        "Personalized guidance",
      ],
    },
  ];

  const transformations = [
    {
      before: "I'm constantly overwhelmed by my thoughts",
      after: "I'm learning to observe my thoughts without being swept away",
      duration: "2–3 weeks",
      icon: Eye,
      color: "bg-blue-50 text-blue-600",
    },
    {
      before: "I'm hard on myself when I make mistakes",
      after: "I'm learning to offer myself compassion instead of criticism",
      duration: "3–4 weeks",
      icon: Heart,
      color: "bg-pink-50 text-pink-600",
    },
    {
      before: "I don't know why I feel this way",
      after: "I'm starting to understand how my thoughts shape my emotions",
      duration: "4–5 weeks",
      icon: Target,
      color: "bg-purple-50 text-purple-600",
    },
  ];

  const practiceExamples = [
    {
      scenario: "When you're anxious about work",
      approach: "We help you identify what's actually worrying you in the moment.",
      outcome: "Instead of vague 'just breathe' advice.",
      icon: Zap,
    },
    {
      scenario: "When you're being self-critical",
      approach:
        "We gently guide you to respond like you would to a loved one.",
      outcome: "Instead of empty affirmations.",
      icon: Star,
    },
    {
      scenario: "When you're feeling stuck",
      approach:
        "We help you take one small, realistic step forward without pressure.",
      outcome: "Instead of overwhelming advice.",
      icon: CheckCircle,
    },
  ];

  return (
    <section
      ref={ref}
      id="why-it-works"
      className="relative py-24 md:py-28 bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 overflow-hidden"
    >
      {/* Ambient Gradient Auras */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(99,102,241,0.06),transparent)]" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-[100rem] mx-auto px-8 sm:px-10 lg:px-16 xl:px-20">
        {/* ---------------- Header ---------------- */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={container}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 border border-blue-200 shadow-sm mb-8"
          >
            <div className="p-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-semibold text-blue-700">
              The psychology behind feeling better
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Ubuncare Works
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            Most mental health tools try to fix you. Ubuncare helps you understand, reflect, and reconnect with yourself — gently and scientifically.
          </motion.p>
        </motion.div>

        {/* ---------------- Core Principles ---------------- */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={container}
          className="mb-28"
        >
          <div className="grid lg:grid-cols-3 gap-10">
            {principles.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-500"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.features.map((f, fi) => (
                      <li
                        key={fi}
                        className="flex items-center gap-3 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ---------------- Transformations ---------------- */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={container}
          className="mb-28"
        >
          <div className="text-center mb-14">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Real Shifts You’ll Notice Over Time
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ubuncare reflections create subtle yet powerful mindset changes
              that help you manage emotions and daily stress.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {transformations.map((t, i) => {
              const Icon = t.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-lg transition-all text-center"
                >
                  <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1 mb-5">
                    <Clock className="h-3.5 w-3.5 text-gray-600" />
                    <span className="text-xs font-medium text-gray-700">
                      {t.duration}
                    </span>
                  </div>
                  <div
                    className={`w-12 h-12 ${t.color} rounded-2xl flex items-center justify-center mx-auto mb-5`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-sm text-gray-500 mb-2">Before:</p>
                  <p className="bg-amber-50 border border-amber-100 rounded-lg p-3 text-gray-700 text-sm mb-3 italic">
                    “{t.before}”
                  </p>
                  <ArrowRight className="h-4 w-4 text-blue-500 mx-auto mb-3" />
                  <p className="text-sm text-gray-500 mb-2">Now:</p>
                  <p className="bg-green-50 border border-green-100 rounded-lg p-3 text-gray-700 text-sm italic">
                    “{t.after}”
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ---------------- Practice Examples ---------------- */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={container}
          className="mb-28"
        >
          <div className="text-center mb-14">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What Makes Our Approach Different
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real-life guidance that adapts to your emotions, not a generic
              script.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {practiceExamples.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 bg-blue-100 rounded-xl">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {p.scenario}
                    </h4>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                      <p className="text-sm text-blue-700 font-medium">
                        {p.approach}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 italic">{p.outcome}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ---------------- Trust Section ---------------- */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="bg-gradient-to-br from-white to-blue-50/50 rounded-3xl p-10 lg:p-14 border border-blue-100 shadow-md text-center max-w-6xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Backed by Science, Built for Real Life
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every reflection follows principles from CBT, mindfulness, and
                compassion-focused therapy — crafted to fit your daily rhythm.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-3xl mx-auto">
            {[
              {
                icon: Brain,
                title: "Evidence-Based",
                description: "Grounded in CBT & emotional regulation science",
              },
              {
                icon: Heart,
                title: "Compassion-Focused",
                description: "Encourages self-kindness before change",
              },
              {
                icon: Users,
                title: "Human-Centered",
                description: "Co-designed with users and clinicians",
              },
              {
                icon: Shield,
                title: "Privacy First",
                description: "No tracking or data sharing — ever",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                    <Icon className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
