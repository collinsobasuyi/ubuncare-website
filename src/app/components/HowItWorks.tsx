"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) controls.start("visible");
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, [controls]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        delay: isMobile ? i * 0.1 : i,
        ease: [0.25, 0.1, 0.25, 1] 
      },
    }),
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i = 0) => ({
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: isMobile ? i * 0.1 : i,
        ease: "easeOut" 
      },
    }),
  };

  const steps = [
    {
      title: "Start with Gentle Reflection",
      description:
        "Begin with simple, evidence-based check-ins that help you understand your current state without pressure. Our approach focuses on self-awareness, not diagnosis.",
      icon: ClipboardList,
      color: "from-teal-500 to-teal-600",
      bgColor: "from-teal-50 to-teal-100/50",
      features: ["PHQ-9 & GAD-7 assessments", "Mood tracking", "Gentle prompts"],
      visual: (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-200/30 to-teal-200/20 rounded-2xl sm:rounded-[2rem]" />
          <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-teal-100 w-full max-w-[240px] sm:max-w-[280px]">
            <div className="text-center mb-3 sm:mb-4">
              <ClipboardList className="h-6 w-6 sm:h-8 sm:w-8 text-teal-600 mx-auto mb-2 sm:mb-3" />
              <h4 className="font-semibold text-gray-800 text-sm sm:text-lg">How are you feeling?</h4>
            </div>
            <div className="space-y-2 sm:space-y-3">
              {["Anxious", "Calm", "Overwhelmed", "Content"].map((mood, i) => (
                <motion.div
                  key={mood}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  custom={i * 0.1}
                  className="flex items-center gap-2 sm:gap-3 p-1 sm:p-2 rounded-lg hover:bg-teal-50 transition-colors cursor-pointer"
                >
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-teal-400" />
                  <span className="text-xs sm:text-sm text-gray-700">{mood}</span>
                </motion.div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-3 sm:mt-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2 rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm shadow-md"
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
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-100/50",
      features: ["CBT-informed responses", "Active listening", "Personalized support"],
      visual: (
        <div className="relative w-full h-full flex flex-col justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-200/30 to-cyan-200/20 rounded-2xl sm:rounded-[2rem]" />
          <div className="relative z-10 space-y-3 sm:space-y-4 max-w-[220px] sm:max-w-[280px] mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.1}
              className="flex items-start gap-2 sm:gap-3"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 text-teal-600" />
              </div>
              <div className="bg-white rounded-xl sm:rounded-2xl rounded-tl-none px-3 sm:px-4 py-2 sm:py-3 shadow-sm border border-teal-100">
                <p className="text-xs sm:text-sm text-gray-700">How has your week been so far?</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.3}
              className="flex items-start gap-2 sm:gap-3 justify-end"
            >
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl sm:rounded-2xl rounded-tr-none px-3 sm:px-4 py-2 sm:py-3 shadow-md max-w-[85%]">
                <p className="text-xs sm:text-sm">A bit stressful, but managing</p>
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full" />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.6}
              className="flex items-start gap-2 sm:gap-3"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 text-teal-600" />
              </div>
              <div className="bg-white rounded-xl sm:rounded-2xl rounded-tl-none px-3 sm:px-4 py-2 sm:py-3 shadow-sm border border-teal-100">
                <p className="text-xs sm:text-sm text-gray-700">
                  That sounds challenging. What&apos;s been most helpful when you feel stressed?
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
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-100/50",
      features: ["Encrypted data storage", "Progress trends", "Milestone tracking"],
      visual: (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/30 to-teal-200/20 rounded-2xl sm:rounded-[2rem]" />
          <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-emerald-100 w-full max-w-[240px] sm:max-w-[280px]">
            <div className="text-center mb-4 sm:mb-6">
              <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Your Wellbeing Trend</h4>
              <p className="text-xs text-gray-500 mt-1">Last 30 days</p>
            </div>
            <div className="h-24 sm:h-32 relative">
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
                    <stop offset="100%" stopColor="#0d9488" />
                  </linearGradient>
                </defs>
              </svg>
              {[20, 60, 100, 140, 180].map((x, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-teal-500 rounded-full border-2 border-white shadow-sm"
                  style={{ left: `${x - 4}px`, bottom: `${[80, 60, 40, 30, 20][i] - 4}px` }}
                />
              ))}
            </div>
            <div className="flex justify-between items-center mt-3 sm:mt-4 text-xs text-gray-600">
              <span>Feeling better</span>
              <span className="text-teal-600 font-semibold">↑ 42% improvement</span>
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
      color: "from-cyan-500 to-teal-500",
      bgColor: "from-cyan-50 to-teal-100/50",
      features: ["Pattern recognition", "Personalized tips", "Growth opportunities"],
      visual: (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/30 to-teal-200/20 rounded-2xl sm:rounded-[2rem]" />
          <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-cyan-100 w-full max-w-[240px] sm:max-w-[280px]">
            <div className="text-center mb-3 sm:mb-4">
              <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-600 mx-auto mb-2 sm:mb-3" />
              <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Your Weekly Insight</h4>
            </div>
            <div className="space-y-3 sm:space-y-4">
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
                  className={`rounded-lg sm:rounded-xl p-2 sm:p-3 ${
                    i === 2
                      ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                      : "bg-cyan-50 border border-cyan-200 text-cyan-800"
                  }`}
                >
                  <p className="text-xs sm:text-sm font-medium">{text}</p>
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
      className="relative overflow-hidden py-16 md:py-24 bg-white"
    >
      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(13,148,136,0.03),transparent)]" />
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-teal-100/20 rounded-full blur-2xl sm:blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-100/20 rounded-full blur-2xl sm:blur-3xl" />

      <div className="relative w-full max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          custom={0.1}
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16"
        >
          <motion.h2
            variants={fadeUp}
            custom={0.3}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Your Journey to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-700">
              Feeling Better
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={0.4}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            Four simple steps that work together to support your mental wellbeing,
            with compassion and privacy at every stage.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              initial="hidden"
              animate={controls}
              variants={fadeUp}
              custom={0.5 + index * 0.2}
            >
              {/* Visual */}
              <div className="flex justify-center w-full order-1 lg:order-none">
                <motion.div
                  variants={scaleIn}
                  custom={0.6 + index * 0.2}
                  className="relative group w-full max-w-xs sm:max-w-sm"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10 rounded-2xl sm:rounded-[2.5rem] blur-lg sm:blur-xl group-hover:opacity-20 transition-opacity duration-500`}
                  />
                  <div
                    className={`relative bg-gradient-to-br ${step.bgColor} rounded-2xl sm:rounded-[2.5rem] border-2 border-white/50 shadow-xl sm:shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105 overflow-hidden h-80 sm:h-96`}
                  >
                    {step.visual}
                  </div>
                  <div
                    className={`absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-white font-bold text-sm sm:text-lg">{index + 1}</span>
                  </div>
                </motion.div>
              </div>

              {/* Text content */}
              <div className="space-y-4 sm:space-y-6 order-2 lg:order-none">
                <motion.div variants={fadeUp} custom={0.7 + index * 0.2} className="flex items-center gap-3 sm:gap-4">
                  <div className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.color} shadow-lg`}>
                    <step.icon className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">{step.title}</h3>
                </motion.div>

                <motion.p
                  variants={fadeUp}
                  custom={0.8 + index * 0.2}
                  className="text-base sm:text-lg text-gray-600 leading-relaxed"
                >
                  {step.description}
                </motion.p>

                <motion.div variants={fadeUp} custom={0.9 + index * 0.2} className="space-y-2 sm:space-y-3">
                  {step.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 sm:gap-3 text-gray-700">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-500 rounded-full flex-shrink-0" />
                      <span className="text-sm sm:text-base font-medium">{feature}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={fadeUp} custom={1.0 + index * 0.2} className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600" />
                  <span className="text-xs sm:text-sm text-gray-600">
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