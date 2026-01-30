export default function TrustCredibilitySection() {
  return (
    <section className="w-full px-4 py-16 md:pt-20 bg-linear-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-blue-500/80">
            Trust &amp; Credibility
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-zinc-900 mt-4">
            Built by people who questioned their own path.
          </h2>
          <p className="text-sm md:text-base text-zinc-600 mt-4">
            We focus on honest guidance, not hype.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white border border-blue-100/80 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-900">
              Expert advisors
            </h3>
            <p className="text-sm text-zinc-600 mt-2">
              Guidance shaped with real career mentors and educators.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-blue-100/80 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-900">
              Research‑based approach
            </h3>
            <p className="text-sm text-zinc-600 mt-2">
              Grounded in MBTI and real‑world career mapping.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-blue-100/80 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-900">
              Real testimonials
            </h3>
            <p className="text-sm text-zinc-600 mt-2">
              Hear honest feedback from students who found clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
