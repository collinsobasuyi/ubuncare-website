"use client";

import Container from "./Container";
import {
  Brain,
  Heart,
  Sparkles,
  Lock,
  ShieldCheck,
  Clock,
  MessageCircle,
  Users,
} from "lucide-react";

const items = [
  { label: "Evidence-based", Icon: Brain, color: "text-blue-600" },
  { label: "Compassionate", Icon: Heart, color: "text-pink-600" },
  { label: "AI-assisted", Icon: Sparkles, color: "text-amber-600" },
  { label: "Private", Icon: Lock, color: "text-purple-600" },
  { label: "Secure", Icon: ShieldCheck, color: "text-green-600" },
  { label: "Fast", Icon: Clock, color: "text-cyan-600" },
  { label: "Supportive", Icon: MessageCircle, color: "text-indigo-600" },
  { label: "Community-driven", Icon: Users, color: "text-orange-600" },
];

export default function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/20">
      <Container>
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-textMain mb-6">
            Why people{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              trust us
            </span>{" "}
            with their mental health
          </h2>
          <p className="text-lg text-textBody leading-relaxed">
            Ubuncare combines science, compassion, and technology to create an environment
            that feels safe, supportive, and truly effective.
          </p>
        </div>

        {/* Icon grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-10 max-w-5xl mx-auto">
          {items.map(({ label, Icon, color }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-full bg-gray-50 flex items-center justify-center shadow-inner">
                <Icon className={`h-7 w-7 ${color}`} />
              </div>
              <span className="text-base font-medium text-textMain text-center">{label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
