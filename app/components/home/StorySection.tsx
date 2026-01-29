"use client";

import {
  ArrowRight,
  Users,
  Target,
  Award,
  TrendingUp,
  PlayCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function StorySection() {
  const stats = [
    {
      icon: Users,
      value: "5,000+",
      label: "Students Guided",
    },
    {
      icon: Target,
      value: "98%",
      label: "Career Match Success",
    },
    {
      icon: Award,
      value: "50+",
      label: "Career Paths Mapped",
    },
    {
      icon: TrendingUp,
      value: "92%",
      label: "Student Satisfaction",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-linear-to-b from-white via-blue-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Bento Box Image Grid */}
          <div className="relative">
            {/* Decorative Circle Badge */}
            <div className="absolute -top-4 -right-4 lg:top-6 lg:right-6 z-10 w-24 h-24 lg:w-32 lg:h-32 bg-linear-to-br from-blue-600 to-blue-800 rounded-full flex flex-col items-center justify-center text-white shadow-xl">
              <ArrowRight className="mb-1" size={20} />
              <span className="text-xs font-medium">Start Your</span>
              <span className="text-xs font-bold">Journey</span>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Large top image */}
              <div className="col-span-2 relative h-64 lg:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/image-icons/analytic.png"
                  alt="Student exploring career options"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Bottom two images */}
              <div className="relative h-48 lg:h-64 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/image-icons/dream.png"
                  alt="Career guidance session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 lg:h-64 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/image-icons/both.png"
                  alt="Students succeeding in their careers"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Section Label */}
            <div className="inline-block">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                • Our Story
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight">
              Why choose us for all your{" "}
              <span className="text-blue-600">career guidance</span> needs
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
              We&apos;re dedicated to helping you discover your true potential
              and find a career path you love. Trust us to provide exceptional
              guidance tailored to your unique strengths and aspirations.
            </p>

            {/* Feature List */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded bg-blue-100 flex items-center justify-center shrink-0">
                  <svg
                    className="w-3 h-3 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-zinc-700 font-medium">
                  Science-Based Personality Assessment
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded bg-blue-100 flex items-center justify-center shrink-0">
                  <svg
                    className="w-3 h-3 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-zinc-700 font-medium">
                  Personalized Career Roadmaps
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded bg-blue-100 flex items-center justify-center shrink-0">
                  <svg
                    className="w-3 h-3 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-zinc-700 font-medium">
                  Trusted by Thousands of Nepali Students
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/why-lifepath">
                <button className="px-6 py-3 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 flex items-center gap-2 group">
                  Learn More
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </Link>
              <Link href="/personality-test">
                <button className="px-6 py-3 bg-white hover:bg-zinc-50 text-zinc-900 font-semibold rounded-full border-2 border-zinc-200 transition-all flex items-center gap-2 group">
                  <PlayCircle size={18} className="text-blue-600" />
                  Take The Test
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 lg:mt-28">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon size={24} className="text-blue-600" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
