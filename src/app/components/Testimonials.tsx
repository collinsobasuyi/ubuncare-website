"use client";

import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { Star, Quote, Heart } from "lucide-react";

const testimonials = [
  { 
    name: "Alex M.", 
    text: "It's the first app that actually calms me down instead of pinging me constantly. The breathing exercises are incredibly effective.",
    role: "Software Engineer",
    rating: 5
  },
  { 
    name: "Jamie L.", 
    text: "The reframes feel human—not robotic. Small steps that I can actually do even on my toughest days. It's become my daily companion.",
    role: "Graduate Student",
    rating: 5
  },
  { 
    name: "Taylor R.", 
    text: "As someone who's tried countless mental health apps, Ubuncare stands out. The AI actually understands context and responds with genuine empathy.",
    role: "Teacher",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-blue-50/30 to-white">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Hear from our community"
          subtitle="Real people experiencing real support with Ubuncare"
        />
        
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -right-3 h-8 w-8 bg-primary/10 rounded-full grid place-content-center">
                <Quote className="h-4 w-4 text-primary" />
              </div>
              
              {/* Rating stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              {/* Testimonial text */}
              <blockquote className="text-textMain text-base md:text-lg leading-relaxed mb-4">
  &quot;{testimonial.text}&quot;
</blockquote>
              
              {/* Author info */}
              <figcaption className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-blue-600 grid place-content-center text-white font-semibold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-textMain">{testimonial.name}</div>
                  <div className="text-sm text-textBody">{testimonial.role}</div>
                </div>
              </figcaption>
              
              {/* Hover effect indicator */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
        
        {/* Trust badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-3 shadow-sm border border-gray-100">
            <Heart className="h-4 w-4 text-pink-500" />
            <span className="text-sm text-textBody">
              Join <span className="font-semibold text-textMain">217+ people</span> who've found support with Ubuncare
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}