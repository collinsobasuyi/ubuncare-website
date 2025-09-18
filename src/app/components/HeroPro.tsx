"use client";

import Container from "./Container";
import { Brain } from "lucide-react";

// HeroPro Component - Fixed spacing
const HeroPro: React.FC = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-20 md:pt-28 pb-6 md:pb-8 bg-purple-50"
    >
      <Container>
        <div className="grid md:grid-cols-[1.2fr_0.8fr] items-center gap-8 md:gap-12 lg:gap-16">
          {/* Left Content - Takes more space */}
          <div className="text-center md:text-left">
            <h1 
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6"
            >
              Your safe space for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
                everyday mental health
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto md:mx-0 mb-8 leading-relaxed">
              Check in with Ubuncare, your AI companion, to manage stress,
              reframe unhelpful thoughts, and feel supported in just a few minutes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8">
              <a
                href="#join"
                className="inline-flex items-center justify-center rounded-full bg-purple-600 text-white px-8 py-4 text-base md:text-lg font-semibold shadow-lg hover:bg-purple-700 transition-colors duration-300"
              >
                Get Early Access
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-full border border-purple-600 text-purple-600 px-8 py-4 text-base md:text-lg font-semibold hover:bg-purple-50 transition-colors duration-300"
              >
                How it Works
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-500">
              <Brain className="h-4 w-4 text-purple-600 animate-pulse" />
              <span>End-to-end encrypted • No data stored • 100% private</span>
            </div>
          </div>

          {/* Right Content - Mobile Device */}
          <div className="flex justify-center md:justify-end">
            <div className="relative rounded-3xl shadow-2xl p-3 bg-gradient-to-br from-gray-900 to-black w-full max-w-[280px]">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-b-xl z-20" />
              <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <Brain className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <p className="text-sm font-medium mb-1">Your AI companion</p>
                  <p className="text-xs opacity-80">Always here to listen</p>
                  <div className="mt-6 flex justify-center gap-1">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="h-2 w-2 bg-white/30 rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroPro;

// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { Brain } from "lucide-react";

// // Container component
// const Container = ({ 
//   children, 
//   className = "" 
// }: { 
//   children: React.ReactNode; 
//   className?: string 
// }) => (
//   <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
//     {children}
//   </div>
// );

// // Type definitions
// type Message = {
//   speaker: "ai" | "user";
//   text: string;
//   delay: number;
// };

// type ChatBubbleProps = {
//   message: Message;
//   index: number;
// };

// // Conversation data
// const CONVERSATION: Message[] = [
//   { speaker: "ai", text: "Hi, I'm here with you. How are you feeling right now?", delay: 800 },
//   { speaker: "user", text: "Honestly, I feel really anxious about tomorrow's work meeting.", delay: 2200 },
//   { speaker: "ai", text: "That sounds overwhelming. What's the thought that keeps repeating in your mind?", delay: 2600 },
//   { speaker: "user", text: "I'm scared I'll make a mistake and embarrass myself.", delay: 2400 },
//   { speaker: "ai", text: "I hear you. Can we pause and think of one reason you might actually handle it well?", delay: 3200 },
//   { speaker: "user", text: "I prepared my notes and practiced a few times.", delay: 2200 },
//   { speaker: "ai", text: "That's a great strength. Preparation gives you confidence.", delay: 1800 },
//   { speaker: "ai", text: "Let's try a short breathing exercise together before we finish.", delay: 2200 },
// ];

// // ChatBubble component
// const ChatBubble = ({ message, index }: ChatBubbleProps) => {
//   const isAI = message.speaker === "ai";
  
//   return (
//     <div
//       key={index}
//       className={`flex items-start gap-2 ${isAI ? "" : "justify-end"} animate-fade-in`}
//     >
//       {isAI && (
//         <div className="bg-purple-600 p-2 rounded-full flex-shrink-0">
//           <Brain className="h-4 w-4 text-white" />
//         </div>
//       )}
//       <div
//         className={`rounded-2xl px-4 py-3 max-w-[80%] shadow ${
//           isAI
//             ? "rounded-tl-none bg-white text-gray-900"
//             : "rounded-tr-none bg-purple-600 text-white"
//         }`}
//       >
//         <p className="text-sm md:text-base">{message.text}</p>
//       </div>
//     </div>
//   );
// };

