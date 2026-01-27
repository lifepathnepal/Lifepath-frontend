"use client";

import { ArrowRight, Brain } from "lucide-react";
import Link from "next/link";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Take the Personality Test",
      description:
        "Answer 40 quick questions about your preferences, strengths, and interests. Discover your unique personality type in just 5 minutes.",
      extraText: (
        <>
          Know your personality already? Skip this step and{" "}
          <Link
            href="/courses"
            className="underline cursor-pointer text-blue-600 hover:text-blue-700"
          >
            explore courses
          </Link>
          .
        </>
      ),
      position: "left",
    },
    {
      number: "02",
      title: "Discover Your Career Matches",
      description:
        "Get instant results showing careers that perfectly align with your personality type. Find paths that match your natural strengths and passions.",
      position: "right",
    },
    {
      number: "03",
      title: "Explore Personalized Courses",
      description:
        "Browse curated course recommendations designed specifically for your career path. Learn the skills that matter most for your future.",
      position: "left",
      indent: true,
    },
    {
      number: "04",
      title: "Start Your Journey",
      description:
        "Enroll in courses, gain practical skills, and get guidance from expert mentors. Land your dream job with confidence and clarity.",
      position: "right",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-16 bg-linear-to-b from-white to-[#F9FAFB]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold  text-zinc-900 mb-4">
            How It Works?
          </h2>
          <p className="text-lg text-zinc-600">
            A simple 4-step process to discover your <br /> ideal career path
            and the right courses for you.
          </p>
        </div>

        {/* Steps in Zigzag Layout */}
        <div className="relative max-w-6xl mx-auto mb-20">
          {steps.map((step, index) => (
            <div key={step.number} className="grid md:grid-cols-2 gap-8 mb-16">
              {step.position === "left" && (
                <>
                  <div
                    className={`flex gap-4 ${step.indent ? "md:ml-16" : ""}`}
                  >
                    <div className="shrink-0 relative">
                      <div className="text-6xl md:text-7xl font-bold text-blue-600">
                        {step.number}
                      </div>
                      {index < steps.length - 1 && (
                        <div className="absolute top-full left-4 md:left-6 w-0.5 h-24 md:h-32 bg-blue-600/30"></div>
                      )}
                    </div>
                    <div className="pt-2 md:pt-4">
                      <h3 className="text-lg md:text-2xl font-bold text-zinc-800 mb-2 md:mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                        {step.description}
                      </p>
                      {step.extraText && (
                        <p className="text-sm md:text-base text-zinc-600 leading-relaxed mt-2">
                          {step.extraText}
                        </p>
                      )}
                    </div>
                  </div>
                  <div></div>
                </>
              )}
              {step.position === "right" && (
                <>
                  <div></div>
                  <div className="flex gap-4">
                    <div className="shrink-0 relative">
                      <div className="text-6xl md:text-7xl font-bold text-blue-600">
                        {step.number}
                      </div>
                      {index < steps.length - 1 && (
                        <div className="absolute top-full left-4 md:left-6 w-0.5 h-24 md:h-32 bg-blue-600/30"></div>
                      )}
                    </div>
                    <div className="pt-2 md:pt-4">
                      <h3 className="text-lg md:text-2xl font-bold text-zinc-800 mb-2 md:mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                        {step.description}
                      </p>
                      {step.extraText && (
                        <p className="text-sm md:text-base text-zinc-600 leading-relaxed mt-2">
                          {step.extraText}
                        </p>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-6xl mx-auto bg-linear-to-r from-black to-blue-600 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Find Your Perfect Career Path?
          </h3>
          <p className="text-base md:text-lg text-blue-100 mb-6">
            Take our free personality test and get instant personalized career
            recommendations.
          </p>
          <Link href="/personality-test">
            <button className="px-10 py-3.5 bg-white text-blue-600 font-semibold rounded-full transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2 w-max mx-auto">
              <Brain size={20} />
              Take Free Personality Test
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
