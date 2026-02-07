"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const faqs = [
  {
    id: 1,
    question: "What is LifePath and how can it help me?",
    answer:
      "LifePath is a comprehensive career guidance platform designed for students and professionals in Nepal. We help you discover your ideal career path through personality assessments, skill development courses, job opportunities, and expert guidance.",
  },
  {
    id: 2,
    question: "How does the personality test work?",
    answer:
      "Our personality test is based on the MBTI framework with 16 personality types. It takes about 10-15 minutes to complete and provides insights into your strengths, preferences, and suitable career paths based on your unique personality traits.",
  },
  {
    id: 3,
    question: "Are the courses certified?",
    answer:
      "Yes, all our courses come with certificates upon completion. Our courses are designed by industry experts and provide practical skills that are recognized by employers across various industries.",
  },
  {
    id: 4,
    question: "Is LifePath free to use?",
    answer:
      "LifePath offers both free and premium features. The personality test, job browsing, and basic career guidance are completely free. Premium courses and advanced features require a subscription.",
  },
  {
    id: 5,
    question: "How can I find jobs through LifePath?",
    answer:
      "Our job board features opportunities from top companies in Nepal. You can search by role, location, experience level, and industry. Simply create a profile, browse listings, and apply directly through our platform.",
  },
  {
    id: 6,
    question: "Can I get one-on-one career counseling?",
    answer:
      "Yes! We offer personalized career counseling sessions with experienced professionals. You can book a session through our platform to discuss your specific career goals and challenges.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="flex">
          <Image
            src="/heroImages/qna.png"
            alt="Footer Background"
            height={300}
            width={300}
            className=" object-contain hidden md:block"
          />
          <div className="divide-y divide-zinc-200 border-y border-zinc-200 max-w-2xl mx-auto">
            <div className="mb-4">
              <h2 className="max-w-5xl mx-auto leading-tight text-3xl md:text-3xl font-semibold text-slate-900 mt-4">
                Frequently Asked Questions
              </h2>
              <p className="text-base md:text-lg text-zinc-600 mt-2">
                Got questions? We&apos;ve got answers
              </p>
            </div>
            {faqs.map((faq, index) => (
              <div key={faq.id} className="py-6">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-start gap-4 text-left hover:text-zinc-900 transition-colors"
                  aria-expanded={openId === faq.id}
                >
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-md bg-blue-600 text-[11px] font-bold text-white">
                    {`${index + 1}`.padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-base md:text-lg font-semibold text-zinc-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`mt-1 text-zinc-500 shrink-0 transition-transform duration-300 ${
                      openId === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`pl-11 pr-6 overflow-hidden transition-all duration-300 ${
                    openId === faq.id ? "max-h-96 mt-3" : "max-h-0"
                  }`}
                >
                  <div className="text-sm md:text-base text-zinc-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-600 mb-4">Still have questions?</p>
          <Link href="/contact-us">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-sm cursor-pointer">
              Contact Support
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
