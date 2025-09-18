"use client";

import Container from "./Container";
import { Brain, Shield, TrendingUp, ClipboardCheck, User, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: ClipboardCheck,
    title: "Clinical Assessment",
    desc: "Begin with validated frameworks (PHQ-9, GAD-7, PSS-10) to understand your mental state.",
    stats: "Evidence-based starting point",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Brain,
    title: "Personalized Insights",
    desc: "Get clear results and actionable insights on anxiety, stress, and depression scores.",
    stats: "Data-driven recommendations",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: User,
    title: "AI Companion Matching",
    desc: "Choose the practitioner style that fits you best — empathetic, structured, or motivational.",
    stats: "Tailored experience",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: MessageCircle,
    title: "Daily Support & Tools",
    desc: "Chat anytime, complete activities, track trends, and access resources in one place.",
    stats: "24/7 support",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: TrendingUp,
    title: "Smart Progress Tracking",
    desc: "AI-powered insights help you see your growth patterns and celebrate milestones.",
    stats: "62% average improvement",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Shield,
    title: "Military-Grade Security",
    desc: "End-to-end encryption, zero data retention, and complete anonymity guaranteed.",
    stats: "100% private by design",
    color: "bg-violet-50 text-violet-600",
  },
];

export default function FeaturesAndHowItWorks() {
  return (
    <section id="features" className="py-10 md:py-18 bg-gradient-to-b from-purple-50 to-white">
      <Container>
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Your complete mental health{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              journey
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            From your first assessment to daily guidance, Ubuncare brings clinical science and AI together in one supportive platform.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className={`p-3 rounded-xl mb-4 inline-flex ${feature.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.desc}</p>
                <div className="text-sm font-medium text-gray-700 bg-gray-50 px-3 py-1 rounded-full inline-block">
                  {feature.stats}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-10 text-white">
            <h3 className="text-2xl font-bold mb-3">Ready to start your journey?</h3>
            <p className="text-purple-100 mb-6 max-w-xl mx-auto">
              Join thousands who have found peace and progress with Ubuncare’s science-backed approach.
            </p>
            <button className="bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:shadow-xl transition-shadow">
              Join Waitlist
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}


// "use client";

// import Container from "./Container";
// import { Brain, Heart, Shield, Clock, TrendingUp, Sparkles, Eye, Lock, Zap, Target, Users, BarChart3 } from "lucide-react";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// const features = [
//   {
//     icon: Brain,
//     title: "Clinical-Grade CBT",
//     desc: "Evidence-based exercises developed with licensed therapists to reframe thoughts and build resilience.",
//     color: "text-blue-600",
//     bg: "bg-blue-50",
//     gradient: "from-blue-400 to-blue-600",
//     stats: "87% effectiveness rate",
//   },
//   {
//     icon: Heart,
//     title: "Empathetic AI Companion",
//     desc: "Always-available support that understands context and responds with genuine compassion.",
//     color: "text-rose-600",
//     bg: "bg-rose-50",
//     gradient: "from-rose-400 to-rose-600",
//     stats: "24/7 emotional support",
//   },
//   {
//     icon: Clock,
//     title: "3-Minute Micro-Sessions",
//     desc: "Quick, focused exercises designed for busy lives without compromising effectiveness.",
//     color: "text-emerald-600",
//     bg: "bg-emerald-50",
//     gradient: "from-emerald-400 to-emerald-600",
//     stats: "94% completion rate",
//   },
//   {
//     icon: Shield,
//     title: "Military-Grade Security",
//     desc: "End-to-end encryption, zero data retention policy, and complete anonymity guaranteed.",
//     color: "text-violet-600",
//     bg: "bg-violet-50",
//     gradient: "from-violet-400 to-violet-600",
//     stats: "100% private by design",
//   },
//   {
//     icon: TrendingUp,
//     title: "Smart Progress Tracking",
//     desc: "AI-powered insights that show your growth patterns and celebrate your milestones.",
//     color: "text-amber-600",
//     bg: "bg-amber-50",
//     gradient: "from-amber-400 to-amber-600",
//     stats: "62% average improvement",
//   },
//   {
//     icon: Sparkles,
//     title: "Personalized Journey",
//     desc: "Adaptive exercises that evolve with you, learning from your patterns and preferences.",
//     color: "text-indigo-600",
//     bg: "bg-indigo-50",
//     gradient: "from-indigo-400 to-indigo-600",
//     stats: "1000+ personalized paths",
//   },
// ];

// const trustMetrics = [
//   { icon: Users, value: "50,000+", label: "Active Users" },
//   { icon: Target, value: "94%", label: "Satisfaction Rate" },
//   { icon: BarChart3, value: "78%", label: "Symptom Reduction" },
//   { icon: Lock, value: "100%", label: "Privacy Guaranteed" },
// ];

// export default function FeaturesSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="features" className="py-20 md:py-28 bg-gray-50" ref={ref}>
//       <Container>
//         {/* Enhanced Header with Visual Elements */}
//         <div className="text-center max-w-4xl mx-auto mb-20 relative">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-full blur-3xl"
//           />
          
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3 text-primary font-medium mb-8"
//           >
//             <Zap className="h-5 w-5" />
//             Powered by AI & Psychology
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.1 }}
//             className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent"
//           >
//             Designed for{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
//               real change
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
//           >
//             Clinical expertise meets AI innovation to create meaningful mental health support that actually works.
//           </motion.p>
//         </div>

//         {/* Trust Metrics Bar */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 p-8 bg-white rounded-2xl shadow-lg border border-slate-100"
//         >
//           {trustMetrics.map((metric, index) => {
//             const Icon = metric.icon;
//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="text-center"
//               >
//                 <div className="flex justify-center mb-3">
//                   <div className="p-3 bg-slate-50 rounded-xl">
//                     <Icon className="h-6 w-6 text-primary" />
//                   </div>
//                 </div>
//                 <div className="text-3xl font-bold text-slate-800 mb-2">{metric.value}</div>
//                 <div className="text-sm text-slate-600 font-medium">{metric.label}</div>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Enhanced Features Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
//           {features.map((feature, index) => {
//             const Icon = feature.icon;
//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50, scale: 0.95 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                 transition={{ 
//                   duration: 0.7, 
//                   delay: index * 0.15,
//                   type: "spring",
//                   stiffness: 100
//                 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 className="group relative"
//               >
//                 {/* Background Gradient Effect */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
//                 <div className={`relative rounded-2xl p-8 border border-slate-200 bg-white group-hover:shadow-xl group-hover:border-slate-300 transition-all duration-500 h-full flex flex-col`}>
//                   {/* Icon with Gradient Background */}
//                   <div className="relative mb-6">
//                     <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}>
//                       <Icon className="h-7 w-7 text-white" />
//                     </div>
//                     {/* Floating particles effect */}
//                     <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                     <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
//                   </div>

//                   <h3 className="text-xl font-semibold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
//                     {feature.title}
//                   </h3>
                  
//                   <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
//                     {feature.desc}
//                   </p>

//                   {/* Stats Badge */}
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
//                       {feature.stats}
//                     </span>
//                     <motion.div
//                       initial={{ x: -10, opacity: 0 }}
//                       whileInView={{ x: 0, opacity: 1 }}
//                       transition={{ delay: index * 0.2 + 0.3 }}
//                       className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                     >
//                       <Eye className="h-4 w-4" />
//                     </motion.div>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center"
//         >
//           <div className="bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-12 text-white">
//             <h3 className="text-3xl font-bold mb-4">Ready to start your journey?</h3>
//             <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
//               Join thousands who have found peace and progress with our science-backed approach.
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:shadow-2xl transition-shadow duration-300"
//             >
//               Start Free Trial
//             </motion.button>
//           </div>
//         </motion.div>
//       </Container>
//     </section>
//   );
// }
