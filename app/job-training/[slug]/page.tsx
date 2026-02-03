"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
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
  Verified,
  ArrowLeft,
  ClockAlert,
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
    price: 40000,
    originalPrice: 52000,
    rating: 4.7,
    totalRatings: 842,
    students: 3120,
    duration: "3 months",
    level: "Beginner to Intermediate",
    language: "English/Nepali",
    instructor: {
      name: "Krishna G. Mul",
      title: "Creative Director & Brand Designer",
      bio: "8+ years of experience in brand identity and product design at Logolab Global pvt. ltd.",
      students: 500,
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
      "Artistic mindset and creativity",
      "Problem-solving attitude toward design challenges",
      "Basic understanding of design software is a plus but not required",
    ],
    notForYou: [
      "You are not ready to practice regularly",
      "You expect results without doing projects",
      "You are unwilling to take feedback",
    ],
    features: [
      "3 months of video content",
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
    duration: "3 months",
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
        duration: "2 weeks",
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
        duration: "5 weeks",
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
        duration: "8 weeks",
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
        duration: "7 weeks",
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
        duration: "6 weeks",
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
        duration: "5 weeks",
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
    duration: "3 months",
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
        duration: "1.5 weeks",
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
        duration: "2.5 weeks",
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
        duration: "2.5 weeks",
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
        duration: "1.5 weeks",
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
      "3 months of video content",
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
  const router = useRouter();
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
    <div className="min-h-screen pt-16 pb-10 bg-zinc-100">
      {/* Course Header */}
      <section className="bg-linear-to-r from-black to-blue-700 text-white">
        <div className="max-w-6xl mx-auto py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Course Info */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <div
                className="cursor-pointer mb-4 flex items-center gap-1 text-zinc-300 hover:text-zinc-100 transition-colors duration-200"
                onClick={() => router.back()}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    router.back();
                  }
                }}
              >
                <ArrowLeft size={16} />
                Back
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
                <div className="mb-4 pb-4 border-b border-zinc-200 space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      {" "}
                      <div className="w-6 h-6 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="text-blue-600 text-lg"
                        >
                          <path
                            fill="currentColor"
                            d="M12.65 3.797c.487.131.908.458 1.42.854l.297.23c.243.187.301.23.359.261a1 1 0 0 0 .196.081c.063.019.134.03.438.07l.373.047c.642.082 1.17.149 1.607.4c.383.22.7.537.92.92c.251.436.318.965.4 1.607l.048.373c.039.304.05.375.069.438q.03.102.08.196c.032.058.075.116.262.359l.23.297c.396.512.723.933.854 1.42a2.5 2.5 0 0 1 0 1.3c-.131.487-.458.908-.854 1.42l-.23.297c-.187.243-.23.301-.261.359q-.051.094-.081.196c-.019.063-.03.134-.07.438l-.047.373c-.082.642-.149 1.17-.4 1.607a2.5 2.5 0 0 1-.92.92c-.436.251-.965.318-1.607.4l-.373.048c-.304.039-.375.05-.438.069q-.102.03-.196.08c-.058.032-.116.075-.359.262l-.297.23c-.512.396-.933.723-1.42.854a2.5 2.5 0 0 1-1.3 0c-.487-.131-.908-.458-1.42-.854l-.297-.23c-.243-.187-.301-.23-.359-.261a1 1 0 0 0-.196-.081c-.063-.019-.134-.03-.438-.07l-.373-.047c-.642-.082-1.17-.149-1.607-.4a2.5 2.5 0 0 1-.92-.92c-.251-.436-.318-.965-.4-1.607l-.048-.373c-.039-.304-.05-.375-.069-.438a1 1 0 0 0-.08-.196c-.032-.058-.075-.116-.262-.359l-.23-.297c-.396-.512-.723-.933-.854-1.42a2.5 2.5 0 0 1 0-1.3c.131-.487.458-.908.854-1.42l.23-.297c.187-.243.23-.301.261-.359a1 1 0 0 0 .081-.196c.019-.063.03-.134.07-.438l.047-.373c.082-.642.149-1.17.4-1.607a2.5 2.5 0 0 1 .92-.92c.436-.251.965-.318 1.607-.4l.373-.048c.304-.039.375-.05.438-.069a1 1 0 0 0 .196-.08c.058-.032.116-.075.359-.262l.297-.23c.512-.396.933-.723 1.42-.854a2.5 2.5 0 0 1 1.3 0m3.057 5.496a1 1 0 0 0-1.414 0L11 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414"
                          />
                        </svg>
                      </div>
                      <p className="text-lg font-semibold text-blue-600">
                        Job Guarantee
                      </p>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold">
                      Rs. {course.price.toLocaleString()}
                    </span>
                    <span className="text-lg text-zinc-400 line-through">
                      Rs. {course.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-orange-500">
                    <ClockAlert size={16} />
                    <p className="text-sm font-semibold">
                      2 days left at this price!
                    </p>
                  </div>
                </div>
                <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">
                  Join Now
                </button>
                <div className="pt-4">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {" "}
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What you will learn */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">
                What you will learn
              </h2>
              <div className="grid md:grid-cols-2 gap-2">
                {course.whatYouLearn.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white p-4 rounded-lg"
                  >
                    <Check
                      size={18}
                      className="text-blue-600 shrink-0 mt-0.5"
                    />
                    <span className="text-zinc-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* This course includes: */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">
                This course includes:
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-zinc-700">
                {[
                  {
                    label: `${course.duration} on-demand video`,
                    icon: <Play size={18} />,
                  },
                  { label: "Assignments", icon: <BookOpen size={18} /> },
                  { label: "13 articles", icon: <Check size={18} /> },
                  {
                    label: "15 downloadable resources",
                    icon: <Check size={18} />,
                  },
                  {
                    label: "Access on mobile and TV",
                    icon: <Globe size={18} />,
                  },
                  { label: "Closed captions", icon: <Verified size={18} /> },
                  {
                    label: "Certificate of completion",
                    icon: <Check size={18} />,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-blue-600">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Table of content */}
            <div className="">
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">
                Table of content
              </h2>
              <div className="space-y-3">
                {course.curriculum.map((module, index) => (
                  <div
                    key={index}
                    className="bg-white border border-zinc-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenModule(openModule === index ? null : index)
                      }
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-blue-50 transition-colors"
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
            {/* Requirements */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2 ">
                Requirements
              </h2>
              <ul className="space-y-2">
                {course.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                    <span className="text-zin-700 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What you'll be */}
            <div className="">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                What you&apos;ll become
              </h2>
              <p className="text-zinc-600 mb-6">
                With our market-leading teaching style and refined design sense,
                you&apos;ll graduate with confident skills and a portfolio that
                reflects real-world standards.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Brand Designer",
                    desc: "Create cohesive visual identities, logos, and brand systems.",
                  },
                  {
                    title: "Digital Visual Designer",
                    desc: "Design high-impact visuals for web, social, and campaigns.",
                  },
                  {
                    title: "Layout & Typography Specialist",
                    desc: "Craft clear, balanced layouts with professional type systems.",
                  },
                  {
                    title: "Portfolio-Ready Creative",
                    desc: "Present client-ready case studies that stand out to employers.",
                  },
                  {
                    title: "Logo Designer",
                    desc: "Design distinctive logos that effectively represent brands.",
                  },
                  {
                    title: "Leanding Visual Designer",
                    desc: "Create engaging visuals for landing pages that convert visitors.",
                  },
                ].map((role) => (
                  <div
                    key={role.title}
                    className="bg-white flex items-start gap-3 p-4 rounded-xl border border-zinc-200"
                  >
                    <Check
                      size={18}
                      className="text-blue-600 shrink-0 mt-0.5"
                    />
                    <div>
                      <h3 className="font-semibold text-zinc-900">
                        {role.title}
                      </h3>
                      <p className="text-sm text-zinc-600 mt-1">{role.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Future job demands rate */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-yellow-600 text-white px-4 py-1 text-sm font-semibold">
                High Demand
              </div>
              <h2 className="text-2xl font-bold text-blue-700 mb-4">
                Future job demand for Graphic Designers
              </h2>
              <p className="text-zinc-700 text-sm mb-6">
                Opportunities are growing across national and international
                companies hiring for branding, UI, marketing, and product
                design.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-blue-100">
                  <h3 className="font-semibold text-blue-700 mb-2">National</h3>
                  <ul className="space-y-2 text-sm text-zinc-700">
                    {[
                      "Digital agencies",
                      "Marketing firms",
                      "E-commerce brands",
                      "Media and publishing houses",
                      "Startups and tech companies",
                      "Education and training institutes",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCheck
                          size={16}
                          className="text-blue-600 mt-0.5"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-4 border border-blue-100">
                  <h3 className="font-semibold text-blue-700 mb-2">
                    International
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-700">
                    {[
                      "Global design studios",
                      "SaaS product companies",
                      "Marketing agencies",
                      "E-commerce marketplaces",
                      "Content and media platforms",
                      "Remote freelance clients",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCheck
                          size={16}
                          className="text-blue-600 mt-0.5"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* This path is not for */}
            <div className="">
              <h2 className="text-2xl font-semibold text-orange-500 mb-2">
                This path is not for:
              </h2>
              <ul className="space-y-2">
                {course.notForYou.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0"></div>
                    <span className="text-zinc-700 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-2">
              {/* Instructor */}
              <div className="bg-white rounded-2xl overflow-hidden border border-zinc-200">
                {/* Instructor Avatar - Full Width */}
                <div className="w-full h-70 relative overflow-hidden">
                  <Image
                    src="/job-training/graphics/Krishna.png"
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
        </div>
      </div>
    </div>
  );
}
