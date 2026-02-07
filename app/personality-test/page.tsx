"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Brain,
  CheckCircle,
  Clock,
  User,
} from "lucide-react";
import Link from "next/link";
import { getPersonalityType } from "./personalityData";
import NewsletterCTA from "../components/home/NewsletterCTA";

type Question = {
  id: number;
  question: string;
  dimension: "EI" | "SN" | "TF" | "JP";
  optionA: string;
  optionB: string;
};

const questions: Question[] = [
  // Extraversion (E) vs Introversion (I) - 10 questions
  {
    id: 1,
    question: "At social gatherings, I tend to:",
    dimension: "EI",
    optionA: "Talk to many people, even strangers",
    optionB: "Have deeper conversations with a few close people",
  },
  {
    id: 2,
    question: "After a busy week, I recharge by:",
    dimension: "EI",
    optionA: "Going out and socializing with friends",
    optionB: "Spending quiet time alone or with close ones",
  },
  {
    id: 3,
    question: "In group settings, I usually:",
    dimension: "EI",
    optionA: "Take initiative and lead conversations",
    optionB: "Observe and contribute when needed",
  },
  {
    id: 4,
    question: "I prefer working:",
    dimension: "EI",
    optionA: "In a collaborative team environment",
    optionB: "Independently with minimal interruptions",
  },
  {
    id: 5,
    question: "When meeting new people, I:",
    dimension: "EI",
    optionA: "Feel energized and excited",
    optionB: "Feel drained and need time to warm up",
  },
  {
    id: 6,
    question: "My ideal weekend involves:",
    dimension: "EI",
    optionA: "Multiple social activities and events",
    optionB: "Peaceful activities at home or in nature",
  },
  {
    id: 7,
    question: "When solving problems, I prefer:",
    dimension: "EI",
    optionA: "Discussing ideas out loud with others",
    optionB: "Thinking things through privately first",
  },
  {
    id: 8,
    question: "In my free time, I'm more likely to:",
    dimension: "EI",
    optionA: "Seek out social opportunities",
    optionB: "Enjoy solitary hobbies and reflection",
  },
  {
    id: 9,
    question: "I feel most comfortable:",
    dimension: "EI",
    optionA: "Being the center of attention",
    optionB: "Staying in the background",
  },
  {
    id: 10,
    question: "My energy level increases when:",
    dimension: "EI",
    optionA: "I'm around lots of people",
    optionB: "I have personal space and quiet",
  },

  // Sensing (S) vs Intuition (N) - 10 questions
  {
    id: 11,
    question: "I'm more interested in:",
    dimension: "SN",
    optionA: "Concrete facts and real experiences",
    optionB: "Abstract concepts and future possibilities",
  },
  {
    id: 12,
    question: "When learning something new, I prefer:",
    dimension: "SN",
    optionA: "Step-by-step practical instructions",
    optionB: "Understanding the big picture and theory",
  },
  {
    id: 13,
    question: "I tend to focus on:",
    dimension: "SN",
    optionA: "What is actually happening right now",
    optionB: "What could happen in the future",
  },
  {
    id: 14,
    question: "I'm more impressed by people who are:",
    dimension: "SN",
    optionA: "Practical and realistic",
    optionB: "Innovative and imaginative",
  },
  {
    id: 15,
    question: "When describing things, I use:",
    dimension: "SN",
    optionA: "Specific details and examples",
    optionB: "Metaphors and analogies",
  },
  {
    id: 16,
    question: "I trust:",
    dimension: "SN",
    optionA: "Direct experience and proven methods",
    optionB: "Intuition and gut feelings",
  },
  {
    id: 17,
    question: "I prefer tasks that are:",
    dimension: "SN",
    optionA: "Practical with clear applications",
    optionB: "Theoretical with room for creativity",
  },
  {
    id: 18,
    question: "When reading, I pay more attention to:",
    dimension: "SN",
    optionA: "The literal meaning and facts",
    optionB: "The underlying themes and symbolism",
  },
  {
    id: 19,
    question: "I'm better at remembering:",
    dimension: "SN",
    optionA: "Specific details and sequences",
    optionB: "General impressions and patterns",
  },
  {
    id: 20,
    question: "I prefer work that involves:",
    dimension: "SN",
    optionA: "Established procedures and routines",
    optionB: "Innovation and experimentation",
  },

  // Thinking (T) vs Feeling (F) - 10 questions
  {
    id: 21,
    question: "When making important decisions, I prioritize:",
    dimension: "TF",
    optionA: "Logical analysis and objective criteria",
    optionB: "Personal values and impact on people",
  },
  {
    id: 22,
    question: "I'm more convinced by:",
    dimension: "TF",
    optionA: "Logical reasoning and data",
    optionB: "Emotional appeals and personal stories",
  },
  {
    id: 23,
    question: "In conflicts, I focus on:",
    dimension: "TF",
    optionA: "Finding the most rational solution",
    optionB: "Maintaining harmony and understanding feelings",
  },
  {
    id: 24,
    question: "I value being:",
    dimension: "TF",
    optionA: "Fair and consistent with everyone",
    optionB: "Compassionate and accommodating to individual needs",
  },
  {
    id: 25,
    question: "When giving feedback, I tend to be:",
    dimension: "TF",
    optionA: "Direct and straightforward about issues",
    optionB: "Tactful and mindful of feelings",
  },
  {
    id: 26,
    question: "I make better decisions when considering:",
    dimension: "TF",
    optionA: "Objective pros and cons",
    optionB: "How it affects people emotionally",
  },
  {
    id: 27,
    question: "In discussions, I'm more likely to:",
    dimension: "TF",
    optionA: "Challenge ideas to find the truth",
    optionB: "Support others and build consensus",
  },
  {
    id: 28,
    question: "I prefer praise that focuses on:",
    dimension: "TF",
    optionA: "My competence and achievements",
    optionB: "My character and positive impact",
  },
  {
    id: 29,
    question: "When someone is upset, I first:",
    dimension: "TF",
    optionA: "Try to solve the problem logically",
    optionB: "Offer emotional support and empathy",
  },
  {
    id: 30,
    question: "I believe it's more important to be:",
    dimension: "TF",
    optionA: "Right and accurate",
    optionB: "Kind and understanding",
  },

  // Judging (J) vs Perceiving (P) - 10 questions
  {
    id: 31,
    question: "I prefer my daily life to be:",
    dimension: "JP",
    optionA: "Planned and organized in advance",
    optionB: "Spontaneous and flexible",
  },
  {
    id: 32,
    question: "With projects, I tend to:",
    dimension: "JP",
    optionA: "Start early and work steadily",
    optionB: "Wait until closer to the deadline",
  },
  {
    id: 33,
    question: "I feel more comfortable when things are:",
    dimension: "JP",
    optionA: "Decided and settled",
    optionB: "Open to change and adaptation",
  },
  {
    id: 34,
    question: "My workspace is usually:",
    dimension: "JP",
    optionA: "Neat and organized",
    optionB: "Cluttered but I know where things are",
  },
  {
    id: 35,
    question: "I prefer to:",
    dimension: "JP",
    optionA: "Make plans and stick to them",
    optionB: "Go with the flow and see what happens",
  },
  {
    id: 36,
    question: "When traveling, I like to:",
    dimension: "JP",
    optionA: "Have a detailed itinerary",
    optionB: "Keep plans loose and explore freely",
  },
  {
    id: 37,
    question: "I handle deadlines by:",
    dimension: "JP",
    optionA: "Working ahead to avoid last-minute stress",
    optionB: "Working best under time pressure",
  },
  {
    id: 38,
    question: "I feel stressed when:",
    dimension: "JP",
    optionA: "Things are too open-ended or chaotic",
    optionB: "I'm too restricted by schedules and rules",
  },
  {
    id: 39,
    question: "In my life, I prefer:",
    dimension: "JP",
    optionA: "Structure and predictability",
    optionB: "Variety and spontaneity",
  },
  {
    id: 40,
    question: "I make decisions:",
    dimension: "JP",
    optionA: "Quickly to bring closure",
    optionB: "After exploring all options",
  },
];

