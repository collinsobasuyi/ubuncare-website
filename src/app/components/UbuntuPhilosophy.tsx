"use client";

import { motion } from "framer-motion";

export default function UbuntuPhilosophy() {
  return (
    <section id="about" className="py-10 md:py-14" style={{ backgroundColor: "#FDFAF6" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — philosophy text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#2E9B78" }}>
              The name behind the app
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight" style={{ color: "#1A2420" }}>
              Ubuntu — <em className="not-italic" style={{ color: "#1D6B52" }}>&ldquo;I am because we are&rdquo;</em>
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#4A5E57" }}>
              Ubuntu is a southern African philosophy rooted in shared humanity. It holds that
              a person is a person through other people, and our wellbeing is bound up in
              the wellbeing of those around us.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#4A5E57" }}>
              Ubuncare was built from that belief. Mental wellness isn&apos;t a solo pursuit.
              It grows from feeling seen, heard, and connected. Even in a quiet moment alone
              with an app.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#4A5E57" }}>
              That&apos;s why every interaction in Ubuncare is designed to feel warm, not clinical.
              Human, not transactional. A companion, not a tracker.
            </p>
          </motion.div>

          {/* Right — three pillars */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {[
              {
                emoji: "🌍",
                title: "Rooted in warmth",
                desc: "The Ubuntu philosophy puts human connection at the centre of everything, not productivity, not scores.",
                accent: "#1D6B52",
                surface: "#EBF5F0",
              },
              {
                emoji: "🤝",
                title: "You are not alone",
                desc: "Even a private app can feel like a companion. Ubuncare is designed to make you feel accompanied, not monitored.",
                accent: "#E9963A",
                surface: "#FDF3E7",
              },
              {
                emoji: "🌱",
                title: "Small steps, shared values",
                desc: "Healing doesn't have to be dramatic. Small daily check-ins, done with kindness, add up over time.",
                accent: "#5C6BC0",
                surface: "#F0EDFF",
              },
            ].map((item) => (
              <div key={item.title}
                className="flex items-start gap-4 p-5 rounded-2xl border"
                style={{ backgroundColor: item.surface, borderColor: item.accent + "30" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: "#FFFFFF" }}>
                  {item.emoji}
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: "#1A2420" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#4A5E57" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