// // TypingIndicator component
// const TypingIndicator = () => (
//   <div className="flex items-start gap-2">
//     <div className="bg-purple-600 p-2 rounded-full">
//       <Brain className="h-4 w-4 text-white" />
//     </div>
//     <div className="bg-white rounded-2xl rounded-tl-none px-3 py-2 flex gap-1 shadow">
//       {[0, 1, 2].map((i) => (
//         <div
//           key={i}
//           className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"
//           style={{ animationDelay: `${i * 0.2}s` }}
//         />
//       ))}
//     </div>
//   </div>
// );

// // MobileChatDemo component
// const MobileChatDemo = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTyping, setIsTyping] = useState(true);
//   const scrollRef = useRef<HTMLDivElement>(null);

//   // Autoplay conversation
//   useEffect(() => {
//     const stepDelay = CONVERSATION[currentIndex]?.delay ?? 2000;
//     let afterTimeout: number | undefined;

//     const mainTimeout = window.setTimeout(() => {
//       setIsTyping(false);

//       const isLast = currentIndex >= CONVERSATION.length - 1;
//       const gap = isLast ? 4000 : 1000;

//       afterTimeout = window.setTimeout(() => {
//         if (!isLast) {
//           setCurrentIndex((i) => i + 1);
//         } else {
//           setCurrentIndex(0);
//         }
//         setIsTyping(true);
//       }, gap);
//     }, stepDelay);

//     return () => {
//       clearTimeout(mainTimeout);
//       if (afterTimeout) clearTimeout(afterTimeout);
//     };
//   }, [currentIndex]);

//   // Auto-scroll chat
//   useEffect(() => {
//     scrollRef.current?.scrollTo({
//       top: scrollRef.current.scrollHeight,
//       behavior: "smooth",
//     });
//   }, [currentIndex, isTyping]);

//   return (
//     <div className="relative rounded-3xl shadow-xl p-4 bg-gradient-to-br from-gray-900 to-black max-w-[260px] md:max-w-[320px] w-full">
//       {/* Notch */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-20" />
//       <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-gray-100">
//         <div className="absolute inset-0 flex flex-col p-5">
//           <div className="flex items-center justify-between mb-4">
//             <span className="text-gray-900 font-medium text-sm">Ubuncare</span>
//             <span className="text-sm text-gray-400">10:24 AM</span>
//           </div>
//           <div
//             ref={scrollRef}
//             className="flex-1 overflow-y-auto space-y-4 pr-1 scrollbar-hide"
//           >
//             {CONVERSATION.slice(0, currentIndex + 1).map((message, i) => (
//               <ChatBubble key={i} message={message} index={i} />
//             ))}
//             {isTyping && <TypingIndicator />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // CTAButtons component
// const CTAButtons = () => (
//   <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-6">
//     <a
//       href="#join"
//       className="inline-flex items-center justify-center rounded-full bg-purple-600 text-white px-8 py-4 text-base md:text-lg font-semibold shadow-lg hover:bg-purple-700 transition-colors duration-300"
//     >
//       Get Early Access
//     </a>
//     <a
//       href="#how"
//       className="inline-flex items-center justify-center rounded-full border border-purple-600 text-purple-600 px-8 py-4 text-base md:text-lg font-semibold hover:bg-purple-50 transition-colors duration-300"
//     >
//       How it Works
//     </a>
//   </div>
// );

// // HeroPro Component
// const HeroPro: React.FC = () => {
//   return (
// <section
//   aria-labelledby="hero-heading"
//   className="relative overflow-hidden pt-20 md:pt-28 pb-6 md:pb-8 bg-purple-50"
// >

//       <Container className="grid md:grid-cols-2 items-center gap-y-12 md:gap-x-14">
//         {/* Left Content */}
//         <div className="order-1 text-center md:text-left max-w-xl mx-auto md:mx-0">
//           <h1 
//             id="hero-heading"
//             className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6"
//           >
//             Your safe space for{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
//               everyday mental health
//             </span>
//           </h1>
          
//           <p className="text-lg text-gray-600 max-w-md mb-8 leading-relaxed">
//             Check in with Ubuncare, your AI companion, to manage stress,
//             reframe unhelpful thoughts, and feel supported in just a few minutes.
//           </p>

//           <CTAButtons />

//           <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-500">
//             <Brain className="h-4 w-4 text-purple-600 animate-pulse" />
//             <span>End-to-end encrypted • No data stored • 100% private</span>
//           </div>
//         </div>

//         {/* Right Content - Mobile Demo */}
//         <div className="order-2 flex justify-center md:justify-end">
//           <MobileChatDemo />
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default HeroPro;