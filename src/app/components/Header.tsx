"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Container from "./Container";
import { Brain, Menu, X, ChevronRight } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMounted(true), []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock scroll on menu
  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = open ? "hidden" : "";
    return () => {
      root.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100"
            : "bg-white/80 backdrop-blur-md border-b border-transparent"
        }`}
      >
        <Container className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-textMain group"
          >
            <div className="bg-primary/10 p-1.5 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Brain className="h-5 w-5 text-primary" />
            </div>
            <span className="text-lg">Ubuncare</span>
          </Link>

          {/* Desktop/Tablet nav */}
          <nav className="hidden md:flex items-center gap-8 text-[16px]">
            <a
              href="#features"
              className="text-textBody hover:text-primary transition-colors font-medium py-2"
            >
              Features
            </a>
            <a
              href="#why-it-works"
              className="text-textBody hover:text-primary transition-colors font-medium py-2"
            >
              Why it Works
            </a>
            {/* <a
              href="#how"
              className="text-textBody hover:text-primary transition-colors font-medium py-2"
            >
              How it Works
            </a> */}

            <a
              href="#faq"
              className="text-textBody hover:text-primary transition-colors font-medium py-2"
            >
              FAQs
            </a>
            <Link
              href="/contact"
              className="text-textBody hover:text-primary transition-colors font-medium py-2"
            >
              Contact
            </Link>
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#join"
              className="hidden sm:inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white px-5 py-2.5 text-[15px] font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Get Early Access
              <ChevronRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex items-center justify-center rounded-full border border-gray-200 p-2.5 hover:bg-gray-50 transition-colors"
              aria-label="Open menu"
              aria-controls="mobile-menu"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5 text-textBody" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile menu */}
      {mounted &&
        createPortal(
          <div
            id="mobile-menu"
            className={`md:hidden fixed inset-0 z-[999] transition-opacity duration-300 ${
              open ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Menu panel */}
            <div
              className={`absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-xl transform transition-transform duration-300 ${
                open ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Top bar */}
              <div className="h-16 px-6 border-b border-gray-100 flex items-center justify-between">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold text-textMain"
                  onClick={() => setOpen(false)}
                >
                  <div className="bg-primary/10 p-1.5 rounded-lg">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg">Ubuncare</span>
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-gray-200 p-2 hover:bg-gray-50 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-textBody" />
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 overflow-y-auto py-6">
                <ul className="space-y-2 px-4">
                  {[
                    { href: "#features", label: "Features" },
                    { href: "#why-it-works", label: "Why it Works" },
                    { href: "#how", label: "How it Works" },
                    { href: "#faq", label: "FAQs" },
                    { href: "/contact", label: "Contact" },
                  ].map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between px-4 py-4 rounded-lg text-[16px] text-textBody hover:bg-gray-50 hover:text-primary transition-colors group"
                      >
                        <span className="font-medium">{item.label}</span>
                        <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                      </a>
                    </li>
                  ))}
                </ul>

                {/* CTA under menu */}
                <div className="px-4 mt-8">
                  <a
                    href="#join"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 w-full text-center rounded-full bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-3 text-[16px] font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Get Early Access
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </nav>

              {/* Footer */}
              <div className="border-t border-gray-100 p-6">
                <p className="text-sm text-textBody/70 text-center">
                  Compassionate mental health support
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
