"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  CheckCircle,
  Lock,
  Menu,
  X,
  Clock,
  FileText,
  Download,
} from "lucide-react";

type Lesson = {
  id: number;
  title: string;
  duration: string;
  type: "content" | "reading" | "exercise" | "assessment";
  completed: boolean;
  locked: boolean;
};

type Module = {
  id: number;
  title: string;
  lessons: Lesson[];
};

// Mock course learning data
const courseLearningData: Record<string, { title: string; modules: Module[] }> =
  {
    "web-development-bootcamp": {
      title: "Complete Web Development Bootcamp",
      modules: [
        {
          id: 1,
          title: "Introduction to Web Development",
          lessons: [
            {
              id: 1,
              title: "Course Overview",
              duration: "10 min read",
              type: "content",
              completed: true,
              locked: false,
            },
            {
              id: 2,
              title: "Understanding Your Learning Style",
              duration: "15 min read",
              type: "content",
              completed: true,
              locked: false,
            },
            {
              id: 3,
              title: "How the Web Works",
              duration: "12 min read",
              type: "reading",
              completed: false,
              locked: false,
            },
            {
              id: 4,
              title: "Self-Assessment: Your Current Skills",
              duration: "8 min",
              type: "assessment",
              completed: false,
              locked: false,
            },
          ],
        },
        {
          id: 2,
          title: "HTML & CSS Fundamentals",
          lessons: [
            {
              id: 5,
              title: "HTML5 Semantic Elements",
              duration: "18 min read",
              type: "content",
              completed: false,
              locked: false,
            },
            {
              id: 6,
              title: "CSS Box Model Concepts",
              duration: "20 min read",
              type: "content",
              completed: false,
              locked: false,
            },
            {
              id: 7,
              title: "Flexbox Layout Practice",
              duration: "25 min",
              type: "exercise",
              completed: false,
              locked: false,
            },
            {
              id: 8,
              title: "CSS Grid System",
              duration: "22 min read",
              type: "content",
              completed: false,
              locked: true,
            },
            {
              id: 9,
              title: "Responsive Design Principles",
              duration: "15 min read",
              type: "reading",
              completed: false,
              locked: true,
            },
          ],
        },
        {
          id: 3,
          title: "JavaScript Essentials",
          lessons: [
            {
              id: 10,
              title: "Variables and Data Types",
              duration: "16 min read",
              type: "content",
              completed: false,
              locked: true,
            },
            {
              id: 11,
              title: "Functions and Scope",
              duration: "18 min read",
              type: "content",
              completed: false,
              locked: true,
            },
            {
              id: 12,
              title: "DOM Manipulation Exercise",
              duration: "30 min",
              type: "exercise",
              completed: false,
              locked: true,
            },
          ],
        },
      ],
    },
  };

