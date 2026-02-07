"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TEXT =
  "Your success is  not delayed by your weaknesses, but by not knowing your strengths.";

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const words = containerRef.current.querySelectorAll(".reveal-word");
    gsap.set(words, { opacity: 0.15 });

    gsap.to(words, {
      opacity: 1,
      duration: 0.2,
      stagger: 0.07,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 40%",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="relative bg-blue-700 to-black py-8 md:py-20 overflow-hidden">
      <div ref={containerRef} className="relative max-w-6xl mx-auto">
        <p className="text-center text-2xl md:text-4xl lg:text-5xl font-medium leading-snug text-white">
          {TEXT.split(" ").map((w, i) => (
            <span key={i} className="reveal-word inline-block mr-2">
              {w}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
