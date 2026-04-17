"use client";

import { motion } from "framer-motion";

export default function DownloadCTA() {
  return (
    <section
      id="download"
      className="py-10 md:py-14"
      style={{ background: "linear-gradient(150deg, #144D3B 0%, #1D6B52 40%, #2E9B78 100%)" }}
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "rgba(255,255,255,0.6)" }}>
            Available now
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Download Ubuncare
          </h2>
          <p className="text-base mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            Free to download. Free to use. Built with your privacy in mind.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {/* App Store */}
            <a
              href="#"
              aria-label="Download on the App Store"
              className="flex items-center gap-3 px-6 py-3.5 rounded-2xl transition-all hover:opacity-85 active:scale-95"
              style={{ backgroundColor: "#111", border: "1.5px solid rgba(255,255,255,0.18)" }}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" fill="white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] font-medium leading-none mb-1" style={{ color: "rgba(255,255,255,0.65)" }}>Download on the</p>
                <p className="text-white font-bold text-base leading-none">App Store</p>
              </div>
            </a>

            {/* Google Play */}
            <a
              href="#"
              aria-label="Get it on Google Play"
              className="flex items-center gap-3 px-6 py-3.5 rounded-2xl transition-all hover:opacity-85 active:scale-95"
              style={{ backgroundColor: "#111", border: "1.5px solid rgba(255,255,255,0.18)" }}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0">
                <path fill="#34A853" d="M3.18.1C2.47.54 2 1.34 2 2.27v19.46c0 .93.47 1.73 1.18 2.17L14.06 13 3.18.1z" />
                <path fill="#4285F4" d="M5.52.82c-.38-.25-.82-.4-1.28-.4-.38 0-.74.1-1.06.28L14.06 12l3.72-3.41L5.52.82z" />
                <path fill="#FBBC04" d="M20.84 9.67l-3.06-1.79-4.5 4.12 4.5 4.12 3.08-1.79c.88-.51.88-1.65-.02-2.46z" />
                <path fill="#EA4335" d="M3.18 23.9c.32.18.68.28 1.06.28.46 0 .9-.13 1.28-.4l12.2-7.13-3.66-3.67-10.88 10.92z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] font-medium leading-none mb-1" style={{ color: "rgba(255,255,255,0.65)" }}>GET IT ON</p>
                <p className="text-white font-bold text-base leading-none">Google Play</p>
              </div>
            </a>
          </div>

          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            Free. No account needed. Private by design.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
