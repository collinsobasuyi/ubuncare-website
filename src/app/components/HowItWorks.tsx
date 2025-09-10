
"use client";

import { useState } from "react";
import Container from "./Container";
import { Brain, ClipboardCheck, User, MessageCircle, TrendingUp, Bell, ArrowRight, ChevronLeft, ChevronRight, Shield, Heart, AlertCircle, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    step: 0,
    title: "Take CBT Assessment",
    description: "Complete a brief evidence-based assessment to understand your unique needs and thinking patterns. This helps us personalize your experience from the very beginning.",
    icon: ClipboardCheck,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    illustration: "📝",
    image: "/screenshots/assessment.png"
  },
  {
    step: 1,
    title: "Get Initial Insights",
    description: "Receive personalized insights about your thinking patterns, emotional triggers, and coping styles. Understand yourself better with data-driven observations.",
    icon: Brain,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    illustration: "💡",
    image: "/screenshots/insights.png"
  },
  {
    step: 2,
    title: "Choose Your AI Therapist",
    description: "Select from culturally-aware AI practitioners that match your preferences, communication style, and specific needs. Find the right companion for your journey.",
    icon: User,
    color: "text-green-600",
    bgColor: "bg-green-50",
    illustration: "👥",
    image: "/screenshots/therapists.png"
  },
  {
    step: 3,
    title: "Chat & Daily Check-ins",
    description: "Have meaningful conversations and complete brief daily mood check-ins. Your AI companion remembers your history and adapts to your evolving needs.",
    icon: MessageCircle,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    illustration: "💬",
    image: "/screenshots/chat.png"
  },
  {
    step: 4,
    title: "Receive Feedback & Tips",
    description: "Get immediate feedback, practical coping strategies, and personalized reminders. Learn evidence-based techniques to manage challenging thoughts and emotions.",
    icon: Bell,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    illustration: "📋",
    image: "/screenshots/tips.png"
  },
  {
    step: 5,
    title: "Track Your Progress",
    description: "Monitor your emotional journey with beautiful visual insights and progress tracking. Celebrate your growth and identify patterns over time.",
    icon: TrendingUp,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    illustration: "📊",
    image: "/screenshots/progress.png"
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = steps[activeStep];
  const IconComponent = currentStep.icon;

  const nextStep = () => setActiveStep(prev => Math.min(steps.length - 1, prev + 1));
  const prevStep = () => setActiveStep(prev => Math.max(0, prev - 1));

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-gradient-to-b from-blue-50/30 to-white">
      <Container>
        {/* Enhanced Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 px-5 py-3 text-sm font-medium text-primary mb-6 border border-blue-100"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            Simple 6-Step Process
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-textMain mb-6"
          >
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Ubuncare</span> Works
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-textBody leading-relaxed max-w-3xl mx-auto"
          >
            A guided journey to better mental health, designed to fit into your life with compassion and evidence-based support.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-gray-50 px-8 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-textMain">
                Step {activeStep + 1} of {steps.length}
              </span>
              <span className="text-sm text-textBody">
                {Math.round(((activeStep + 1) / steps.length) * 100)}% complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary to-purple-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Interactive Content */}
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            {/* Step Content */}
            <div className="flex flex-col justify-center">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-xl ${currentStep.bgColor} shadow-sm`}>
                    <IconComponent className={`h-8 w-8 ${currentStep.color}`} />
                  </div>
                  <div>
                    <span className="text-sm text-primary font-semibold">Step {activeStep + 1}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-textMain">{currentStep.title}</h3>
                  </div>
                </div>

                <p className="text-lg text-textBody leading-relaxed mb-8">
                  {currentStep.description}
                </p>

                {/* Cultural Context Highlight for Step 2 */}
                {activeStep === 2 && (
                  <div className="bg-amber-50 rounded-lg p-4 mt-6 border border-amber-100">
                    <div className="flex items-center gap-2 text-amber-700">
                      <Globe className="h-4 w-4" />
                      <span className="text-sm font-medium">Culturally Adapted Approach</span>
                    </div>
                    <p className="text-sm text-amber-600 mt-1">
                      Our AI practitioners are trained with cultural sensitivity and understanding 
                      of diverse mental health perspectives and communication styles.
                    </p>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex gap-4 mt-8">
                  <button
                    onClick={prevStep}
                    disabled={activeStep === 0}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-all"
                  >
                    <ChevronLeft className="h-5 w-5" />
                    Previous
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={activeStep === steps.length - 1}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-xl disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg transition-all"
                  >
                    {activeStep === steps.length - 1 ? 'Get Started' : 'Next Step'}
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Large Visual Demonstration */}
            <div className="flex items-center justify-center">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Device Frame */}
                <div className="bg-gray-800 rounded-3xl p-6 shadow-2xl max-w-md mx-auto">
                  <div className="bg-gray-900 rounded-2xl overflow-hidden aspect-[9/16] flex items-center justify-center">
                    {/* Screen Content */}
                    <div className="text-center p-8">
                      <div className="text-7xl mb-6">{currentStep.illustration}</div>
                      <h4 className="text-white font-semibold mb-2">{currentStep.title}</h4>
                      <p className="text-gray-400 text-sm">Ubuncare App Preview</p>
                    </div>
                  </div>
                  
                  {/* Device Details */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-gray-600"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-primary to-purple-600 rounded-full p-3 shadow-lg">
                  <div className="text-white text-xs font-bold">NEW</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Step Indicators */}
        <div className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(index)}
                  className={`p-4 rounded-xl text-center transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-white shadow-lg border border-primary/20 transform -translate-y-1'
                      : 'bg-gray-50 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <div className={`p-3 rounded-xl ${step.bgColor} mx-auto mb-3 w-max`}>
                    <StepIcon className={`h-6 w-6 ${step.color}`} />
                  </div>
                  <h4 className="font-semibold text-textMain text-sm mb-1">{step.title}</h4>
                  <div className={`w-3 h-3 rounded-full mx-auto ${
                    activeStep === index ? 'bg-primary' : 'bg-gray-300'
                  }`}></div>
                </button>
              );
            })}
          </div>
        </div>



        {/* Crisis Awareness */}
        <div className="bg-blue-50 rounded-lg p-4 mt-6 border border-blue-100">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-900 text-sm">Important Notice</h4>
              <p className="text-blue-700 text-xs mt-1">
                If you are experiencing a mental health emergency, please contact emergency services 
                or call 988 (US) or your local crisis hotline immediately.
              </p>
            </div>
          </div>
        </div>



        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
            <h3 className="text-2xl md:text-3xl font-bold text-textMain mb-4">Ready to begin your journey?</h3>
            <p className="text-lg text-textBody mb-6 max-w-2xl mx-auto">
              Join thousands who are discovering a new approach to mental wellness with Ubuncare
            </p>
            <a
              href="#join"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-lg"
            >
              Start Your Assessment
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="text-sm text-textBody mt-4">
              No credit card required • Free 14-day trial
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}


