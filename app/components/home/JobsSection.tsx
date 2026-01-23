import { Icon } from "@iconify/react";

export default function JobsSection() {
  const jobs = [
    {
      id: "F",
      title: "Frontend Developer",
      company: "Linear",
      experience: "1-5",
      salary: "100k-140k",
      location: "Australia only",
      type: "Full time",
      category: "Software Developer",
      postedTime: "2 hours ago",
    },
    {
      id: "S",
      title: "Senior Product Designer",
      company: "Stripe",
      experience: "6-10",
      salary: "120k-180k",
      location: "Remote",
      type: "Full time",
      category: "Product Designer",
      postedTime: "4 hours ago",
    },
    {
      id: "UX",
      title: "UX/UI Designer",
      company: "Webflow",
      experience: "3-7",
      salary: "110k-150k",
      location: "US only",
      type: "Full time",
      category: "UX Designer",
      postedTime: "5 hours ago",
    },
    {
      id: "AE",
      title: "Account Executive",
      company: "Intercom",
      experience: "2-6",
      salary: "90k-140k",
      location: "Any",
      type: "Full time",
      category: "Sales",
      postedTime: "5 hours ago",
    },
  ];

  const popularSearches = [
    { title: "Product Designer", count: "284 jobs" },
    { title: "Customer Success", count: "301 jobs" },
    { title: "Product Manager", count: "380 jobs" },
    { title: "Engineering Manager", count: "64 jobs" },
  ];

  const getInitials = (id: string) => id;

  const getLogoColor = (index: number) => {
    const colors = [
      "bg-linear-to-br from-blue-600 to-blue-700",
      "bg-linear-to-br from-indigo-600 to-indigo-700",
      "bg-linear-to-br from-blue-500 to-blue-600",
      "bg-linear-to-br from-slate-700 to-slate-800",
    ];
    return colors[index % colors.length];
  };

  return (
    <section
      id="jobs"
      className="py-20 bg-linear-to-br from-white via-blue-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <Icon
              icon="mdi:briefcase"
              width={32}
              height={32}
              className="text-blue-600"
            />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Opportunities
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-zinc-900 mb-4">
            High Paying Jobs
          </h2>
          <p className="text-lg text-zinc-600">
            Discover premium job opportunities from top companies across the
            world.
          </p>
        </div>

        {/* Main Layout - List + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Jobs List */}
          <div className="lg:col-span-2">
            {/* Job Count Badge */}
            <div className="flex items-center gap-2 mb-8">
              <div className="px-4 py-2 bg-blue-100 rounded-full">
                <p className="text-sm font-semibold text-blue-700">
                  {jobs.length * 400} total jobs available
                </p>
              </div>
            </div>

            {/* Jobs List */}
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-blue-100 p-6 hover:shadow-sm hover:border-blue-400 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex gap-4">
                    {/* Logo */}
                    <div
                      className={`${getLogoColor(index)} w-14 h-14 rounded-lg flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md transition-shadow`}
                    >
                      <span className="text-white font-bold text-lg">
                        {getInitials(job.id)}
                      </span>
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
                          <Icon
                            icon="mdi:calendar"
                            width={16}
                            height={16}
                            className="text-zinc-400"
                          />
                          <span className="text-xs text-zinc-600">
                            {job.experience} yrs exp
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Icon
                            icon="mdi:currency-usd"
                            width={16}
                            height={16}
                            className="text-green-600"
                          />
                          <span className="text-xs font-semibold text-green-600">
                            {job.salary}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Icon
                            icon="mdi:map-marker"
                            width={16}
                            height={16}
                            className="text-zinc-400"
                          />
                          <span className="text-xs text-zinc-600">
                            {job.location}
                          </span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex gap-2 flex-wrap">
                        <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                          <Icon icon="mdi:clock" width={12} height={12} />
                          {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                          <Icon icon="mdi:tag" width={12} height={12} />
                          {job.category}
                        </span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <Icon
                      icon="mdi:chevron-right"
                      width={24}
                      height={24}
                      className="text-blue-300 shrink-0 mt-2 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <button className="mt-8 w-full py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              <span>Load More Jobs</span>
              <Icon icon="mdi:arrow-down" width={18} height={18} />
            </button>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Newsletter Section */}
            <div className="bg-linear-to-br from-blue-600 to-indigo-600 rounded-xl p-6 shadow-lg border border-blue-400/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-500/30 rounded-lg">
                  <Icon
                    icon="mdi:send"
                    width={24}
                    height={24}
                    className="text-white"
                  />
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Job Alerts</h4>
              <p className="text-blue-100 text-sm mb-4">
                Get notified about new opportunities matching your profile.
              </p>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2.5 border border-blue-400/50 bg-white/10 rounded-lg text-sm text-white placeholder-blue-200 focus:outline-none focus:border-white focus:bg-white/20 transition-all mb-3"
              />
              <button className="w-full bg-white hover:bg-blue-50 text-blue-600 font-semibold py-2.5 rounded-lg transition-colors shadow-md hover:shadow-lg">
                Subscribe Now
              </button>
              <p className="text-xs text-blue-100 mt-3">
                We care about your data in our{" "}
                <a
                  href="#"
                  className="text-blue-200 hover:text-white underline"
                >
                  privacy policy
                </a>
              </p>
            </div>

            {/* Popular Searches */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon
                  icon="mdi:trending-up"
                  width={20}
                  height={20}
                  className="text-blue-600"
                />
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
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h4 className="font-bold text-zinc-900 mb-4">Quick Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-600">Avg. Salary</span>
                  <span className="font-bold text-blue-600">$120k-$170k</span>
                </div>
                <div className="w-full bg-zinc-200 rounded-full h-1.5"></div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-600">Companies</span>
                  <span className="font-bold text-blue-600">500+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
