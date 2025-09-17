"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import Container from "./Container";
import {
  Brain,
  Heart,
  TrendingUp,
  Shield,
  Target,
  Clock,
  LucideIcon,
} from "lucide-react";

// Data sets
const dataSets = {
  phq9: [
    { week: "Week 0", score: 15 },
    { week: "Week 2", score: 12 },
    { week: "Week 4", score: 9 },
    { week: "Week 6", score: 7 },
  ],
  gad7: [
    { week: "Week 0", score: 13 },
    { week: "Week 2", score: 10 },
    { week: "Week 4", score: 8 },
    { week: "Week 6", score: 6 },
  ],
  pss10: [
    { week: "Week 0", score: 20 },
    { week: "Week 2", score: 16 },
    { week: "Week 4", score: 13 },
    { week: "Week 6", score: 10 },
  ],
  who5: [
    { week: "Week 0", score: 30 },
    { week: "Week 2", score: 45 },
    { week: "Week 4", score: 60 },
    { week: "Week 6", score: 72 },
  ],
};

// Helper for % improvement/reduction
function calculateImprovement(
  data: { score: number }[],
  isPositive?: boolean
) {
  const start = data[0].score;
  const end = data[data.length - 1].score;
  const change = ((end - start) / start) * 100;
  return isPositive
    ? `↑ ${Math.round(Math.abs(change))}% improvement`
    : `↓ ${Math.round(Math.abs(change))}% reduction`;
}

// Chart Box Component
const ChartBox = ({
  title,
  data,
  lineColor,
  iconColor,
  isPositive = false,
  description,
}: {
  title: string;
  data: { week: string; score: number }[];
  lineColor: string;
  iconColor: string; // e.g. "blue", "green"
  isPositive?: boolean;
  description: string;
}) => {
  const summary = calculateImprovement(data, isPositive);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      {/* Icon + Title */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-lg bg-${iconColor}-50`}>
          <TrendingUp className={`h-5 w-5 text-${iconColor}-600`} />
        </div>
        <h4 className="text-lg font-semibold text-textMain">{title}</h4>
      </div>

      {/* Description */}
      <p className="text-sm text-textBody mb-4">{description}</p>

      {/* Chart */}
      <div className="h-48 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <YAxis
              domain={["auto", "auto"]}
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              width={40}
              tick={{ fontSize: 12 }}
            />
            <XAxis
              dataKey="week"
              axisLine={false}
              tickLine={false}
              tickMargin={12}
              tick={{ fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                fontSize: "14px",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
              }}
              formatter={(value, _name, props) => [
                `Score: ${value}`,
                props.payload?.week,
              ]}
            />
            <Line
              type="monotone"
              dataKey="score"
              stroke={lineColor}
              strokeWidth={3}
              dot={{ r: 5, fill: lineColor, strokeWidth: 2, stroke: "#fff" }}
              activeDot={{ r: 7, fill: lineColor, stroke: "#fff", strokeWidth: 2 }}
              animationDuration={1200}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Summary */}
      <div className="bg-gray-50 rounded-lg p-3">
        <p className="text-sm font-medium text-gray-700">{summary}</p>
        <p className="text-xs text-gray-500 mt-1">
          {isPositive
            ? "Higher scores indicate better outcomes"
            : "Lower scores indicate better outcomes"}
        </p>
      </div>
    </motion.div>
  );
};

// Feature Pills
const FeaturePill = ({
  icon: Icon,
  text,
  color,
}: {
  icon: LucideIcon;
  text: string;
  color: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    className={`flex items-center gap-2 bg-${color}-50 px-4 py-2 rounded-full`}
  >
    <Icon className={`h-4 w-4 text-${color}-600`} />
    <span className={`text-sm font-medium text-${color}-700`}>{text}</span>
  </motion.div>
);

export default function WhyItWorks() {
  return (
    <section
      id="why-it-works"
      className="py-16 md:py-24 bg-gradient-to-b from-blue-50/30 to-white"
    >
      <Container>
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-textMain mb-6"
          >
            Why it{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Works
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-textBody leading-relaxed mb-8"
          >
            Ubuncare uses clinically-validated frameworks proven to reduce
            symptoms of anxiety, depression, and stress — while improving
            wellbeing.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <FeaturePill icon={Target} text="Clinically Validated" color="blue" />
            <FeaturePill icon={Clock} text="3-Minute Sessions" color="green" />
            <FeaturePill icon={Shield} text="Privacy First" color="purple" />
            <FeaturePill icon={Heart} text="Human-Centered" color="pink" />
          </motion.div>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ChartBox
            title="Depression (PHQ-9)"
            data={dataSets.phq9}
            lineColor="#3b82f6"
            iconColor="blue"
            description="Measures severity of depressive symptoms over time"
          />
          <ChartBox
            title="Anxiety (GAD-7)"
            data={dataSets.gad7}
            lineColor="#8b5cf6"
            iconColor="purple"
            description="Tracks anxiety symptoms and treatment progress"
          />
          <ChartBox
            title="Stress (PSS-10)"
            data={dataSets.pss10}
            lineColor="#ec4899"
            iconColor="pink"
            description="Monitors perceived stress levels and coping effectiveness"
          />
          <ChartBox
            title="Wellbeing (WHO-5)"
            data={dataSets.who5}
            lineColor="#10b981"
            iconColor="green"
            isPositive
            description="Measures overall mental wellbeing and quality of life"
          />
        </div>

        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Real Results in 6 Weeks</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold mb-2">62%</div>
              <p className="text-blue-100 text-sm">Average symptom reduction</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">78%</div>
              <p className="text-blue-100 text-sm">User satisfaction rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">94%</div>
              <p className="text-blue-100 text-sm">Would recommend to others</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
