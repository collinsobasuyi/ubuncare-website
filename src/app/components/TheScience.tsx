

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
  Shield,
  Target,
  Clock,
  Sparkles,
  Zap,
  Brain,
  Users,
  Lock,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                               COLOR MAP SAFE                               */
/* -------------------------------------------------------------------------- */
const colorClasses = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", textDark: "text-blue-700" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", textDark: "text-purple-700" },
  pink: { bg: "bg-pink-50", text: "text-pink-600", textDark: "text-pink-700" },
  green: { bg: "bg-green-50", text: "text-green-600", textDark: "text-green-700" },
};

/* -------------------------------------------------------------------------- */
/*                             WELLBEING DATASETS                             */
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
/*                              HELPER FUNCTION                               */
/* -------------------------------------------------------------------------- */
function calculateImprovement(data: { score: number }[]): string {
  const start = data[0].score;
  const end = data[data.length - 1].score;
  const change = ((end - start) / start) * 100;
  return `↑ ${Math.round(Math.abs(change))}% improvement`;
}

/* -------------------------------------------------------------------------- */
/*                               CHART COMPONENT                              */
/* -------------------------------------------------------------------------- */
interface ChartBoxProps {
  title: string;
  data: { week: string; score: number }[];
  lineColor: string;
  color: keyof typeof colorClasses;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const ChartBox = ({
  title,
  data,
  lineColor,
  color,
  description,
  icon: Icon,
}: ChartBoxProps) => {
  const summary = calculateImprovement(data);
  const c = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-lg ${c.bg}`}>
          <Icon className={`h-5 w-5 ${c.text}`} />
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
/*                              FEATURE PILL BOX                              */
/* -------------------------------------------------------------------------- */
interface FeaturePillProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  color: keyof typeof colorClasses;
}

const FeaturePill = ({ icon: Icon, text, color }: FeaturePillProps) => {
  const c = colorClasses[color];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`flex items-center gap-2 ${c.bg} px-4 py-2 rounded-full`}
    >
      <Icon className={`h-4 w-4 ${c.text}`} />
      <span className={`text-sm font-medium ${c.textDark}`}>{text}</span>
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 MAIN SECTION                               */
/* -------------------------------------------------------------------------- */
export default function TheScience() {
  return (
    <section
      id="the-science"
      className="relative py-24 md:py-32 bg-gradient-to-b from-white via-purple-50/20 to-blue-50/20 overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl" />

      <div className="relative max-w-[100rem] mx-auto px-8 sm:px-10 lg:px-16 xl:px-20">
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2 border border-purple-200 mb-6"
          >
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">
              Support that makes a difference
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Why people find{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Ubuncare helpful
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
            Users report feeling more supported and better equipped to handle life’s challenges through regular reflection and gentle guidance.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <FeaturePill icon={Target} text="Evidence-Informed" color="blue" />
            <FeaturePill icon={Clock} text="Quick Check-ins" color="green" />
            <FeaturePill icon={Shield} text="Privacy First" color="purple" />
            <FeaturePill icon={Heart} text="Compassionate Support" color="pink" />
          </div>
        </div>

        {/* CHARTS */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <ChartBox
            title="Daily Energy"
            data={dataSets.energy}
            lineColor="#3b82f6"
            color="blue"
            description="How energized and motivated users feel throughout their day"
            icon={Zap}
          />
          <ChartBox
            title="Sense of Calm"
            data={dataSets.calm}
            lineColor="#8b5cf6"
            color="purple"
            description="Users’ reported ability to manage stress and find peace"
            icon={Heart}
          />
          <ChartBox
            title="Mental Focus"
            data={dataSets.focus}
            lineColor="#ec4899"
            color="pink"
            description="Ability to concentrate and stay present in activities"
            icon={Target}
          />
          <ChartBox
            title="Overall Wellbeing"
            data={dataSets.overall}
            lineColor="#10b981"
            color="green"
            description="General sense of satisfaction and emotional balance"
            icon={TrendingUp}
          />
        </div>

        {/* BUILT ON SCIENCE */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: Brain,
              title: "Cognitive Science",
              desc: "Grounded in reflection-based behavioral principles.",
            },
            {
              icon: Shield,
              title: "Ethical AI",
              desc: "Designed for fairness, transparency, and empathy.",
            },
            {
              icon: Lock,
              title: "Privacy by Design",
              desc: "Minimal data, full encryption, no ads or profiling.",
            },
            {
              icon: Users,
              title: "Human Oversight",
              desc: "AI guidance reviewed by mental health experts.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-md text-center"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-purple-50 rounded-lg mb-3">
                  <Icon className="h-5 w-5 text-purple-600" />
                </div>
                <h4 className="text-md font-semibold text-gray-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
