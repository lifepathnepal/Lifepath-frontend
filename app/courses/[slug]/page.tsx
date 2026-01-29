"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  Clock,
  Users,
  BookOpen,
  PlayCircle,
  Check,
  Star,
  Globe,
  ChevronDown,
  CheckCheck,
  Play,
} from "lucide-react";
import Link from "next/link";

type Instructor = {
  name: string;
  title: string;
  bio: string;
  students: number;
  courses: number;
};

type CurriculumModule = {
  title: string;
  lessons: number;
  duration: string;
  lectures: string[];
};

type Course = {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  originalPrice: number;
  rating: number;
  totalRatings: number;
  students: number;
  duration: string;
  level: string;
  language: string;
  instructor: Instructor;
  whatYouLearn: string[];
  curriculum: CurriculumModule[];
  requirements: string[];
  features: string[];
};

// Mock course data - replace with API call
const courseData: Record<string, Course> = {
  "web-development-bootcamp": {
    id: 1,
    title: "Complete Web Development Bootcamp",
    slug: "web-development-bootcamp",
    description:
      "Master full-stack web development from scratch. Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB to build real-world applications.",
    price: 4999,
    originalPrice: 8999,
    rating: 4.8,
    totalRatings: 1234,
    students: 5678,
    duration: "40 hours",
    level: "Beginner to Advanced",
    language: "English/Nepali",
    instructor: {
      name: "Ramesh Sharma",
      title: "Senior Full Stack Developer",
      bio: "10+ years of experience in web development. Worked with top tech companies.",
      students: 12000,
      courses: 8,
    },
    whatYouLearn: [
      "Build responsive websites using HTML5 and CSS3",
      "Master JavaScript ES6+ and modern web APIs",
      "Create dynamic UIs with React and state management",
      "Build RESTful APIs with Node.js and Express",
      "Work with MongoDB and database design",
      "Deploy applications to production",
      "Implement authentication and security best practices",
      "Version control with Git and GitHub",
    ],
    curriculum: [
      {
        title: "Introduction to Web Development",
        lessons: 8,
        duration: "2 hours",
        lectures: [
          "Course Overview",
          "Setting up Development Environment",
          "How the Web Works",
          "HTML Basics",
        ],
      },
      {
        title: "HTML & CSS Fundamentals",
        lessons: 15,
        duration: "5 hours",
        lectures: [
          "HTML5 Semantic Elements",
          "CSS Box Model",
          "Flexbox Layout",
          "CSS Grid",
          "Responsive Design",
        ],
      },
      {
        title: "JavaScript Essentials",
        lessons: 20,
        duration: "8 hours",
        lectures: [
          "Variables and Data Types",
          "Functions and Scope",
          "DOM Manipulation",
          "ES6+ Features",
          "Async JavaScript",
        ],
      },
      {
        title: "React Development",
        lessons: 18,
        duration: "7 hours",
        lectures: [
          "React Components",
          "Props and State",
          "Hooks",
          "React Router",
          "State Management",
        ],
      },
      {
        title: "Backend with Node.js",
        lessons: 16,
        duration: "6 hours",
        lectures: [
          "Node.js Basics",
          "Express Framework",
          "REST APIs",
          "Authentication",
          "Database Integration",
        ],
      },
      {
        title: "Final Project & Deployment",
        lessons: 12,
        duration: "5 hours",
        lectures: [
          "Project Planning",
          "Building Full Stack App",
          "Testing",
          "Deployment",
          "Best Practices",
        ],
      },
    ],
    requirements: [
      "A computer with internet connection",
      "Basic understanding of computers",
      "Passion to learn web development",
      "No prior coding experience required",
    ],
    features: [
      "40 hours of video content",
      "Downloadable resources",
      "Lifetime access",
      "Certificate of completion",
      "Access on mobile and desktop",
      "30-day money-back guarantee",
    ],
  },
};

