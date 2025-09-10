"use client";

import { useState, useEffect } from "react";
import Container from "./Container";
import { Brain, ClipboardCheck, User, MessageCircle, TrendingUp, Bell, ArrowRight, Shield, Heart, AlertCircle, Globe, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "assessment",
    title: "Quick Assessment",
    description: "5-minute evidence-based assessment to understand your needs",
    time: "5 min",
    icon: ClipboardCheck,
    color: "blue",
    benefit: "Personalized from the start"
  },
  {
    id: "insights",
    title: "Instant Insights",
    description: "Receive personalized understanding of your patterns",
    time: "2 min",
    icon: Brain,
    color: "purple",
    benefit: "Data-driven self-awareness"
  },
  {
    id: "therapist",
    title: "Choose Companion",
    description: "Select AI practitioner matching your preferences",
    time: "1 min",
    icon: User,
    color: "green",
    benefit: "Culturally-aware support",
    highlight: "cultural"
  },
  {
    id: "chat",
    title: "Daily Connection",
    description: "Meaningful conversations and mood check-ins",
    time: "3 min",
    icon: MessageCircle,
    color: "amber",
    benefit: "Consistent support"
  },
  {
    id: "feedback",
    title: "Practical Guidance",
    description: "Get actionable strategies and reminders",
    time: "2 min",
    icon: Bell,
    color: "pink",
    benefit: "Immediate help"
  },
  {
    id: "progress",
    title: "Track Growth",
    description: "Visual insights showing your journey",
    time: "1 min",
    icon: TrendingUp,
    color: "indigo",
    benefit: "Celebrate progress"
  }
];

