"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="mt-20">
      <div className="w-full bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-zinc-800 mb-4">
                Transform Your Career Path
              </h2>
              <p className="text-lg text-zinc-700 mb-6">
                Discover your potential, master in-demand skills, and land your
                dream job. LifePath is your personalized guide through career
                success.
              </p>

              {/* Key Features */}
              {/* <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Icon
                    icon="mdi:check-circle"
                    width={24}
                    height={24}
                    className="text-green-500 flex-shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-zinc-900">
                      Personalized Career Roadmap
                    </p>
                    <p className="text-sm text-zinc-600">
                      Tailored courses based on your goals
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    icon="mdi:check-circle"
                    width={24}
                    height={24}
                    className="text-green-500 flex-shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-zinc-900">
                      High-Paying Job Opportunities
                    </p>
                    <p className="text-sm text-zinc-600">
                      Direct access to premium positions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    icon="mdi:check-circle"
                    width={24}
                    height={24}
                    className="text-green-500 flex-shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-zinc-900">
                      Expert-Led Learning
                    </p>
                    <p className="text-sm text-zinc-600">
                      Learn from industry leaders
                    </p>
                  </div>
                </div>
              </div> */}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors flex items-center justify-center gap-2">
                  <Icon icon="mdi:play-circle" width={18} height={18} />
                  Start Learning Today
                </button>
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-full transition-colors flex items-center justify-center gap-2">
                  <Icon icon="mdi:arrow-right" width={18} height={18} />
                  Explore Courses
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex items-center justify-center">
              <div className="w-full">
                <Image
                  src="/heroImages/woman3.png"
                  alt="Lifepath"
                  width={600}
                  height={600}
                  className="h-100 w-full object-contain object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
