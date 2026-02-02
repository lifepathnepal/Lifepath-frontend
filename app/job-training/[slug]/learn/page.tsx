"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  Clock,
  PlayCircle,
  CheckCircle2,
  ChevronRight,
  Play,
} from "lucide-react";
import Image from "next/image";

const learningMeta: Record<
  string,
  {
    title: string;
    subtitle: string;
    totalHours: string;
    modules: { title: string; lessons: number; duration: string }[];
    outcomes: string[];
    projects: string[];
    resources: string[];
    sections: { id: string; title: string; content: string[] }[];
  }
> = {
  "graphic-designing-bootcamp": {
    title: "Graphic Designing Learning Hub",
    subtitle: "Build a portfolio with real-world design projects.",
    totalHours: "9 hours",
    modules: [
      { title: "Design Foundations", lessons: 6, duration: "1.5 hours" },
      { title: "Branding & Identity", lessons: 8, duration: "2.5 hours" },
      { title: "Digital Design Projects", lessons: 10, duration: "3 hours" },
      { title: "Portfolio & Career", lessons: 5, duration: "2 hours" },
    ],
    outcomes: [
      "Create a complete brand identity system",
      "Design marketing assets for real campaigns",
      "Present a portfolio-ready case study",
      "Apply typography and color theory confidently",
    ],
    projects: [
      "Brand identity for a startup",
      "Social media campaign kit",
      "Event poster and flyer series",
    ],
    resources: [
      "Typography practice pack",
      "Color palette templates",
      "Case study writing guide",
    ],
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        content: [
          "Skip months of trial-and-error with a guided, project-based learning path tailored for design beginners.",
        ],
      },
      {
        id: "why-copy-paste",
        title: "Why this learning format?",
        content: [
          "We focus on practical, production-ready workflows so you build real assets, not just theory notes.",
          "You get templates, critiques, and portfolio-ready outputs with every module.",
        ],
      },
      {
        id: "built-for-production",
        title: "Built for production",
        content: [
          "Each module is structured around deliverables used by real designers in agencies and startups.",
          "You&apos;ll apply typography, color, and layout systems to client-style briefs.",
        ],
      },
      {
        id: "next-steps",
        title: "Next steps",
        content: [
          "Complete the first module, publish your first case study, and schedule your review session.",
        ],
      },
    ],
  },
  "web-development-bootcamp": {
    title: "Web Development Learning Hub",
    subtitle: "From fundamentals to full-stack deployment.",
    totalHours: "12 hours",
    modules: [
      { title: "Intro to Web", lessons: 8, duration: "2 hours" },
      { title: "HTML & CSS", lessons: 15, duration: "5 hours" },
      { title: "JavaScript Essentials", lessons: 20, duration: "8 hours" },
      { title: "React Development", lessons: 18, duration: "7 hours" },
      { title: "Backend with Node.js", lessons: 16, duration: "6 hours" },
      { title: "Final Project", lessons: 12, duration: "5 hours" },
    ],
    outcomes: [
      "Build responsive, accessible web apps",
      "Develop APIs with Node.js and Express",
      "Deploy full-stack apps to production",
      "Collaborate using Git and GitHub workflows",
    ],
    projects: [
      "Portfolio landing page",
      "Full-stack CRUD app",
      "Authentication-ready web app",
    ],
    resources: [
      "HTML/CSS cheat sheets",
      "JavaScript exercises workbook",
      "Deployment checklist",
    ],
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        content: [
          "This learning hub guides you from fundamentals to production-ready full-stack apps.",
        ],
      },
      {
        id: "why-copy-paste",
        title: "Why this learning format?",
        content: [
          "We focus on building real projects and shipping to production so you build employer-ready skills.",
          "Each module includes tasks, reviews, and a deployable outcome.",
        ],
      },
      {
        id: "built-for-production",
        title: "Built for production",
        content: [
          "You&apos;ll learn modern tooling, version control, and deployment workflows used by teams.",
          "Projects are structured like real product sprints.",
        ],
      },
      {
        id: "next-steps",
        title: "Next steps",
        content: [
          "Start module one, complete your first task, and publish your project demo.",
        ],
      },
    ],
  },
  "digital-marketing-bootcamp": {
    title: "Digital Marketing Learning Hub",
    subtitle: "Launch campaigns and grow real brands.",
    totalHours: "8 hours",
    modules: [
      { title: "Marketing Foundations", lessons: 6, duration: "1.5 hours" },
      { title: "Content & Social", lessons: 8, duration: "2.5 hours" },
      { title: "Paid Ads & Performance", lessons: 9, duration: "2.5 hours" },
      { title: "Analytics & Reporting", lessons: 5, duration: "1.5 hours" },
    ],
    outcomes: [
      "Build campaigns with clear conversion goals",
      "Create content systems that scale",
      "Run ads and optimize ROI",
      "Report insights to stakeholders",
    ],
    projects: [
      "Campaign strategy deck",
      "Social media growth plan",
      "Ad set with performance report",
    ],
    resources: [
      "Campaign planning template",
      "Ad copy swipe file",
      "Analytics checklist",
    ],
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        content: [
          "Learn to build marketing systems that turn attention into revenue.",
        ],
      },
      {
        id: "why-copy-paste",
        title: "Why this learning format?",
        content: [
          "We combine strategy, execution, and analytics so you can prove results.",
          "Every module ships a real deliverable you can show clients or employers.",
        ],
      },
      {
        id: "built-for-production",
        title: "Built for production",
        content: [
          "You&apos;ll use real tools, budgets, and KPIs that teams care about.",
          "Workflows mirror how growth teams run experiments.",
        ],
      },
      {
        id: "next-steps",
        title: "Next steps",
        content: [
          "Launch your first campaign and share the results with your mentor.",
        ],
      },
    ],
  },
};