export default function CourseDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [openModule, setOpenModule] = useState<number | null>(0);

  const course = courseData[slug];

  if (!course) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-zinc-900 mb-4">
            Course Not Found
          </h1>
          <Link
            href="/courses"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 pb-10 bg-zinc-50">
      {/* Course Header */}
      <section className="bg-linear-to-r from-black to-blue-700 text-white">
        <div className="max-w-6xl mx-auto py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Course Info */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <div className="mb-4">
                <Link
                  href="/courses"
                  className="text-zinc-400 hover:text-white text-sm"
                >
                  ← Back to Courses
                </Link>
              </div>
              <h1 className="text-3xl md:text-6xl font-bold mb-4">
                {course.title}
              </h1>
              <p className="text-lg text-zinc-300 mb-6">{course.description}</p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <Star
                    size={16}
                    className="text-yellow-400"
                    fill="currentColor"
                  />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-zinc-400">
                    ({course.totalRatings} ratings)
                  </span>
                </div>
                <div className="flex items-center gap-1 text-zinc-300">
                  <Users size={16} className="text-zinc-50" />
                  <span className="font-semibold text-zinc-50">
                    {course.students.toLocaleString()}
                  </span>{" "}
                  <span> Learners</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-300">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-blue-300" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-blue-300" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-blue-300" />
                  <span>{course.language}</span>
                </div>
              </div>
            </div>

            {/* Right: Price Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 text-zinc-900 shadow-xl sticky top-24">
                <div className="mb-4">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold">
                      रू {course.price.toLocaleString()}
                    </span>
                    <span className="text-lg text-zinc-400 line-through">
                      रू {course.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                    {Math.round(
                      ((course.originalPrice - course.price) /
                        course.originalPrice) *
                        100,
                    )}
                    % OFF
                  </span>
                </div>

                <div className="mt-4 pt-4 border-t border-zinc-200">
                  <p className="text-sm font-semibold mb-3">
                    This course includes:
                  </p>
                  <div className="space-y-2 text-sm text-zinc-600">
                    {course.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check size={16} className="text-blue-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link href={`/courses/${slug}/learn`}>
                  <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors mt-4">
                    Enroll Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-2">
              {/* Instructor */}
              <div className="bg-white rounded-2xl overflow-hidden border border-zinc-200">
                {/* Instructor Avatar - Full Width */}
                <div className="w-full h-48 relative overflow-hidden">
                  <Image
                    src="/heroImages/mentor.png"
                    alt={course.instructor.name}
                    fill
                    className="object-cover object-top"
                  />
                  <h3 className="font-bold text-blue-600 mb-4 absolute top-4 left-4 bg-blue-100 bg-opacity-80 px-3 py-1 rounded-full text-sm">
                    Your Instructor
                  </h3>
                </div>

                <div className="p-6">
                  <h4 className="font-semibold text-lg text-zinc-900 mb-1">
                    {course.instructor.name}
                  </h4>
                  <p className="text-sm text-blue-600 mb-4">
                    {course.instructor.title}
                  </p>
                  <p className="text-sm text-zinc-600 mb-4">
                    {course.instructor.bio}
                  </p>
                  <div className="flex justify-between gap-6 text-sm text-zinc-600 pt-4 border-t border-zinc-200">
                    <div className="flex flex-col">
                      <div className="font-bold text-lg text-zinc-900">
                        {course.instructor.students.toLocaleString()}
                      </div>
                      <div>Students</div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="font-bold text-lg text-zinc-900">
                        {course.instructor.courses}
                      </div>
                      <div>Courses</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Courses */}
              <div className="bg-white rounded-2xl p-6 border border-zinc-200">
                <h3 className="font-bold text-zinc-900 mb-4">
                  Related Courses
                </h3>
                <div className="space-y-4">
                  <Link
                    href="/courses/ux-designer-bootcamp"
                    className="block group"
                  >
                    <div className="flex gap-3">
                      <div className="w-20 h-20 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                        <BookOpen size={32} className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-zinc-900 group-hover:text-blue-600 transition-colors mb-1">
                          UX Designer Bootcamp
                        </h4>
                        <p className="text-xs text-zinc-500 mb-2">
                          by Uchero D. Lucky
                        </p>
                        <p className="text-sm font-bold text-blue-600">
                          रू 5,200
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/courses/mern-stack-mastery"
                    className="block group"
                  >
                    <div className="flex gap-3">
                      <div className="w-20 h-20 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                        <BookOpen size={32} className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-zinc-900 group-hover:text-blue-600 transition-colors mb-1">
                          MERN Stack Mastery
                        </h4>
                        <p className="text-xs text-zinc-500 mb-2">
                          by Uchero D. Lucky
                        </p>
                        <p className="text-sm font-bold text-blue-600">
                          रू 5,200
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/courses/data-science-python"
                    className="block group"
                  >
                    <div className="flex gap-3">
                      <div className="w-20 h-20 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                        <BookOpen size={32} className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-zinc-900 group-hover:text-blue-600 transition-colors mb-1">
                          Data Science with Python
                        </h4>
                        <p className="text-xs text-zinc-500 mb-2">
                          by Uchero D. Lucky
                        </p>
                        <p className="text-sm font-bold text-blue-600">
                          रू 7,200
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll Learn */}
            <div className="">
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">
                What You&apos;ll Learn
              </h2>
              <div className="grid md:grid-cols-2 gap-2">
                {course.whatYouLearn.map((item: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-zinc-100 p-4 rounded-lg"
                  >
                    <CheckCheck
                      size={20}
                      className="text-blue-600 shrink-0 mt-0.5"
                    />
                    <span className="text-zinc-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Curriculum */}
            <div className="bg-white rounded-2xl p-8 border border-zinc-200">
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">
                Course Curriculum
              </h2>
              <div className="space-y-3">
                {course.curriculum.map(
                  (module: CurriculumModule, index: number) => (
                    <div
                      key={index}
                      className="border border-zinc-200 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setOpenModule(openModule === index ? null : index)
                        }
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-zinc-50 transition-colors"
                      >
                        <div className="flex items-center gap-3 text-left">
                          <PlayCircle
                            size={20}
                            className="text-blue-600 shrink-0"
                          />
                          <div>
                            <h3 className="font-semibold text-zinc-900">
                              {module.title}
                            </h3>
                            <p className="text-sm text-zinc-500">
                              {module.lessons} lessons • {module.duration}
                            </p>
                          </div>
                        </div>
                        <ChevronDown
                          size={20}
                          className={`text-zinc-400 transition-transform ${
                            openModule === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openModule === index && (
                        <div className="px-6 pb-4 pt-2 bg-zinc-50 border-t border-zinc-200">
                          <ul className="space-y-2">
                            {module.lectures.map(
                              (lecture: string, lectureIndex: number) => (
                                <li
                                  key={lectureIndex}
                                  className="flex items-center gap-3 text-sm text-zinc-600"
                                >
                                  <PlayCircle
                                    size={14}
                                    className="text-zinc-400"
                                  />
                                  <span>{lecture}</span>
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Small CTA Section */}

            <div className="bg-blue-600 rounded-2xl pl-6 p-4 text-white flex flex-col md:flex-row items-center justify-between gap-4">
              <h2 className="text-2xl font-bold">
                Ready to start your journey?
              </h2>
              <Link href={`/courses/${slug}/learn`}>
                <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors cursor-pointer">
                  <Play size={16} className="inline-block mr-2" />
                  Start Learning
                </button>
              </Link>
            </div>
            {/* Requirements */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <h2 className="text-2xl font-bold text-blue-700 mb-6">
                Requirements
              </h2>
              <ul className="space-y-2">
                {course.requirements.map((req: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                    <span className="text-blue-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Not for you if */}
            <div className="bg-orange-50 rounded-2xl p-8 border border-orange-200">
              <h2 className="text-2xl font-bold text-orange-500 mb-6">
                This path is NOT for you if you&apos;re:
              </h2>
              <ul className="space-y-2">
                {course.requirements.map((req: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0"></div>
                    <span className="text-orange-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