const colorMap = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
  green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
  amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200" },
  pink: { bg: "bg-pink-50", text: "text-pink-600", border: "border-pink-200" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" }
};

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const currentStep = steps[activeStep];
  const colors = colorMap[currentStep.color];

  // Auto-advance steps
  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setTimeout(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, [activeStep, autoPlay]);

  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-white">
      <Container>
        {/* User-Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-700 mb-4"
          >
            <Sparkles className="h-4 w-4" />
            Designed for real life
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Mental health support that fits your life
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Simple steps, big impact. No overwhelm, just meaningful support when you need it.
          </motion.p>
        </div>

        {/* Main Content - Mobile First */}
        <div className="max-w-4xl mx-auto">
          {/* Visual Timeline */}
          <div className="relative mb-8">
            {/* Progress Line */}
            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-200 -translate-x-1/2 z-0">
              <div 
                className="bg-blue-500 w-0.5 h-full transition-all duration-500"
                style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
              />
            </div>

            {/* Steps */}
            <div className="space-y-6 relative z-10">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                const stepColors = colorMap[step.color];
                const isActive = index === activeStep;
                const isCompleted = index < activeStep;
                
                return (
                  <motion.button
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className={`flex items-start gap-4 w-full text-left p-4 rounded-xl transition-all ${
                      isActive 
                        ? `${stepColors.bg} ${stepColors.border} border shadow-sm` 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    {/* Step Number */}
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      isActive || isCompleted 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      {isCompleted ? (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <span className="text-sm font-medium">{index + 1}</span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg ${stepColors.bg}`}>
                          <StepIcon className={`h-5 w-5 ${stepColors.text}`} />
                        </div>
                        <h3 className={`font-semibold ${
                          isActive ? 'text-gray-900' : 'text-gray-700'
                        }`}>
                          {step.title}
                        </h3>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {step.time}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-2">
                        {step.description}
                      </p>
                      
                      <div className="text-xs text-blue-600 font-medium">
                        → {step.benefit}
                      </div>

                      {/* Cultural Highlight */}
                      {step.highlight === 'cultural' && isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="bg-amber-50 rounded-lg p-3 mt-3 border border-amber-200"
                        >
                          <div className="flex items-center gap-2 text-amber-700">
                            <Globe className="h-3 w-3" />
                            <span className="text-xs font-medium">Culturally adapted support</span>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Current Step Focus */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 border border-blue-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-xl ${colors.bg}`}>
                <currentStep.icon className={`h-6 w-6 ${colors.text}`} />
              </div>
              <div>
                <span className="text-sm text-blue-600 font-medium">Step {activeStep + 1}</span>
                <h3 className="text-xl font-bold text-gray-900">{currentStep.title}</h3>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              {currentStep.description}
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {currentStep.time}
              </div>
              <div className="w-0.5 h-4 bg-gray-300"></div>
              <span className="text-blue-600 font-medium">→ {currentStep.benefit}</span>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setAutoPlay(!autoPlay)}
                className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50"
                aria-label={autoPlay ? "Pause animation" : "Play animation"}
              >
                {autoPlay ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              <span className="text-sm text-gray-600">
                Step {activeStep + 1} of {steps.length}
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
                className="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-40 text-sm"
              >
                Previous
              </button>
              <button
                onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                disabled={activeStep === steps.length - 1}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-40 text-sm"
              >
                Next
              </button>
            </div>
          </div>

          {/* Trust & Safety */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-blue-50 p-3 rounded-full mb-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Private & Secure</h4>
                <p className="text-sm text-gray-600">Your data stays confidential</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-green-50 p-3 rounded-full mb-3">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Expert-Designed</h4>
                <p className="text-sm text-gray-600">Evidence-based approaches</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-amber-50 p-3 rounded-full mb-3">
                  <Globe className="h-6 w-6 text-amber-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Culturally Aware</h4>
                <p className="text-sm text-gray-600">Inclusive support for all</p>
              </div>
            </div>
          </div>

          {/* Crisis Resources */}
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-blue-900 text-sm mb-1">Important Resources</h4>
                <p className="text-blue-700 text-xs">
                  If you're experiencing a mental health emergency, please contact emergency services 
                  or call 988 (US) immediately. Ubuncare is designed for support, not crisis care.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Ready to feel better?</h3>
              <p className="text-blue-100 mb-6">
                Join others taking the first step toward better mental health
              </p>
              <a
                href="#join"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Start Your Journey
                <ArrowRight className="h-5 w-5" />
              </a>
              <p className="text-blue-100 text-sm mt-4">
                No credit card required • Free assessment
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// "use client";

// import { useState } from "react";
// import Container from "./Container";
// import { Brain, ClipboardCheck, User, MessageCircle, TrendingUp, Bell, ArrowRight, ChevronLeft, ChevronRight, Shield, Heart, AlertCircle, Globe } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const steps = [
//   {
//     step: 0,
//     title: "Take CBT Assessment",
//     description: "Complete a brief evidence-based assessment to understand your unique needs and thinking patterns. This helps us personalize your experience from the very beginning.",
//     icon: ClipboardCheck,
//     color: "text-blue-600",
//     bgColor: "bg-blue-50",
//     illustration: "📝",
//     image: "/screenshots/assessment.png"
//   },
//   {
//     step: 1,
//     title: "Get Initial Insights",
//     description: "Receive personalized insights about your thinking patterns, emotional triggers, and coping styles. Understand yourself better with data-driven observations.",
//     icon: Brain,
//     color: "text-purple-600",
//     bgColor: "bg-purple-50",
//     illustration: "💡",
//     image: "/screenshots/insights.png"
//   },
//   {
//     step: 2,
//     title: "Choose Your AI Therapist",
//     description: "Select from culturally-aware AI practitioners that match your preferences, communication style, and specific needs. Find the right companion for your journey.",
//     icon: User,
//     color: "text-green-600",
//     bgColor: "bg-green-50",
//     illustration: "👥",
//     image: "/screenshots/therapists.png"
//   },
//   {
//     step: 3,
//     title: "Chat & Daily Check-ins",
//     description: "Have meaningful conversations and complete brief daily mood check-ins. Your AI companion remembers your history and adapts to your evolving needs.",
//     icon: MessageCircle,
//     color: "text-amber-600",
//     bgColor: "bg-amber-50",
//     illustration: "💬",
//     image: "/screenshots/chat.png"
//   },
//   {
//     step: 4,
//     title: "Receive Feedback & Tips",
//     description: "Get immediate feedback, practical coping strategies, and personalized reminders. Learn evidence-based techniques to manage challenging thoughts and emotions.",
//     icon: Bell,
//     color: "text-pink-600",
//     bgColor: "bg-pink-50",
//     illustration: "📋",
//     image: "/screenshots/tips.png"
//   },
//   {
//     step: 5,
//     title: "Track Your Progress",
//     description: "Monitor your emotional journey with beautiful visual insights and progress tracking. Celebrate your growth and identify patterns over time.",
//     icon: TrendingUp,
//     color: "text-indigo-600",
//     bgColor: "bg-indigo-50",
//     illustration: "📊",
//     image: "/screenshots/progress.png"
//   }
// ];

// export default function HowItWorks() {
//   const [activeStep, setActiveStep] = useState(0);
//   const currentStep = steps[activeStep];
//   const IconComponent = currentStep.icon;

//   const nextStep = () => setActiveStep(prev => Math.min(steps.length - 1, prev + 1));
//   const prevStep = () => setActiveStep(prev => Math.max(0, prev - 1));

//   return (
//     <section id="how-it-works" className="py-20 md:py-28 bg-gradient-to-b from-blue-50/30 to-white">
//       <Container>
//         {/* Enhanced Header */}
//         <div className="text-center max-w-4xl mx-auto mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 px-5 py-3 text-sm font-medium text-primary mb-6 border border-blue-100"
//           >
//             <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
//             Simple 6-Step Process
//           </motion.div>
          
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-bold text-textMain mb-6"
//           >
//             How <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Ubuncare</span> Works
//           </motion.h2>
          
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="text-xl text-textBody leading-relaxed max-w-3xl mx-auto"
//           >
//             A guided journey to better mental health, designed to fit into your life with compassion and evidence-based support.
//           </motion.p>
//         </div>

//         {/* Main Content */}
//         <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
//           {/* Progress Bar */}
//           <div className="bg-gray-50 px-8 py-4 border-b border-gray-200">
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-sm font-medium text-textMain">
//                 Step {activeStep + 1} of {steps.length}
//               </span>
//               <span className="text-sm text-textBody">
//                 {Math.round(((activeStep + 1) / steps.length) * 100)}% complete
//               </span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2">
//               <div 
//                 className="bg-gradient-to-r from-primary to-purple-600 h-2 rounded-full transition-all duration-500"
//                 style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
//               ></div>
//             </div>
//           </div>

//           {/* Interactive Content */}
//           <div className="grid lg:grid-cols-2 gap-8 p-8">
//             {/* Step Content */}
//             <div className="flex flex-col justify-center">
//               <motion.div
//                 key={activeStep}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className={`p-4 rounded-xl ${currentStep.bgColor} shadow-sm`}>
//                     <IconComponent className={`h-8 w-8 ${currentStep.color}`} />
//                   </div>
//                   <div>
//                     <span className="text-sm text-primary font-semibold">Step {activeStep + 1}</span>
//                     <h3 className="text-2xl md:text-3xl font-bold text-textMain">{currentStep.title}</h3>
//                   </div>
//                 </div>

//                 <p className="text-lg text-textBody leading-relaxed mb-8">
//                   {currentStep.description}
//                 </p>

//                 {/* Cultural Context Highlight for Step 2 */}
//                 {activeStep === 2 && (
//                   <div className="bg-amber-50 rounded-lg p-4 mt-6 border border-amber-100">
//                     <div className="flex items-center gap-2 text-amber-700">
//                       <Globe className="h-4 w-4" />
//                       <span className="text-sm font-medium">Culturally Adapted Approach</span>
//                     </div>
//                     <p className="text-sm text-amber-600 mt-1">
//                       Our AI practitioners are trained with cultural sensitivity and understanding 
//                       of diverse mental health perspectives and communication styles.
//                     </p>
//                   </div>
//                 )}

//                 {/* Navigation */}
//                 <div className="flex gap-4 mt-8">
//                   <button
//                     onClick={prevStep}
//                     disabled={activeStep === 0}
//                     className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-all"
//                   >
//                     <ChevronLeft className="h-5 w-5" />
//                     Previous
//                   </button>
//                   <button
//                     onClick={nextStep}
//                     disabled={activeStep === steps.length - 1}
//                     className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-xl disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg transition-all"
//                   >
//                     {activeStep === steps.length - 1 ? 'Get Started' : 'Next Step'}
//                     <ChevronRight className="h-5 w-5" />
//                   </button>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Large Visual Demonstration */}
//             <div className="flex items-center justify-center">
//               <motion.div
//                 key={activeStep}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="relative"
//               >
//                 {/* Device Frame */}
//                 <div className="bg-gray-800 rounded-3xl p-6 shadow-2xl max-w-md mx-auto">
//                   <div className="bg-gray-900 rounded-2xl overflow-hidden aspect-[9/16] flex items-center justify-center">
//                     {/* Screen Content */}
//                     <div className="text-center p-8">
//                       <div className="text-7xl mb-6">{currentStep.illustration}</div>
//                       <h4 className="text-white font-semibold mb-2">{currentStep.title}</h4>
//                       <p className="text-gray-400 text-sm">Ubuncare App Preview</p>
//                     </div>
//                   </div>
                  
//                   {/* Device Details */}
//                   <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
//                   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-gray-600"></div>
//                 </div>

//                 {/* Decorative Elements */}
//                 <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
//                   <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
//                 </div>
//                 <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-primary to-purple-600 rounded-full p-3 shadow-lg">
//                   <div className="text-white text-xs font-bold">NEW</div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>

//         {/* Step Indicators */}
//         <div className="mt-12">
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//             {steps.map((step, index) => {
//               const StepIcon = step.icon;
//               return (
//                 <button
//                   key={step.step}
//                   onClick={() => setActiveStep(index)}
//                   className={`p-4 rounded-xl text-center transition-all duration-300 ${
//                     activeStep === index
//                       ? 'bg-white shadow-lg border border-primary/20 transform -translate-y-1'
//                       : 'bg-gray-50 hover:bg-white hover:shadow-md'
//                   }`}
//                 >
//                   <div className={`p-3 rounded-xl ${step.bgColor} mx-auto mb-3 w-max`}>
//                     <StepIcon className={`h-6 w-6 ${step.color}`} />
//                   </div>
//                   <h4 className="font-semibold text-textMain text-sm mb-1">{step.title}</h4>
//                   <div className={`w-3 h-3 rounded-full mx-auto ${
//                     activeStep === index ? 'bg-primary' : 'bg-gray-300'
//                   }`}></div>
//                 </button>
//               );
//             })}
//           </div>
//         </div>



//         {/* Crisis Awareness */}
//         <div className="bg-blue-50 rounded-lg p-4 mt-6 border border-blue-100">
//           <div className="flex items-start gap-3">
//             <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
//             <div>
//               <h4 className="font-medium text-blue-900 text-sm">Important Notice</h4>
//               <p className="text-blue-700 text-xs mt-1">
//                 If you are experiencing a mental health emergency, please contact emergency services 
//                 or call 988 (US) or your local crisis hotline immediately.
//               </p>
//             </div>
//           </div>
//         </div>



//         {/* Enhanced CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="mt-16 text-center"
//         >
//           <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
//             <h3 className="text-2xl md:text-3xl font-bold text-textMain mb-4">Ready to begin your journey?</h3>
//             <p className="text-lg text-textBody mb-6 max-w-2xl mx-auto">
//               Join thousands who are discovering a new approach to mental wellness with Ubuncare
//             </p>
//             <a
//               href="#join"
//               className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-lg"
//             >
//               Start Your Assessment
//               <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
//             </a>
//             <p className="text-sm text-textBody mt-4">
//               No credit card required • Free 14-day trial
//             </p>
//           </div>
//         </motion.div>
//       </Container>
//     </section>
//   );
// }


// "use client";

// import { useState } from "react";
// import Container from "./Container";
// import SectionHeading from "./SectionHeading";
// import { Brain, ClipboardCheck, User, MessageCircle, TrendingUp, Bell, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const steps = [
//   {
//     step: 0,
//     title: "Take CBT Assessment",
//     description: "Complete a brief evidence-based assessment to understand your unique needs and thinking patterns. This helps us personalize your experience from the very beginning.",
//     icon: ClipboardCheck,
//     color: "text-blue-600",
//     bgColor: "bg-blue-50",
//     illustration: "📝",
//     image: "/screenshots/assessment.png"
//   },
//   {
//     step: 1,
//     title: "Get Initial Insights",
//     description: "Receive personalized insights about your thinking patterns, emotional triggers, and coping styles. Understand yourself better with data-driven observations.",
//     icon: Brain,
//     color: "text-purple-600",
//     bgColor: "bg-purple-50",
//     illustration: "💡",
//     image: "/screenshots/insights.png"
//   },
//   {
//     step: 2,
//     title: "Choose Your AI Therapist",
//     description: "Select from culturally-aware AI practitioners that match your preferences, communication style, and specific needs. Find the right companion for your journey.",
//     icon: User,
//     color: "text-green-600",
//     bgColor: "bg-green-50",
//     illustration: "👥",
//     image: "/screenshots/therapists.png"
//   },
//   {
//     step: 3,
//     title: "Chat & Daily Check-ins",
//     description: "Have meaningful conversations and complete brief daily mood check-ins. Your AI companion remembers your history and adapts to your evolving needs.",
//     icon: MessageCircle,
//     color: "text-amber-600",
//     bgColor: "bg-amber-50",
//     illustration: "💬",
//     image: "/screenshots/chat.png"
//   },
//   {
//     step: 4,
//     title: "Receive Feedback & Tips",
//     description: "Get immediate feedback, practical coping strategies, and personalized reminders. Learn evidence-based techniques to manage challenging thoughts and emotions.",
//     icon: Bell,
//     color: "text-pink-600",
//     bgColor: "bg-pink-50",
//     illustration: "📋",
//     image: "/screenshots/tips.png"
//   },
//   {
//     step: 5,
//     title: "Track Your Progress",
//     description: "Monitor your emotional journey with beautiful visual insights and progress tracking. Celebrate your growth and identify patterns over time.",
//     icon: TrendingUp,
//     color: "text-indigo-600",
//     bgColor: "bg-indigo-50",
//     illustration: "📊",
//     image: "/screenshots/progress.png"
//   }
// ];

// export default function HowItWorks() {
//   const [activeStep, setActiveStep] = useState(0);
//   const currentStep = steps[activeStep];
//   const IconComponent = currentStep.icon;

//   const nextStep = () => setActiveStep(prev => Math.min(steps.length - 1, prev + 1));
//   const prevStep = () => setActiveStep(prev => Math.max(0, prev - 1));

//   return (
//     <section id="how-it-works" className="py-20 md:py-28 bg-gradient-to-b from-blue-50/30 to-white">
//       <Container>
//         {/* Enhanced Header */}
//         <div className="text-center max-w-4xl mx-auto mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 px-5 py-3 text-sm font-medium text-primary mb-6 border border-blue-100"
//           >
//             <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
//             Simple 6-Step Process
//           </motion.div>
          
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-bold text-textMain mb-6"
//           >
//             How <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Ubuncare</span> Works
//           </motion.h2>
          
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="text-xl text-textBody leading-relaxed max-w-3xl mx-auto"
//           >
//             A guided journey to better mental health, designed to fit into your life with compassion and evidence-based support.
//           </motion.p>
//         </div>

//         {/* Main Content */}
//         <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
//           {/* Progress Bar */}
//           <div className="bg-gray-50 px-8 py-4 border-b border-gray-200">
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-sm font-medium text-textMain">
//                 Step {activeStep + 1} of {steps.length}
//               </span>
//               <span className="text-sm text-textBody">
//                 {Math.round(((activeStep + 1) / steps.length) * 100)}% complete
//               </span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2">
//               <div 
//                 className="bg-gradient-to-r from-primary to-purple-600 h-2 rounded-full transition-all duration-500"
//                 style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
//               ></div>
//             </div>
//           </div>

//           {/* Interactive Content */}
//           <div className="grid lg:grid-cols-2 gap-8 p-8">
//             {/* Step Content */}
//             <div className="flex flex-col justify-center">
//               <motion.div
//                 key={activeStep}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className={`p-4 rounded-xl ${currentStep.bgColor} shadow-sm`}>
//                     <IconComponent className={`h-8 w-8 ${currentStep.color}`} />
//                   </div>
//                   <div>
//                     <span className="text-sm text-primary font-semibold">Step {activeStep + 1}</span>
//                     <h3 className="text-2xl md:text-3xl font-bold text-textMain">{currentStep.title}</h3>
//                   </div>
//                 </div>

//                 <p className="text-lg text-textBody leading-relaxed mb-8">
//                   {currentStep.description}
//                 </p>

//                 {/* Navigation */}
//                 <div className="flex gap-4">
//                   <button
//                     onClick={prevStep}
//                     disabled={activeStep === 0}
//                     className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-all"
//                   >
//                     <ChevronLeft className="h-5 w-5" />
//                     Previous
//                   </button>
//                   <button
//                     onClick={nextStep}
//                     disabled={activeStep === steps.length - 1}
//                     className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-xl disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg transition-all"
//                   >
//                     {activeStep === steps.length - 1 ? 'Get Started' : 'Next Step'}
//                     <ChevronRight className="h-5 w-5" />
//                   </button>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Large Visual Demonstration */}
//             <div className="flex items-center justify-center">
//               <motion.div
//                 key={activeStep}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="relative"
//               >
//                 {/* Device Frame */}
//                 <div className="bg-gray-800 rounded-3xl p-6 shadow-2xl max-w-md mx-auto">
//                   <div className="bg-gray-900 rounded-2xl overflow-hidden aspect-[9/16] flex items-center justify-center">
//                     {/* Screen Content */}
//                     <div className="text-center p-8">
//                       <div className="text-7xl mb-6">{currentStep.illustration}</div>
//                       <h4 className="text-white font-semibold mb-2">{currentStep.title}</h4>
//                       <p className="text-gray-400 text-sm">Ubuncare App Preview</p>
//                     </div>
//                   </div>
                  
//                   {/* Device Details */}
//                   <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
//                   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-gray-600"></div>
//                 </div>

//                 {/* Decorative Elements */}
//                 <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
//                   <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
//                 </div>
//                 <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-primary to-purple-600 rounded-full p-3 shadow-lg">
//                   <div className="text-white text-xs font-bold">NEW</div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>

//         {/* Step Indicators */}
//         <div className="mt-12">
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//             {steps.map((step, index) => {
//               const StepIcon = step.icon;
//               return (
//                 <button
//                   key={step.step}
//                   onClick={() => setActiveStep(index)}
//                   className={`p-4 rounded-xl text-center transition-all duration-300 ${
//                     activeStep === index
//                       ? 'bg-white shadow-lg border border-primary/20 transform -translate-y-1'
//                       : 'bg-gray-50 hover:bg-white hover:shadow-md'
//                   }`}
//                 >
//                   <div className={`p-3 rounded-xl ${step.bgColor} mx-auto mb-3 w-max`}>
//                     <StepIcon className={`h-6 w-6 ${step.color}`} />
//                   </div>
//                   <h4 className="font-semibold text-textMain text-sm mb-1">{step.title}</h4>
//                   <div className={`w-3 h-3 rounded-full mx-auto ${
//                     activeStep === index ? 'bg-primary' : 'bg-gray-300'
//                   }`}></div>
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Enhanced CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="mt-16 text-center"
//         >
//           <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
//             <h3 className="text-2xl md:text-3xl font-bold text-textMain mb-4">Ready to begin your journey?</h3>
//             <p className="text-lg text-textBody mb-6 max-w-2xl mx-auto">
//               Join thousands who are discovering a new approach to mental wellness with Ubuncare
//             </p>
//             <a
//               href="#join"
//               className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-lg"
//             >
//               Start Your Assessment
//               <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
//             </a>
//             <p className="text-sm text-textBody mt-4">
//               No credit card required • Free 14-day trial
//             </p>
//           </div>
//         </motion.div>
//       </Container>
//     </section>
//   );
// }