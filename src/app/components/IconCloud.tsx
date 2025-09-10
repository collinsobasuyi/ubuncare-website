"use client";

import Container from "./Container";
import { ShieldCheck, Brain, Heart, Sparkles, Lock, Zap, Users, Clock, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

type Item = { 
  label: string; 
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  delay: number;
};

const items: Item[] = [
  { label: "Evidence-based", Icon: Brain, color: "text-blue-600", delay: 0 },
  { label: "Empathetic", Icon: Heart, color: "text-pink-600", delay: 100 },
  { label: "AI-assisted", Icon: Sparkles, color: "text-amber-600", delay: 200 },
  { label: "Private", Icon: Lock, color: "text-purple-600", delay: 300 },
  { label: "Secure", Icon: ShieldCheck, color: "text-green-600", delay: 400 },
  { label: "Quick", Icon: Clock, color: "text-cyan-600", delay: 500 },
  { label: "Supportive", Icon: MessageCircle, color: "text-indigo-600", delay: 600 },
  { label: "Community", Icon: Users, color: "text-orange-600", delay: 700 },
];

export default function IconCloud() {
  const [animatedItems, setAnimatedItems] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (animatedItems < items.length) {
        setAnimatedItems(prev => prev + 1);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [animatedItems]);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-blue-50/30">
      <Container>
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5">
            <Zap className="h-4 w-4" />
            Why professionals trust Ubuncare
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-textMain mb-4">
            Built with care, backed by science
          </h2>
          <p className="text-lg text-textBody leading-relaxed">
            Combining evidence-based methods with modern technology to provide meaningful mental health support
          </p>
        </div>

        {/* Animated icon grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8 items-start justify-items-center">
          {items.map(({ label, Icon, color, delay }, index) => (
            <div 
              key={label} 
              className={`flex flex-col items-center gap-4 transition-all duration-700 ease-out ${
                index < animatedItems 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${delay}ms` }}
            >
              <div 
                className="relative group"
                aria-hidden="true"
              >
                {/* Background glow effect */}
                <div className={`absolute inset-0 rounded-full ${color.replace('text', 'bg')} opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300`} />
                
                {/* Icon container */}
                <div className="relative h-14 w-14 md:h-16 md:w-16 rounded-full bg-white border grid place-content-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                  <Icon className={`h-6 w-6 md:h-7 md:w-7 ${color} transition-colors duration-300`} />
                </div>
                
                {/* Hover effect ring */}
                <div className={`absolute inset-0 rounded-full ring-2 ${color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
              </div>
              
              <span className="text-sm md:text-[15px] text-textBody text-center font-medium leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}