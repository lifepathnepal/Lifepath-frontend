"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
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
  notForYou: string[];
  features: string[];
  documents: { title: string; type: string; size: string }[];
};

const courseData: Record<string, Course> = {
  "graphic-designing-bootcamp": {
    id: 1,
    title: "Complete Graphic Designing Bootcamp",
    slug: "graphic-designing-bootcamp",
    description:
      "Master visual design with real-world projects. Learn branding, layout, typography, and design systems to build a standout portfolio.",
    price: 5200,
    originalPrice: 7200,
    rating: 4.7,
    totalRatings: 842,
    students: 3120,
    duration: "9 hours",
    level: "Beginner to Intermediate",
    language: "English/Nepali",
    instructor: {
      name: "Uchero D. Lucky",
      title: "Senior Visual Designer",
      bio: "8+ years of experience in brand identity and product design for global and local startups.",
      students: 9000,
      courses: 6,
    },
    whatYouLearn: [
      "Design principles: balance, contrast, and hierarchy",
      "Brand identity, logos, and visual systems",
      "Typography and color theory for digital and print",
      "Layout design for posters, social media, and UI",
      "Mastering tools like Figma and Adobe Suite",
      "Build a portfolio with client-ready case studies",
    ],
    curriculum: [
      {
        title: "Design Foundations",
        lessons: 6,
        duration: "1.5 hours",
        lectures: [
          "How Designers Think",
          "Principles of Visual Design",
          "Typography Essentials",
          "Color Theory Basics",
        ],
      },
      {
        title: "Branding & Identity",
        lessons: 8,
        duration: "2.5 hours",
        lectures: [
          "Brand Strategy",
          "Logo Construction",
          "Brand Guidelines",
          "Mockups & Presentation",
        ],
      },
      {
        title: "Digital Design Projects",
        lessons: 10,
        duration: "3 hours",
        lectures: [
          "Social Media Templates",
          "Poster & Flyer Design",
          "Web Banner Systems",
          "Designing for Consistency",
        ],
      },
      {
        title: "Portfolio & Career",
        lessons: 5,
        duration: "2 hours",
        lectures: [
          "Portfolio Structure",
          "Case Study Writing",
          "Client Communication",
          "Interview Preparation",
        ],
      },
    ],
    requirements: [
      "A computer with internet connection",
      "Willingness to practice and create projects",
      "No prior design experience required",
    ],
    notForYou: [
      "You are not ready to practice regularly",
      "You expect results without doing projects",
      "You are unwilling to take feedback",
    ],
    features: [
      "9 hours of video content",
      "Downloadable templates",
      "Portfolio review sessions",
      "Certificate of completion",
      "Access on mobile and desktop",
      "30-day money-back guarantee",
    ],
    documents: [
      { title: "Brand Identity Starter Kit", type: "PDF", size: "4.2 MB" },
      { title: "Typography Practice Sheets", type: "PDF", size: "2.1 MB" },
      { title: "Color Theory Guide", type: "PDF", size: "3.4 MB" },
      { title: "Portfolio Case Study Template", type: "FIG", size: "1.8 MB" },
      { title: "Client Brief Samples", type: "DOCX", size: "900 KB" },
    ],
  },
  "web-development-bootcamp": {
    id: 2,
    title: "Complete Web Development Bootcamp",
    slug: "web-development-bootcamp",
    description:
      "Master full-stack web development from scratch. Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB to build real-world applications.",
    price: 6200,
    originalPrice: 8200,
    rating: 4.8,
    totalRatings: 1234,
    students: 5678,
    duration: "12 hours",
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
    notForYou: [
      "You are not ready to practice daily",
      "You expect a job without building projects",
      "You avoid learning fundamentals",
    ],
    features: [
      "12 hours of video content",
      "Downloadable resources",
      "Lifetime access",
      "Certificate of completion",
      "Access on mobile and desktop",
      "30-day money-back guarantee",
    ],
    documents: [
      { title: "HTML & CSS Cheat Sheet", type: "PDF", size: "1.5 MB" },
      { title: "JavaScript Exercises", type: "PDF", size: "3.2 MB" },
      { title: "React Component Workbook", type: "PDF", size: "2.7 MB" },
      { title: "API Design Checklist", type: "PDF", size: "1.2 MB" },
      { title: "Deployment Guide", type: "PDF", size: "2.0 MB" },
    ],
  },
  "digital-marketing-bootcamp": {
    id: 3,
    title: "Digital Marketing Bootcamp",
    slug: "digital-marketing-bootcamp",
    description:
      "Learn to grow brands with content, ads, and analytics. Build marketing campaigns that drive real results.",
    price: 4800,
    originalPrice: 6800,
    rating: 4.6,
    totalRatings: 702,
    students: 2890,
    duration: "8 hours",
    level: "Beginner to Intermediate",
    language: "English/Nepali",
    instructor: {
      name: "Maya Karki",
      title: "Growth Marketing Lead",
      bio: "7+ years of experience in performance marketing and brand strategy.",
      students: 6400,
      courses: 5,
    },
    whatYouLearn: [
      "Build marketing funnels that convert",
      "Create content that drives engagement",
      "Run paid ads on Meta and Google",
      "Use analytics to optimize campaigns",
      "Email marketing and automation basics",
      "SEO fundamentals for long-term growth",
    ],
    curriculum: [
      {
        title: "Marketing Foundations",
        lessons: 6,
        duration: "1.5 hours",
        lectures: [
          "Understanding Audiences",
          "Positioning & Messaging",
          "Marketing Funnels",
          "Campaign Planning",
        ],
      },
      {
        title: "Content & Social Strategy",
        lessons: 8,
        duration: "2.5 hours",
        lectures: [
          "Content Calendar",
          "Social Media Playbooks",
          "Creative Testing",
          "Community Engagement",
        ],
      },
      {
        title: "Paid Ads & Performance",
        lessons: 9,
        duration: "2.5 hours",
        lectures: [
          "Meta Ads Basics",
          "Google Ads Basics",
          "Budgeting & KPIs",
          "Optimization Loops",
        ],
      },
      {
        title: "Analytics & Reporting",
        lessons: 5,
        duration: "1.5 hours",
        lectures: [
          "UTM Tracking",
          "Dashboards",
          "Insights to Actions",
          "Reporting for Stakeholders",
        ],
      },
    ],
    requirements: [
      "A computer with internet connection",
      "Basic social media familiarity",
      "Willingness to practice on live campaigns",
    ],
    notForYou: [
      "You want results without testing",
      "You prefer theory-only learning",
      "You are not ready to iterate and improve",
    ],
    features: [
      "8 hours of video content",
      "Campaign templates",
      "Ad copy swipe files",
      "Certificate of completion",
      "Access on mobile and desktop",
      "30-day money-back guarantee",
    ],
    documents: [
      { title: "Campaign Planner", type: "PDF", size: "1.4 MB" },
      { title: "Ad Copy Templates", type: "DOCX", size: "850 KB" },
      { title: "Analytics Checklist", type: "PDF", size: "1.1 MB" },
      { title: "SEO Quick Guide", type: "PDF", size: "1.9 MB" },
      { title: "Content Calendar", type: "XLSX", size: "700 KB" },
    ],
  },
};

