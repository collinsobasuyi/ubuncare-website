import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { Brain, Heart, TrendingUp, Lock, Shield, Calendar, Sparkles } from "lucide-react";

const benefits = [
  { 
    title: "Evidence-based techniques", 
    text: "Rooted in proven CBT methods including thought records, cognitive reframing, and behavioral activation exercises.",
    icon: Brain,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  { 
    title: "Compassionate support", 
    text: "Kind, non-judgmental guidance that meets you where you are, without pressure or expectations.",
    icon: Heart,
    color: "text-pink-600",
    bgColor: "bg-pink-50"
  },
  { 
    title: "Sustainable habits", 
    text: "Tiny daily check-ins and gentle streaks that help build consistency without overwhelming you.",
    icon: TrendingUp,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  { 
    title: "Complete privacy", 
    text: "End-to-end encryption, clear data controls, and private-by-design architecture to keep your information secure.",
    icon: Lock,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  { 
    title: "Safety first", 
    text: "Built-in crisis resources and clear boundaries about what our AI can and cannot provide.",
    icon: Shield,
    color: "text-amber-600",
    bgColor: "bg-amber-50"
  },
  { 
    title: "Flexible rhythm", 
    text: "Adapts to your schedule with reminders that support rather than interrupt your daily flow.",
    icon: Calendar,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50"
  },
];

export default function Benefits() {
  return (
    <section id="features" className="py-16 md:py-20 bg-gradient-to-b from-white to-blue-50/30">
      <Container>
        <SectionHeading
          eyebrow="Why Ubuncare"
          title="Designed differently for real mental health support"
          subtitle="Practical tools that fit into your life, not another source of digital noise."
        />
        
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={benefit.title} 
                className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                {/* Decorative number */}
                <div className="absolute -top-3 -left-3 h-7 w-7 rounded-full bg-primary text-white grid place-content-center font-semibold text-xs shadow-md">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`p-3 rounded-xl ${benefit.bgColor} mb-4 transition-colors duration-300 group-hover:${benefit.bgColor.replace('50', '100')}`}>
                  <IconComponent className={`h-6 w-6 ${benefit.color}`} />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-textMain mb-3">{benefit.title}</h3>
                <p className="text-textBody leading-relaxed">{benefit.text}</p>
                
                {/* Hover effect indicator */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
              </div>
            );
          })}
        </div>
        
        {/* Additional context */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-sm border border-gray-100">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm text-textBody">
              <span className="font-semibold text-textMain">3-minute sessions</span> designed for real life
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}