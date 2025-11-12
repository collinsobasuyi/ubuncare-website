"use client";

import { MessageCircleHeart, ArrowRight } from "lucide-react";

export function HeroProClient() {

    return (
        <div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 mb-8 sm:mb-10"
            data-testid="hero-cta-container"
        >
            {/* 1. Start a Gentle Conversation CTA (Future Modal Trigger) */}
            <a
                href="#waitlist"
                className="inline-flex items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 text-base sm:text-lg lg:text-[20px] font-semibold shadow-lg hover:scale-105 transition-transform w-full sm:w-auto text-center"
                data-testid="start-conversation-cta"
            >
                <MessageCircleHeart className="h-5 w-5 sm:h-6 sm:w-6" />
                Start a Gentle Conversation
            </a>

            {/* 2. Learn How It Works Link (Anchor Link) */}
            <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl text-teal-700 hover:text-teal-900 text-base sm:text-lg lg:text-[20px] font-semibold w-full sm:w-auto justify-center lg:justify-start mt-2 sm:mt-0"
                data-testid="learn-how-it-works-link"
            >
                Learn How It Works
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
        </div>
    );
}