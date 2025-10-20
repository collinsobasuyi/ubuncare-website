"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Brain,
  Cloud,
  Moon,
  Sun,
  Sparkles,
  Smile,
  Coffee,
  Users,
  Anchor,
  Target,
} from "lucide-react";

const helps = [
  {
    icon: Cloud,
    title: "Managing Stress & Overwhelm",
    desc: "Ground yourself with AI-guided calm techniques and gentle reflections that help you slow down, breathe, and release tension.",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
  },
  {
    icon: Brain,
    title: "Understanding Your Thoughts",
    desc: "Gain clarity and perspective by exploring recurring thought patterns and emotional triggers in a safe, judgment-free space.",
    color: "from-purple-500 to-indigo-500",
    bg: "bg-purple-50",
  },
  {
    icon: Moon,
    title: "Improving Sleep & Rest",
    desc: "Use soothing evening reflections to quiet your mind, process your day, and prepare your body for deeper rest.",
    color: "from-indigo-500 to-blue-600",
    bg: "bg-indigo-50",
  },
  {
    icon: Coffee,
    title: "Building Daily Resilience",
    desc: "Start your mornings with uplifting, affirming check-ins that help you set intentions and navigate challenges with calm.",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
  },
  {
    icon: Users,
    title: "Nurturing Connection",
    desc: "Reconnect with empathy, self-compassion, and healthy boundaries through mindful dialogue and emotional awareness.",
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
  },
  {
    icon: Anchor,
    title: "Finding Balance in Burnout",
    desc: "Rediscover calm and focus through reflection tools that help you manage exhaustion and prevent emotional overload.",
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-50",
  },
];

export default function HowWeHelp() {
  return (
    <section
      id="how-we-help"
      className="relative py-24 md:py-32 bg-gradient-to-b from-white via-purple-50/40 to-blue-50/40 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.08),rgba(255,255,255,0))]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] bg-blue-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-[100rem] mx-auto px-8 sm:px-10 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-5 py-2 mb-6 border border-purple-100 shadow-sm"
          >
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">
              Compassion in every interaction
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Ubuncare</span>{" "}
            helps you every day
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            Whether you&apos;re dealing with stress, loneliness, burnout, or simply
            trying to stay mindful — Ubuncare adapts to your needs with care,
            empathy, and privacy.
          </motion.p>
        </div>

        {/* Help Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24 relative z-10">
          {helps.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl opacity-70" />
                <div className="relative">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${item.color} w-fit mb-5`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <Smile className="h-12 w-12 text-purple-600 mx-auto mb-5" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Small moments, real emotional care
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Every check-in, conversation, and reflection is a small act of
            kindness toward yourself. Ubuncare is built to help you notice,
            pause, and reconnect — one day at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
