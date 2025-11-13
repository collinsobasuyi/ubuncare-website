import {
  Cloud,
  Brain,
  Moon,
  Coffee,
  Users,
  Anchor,
  Sparkles,
  Smile,
} from "lucide-react";
import type { HelpItem } from "@/helpers/Types/IHelpItem";

const helps: HelpItem[] = [
  {
    icon: Cloud,
    title: "Managing Stress & Overwhelm",
    desc: "Ground yourself with AI-guided calm techniques and gentle reflections that help you slow down, breathe, and release tension.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Brain,
    title: "Understanding Your Thoughts",
    desc: "Gain clarity and perspective by exploring recurring thought patterns and emotional triggers in a safe, judgment-free space.",
    color: "from-cyan-500 to-teal-600",
  },
  {
    icon: Moon,
    title: "Improving Sleep & Rest",
    desc: "Use soothing evening reflections to quiet your mind, process your day, and prepare your body for deeper rest.",
    color: "from-teal-600 to-cyan-600",
  },
  {
    icon: Coffee,
    title: "Building Daily Resilience",
    desc: "Start your mornings with uplifting, affirming check-ins that help you set intentions and navigate challenges with calm.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Users,
    title: "Nurturing Connection",
    desc: "Reconnect with empathy, self-compassion, and healthy boundaries through mindful dialogue and emotional awareness.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Anchor,
    title: "Finding Balance in Burnout",
    desc: "Rediscover calm and focus through reflection tools that help you manage exhaustion and prevent emotional overload.",
    color: "from-cyan-600 to-teal-700",
  },
];

export default function HowWeHelp() {
  return (
    <section
      id="how-we-help"
      data-testid="how-we-help-section"
      className="relative py-6 md:py-14 bg-gradient-to-b from-white via-teal-50/30 to-cyan-50/30 overflow-hidden"
    >
      {/* Subtle background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(13,148,136,0.06),transparent)]" />
      <div className="absolute top-6 left-1/4 w-72 h-72 bg-teal-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-6 right-1/4 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl" />

      <div className="relative w-full max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
          {/* Replaced motion.div with standard div */}
          <div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-cyan-50 backdrop-blur-sm rounded-2xl px-5 py-2.5 sm:px-8 sm:py-4 border border-teal-200 shadow-sm mb-6"
          >
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600" />
            <span
              data-testid="how-we-help-tagline"
              className="text-base sm:text-lg md:text-xl font-semibold text-teal-700"
            >
              Supportive tools for everyday wellbeing
            </span>
          </div>

          {/* Replaced motion.h2 with standard h2 */}
          <h2
            data-testid="how-we-help-title"
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
          >
            How{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Ubuncare
            </span>{" "}
            helps you every day
          </h2>

          {/* Replaced motion.p with standard p */}
          <p
            data-testid="how-we-help-description"
            className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            Whether you’re dealing with stress, loneliness, burnout, or simply
            trying to stay mindful — Ubuncare adapts to your needs with care,
            empathy, and privacy.
          </p>
        </div>

        {/* Help Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 mb-10 md:mb-14 relative z-10">
          {helps.map((item, i) => {
            const Icon = item.icon;
            return (
              // Fixed: Removed misplaced comment { /* Replaced motion.div with standard div */ } inside the div tag.
              <div
                key={i}
                data-testid="help-card"
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-7 shadow-lg border border-white/60 hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br ${item.color} shadow-md mb-4`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Final Message */}
        {/* Replaced motion.div with standard div */}
        <div
          className="text-center max-w-3xl mx-auto"
        >
          <Smile className="h-10 w-10 sm:h-12 sm:w-12 text-teal-600 mx-auto mb-4" />
          <h3
            data-testid="final-message-title"
            className="text-xl sm:text-2xl font-bold text-gray-900 mb-3"
          >
            Small moments, real emotional care
          </h3>
          <p
            data-testid="final-message-description"
            className="text-gray-600 text-base sm:text-lg leading-relaxed"
          >
            Every check-in, conversation, and reflection is a small act of
            kindness toward yourself. Ubuncare is built to help you notice,
            pause, and reconnect — one day at a time.
          </p>
        </div>

      </div>
    </section>
  );
}