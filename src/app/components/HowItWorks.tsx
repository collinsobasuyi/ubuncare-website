"use client";

import { motion } from "framer-motion";

const steps = [
  { n: "01", emoji: "✅", title: "Read & consent",      desc: "Plain-language privacy info, no legalese. You choose what stays local." },
  { n: "02", emoji: "🌿", title: "Choose your guide",   desc: "Pick Amani, Kora, Nova, or Zuri. Switch any time from Settings." },
  { n: "03", emoji: "💬", title: "First check-in",      desc: "Your guide opens a gentle mood conversation at your own pace." },
  { n: "04", emoji: "🧘", title: "Explore your tools",  desc: "Breathing, body scans, grounding. One tap from the home screen." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-10 md:py-14" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "#1A2420" }}>
            From first launch to lasting calm
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#4A5E57" }}>
            Four steps from opening the app to building a daily wellbeing practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div key={s.n}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-2xl p-6" style={{ backgroundColor: "#FDFAF6", border: "1px solid #E2EBE6" }}>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: "#EBF5F0", color: "#1D6B52" }}>{s.n}</span>
                <span className="text-xl">{s.emoji}</span>
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: "#1A2420" }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#4A5E57" }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
