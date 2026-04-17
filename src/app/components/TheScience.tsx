"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    emoji: "⏱️",
    title: "Short by design",
    desc: "Check-ins take 2 to 5 minutes. Built for real life, not perfect conditions.",
  },
  {
    emoji: "🔒",
    title: "Private by default",
    desc: "Your reflections, moods, and conversations never leave your phone.",
  },
  {
    emoji: "🎁",
    title: "Free to use",
    desc: "No subscription, no paywall, no account. Just open the app and start.",
  },
  {
    emoji: "🧠",
    title: "Evidence-informed tools",
    desc: "Breathing, grounding, and reflection techniques drawn from CBT and mindfulness research.",
  },
];

export default function TheScience() {
  return (
    <section id="the-science" className="py-10 md:py-14" style={{ backgroundColor: "#FDFAF6" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "#1A2420" }}>
            Designed for simple daily support
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#4A5E57" }}>
            No numbers to hit. No streaks to keep. Just a calm space to check in with yourself.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-2xl p-6 text-center" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E2EBE6" }}>
              <div className="text-3xl mb-3">{p.emoji}</div>
              <h3 className="font-bold text-sm mb-2" style={{ color: "#1A2420" }}>{p.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#4A5E57" }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
