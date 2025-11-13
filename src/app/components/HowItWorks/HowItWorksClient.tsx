"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef, useState, type ReactElement } from "react";
import {
    LucideIcon,
    Shield,
    ClipboardList,
    MessageCircle
} from "lucide-react";

// 1. Icon Map (to resolve string ID to component)
const iconMap: { [key: string]: LucideIcon } = {
    ClipboardList: ClipboardList,
    MessageCircle: MessageCircle,
};

// 2. Visual Map (to resolve string ID to JSX)
const visualMap: { [key: string]: ReactElement } = {
    reflection: (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-200/30 to-teal-200/20 rounded-2xl sm:rounded-[2rem]" />
            <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-teal-100 w-full max-w-[240px] sm:max-w-[280px]">
                <div className="text-center mb-3 sm:mb-4">
                    <ClipboardList className="h-6 w-6 sm:h-8 sm:w-8 text-teal-600 mx-auto mb-2 sm:mb-3" />
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-lg">
                        How are you feeling?
                    </h4>
                </div>
                <div className="space-y-2 sm:space-y-3">
                    {["Anxious", "Calm", "Overwhelmed", "Content"].map((mood) => (
                        <div
                            key={mood}
                            data-testid="step-1-mood-item"
                            className="flex items-center gap-2 sm:gap-3 p-1 sm:p-2 rounded-lg hover:bg-teal-50 transition-colors cursor-pointer"
                        >
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-teal-400" />
                            <span className="text-xs sm:text-sm text-gray-700">{mood}</span>
                        </div>
                    ))}
                </div>
                <button
                    data-testid="step-1-button"
                    className="w-full mt-3 sm:mt-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2 rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm shadow-md"
                >
                    Continue Reflection
                </button>
            </div>
        </div>
    ),
    conversation: (
        <div className="relative w-full h-full flex flex-col justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-200/30 to-cyan-200/20 rounded-2xl sm:rounded-[2rem]" />
            <div className="relative z-10 space-y-3 sm:space-y-4 max-w-[220px] sm:max-w-[280px] mx-auto">
                <div
                    data-testid="step-2-message-1"
                    className="flex items-start gap-2 sm:gap-3"
                >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 text-teal-600" />
                    </div>
                    <div className="bg-white rounded-xl sm:rounded-2xl rounded-tl-none px-3 sm:px-4 py-2 sm:py-3 shadow-sm border border-teal-100">
                        <p className="text-xs sm:text-sm text-gray-700">
                            How has your week been so far?
                        </p>
                    </div>
                </div>

                <div
                    data-testid="step-2-message-2"
                    className="flex items-start gap-2 sm:gap-3 justify-end"
                >
                    <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl sm:rounded-2xl rounded-tr-none px-3 sm:px-4 py-2 sm:py-3 shadow-md max-w-[85%]">
                        <p className="text-xs sm:text-sm">A bit stressful, but managing</p>
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full" />
                    </div>
                </div>

                <div
                    data-testid="step-2-message-3"
                    className="flex items-start gap-2 sm:gap-3"
                >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 text-teal-600" />
                    </div>
                    <div className="bg-white rounded-xl sm:rounded-2xl rounded-tl-none px-3 sm:px-4 py-2 sm:py-3 shadow-sm border border-teal-100">
                        <p className="text-xs sm:text-sm text-gray-700">
                            That sounds challenging. What&apos;s been most helpful when you feel stressed?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    ),
};


interface StepData {
    title: string;
    description: string;
    iconName: 'ClipboardList' | 'MessageCircle'; // Use string ID
    color: string;
    bgColor: string;
    features: string[];
    visualId: 'reflection' | 'conversation'; // Use string ID
}

interface HowItWorksClientProps {
    steps: StepData[];
}

export function HowItWorksClient({ steps }: HowItWorksClientProps) {
    const ref = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) controls.start("visible");
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
            observer.disconnect();
            window.removeEventListener("resize", checkMobile);
        };
    }, [controls]);

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: isMobile ? i * 0.1 : i * 0.2,
                ease: [0.25, 0.1, 0.25, 1],
            },
        }),
    };

    const scaleIn: Variants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: (i = 0) => ({
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: isMobile ? i * 0.1 : i * 0.2,
                ease: "easeOut",
            },
        }),
    };

    return (
        <div ref={ref} className="space-y-16 lg:space-y-20">
            {steps.map((step, index) => {
                const Icon = iconMap[step.iconName] || Shield;
                const VisualElement = visualMap[step.visualId];

                const textOrderLg = index % 2 === 0 ? "lg:order-1" : "lg:order-2";
                const visualOrderLg = index % 2 === 0 ? "lg:order-2" : "lg:order-1";

                return (
                    <motion.div
                        key={index}
                        data-testid={`how-it-works-step-${index + 1}`}
                        className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center"
                        initial="hidden"
                        animate={controls}
                        variants={fadeUp}
                        custom={0.5 + index * 0.2}
                    >
                        <div className={`order-1 ${textOrderLg} space-y-4 sm:space-y-5`}>
                            <motion.div
                                variants={fadeUp}
                                custom={0.7 + index * 0.2}
                                className="flex items-center gap-3 sm:gap-4"
                            >
                                <div className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.color} shadow-md`}>
                                    <Icon className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                                </div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                                    {step.title}
                                </h3>
                            </motion.div>

                            <motion.p
                                variants={fadeUp}
                                custom={0.8 + index * 0.2}
                                className="text-base sm:text-lg text-gray-600 leading-relaxed"
                            >
                                {step.description}
                            </motion.p>

                            <motion.div
                                variants={fadeUp}
                                custom={0.9 + index * 0.2}
                                className="space-y-2 sm:space-y-3"
                            >
                                {step.features.map((feature, i) => (
                                    <div
                                        key={i}
                                        data-testid={`step-${index + 1}-feature-${i + 1}`}
                                        className="flex items-center gap-2 sm:gap-3 text-gray-700"
                                    >
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-500 rounded-full flex-shrink-0" />
                                        <span className="text-sm sm:text-base font-medium">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>

                            <motion.div
                                variants={fadeUp}
                                custom={1.0 + index * 0.2}
                                className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4"
                            >
                                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600" />
                                <span className="text-xs sm:text-sm text-gray-600">
                                    Always encrypted and private
                                </span>
                            </motion.div>
                        </div>

                        <div className={`order-2 ${visualOrderLg} flex justify-center w-full`}>
                            <motion.div
                                variants={scaleIn}
                                custom={0.6 + index * 0.2}
                                className="relative group w-full max-w-xs sm:max-w-sm"
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10 rounded-2xl sm:rounded-[2.5rem] blur-lg sm:blur-xl group-hover:opacity-20 transition-opacity duration-500`}
                                />
                                <div
                                    className={`relative bg-gradient-to-br ${step.bgColor} rounded-2xl sm:rounded-[2.5rem] border-2 border-white/50 shadow-xl group-hover:scale-105 transition-all duration-500 overflow-hidden h-80 sm:h-96`}
                                >
                                    {VisualElement}
                                </div>
                                <div
                                    className={`absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                                >
                                    <span className="text-white font-bold text-sm sm:text-lg">
                                        {index + 1}
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}