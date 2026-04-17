"use client";

import { motion } from "framer-motion";

const primary = [
  { emoji: "💬", title: "Mood Check-In",     desc: "A gentle guided check-in that explores how you're feeling and what might be behind it." },
  { emoji: "🪞", title: "Mood Chat",          desc: "Reflect on your day with your guide. Compassionate, unhurried, judgment-free." },
  { emoji: "🧘", title: "Quick Calm",         desc: "One tap into a guided 2-minute reset, for when you need to slow down right now." },
  { emoji: "🌬️", title: "Guided Breathing",  desc: "Box breathing and 4-7-8 techniques, guided step by step. Works in under 3 minutes." },
  { emoji: "🆘", title: "Crisis Support",     desc: "Always one tap away. Real UK helplines including Samaritans, NHS 111 and Shout, clearly signposted." },
];

const secondary = [
  { emoji: "🙏", title: "Gratitude" },
  { emoji: "📊", title: "Mood History" },
  { emoji: "💡", title: "Insights" },
  { emoji: "📅", title: "Weekly Intention" },
  { emoji: "🧍", title: "Body Scan" },
  { emoji: "🌱", title: "Sensory Grounding" },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-10 md:py-14" style={{ backgroundColor: "#FDFAF6" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "#1A2420" }}>
            The tools that matter most
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#4A5E57" }}>
            These are the core tools at the centre of the Ubuncare experience. No account. No tracking. Everything stays on your device.
          </p>
        </div>

        {/* Primary — large cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {primary.map((f, i) => (
            <motion.div key={f.title}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`rounded-2xl p-6 ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
              style={{ backgroundColor: "#FFFFFF", border: "1.5px solid #E2EBE6" }}>
              <span className="text-3xl mb-4 block">{f.emoji}</span>
              <h3 className="font-bold text-base mb-2" style={{ color: "#1A2420" }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#4A5E57" }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Secondary — compact chips */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#4D7068" }}>
            Also included
          </p>
          <div className="flex flex-wrap gap-2.5">
            {secondary.map((s) => (
              <span key={s.title}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid #E2EBE6", color: "#4A5E57" }}>
                {s.emoji} {s.title}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
