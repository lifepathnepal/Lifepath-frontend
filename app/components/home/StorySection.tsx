"use client";

import Image from "next/image";

export default function StorySection() {
  const pillars = [
    {
      title: "Personality First",
      description: "Decisions based on cognitive preferences.",
      img: "/guidance/personality.png",
    },
    {
      title: "Clarity Driven",
      description: "Fewer options, better focus.",
      img: "/guidance/clarity.png",
    },
    {
      title: "Actionable",
      description: "Real roles, skills, and next steps.",
      img: "/guidance/actionable.png",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-linear-to-b from-blue-50/40 via-white to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-blue-500/80">
            Before careers, before skills — comes understanding yourself.
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-semibold leading-tight text-transparent bg-clip-text bg-linear-to-r from-black to-blue-600">
            Guidance should start with who you are — not trends.
          </h2>
          <p className="text-sm md:text-base text-zinc-600 mt-4">
            Lifepath uses the MBTI personality framework combined with
            real-world career mapping to help you understand how you think,
            work, and grow — then align that with careers that truly fit.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            return (
              <div
                key={index}
                className="group rounded-3xl bg-blue-50 p-6 border border-blue-100/80 min-h-105 flex flex-col"
              >
                <h3 className="text-xl md:text-5xl font-semibold text-zinc-900">
                  {pillar.title}
                </h3>
                <p className="text-sm md:text-base text-zinc-600 mt-3 max-w-65">
                  {pillar.description}
                </p>

                <div className="mt-auto pt-8 flex items-end justify-center">
                  <div className="w-44 h-44 flex items-center justify-center">
                    <Image
                      src={pillar.img}
                      alt={pillar.title}
                      width={200}
                      height={200}
                      className="text-blue-600"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
