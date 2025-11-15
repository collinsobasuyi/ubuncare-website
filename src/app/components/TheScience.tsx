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
import {
  Heart,
  TrendingUp,
  Target,
  Sparkles,
  Zap,
} from "lucide-react";
import type { ChartBoxProps } from "@/helpers/Types/ITheScience";
/* -------------------------------------------------------------------------- */
/*                             WELLBEING DATASETS                             */
/* -------------------------------------------------------------------------- */
const dataSets = {
  energy: [
    { week: "Week 1", score: 45 },
    { week: "Week 2", score: 52 },
    { week: "Week 3", score: 58 },
    { week: "Week 4", score: 65 },
    { week: "Week 5", score: 70 },
    { week: "Week 6", score: 76 },
  ],
  calm: [
    { week: "Week 1", score: 38 },
    { week: "Week 2", score: 47 },
    { week: "Week 3", score: 55 },
    { week: "Week 4", score: 62 },
    { week: "Week 5", score: 68 },
    { week: "Week 6", score: 73 },
  ],
  focus: [
    { week: "Week 1", score: 42 },
    { week: "Week 2", score: 50 },
    { week: "Week 3", score: 57 },
    { week: "Week 4", score: 63 },
    { week: "Week 5", score: 69 },
    { week: "Week 6", score: 74 },
  ],
  overall: [
    { week: "Week 1", score: 40 },
    { week: "Week 2", score: 52 },
    { week: "Week 3", score: 61 },
    { week: "Week 4", score: 70 },
    { week: "Week 5", score: 77 },
    { week: "Week 6", score: 83 },
  ],
};

/* -------------------------------------------------------------------------- */
/*                              HELPER FUNCTION                               */
/* -------------------------------------------------------------------------- */
function calculateImprovement(data: { score: number }[]): string {
  const start = data[0].score;
  const end = data[data.length - 1].score;
  const change = ((end - start) / start) * 100;
  return `↑ ${Math.round(Math.abs(change))}% improvement`;
}

/* -------------------------------------------------------------------------- */
/*                               CHART COMPONENT                              */
/* -------------------------------------------------------------------------- */
const ChartBox = ({ title, data, lineColor, description, icon: Icon }: ChartBoxProps) => {
  const summary = calculateImprovement(data);

  return (
    <motion.div
      data-testid={`chart-box-${title.toLowerCase().replace(/\s/g, '-')}`} 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/60 hover:shadow-2xl transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg">
          <Icon className="h-5 w-5 text-teal-600" />
        </div>
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
      </div>

      <p className="text-sm text-gray-600 mb-4 leading-relaxed">{description}</p>

      <div className="h-48 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <YAxis domain={[0, 100]} hide />
            <XAxis dataKey="week" axisLine={false} tickLine={false} tickMargin={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                fontSize: "13px",
              }}
              formatter={(value: number) => [`Wellbeing: ${value}`]}
            />
            <Line
              type="monotone"
              dataKey="score"
              stroke={lineColor}
              strokeWidth={3}
              dot={{ r: 5, fill: lineColor, strokeWidth: 2, stroke: "#fff" }}
              activeDot={{ r: 7, fill: lineColor, stroke: "#fff", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-gray-50 rounded-lg p-3">
        <p className="text-sm font-medium text-gray-700">{summary}</p>
        <p className="text-xs text-gray-500 mt-1">
          Based on anonymized, user-reported wellbeing reflections
        </p>
      </div>
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 MAIN SECTION                               */
/* -------------------------------------------------------------------------- */
export default function TheScience() {
  return (
    <section
      id="the-science"
      data-testid="the-science-section" 
      className="relative py-6 md:py-14 bg-gradient-to-b from-white via-teal-50/30 to-cyan-50/30 overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl" />

      <div className="relative w-full max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-cyan-50 backdrop-blur-sm rounded-2xl px-5 py-2.5 sm:px-8 sm:py-4 border border-teal-200 shadow-sm mb-6"
          >
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600" />
            <span 
              data-testid="the-science-tagline" 
              className="text-base sm:text-lg md:text-xl font-semibold text-teal-700">
              Support that makes a difference
            </span>
          </motion.div>

          <h2 
            data-testid="the-science-title" 
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Why people find{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Ubuncare helpful
            </span>
          </h2>

          <p 
            data-testid="the-science-description" 
            className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Users report feeling more supported and better equipped to handle life’s challenges 
            through regular reflection and gentle guidance.
          </p>
        </div>

        {/* Charts Container */}
        <div data-testid="charts-container" className="grid md:grid-cols-2 gap-6">
          <ChartBox
            title="Daily Energy"
            data={dataSets.energy}
            lineColor="#3b82f6"
            description="How energized and motivated users feel throughout their day"
            icon={Zap}
          />
          <ChartBox
            title="Sense of Calm"
            data={dataSets.calm}
            lineColor="#14b8a6"
            description="Users’ reported ability to manage stress and find peace"
            icon={Heart}
          />
          <ChartBox
            title="Mental Focus"
            data={dataSets.focus}
            lineColor="#06b6d4"
            description="Ability to concentrate and stay present in activities"
            icon={Target}
          />
          <ChartBox
            title="Overall Wellbeing"
            data={dataSets.overall}
            lineColor="#10b981"
            description="General sense of satisfaction and emotional balance"
            icon={TrendingUp}
          />
        </div>
      </div>
    </section>
  );
}