"use client";

import Container from "./Container";
import { Brain, Lightbulb, Zap, Heart, Shield } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Brain,
    title: "Anxiety Support",
    stat: "62% reduction",
    description: "in anxiety symptoms",
    color: "blue"
  },
  {
    icon: Lightbulb,
    title: "Motivation",
    stat: "3x more likely",
    description: "to complete tasks",
    color: "amber"
  },
  {
    icon: Zap,
    title: "Sleep Support",
    stat: "45% faster",
    description: "sleep onset",
    color: "purple"
  },
  {
    icon: Heart,
    title: "Stress Management",
    stat: "78% report",
    description: "lower stress levels",
    color: "pink"
  }
];

const securityFeatures = [
  "End-to-end encryption",
  "No data stored or shared",
  "Crisis resources always available"
];

export default function AIResults() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real results from real conversations
          </h2>
          <p className="text-lg text-gray-600">
            See how our AI companion helps people make meaningful progress
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${benefit.color}-100 mb-4`}>
                  <Icon className={`h-6 w-6 text-${benefit.color}-600`} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{benefit.stat}</div>
                <div className="text-sm text-gray-600 mb-2">{benefit.description}</div>
                <div className="text-xs font-medium text-gray-500">{benefit.title}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Security Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-6 w-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">Safe & Private Support</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}