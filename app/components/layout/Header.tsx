"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useScrollDirection } from "@/app/hooks/useScrollDirection";

export default function Header() {
  const isVisible = useScrollDirection();
  const [searchValue, setSearchValue] = useState("");

  const resources = [
    {
      label: "Books",
      description: "Career development resources and guides",
      icon: "mdi:book-multiple",
      href: "#books",
    },
    {
      label: "Events",
      description: "Networking and learning events",
      icon: "mdi:calendar-multiple",
      href: "#events",
    },
    {
      label: "Courses",
      description: "Online courses and skill development",
      icon: "mdi:graduation-cap",
      href: "#courses",
    },
  ];

  const career = [
    {
      label: "Roadmap",
      description: "Your personalized career path",
      icon: "mdi:map",
      href: "#roadmap",
    },
    {
      label: "Personality",
      description: "Self-assessment tools & insights",
      icon: "mdi:brain",
      href: "#personality",
    },
    {
      label: "Jobs",
      description: "Browse and apply for opportunities",
      icon: "mdi:briefcase",
      href: "#jobs",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#f5f8ff] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
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
              <button className="flex items-center gap-1.5 px-3 py-2 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 rounded-full transition-colors font-medium text-sm">
                Resources
                <Icon icon="mdi:chevron-down" width={18} height={18} />
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
                      <Icon
                        icon={item.icon}
                        width={24}
                        height={24}
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
              <button className="flex items-center text-sm gap-1.5 px-3 py-2 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 rounded-full transition-colors font-medium">
                Your Career
                <Icon icon="mdi:chevron-down" width={18} height={18} />
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
                      <Icon
                        icon={item.icon}
                        width={24}
                        height={24}
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
              className="px-3 py-2 text-sm text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 rounded-full transition-colors font-medium"
            >
              Blogs
            </a>
            <a
              href="#"
              className="px-3 py-2 text-sm text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 rounded-full transition-colors font-medium"
            >
              About
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4 ml-auto">
            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:block w-80 relative">
              <input
                type="text"
                placeholder="What do you want to learn?"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full px-4 py-2.5 pr-12 bg-zinc-50 border border-blue-200 rounded-full text-sm text-zinc-900 placeholder-zinc-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all"
              />
              <button className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors shadow-sm flex items-center justify-center">
                <Icon icon="mdi:magnify" width={18} height={18} />
              </button>
            </div>

            {/* Log In Button */}
            <button className="hidden sm:inline-block px-5 py-2 text-blue-600 font-medium hover:bg-blue-50 rounded-full transition-colors whitespace-nowrap text-sm">
              Log In
            </button>

            {/* Sign Up Button */}
            <button className="inline-block px-5 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors shadow-sm whitespace-nowrap text-sm">
              Join for free
            </button>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-zinc-700 hover:bg-zinc-100 rounded-full transition-colors">
              <Icon icon="mdi:menu" width={24} height={24} />
            </button>
          </div>
        </div>
      </nav>
      <div className="bg-linear-to-r from-blue-600 via-blue-500 to-indigo-600 text-white text-center py-2.5 px-4 shadow-md">
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
      </div>
    </header>
  );
}
