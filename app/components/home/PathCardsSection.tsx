"use client";

import { Compass, Flag, HelpCircle, Map } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PathCardsSection() {
  const steps = [
    {
      leftTitle: "Confused student",
      rightTitle: "Career clarity & guidance",
      problem: "Too many choices, no clear direction before enrolling.",
      solution: "We start with career clarity and map what fits you.",
      Icon: HelpCircle,
    },
    {
      leftTitle: "Unclear strengths",
      rightTitle: "Personalized direction",
      problem: "Uncertain which path matches strengths and interests.",
      solution: "Personal guidance turns uncertainty into a focused path.",
      Icon: Compass,
    },
    {
      leftTitle: "Random learning",
      rightTitle: "Structured learning roadmap",
      problem: "Courses feel scattered without a plan or outcomes.",
      solution: "A step-by-step roadmap builds skills in the right order.",
      Icon: Map,
    },
    {
      leftTitle: "No next steps",
      rightTitle: "Confident next steps",
      problem: "Unsure how to tranzinc skills into opportunities.",
      solution: "Portfolio, jobs, or freelancing with clear next steps.",
      Icon: Flag,
    },
  ];

  return (
    <section className="w-full px-4 bg-linear-to-b from-blue-50 via-white to-white">
      <div className="max-w-6xl mx-auto py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xl font-semibold text-blue-700">
            Why choose Lifepath?
          </div>

          <h2 className="max-w-5xl mx-auto leading-tight text-3xl md:text-3xl font-semibold text-zinc-900 mt-4">
            From confusion to career clarity
          </h2>
          <p className="text-zinc-800 mt-3 max-w-2xl mx-auto text-base md:text-lg">
            LifePath helps students decide first, then learn with confidence.
          </p>
        </div>

        <div className="relative grid gap-8">
          <div className="absolute inset-0 hidden h-full lg:flex lg:justify-between">
            <Image
              src="/heroImages/problem.jpg"
              alt="Path illustration"
              width={400}
              height={300}
              className="opacity-20"
            />
            <Image
              src="/heroImages/happy.png"
              alt="Path illustration"
              width={400}
              height={300}
              className="opacity-20"
            />
          </div>

          {steps.map((step, index) => {
            // const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative grid gap-6 lg:grid-cols-[1fr_auto_1fr]"
              >
                <div className="text-right">
                  <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
                    Confusion
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-zinc-900">
                    {step.leftTitle}
                  </h3>
                  <p className="mt-2 text-lg font-medium text-zinc-600">{step.problem}</p>
                </div>

                <div className="relative hidden lg:flex items-center justify-center">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-700">
                    <step.Icon size={20} />
                  </span>
                </div>

                <div className="">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    Lifepath guidance
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-zinc-900">
                    {step.rightTitle}
                  </h3>
                  <p className="mt-2 text-lg font-medium text-zinc-600">{step.solution}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
