"use client";

import { motion } from "framer-motion";

const lines = [
  { emoji: "🚨", title: "Emergency",    number: "999",      detail: "Immediate danger. Call now.",                     color: "#C62828" },
  { emoji: "📞", title: "Samaritans",   number: "116 123",  detail: "Free, 24/7. No judgement.",                       color: "#1D6B52" },
  { emoji: "💬", title: "Shout",        number: "Text 85258", detail: "Text SHOUT for confidential 24/7 support.",    color: "#5C6BC0" },
  { emoji: "🏥", title: "NHS 111",      number: "111",      detail: "Non-emergency mental health advice.",             color: "#2E9B78" },
];

export default function CrisisSupport() {
  return (
    <section id="crisis-support" className="py-10 md:py-14" style={{ backgroundColor: "#FCEBEB" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3" style={{ color: "#1A2420" }}>
            If you need urgent support
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#4A5E57" }}>
            Ubuncare is a supportive companion, not a crisis service. If you are in danger,
            in distress, or thinking about harming yourself, please reach out to one of these
            services. Help is available right now.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {lines.map((l, i) => (
            <motion.div
              key={l.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-2xl p-5"
              style={{ backgroundColor: "#FFFFFF", border: `1.5px solid ${l.color}20` }}
            >
              <span className="text-2xl mb-3 block">{l.emoji}</span>
              <h3 className="font-bold text-sm mb-0.5" style={{ color: l.color }}>{l.title}</h3>
              <p className="font-extrabold text-lg mb-1" style={{ color: "#1A2420" }}>{l.number}</p>
              <p className="text-xs leading-snug" style={{ color: "#4A5E57" }}>{l.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-xs mt-6"
          style={{ color: "#4D7068" }}
        >
          You can also visit{" "}
          <a href="https://www.mind.org.uk" target="_blank" rel="noopener noreferrer"
            className="underline" style={{ color: "#1D6B52" }}>mind.org.uk</a>{" "}
          for mental health information and local support services.
        </motion.p>
      </div>
    </section>
  );
}
