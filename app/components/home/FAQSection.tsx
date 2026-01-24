"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-lg text-zinc-600">
            Got questions? We&apos;ve got answers
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-zinc-200 rounded-2xl overflow-hidden bg-white hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-zinc-50 transition-colors  cursor-pointer"
                aria-expanded={openId === faq.id}
              >
                <span className="font-semibold text-zinc-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-blue-600 shrink-0 transition-transform duration-300 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 pt-2 text-zinc-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-zinc-600 mb-4">Still have questions?</p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-sm">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
