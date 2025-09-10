import Container from "./Container";
import Link from "next/link";
import { Heart, Shield, Mail, MessageCircle, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-textMain">Ubuncare</span>
            </div>
            <p className="text-textBody leading-relaxed max-w-md">
              Compassionate AI mental health support that fits into your life. 
              Evidence-based techniques, private by design.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-textBody hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="#" className="text-textBody hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links section */}
          <div>
            <h3 className="font-semibold text-textMain mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-textBody hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="text-textBody hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/guides" className="text-textBody hover:text-primary transition-colors">Guides</Link></li>
              <li><Link href="/research" className="text-textBody hover:text-primary transition-colors">Research</Link></li>
            </ul>
          </div>

          {/* Company section */}
          <div>
            <h3 className="font-semibold text-textMain mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-textBody hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/careers" className="text-textBody hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/press" className="text-textBody hover:text-primary transition-colors">Press</Link></li>
              <li><Link href="/contact" className="text-textBody hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-6 text-sm text-textBody">
              <span>© {new Date().getFullYear()} Ubuncare. All rights reserved.</span>
              <div className="flex gap-4">
                <Link href="/privacy" className="hover:text-primary transition-colors flex items-center gap-1">
                  <Shield className="h-3 w-3" />
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
                <a href="mailto:hello@ubuncare.com" className="hover:text-primary transition-colors flex items-center gap-1">
                  <Mail className="h-3 w-3" />
                  Contact
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-textBody/70">
              <MessageCircle className="h-3 w-3" />
              <span>Made with care for mental health</span>
            </div>
          </div>

          {/* Crisis resources */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-textMain mb-1">Important Crisis Resources</p>
                <p className="text-xs text-textBody leading-relaxed">
                  If you're in crisis or thinking about harming yourself, seek immediate help: 
                  US: call or text 988 · UK: 116 123 (Samaritans) · Worldwide: <a href="https://www.iasp.info/resources/Crisis_Centres/" className="text-primary hover:underline inline-flex items-center gap-1">Find a crisis center <ExternalLink className="h-3 w-3" /></a>. 
                  In an emergency, call local emergency services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}