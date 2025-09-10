"use client";

import { useRef, useState } from "react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { Smile, Brain, ListChecks, RefreshCw, ArrowLeft, ArrowRight } from "lucide-react";

type Step = {
  key: string;
  title: string;
  blurb: string;
  points: string[];
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  bg: string;      // pastel card bg
  ring: string;    // selected ring color
  badge: string;   // number badge bg
};

const STEPS: Step[] = [
  {
    key: "checkin",
    title: "Check in",
    blurb: "Quick mood check with an optional note.",
    points: ["Mood scale (10s)", "Kind tone, no streak shaming", "Sets up the session"],
    Icon: Smile,
    bg: "bg-[#E8F3FF]", ring: "ring-[#2D9CDB]", badge: "bg-[#2D9CDB]",
  },
  {
    key: "reframe",
    title: "Reframe",
    blurb: "Gentle prompts to test and reframe a thought.",
    points: ["Evidence for / against", "Balanced alternative", "Human examples"],
    Icon: Brain,
    bg: "bg-[#F3E8FF]", ring: "ring-[#7C3AED]", badge: "bg-[#7C3AED]",
  },
  {
    key: "action",
    title: "Tiny action",
    blurb: "Pick a 5-minute starter with an if-then plan.",
    points: ["Smallest next step", "If-then plan for stalls", "Clear stop or +1 min"],
    Icon: ListChecks,
    bg: "bg-[#E8FFF7]", ring: "ring-[#10B981]", badge: "bg-[#10B981]",
  },
  {
    key: "reflect",
    title: "Reflect",
    blurb: "Notice a small shift; keep what worked.",
    points: ["Before → after quick check", "1-line takeaway", "Build confidence"],
    Icon: RefreshCw,
    bg: "bg-[#FFF4E5]", ring: "ring-[#F59E0B]", badge: "bg-[#F59E0B]",
  },
];

export default function Journey() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const go = (idx: number) => {
    const next = Math.min(Math.max(idx, 0), STEPS.length - 1);
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(active + 1); }
    if (e.key === "ArrowLeft")  { e.preventDefault(); go(active - 1); }
    if (e.key === "Home")       { e.preventDefault(); go(0); }
    if (e.key === "End")        { e.preventDefault(); go(STEPS.length - 1); }
  };

  return (
    <section id="how" className="py-12 md:py-16 bg-bgSoft">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Clarity in four tiny steps"
          subtitle="Useful even on tough days."
        />

        {/* Color cards (tabs) */}
        <div
          role="tablist"
          aria-label="Journey steps"
          onKeyDown={onKeyDown}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {STEPS.map((s, i) => {
            const selected = i === active;
            const Icon = s.Icon;
            return (
              <button
                key={s.key}
                ref={(el) => (tabRefs.current[i] = el)}
                type="button"
                role="tab"
                id={`journey-tab-${s.key}`}
                aria-selected={selected}
                aria-controls={`journey-panel-${s.key}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={[
                  "group relative rounded-2xl border p-4 sm:p-5 text-left transition",
                  s.bg,
                  selected ? `ring-2 ${s.ring} ring-offset-0` : "hover:brightness-[.98]",
                ].join(" ")}
              >
                <div className="flex items-start gap-3">
                  <div className={`h-8 w-8 grid place-content-center rounded-full text-white font-semibold ${s.badge}`}>
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-textMain">{s.title}</h3>
                    <p className="mt-1 text-sm md:text-base text-textBody">{s.blurb}</p>
                  </div>
                </div>
                <Icon className="absolute right-3 top-3 h-5 w-5 text-textBody/70" aria-hidden="true" />
              </button>
            );
          })}
        </div>

        {/* Detail panel (tabpanel) */}
        <div className="mt-6">
          {STEPS.map((s, i) => {
            const selected = i === active;
            return (
              <div
                key={s.key}
                role="tabpanel"
                id={`journey-panel-${s.key}`}
                aria-labelledby={`journey-tab-${s.key}`}
                hidden={!selected}
                className="rounded-2xl bg-white p-6 md:p-7 shadow"
              >
                <h3 className="font-semibold text-textMain">{s.title}</h3>
                <p className="mt-2 text-base md:text-lg text-textBody">{s.blurb}</p>
                <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm md:text-base text-textBody">
                  {s.points.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary-strong" aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => go(active - 1)}
                    disabled={active === 0}
                    className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm hover:bg-bgSoft disabled:opacity-40"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => go(active + 1)}
                    disabled={active === STEPS.length - 1}
                    className="ml-auto inline-flex items-center gap-2 rounded-full bg-primary-strong text-white px-4 py-2 text-sm font-semibold shadow hover:opacity-90 disabled:opacity-40"
                  >
                    Next
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
