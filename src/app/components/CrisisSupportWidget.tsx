"use client";

import { useEffect, useState } from "react";
import Container from "./Container";
import { AlertTriangle } from "lucide-react";

type Hotline = { country: string; desc: string; numbers: string[]; url?: string };

const HOTLINES: Hotline[] = [
  { country: "US", desc: "988 Suicide & Crisis Lifeline", numbers: ["988"], url: "https://988lifeline.org" },
  { country: "UK", desc: "Samaritans", numbers: ["116 123"], url: "https://www.samaritans.org" },
  { country: "EU", desc: "Emergency number", numbers: ["112"] },
  { country: "CA", desc: "Talk Suicide Canada", numbers: ["1-833-456-4566"] },
  { country: "AU", desc: "Lifeline", numbers: ["13 11 14"] },
  { country: "NG", desc: "Nigeria Suicide Line (Lifeline Nigeria)", numbers: ["+234 806 210 6493"] },
  { country: "IN", desc: "AASRA", numbers: ["+91 98204 66726"] },
];

const GUESS_ORDER = (lang: string) => {
  if (lang.includes("-US")) return ["US","CA","UK","EU"];
  if (lang.includes("-GB")) return ["UK","EU","US"];
  if (lang.includes("-NG")) return ["NG","UK","US","EU"];
  if (lang.includes("-IN")) return ["IN","US","EU","UK"];
  if (lang.includes("-AU")) return ["AU","US","EU","UK"];
  return ["US","UK","EU"];
};

export default function CrisisSupportWidget() {
  const [country, setCountry] = useState<string>("US");

  useEffect(() => {
    const lang = navigator.language || "en-US";
    const order = GUESS_ORDER(lang);
    for (const c of order) {
      if (HOTLINES.find(h => h.country === c)) { setCountry(c); break; }
    }
  }, []);

  const hotline = HOTLINES.find(h => h.country === country) ?? HOTLINES[0];

  return (
    <section className="py-12 md:py-16 bg-white">
      <Container className="rounded-2xl border p-6 shadow">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-textBody mt-[2px]" aria-hidden="true" />
            <div>
              <h3 className="font-semibold text-textMain">Need immediate help?</h3>
              <p className="text-sm md:text-base text-textBody">
                If you’re in crisis or thinking about harming yourself, please contact your local support now.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="country" className="sr-only">Select your country</label>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="rounded-full border px-3 py-2 text-sm"
            >
              {HOTLINES.map(h => <option key={h.country} value={h.country}>{h.country}</option>)}
            </select>
          </div>
        </div>

        <div className="mt-4 rounded-xl bg-bgSoft p-4">
          <p className="text-sm md:text-base">
            <span className="font-semibold">{hotline.country}</span>: {hotline.desc}.{" "}
            {hotline.url ? <a className="underline" href={hotline.url} target="_blank" rel="noreferrer">Learn more</a> : null}
          </p>
          <p className="mt-1 text-sm md:text-base">Numbers: {hotline.numbers.join(", ")}</p>
          <p className="mt-2 text-xs text-textBody">In an emergency, call your local emergency number (e.g., 911/999/112).</p>
        </div>
      </Container>
    </section>
  );
}
