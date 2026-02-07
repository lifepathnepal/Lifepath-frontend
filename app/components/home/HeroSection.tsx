"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] w-full mx-auto px-4 md:px-0 pt-18 md:pt-0 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto md:h-[90vh] flex md:items-center justify-start  md:pt-16">
        <div className="flex justify-center md:items-center md:mb-16">
          {/* Left Content */}
          <div className="space-y-4 z-10 max-w-3xl">
            {/* Main Heading */}
            <div className="inline-flex items-start gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xl font-semibold text-blue-700">
              Stuck in Career Confusion?{" "}
            </div>
            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-zinc-900">
              Discover Your Fit, Skill Up Fast, and Start Earning, No Useless
              Degrees.
            </h1>
            {/* <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading- font-montserrat text-zinc-900">
              Discover Yourself. <br />
              Train Smart. <br />
              Build Your Future.
            </h1> */}

            {/* Subheading */}
            <p className="text-sm md:text-lg font-medium text-black leading-relaxed">
              We help you understand yourself, choose a career that fits your
              personality, and get job-ready skills that companies actually
              need.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/personality-test">
                <button className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-blue-600 to-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 flex items-center justify-center gap-2 cursor-pointer group">
                  Discover Your Career Path
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </Link>
              <Link href="#how-it-works">
                <button className="w-full sm:w-auto px-8 py-4 border-2 border-zinc-300 text-zinc-700 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 font-semibold rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer">
                  Explore Job Training
                </button>
              </Link>
            </div>
            <div className="h-full overflow-hidden block md:hidden">
              <Image
                src="/heroImages/globe.png"
                alt="Find Your Career Path"
                width={400}
                height={200}
                className="w-full h-1/2 object-contain opacity-80"
                priority
              />
            </div>
          </div>

          <div className="absolute h-full top-0 right-30 z-0 overflow-hidden hidden md:flex md:items-center md:justify-center">
            <Image
              src="/heroImages/globe2.png"
              alt="Find Your Career Path"
              width={800}
              height={1000}
              className="w-full h-130 object-contain opacity-80"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
