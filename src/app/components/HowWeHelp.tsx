"use client";

import { motion } from "framer-motion";

const tools = [
  { emoji: "🌬️", title: "Guided Breathing",   desc: "Box breathing and 4-7-8 techniques, guided step by step.",        accent: "#2E9B78" },
  { emoji: "🧍",  title: "Body Scan",          desc: "Notice where you hold tension and release it gently.",             accent: "#2E9B78" },
  { emoji: "🌱",  title: "Sensory Grounding",  desc: "5-4-3-2-1: ground yourself when anxiety takes over.",              accent: "#5C6BC0" },
  { emoji: "📅",  title: "Weekly Intention",   desc: "Set a small anchor to stay present and purposeful.",               accent: "#E9963A" },
  { emoji: "💛",  title: "Self-Care Ideas",    desc: "Practical nudges based on your mood, picked by your guide.",       accent: "#1D6B52" },
  { emoji: "🆘",  title: "Emergency Calm",     desc: "One-tap sequence to interrupt the panic response, fast.",          accent: "#C62828" },
];

export default function HowWeHelp() {
  return (
    <section id="wellness" className="py-10 md:py-14" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "#1A2420" }}>
            Tools for real moments of stress
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#4A5E57" }}>
            When you need extra support, these tools help you slow down, ground yourself, and reset. All in under five minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((t, i) => (
            <motion.div key={t.title}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-4 p-5 rounded-2xl" style={{ backgroundColor: "#FDFAF6", border: "1px solid #E2EBE6" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ backgroundColor: "#FFFFFF", border: `1.5px solid ${t.accent}25` }}>{t.emoji}</div>
              <div>
                <h3 className="font-bold text-sm mb-1" style={{ color: "#1A2420" }}>{t.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A5E57" }}>{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
