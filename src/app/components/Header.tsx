"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Leaf } from "lucide-react";

const links = [
  { label: "How it works",   href: "/#how-it-works",   section: "how-it-works"   },
  { label: "Tools",          href: "/#features",        section: "features"       },
  { label: "Crisis Support", href: "/#crisis-support",  section: "crisis-support" },
  { label: "Privacy",        href: "/privacy",          section: ""               },
];

export default function Header() {
  const [open, setOpen]                   = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const ids = ["how-it-works", "features", "crisis-support"];

    const trackActive = () => {
      const scrollY = window.scrollY + 100;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", trackActive, { passive: true });
    trackActive();
    return () => window.removeEventListener("scroll", trackActive);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FDFAF6]/96 backdrop-blur-md shadow-sm border-b border-[#E2EBE6]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Ubuncare home">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-sm transition-all ${scrolled ? "bg-[#1D6B52]" : "bg-white/20 border border-white/30"}`}>
            <Leaf className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
          <span className={`font-bold text-lg tracking-tight transition-colors ${scrolled ? "text-[#1A2420]" : "text-white"}`}>
            Ubuncare
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {links.map((l) => {
            const isActive = l.section !== "" && activeSection === l.section;
            if (l.href.startsWith("/") && !l.href.startsWith("/#")) {
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                    scrolled
                      ? "text-[#4A5E57] hover:text-[#1D6B52] hover:bg-[#EBF5F0]"
                      : "text-white/85 hover:text-white hover:bg-white/15"
                  }`}
                >
                  {l.label}
                </Link>
              );
            }
            return (
              <a
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                  scrolled
                    ? isActive
                      ? "text-[#1D6B52] bg-[#EBF5F0] font-semibold"
                      : "text-[#4A5E57] hover:text-[#1D6B52] hover:bg-[#EBF5F0]"
                    : isActive
                      ? "text-white bg-white/25 font-semibold underline underline-offset-4"
                      : "text-white/85 hover:text-white hover:bg-white/15"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <a
          href="/#download"
          className={`hidden md:inline-flex items-center px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-sm ${
            scrolled
              ? "bg-[#1D6B52] text-white hover:bg-[#2E9B78]"
              : "bg-white text-[#1D6B52] hover:bg-[#EBF5F0]"
          }`}
        >
          Download
        </a>

        {/* Hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-[#1D6B52] hover:bg-[#EBF5F0]" : "text-white hover:bg-white/15"
          }`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#FDFAF6] border-b border-[#E2EBE6] px-5 pb-4 flex flex-col gap-1">
          {links.map((l) => {
            if (l.href.startsWith("/") && !l.href.startsWith("/#")) {
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 px-3 text-sm font-medium text-[#4A5E57] hover:text-[#1D6B52] hover:bg-[#EBF5F0] rounded-lg transition-colors"
                >
                  {l.label}
                </Link>
              );
            }
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 px-3 text-sm font-medium text-[#4A5E57] hover:text-[#1D6B52] hover:bg-[#EBF5F0] rounded-lg transition-colors"
              >
                {l.label}
              </a>
            );
          })}
          <a
            href="/#download"
            onClick={() => setOpen(false)}
            className="mt-2 py-3 rounded-xl bg-[#1D6B52] text-white text-sm font-semibold text-center hover:bg-[#2E9B78] transition-colors"
          >
            Download
          </a>
        </div>
      )}
    </header>
  );
}
