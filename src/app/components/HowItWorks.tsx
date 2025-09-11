"use client";

import Container from "./Container";
import { ClipboardCheck, Brain, User, MessageCircle, TrendingUp, Star, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Start with a Mental Health Assessment",
    desc: "Complete a validated framework covering stress, anxiety, and depression (PHQ-9, GAD-7). This builds a holistic view of your mental state.",
    color: "from-blue-100 to-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Brain,
    title: "Get Personalized Insights",
    desc: "See your results clearly: anxiety level, stress level, depression score, and mood stability. Know where you stand in minutes.",
    color: "from-purple-100 to-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: User,
    title: "Choose Your AI Companion",
    desc: "Select the AI practitioner or companion that matches your style—empathetic, structured, or motivational.",
    color: "from-green-100 to-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: MessageCircle,
    title: "Daily Support & Tools",
    desc: "Chat anytime, complete daily activities, track mood trends, celebrate achievements, and access resources—all in one place.",
    color: "from-amber-100 to-amber-50",
    iconColor: "text-amber-600",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-10 md:py-18 bg-ubuncare">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200 px-6 py-3 text-[15px] font-semibold text-textMain shadow-sm mb-8"
          >
            <Star className="h-5 w-5 text-blue-600" />
            <span>How Ubuncare Works</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-textMain mb-6"
          >
            Your guided{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              journey to wellbeing
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-textBody leading-relaxed"
          >
            From assessment to daily support, Ubuncare provides a simple, effective pathway to
            manage stress, anxiety, and depression with evidence-based tools.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-8 shadow-sm border border-gray-100 bg-gradient-to-br ${step.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div
                  className={`inline-flex items-center justify-center p-4 rounded-xl bg-white shadow-sm mb-6`}
                >
                  <Icon className={`h-7 w-7 ${step.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-textMain mb-3">{step.title}</h3>
                <p className="text-textBody leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-textMain mb-3">Ready to take your first step?</h3>
            <p className="text-textBody mb-6">
              Join the waitlist and be among the first to experience Ubuncare’s holistic approach to
              mental wellness.
            </p>
            <a
              href="#join"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Join Waitlist
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
