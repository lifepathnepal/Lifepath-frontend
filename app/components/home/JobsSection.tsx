"use client";
import {
  BellRing,
  TrendingUp,
  Calendar,
  DollarSign,
  MapPin,
  Clock,
  Tag,
  ChevronRight,
  ArrowRight,
  BriefcaseBusiness,
} from "lucide-react";
import Image from "next/image";

export default function JobsSection() {
  const jobs = [
    {
      img: "/company-logo/webx.png",
      title: "Software Developer",
      company: "F1 Soft",
      experience: "1-5",
      salary: "80k-200k",
      location: "Kathmandu only",
      type: "Full time",
      category: "Software Developer",
      postedTime: "1 hour ago",
    },
    {
      img: "/company-logo/cursor.svg",
      title: "UI/UX Designer",
      company: "Cursor",
      experience: "1-4",
      salary: "60k-180k",
      location: "Remote",
      type: "Full time",
      category: "Product Designer",
      postedTime: "4 hours ago",
    },
    {
      img: "/company-logo/webx.png",
      title: "Graphic Designer",
      company: "FonePay",
      experience: "3-7",
      salary: "60k-150k",
      location: "Nepal only",
      type: "Full time",
      category: "Branding Designer",
      postedTime: "5 hours ago",
    },
    {
      img: "/company-logo/cursor.svg",
      title: "Account Executive",
      company: "Nameste",
      experience: "2-6",
      salary: "90k-140k",
      location: "Nepal only",
      type: "Part-time",
      category: "Finance",
      postedTime: "5 hours ago",
    },
  ];

  const popularSearches = [
    { title: "Product Designer", count: "284 jobs" },
    { title: "Customer Success", count: "301 jobs" },
    { title: "Product Manager", count: "380 jobs" },
    { title: "Engineering Manager", count: "64 jobs" },
  ];

  // const getInitials = (id: string) => id;

  // const getLogoColor = (index: number) => {
  //   const colors = [
  //     "bg-linear-to-br from-blue-600 to-blue-700",
  //     "bg-linear-to-br from-indigo-600 to-indigo-700",
  //     "bg-linear-to-br from-blue-500 to-blue-600",
  //     "bg-linear-to-br from-slate-700 to-slate-800",
  //   ];
  //   return colors[index % colors.length];
  // };

  return (
    <section id="jobs" className="py-8">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <BriefcaseBusiness size={32} className="text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                Based on 5,000+ Nepali job listings
              </span>
            </div>
            {/* <ShinyText
              text="High-Paying Career Paths in Nepal (2026)"
              speed={1}
              delay={0.5}
              color="#000000"
              shineColor="#355CFE"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
              className="text-4xl font-semibold h-fit"
            /> */}
            <h2 className="text-4xl md:text-4xl font-bold  text-zinc-900 mb-4">
              High-Paying Career Paths in Nepal (2026)
            </h2>
            <p className="text-lg text-zinc-600">
              Discover premium job opportunities from top companies across
              Nepal.
            </p>
          </div>
          {/* Job Count Badge */}
          <div className="flex items-center gap-2 mb-8">
            <div className="px-4 py-2 bg-green-100 rounded-full">
              <p className="text-sm font-semibold text-green-700 animate-pulse">
                {jobs.length * 400} total jobs available
              </p>
            </div>
          </div>
        </div>

        {/* Main Layout - List + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Right Sidebar */}
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
                  <span className="font-bold text-blue-600">Rs.70k-Rs.400k</span>
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
          <div className=" lg:col-span-2">
            {/* Jobs List */}
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-blue-100 p-6 hover:shadow-sm transition-all duration-300 cursor-pointer group relative overflow-hidden"
                >
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-400 via-blue-700 to-sky-500 animate-spin-slow blur-sm"
                      style={{ animation: "spin 3s linear infinite" }}
                    />
                    <div className="absolute inset-0.5 rounded-2xl bg-linear-to-br from-blue-50 to-zinc-50 z-0" />
                  </div>
                  <div className="flex gap-4 z-10 relative">
                    {/* Logo */}
                    <div
                      className={` w-20 h-20 rounded-lg flex items-center justify-center shrink-0  group-hover:border transition-shadow`}
                    >
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
                          {job.postedTime}
                        </span>
                      </div>

                      {/* Details Grid */}
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={16} className="text-zinc-400" />
                          <span className="text-xs text-zinc-600">
                            {job.experience} yrs exp
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <DollarSign size={16} className="text-green-600" />
                          <span className="text-xs font-semibold text-green-600">
                            {job.salary}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={16} className="text-zinc-400" />
                          <span className="text-xs text-zinc-600">
                            {job.location}
                          </span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex gap-2 flex-wrap">
                        <span className="inline-flex items-center gap-1  text-blue-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                          <Clock size={12} />
                          {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                          <Tag size={12} />
                          {job.category}
                        </span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <ChevronRight
                      size={24}
                      className="text-blue-300 shrink-0 mt-2 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="flex justify-between items-center mt-8">
              <p>
                <span className="text-zinc-600 font-semibold">
                  Showing 1-10 of 100 jobs
                </span>
              </p>
              <button className="w-fit px-4 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <span>View More Jobs</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
