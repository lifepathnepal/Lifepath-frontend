"use client";

import { useState } from "react";
import { Play, ChevronLeft, ChevronRight, MoveRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Engineer",
    video: "/videos/krish.mp4",
    quote: "LifePath helped me discover my true potential",
    caption: "I found my dream career path through LifePath",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "UX Designer",
    video: "/videos/Alish.mp4",
    quote: "The personality test was eye-opening",
    caption: "First of all, it's safe and accurate",
  },
  {
    id: 3,
    name: "Anita Thapa",
    role: "Data Analyst",
    video: "/videos/krish.mp4",
    quote: "Career guidance at its best",
    caption: "The concept of LifePath changed my life",
  },
  {
    id: 4,
    name: "Deepak Rai",
    role: "Marketing Manager",
    video: "/videos/Alish.mp4",
    quote: "Found clarity in my career choices",
    caption: "I am now confident about my future",
  },
];

export default function StudentTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);

  const itemsPerView = 3;
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handlePlayVideo = (id: number) => {
    setIsPlaying(id);
  };

  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto ">
        {/* Section Header */}
        <div className="text- max-w-6xl mx-auto pb-16">
          {/* <div className="inline-flex items-start gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xl font-semibold text-blue-700">
            Why Student trust Lifepath?
          </div> */}
          <h2 className="max-w-6xl mx-auto leading-tight text-3xl md:text-4xl font-semibold text-slate-900 mt-4">
            <span className="text-blue-600">Because we don&apos;t ask:</span>{" "}
            &quot;What do you want to study?&quot; <br />{" "}
            <span className="text-blue-600">We ask:</span> &quot;Who are you
            becoming?&quot;
          </h2>

          <div className="mt-4 flex flex-col md:flex-row items-center justify-start gap-3 text-normal text-slate-700">
            <span>Built for Nepali youth</span>
            <span className="hidden md:inline text-blue-500 text-lg">
              <MoveRight size={16} />
            </span>
            <span>Learn in psychology</span>
            <span className="hidden md:inline text-blue-500 text-lg">
              <MoveRight size={16} />
            </span>
            <span>Focused on future demand</span>
            <span className="hidden md:inline text-blue-500 text-lg">
              <MoveRight size={16} />
            </span>
            <span>Designed for you</span>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600 hover:text-white"
            }`}
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all ${
              currentIndex >= maxIndex
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600 hover:text-white"
            }`}
            aria-label="Next testimonials"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonials Grid */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView + 2)}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="shrink-0"
                  style={{ width: `calc(${100 / itemsPerView}% - 1rem)` }}
                >
                  <div className="group relative h-125 rounded-3xl overflow-hidden bg-zinc-900 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-600/20">
                    {/* Video Background */}
                    <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                      <video
                        src={testimonial.video}
                        className="absolute inset-0 h-full w-full object-cover"
                        muted
                        loop
                        playsInline
                        autoPlay
                      />

                      {/* Enhanced Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/20"></div>

                      {/* Subtle Blue Overlay on Hover */}
                      <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300"></div>
                    </div>

                    {/* Play Button with Enhanced Design */}
                    <button
                      onClick={() => handlePlayVideo(testimonial.id)}
                      className="absolute inset-0 flex items-center justify-center"
                      aria-label={`Play ${testimonial.name}'s testimonial`}
                    >
                      <div className="relative">
                        {/* Pulsing Ring */}
                        <div className="absolute inset-0 w-20 h-20 rounded-full bg-blue-600/30 animate-ping"></div>

                        {/* Main Play Button */}
                        <div className="relative w-20 h-20 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                          <Play
                            size={32}
                            className="text-blue-600 group-hover:text-white ml-1 transition-colors"
                            fill="currentColor"
                          />
                        </div>
                      </div>
                    </button>

                    {isPlaying === testimonial.id && (
                      <div className="absolute inset-0 z-20 bg-black/60">
                        <video
                          src={testimonial.video}
                          className="absolute inset-0 h-full w-full object-cover"
                          controls
                          autoPlay
                          playsInline
                          onEnded={() => setIsPlaying(null)}
                        />
                      </div>
                    )}

                    {/* Quote Badge */}
                    <div className="absolute top-6 left-6 px-4 py-2 bg-blue-600/90 backdrop-blur-sm rounded-full">
                      <span className="text-white text-xs font-semibold">
                        Success Story
                      </span>
                    </div>

                    {/* Caption/Quote with Enhanced Design */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white bg-linear-to-t from-black/95 via-black/80 to-transparent">
                      <div className="space-y-3">
                        <p className="text-xl font-bold mb-3 leading-tight group-hover:text-blue-300 transition-colors">
                          &quot;{testimonial.caption}&quot;
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-sm">
                              {testimonial.name}
                            </p>
                            <p className="text-xs text-zinc-300">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Corner Accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-blue-600/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-blue-600 w-8"
                    : "bg-zinc-300 hover:bg-zinc-400"
                }`}
                aria-label={`Go to testimonial group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
