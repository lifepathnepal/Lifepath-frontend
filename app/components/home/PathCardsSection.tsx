import Link from "next/link";
import { Code, Palette, Megaphone, ArrowRight } from "lucide-react";

const paths = [
  {
    title: "Web Development",
    tagline: "Build modern websites & apps",
    duration: "4–6 months",
    href: "/job-training/web-development-bootcamp",
    Icon: Code,
    roadmap: ["HTML/CSS foundations", "JavaScript + React", "Backend + Deploy"],
  },
  {
    title: "Graphic Designing",
    tagline: "Turn creativity into income",
    duration: "3–5 months",
    href: "/job-training/graphic-designing-bootcamp",
    Icon: Palette,
    roadmap: ["Design basics", "Brand identity", "Portfolio projects"],
  },
  {
    title: "Digital Marketing",
    tagline: "Grow brands, earn online",
    duration: "3–4 months",
    href: "/job-training/digital-marketing-bootcamp",
    Icon: Megaphone,
    roadmap: ["Strategy & funnels", "Content & ads", "Analytics & growth"],
  },
];

export default function PathCardsSection() {
  return (
    <section className="w-full px-4 bg-white">
      <div className="max-w-6xl mx-auto py-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold text-blue-700">
            Career paths
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mt-4">
            Choose your path with clarity
          </h2>
          <p className="text-sm md:text-base text-slate-600 mt-3 max-w-2xl mx-auto">
            Outcome-focused learning paths with a roadmap preview on hover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paths.map((path) => (
            <Link
              key={path.title}
              href={path.href}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-linear-to-br from-blue-50/40 via-white to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 text-blue-700">
                  <path.Icon size={20} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {path.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2">{path.tagline}</p>
                <p className="text-xs text-slate-500 mt-3">
                  🕒 {path.duration}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                  View Path
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-6 bottom-6 translate-y-4 rounded-xl border border-blue-100 bg-white/90 p-3 text-xs text-slate-600 opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-semibold text-slate-800 mb-2">
                  Roadmap preview
                </p>
                <ul className="space-y-1">
                  {path.roadmap.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
