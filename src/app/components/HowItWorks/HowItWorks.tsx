import { Sparkles } from "lucide-react";
import { HowItWorksClient } from "./HowItWorksClient";
import type { Step } from "@/helpers/Types/IStep";

const steps: Step[] = [
    {
        title: "Start with Gentle Reflection",
        description:
            "Begin with simple, evidence-based check-ins that help you understand your current state without pressure. Our approach focuses on self-awareness, not diagnosis.",
        iconName: 'ClipboardList',
        color: "from-teal-500 to-teal-600",
        bgColor: "from-teal-50 to-teal-100/50",
        features: ["PHQ-9 & GAD-7 assessments", "Mood tracking", "Gentle prompts"],
        visualId: 'reflection',
    },
    {
        title: "Have Compassionate Conversations",
        description:
            "Engage in meaningful dialogues with your AI companion that feel genuinely supportive. Get CBT-informed guidance that helps you process thoughts and emotions.",
        iconName: 'MessageCircle',
        color: "from-teal-500 to-cyan-500",
        bgColor: "from-teal-50 to-cyan-100/50",
        features: [
            "CBT-informed responses",
            "Active listening",
            "Personalized support",
        ],
        visualId: 'conversation',
    },
];

export default function HowItWorksSection() {
    return (
        <section
            id="how-it-works"
            data-testid="how-it-works-section"
            className="relative overflow-hidden py-6 md:py-14 bg-white"
        >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(13,148,136,0.03),transparent)]" />
            <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-teal-100/20 rounded-full blur-2xl sm:blur-3xl" />
            <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-100/20 rounded-full blur-2xl sm:blur-3xl" />

            <div className="relative w-full max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="text-center max-w-4xl mx-auto mb-10">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-cyan-50 backdrop-blur-sm rounded-2xl px-5 py-2.5 sm:px-8 sm:py-4 border border-teal-200 shadow-sm mb-6">
                        <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600" />
                        <span
                            data-testid="header-tagline"
                            className="text-base sm:text-lg md:text-xl font-semibold text-teal-700"
                        >
                            How Ubuncare works
                        </span>
                    </div>

                    <h2
                        data-testid="header-title"
                        className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight"
                    >
                        Your Journey to{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                            Feeling Better
                        </span>
                    </h2>

                    <p
                        data-testid="header-description"
                        className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
                    >
                        Four gentle steps that guide you toward balance — powered by cognitive science,
                        compassionate AI, and your own reflections.
                    </p>
                </div>

                <HowItWorksClient steps={steps} />
            </div>
        </section>
    );
}