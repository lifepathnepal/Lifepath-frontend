"use client";

import { Brain, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen w-full mx-auto overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto pt-16 md:pt-24">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
              <Sparkles size={16} className="text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">
                Find Your Perfect Career Path
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-linear-to-r from-black to-blue-600">
              Find the right career path. Not just another course.
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl font-medium text-zinc-600 leading-relaxed">
              Lifepath helps students choose, learn, and grow in high-demand
              skills like Web Development, Graphic Design, and more — with real
              guidance, not confusion.
            </p>
            {/* <p className="text-lg md:text-xl font-medium text-zinc-600 leading-relaxed">
              Take our free personality test and discover careers that match who
              you truly are. Get personalized course recommendations to start
              your journey today.
            </p> */}
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/personality-test">
                <button className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-blue-600 to-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 flex items-center justify-center gap-2 cursor-pointer group">
                  Discover Your Career Path
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </Link>
              <Link href="#how-it-works">
                <button className="w-full sm:w-auto px-8 py-4 border-2 border-zinc-300 text-zinc-700 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 font-semibold rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer">
                  Talk to a Mentor
                </button>
              </Link>
            </div>
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 py-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    Free starter insights
                  </p>
                  <p className="text-xs text-zinc-500">No credit card needed</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Brain size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    40 Questions
                  </p>
                  <p className="text-xs text-zinc-500">Takes ~8-10 minutes</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Sparkles size={18} className="text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    Instant Results
                  </p>
                  <p className="text-xs text-zinc-500">With career matches</p>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            {/* <div className="pt-4">
              <p className="text-sm font-medium text-zinc-700 mb-2">
                Trusted by students from:
              </p>
              <div className="flex items-center gap-4 text-xs text-zinc-400 font-medium">
                <span>Kathmandu University</span>
                <span className="text-blue-600">•</span>
                <span>Tribhuvan University</span>
                <span className="text-blue-600">•</span>
                <span>Pokhara University</span>
              </div>
            </div> */}
          </div>

          {/* Right Content - Image/Visual */}
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-100 via-purple-100 to-blue-100 rounded-3xl opacity-40 blur-3xl"></div>

            {/* Main Image Container */}
            <div className="relative bg-white rounded-3xl border border-zinc-200">
              {/* Stats Card Overlay */}
              <div className="absolute -top-4 -right-4 bg-linear-to-tr from-zinc-700 to-gray-500 rounded-2xl shadow-lg p-4 border border-zinc-200 z-10">
                <p className="text-xs text-zinc-50 mb-1">Success Rate</p>
                <p className="text-4xl font-bold text-blue-50">95%</p>
              </div>

              {/* Image */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/heroImages/yess.png"
                  alt="Find Your Career Path"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover "
                  priority
                />
              </div>

              {/* Bottom Stats */}
              {/* <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-200">
                <div className="text-center">
                  <p className="text-2xl font-bold text-zinc-900">16</p>
                  <p className="text-xs text-zinc-500">Personality Types</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-zinc-900">50+</p>
                  <p className="text-xs text-zinc-500">Career Paths</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-zinc-900">20+</p>
                  <p className="text-xs text-zinc-500">Courses</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
