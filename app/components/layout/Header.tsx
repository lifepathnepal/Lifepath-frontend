"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ChevronDown,
  BookOpen,
  Calendar,
  GraduationCap,
  Map,
  Brain,
  Briefcase,
  Search,
  Menu,
  X,
} from "lucide-react";
import { useScrollDirection } from "@/app/hooks/useScrollDirection";

export default function Header() {
  const isVisible = useScrollDirection();
  const [searchValue, setSearchValue] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const resources = [
    {
      label: "Books",
      description: "Career development resources and guides",
      icon: BookOpen,
      href: "#books",
    },
    {
      label: "Events",
      description: "Networking and learning events",
      icon: Calendar,
      href: "#events",
    },
    {
      label: "Courses",
      description: "Online courses and skill development",
      icon: GraduationCap,
      href: "#courses",
    },
  ];

  const career = [
    {
      label: "Roadmap",
      description: "Your personalized career path",
      icon: Map,
      href: "#roadmap",
    },
    {
      label: "Personality",
      description: "Self-assessment tools & insights",
      icon: Brain,
      href: "#personality",
    },
    {
      label: "Jobs",
      description: "Browse and apply for opportunities",
      icon: Briefcase,
      href: "#jobs",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-200 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0 cursor-pointer">
            <Image
              src="/logo1.png"
              alt="LifePath Logo"
              width={120}
              height={48}
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation Links - Desktop Only */}
          <div className="hidden lg:flex items-center gap-1 ml-10">
            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 px-3 py-2 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 rounded-full transition-colors font-medium text-sm cursor-pointer">
                Resources
                <ChevronDown size={18} />
              </button>

              {/* Resources Dropdown Menu */}
              <div className="absolute left-0 mt-4 w-80 bg-white border border-zinc-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-4">
                <div className="px-4 pb-3 border-b border-zinc-100">
                  <p className="text-xs font-semibold text-zinc-600 uppercase tracking-wide">
                    Resources
                  </p>
                </div>
                <div className="px-4 py-3 space-y-2">
                  {resources.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 transition-colors group"
                    >
                      <item.icon
                        size={24}
                        className="text-blue-600 shrink-0 mt-0.5 group-hover:text-blue-700"
                      />
                      <div>
                        <p className="font-semibold text-zinc-900 text-sm">
                          {item.label}
                        </p>
                        <p className="text-xs text-zinc-600">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Career Tools Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-sm gap-1.5 px-3 py-2 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 rounded-full transition-colors font-medium cursor-pointer">
                Your Career
                <ChevronDown size={18} />
              </button>

              {/* Career Dropdown Menu */}
              <div className="absolute left-0 mt-4 w-80 bg-white border border-zinc-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-4">
                <div className="px-4 pb-3 border-b border-zinc-100">
                  <p className="text-xs font-semibold text-zinc-600 uppercase tracking-wide">
                    Career Tools
                  </p>
                </div>
                <div className="px-4 py-3 space-y-2">
                  {career.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 transition-colors group"
                    >
                      <item.icon
                        size={24}
                        className="text-blue-600 shrink-0 mt-0.5 group-hover:text-blue-700"
                      />
                      <div>
                        <p className="font-semibold text-zinc-900 text-sm">
                          {item.label}
                        </p>
                        <p className="text-xs text-zinc-600">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Links */}
            <a
              href="#"
              className="px-3 py-2 text-sm text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 rounded-full transition-colors font-medium cursor-pointer"
            >
              Blogs
            </a>
            <a
              href="#"
              className="px-3 py-2 text-sm text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 rounded-full transition-colors font-medium cursor-pointer"
            >
              About
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-zinc-700 hover:bg-blue-50 hover:text-blue-600 rounded-full transition-all duration-200 border border-transparent hover:border-blue-200 cursor-pointer"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* Log In Button */}
            <button className="hidden sm:inline-block px-5 py-2 text-blue-600 font-medium hover:bg-blue-50 hover:border-blue-200 border border-transparent rounded-full transition-colors whitespace-nowrap text-sm cursor-pointer">
              Log In
            </button>

            {/* Sign Up Button */}
            <button className="inline-block px-5 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors shadow-sm whitespace-nowrap text-sm cursor-pointer">
              Join for free
            </button>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-zinc-700 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Search Modal/Popup */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 bg-black/5 backdrop-blur-xs z-60 flex items-start justify-center pt-16 px-4"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl animate-in fade-in slide-in-from-top-5 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Header */}
            <div className="flex items-center gap-3 p-4 border-b border-zinc-200">
              <Search size={20} className="text-blue-600" />
              <input
                type="text"
                placeholder="What do you want to learn today?"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                autoFocus
                className="flex-1 text-lg outline-none placeholder-zinc-400 text-zinc-900"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer"
                aria-label="Close search"
              >
                <X size={20} className="text-zinc-600" />
              </button>
            </div>

            {/* Search Suggestions */}
            <div className="p-4">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-3">
                Popular Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Frontend Development",
                  "UX Design",
                  "Career Guidance",
                  "Personality Test",
                  "Interview Tips",
                  "Job Opportunities",
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchValue(term)}
                    className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm rounded-full transition-colors cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="p-4 pt-0">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-3">
                Quick Links
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  {
                    label: "All Courses",
                    icon: GraduationCap,
                    href: "#courses",
                  },
                  { label: "Career Test", icon: Brain, href: "#personality" },
                  { label: "Job Board", icon: Briefcase, href: "#jobs" },
                  { label: "Resources", icon: BookOpen, href: "#books" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsSearchOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                  >
                    <link.icon
                      size={18}
                      className="text-blue-600 group-hover:text-blue-700"
                    />
                    <span className="text-sm font-medium text-zinc-700 group-hover:text-blue-700">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <div className="bg-linear-to-r from-blue-600 via-blue-500 to-indigo-600 text-white text-center py-2.5 px-4 shadow-md">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Icon
            icon="mdi:star"
            width={18}
            height={18}
            className="text-yellow-300 animate-pulse"
          />
          <h2 className="font-semibold text-sm md:text-base">
            🚀 Join LifePath Today – Start Your Career Growth Journey Anytime!
          </h2>
          <Icon
            icon="mdi:arrow-right"
            width={18}
            height={18}
            className="text-yellow-300"
          />
        </div>
      </div> */}
    </header>
  );
}