export default function CourseLearningPage() {
  const params = useParams();
  const slug = params.slug as string;
  const courseData = courseLearningData[slug];

  const [currentLessonId, setCurrentLessonId] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [completedLessons, setCompletedLessons] = useState<Set<number>>(
    new Set([1, 2]),
  );

  if (!courseData) {
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

  // Find current lesson
  let currentLesson: Lesson | null = null;
  let currentModule: Module | null = null;
  let nextLesson: Lesson | null = null;
  let prevLesson: Lesson | null = null;

  for (const courseModule of courseData.modules) {
    for (let i = 0; i < courseModule.lessons.length; i++) {
      if (courseModule.lessons[i].id === currentLessonId) {
        currentLesson = courseModule.lessons[i];
        currentModule = courseModule;
        // Find next lesson
        if (i < courseModule.lessons.length - 1) {
          nextLesson = courseModule.lessons[i + 1];
        } else {
          // Check next module
          const moduleIndex = courseData.modules.indexOf(courseModule);
          if (moduleIndex < courseData.modules.length - 1) {
            nextLesson = courseData.modules[moduleIndex + 1].lessons[0];
          }
        }
        // Find previous lesson
        if (i > 0) {
          prevLesson = courseModule.lessons[i - 1];
        } else {
          // Check previous module
          const moduleIndex = courseData.modules.indexOf(courseModule);
          if (moduleIndex > 0) {
            const prevModule = courseData.modules[moduleIndex - 1];
            prevLesson = prevModule.lessons[prevModule.lessons.length - 1];
          }
        }
        break;
      }
    }
    if (currentLesson) break;
  }

  const handleLessonClick = (lesson: Lesson) => {
    if (!lesson.locked) {
      setCurrentLessonId(lesson.id);
    }
  };

  const handleMarkComplete = () => {
    // In a real app, this would call an API to mark the lesson as complete
    if (currentLesson) {
      setCompletedLessons((prev) => new Set(prev).add(currentLesson.id));
      if (nextLesson && !nextLesson.locked) {
        setCurrentLessonId(nextLesson.id);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-zinc-200 z-40 px-24">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
            >
              {sidebarOpen ? (
                <X size={20} className="text-zinc-700" />
              ) : (
                <Menu size={20} className="text-zinc-700" />
              )}
            </button>
            <Link
              href={`/courses/${slug}`}
              className="text-zinc-600 hover:text-blue-600 text-sm transition-colors"
            >
              ← Back to Course
            </Link>
            <h1 className="text-zinc-900 font-semibold hidden md:block">
              {courseData.title}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full">
              <div className="w-24 h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500"
                  style={{ width: "25%" }}
                ></div>
              </div>
              <span className="text-xs text-zinc-700">25% Complete</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex pt-14.25">
        {/* Sidebar - Course Curriculum */}
        <aside
          className={`fixed left-0 top-14.25 pl-24 bottom-0 w-100 bg-white border-r border-zinc-200 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-track-zinc-100 transition-transform duration-300 z-30 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ scrollbarWidth: "thin" }}
        >
          <div className="p-3">
            <h2 className="text-zinc-900 font-bold text-base mb-3">
              Course Content
            </h2>
            <div className="space-y-1">
              {courseData.modules.map((module) => (
                <div key={module.id} className="mb-3">
                  <h3 className="text-zinc-600 text-xs font-semibold mb-1.5 px-2">
                    {module.title}
                  </h3>
                  <div className="space-y-1">
                    {module.lessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        onClick={() => handleLessonClick(lesson)}
                        disabled={lesson.locked}
                        className={`w-full text-left px-2 py-2 rounded-lg transition-colors ${
                          lesson.id === currentLessonId
                            ? "bg-blue-600 text-white"
                            : lesson.locked
                              ? "text-zinc-400 cursor-not-allowed bg-zinc-50"
                              : "text-zinc-700 hover:bg-blue-50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 flex-1 min-w-0">
                            {completedLessons.has(lesson.id) ? (
                              <CheckCircle
                                size={14}
                                className="text-green-600 shrink-0"
                              />
                            ) : lesson.locked ? (
                              <Lock
                                size={14}
                                className="text-zinc-400 shrink-0"
                              />
                            ) : lesson.type === "content" ||
                              lesson.type === "reading" ? (
                              <FileText size={14} className="shrink-0" />
                            ) : lesson.type === "exercise" ? (
                              <PlayCircle size={14} className="shrink-0" />
                            ) : (
                              <CheckCircle
                                size={14}
                                className="shrink-0 text-zinc-400"
                              />
                            )}
                            <span className="text-xs font-medium truncate">
                              {lesson.title}
                            </span>
                          </div>
                          <span className="text-[10px] text-zinc-500 ml-2 shrink-0">
                            {lesson.duration}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main
          className={`flex-1 transition-all duration-300 ${
            sidebarOpen ? "ml-80" : "ml-0"
          }`}
        >
          <div className="max-w-5xl mx-auto p-6">
            {/* Content Area */}
            <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden mb-6 p-8">
              <div className="prose max-w-none">
                {currentLesson?.type === "content" ||
                currentLesson?.type === "reading" ? (
                  <div>
                    <div className="flex items-center gap-3 mb-6 text-blue-400">
                      <FileText size={24} />
                      <span className="text-sm font-medium">
                        Reading Material
                      </span>
                    </div>
                    <div className="text-zinc-700 leading-relaxed space-y-4">
                      <p>
                        This is where your course content will be displayed. The
                        content includes comprehensive explanations, examples,
                        and guided learning materials to help you understand the
                        concepts.
                      </p>
                      <p>
                        Our courses are designed with psychological learning
                        principles in mind, ensuring optimal knowledge retention
                        and practical application.
                      </p>
                      <h3 className="text-zinc-900 font-bold text-xl mt-6 mb-3">
                        Key Concepts
                      </h3>
                      <ul className="space-y-2 text-zinc-700">
                        <li>• Interactive learning approach</li>
                        <li>• Self-paced progression</li>
                        <li>• Practical exercises and assessments</li>
                        <li>• Real-world application examples</li>
                      </ul>
                    </div>
                  </div>
                ) : currentLesson?.type === "exercise" ? (
                  <div>
                    <div className="flex items-center gap-3 mb-6 text-green-400">
                      <PlayCircle size={24} />
                      <span className="text-sm font-medium">
                        Practice Exercise
                      </span>
                    </div>
                    <div className="text-zinc-700 leading-relaxed">
                      <p className="mb-4">
                        Complete the interactive exercise below to reinforce
                        your learning.
                      </p>
                      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                        <p className="text-zinc-600">
                          Interactive exercise content will appear here...
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center gap-3 mb-6 text-purple-400">
                      <CheckCircle size={24} />
                      <span className="text-sm font-medium">Assessment</span>
                    </div>
                    <div className="text-zinc-300 leading-relaxed">
                      <p>
                        Test your understanding with this self-assessment. This
                        helps track your progress and identify areas for
                        improvement.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Lesson Info */}
            <div className="bg-white border border-zinc-200 rounded-xl p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-2">
                    {currentLesson?.title}
                  </h2>
                  <p className="text-zinc-600 text-sm">
                    {currentModule?.title}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-zinc-500" />
                  <span className="text-zinc-700 text-sm">
                    {currentLesson?.duration}
                  </span>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-200">
                <button
                  onClick={() =>
                    prevLesson && setCurrentLessonId(prevLesson.id)
                  }
                  disabled={!prevLesson}
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-100 text-zinc-700 rounded-lg hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={20} />
                  <span>Previous</span>
                </button>

                <button
                  onClick={handleMarkComplete}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  {currentLesson && completedLessons.has(currentLesson.id)
                    ? "Completed"
                    : "Mark as Complete"}
                </button>

                <button
                  onClick={() =>
                    nextLesson && setCurrentLessonId(nextLesson.id)
                  }
                  disabled={!nextLesson || nextLesson.locked}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Next</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Tabs: Overview, Resources, Q&A */}
            <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden">
              <div className="border-b border-zinc-200">
                <div className="flex gap-6 px-6">
                  <button className="py-4 text-blue-600 border-b-2 border-blue-500 font-semibold">
                    Overview
                  </button>
                  <button className="py-4 text-zinc-600 hover:text-blue-600 transition-colors">
                    Resources
                  </button>
                  <button className="py-4 text-zinc-600 hover:text-blue-600 transition-colors">
                    Q&A
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-zinc-900 font-semibold mb-3">
                  About this lesson
                </h3>
                <p className="text-zinc-700 leading-relaxed mb-4">
                  In this lesson, you&apos;ll explore{" "}
                  {currentLesson?.title.toLowerCase()}. This comprehensive
                  module is designed to help you understand and apply essential
                  concepts through guided learning and self-reflection
                  exercises.
                </p>

                <div className="mt-6">
                  <h4 className="text-white font-semibold mb-3">
                    Learning Objectives
                  </h4>
                  <ul className="space-y-2 text-zinc-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Understand core concepts and principles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Apply knowledge through practical exercises</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>
                        Develop critical thinking and problem-solving skills
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="text-zinc-900 font-semibold mb-3">
                    Downloadable Resources
                  </h4>
                  <div className="space-y-2">
                    <a
                      href="#"
                      className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Download size={20} className="text-blue-400" />
                        <span className="text-zinc-800">Study Guide.pdf</span>
                      </div>
                      <span className="text-zinc-600 text-sm">1.8 MB</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Download size={20} className="text-blue-400" />
                        <span className="text-zinc-800">
                          Practice Worksheets.pdf
                        </span>
                      </div>
                      <span className="text-zinc-600 text-sm">892 KB</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
