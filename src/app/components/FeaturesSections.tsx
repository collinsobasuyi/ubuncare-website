import Container from "./Container";
import { Brain, Heart, Shield, Clock, Sparkles, Target, MessageCircle, Zap } from "lucide-react";

export default function FeaturesSections() {
  const features = [
    {
      icon: Brain,
      title: "CBT-Informed Techniques",
      description: "Evidence-based cognitive behavioral therapy exercises designed by mental health professionals to help reframe unhelpful thoughts.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Heart,
      title: "Compassionate AI Support",
      description: "Gentle, non-judgmental guidance that meets you where you are, providing support exactly when you need it most.",
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      icon: Clock,
      title: "3-Minute Sessions",
      description: "Quick, effective check-ins that fit into your busy schedule without overwhelming you. Small steps for big changes.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Shield,
      title: "Complete Privacy",
      description: "End-to-end encryption and strict data policies ensure your thoughts and feelings remain completely confidential.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Target,
      title: "Personalized Approach",
      description: "Adapts to your unique needs and preferences, learning what works best for you over time.",
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    },
    {
      icon: MessageCircle,
      title: "Daily Check-ins",
      description: "Consistent, gentle reminders to build healthy mental health habits without feeling pressured or overwhelmed.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/20">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-primary mb-6">
            <Zap className="h-4 w-4" />
            How Ubuncare Helps
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-4">
            Thoughtful features for your mental health journey
          </h2>
          
          <p className="text-lg text-textBody leading-relaxed">
            Designed with care to provide meaningful support that actually fits into your life
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`p-3 rounded-xl ${feature.bgColor} mb-4 transition-colors duration-300 group-hover:${feature.bgColor.replace('50', '100')}`}>
                  <IconComponent className={`h-6 w-6 ${feature.color}`} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-textMain mb-3">{feature.title}</h3>
                <p className="text-textBody leading-relaxed">{feature.description}</p>
                
                {/* Hover effect indicator */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-purple-600 transition-all duration-300 group-hover:w-full"></div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-textMain mb-4">Ready to feel better?</h3>
            <p className="text-textBody mb-6">
              Join hundreds of others who are taking the first step toward better mental health
            </p>
            <a
              href="#join"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Join Waitlist
              <Sparkles className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}