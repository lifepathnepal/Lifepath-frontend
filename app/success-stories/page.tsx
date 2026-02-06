import React from "react";
import Image from "next/image";
import NewsletterCTA from "../components/home/NewsletterCTA";

const stories = [
  {
    name: "Ayesha Rahman",
    role: "Junior UX Designer",
    company: "BrightLabs",
    before: "Confused between design and marketing",
    after: "Landed her first UX role in 4 months",
    quote:
      "Lifepath helped me focus on UX and build a portfolio that got me hired.",
    story:
      "She followed the clarity roadmap, practiced weekly design challenges, and refined her case studies with mentor feedback until her portfolio felt confident and cohesive. She also learned how to present her process clearly, which helped her stand out during interviews and communicate value to hiring teams.",
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
    story:
      "He built small projects every week, learned Git collaboration, and shipped a capstone app that helped him stand out in interviews. By documenting his learning journey and showcasing real features, he could explain his decisions with clarity and confidence.",
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
    story:
      "She focused on campaign planning, content calendars, and analytics, then used real results from a mock campaign in her interviews. The structured practice helped her explain strategy, creative choices, and performance outcomes in a way employers valued.",
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
    story:
      "He polished his brand projects, improved presentation skills, and built a portfolio that earned consistent freelance referrals. After refining client communication and feedback loops, he started getting repeat work and stronger word‑of‑mouth recommendations.",
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
    story:
      "She created structured content systems, learned paid social basics, and now leads social growth for multiple brands. By tracking engagement trends and iterating weekly, she gained the confidence to pitch and manage larger accounts.",
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
    story:
      "He mapped his skills to product roles, built a UX case study from scratch, and demonstrated a clear product mindset during interviews. The additional focus on problem framing and user insights made his portfolio feel professional and job‑ready.",
    tags: ["Product Design", "Career Mapping", "Job Ready"],
    img: "/students/woman3.png",
  },
  {
    name: "Sara Haque",
    role: "Data Analyst",
    company: "InsightWorks",
    before: "Overwhelmed by tools and dashboards",
    after: "Now delivering weekly KPI reports",
    quote: "The structured path helped me finally connect data to decisions.",
    story:
      "She learned SQL fundamentals, built clear dashboards, and showcased a reporting portfolio that landed her a data role. Presenting insights with simple visuals and business context helped her communicate impact to hiring managers.",
    tags: ["Analytics", "SQL", "Dashboards"],
    img: "/students/mentor.png",
  },
  {
    name: "Fahim Azad",
    role: "QA Tester",
    company: "TestBridge",
    before: "Unsure how to break into tech",
    after: "Now testing live web releases",
    quote: "The hands-on projects made QA feel real and practical.",
    story:
      "He practiced test cases, bug reporting, and automation basics, then used a QA project log to impress recruiters. By demonstrating structured thinking and attention to detail, he proved he could handle real product releases.",
    tags: ["QA", "Testing", "Bug Reports"],
    img: "/students/yess.png",
  },
  {
    name: "Nanu Maya",
    role: "Product Designer",
    company: "NovaTech",
    before: "Did random courses without outcome",
    after: "Moved into a product design role",
    quote: "The career mapping helped me choose the right path fast.",
    story:
      "He mapped his skills to product roles, built a UX case study from scratch, and demonstrated a clear product mindset during interviews. The additional focus on problem framing and user insights made his portfolio feel professional and job‑ready.",
    tags: ["Product Design", "Career Mapping", "Job Ready"],
    img: "/students/woman3.png",
  },
];

