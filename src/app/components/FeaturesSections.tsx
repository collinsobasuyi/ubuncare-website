"use client";

import Container from "./Container";
import { Brain, Heart, Shield, Clock, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "CBT-Informed Exercises",
    desc: "Evidence-based cognitive behavioral therapy practices designed to reframe unhelpful thoughts and reduce anxiety.",
    color: "text-blue-600",
    bg: "from-blue-50 to-blue-100",
  },
  {
    icon: Heart,
    title: "Empathetic AI Companion",
    desc: "Compassionate support that listens and responds without judgment, helping you feel less alone in tough moments.",
    color: "text-pink-600",
    bg: "from-pink-50 to-pink-100",
  },
  {
    icon: Clock,
    title: "3-Minute Daily Sessions",
    desc: "Short, structured check-ins designed to fit easily into your day, creating meaningful impact with minimal effort.",
    color: "text-green-600",
    bg: "from-green-50 to-green-100",
  },
  {
    icon: Shield,
    title: "Private & Secure",
    desc: "End-to-end encryption and strict privacy measures ensure your data and conversations always remain protected.",
    color: "text-purple-600",
    bg: "from-purple-50 to-purple-100",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    desc: "Beautiful insights into your mood, habits, and milestones—helping you see how far you’ve come over time.",
    color: "text-amber-600",
    bg: "from-amber-50 to-amber-100",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-ubuncare">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Thoughtful{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              features
            </span>{" "}
            designed for your wellbeing
          </motion.h2>

          <p className="text-lg text-textBody leading-relaxed">
            Ubuncare blends psychology with AI to make mental health support practical, private, and
            human.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-8 shadow-sm border border-gray-100 bg-gradient-to-br ${f.bg} hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm mb-5">
                  <Icon className={`h-6 w-6 ${f.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-textMain mb-3">{f.title}</h3>
                <p className="text-textBody leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
