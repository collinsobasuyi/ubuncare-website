"use client";

import { Heart, Shield, MessageCircleHeart, ArrowRight } from "lucide-react";

export default function HeroPro() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-28 sm:pt-32 md:pt-36 pb-10 bg-purple-50"
    >
      {/* Ambient aura */}
      <div className="absolute right-[10%] top-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.08),transparent)] blur-3xl" />

      <div className="w-full max-w-[95rem] mx-auto px-6 sm:px-8 lg:px-14 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] items-center gap-8">
          {/* LEFT COLUMN */}
          <div className="text-center lg:text-left">
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-5"
            >
              Take a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
                mindful pause
              </span>{" "}
              when life feels heavy
            </h1>

            <p className="text-[17px] md:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Ubuncare offers a gentle space for reflection through{" "}
              <span className="font-medium text-gray-800">
                AI-guided wellbeing conversations
              </span>{" "}
              rooted in proven cognitive behavioural techniques — designed for
              mindfulness and balance,{" "}
              <span className="font-medium text-gray-800">
                not diagnosis or therapy.
              </span>
            </p>

            {/* CALL TO ACTIONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white px-8 py-4 text-base font-semibold shadow-lg"
              >
                <MessageCircleHeart className="h-5 w-5" />
                Start a Gentle Conversation
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl text-purple-700 hover:text-purple-900 text-base font-semibold"
              >
                Learn How It Works
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* TRUST & DISCLAIMER */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-purple-600" />
                  <span>Encrypted & Private</span>
                </div>
                <div className="hidden sm:block text-gray-300">•</div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-purple-600" />
                  <span>Ethically Designed — No Data Sold</span>
                </div>
              </div>

              <p className="text-xs text-gray-500 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Ubuncare is a wellbeing companion. It is not a substitute for
                therapy or crisis intervention. If you are in distress, please
                reach out to a licensed professional or helpline.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN — Device Mockup */}
          <div className="flex justify-center lg:justify-start mt-10 lg:mt-0">
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-[2.5rem] p-3 w-full max-w-[260px] shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-b-2xl z-20" />
              <div className="relative aspect-[9/16] w-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100 flex flex-col p-5 shadow-inner">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-md">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 text-lg mb-2 text-center">
                  Your Reflection Space
                </h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed text-sm">
                  A calm, private space to gather your thoughts.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-purple-600 rounded-full" />
                    </div>
                    <div className="bg-white text-gray-700 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm border border-purple-100">
                      How have you been feeling lately?
                    </div>
                  </div>
                  <div className="flex items-start gap-2 justify-end">
                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-3 rounded-2xl rounded-tr-none shadow-sm">
                      A little overwhelmed, honestly.
                    </div>
                    <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-purple-600 rounded-full" />
                    </div>
                    <div className="bg-white text-gray-700 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm border border-purple-100">
                      That&apos;s okay. Would you like to unpack that gently?
                    </div>
                  </div>
                </div>
                <div className="mt-5 p-3 bg-purple-50/80 rounded-xl border border-purple-100 backdrop-blur-sm">
                  <p className="text-xs text-purple-700 text-center leading-relaxed">
                    No rush — you set the pace, and we&apos;ll move gently together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}