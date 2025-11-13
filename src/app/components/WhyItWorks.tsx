import {
  Brain,
  Heart,
  MessageCircle,
  Sparkles,
  Shield,
  Users,
} from "lucide-react";
import type { PrincipleItem, TrustItem } from "@/helpers/Types/IWhyItWorks";

export default function WhyItWorks() {
  const principles: PrincipleItem[] = [
    {
      icon: Brain,
      title: "Science That Feels Human",
      description:
        "Evidence-based techniques, simplified into natural, supportive conversations — not clinical scripts.",
      color: "from-teal-500 to-cyan-600",
      points: [
        "Built on CBT and mindfulness principles",
        "Encourages reflection, not diagnosis",
        "Helps you understand patterns over time",
      ],
    },
    {
      icon: Heart,
      title: "Compassion Comes First",
      description:
        "Healing begins with feeling heard. Ubuncare listens with empathy, helping you respond with kindness toward yourself.",
      color: "from-emerald-500 to-teal-600",
      points: [
        "Judgment-free conversations",
        "Emotional validation",
        "Focus on self-kindness and acceptance",
      ],
    },
    {
      icon: MessageCircle,
      title: "Conversations That Empower",
      description:
        "Gentle, guided dialogue that helps you find clarity — turning reflection into real progress.",
      color: "from-cyan-500 to-teal-600",
      points: [
        "AI-powered reflective prompts",
        "Personalized guidance",
        "Supports long-term emotional growth",
      ],
    },
  ];

  const trustItems: TrustItem[] = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your reflections stay private — no tracking, no sharing.",
    },
    {
      icon: Brain,
      title: "Evidence-Based",
      description: "Grounded in CBT, mindfulness, and behavioral science.",
    },
    {
      icon: Heart,
      title: "Compassion-Focused",
      description: "Encourages self-kindness before change.",
    },
    {
      icon: Users,
      title: "Human-Centered",
      description: "Co-designed with mental health professionals and users.",
    },
  ];

  return (
    <section
      id="why-it-works"
      data-testid="why-it-works-section"
      className="relative py-6 md:py-14 bg-gradient-to-b from-white via-teal-50/20 to-cyan-50/20 overflow-hidden"
    >
      {/* Background Auras */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(45,164,154,0.06),transparent)]" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* ---------------- Header ---------------- */}
        <div
          className="text-center max-w-4xl mx-auto mb-14"
        >
          <div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-cyan-50 backdrop-blur-sm rounded-2xl px-5 py-2.5 border border-teal-200 shadow-sm mb-6"
          >
            <Sparkles className="h-4 w-4 text-teal-600" />
            <span
              data-testid="why-it-works-tagline"
              className="text-base font-semibold text-teal-700"
            >
              The psychology behind feeling better
            </span>
          </div>

          <h2
            data-testid="why-it-works-title"
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight"
          >
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Ubuncare Works
            </span>
          </h2>

          <p
            data-testid="why-it-works-description"
            className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
          >
            Ubuncare combines psychology and compassion to help you slow down,
            reflect, and rebuild your sense of calm — one conversation at a time.
          </p>
        </div>

        {/* ---------------- Core Principles ---------------- */}
        <div
          data-testid="core-principles-container"
          className="mb-16 lg:mb-20"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {principles.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  data-testid="core-principle-card"
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-500"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-md`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-5 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.points.map((point, fi) => (
                      <li
                        key={fi}
                        data-testid={`core-principle-point-${i}-${fi}`}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------------- Trust Section ---------------- */}
        <div
          data-testid="trust-section-container"
          className="bg-gradient-to-b from-white to-teal-50/40 rounded-3xl p-8 lg:p-12 border border-teal-100 shadow-md text-center max-w-6xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Backed by Science, Built for Real Life
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                Ubuncare is grounded in evidence-based therapeutic methods,
                designed by practitioners and supported by compassionate AI.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-3xl mx-auto">
            {trustItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  data-testid="trust-item"
                  className="flex items-start gap-3"
                >
                  <div className="p-2 bg-teal-100 rounded-lg flex-shrink-0">
                    <Icon className="h-4 w-4 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}