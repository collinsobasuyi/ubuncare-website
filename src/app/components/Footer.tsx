"use client";

import Container from "./Container";
import Link from "next/link";
import { Heart, Shield, ExternalLink, Twitter, Linkedin, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [showCrisis, setShowCrisis] = useState(false);

  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container className="py-10 md:py-16">
        {/* Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold text-gray-900">Ubuncare</span>
          </div>
          <p className="text-gray-600 text-sm max-w-sm mx-auto">
            Compassionate AI mental health support that fits into your life. 
            Evidence-based techniques, private by design.
          </p>

          {/* Socials */}
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" aria-label="Twitter" className="p-2 bg-gray-100 rounded-full hover:bg-primary/10">
              <Twitter className="h-5 w-5 text-gray-600 hover:text-primary" />
            </a>
            <a href="#" aria-label="LinkedIn" className="p-2 bg-gray-100 rounded-full hover:bg-primary/10">
              <Linkedin className="h-5 w-5 text-gray-600 hover:text-primary" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8 text-center mb-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
              <li><Link href="#faq" className="hover:text-primary">FAQ</Link></li>
              <li><Link href="/guides" className="hover:text-primary">Guides</Link></li>
              <li><Link href="/research" className="hover:text-primary">Research</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
              <li><Link href="/careers" className="hover:text-primary">Careers</Link></li>
              <li><Link href="/press" className="hover:text-primary">Press</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Crisis resources collapsible */}
        <div className="mb-6">
          <button
            onClick={() => setShowCrisis(!showCrisis)}
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-800 bg-blue-50 rounded-lg border border-blue-200"
          >
            Need Crisis Support?
            <ChevronDown className={`h-4 w-4 transition-transform ${showCrisis ? "rotate-180" : ""}`} />
          </button>
          {showCrisis && (
            <div className="mt-3 px-4 text-xs text-gray-600 leading-relaxed">
              US: call or text 988 · UK: 116 123 (Samaritans) · Worldwide:{" "}
              <a
                href="https://www.iasp.info/resources/Crisis_Centres/"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                Find a crisis center <ExternalLink className="h-3 w-3" />
              </a>. In an emergency, call local emergency services.
            </div>
          )}
        </div>

        {/* Bottom */}
        <div className="text-center border-t border-gray-200 pt-6 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Ubuncare. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-3">
            <Link href="/privacy" className="hover:text-primary">Privacy</Link>
            <Link href="/terms" className="hover:text-primary">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
