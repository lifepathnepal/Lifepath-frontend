"use client";

import Link from "next/link";
import {
  Brain,
  Target,
  Users,
  Sparkles,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import NewsletterCTA from "../components/home/NewsletterCTA";

export default function WhyLifePathPage() {
  const benefits = [
    {
      icon: Brain,
      title: "Science-Based Personality Assessment",
      description:
        "Our 40-question MBTI-based test provides accurate insights into your personality type, helping you understand your natural strengths and preferences.",
    },
    {
      icon: Target,
      title: "Personalized Career Guidance",
      description:
        "Get career recommendations tailored specifically to your personality type, ensuring you pursue paths where you'll naturally excel and find fulfillment.",
    },
    {
      icon: Users,
      title: "Expert-Curated Courses",
      description:
        "Access carefully selected courses designed to build the exact skills you need for your recommended career paths, saving you time and confusion.",
    },
    {
      icon: Sparkles,
      title: "100% Free & Instant Results",
      description:
        "No hidden costs, no waiting. Take the test and get immediate, actionable insights to start your career journey right away.",
    },
  ];

  const differentiators = [
    "Personality-first approach to career planning",
    "Tailored for Nepali students and job market",
    "Comprehensive course recommendations",
    "Real job opportunities matching your profile",
    "Expert mentorship and guidance",
    "Active community of like-minded learners",
  ];

  const stats = [
    { number: "10,000+", label: "Students Guided" },
    { number: "16", label: "Personality Types" },
    { number: "50+", label: "Career Paths" },
    { number: "95%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center pb-16 px-4 text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/heroImages/life.png')" }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/90 to-blue-700/80" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Career Clarity Through <br />
            <span className="text-blue-300">Personality Understanding</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            We believe every student deserves a clear path to their dream
            career. That&apos;s why we combine personality science with career
            guidance to help you make confident decisions about your future.
          </p>
          <Link href="/personality-test">
            <button className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-full transition-all shadow-lg hover:shadow-xl cursor-pointer inline-flex items-center gap-2">
              Discover Your Path
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white border-y border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-zinc-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              We go beyond generic career advice to provide personalized
              guidance based on who you truly are.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-8 rounded-2xl border border-zinc-200 hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-20 px-4 bg-linear-to-b from-blue-50/30 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6">
                A Complete Career Solution
              </h2>
              <p className="text-lg text-zinc-600 mb-8">
                Unlike traditional career counseling or generic course
                platforms, LifePath combines personality assessment, career
                matching, and skill development in one seamless journey.
              </p>
              <div className="space-y-4">
                {differentiators.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle
                      className="text-blue-600 shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-linear-to-br from-blue-100 to-blue-50 rounded-3xl p-12 text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                Your Success is Our Mission
              </h3>
              <p className="text-zinc-600 mb-6">
                We&apos;re committed to helping every student find their perfect
                career path through personalized guidance and continuous
                support.
              </p>
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold">
                <span>Join 10,000+ students</span>
                <ArrowRight size={18} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <NewsletterCTA
        imageSrc="/heroImages/woman2.png"
        title="Ready to Find Your Path?"
        description="Take our free personality test and discover the career path that's perfect for you. It only takes 5 minutes."
        btnText="Take the Free Test"
      />
    </div>
  );
}
