import Container from "./Container";
import { Shield, Lock, Download, Ban, EyeOff, Server } from "lucide-react";

export default function SecurityStrip() {
  const securityFeatures = [
    {
      icon: Lock,
      text: "End-to-end encryption",
      description: "All data encrypted in transit and at rest",
    },
    {
      icon: Shield,
      text: "HTTPS everywhere",
      description: "Secure connections for all interactions",
    },
    { icon: Download, text: "Export anytime", description: "Full control over your data" },
    { icon: Ban, text: "No ads ever", description: "Completely ad-free experience" },
    { icon: EyeOff, text: "Private by design", description: "Your entries stay confidential" },
    {
      icon: Server,
      text: "Secure infrastructure",
      description: "Enterprise-grade security measures",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-blue-50 to-indigo-50/30 border-y border-gray-200/50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm font-medium text-primary mb-4 shadow-sm border border-gray-100">
            <Shield className="h-4 w-4" />
            Security & Privacy
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-textMain mb-4">
            Your safety is our priority
          </h2>
          <p className="text-lg text-textBody leading-relaxed">
            We built Ubuncare with privacy and security at its core. Your mental health journey
            remains confidential and protected.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-textMain mb-1">{feature.text}</h3>
                    <p className="text-sm text-textBody">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional trust indicators */}
        <div className="mt-12 pt-8 border-t border-gray-200/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-textMain mb-2">Industry-standard compliance</h3>
              <p className="text-sm text-textBody">
                Regularly audited and compliant with data protection regulations
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-100">
                <span className="text-sm font-medium text-textMain">GDPR Compliant</span>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-100">
                <span className="text-sm font-medium text-textMain">HIPAA Ready</span>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-100">
                <span className="text-sm font-medium text-textMain">SOC 2 Type II</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-textBody">
            Have questions about our security practices?{" "}
            <a href="#security" className="text-primary hover:underline font-medium">
              Read our security overview
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
