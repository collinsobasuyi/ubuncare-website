"use client";

import { Leaf } from "lucide-react";

const navLinks = [
  {
    title: "App",
    links: [
      { label: "How it works",   href: "#how-it-works"    },
      { label: "Tools",          href: "#features"        },
      { label: "Your Guide",     href: "#guides"          },
      { label: "Wellness",       href: "#wellness"        },
      { label: "Crisis Support", href: "#crisis-support"  },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use",   href: "/terms"   },
    ],
  },
];

export default function Footer() {
  return (
    <footer role="contentinfo" aria-label="Ubuncare footer" style={{ backgroundColor: "#1A2420" }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#2E9B78] flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <span className="text-lg font-bold text-white">Ubuncare</span>
            </div>
            <p className="text-sm leading-relaxed mb-2" style={{ color: "#8DBDB6" }}>
              Your space for calm &amp; clarity. A compassionate mental-wellness companion, private by design and free to use.
            </p>
            <p className="text-xs" style={{ color: "#8DBDB6" }}>Built with care in the UK.</p>
          </div>

          {/* Nav */}
          {navLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold mb-3 text-white">{col.title}</h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm hover:text-white transition-colors" style={{ color: "#8DBDB6" }}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderColor: "#2A2A2A", color: "#8DBDB6" }}>
          <p>© {new Date().getFullYear()} Ubuncare. All rights reserved.</p>
          <p>Not a substitute for professional mental health care. If in crisis, call 999 or Samaritans on 116 123.</p>
        </div>
      </div>
    </footer>
  );
}
