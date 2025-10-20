"use client";

import { useRef, useEffect, useState } from "react";
import {
  Heart,
  MessageCircle,
  CloudSun,
  Brain,
  Smile,
  Sparkles,
} from "lucide-react";

export default function AICoachSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const conversation = [
    {
      role: "user",
      text: "I've been feeling really overwhelmed with work lately...",
      time: "Just now",
    },
    {
      role: "assistant",
      text: "That sounds challenging. Many people feel that way when things pile up. What's one small thing that might help right now?",
      time: "Responding",
    },
    {
      role: "user",
      text: "Maybe just taking a proper break instead of pushing through?",
      time: "A moment ago",
    },
    {
      role: "assistant",
      text: "That sounds like a kind choice for yourself. Even a few minutes of quiet can make a difference.",
      time: "Supporting you",
    },
  ];

  const companions = [
    {
      name: "Calm Companion",
      icon: CloudSun,
      description: "Helps you pause and find moments of peace",
      gradient: "from-purple-500 to-purple-600",
      delay: 0,
    },
    {
      name: "Mindful Guide",
      icon: Brain,
      description: "Supports thoughtful reflection and awareness",
      gradient: "from-blue-500 to-blue-600",
      delay: 100,
    },
    {
      name: "Support Assistant",
      icon: Heart,
      description: "Offers gentle encouragement and kindness",
      gradient: "from-pink-500 to-pink-600",
      delay: 200,
    },
    {
      name: "Care Helper",
      icon: Smile,
      description: "Reminds you to rest and recharge",
      gradient: "from-green-500 to-green-600",
      delay: 300,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="ai-coach"
      className="relative py-16 md:py-24 bg-gradient-to-br from-[#F8F5FF] via-[#F3EEFF] to-[#E9F4FF] overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.08),transparent)]" />
      <div className="absolute top-16 right-20 w-72 h-72 bg-purple-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-16 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl" />

      <div className="relative max-w-[100rem] mx-auto px-8 sm:px-10 lg:px-16 xl:px-20">
        {/* Header */}
        <div
          className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            A Safe Space for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Your Thoughts
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Explore what’s on your mind through gentle, AI-guided reflection —{" "}
            <span className="text-purple-600 font-semibold">
              private, secure, and judgment-free.
            </span>
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start mb-24">
          {/* Left — Conversation Demo */}
          <div className="space-y-6">
            <h3
              className={`text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <MessageCircle className="h-6 w-6 text-purple-600" />
              How Reflection Feels
            </h3>

            <div className="space-y-4">
              {conversation.map((msg, index) => (
                <div
                  key={index}
                  className={`p-5 rounded-2xl transition-all duration-700 ${
                    msg.role === "assistant"
                      ? "bg-white border border-purple-100 shadow-sm"
                      : "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-md"
                  } ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${300 + index * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center ${
                        msg.role === "assistant"
                          ? "bg-purple-100 border border-purple-200"
                          : "bg-white/20 border border-white/30"
                      }`}
                    >
                      {msg.role === "assistant" ? (
                        <Heart className="h-6 w-6 text-purple-600" />
                      ) : (
                        <div className="w-4 h-4 bg-white rounded-full" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-lg leading-relaxed">{msg.text}</p>
                      <div
                        className={`flex items-center gap-2 mt-3 text-sm ${
                          msg.role === "assistant"
                            ? "text-purple-600"
                            : "text-purple-200"
                        }`}
                      >
                        <span className="font-semibold">
                          {msg.role === "assistant" ? "Ubuncare" : "You"}
                        </span>
                        <span>•</span>
                        <span className="opacity-80">{msg.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Companions */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-purple-600" />
              Meet Your Companions
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {companions.map((companion) => (
                <div
                  key={companion.name}
                  className={`group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-gray-200 hover:border-purple-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: `${600 + companion.delay}ms` }}
                >
                  <div className="text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${companion.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <companion.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      {companion.name}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {companion.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
