import React from "react";
import Image from "next/image";

const stories = [
  {
    name: "Ayesha Rahman",
    role: "Junior UX Designer",
    company: "BrightLabs",
    before: "Confused between design and marketing",
    after: "Landed her first UX role in 4 months",
    quote:
      "Lifepath helped me focus on UX and build a portfolio that got me hired.",
    tags: ["UX", "Portfolio", "Mentorship"],
    img: "/students/mentor.png",
  },
  {
    name: "Jahirul Islam",
    role: "Front‑End Developer",
    company: "PixelGrid",
    before: "Started with zero coding background",
    after: "Now building production web apps",
    quote: "The step‑by‑step roadmap made learning feel simple and achievable.",
    tags: ["Web Dev", "Roadmap", "Projects"],
    img: "/students/yess.png",
  },
  {
    name: "Nabila Khan",
    role: "Digital Marketer",
    company: "GrowthPoint",
    before: "Learned skills but no direction",
    after: "Got a marketing internship in 2 months",
    quote: "I finally knew what to learn and why. That changed everything.",
    tags: ["Marketing", "Direction", "Internship"],
    img: "/students/woman3.png",
  },
  {
    name: "Imran Hossain",
    role: "Graphic Designer",
    company: "Studio44",
    before: "Struggled to build a strong portfolio",
    after: "Now freelancing with recurring clients",
    quote: "The feedback loops and portfolio reviews were game‑changing.",
    tags: ["Design", "Portfolio", "Freelance"],
    img: "/students/mentor.png",
  },
  {
    name: "Raisa Ahmed",
    role: "Social Media Manager",
    company: "Zenix",
    before: "Unsure how to start a career path",
    after: "Managing 5+ brand accounts",
    quote: "Lifepath gave me clarity and confidence to take action.",
    tags: ["Social Media", "Clarity", "Career Switch"],
    img: "/students/yess.png",
  },
  {
    name: "Tamim Chowdhury",
    role: "Product Designer",
    company: "NovaTech",
    before: "Did random courses without outcome",
    after: "Moved into a product design role",
    quote: "The career mapping helped me choose the right path fast.",
    tags: ["Product Design", "Career Mapping", "Job Ready"],
    img: "/students/woman3.png",
  },
];

const page = () => {
  return (
    <section className="bg-white">
      {/* Banner */}
      <section className="bg-linear-to-r from-black to-blue-700 text-white mt-16">
        <div className="max-w-6xl mx-auto py-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Lifepath students who <br /> found clarity and careers
            </h1>
            <p className="text-lg text-blue-100 mb-8">
              Real outcomes from learners who followed the Lifepath clarity
              framework.
            </p>
          </div>
        </div>
      </section>

      {/* Cards */}
      <div className="max-w-6xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((s, idx) => {
            const nepaliOverrides = [
              {
                name: "Sita Rai",
                role: "Junior UX Designer",
                company: "Himalaya Labs",
                before: "Unsure whether to focus on UX or graphic design",
                after: "Built a focused UX portfolio and got hired in 4 months",
                quote:
                  "The roadmap and reviews helped me turn ideas into a hire‑ready portfolio.",
                tags: ["UX", "Portfolio", "Mentorship"],
              },
              {
                name: "Prakash Thapa",
                role: "Front‑End Developer",
                company: "Kathmandu Tech",
                before: "Started without a coding background",
                after: "Now shipping production web features",
                quote:
                  "Clear milestones made learning feel practical and achievable.",
                tags: ["Web Dev", "Roadmap", "Projects"],
              },
              {
                name: "Anu Karki",
                role: "Digital Marketer",
                company: "Everest Growth",
                before: "Learned skills but lacked direction",
                after: "Secured a marketing internship in 2 months",
                quote:
                  "I finally knew what to learn and why—everything changed.",
                tags: ["Marketing", "Direction", "Internship"],
              },
              {
                name: "Rajan Shrestha",
                role: "Graphic Designer",
                company: "Studio Pokhara",
                before: "Struggled to build a strong portfolio",
                after: "Now freelancing with recurring clients",
                quote:
                  "The feedback loops made my work look professional fast.",
                tags: ["Design", "Portfolio", "Freelance"],
              },
              {
                name: "Mina Adhikari",
                role: "Social Media Manager",
                company: "Bagaicha Media",
                before: "Unsure how to start a career path",
                after: "Managing 5+ brand accounts",
                quote:
                  "Lifepath gave me clarity and confidence to take action.",
                tags: ["Social Media", "Clarity", "Career Switch"],
              },
              {
                name: "Bikash Gurung",
                role: "Product Designer",
                company: "Sagarmatha Tech",
                before: "Did random courses without outcome",
                after: "Moved into a product design role",
                quote: "Career mapping helped me pick the right path quickly.",
                tags: ["Product Design", "Career Mapping", "Job Ready"],
              },
            ];

            const data = nepaliOverrides[idx]
              ? { ...s, ...nepaliOverrides[idx] }
              : s;

            return (
              <div
                key={data.name}
                className="rounded-3xl border border-blue-100 bg-blue-50/40 p-3 hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full h-80 rounded-lg overflow-hidden border border-blue-200 mb-4">
                  <Image
                    src={data.img}
                    alt={data.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {data.name}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {data.role} • {data.company}
                  </p>
                </div>

                <div className="space-y-2 text-sm text-slate-700">
                  <p>
                    <span className="font-semibold text-slate-900">
                      Before:
                    </span>{" "}
                    {data.before}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">After:</span>{" "}
                    {data.after}
                  </p>
                </div>

                <blockquote className="mt-4 text-slate-700 italic">
                  “{data.quote}”
                </blockquote>

                <div className="mt-4 flex flex-wrap gap-2">
                  {data.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-blue-200 bg-white px-3 py-1 text-xs text-blue-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default page;
