"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart, ChevronRight } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  // scroll detection
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuItems = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#features", label: "What You'll Get" },
    { href: "#the-science", label: "The Science" },
    { href: "#how-we-help", label: "How We Help" },
    { href: "#crisis-support", label: "Crisis Support" },
    { href: "/contact", label: "Get in Touch" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const getHeaderBg = () => {
    if (pathname === "/contact")
      return "bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg";

    return scrolled
      ? "bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-b border-gray-200/40"
      : "bg-gradient-to-b from-[#E6FFFA]/90 to-white/80 backdrop-blur-lg shadow-[0_2px_10px_rgba(13,148,136,0.05)]";
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${getHeaderBg()}`}
      >
        <div className="max-w-[100rem] mx-auto px-8 sm:px-10 lg:px-16 xl:px-20">
          <div className="flex justify-between items-center h-20">
            {/* LOGO */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 group"
            >
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-2 rounded-xl group-hover:scale-105 transition-all duration-300 shadow-md">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 tracking-tight">
                  Ubuncare
                </span>

              </div>
            </Link>

            {/* NAV */}
            <nav className="hidden lg:flex items-center gap-8 ml-16">
              {menuItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-1 py-2 text-[18px] font-medium tracking-tight transition-all duration-500 group ${
                      active
                        ? "text-teal-600"
                        : "text-gray-800 hover:text-teal-600"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-500 to-teal-600 rounded-full transition-transform duration-500 origin-center ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                href="#waitlist"
                className="relative bg-gradient-to-r from-teal-600 to-teal-700 text-white px-7 py-3.5 rounded-2xl text-[18px] font-semibold shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 active:scale-95 group overflow-hidden"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative">Join Waitlist</span>
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
                className="p-3 rounded-2xl border border-gray-200 bg-white/80 hover:bg-teal-50 hover:border-teal-200 transition-all duration-300 active:scale-95 shadow-sm"
              >
                <Menu className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU PORTAL */}
      {mounted &&
        createPortal(
          <div
            className={`lg:hidden fixed inset-0 z-[999] transition-all duration-600 ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              onClick={() => setIsOpen(false)}
              className={`absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-600 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            />
            <div
              className={`absolute right-0 top-0 h-full w-[90vw] max-w-[380px] bg-white shadow-2xl transform transition-all duration-600 ${
                isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
              }`}
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-teal-50/50 to-white">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3"
                >
                  <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-2 rounded-xl shadow-md">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-gray-900">
                      Ubuncare
                    </span>
   
                  </div>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl border border-gray-200 bg-white hover:bg-teal-50 hover:border-teal-200 transition-all duration-300 active:scale-95 shadow-sm"
                >
                  <X className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              <nav className="p-4">
                <div className="space-y-2">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-4 py-4 rounded-2xl text-[18px] font-medium text-gray-800 hover:text-teal-600 hover:bg-teal-100/70 transition-all duration-300"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
