"use client";

import { Brain, Target, Wrench, Rocket } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="pt-10 md:pt-8 pb-16 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xl font-semibold text-blue-700">
            How LifePath Works
          </div>
          <h2 className="max-w-5xl mx-auto leading-tight text-3xl md:text-3xl font-semibold text-slate-900 mt-4">
            We help you discover your <br />
            personality and identify career paths <br /> that align with your
            strengths.
          </h2>
        </div>

        {/* Stepped Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 overflow-hidden">
          {/* Step 1 */}
          <div className="border-b md:border-b-0 md:border-r border-slate-200">
            <div className="text-blue-600 text-4xl md:text-5xl font-bold mb-4">
              01
            </div>
            <div className="text-blue-600 text-xs font-semibold mb-2 flex items-center gap-2">
              <Brain size={14} />
              STEP 1 — KNOW YOURSELF
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Before choosing a career, we help you answer:
            </h3>
            <p className="text-slate-600 text-sm">
              We use science‑backed tests to reveal how you think and work best,
              what energizes or drains you, and the strengths and careers that
              fit you.
            </p>
            <p className="text-slate-800 font-semibold text-sm mt-3">
              “When you understand yourself, confusion disappears.”
            </p>
          </div>

          {/* Step 2 */}
          <div className="border-b md:border-b-0 md:border-r border-slate-200 md:mt-40">
            <div className="text-blue-600 text-4xl md:text-5xl font-bold mb-4">
              02
            </div>
            <div className="text-blue-600 text-xs font-semibold mb-2 flex items-center gap-2">
              <Target size={14} />
              STEP 2 — CHOOSE THE RIGHT CAREER PATH
            </div>
            <p className="text-xl font-semibold text-slate-900 mb-2">
              Based on your personality and interests, we guide you toward
              careers like:
            </p>
            <p className="text-slate-600 text-sm">
              We guide you toward in‑demand roles that match your personality,
              interests, and market reality—no guesswork, just clarity.
            </p>
            <p className="text-slate-800 font-semibold text-sm mt-3">
              No guesswork. No pressure. Just clarity.
            </p>
          </div>

          {/* Step 3 */}
          <div className="border-b md:border-b-0 md:border-r border-slate-200 md:mt-80">
            <div className="text-blue-600 text-4xl md:text-5xl font-bold mb-4">
              03
            </div>
            <div className="text-blue-600 text-xs font-semibold mb-2 flex items-center gap-2">
              <Wrench size={14} />
              STEP 3 — PRACTICAL JOB TRAINING (WHAT REALLY MATTERS)
            </div>
            <p className="text-xl font-semibold text-slate-900 mb-2">
              Degrees don’t get jobs. Skills do.
            </p>
            <p className="text-xl font-semibold text-slate-900 mb-2 mt-3">
              Lifepath training focuses on:
            </p>
            <p className="text-slate-600 text-sm">
              Degrees don’t get jobs—skills do. We focus on real tools, real
              projects, mentorship, and portfolio‑building so you finish ready.
            </p>
            <p className="text-slate-800 font-semibold text-sm mt-3">
              You don’t just finish a course. You finish ready.
            </p>
          </div>

          {/* Step 4 */}
          <div className=" md:mt-120">
            <div className="text-blue-600 text-4xl md:text-5xl font-bold mb-4">
              04
            </div>
            <div className="text-blue-600 text-xs font-semibold mb-2 flex items-center gap-2">
              <Rocket size={14} />
              STEP 4 — FROM LEARNING TO EARNING
            </div>
            <p className="text-xl font-semibold text-slate-900 mb-2">
              Our goal is not certificates. Our goal is confidence + capability.
            </p>
            <p className="text-slate-600 text-sm mt-3">
              Lifepath prepares you for:
            </p>
            <p className="text-slate-600 text-sm">
              We prepare you for freelancing, internships, entry‑level roles,
              and career switches—building confidence and long‑term growth.
            </p>
            <p className="text-slate-800 font-semibold text-sm mt-3">
              “We don’t promise shortcuts. We build foundations.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
