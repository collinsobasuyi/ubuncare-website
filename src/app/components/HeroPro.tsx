"use client";

import Container from "./Container";
import { Brain, ArrowRight, ShieldCheck, Sparkles, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Message = { speaker: "ai" | "user"; text: string; delay: number };

export default function HeroPro() {
  // CBT-style sample conversation (loops automatically)
  const conversation: Message[] = [
    { speaker: "ai",   text: "Hi there! How are you feeling today?", delay: 800 },
    { speaker: "user", text: "A bit overwhelmed with work deadlines…", delay: 2200 },
    { speaker: "ai",   text: "Thanks for sharing. Let&apos;s name the thought that&apos;s looping.", delay: 2600 },
    { speaker: "user", text: "I&apos;m worried I&apos;ll mess up the presentation.", delay: 2400 },
    { speaker: "ai",   text: "That sounds like catastrophising. What&apos;s one piece of evidence against it?", delay: 3200 },
    { speaker: "user", text: "I presented last month and it went fine.", delay: 2200 },
    { speaker: "ai",   text: "Great. Let&apos;s reframe it:", delay: 1800 },
    { speaker: "ai",   text: "I&apos;m prepared, and I can handle questions.", delay: 2200 },
    { speaker: "ai",   text: "Pick one tiny action: review slides 5 min, ask a teammate, or take a 3-minute breath.", delay: 3600 },
  ];

  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Autoplay the script with a brief pause between messages
  useEffect(() => {
    const stepDelay = conversation[index]?.delay ?? 2000;
    const timer = setTimeout(() => {
      setIsTyping(false);
      if (index < conversation.length - 1) {
        const next = setTimeout(() => {
          setIndex((i) => i + 1);
          setIsTyping(true);
        }, 1000);
        return () => clearTimeout(next);
      } else {
        const restart = setTimeout(() => {
          setIndex(0);
          setIsTyping(true);
        }, 4000);
        return () => clearTimeout(restart);
      }
    }, stepDelay);
    return () => clearTimeout(timer);
  }, [index, conversation]);

  // Auto-scroll to latest bubble
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [index, isTyping, conversation]);

  const renderMessage = (m: Message, i: number) => {
    const isAI = m.speaker === "ai";
    return (
      <div key={i} className={`flex items-start gap-2 ${isAI ? "" : "justify-end"} message-slide-in`}>
        {isAI && (
          <div className="bg-blue-600 p-2 rounded-full flex-shrink-0">
            <Brain className="h-4 w-4 text-white" />
          </div>
        )}
        <div
          className={`rounded-2xl ${
            isAI ? "rounded-tl-none bg-gray-700/95" : "rounded-tr-none bg-gray-600/95"
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
      className="relative overflow-hidden pt-16 md:pt-24 pb-12 md:pb-20"
    >
      {/* Subtle background accents (trimmed on mobile) */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="hidden md:block pointer-events-none absolute top-1/2 right-0 h-80 w-80 rounded-full bg-purple-100/50 blur-3xl" />
      <div className="hidden md:block pointer-events-none absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-blue-100/50 blur-3xl" />

      <Container className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: copy (mobile-first order) */}
        <div className="text-center md:text-left">
          {/* Improved badge with icons and better visual hierarchy */}
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200 px-4 py-2.5 text-[15px] font-medium text-textBody shadow-sm mb-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Sparkles className="h-4 w-4 text-blue-600" />
                <span className="font-semibold text-blue-700">AI-assisted</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4 text-purple-600" />
                <span className="font-semibold text-purple-700">CBT-informed</span>
              </div>
            </div>
          </div>

          <h1
            id="hero-heading"
            className="text-[32px] md:text-[40px] lg:text-[56px] font-bold text-textMain leading-tight mb-5"
          >
            Mental health support{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              that fits your life
            </span>
          </h1>

          <p className="text-[16px] md:text-[18px] text-textBody leading-relaxed mb-8">
            Ubuncare is a mental-health app that blends evidence-based CBT techniques with an empathetic AI
            companion. Check in, reframe unhelpful thoughts, and take one small step—usually in about 3 minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-6">
            <a
              href="#join"
              aria-label="Join waitlist"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-4 text-[16px] md:text-[18px] font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-primary/30"
            >
              Join Waitlist
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 text-[14px] md:text-[16px] text-textMain hover:text-primary transition-colors duration-200"
            >
              <span className="underline underline-offset-4">See how it works</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Simplified trust indicator */}
          <div className="flex items-center gap-2 text-[14px] text-textBody">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span>Your conversations are always private and secure</span>
          </div>
        </div>

        {/* Right: device + chat */}
        <div>
          <div className="relative rounded-3xl shadow-xl p-5 bg-gradient-to-br from-gray-900 to-black">
            <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-gray-800">
              {/* Screen content */}
              <div className="absolute inset-0 flex flex-col p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-medium text-[14px]">Ubuncare</span>
                  <span className="text-[14px] text-gray-400">10:24 AM</span>
                </div>

                <div ref={scrollRef} className="device-scroll flex-1 overflow-y-auto space-y-4 pr-1">
                  {conversation.slice(0, index + 1).map(renderMessage)}
                  {isTyping && (
                    <div className="flex items-start gap-2 message-slide-in">
                      <div className="bg-blue-600 p-2 rounded-full">
                        <Brain className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-gray-700/95 rounded-2xl rounded-tl-none px-3 py-2">
                        <div className="flex space-x-1">
                          <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" />
                          <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                          <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* subtle bottom fade to hint scroll */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-800 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}