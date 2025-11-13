import {
  Heart,
  MessageCircle,
  CloudSun,
  Brain,
  Smile,
  Sparkles,
  LucideIcon,
} from "lucide-react";


import type { ConversationMessage, LucideCompanion } from "@/helpers/Types/IAICoachSection";

export default function AICoachSection() {

  const conversation: ConversationMessage[] = [
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

  const companions: LucideCompanion[] = [
    {
      name: "Calm Companion",
      icon: CloudSun as LucideIcon,
      description: "Helps you pause and find moments of peace",
      gradient: "from-teal-500 to-teal-600",
    },
    {
      name: "Mindful Guide",
      icon: Brain as LucideIcon,
      description: "Supports thoughtful reflection and awareness",
      gradient: "from-cyan-500 to-teal-600",
    },
    {
      name: "Support Assistant",
      icon: Heart as LucideIcon,
      description: "Offers gentle encouragement and kindness",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      name: "Care Helper",
      icon: Smile as LucideIcon,
      description: "Reminds you to rest and recharge",
      gradient: "from-teal-400 to-teal-600",
    },
  ];

  return (
    <section
      id="ai-coach"
      data-testid="ai-coach-section"
      className="relative py-6 md:py-14 bg-white overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(13,148,136,0.04),transparent)]" />
      <div className="absolute top-12 right-20 w-72 h-72 bg-teal-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-12 left-16 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl" />

      <div className="relative w-full max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-cyan-50 backdrop-blur-sm rounded-2xl px-5 py-2.5 sm:px-8 sm:py-4 border border-teal-200 shadow-sm mb-6">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600" />
            <span
              data-testid="ai-coach-tagline"
              className="text-base sm:text-lg md:text-xl font-semibold text-teal-700"
            >
              Compassionate AI for everyday reflection
            </span>
          </div>

          <h2
            data-testid="ai-coach-title"
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight"
          >
            A Safe Space for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Your Thoughts
            </span>
          </h2>

          <p
            data-testid="ai-coach-description"
            className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            Explore what&apos;s on your mind through gentle, AI-guided reflection —{" "}
            <span className="text-teal-600 font-semibold">
              private, secure, and judgment-free.
            </span>
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start mb-10">
          {/* Left — Conversation Demo */}
          <div className="space-y-5">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 flex items-center gap-3">
              <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600" />
              How Reflection Feels
            </h3>

            <div
              data-testid="conversation-demo"
              className="space-y-4"
            >
              {conversation.map((msg, index) => (
                <div
                  key={index}
                  data-testid={`conversation-message-${index + 1}`}
                  className={`p-4 sm:p-5 rounded-2xl transition-all ${msg.role === "assistant"
                    ? "bg-white border border-teal-100 shadow-sm"
                    : "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md"
                    }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center ${msg.role === "assistant"
                        ? "bg-teal-100 border border-teal-200"
                        : "bg-white/20 border border-white/30"
                        }`}
                    >
                      {msg.role === "assistant" ? (
                        <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600" />
                      ) : (
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base sm:text-lg leading-relaxed">{msg.text}</p>
                      <div
                        className={`flex items-center gap-2 mt-3 text-sm ${msg.role === "assistant"
                          ? "text-teal-600"
                          : "text-teal-100"
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
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 flex items-center gap-3">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600" />
              Meet Your Companions
            </h3>

            <div
              data-testid="companion-cards-container"
              className="grid sm:grid-cols-2 gap-4 sm:gap-5"
            >
              {companions.map((companion) => (
                <div
                  key={companion.name}
                  data-testid="companion-card"
                  className="p-4 sm:p-6 bg-white rounded-2xl border border-teal-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="text-center">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 rounded-2xl bg-gradient-to-br ${companion.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <companion.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1.5">
                      {companion.name}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {companion.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* I also ensured the main AICoachSection component has a default export, if it didn't already. */}
      </div>
    </section>
  );
}