export default function JobTrainingSlugPage() {
  const params = useParams();
  const slugParam = params?.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;
  const [openModule, setOpenModule] = useState<number | null>(0);

  const course = slug ? courseData[slug] : undefined;

  if (!course) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-zinc-900 mb-4">
            Course Not Found
          </h1>
          <p className="text-zinc-500">Please check back later.</p>
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
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check size={16} className="text-blue-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors mt-4">
                  Enroll Now
                </button>
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
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll Learn */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">
                What You&apos;ll Learn
              </h2>
              <div className="grid md:grid-cols-2 gap-2">
                {course.whatYouLearn.map((item, index) => (
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
                {course.curriculum.map((module, index) => (
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
                          {module.lectures.map((lecture, lectureIndex) => (
                            <li
                              key={lectureIndex}
                              className="flex items-center gap-3 text-sm text-zinc-600"
                            >
                              <PlayCircle size={14} className="text-zinc-400" />
                              <span>{lecture}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Small CTA Section */}
            <div className="bg-blue-600 rounded-2xl pl-6 p-4 text-white flex flex-col md:flex-row items-center justify-between gap-4">
              <h2 className="text-2xl font-bold">
                Ready to start your journey?
              </h2>
              <Link
                href={`/job-training/${course.slug}/learn`}
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors cursor-pointer"
              >
                <Play size={16} className="inline-block mr-2" />
                Start Learning
              </Link>
            </div>

            {/* Main Learning Page (Isolated) */}
            <div className="bg-white rounded-2xl p-8 border border-zinc-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900">
                    Next: Main Learning Page
                  </h2>
                  <p className="text-sm text-zinc-600">
                    Your step-by-step learning hub with modules, tasks, and
                    progress tracking in one place.
                  </p>
                </div>
                <Link
                  href={`/job-training/${course.slug}/learn`}
                  className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
                >
                  Go to Learning Page
                </Link>
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {[
                  "Module roadmap and outcomes",
                  "Weekly tasks & checkpoints",
                  "Resources and project files",
                  "Progress & completion tracking",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 border border-zinc-200 rounded-xl px-4 py-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <p className="text-sm font-medium text-zinc-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Documents */}
            <div className="bg-white rounded-2xl p-8 border border-zinc-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900">
                    Course Documents
                  </h2>
                  <p className="text-sm text-zinc-600">
                    Downloadable resources to support your learning and
                    practice.
                  </p>
                </div>
                <button className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">
                  Access All Resources
                </button>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {course.documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-4 border border-zinc-200 rounded-xl px-4 py-3 hover:shadow-sm transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">
                        <BookOpen size={18} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-zinc-900">
                          {doc.title}
                        </p>
                        <p className="text-xs text-zinc-500">
                          {doc.type} • {doc.size}
                        </p>
                      </div>
                    </div>
                    <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                      View
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <h2 className="text-2xl font-bold text-blue-700 mb-6">
                Requirements
              </h2>
              <ul className="space-y-2">
                {course.requirements.map((req, index) => (
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
                {course.notForYou.map((req, index) => (
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
