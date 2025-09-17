"use client";

import Container from "./Container";
import { Sparkles, TrendingUp, Heart, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ResultsPreview() {
  const stats = [
    {
      icon: TrendingUp,
      value: "62%",
      label: "average symptom reduction",
      delay: 0.1
    },
    {
      icon: Clock,
      value: "3 min",
      label: "daily commitment",
      delay: 0.2
    },
    {
      icon: Heart,
      value: "94%",
      label: "user satisfaction",
      delay: 0.3
    },
    {
      icon: Sparkles,
      value: "78%",
      label: "would recommend",
      delay: 0.4
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 border-y border-gray-200/50">
      <Container className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Real results in just 6 weeks
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Join thousands who have found meaningful improvement with our science-backed approach
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: stat.delay }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 mb-4 group-hover:shadow-md transition-shadow">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mini CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-slate-500">
            Join <span className="font-semibold text-primary">15,000+</span> users already experiencing change
          </p>
        </motion.div>
      </Container>
    </div>
  );
}