"use client";

import { Brain, Compass, Wrench } from "lucide-react";

export default function StorySection() {
  const pillars = [
    {
      title: "Personality‑First",
      description: "Decisions based on cognitive preferences.",
      icon: Brain,
    },
    {
      title: "Clarity‑Driven",
      description: "Fewer options, better focus.",
      icon: Compass,
    },
    {
      title: "Actionable",
      description: "Real roles, skills, and next steps.",
      icon: Wrench,
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-linear-to-b from-blue-50/40 via-white to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-blue-500/80">
            The Lifepath Solution
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-zinc-900 mt-4">
            Guidance should start with who you are — not trends.
          </h2>
          <p className="text-sm md:text-base text-zinc-600 mt-4">
            Lifepath uses the MBTI personality framework combined with
            real‑world career mapping to help you understand how you think,
            work, and grow — then align that with careers that truly fit.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl bg-white p-6 border border-blue-100 hover:border-blue-200 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 ring-1 ring-blue-100 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">
                  {pillar.title}
                </h3>
                <p className="text-sm text-zinc-600 mt-2">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