export default function PersonalityTestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [result, setResult] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: number) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResult = () => {
    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    questions.forEach((q) => {
      const answer = answers[q.id];
      if (answer !== undefined) {
        const [firstType, secondType] = q.dimension.split("");
        // Scale: 1 = strongly first option, 2 = somewhat first, 3 = neutral, 4 = somewhat second, 5 = strongly second
        // Convert to points: 1->2pts first, 2->1pt first, 3->0pts both, 4->1pt second, 5->2pts second
        if (answer === 1) {
          scores[firstType as keyof typeof scores] += 2;
        } else if (answer === 2) {
          scores[firstType as keyof typeof scores] += 1;
        } else if (answer === 4) {
          scores[secondType as keyof typeof scores] += 1;
        } else if (answer === 5) {
          scores[secondType as keyof typeof scores] += 2;
        }
        // answer === 3 adds nothing (neutral)
      }
    });

    const type =
      (scores.E > scores.I ? "E" : "I") +
      (scores.S > scores.N ? "S" : "N") +
      (scores.T > scores.F ? "T" : "F") +
      (scores.J > scores.P ? "J" : "P");

    setResult(type);
    setShowResult(true);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isAnswered = answers[questions[currentQuestion]?.id] !== undefined;
  const currentAnswer = answers[questions[currentQuestion]?.id];

  // Testing function to jump to results
  const jumpToResults = () => {
    setResult("INTJ"); // Set a sample personality type
    setShowResult(true);
  };

  if (showResult && result) {
    const personality = getPersonalityType(result);

    if (!personality) {
      return null;
    }

    return (
      <div className="min-h-screen pt-16 pb-12 bg-white">
        {/* Hero Section - Enhanced Banner */}
        <section className="bg-linear-to-l from-blue-600 to-black text-white">
          <div className="max-w-6xl mx-auto py-16 md:py-8 relative">
            {/* Back Button */}
            <button
              onClick={() => {
                setShowResult(false);
                setCurrentQuestion(0);
                setAnswers({});
                setResult(null);
              }}
              className="absolute top-6 left-4 sm:left-6 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20 hover:border-white/30 transition-all shadow-lg hover:shadow-xl cursor-pointer flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Back</span>
            </button>

            {/* Article Header */}
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/20">
                <CheckCircle size={16} />
                Test Completed
              </div>

              <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                You&apos;re {personality.name}
              </h1>

              <div className="inline-flex items-center gap-3 mb-6">
                <div className="px-8 py-3 bg-white text-blue-600 text-2xl md:text-3xl font-bold rounded-lg shadow-2xl">
                  {result}
                </div>
              </div>

              <p className="text-lg md:text-xl text-blue-50 leading-relaxed mb-8">
                {personality.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <article className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-2xl md:text-3xl text-zinc-800 leading-relaxed mb-8 first-letter:text-7xl first-letter:font-bold first-letter:text-blue-600 first-letter:mr-3 first-letter:float-left first-letter:leading-none">
              {personality.description}
            </p>
            <p className="text-xl text-zinc-700 leading-loose mb-6">
              {personality.detailedDescription}
            </p>
            <div className="mt-10 p-6 border-l-4 border-blue-600 bg-blue-50 rounded-r-xl">
              <p className="text-lg italic text-zinc-800 font-medium">
                💡 <strong>Here&apos;s the thing:</strong> Understanding your
                personality type isn&apos;t about putting yourself in a
                box—it&apos;s about unlocking the door to your potential.
              </p>
            </div>
          </div>

          {/* Feature Image/Illustration */}
          <div className="mb-16">
            <div className="relative h-64 md:h-80 bg-blue-100 rounded-2xl overflow-hidden border border-blue-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <Brain
                  size={120}
                  className="text-blue-600/20"
                  strokeWidth={1}
                />
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-lg font-medium text-zinc-800 italic leading-relaxed">
                  &quot;Understanding your personality is the first step to
                  finding your true path.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Strengths Section - Blog Style */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              ✨ What Makes You Shine
            </h2>
            <p className="text-xl text-zinc-700 leading-loose mb-4">
              These aren&apos;t just skills—they&apos;re your{" "}
              <strong className="text-blue-600">superpowers</strong>. The things
              that come so naturally, you might not even realize how special
              they are.
            </p>
            <p className="text-lg text-zinc-600 leading-loose mb-10">
              When you lean into these strengths, success doesn&apos;t feel like
              a struggle. It feels like <em>coming home</em>.
            </p>

            <div className="space-y-3">
              {personality.strengths.map((strength, idx) => (
                <div
                  key={idx}
                  className="group flex items-start gap-4 p-5 bg-white rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-lg hover:border-blue-700 transition-all"
                >
                  <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <CheckCircle
                      size={20}
                      className="text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                  <p className="text-lg text-zinc-800 leading-loose">
                    {strength}
                  </p>
                </div>
              ))}
            </div>

            {/* Pull Quote */}
            <div className="mt-10 text-center">
              <blockquote className="text-2xl md:text-3xl font-bold text-zinc-900 italic">
                &quot;Your strengths are where effort meets ease.&quot;
              </blockquote>
            </div>
          </section>

          {/* Divider with Icon */}
          <div className="flex items-center justify-center my-16">
            <div className="h-px bg-blue-200 flex-1"></div>
            <div className="px-6">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <Brain size={24} className="text-blue-600" />
              </div>
            </div>
            <div className="h-px bg-blue-200 flex-1"></div>
          </div>

          {/* Growth Areas Section - Blog Style */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              🌱 Room to Grow
            </h2>
            <p className="text-xl text-zinc-700 leading-loose mb-4">
              Nobody&apos;s perfect—and that&apos;s{" "}
              <strong className="text-blue-600">perfectly okay</strong>. These
              are the areas where you might need to put in a little extra
              effort.
            </p>
            <p className="text-lg text-zinc-600 leading-loose mb-10">
              <strong>The good news?</strong> Awareness is half the battle.
              Understanding these helps you prepare, adapt, and thrive even in
              challenging situations.
            </p>

            <div className="space-y-3">
              {personality.weaknesses.map((weakness, idx) => (
                <div
                  key={idx}
                  className="group flex items-start gap-4 p-5 bg-blue-50 rounded-xl border-l-4 border-blue-400 shadow-sm hover:shadow-lg hover:border-blue-500 transition-all"
                >
                  <div className="w-9 h-9 rounded-full bg-blue-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <ArrowRight
                      size={20}
                      className="text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                  <p className="text-lg text-zinc-800 leading-loose">
                    {weakness}
                  </p>
                </div>
              ))}
            </div>

            {/* Encouraging Note */}
            <div className="mt-10 p-6 bg-linear-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <p className="text-lg text-zinc-800 leading-loose">
                <strong className="text-blue-700">Remember:</strong> These
                aren&apos;t flaws—they&apos;re simply areas where you can level
                up. Every personality type has them, and yours don&apos;t define
                you. They&apos;re just helpful signposts on your growth journey.
              </p>
            </div>
          </section>

          {/* Image Break */}
          <div className="mb-16">
            <div className="relative h-56 md:h-72 bg-blue-100 rounded-2xl overflow-hidden border border-blue-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <p className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4 leading-tight">
                    How You Work Best
                  </p>
                  <p className="text-base md:text-lg text-zinc-700 leading-loose">
                    {personality.workStyle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Career Section - Blog Style */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              💼 Careers Where You&apos;ll Thrive
            </h2>
            <p className="text-xl text-zinc-700 leading-loose mb-4">
              These aren&apos;t just job suggestions—they&apos;re{" "}
              <strong className="text-blue-600">
                paths where your natural talents can flourish
              </strong>
              .
            </p>
            <p className="text-lg text-zinc-600 leading-loose mb-10">
              Imagine waking up excited to work because what you do aligns
              perfectly with who you are. That&apos;s what these careers offer.
              Not just a paycheck, but <em>purpose</em>.
            </p>

            <div className="bg-blue-50 rounded-2xl p-6 md:p-8 border border-blue-200">
              <div className="grid sm:grid-cols-2 gap-4">
                {personality.careers.map((career, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-blue-100 hover:border-blue-600"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <CheckCircle
                        size={20}
                        className="text-blue-600 group-hover:text-white transition-colors"
                      />
                    </div>
                    <span className="text-base font-semibold text-zinc-800 group-hover:text-blue-600 transition-colors">
                      {career}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action - Blog Style */}
          <section className="mb-16">
            <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Turn Insight into Action?
                </h2>
                <p className="text-lg text-blue-50 mb-8 max-w-2xl mx-auto leading-loose">
                  Now that you know who you are, it&apos;s time to discover what
                  you can become. Explore courses designed specifically for{" "}
                  {personality.name} personalities like you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={() => {
                      setShowResult(false);
                      setCurrentQuestion(0);
                      setAnswers({});
                      setResult(null);
                    }}
                    className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full transition-all cursor-pointer flex items-center gap-2 border border-blue-500"
                  >
                    <ArrowLeft size={18} />
                    Retake Test
                  </button>
                  <Link href="/courses">
                    <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl cursor-pointer flex items-center gap-2">
                      Explore Your Courses
                      <ArrowRight size={18} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* More Insights Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3 text-center">
              Want to Dive Deeper?
            </h2>
            <p className="text-center text-lg text-zinc-700 mb-10 leading-loose">
              Explore more frameworks to uncover every dimension of your
              personality
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <button className="group p-6 bg-white rounded-xl border border-blue-200 hover:border-blue-600 hover:shadow-md transition-all cursor-pointer text-left">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <Brain size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-1">
                      OCEAN Analysis
                    </h3>
                    <p className="text-sm text-zinc-700 mb-2 leading-relaxed">
                      Big Five personality traits breakdown
                    </p>
                    <span className="text-xs text-blue-600 font-semibold">
                      Coming Soon →
                    </span>
                  </div>
                </div>
              </button>

              <button className="group p-6 bg-white rounded-xl border border-blue-200 hover:border-blue-600 hover:shadow-md transition-all cursor-pointer text-left">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <User size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-1">
                      DISC Profile
                    </h3>
                    <p className="text-sm text-zinc-700 mb-2 leading-relaxed">
                      Communication & behavior insights
                    </p>
                    <span className="text-xs text-blue-600 font-semibold">
                      Coming Soon →
                    </span>
                  </div>
                </div>
              </button>

              <button className="group p-6 bg-white rounded-xl border border-blue-200 hover:border-blue-600 hover:shadow-md transition-all cursor-pointer text-left">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <ArrowRight size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-1">
                      Career Roadmap
                    </h3>
                    <p className="text-sm text-zinc-700 mb-2 leading-relaxed">
                      Detailed career paths & industries
                    </p>
                    <span className="text-xs text-blue-600 font-semibold">
                      Coming Soon →
                    </span>
                  </div>
                </div>
              </button>

              <button className="group p-6 bg-white rounded-xl border border-blue-200 hover:border-blue-600 hover:shadow-md transition-all cursor-pointer text-left">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <CheckCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-1">
                      Relationships
                    </h3>
                    <p className="text-sm text-zinc-700 mb-2 leading-relaxed">
                      Compatibility with other types
                    </p>
                    <span className="text-xs text-blue-600 font-semibold">
                      Coming Soon →
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </section>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-zinc-100 overflow-hidden">
      {/* Hero Section */}
      <section className="bg-linear-to-l from-blue-600 to-black text-white mt">
        <div className="max-w-6xl mx-auto py-8 md:py-12 px-4 relative">
          {/* Test Toggle Button */}
          <button
            onClick={jumpToResults}
            className="absolute top-4 right-4 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black text-xs font-bold rounded-full transition-all shadow-lg hover:shadow-xl cursor-pointer"
          >
            🧪 Jump to Results
          </button>

          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Brain size={32} className="text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
              Discover Your Personality Type
            </h1>
            <p className="text-base md:text-lg text-blue-100 mb-4">
              Take our comprehensive 40-question MBTI assessment
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-blue-200">
              <span className="flex items-center gap-2">
                <CheckCircle size={16} />
                100% Free
              </span>
              <span className="text-blue-400">•</span>
              <span className="flex items-center gap-2">
                <Clock size={16} />5 Minutes
              </span>
              <span className="text-blue-400">•</span>
              <span>Instant Results</span>
            </div>
          </div>
        </div>
      </section>

      {/* Test Section */}
      <section className="max-w-6xl mx-auto pt-8">
        {/* Progress Bar */}
        <div className="mb-6 max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-zinc-700">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-zinc-200 rounded-full h-2.5 shadow-inner">
            <div
              className="bg-linear-to-r from-blue-600 to-blue-700 h-2.5 rounded-full transition-all duration-500 shadow-lg shadow-blue-600/30"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-200">
          <h2 className="text-lg md:text-3xl font-semibold text-zinc-900 text-center leading-relaxed">
            {questions[currentQuestion].question}
          </h2>
          {/* Helper Text */}
          <div className=" p-2 mb-6">
            <p className="text-center text-zinc-700">
              Pick <span className="font-semibold text-zinc-900">1-2</span> for
              Option A, <span className="font-semibold text-zinc-900">3</span>{" "}
              for neutral, and{" "}
              <span className="font-semibold text-zinc-900">4-5</span> for
              Option B.
            </p>
          </div>

          {/* Options + Scale */}
          <div className="mb-6 grid gap-4 md:grid-cols-[1fr_auto_1fr] items-center">
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-xs font-semibold text-zinc-500 mb-1 uppercase tracking-wide">
                Option A
              </p>
              <p className="text-sm md:text-lg font-medium text-zinc-900">
                {questions[currentQuestion].optionA}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-medium text-zinc-600 px-2">
                <span>Left (A)</span>
                <span className="text-zinc-500">Neutral</span>
                <span>Right (B)</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    onClick={() => handleAnswer(value)}
                    className={`flex h-12 w-12 items-center justify-center rounded-md border text-sm font-semibold transition-colors cursor-pointer ${
                      currentAnswer === value
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-zinc-300 bg-white text-zinc-800 hover:border-blue-400"
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-xs font-semibold text-zinc-500 mb-1 uppercase tracking-wide">
                Option B
              </p>
              <p className="text-sm md:text-lg font-medium text-zinc-900">
                {questions[currentQuestion].optionB}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                currentQuestion === 0
                  ? "bg-zinc-100 text-zinc-400 cursor-not-allowed"
                  : "bg-white border-2 border-zinc-300 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-400 hover:shadow-md cursor-pointer"
              }`}
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <div className="flex items-center gap-2">
              {isAnswered && (
                <div className="flex items-center gap-1 text-sm font-semibold text-green-600">
                  <CheckCircle size={16} />
                  <span className="hidden sm:inline">Answered</span>
                </div>
              )}
            </div>

            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                !isAnswered
                  ? "bg-zinc-200 text-zinc-400 cursor-not-allowed"
                  : "bg-linear-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 cursor-pointer"
              }`}
            >
              <span className="hidden sm:inline">
                {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
              </span>
              <span className="sm:hidden">
                {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
              </span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
      <NewsletterCTA
        btnText="Join Class Today"
        title="Ready to take the next step in your career?"
        description="Enroll in our job training programs and unlock your potential."
        imageSrc="/heroImages/woman2.png"
      />
    </div>
  );
}
