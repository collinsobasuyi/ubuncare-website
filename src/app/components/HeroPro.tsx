"use client";

import { Heart, Shield, MessageCircleHeart, ArrowRight } from "lucide-react";

export default function HeroPro() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-28 sm:pt-32 md:pt-36 pb-10 bg-[#E6FFFA]"
    >
      {/* Ambient aura */}
      <div className="absolute right-[10%] top-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(13,148,136,0.08),transparent)] blur-3xl" />

      <div className="w-full max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] xl:grid-cols-[65%_35%] items-center gap-8 lg:gap-12">
          {/* LEFT COLUMN */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold leading-tight sm:leading-[1.15] text-gray-900 mb-6 sm:mb-7"
            >
              Take a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-700">
                mindful pause
              </span>{" "}
              when life feels heavy
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-[26px] text-gray-600 max-w-3xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed">
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
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 mb-8 sm:mb-10">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 text-base sm:text-lg lg:text-[20px] font-semibold shadow-lg hover:scale-105 transition-transform w-full sm:w-auto text-center"
              >
                <MessageCircleHeart className="h-5 w-5 sm:h-6 sm:w-6" />
                Start a Gentle Conversation
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl text-teal-700 hover:text-teal-900 text-base sm:text-lg lg:text-[20px] font-semibold w-full sm:w-auto justify-center lg:justify-start mt-2 sm:mt-0"
              >
                Learn How It Works
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>

            {/* TRUST & DISCLAIMER */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-teal-600" />
                  <span>Encrypted & Private</span>
                </div>
                <div className="hidden sm:block text-gray-300">•</div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-teal-600" />
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
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 mt-0 lg:mt-0">
            <div className="relative bg-gray-900 rounded-[2.5rem] p-2 sm:p-3 w-full max-w-[240px] sm:max-w-[260px] lg:max-w-[280px] xl:max-w-[300px] shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-3 sm:h-4 bg-black rounded-b-2xl z-20" />
              <div className="relative aspect-[9/16] w-full rounded-[1.8rem] sm:rounded-[2rem] overflow-hidden bg-gradient-to-br from-teal-50 via-white to-teal-100 flex flex-col p-3 sm:p-4 lg:p-5 shadow-inner">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-md">
                  <Heart className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 text-base sm:text-lg lg:text-xl mb-1 sm:mb-2 text-center">
                  Your Reflection Space
                </h3>
                <p className="text-gray-600 text-center mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm">
                  A calm, private space to gather your thoughts.
                </p>
                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                  <div className="flex items-start gap-1 sm:gap-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-teal-100 flex items-center justify-center mt-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-600 rounded-full" />
                    </div>
                    <div className="bg-white text-gray-700 px-3 py-2 sm:px-4 sm:py-3 rounded-2xl rounded-tl-none shadow-sm border border-teal-100 text-xs sm:text-sm">
                      How have you been feeling lately?
                    </div>
                  </div>
                  <div className="flex items-start gap-1 sm:gap-2 justify-end">
                    <div className="bg-teal-600 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-2xl rounded-tr-none shadow-sm text-xs sm:text-sm">
                      A little overwhelmed, honestly.
                    </div>
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-teal-600 flex items-center justify-center mt-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="flex items-start gap-1 sm:gap-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-teal-100 flex items-center justify-center mt-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-600 rounded-full" />
                    </div>
                    <div className="bg-white text-gray-700 px-3 py-2 sm:px-4 sm:py-3 rounded-2xl rounded-tl-none shadow-sm border border-teal-100 text-xs sm:text-sm">
                      That&apos;s okay. Would you like to unpack that gently?
                    </div>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-teal-50/80 rounded-xl border border-teal-100 backdrop-blur-sm">
                  <p className="text-xs text-teal-700 text-center leading-relaxed">
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