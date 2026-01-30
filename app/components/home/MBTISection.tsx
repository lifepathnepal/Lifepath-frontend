import Link from "next/link";

const mbtiTypes = [
  { type: "INTJ", insight: "Strategic and systems‑oriented." },
  { type: "INTP", insight: "Analytical and concept‑driven." },
  { type: "ENTJ", insight: "Bold, decisive, and goal‑focused." },
  { type: "ENTP", insight: "Curious, inventive, and agile." },
  { type: "INFJ", insight: "Purpose‑led and empathetic." },
  { type: "INFP", insight: "Values‑first and imaginative." },
  { type: "ENFJ", insight: "People‑focused and motivating." },
  { type: "ENFP", insight: "Expressive and possibility‑driven." },
  { type: "ISTJ", insight: "Reliable, structured, and precise." },
  { type: "ISFJ", insight: "Supportive, steady, and practical." },
  { type: "ESTJ", insight: "Organized and execution‑minded." },
  { type: "ESFJ", insight: "Community‑driven and supportive." },
  { type: "ISTP", insight: "Hands‑on and adaptable." },
  { type: "ISFP", insight: "Quietly creative and grounded." },
  { type: "ESTP", insight: "Action‑oriented and bold." },
  { type: "ESFP", insight: "Energetic and people‑centric." },
];

export default function MBTISection() {
  return (
    <section className="w-full px-4 py-16 md:py-20 bg-linear-to-b from-blue-50/40 via-white to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-blue-500/80">
            MBTI Framework
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-zinc-900 mt-4">
            Not all minds work the same — and careers shouldn&apos;t either.
          </h2>
          <p className="text-sm md:text-base text-zinc-600 mt-4">
            MBTI helps identify how you make decisions, process information,
            work with others, and handle structure vs flexibility.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {mbtiTypes.map((item) => (
            <div
              key={item.type}
              className="group rounded-2xl border border-blue-100/80 bg-white p-5 md:p-6 text-center shadow-[0_8px_30px_rgba(37,99,235,0.08)] hover:shadow-[0_14px_40px_rgba(37,99,235,0.2)] transition-all hover:bg-blue-600 hover:border-blue-600"
            >
              <div className="mx-auto mb-3 inline-flex items-center justify-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold tracking-widest text-blue-700 ring-1 ring-blue-100 group-hover:bg-white/15 group-hover:text-white group-hover:ring-white/20">
                {item.type}
              </div>
              <div className="text-sm md:text-base font-semibold text-zinc-900 group-hover:text-white">
                {item.type}
              </div>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed group-hover:text-blue-50">
                {item.insight}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/personality-test"
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-blue-700 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all"
          >
            👉 See how your type works in the real world
          </Link>
        </div>
      </div>
    </section>
  );
}
