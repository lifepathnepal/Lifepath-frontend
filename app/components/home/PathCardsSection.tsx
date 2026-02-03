import { Cross, Crosshair, CrossIcon, X } from "lucide-react";

export default function PathCardsSection() {
  const problems = [
    "Too many courses, no direction",
    "No clarity before enrolling",
    "Learn skills but don't know what to do next",
    "No real guidance or roadmap",
  ];

  const solutions = [
    "Career-first approach",
    "Skill roadmap before learning",
    "Mentorship & direction",
    "Practical, job-ready learning",
  ];

  return (
    <section className="w-full px-4 bg-white">
      <div className="max-w-6xl mx-auto py-16">
        {/* Story Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xl font-semibold text-blue-700">
            Why LifePath is different
          </div>
          <h2 className="max-w-5xl mx-auto leading-tight text-3xl md:text-3xl font-semibold text-slate-900 mt-4">
            What if you didn&apos;t start with a course?
            <br />A career path should feel focused, guided, and job‑ready. Here
            is how LifePath does it.
          </h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto"></p>
        </div>

        {/* Problems vs Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Problems */}
          <div className="rounded-2xl border border-rose-200 bg-rose-50/40 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-600/10 text-rose-700 text-sm font-bold">
                <X size={12} />
              </span>
              <div>
                <p className="text-lg font-semibold text-rose-700 uppercase tracking-wide">
                  Problems
                </p>
                <p className="text-rose-600 text-sm">What learners face</p>
              </div>
            </div>

            <div className="space-y-3">
              {problems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-rose-200 bg-white px-4 py-3"
                >
                  <p className="text-rose-900 font-normal">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="rounded-2xl border border-green-200 bg-green-50/40 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-600/10 text-green-700 text-sm font-bold">
                ✓
              </span>
              <div>
                <p className="text-lg font-semibold text-green-700 uppercase tracking-wide">
                  Lifepath solution
                </p>
                <p className="text-green-600 font-normal text-sm">
                  Confident direction
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {solutions.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-green-200 bg-white px-4 py-3"
                >
                  <p className="text-green-900 font-normal">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
