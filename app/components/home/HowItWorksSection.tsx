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
          <h2 className="max-w-5xl mx-auto leading-tight text-3xl md:text-3xl font-semibold text-zinc-900 mt-4">
            We help you discover your <br />
            personality and identify career paths <br /> that align with your
            strengths.
          </h2>
        </div>

        {/* Stepped Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 overflow-hidden">
          {/* Step 1 */}
          <div className="border-b md:border-t md:border-r border-zinc-200 p-4">
            <div className="text-blue-600 text-4xl md:text-5xl font-bold mb-4">
              STEP 01
            </div>
            <div className="text-blue-600 text-xs font-semibold mb-2 flex items-center gap-2">
              <Brain size={14} />
              KNOW YOURSELF
            </div>
            <h3 className="text-2xl font-semibold text-zinc-900 mb-2">
              Before choosing a career, we help you answer:
            </h3>
            <p className="text-zinc-600 text-lg">
              We use science-backed tests to reveal how you think and work best,
              what energizes or drains you, and the strengths and careers that
              fit you.
            </p>
            {/* <p className="text-zinc-800 font-semibold text-lg mt-3">
              “When you understand yourself, confusion disappears.”
            </p> */}
          </div>

          {/* Step 2 */}
          <div className="border-b md:border-t md:border-r border-zinc-200 md:mt-40 p-4">
            <div className="text-blue-600 text-4xl md:text-5xl font-bold mb-4">
              STEP 02
            </div>
            <div className="text-blue-600 text-xs font-semibold mb-2 flex items-center gap-2">
              <Target size={14} />
              CHOOSE THE RIGHT CAREER PATH
            </div>
            <p className="text-2xl font-semibold text-zinc-900 mb-2">
              Based on your personality and interests, we guide you toward
              careers like:
            </p>
            <p className="text-zinc-600 text-lg">
              We guide you toward in-demand roles that match your personality,
              interests, and market reality—no guesswork, just clarity.
            </p>
            {/* <p className="text-zinc-800 font-semibold text-lg mt-3">
              No guesswork. No pressure. Just clarity.
            </p> */}
          </div>

          {/* Step 3 */}
          <div className="border-b md:border-t md:border-r border-zinc-200 md:mt-80 p-4">
            <div className="text-blue-600 text-4xl md:text-5xl font-bold mb-4">
              STEP 03
            </div>
            <div className="text-blue-600 text-xs font-semibold mb-2 flex items-center gap-2">
              <Wrench size={14} />
              PRACTICAL JOB TRAINING
            </div>
            <p className="text-2xl font-semibold text-zinc-900 mb-2">
              Degrees don&apos;t get jobs. Skills do.
            </p>
            <p className="text-zinc-600 text-lg">
              Degrees don&apos;t get jobs—skills do. We focus on real tools,
              real projects, mentorship, and portfolio-building so you finish
              ready.
            </p>
            {/* <p className="text-zinc-800 font-semibold text-lg mt-3">
              You don&apos;t just finish a course. You finish ready.
            </p> */}
          </div>

          {/* Step 4 */}
          <div className=" md:mt-120 border-t border-zinc-200 p-4">
            <div className="text-blue-600 text-4xl md:text-5xl font-bold mb-4">
              STEP 04
            </div>
            <div className="text-blue-600 text-xs font-semibold mb-2 flex items-center gap-2">
              <Rocket size={14} />
              FROM LEARNING TO EARNING
            </div>
            <p className="text-2xl font-semibold text-zinc-900 mb-2">
              Our goal is not certificates. Our goal is confidence + capability.
            </p>
            <p className="text-zinc-600 text-lg">
              We prepare you for freelancing, internships, entry-level roles,
              and career switches—building confidence and long-term growth.
            </p>
            {/* <p className="text-zinc-800 font-semibold text-sm mt-3">
              “We don&apos;t promise shortcuts. We build foundations.”
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
