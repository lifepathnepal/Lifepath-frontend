"use client";

import { PlayCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-16 max-w-6xl mx-auto rounded-bl-2xl rounded-br-2xl overflow-hidden border border-zinc-200">
      <div className="w-full bg-zinc-50">
        <div className=" pl-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-4">
                <span className="text-blue-600">Get</span> Skilled
                <span className="text-blue-600">.</span>
                <br /> <span className="text-blue-600">Get</span> Hired
                <span className="text-blue-600">.</span>
                <br />
                <span className="text-blue-600">Get</span> Paid in Nepal
                <span className="text-blue-600">.</span>
              </h2>
              <p className="text-lg text-zinc-700 mb-6">
                Discover career paths, learn in-demand skills, and land
                high-paying jobs in Nepal and abroad — even without a degree.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2">
                <button className="px-4 py-3 bg-zinc-700 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors flex items-center justify-center gap-1 cursor-pointer">
                  <PlayCircle size={18} />
                  Find My Career Path
                </button>
                <button className="px-4 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-100 font-semibold rounded-full transition-colors flex items-center justify-center gap-1 cursor-pointer">
                  <ArrowRight size={18} />
                  Browse High-Paying Skills
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
