"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function StorySection() {
  const problemsRef = useRef<HTMLDivElement | null>(null);
  const solutionsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!problemsRef.current || !solutionsRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(solutionsRef.current, { x: 30, opacity: 0 });
      gsap.set(problemsRef.current, { opacity: 1 });

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.to(problemsRef.current, { opacity: 0.35, duration: 0.6 })
        .to(solutionsRef.current, { x: 0, opacity: 1, duration: 0.7 }, "-=0.1")
        .to(problemsRef.current, { opacity: 1, duration: 0.4 }, "+=0.15");
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative py-20 md:py-28 bg-linear-to-b from-blue-50/50 via-white to-white overflow-hidden">
      <div className="absolute -top-20 -left-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold text-blue-700">
            Lifepath clarity framework
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-semibold leading-tight text-transparent bg-clip-text bg-linear-to-r from-black to-blue-600">
            Clarity starts when problems are named — and solved.
          </h2>
          <p className="text-sm md:text-base text-zinc-600 mt-4">
            A career path should feel focused, guided, and job-ready. Here is
            what learners face today — and how Lifepath fixes it.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div
            ref={problemsRef}
            className="relative overflow-hidden rounded-3xl border border-red-200 bg-linear-to-br from-red-50/80 via-white to-white p-6 md:p-8"
          >
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-red-100/60 blur-2xl" />
            <div className="relative flex items-center gap-3 text-red-700 font-semibold mb-4">
              <div className="h-9 w-9 rounded-full bg-red-100 text-red-700 flex items-center justify-center">
                ❌
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide">Problems</p>
                <p className="text-xs text-red-600/80">What learners face</p>
              </div>
            </div>
            <ul className="space-y-3 text-sm md:text-base text-red-900/80 relative">
              <li className="rounded-2xl border border-red-200 bg-white/80 px-4 py-3">
                Too many courses, no direction
              </li>
              <li className="rounded-2xl border border-red-200 bg-white/80 px-4 py-3">
                No clarity before enrolling
              </li>
              <li className="rounded-2xl border border-red-200 bg-white/80 px-4 py-3">
                Learn skills but don’t know what to do next
              </li>
              <li className="rounded-2xl border border-red-200 bg-white/80 px-4 py-3">
                No real guidance or roadmap
              </li>
            </ul>
          </div>

          <div
            ref={solutionsRef}
            className="relative overflow-hidden rounded-3xl border border-green-200 bg-linear-to-br from-green-50/80 via-white to-white p-6 md:p-8 "
          >
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-green-100/60 blur-2xl" />
            <div className="relative flex items-center gap-3 text-green-700 font-semibold mb-4">
              <div className="h-9 w-9 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                ✅
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide">
                  Lifepath Solution
                </p>
                <p className="text-xs text-green-600/80">Confident direction</p>
              </div>
            </div>
            <ul className="space-y-3 text-sm md:text-base text-green-900/80 relative">
              <li className="rounded-2xl border border-green-200 bg-white/80 px-4 py-3">
                Career-first approach
              </li>
              <li className="rounded-2xl border border-green-200 bg-white/80 px-4 py-3">
                Skill roadmap before learning
              </li>
              <li className="rounded-2xl border border-green-200 bg-white/80 px-4 py-3">
                Mentorship & direction
              </li>
              <li className="rounded-2xl border border-green-200 bg-white/80 px-4 py-3">
                Practical, job-ready learning
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
