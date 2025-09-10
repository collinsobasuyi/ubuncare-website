import Container from "./Container";
import { Brain, ShieldCheck, Heart, Sparkles, Lock, MessageCircle } from "lucide-react";

export default function ProofRibbon() {
  const features = [
    {
      Icon: Brain,
      text: "CBT-informed exercises",
      description: "Evidence-based techniques",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      Icon: MessageCircle,
      text: "Kind, non-judgmental tone",
      description: "Always supportive",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      Icon: ShieldCheck,
      text: "Private by design",
      description: "Your data stays yours",
      color: "text-green-600",
      bgColor: "bg-green-50"
    }
  ];

  const Item = ({ Icon, text, description, color, bgColor }) => (
    <div className="group flex flex-col items-center text-center p-4 md:p-5 rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
      <div className={`p-3 rounded-full ${bgColor} mb-3 transition-colors duration-300 group-hover:${bgColor.replace('50', '100')}`}>
        <Icon className={`h-6 w-6 ${color}`} aria-hidden="true" />
      </div>
      <h3 className="font-semibold text-textMain text-base md:text-lg mb-1.5">{text}</h3>
      <p className="text-textBody text-sm md:text-[15px] leading-tight">{description}</p>
    </div>
  );

  return (
    <section className="py-8 md:py-10 bg-gradient-to-b from-white to-blue-50/30">
      <Container>
        {/* Section header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-sm font-medium text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            Why choose Ubuncare
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-textMain mb-3">
            Thoughtful mental health support
          </h2>
          <p className="text-textBody max-w-2xl mx-auto text-base md:text-lg">
            Designed with care to provide meaningful support when you need it most
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, index) => (
            <Item
              key={index}
              Icon={feature.Icon}
              text={feature.text}
              description={feature.description}
              color={feature.color}
              bgColor={feature.bgColor}
            />
          ))}
        </div>

        {/* Trust badge */}
        <div className="mt-8 md:mt-10 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gray-50 border border-gray-100 px-4 py-2.5">
            <Lock className="h-4 w-4 text-textBody" />
            <span className="text-sm text-textBody">Not a crisis service · Always confidential</span>
          </div>
        </div>
      </Container>
    </section>
  );
}