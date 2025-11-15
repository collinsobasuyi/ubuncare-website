import {
  HeartHandshake,
  X,
  Linkedin,
  Instagram,
  Youtube,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import React from 'react';

import type { CrisisService, NavSection, ComplianceItem, SocialIconData } from "@/helpers/Types/IFooter";

const Footer: React.FC = () => {
  const crisisServices: CrisisService[] = [
    {
      title: "Emergency",
      color: "text-red-700",
      content: "Call 999 if you or someone else is in immediate danger.",
      emoji: "🚨",
    },
    {
      title: "Samaritans",
      color: "text-blue-700",
      content: "Call 116 123 — free, confidential 24/7 listening support.",
      emoji: "📞",
    },
    {
      title: "Shout Text Line",
      color: "text-green-700",
      content: "Text SHOUT to 85258 for 24/7 text-based mental health support.",
      emoji: "💬",
    },
    {
      title: "NHS 111",
      color: "text-purple-700",
      content: "Call 111 for non-emergency medical advice in the UK.",
      emoji: "🏥",
    },
  ];

  const navSections: NavSection[] = [
    {
      title: "Product",
      links: ["Features", "How It Works", "Pricing", "Download"],
    },
    {
      title: "Company",
      links: ["About", "Our Team", "Contact", "Careers"],
    },
    {
      title: "Resources",
      links: ["Help Center", "Community", "Guides", "Webinars"],
    },
    {
      title: "Legal",
      links: [
        "Privacy Policy",
        "Terms of Service",
        "Cookie Policy",
        "Compliance",
      ],
    },
  ];

  const bottomComplianceItems: ComplianceItem[] = [
    { text: "HIPAA Compliant", icon: "🛡️", id: "hipaa" },
    { text: "SSL Secured", icon: "🔒", id: "ssl" },
    { text: "ISO 27001 Ready", icon: "🏅", id: "iso" },
    { text: "CE Certified", icon: "⭐", id: "ce" },
  ];

  const socialIcons: SocialIconData[] = [
    { icon: X, label: "X (Twitter)", id: "x-twitter" },
    { icon: Linkedin, label: "LinkedIn", id: "linkedin" },
    { icon: Instagram, label: "Instagram", id: "instagram" },
    { icon: Youtube, label: "YouTube", id: "youtube" },
  ];

  return (
    <footer
      id="footer-section"
      role="contentinfo"
      aria-label="Ubuncare Footer"
      className="w-full bg-[#0E0F12] text-gray-200"
    >
      <section
        data-testid="crisis-section"
        aria-label="Crisis Support Information"
        className="bg-[#FFE9E9] text-gray-900 px-6 py-12 text-center"
      >
        <div className="max-w-[100rem] mx-auto">
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-xl">⚠️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900" data-testid="crisis-header">
                Need Crisis Support?
              </h2>
            </div>
            <p className="max-w-2xl mx-auto text-gray-700 text-[15px] sm:text-base leading-relaxed px-2">
              If you are in emotional distress or thinking about self-harm,
              please reach out for free, confidential help. You are not alone —
              support is available 24/7 across the UK.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {crisisServices.map((service, index) => (
              <div
                key={service.title}
                data-testid={`crisis-card-${index}`}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-lg">{service.emoji}</span>
                  <h3
                    className={`text-base font-semibold ${service.color}`}
                    data-testid={`crisis-card-title-${index}`}
                  >
                    {service.title}
                  </h3>
                </div>
                <p
                  className="text-gray-700 text-sm leading-snug"
                  data-testid={`crisis-card-content-${index}`}
                >
                  {service.content}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 border-t border-gray-200 pt-6">
            <p className="text-gray-700 text-sm mb-5" data-testid="non-urgent-advice-text">
              For non-urgent advice, contact{" "}
              <strong>Mind Infoline</strong> at{" "}
              <span className="font-semibold text-gray-900">
                0300 123 3393
              </span>{" "}
              (Mon–Fri, 9am–6pm).
            </p>
            <div className="flex flex-wrap justify-center gap-5 text-sm font-medium">
              <a
                href="#"
                data-testid="non-urgent-link-local"
                className="text-[#005EB8] hover:text-[#003D73] transition-colors"
              >
                Find Local Services →
              </a>
              <a
                href="#"
                data-testid="non-urgent-link-directory"
                className="text-[#005EB8] hover:text-[#003D73] transition-colors"
              >
                Crisis Resources Directory →
              </a>
              <a
                href="#"
                data-testid="non-urgent-link-international"
                className="text-[#005EB8] hover:text-[#003D73] transition-colors"
              >
                International Support Lines →
              </a>
            </div>
          </div>
          <p className="mt-6 text-xs text-gray-600 max-w-xl mx-auto" data-testid="crisis-disclaimer">
            Ubuncare is not a crisis or medical service. If you are in danger or
            need immediate support, please use the emergency numbers above.
          </p>
        </div>
      </section>

      <div className="px-6 lg:px-20 py-12 bg-[#0E0F12]" data-testid="main-footer-nav-section">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-10 gap-x-8 text-left">
            <div className="col-span-2 sm:col-span-3 md:col-span-2" data-testid="company-info-column">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-xl">
                  <HeartHandshake className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent" data-testid="company-logo-text">
                  Ubuncare
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-5 text-sm max-w-md" data-testid="company-tagline">
                Compassionate AI for mental health that meets you where you are.
                Safe, evidence-based emotional support — available 24/7.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                <div
                  className="flex items-center gap-1.5 bg-green-900/30 px-2 py-1 rounded-full text-xs text-green-300"
                  data-testid="trust-badge-clinically-reviewed"
                >
                  <Stethoscope className="w-3 h-3" />
                  <span>Clinically Reviewed</span>
                </div>
                <div
                  className="flex items-center gap-1.5 bg-blue-900/30 px-2 py-1 rounded-full text-xs text-blue-300"
                  data-testid="trust-badge-nhs-partner"
                >
                  <ShieldCheck className="w-3 h-3" />
                  <span>NHS Partner</span>
                </div>
              </div>
              <div className="flex space-x-3" data-testid="social-icons-container">
                {socialIcons.map(({ icon: Icon, label, id }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    data-testid={`social-icon-${id}`}
                    className="w-9 h-9 bg-gray-800 rounded-md flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-200 hover:scale-110"
                  >
                    <Icon className="text-gray-400 hover:text-white w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            {navSections.map((section) => (
              <div
                key={section.title}
                className="w-full max-w-[160px]"
                data-testid={`nav-column-${section.title.toLowerCase()}`}
              >
                <h4
                  className="font-bold text-white mb-3 text-[15px]"
                  data-testid={`nav-column-title-${section.title.toLowerCase()}`}
                >
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
                        data-testid={`nav-link-${link.toLowerCase().replace(/\s/g, '-')}`}
                        className="text-gray-400 hover:text-white text-sm transition-transform duration-200 hover:translate-x-[2px] block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <hr className="border-gray-800 my-10" />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <div className="text-center sm:text-left">
              <p data-testid="copyright-text">© 2025 Ubuncare. All rights reserved.</p>
              <p className="text-gray-500 text-xs" data-testid="secondary-copyright-text">
                Built with clinical expertise and compassion.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3" data-testid="compliance-badges-container">
              {bottomComplianceItems.map((item) => (
                <div
                  key={item.text}
                  data-testid={`compliance-badge-${item.id}`}
                  className="flex items-center gap-1.5 bg-gray-800 px-3 py-1 rounded-full text-xs hover:bg-gray-700 transition-colors"
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1 text-gray-400" data-testid="made-with-love">
              <span>Made with</span>
              <span className="text-red-500 animate-pulse">♥</span>
              <span>for better mental health</span>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-xs max-w-3xl mx-auto leading-relaxed" data-testid="clinical-disclaimer">
              Ubuncare is developed in collaboration with mental health
              professionals and follows NHS Digital Technology Assessment
              Criteria (DTAC) standards. It is not a substitute for clinical
              care. Always seek advice from qualified professionals.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;