const page = () => {
  return (
    <section className="bg-zinc-100">
      {/* Banner */}
      <section className="bg-blue-700 text-white mt-16">
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
      <div className="max-w-6xl mx-auto py-16 px-4 md:px-0">
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
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
                story:
                  "She applied weekly practice tasks, improved case studies with mentor feedback, and built a portfolio that matched hiring expectations. The added focus on storytelling and presentation made her portfolio feel polished and professional.",
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
                story:
                  "He completed a project roadmap, learned teamwork with Git, and presented a strong capstone in interviews. Clear documentation and project walkthroughs helped him prove his development skills quickly.",
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
                story:
                  "She built a complete campaign plan, tested ad copies, and showcased results in her internship interviews. By explaining the strategy behind each decision, she demonstrated a strong marketer mindset.",
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
                story:
                  "He refined his portfolio, improved presentations, and now lands repeat freelance projects. Better client communication and tighter project execution helped him earn recurring work.",
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
                story:
                  "She structured content calendars, learned analytics, and built a social growth playbook for clients. Consistent optimization and reporting strengthened her ability to manage multiple brands confidently.",
                tags: ["Social Media", "Clarity", "Career Switch"],
              },
              {
                name: "Bikash Gurung",
                role: "Product Designer",
                company: "Sagarmatha Tech",
                before: "Did random courses without outcome",
                after: "Moved into a product design role",
                quote: "Career mapping helped me pick the right path quickly.",
                story:
                  "He created a full UX case study, documented his process, and showcased his product thinking to hiring teams. Stronger problem framing and user insight made his work stand out in interviews.",
                tags: ["Product Design", "Career Mapping", "Job Ready"],
              },
              {
                name: "Saraswati Poudel",
                role: "Data Analyst",
                company: "Kathmandu Analytics",
                before: "Overwhelmed by tools and dashboards",
                after: "Now delivering weekly KPI reports",
                quote: "The roadmap helped me connect data to business goals.",
                story:
                  "She learned SQL, built dashboards, and presented insights that made hiring managers take notice. Pairing metrics with clear recommendations showed she could drive business decisions.",
                tags: ["Analytics", "SQL", "Dashboards"],
              },
              {
                name: "Aashish Bista",
                role: "QA Tester",
                company: "Everest QA",
                before: "Unsure how to enter tech",
                after: "Now testing live product releases",
                quote: "Hands-on QA projects made everything click.",
                story:
                  "He practiced test cases, bug reporting, and basic automation, then showcased a QA project log. The structured approach helped him communicate quality impact and readiness for live releases.",
                tags: ["QA", "Testing", "Bug Reports"],
              },
            ];

            const data = nepaliOverrides[idx]
              ? { ...s, ...nepaliOverrides[idx] }
              : s;

            return (
              <div
                key={data.name}
                className="flex h-full flex-col border border-zinc-200 bg-white p-6"
              >
                <div className="flex-1">
                  <div className="text-xl text-yellow-500 tracking-[0.2em]">
                    ★★★★★
                  </div>

                  <p className="mt-4 text-lg text-zinc-900 leading-relaxed">
                    {data.quote}
                  </p>

                  <p className="mt-3 text-sm text-zinc-700 leading-relaxed min-h-30">
                    {data.story}
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-4 border-t border-zinc-200 pt-4 text-xs text-zinc-600 min-h-27.5">
                    <div>
                      <div className="text-base font-semibold text-zinc-900">
                        Before
                      </div>
                      <div className="mt-1">{data.before}</div>
                    </div>
                    <div>
                      <div className="text-base font-semibold text-zinc-900">
                        After
                      </div>
                      <div className="mt-1">{data.after}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto flex items-center gap-3 border-t border-zinc-200 pt-4">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-zinc-200">
                    <Image
                      src={data.img}
                      alt={data.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-zinc-900 uppercase tracking-wide">
                      {data.name}
                    </div>
                    <div className="text-xs text-zinc-600">
                      {data.role} • {data.company}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
       <NewsletterCTA
              btnText="Join Class Today"
              title="Ready to take the next step in your career?"
              description="Enroll in our job training programs and unlock your potential."
              imageSrc="/heroImages/woman2.png"
            />
    </section>
  );
};

export default page;