const musicTracks = [
  { title: "Focus Flow", duration: "2:48", src: "/videos/lofi.mp3" },
  { title: "Deep Work", duration: "3:12", src: "/videos/calm.mp3" },
  { title: "Calm Signals", duration: "4:05", src: "/videos/lofi2.mp3" },
];

export default function JobTrainingLearnPage() {
  const params = useParams();
  const slugParam = params?.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;
  const meta = slug ? learningMeta[slug] : undefined;
  const [isPlayerMenuOpen, setIsPlayerMenuOpen] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const lastScrollY = useRef(0);
  const playerMenuRef = useRef<HTMLDivElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [selectedTrack, setSelectedTrack] = useState(musicTracks[0]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const isScrollingDown = currentY > lastScrollY.current + 6;
      const isScrollingUp = currentY < lastScrollY.current - 6;

      if (currentY < 10) {
        setIsNavHidden(false);
      } else if (isScrollingDown) {
        setIsNavHidden(true);
        if (isPlayerMenuOpen) {
          setIsPlayerMenuOpen(false);
        }
      } else if (isScrollingUp) {
        setIsNavHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isPlayerMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isPlayerMenuOpen) {
        return;
      }

      const target = event.target as Node;
      if (playerMenuRef.current && !playerMenuRef.current.contains(target)) {
        setIsPlayerMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isPlayerMenuOpen]);

  if (!meta) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-zinc-900 mb-4">
            Learning Page Not Found
          </h1>
          <p className="text-zinc-500">Please check back later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-12 bg-[#ffffe9]">
      <section
        className={`border-b border-zinc-200 sticky top-0 z-40 bg-[#ffffe9] transition-transform duration-300 ${
          isNavHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-2">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/favicon.svg"
                alt="Learning Hub Logo"
                width={40}
                height={36}
                className="rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold"
              />
              <div className="text-sm text-zinc-600">
                Learning Hub
                <div className="text-xs text-zinc-400">v1.2</div>
              </div>
            </div>
            <div className="flex-1 max-w-xl relative" ref={playerMenuRef}>
              <button
                type="button"
                onClick={() => setIsPlayerMenuOpen((prev) => !prev)}
                className="w-full flex items-center gap-3 rounded-full border border-zinc-200 bg-[#ffffe9] px-2 py-2 text-left hover:border-blue-300"
                aria-expanded={isPlayerMenuOpen}
                aria-controls="player-preferences"
              >
                <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-semibold">
                  <Play size={16} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-zinc-700">
                    Focus Audio
                  </p>
                  <p className="text-[11px] text-zinc-500">
                    {selectedTrack.title}
                  </p>
                </div>
                <audio
                  ref={audioRef}
                  className="h-8 w-40 accent-blue-600"
                  controls
                  preload="none"
                  onClick={(event) => event.stopPropagation()}
                >
                  <source src={selectedTrack.src} type="audio/mp4" />
                </audio>
              </button>

              {isPlayerMenuOpen && (
                <div
                  id="player-preferences"
                  className="absolute left-0 right-0 mt-2 rounded-2xl border border-zinc-200 bg-white/30 backdrop-blur-2xl p-4 shadow-lg z-20"
                >
                  <div className=" ">
                    <p className="text-xs font-semibold text-zinc-500 mb-2">
                      Music list
                    </p>
                    <div className="space-y-2 ">
                      {musicTracks.map((track, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => {
                            setSelectedTrack(track);
                            setIsPlayerMenuOpen(false);
                            if (audioRef.current) {
                              audioRef.current.pause();
                              audioRef.current.src = track.src;
                              audioRef.current.play().catch(() => undefined);
                            }
                          }}
                          className="w-full flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-100/50 px-3 py-2 text-left text-sm text-zinc-700 hover:border-blue-300 hover:bg-blue-50/60 cursor-pointer group transition-colors duration-300"
                        >
                          <span className="font-medium group-hover:text-blue-500 transition-colors duration-300">
                            {track.title}
                          </span>
                          <span className="text-xs text-zinc-500">
                            {track.duration}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="hidden md:flex items-center gap-3 text-sm text-zinc-500">
              <span>{meta.totalHours}</span>
              <span>•</span>
              <span>{meta.modules.length} modules</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <div className="grid lg:grid-cols-[260px_minmax(0,1fr)_220px] gap-8">
          {/* Left Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-20 space-y-6">
              <div>
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-3">
                  Getting Started
                </p>
                <div className="space-y-2">
                  {meta.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center justify-between text-sm text-zinc-700 hover:text-blue-600"
                    >
                      <span>{section.title}</span>
                      <ChevronRight size={14} />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-3">
                  Modules
                </p>
                <div className="space-y-2">
                  {meta.modules.map((module, index) => (
                    <div key={index} className="text-sm text-zinc-700">
                      {module.title}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4">
                <p className="text-sm font-semibold text-zinc-900 mb-2">
                  Continue Learning
                </p>
                <p className="text-xs text-zinc-600 mb-3">
                  Pick up where you left off.
                </p>
                <button className="w-full px-3 py-2 rounded-full bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700">
                  Start Next Lesson
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="min-w-0">
            <div className="mb-6">
              <Link
                href={`/job-training/${slug}`}
                className="text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                ← Back to Program
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 mt-4">
                {meta.title}
              </h1>
              <p className="text-lg text-zinc-600 mt-2">{meta.subtitle}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 mt-5">
                <span className="flex items-center gap-2">
                  <Clock size={16} className="text-blue-600" />
                  {meta.totalHours} total
                </span>
                <span className="flex items-center gap-2">
                  <PlayCircle size={16} className="text-blue-600" />
                  {meta.modules.length} modules
                </span>
                <span className="flex items-center gap-2">
                  <BookOpen size={16} className="text-blue-600" />
                  Guided practice
                </span>
              </div>
            </div>

            <div className="space-y-10">
              {meta.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24"
                >
                  <h2 className="text-2xl font-bold text-zinc-900 mb-3">
                    {section.title}
                  </h2>
                  <div className="space-y-4 text-zinc-600">
                    {section.content.map((paragraph, index) => (
                      <p key={index} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}

              <section id="modules" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                  Modules Overview
                </h2>
                <div className="space-y-3">
                  {meta.modules.map((module, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-zinc-200 rounded-xl px-4 py-4"
                    >
                      <div>
                        <h3 className="font-semibold text-zinc-900">
                          {module.title}
                        </h3>
                        <p className="text-sm text-zinc-600">
                          {module.lessons} lessons • {module.duration}
                        </p>
                      </div>
                      <button className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700">
                        Start Module
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              <section id="resources" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                  Resources
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {meta.resources.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 border border-zinc-200 rounded-xl px-4 py-3"
                    >
                      <BookOpen size={16} className="text-blue-600" />
                      <span className="text-sm text-zinc-700">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section id="progress" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                  Progress Checklist
                </h2>
                <div className="space-y-3">
                  {[
                    "Complete your first module",
                    "Submit weekly task",
                    "Build your first project",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-blue-600" />
                      <span className="text-sm text-zinc-700">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-3">
                On this page
              </p>
              <div className="space-y-2 text-sm text-zinc-700">
                {meta.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block hover:text-blue-600"
                  >
                    {section.title}
                  </a>
                ))}
                <a href="#modules" className="block hover:text-blue-600">
                  Modules Overview
                </a>
                <a href="#resources" className="block hover:text-blue-600">
                  Resources
                </a>
                <a href="#progress" className="block hover:text-blue-600">
                  Progress Checklist
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
