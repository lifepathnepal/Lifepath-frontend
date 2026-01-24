"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Search,
  Menu,
  X,
  GraduationCap,
  Briefcase,
  Calendar,
} from "lucide-react";
import { useScrollDirection } from "@/app/hooks/useScrollDirection";

export default function Header() {
  const isVisible = useScrollDirection();
  const pathname = usePathname();
  const [searchValue, setSearchValue] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-200 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={"/"} className="shrink-0 cursor-pointer">
            <Image
              src="/logo1.png"
              alt="LifePath Logo"
              width={120}
              height={48}
              className="h-8 w-auto"
            />
          </Link>

          {/* Navigation Links - Desktop Only */}
          <div className="hidden lg:flex items-center gap-1 ml-10">
            <Link
              href="/courses"
              className={`px-3 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer ${
                pathname === "/courses"
                  ? "bg-blue-100 text-blue-700"
                  : "text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50"
              }`}
            >
              Courses
            </Link>
            <Link
              href="/jobs"
              className={`px-3 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer ${
                pathname === "/jobs"
                  ? "bg-blue-100 text-blue-700"
                  : "text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50"
              }`}
            >
              Find Jobs
            </Link>
            <Link
              href="/events"
              className={`px-3 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer ${
                pathname === "/events"
                  ? "bg-blue-100 text-blue-700"
                  : "text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50"
              }`}
            >
              Events
            </Link>
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
            {/* <Link
              href="/login"
              className="hidden sm:inline-block px-5 py-2 text-blue-600 font-medium hover:bg-blue-50 hover:border-blue-200 border border-blue-100 rounded-full transition-colors whitespace-nowrap text-sm cursor-pointer"
            >
              Log In
            </Link> */}

            {/* Sign Up Button */}
            <Link
              href="/personality-test"
              className="inline-block px-5 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors shadow-sm whitespace-nowrap text-sm cursor-pointer"
            >
              Find My Lifepath
            </Link>

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
                    href: "/courses",
                  },
                  { label: "Job Board", icon: Briefcase, href: "/jobs" },
                  { label: "Events", icon: Calendar, href: "/events" },
                ].map((link) => (
                  <Link
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
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
