"use client";

import { motion } from "framer-motion";
import { Shield, User, Star } from "lucide-react";

const mockMoods = ["😌 Calm", "😊 Happy", "😔 Low", "😰 Anxious"];
const mockCards = [
  { emoji: "🧠", text: "Daily mood check-ins" },
  { emoji: "🌿", text: "Guided breathing & calm" },
  { emoji: "✨", text: "Gentle self-reflection" },
];

export default function HeroPro() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(150deg, #144D3B 0%, #1D6B52 40%, #2E9B78 100%)" }}
      aria-label="Welcome to Ubuncare"
    >
      <div aria-hidden="true" className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 65%)", transform: "translate(25%, -25%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full flex flex-col lg:flex-row items-center gap-14">

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex-[3] text-center lg:text-left"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-5">
            Check in.<br />
            Reflect.<br />
            <span style={{ color: "rgba(255,255,255,0.7)" }}>Find your calm.</span>
          </h1>

          <p className="text-lg md:text-xl font-medium mb-4" style={{ color: "rgba(255,255,255,0.82)" }}>
            A gentle daily space to check in, reflect, and find calm.
          </p>

          <p className="text-base leading-relaxed mb-10 max-w-md mx-auto lg:mx-0" style={{ color: "rgba(255,255,255,0.6)" }}>
            Guided mood check-ins, breathing exercises, and gentle self-reflection.
            Designed with your privacy in mind. No account needed.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
            <a href="#download"
              className="px-8 py-4 rounded-2xl bg-white font-bold text-base shadow-xl hover:bg-[#EBF5F0] transition-colors"
              style={{ color: "#1D6B52" }}>
              Download Now
            </a>
            <a href="#how-it-works"
              className="px-8 py-4 rounded-2xl font-semibold text-base text-white hover:bg-white/10 transition-colors"
              style={{ border: "1.5px solid rgba(255,255,255,0.3)" }}>
              How it works
            </a>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {[
              { icon: Star,   label: "Free" },
              { icon: User,   label: "No account needed" },
              { icon: Shield, label: "Private by design" },
            ].map(({ icon: Icon, label }) => (
              <span key={label}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-medium"
                style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.85)" }}>
                <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="flex-[2] flex justify-center lg:justify-end"
          aria-hidden="true"
        >
          <div className="animate-float relative">
            <div className="w-72 md:w-80 rounded-[48px] overflow-hidden flex flex-col"
              style={{ height: "580px", backgroundColor: "#FDFAF6", border: "4px solid rgba(255,255,255,0.3)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.35)" }}>
              {/* Status bar */}
              <div className="h-10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#1D6B52" }}>
                <div className="w-24 h-1.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.25)" }} />
              </div>
              {/* Screen */}
              <div className="flex-1 flex flex-col p-5 gap-3 overflow-hidden">
                <p className="text-xs font-medium" style={{ color: "#4D7068" }}>Good morning ✨</p>
                <p className="text-base font-bold" style={{ color: "#1A2420" }}>How are you feeling today?</p>
                <div className="flex flex-wrap gap-2">
                  {mockMoods.map((m) => (
                    <span key={m} className="px-3 py-1.5 rounded-full text-[10px] font-semibold"
                      style={{ backgroundColor: "#EBF5F0", color: "#1D6B52" }}>{m}</span>
                  ))}
                </div>
                <div className="flex flex-col gap-2.5 mt-1">
                  {mockCards.map((f) => (
                    <div key={f.text} className="flex items-center gap-3 px-3.5 py-3 rounded-2xl"
                      style={{ backgroundColor: "#FFFFFF", border: "1px solid #E2EBE6" }}>
                      <span className="text-xl">{f.emoji}</span>
                      <span className="text-xs font-medium" style={{ color: "#4A5E57" }}>{f.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto py-3.5 rounded-2xl text-center" style={{ backgroundColor: "#1D6B52" }}>
                  <span className="text-white text-xs font-bold tracking-wide">Start Check-in</span>
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -right-8 top-24 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl"
              style={{ backgroundColor: "#FFFFFF", boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}>
              <span className="text-xl">🌿</span>
              <div>
                <p className="text-xs font-bold" style={{ color: "#1A2420" }}>3-day streak</p>
                <p className="text-[10px]" style={{ color: "#4D7068" }}>Keep it up!</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
