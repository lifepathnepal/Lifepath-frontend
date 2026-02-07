"use client";

import Image from "next/image";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="pt-8 md:pt-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-0 mb-16">
        {/* Section Header */}
        <div className="mb-0 text-left">
          {/* <div className="inline-flex items-start gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xl font-semibold text-blue-700">
            How LifePath Works
          </div> */}
          <h2 className="max-w-5xl mx-auto text-center text-2xl md:text-7xl font-semibold text-blue-700 mt-4">
            From self-discovery to paid work no guesswork, just momentum
          </h2>
          <p className="max-w-3xl mx-auto text-center text-zinc-700 mt-4">
            Discover your strengths, choose the right path, <br />
            and take confident steps toward a fulfilling career.
          </p>
        </div>

        {/* Stepped Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-16">
          {/* Step 1 */}
          <div className="group relative h-100 bg-linear-to-br from-zinc-900 to-blue-700 rounded-lg overflow-hidden cursor-pointer border-2 border-blue-300">
            <Image
              src="/steps/know.png"
              alt="Step 1"
              width={300}
              height={400}
              className="w-full h-full object-cover group-hover:opacity-10 transition-opacity duration-300"
            />
            <div className="absolute top-4 left-4 font-semibold text-blue-500 z-10">
              Step 01
            </div>
            <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                Know Yourself (Deeply)
              </h3>
              <p className="text-zinc-200 text-sm">
                Science-backed assessments reveal how you think, what energizes
                you, and your real strengths.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group relative h-100 bg-linear-to-br from-zinc-900 to-blue-700 rounded-lg overflow-hidden cursor-pointer border-2 border-blue-300">
            <Image
              src="/heroImages/step1.png"
              alt="Step 2"
              width={300}
              height={400}
              className="w-full h-full object-cover group-hover:opacity-10 transition-opacity duration-300"
            />
            <div className="absolute top-4 left-4 font-semibold text-blue-500 z-10">
              Step 02
            </div>
            <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                Choose the Right Path
              </h3>
              <p className="text-zinc-200 text-sm">
                Match your personality and interests to in-demand careers that
                actually exist right now.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group relative h-100 bg-linear-to-br from-zinc-900 to-blue-700 rounded-lg overflow-hidden cursor-pointer border-2 border-blue-300">
            <Image
              src="/heroImages/happy.png"
              alt="Step 3"
              width={300}
              height={400}
              className="w-full h-full object-cover group-hover:opacity-10 transition-opacity duration-300"
            />
            <div className="absolute top-4 left-4 font-semibold text-blue-500 z-10">
              Step 03
            </div>
            <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                Build Real Skills
              </h3>
              <p className="text-zinc-200 text-sm">
                Hands-on projects with real tools, portfolio-worthy work, and
                mentorship that keeps you accountable.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="group relative h-100 bg-linear-to-br from-zinc-900 to-blue-700 rounded-lg overflow-hidden cursor-pointer border-2 border-blue-300">
            <Image
              src="/heroImages/next.png"
              alt="Step 4"
              width={300}
              height={400}
              className="w-full h-full object-cover group-hover:opacity-10 transition-opacity duration-300"
            />
            <div className="absolute top-4 left-4 font-semibold text-blue-500 z-10">
              Step 04
            </div>
            <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                From Learning to Earning
              </h3>
              <p className="text-zinc-200 text-sm">
                Finish ready to land paid work, freelance with momentum, or
                switch careers confidently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
