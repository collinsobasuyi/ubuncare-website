"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import { Brain, ArrowRight, ShieldCheck, Sparkles, Heart } from "lucide-react";

type Message = {
  speaker: "ai" | "user";
  text: string;
  delay: number;
};

// Keep this constant OUTSIDE the component so it doesn't re-create every render
const CONVERSATION: Message[] = [
  { speaker: "ai", text: "Hi there! How are you feeling today?", delay: 800 },
  { speaker: "user", text: "A bit overwhelmed with work deadlines…", delay: 2200 },
  {
    speaker: "ai",
    text: "Thanks for sharing. Let's name the thought that's looping.",
    delay: 2600,
  },
  { speaker: "user", text: "I'm worried I'll mess up the presentation.", delay: 2400 },
  {
    speaker: "ai",
    text: "That sounds like catastrophising. What's one piece of evidence against it?",
    delay: 3200,
  },
  { speaker: "user", text: "I presented last month and it went fine.", delay: 2200 },
  { speaker: "ai", text: "Great. Let's reframe it:", delay: 1800 },
  { speaker: "ai", text: "I'm prepared, and I can handle questions.", delay: 2200 },
];

const HeroPro: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Autoplay conversation with solid cleanup
  useEffect(() => {
    const stepDelay = CONVERSATION[index]?.delay ?? 2000;
    let afterTimeout: number | undefined;

    const mainTimeout = window.setTimeout(() => {
      setIsTyping(false);

      const isLast = index >= CONVERSATION.length - 1;
      const gap = isLast ? 4000 : 1000;

      afterTimeout = window.setTimeout(() => {
        if (!isLast) {
          setIndex((i) => i + 1);
        } else {
          setIndex(0);
        }
        setIsTyping(true);
      }, gap);
    }, stepDelay);

    return () => {
      clearTimeout(mainTimeout);
      if (afterTimeout) clearTimeout(afterTimeout);
    };
  }, [index]);

  // Auto-scroll
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [index, isTyping]);

  const renderMessage = (m: Message, i: number) => {
    const isAI = m.speaker === "ai";
    return (
      <div
        key={i}
        className={`flex items-start gap-2 ${isAI ? "" : "justify-end"} message-slide-in`}
      >
        {isAI && (
          <div className="bg-blue-600 p-2 rounded-full flex-shrink-0">
            <Brain className="h-4 w-4 text-white" />
          </div>
        )}
        <div
          className={`rounded-2xl ${
            isAI ? "rounded-tl-none bg-blue-500/90" : "rounded-tr-none bg-gray-600/90"
          } px-4 py-3 max-w-[80%]`}
        >
          <p className="text-white text-[14px] md:text-[16px]">{m.text}</p>
        </div>
      </div>
    );
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-10 md:pt-14 pb-16 md:pb-20"
    >
      <Container className="grid md:grid-cols-2 items-center gap-y-10 md:gap-x-10 lg:gap-x-14">
        {/* Left copy */}
        <div className="order-1 md:order-1 text-center md:text-left max-w-xl mx-auto md:mx-0 lg:ml-10 xl:ml-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200 px-4 py-2.5 text-[15px] font-medium text-textBody shadow-sm mb-8">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="font-semibold text-blue-700">AI-assisted</span>
            <span className="text-gray-400">•</span>
            <Heart className="h-4 w-4 text-purple-600" />
            <span className="font-semibold text-purple-700">CBT-informed</span>
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="text-[32px] md:text-[40px] lg:text-[54px] font-extrabold text-textMain leading-tight mb-6"
          >
            Mental health support{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              that fits your life
            </span>
          </h1>

          {/* Subhead */}
          <p className="text-[16px] md:text-[18px] text-textBody leading-relaxed mb-10">
            Ubuncare is a mental-health app that blends evidence-based CBT techniques with an
            empathetic AI companion. Check in, reframe unhelpful thoughts, and take one small
            step—usually in about 3 minutes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-6">
            <a
              href="#join"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 text-white px-8 py-4 text-[16px] md:text-[18px] font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Join Waitlist
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 text-[14px] md:text-[16px] text-textMain hover:text-primary transition-colors"
            >
              <span className="underline underline-offset-4">See how it works</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <p className="text-xs text-gray-500 mb-8">Free early access · No spam ever</p>

          {/* Privacy line */}
          <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-[14px] text-textBody shadow-sm">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span>Your conversations are always private and secure</span>
          </div>
        </div>

        {/* Device preview */}
        <div className="order-2 md:order-2 flex justify-center md:justify-end">
          <div className="relative rounded-3xl shadow-xl p-4 bg-gradient-to-br from-gray-900 to-black max-w-[260px] md:max-w-[300px] w-full">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-20" />
            <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-gray-800">
              <div className="absolute inset-0 flex flex-col p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-medium text-[14px]">Ubuncare</span>
                  <span className="text-[14px] text-gray-400">10:24 AM</span>
                </div>
                <div
                  ref={scrollRef}
                  className="device-scroll flex-1 overflow-y-auto space-y-4 pr-1"
                >
                  {CONVERSATION.slice(0, index + 1).map(renderMessage)}
                  {isTyping && (
                    <div className="flex items-start gap-2">
                      <div className="bg-blue-600 p-2 rounded-full">
                        <Brain className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-gray-700/95 rounded-2xl rounded-tl-none px-3 py-2 flex gap-1">
                        <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" />
                        <div
                          className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        />
                        <div
                          className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.4s" }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroPro;
