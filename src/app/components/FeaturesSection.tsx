import {
  Heart,
  Shield,
  TrendingUp,
  ClipboardList,
  Users,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Reflective Check-ins",
    desc: "Gentle, guided prompts help you slow down and explore your current wellbeing in a private, non-clinical space.",
    stats: "Private reflections only",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: MessageCircle,
    title: "AI-Guided Conversations",
    desc: "Engage in supportive, CBT-informed chats with your AI wellbeing companion — designed to bring calm, not diagnosis.",
    stats: "Supportive dialogue",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Personalized Approach",
    desc: "Select conversation styles that suit you best — empathetic, practical, or motivational. Every session adapts to your tone.",
    stats: "Tailored to you",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: ClipboardList,
    title: "Wellbeing Activities",
    desc: "Access evidence-informed micro-exercises for mindfulness, stress relief, and emotional awareness.",
    stats: "Practical resources",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: TrendingUp,
    title: "Progress Awareness",
    desc: "View secure, encrypted summaries of your reflections. You decide what's tracked, shared, or deleted.",
    stats: "You own your insights",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Shield,
    title: "Privacy First",
    desc: "We follow GDPR and the UK Data Protection Act 2018. No data is ever sold or shared for marketing.",
    stats: "Transparent protection",
    color: "from-blue-600 to-cyan-500",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      data-testid="features-section" 
      className="relative py-6 md:py-14 bg-gradient-to-br from-white via-teal-50/40 to-cyan-50/40 overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(13,148,136,0.05),transparent)]" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-teal-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl" />

      <div className="relative w-full max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-cyan-50 backdrop-blur-sm rounded-2xl px-5 py-2.5 sm:px-8 sm:py-4 border border-teal-200 shadow-sm mb-6">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600" />
            <span
              data-testid="features-tagline" 
              className="text-base sm:text-lg md:text-xl font-semibold text-teal-700"
            >
              Supportive tools for everyday wellbeing
            </span>
          </div>

          <h2
            data-testid="features-title" 
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight"
          >
            Everything You Need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Feel Better
            </span>
          </h2>

          <p
            data-testid="features-description" 
            className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            A complete toolkit for mental wellbeing — combining AI-guided reflection, 
            evidence-based activities, and uncompromising privacy.
          </p>
        </div>

        {/* Features Grid */}
        <div
          data-testid="features-grid-container"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                data-testid={`feature-card-${index + 1}`} 
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/60 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${feature.color} transition-opacity duration-500`}
                />
                <div className="relative p-8 h-full flex flex-col">
                  <div className="mb-6">
                    <div
                      className={`inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br ${feature.color} shadow-md`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow mb-6">
                    {feature.desc}
                  </p>
                  <span className="text-sm font-semibold text-gray-700 bg-gray-100/80 px-3 py-2 rounded-full self-start">
                    {feature.stats}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance Footer */}
        <p className="text-sm text-gray-500 text-center max-w-3xl mx-auto leading-relaxed">
          Ubuncare offers AI wellbeing reflection, not clinical or therapeutic advice.{" "}
          If you&apos;re in crisis,{" "}
          <a
            href="#crisis-support"
            className="text-teal-600 font-medium hover:underline"
          >
            get help here
          </a>
          .
        </p>
      </div>
    </section>
  );
}