"use client";

import {
  MapPin,
  Clock,
  DollarSign,
  BellRing,
  TrendingUp,
  ArrowRight,
  Search,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const jobs = [
    {
      id: 1,
      title: "Software Developer",
      company: "F1 Soft",
      location: "Kathmandu only",
      type: "Full time",
      salary: "80k-200k",
      experience: "1-5 yrs exp",
      category: "Software Developer",
      postedDate: "1 hour ago",
      img: "/company-logo/webx.png",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Cursor",
      location: "Remote",
      type: "Full time",
      salary: "60k-180k",
      experience: "1-4 yrs exp",
      category: "Product Designer",
      postedDate: "4 hours ago",
      img: "/company-logo/cursor.svg",
    },
    {
      id: 3,
      title: "Graphic Designer",
      company: "FonePay",
      location: "Nepal only",
      type: "Full time",
      salary: "60k-150k",
      experience: "3-7 yrs exp",
      category: "Branding Designer",
      postedDate: "5 hours ago",
      img: "/company-logo/webx.png",
    },
    {
      id: 4,
      title: "Account Executive",
      company: "Nameste",
      location: "Nepal only",
      type: "Part-time",
      salary: "90k-140k",
      experience: "2-6 yrs exp",
      category: "Finance",
      postedDate: "5 hours ago",
      img: "/company-logo/cursor.svg",
    },
  ];

  const popularSearches = [
    { title: "Product Designer", count: "284 jobs" },
    { title: "Customer Success", count: "301 jobs" },
    { title: "Product Manager", count: "380 jobs" },
    { title: "Engineering Manager", count: "64 jobs" },
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto py-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-4">
              Find Your <span className="text-blue-600">Dream Job</span>
            </h1>
            <p className="text-lg text-zinc-600 mb-8">
              Discover high-paying opportunities in Nepal and remote positions
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search jobs or companies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-zinc-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout - List + Sidebar */}
      <section className="max-w-6xl mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Newsletter Section */}
            <div className="bg-linear-to-br from-blue-600 to-indigo-600 rounded-xl p-6 shadow-lg border border-blue-400/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-500/30 rounded-lg">
                  <BellRing size={24} className="text-white" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Job Alerts</h4>
              <p className="text-blue-100 text-sm mb-4">
                Get notified about new opportunities matching your profile.
              </p>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2.5 border border-blue-400/50 bg-white/10 rounded-full text-sm text-white placeholder-blue-200 focus:outline-none focus:border-white focus:bg-white/20 transition-all mb-3"
              />
              <button className="w-full bg-white hover:bg-blue-50 text-blue-600 font-semibold py-2.5 rounded-full cursor-pointer transition-colors shadow-md hover:shadow-lg">
                Subscribe Now
              </button>
              <p className="text-xs text-blue-50 mt-3">
                We care about your data in our{" "}
                <a
                  href="#"
                  className="text-blue-50 font-semibold hover:italic hover:text-white underline"
                >
                  privacy policy
                </a>
              </p>
            </div>

            {/* Popular Searches */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp size={20} className="text-blue-600" />
                <h4 className="text-lg font-bold text-zinc-900">
                  Trending Roles
                </h4>
              </div>
              <div className="space-y-3">
                {popularSearches.map((search, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center justify-between p-4 rounded-lg bg-white border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
                  >
                    <div>
                      <p className="text-sm font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
                        {search.title}
                      </p>
                    </div>
                    <span className="text-xs font-medium text-zinc-500 bg-zinc-100 group-hover:bg-blue-100 group-hover:text-blue-600 px-2.5 py-1 rounded-full transition-colors">
                      {search.count}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-300">
              <h4 className="font-bold text-zinc-900 mb-4">Quick Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-600">Avg. Salary</span>
                  <span className="font-bold text-blue-600">
                    Rs.70k-Rs.400k
                  </span>
                </div>
                <div className="w-full bg-yellow-400 rounded-full h-1.5"></div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-600">Companies</span>
                  <span className="font-bold text-blue-600">500+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Jobs List */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl border border-blue-100 p-6 hover:shadow-sm transition-all duration-300 cursor-pointer group relative overflow-hidden"
                >
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-400 via-blue-700 to-sky-500 blur-sm" />
                    <div className="absolute inset-0.5 rounded-2xl bg-white z-0" />
                  </div>
                  <div className="flex gap-4 z-10 relative">
                    {/* Logo */}
                    <div className="w-20 h-20 rounded-lg flex items-center justify-center shrink-0 group-hover:border transition-shadow">
                      <Image
                        src={job.img || `/company-logos/${job.img}.png`}
                        alt={`${job.company} logo`}
                        width={56}
                        height={56}
                        className="rounded-lg"
                      />
                    </div>

                    {/* Job Details */}
                    <div className="grow">
                      {/* Title and Time */}
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h4 className="text-lg font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
                            {job.title}
                          </h4>
                          <p className="text-sm text-zinc-600 mt-1">
                            {job.company}
                          </p>
                        </div>
                        <span className="text-xs text-zinc-400 whitespace-nowrap bg-zinc-100 px-3 py-1 rounded-full">
                          {job.postedDate}
                        </span>
                      </div>

                      {/* Job Meta */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-600 mb-3">
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {job.experience}
                        </span>
                        <span className="flex items-center gap-1 text-green-600 font-semibold">
                          <DollarSign size={14} />
                          {job.salary}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {job.location}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                          {job.type}
                        </span>
                        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">
                          {job.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <div className="mt-8 text-center">
              <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors flex items-center gap-2 cursor-pointer mx-auto">
                <span>View More Jobs</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
