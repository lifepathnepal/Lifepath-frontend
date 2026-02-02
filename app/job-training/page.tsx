"use client";

import { Clock, User, PlayCircle, Check, Search } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function JobTrainingPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const courses = [
    {
      id: 1,
      slug: "graphic-designing-bootcamp",
      title: "Complete Graphic Designing Bootcamp (Beginner)",
      instructor: "by Uchero D. Lucky",
      duration: "9hr 10min",
      lessons: "18 lessons",
      price: "5200",
      originalPrice: "7200",
      includes: [
        "Psychology class",
        "Personality Development",
        "Life Books",
        "Portfolio Review",
        "Internship Guidance",
        "Placement Oppertunity",
      ],
    },
    {
      id: 2,
      slug: "web-development-bootcamp",
      title: "Complete Web Development Bootcamp (Beginner)",
      instructor: "by Uchero D. Lucky",
      duration: "12hr 30min",
      lessons: "24 lessons",
      price: "6200",
      originalPrice: "8200",
      includes: [
        "Psychology class",
        "Personality Development",
        "Life Books",
        "Personal Guidance",
        "Interview Practice",
        "Placement Oppertunity",
      ],
    },
  ];

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-black to-blue-700 text-white">
        <div className="max-w-6xl mx-auto py-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Job Training Programs
            </h1>
            <p className="text-lg text-blue-100 mb-8">
              Career-ready training with hands-on projects, mentorship, and
              placement-focused guidance.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-100"
                size={20}
              />
              <input
                type="text"
                placeholder="Search training programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/20 border-2 border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="max-w-6xl mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
          {filteredCourses.map((course) => (
            <Link
              key={course.id}
              href={`/job-training/${course.slug}`}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-zinc-200 flex flex-col"
            >
              {/* Course Info */}
              <div className="p-4 flex flex-col h-full group cursor-pointer">
                {/* Title */}
                <h4 className="text-xl font-semibold text-zinc-900 mb-3 line-clamp-3 leading-tight group-hover:underline group-hover:text-blue-500">
                  {course.title}
                </h4>

                {/* Instructor */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <User size={14} className="text-white" />
                  </div>
                  <p className="text-xs text-zinc-600">{course.instructor}</p>
                </div>

                {/* Duration and Lessons */}
                <div className="flex items-center gap-3 text-xs text-zinc-600 mb-3 pb-3 border-b border-zinc-200">
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <PlayCircle size={14} />
                    {course.lessons}
                  </span>
                </div>

                {/* What's Included */}
                <div className="mb-4 bg-blue-50 border border-blue-300 rounded-lg p-3.5 grow">
                  <p className="text-xs font-bold text-zinc-800 mb-3 uppercase tracking-wide">
                    What&apos;s included
                  </p>
                  <div className="flex flex-col gap-2">
                    {course.includes.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-zinc-700 hover:text-blue-600 transition-colors"
                      >
                        <div className="bg-green-500 rounded-full p-0.5 shrink-0">
                          <Check size={10} className="text-white" />
                        </div>
                        <span className="font-medium leading-tight">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-blue-800">
                      Rs.{course.price}
                    </span>
                    <span className="text-xs text-zinc-500 line-through">
                      {course.originalPrice}
                    </span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 items-center justify-between w-full mt-auto">
                  <button className="w-full px-4 py-2 bg-zinc-100 text-blue-500 border cursor-pointer hover:bg-zinc-50 hover:text-blue-700 hover:border-blue-600 font-semibold rounded-full transition-colors text-sm">
                    View program
                  </button>
                  <button className="w-full px-4 py-2 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold rounded-full transition-colors text-sm">
                    Enroll Now
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
