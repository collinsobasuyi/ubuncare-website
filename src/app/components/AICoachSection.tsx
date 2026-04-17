"use client";

import { motion } from "framer-motion";

const guides = [
  { name: "Amani", tagline: "Calm & grounded",        emoji: "🌿", accent: "#2E9B78", textColor: "#1D6B52", surface: "#EBF5F0" },
  { name: "Kora",  tagline: "Warm & encouraging",     emoji: "🔥", accent: "#E9963A", textColor: "#8B4500", surface: "#FDF3E7" },
  { name: "Nova",  tagline: "Reflective & insightful",emoji: "🌙", accent: "#5C6BC0", textColor: "#3949A3", surface: "#F0EDFF" },
  { name: "Zuri",  tagline: "Gentle & uplifting",     emoji: "✨", accent: "#8E44AD", textColor: "#5E2373", surface: "#F5EEFF" },
];

const chat = [
  { from: "guide", text: "Hey, how are you feeling today? Take your time." },
  { from: "user",  text: "A little overwhelmed, honestly." },
  { from: "guide", text: "That's okay. Would you like to unpack that together?" },
];

export default function GuidesSection() {
  return (
    <section id="guides" className="py-10 md:py-14" style={{ backgroundColor: "#FDFAF6" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "#1A2420" }}>
            Choose your wellness guide
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#4A5E57" }}>
            Each guide brings a different tone to your check-ins. Pick the style that feels right for you. Switch any time from Settings.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Guide cards */}
          <div className="grid grid-cols-2 gap-4">
            {guides.map((g, i) => (
              <motion.div key={g.name}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-2xl p-5 text-center border-2"
                style={{ backgroundColor: g.surface, borderColor: g.accent + "35" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mx-auto mb-3"
                  style={{ backgroundColor: g.accent + "18" }}>{g.emoji}</div>
                <h3 className="font-bold text-base mb-0.5" style={{ color: g.textColor }}>{g.name}</h3>
                <p className="text-xs" style={{ color: "#4A5E57" }}>{g.tagline}</p>
              </motion.div>
            ))}
          </div>

          {/* Sample chat */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #E2EBE6" }}>
              <div className="px-5 py-4 flex items-center gap-3" style={{ backgroundColor: "#1D6B52" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>🌿</div>
                <div>
                  <p className="text-white font-semibold text-sm">Amani</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.9)" }}>Calm & grounded</p>
                </div>
              </div>

              <div className="p-5 flex flex-col gap-3" style={{ backgroundColor: "#FDFAF6" }}>
                {chat.map((msg, i) => (
                  <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                    <div className="max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed"
                      style={msg.from === "guide"
                        ? { backgroundColor: "#FFFFFF", color: "#4A5E57", border: "1px solid #E2EBE6" }
                        : { backgroundColor: "#1D6B52", color: "#FFFFFF" }}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-4 py-3 flex items-center gap-2 border-t"
                style={{ backgroundColor: "#FFFFFF", borderColor: "#E2EBE6" }}>
                <div className="flex-1 px-4 py-2 rounded-xl text-sm" style={{ backgroundColor: "#EBF5F0", color: "#2E5048" }}>
                  Type your message…
                </div>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white"
                  style={{ backgroundColor: "#1D6B52" }}>→</div>
              </div>
            </div>
            <p className="text-xs mt-3 text-center" style={{ color: "#2E5048" }}>
              All conversations stay on your device. Nothing is shared.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
