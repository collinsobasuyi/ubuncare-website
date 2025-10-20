"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  Brain,
  MessageCircle,
  BarChart3,
  ClipboardList,
  Shield,
} from "lucide-react";

export default function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) controls.start("visible");
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i, ease: [0.25, 0.1, 0.25, 1] },
    }),
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i = 0) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: i, ease: "easeOut" },
    }),
  };

  const steps = [
    {
      title: "Start with Gentle Reflection",
      description:
        "Begin with simple, evidence-based check-ins that help you understand your current state without pressure. Our approach focuses on self-awareness, not diagnosis.",
      icon: ClipboardList,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-purple-100/50",
      features: ["PHQ-9 & GAD-7 assessments", "Mood tracking", "Gentle prompts"],
      visual: (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 to-pink-200/20 rounded-[2rem]" />
          <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100 w-full max-w-[280px]">
            <div className="text-center mb-4">
              <ClipboardList className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 text-lg">How are you feeling?</h4>
            </div>
            <div className="space-y-3">
              {["Anxious", "Calm", "Overwhelmed", "Content"].map((mood, i) => (
                <motion.div
                  key={mood}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  custom={i * 0.1}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-50 transition-colors cursor-pointer"
                >
                  <div className="w-3 h-3 rounded-full bg-purple-400" />
                  <span className="text-sm text-gray-700">{mood}</span>
                </motion.div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-xl font-medium text-sm shadow-md"
            >
              Continue Reflection
            </motion.button>
          </div>
        </div>
      ),
    },
    {
      title: "Have Compassionate Conversations",
      description:
        "Engage in meaningful dialogues with your AI companion that feel genuinely supportive. Get CBT-informed guidance that helps you process thoughts and emotions.",
      icon: MessageCircle,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-blue-100/50",
      features: ["CBT-informed responses", "Active listening", "Personalized support"],
      visual: (
        <div className="relative w-full h-full flex flex-col justify-center p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-cyan-200/20 rounded-[2rem]" />
          <div className="relative z-10 space-y-4 max-w-[280px] mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.1}
              className="flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-blue-600" />
              </div>
              <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm border border-blue-100">
                <p className="text-sm text-gray-700">How has your week been so far?</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.3}
              className="flex items-start gap-3 justify-end"
            >
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl rounded-tr-none px-4 py-3 shadow-md max-w-[85%]">
                <p className="text-sm">A bit stressful, but managing</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.6}
              className="flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-blue-600" />
              </div>
              <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm border border-blue-100">
                <p className="text-sm text-gray-700">
                  That sounds challenging. What’s been most helpful when you feel stressed?
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      title: "Track Your Progress Visually",
      description:
        "See your wellbeing journey unfold through beautiful, encrypted visualizations. Notice patterns and celebrate small wins in your mental health journey.",
      icon: BarChart3,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-green-100/50",
      features: ["Encrypted data storage", "Progress trends", "Milestone tracking"],
      visual: (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 to-emerald-200/20 rounded-[2rem]" />
          <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100 w-full max-w-[280px]">
            <div className="text-center mb-6">
              <BarChart3 className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800">Your Wellbeing Trend</h4>
              <p className="text-xs text-gray-500 mt-1">Last 30 days</p>
            </div>
            <div className="h-32 relative">
              <svg className="w-full h-full" viewBox="0 0 200 100">
                <path
                  d="M20,80 L60,60 L100,40 L140,30 L180,20"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                </defs>
              </svg>
              {[20, 60, 100, 140, 180].map((x, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="absolute w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-sm"
                  style={{ left: `${x - 6}px`, bottom: `${[80, 60, 40, 30, 20][i] - 6}px` }}
                />
              ))}
            </div>
            <div className="flex justify-between items-center mt-4 text-xs text-gray-600">
              <span>Feeling better</span>
              <span className="text-green-600 font-semibold">↑ 42% improvement</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Receive Personalized Insights",
      description:
        "Get AI-powered reflections that help you understand your emotional patterns and build resilience. Discover personalized strategies for maintaining mental wellbeing.",
      icon: Brain,
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-50 to-amber-100/50",
      features: ["Pattern recognition", "Personalized tips", "Growth opportunities"],
      visual: (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-amber-200/20 rounded-[2rem]" />
          <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-100 w-full max-w-[280px]">
            <div className="text-center mb-4">
              <Brain className="h-8 w-8 text-amber-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800">Your Weekly Insight</h4>
            </div>
            <div className="space-y-4">
              {[
                "You're most productive in the mornings",
                "Taking short breaks helps maintain focus",
                "Celebrate your consistency this week! 🎉",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  custom={0.2 + i * 0.2}
                  className={`rounded-xl p-3 ${
                    i === 2
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                      : "bg-amber-50 border border-amber-200 text-amber-800"
                  }`}
                >
                  <p className="text-sm font-medium">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="relative py-16 md:py-24 bg-gradient-to-br from-[#F8F5FF] via-[#F3EEFF] to-[#E9F4FF] overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.08),transparent)]" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          custom={0.1}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.h2
            variants={fadeUp}
            custom={0.3}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Your Journey to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Feeling Better
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={0.4}
            className="text-xl md:text-2xl text-gray-600 leading-relaxed"
          >
            Four simple steps that work together to support your mental wellbeing,
            with compassion and privacy at every stage.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              initial="hidden"
              animate={controls}
              variants={fadeUp}
              custom={0.5 + index * 0.2}
            >
              {/* Visual */}
              <div className={`flex justify-center order-2 lg:order-${index % 2 === 1 ? "2" : "1"}`}>
                <motion.div
                  variants={scaleIn}
                  custom={0.6 + index * 0.2}
                  className="relative group w-full max-w-sm"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10 rounded-[2.5rem] blur-xl group-hover:opacity-20 transition-opacity duration-500`}
                  />
                  <div
                    className={`relative bg-gradient-to-br ${step.bgColor} rounded-[2.5rem] border-2 border-white/50 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105 overflow-hidden h-96`}
                  >
                    {step.visual}
                  </div>
                  <div
                    className={`absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                </motion.div>
              </div>

              {/* Text */}
              <div className={`space-y-6 order-1 lg:order-${index % 2 === 1 ? "1" : "2"}`}>
                <motion.div variants={fadeUp} custom={0.7 + index * 0.2} className="flex items-center gap-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg`}>
                    <step.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{step.title}</h3>
                </motion.div>

                <motion.p
                  variants={fadeUp}
                  custom={0.8 + index * 0.2}
                  className="text-[20px] text-gray-600 leading-relaxed"
                >
                  {step.description}
                </motion.p>

                <motion.div variants={fadeUp} custom={0.9 + index * 0.2} className="space-y-3">
                  {step.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={fadeUp} custom={1.0 + index * 0.2} className="flex items-center gap-3 pt-4">
                  <Shield className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">
                    Always encrypted and private
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
