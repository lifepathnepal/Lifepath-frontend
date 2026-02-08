"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Brain,
  CheckCircle,
  Clock,
  User,
  Eye,
  Leaf,
  ListChecks,
  Handshake,
  BookOpen,
  Lightbulb,
  Zap,
  Heart,
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
    question: "At parties, I usually:",
    dimension: "EI",
    optionA: "Talk to many different people",
    optionB: "Stay with one or two close friends",
  },
  {
    id: 2,
    question: "After a long day, I feel better when I:",
    dimension: "EI",
    optionA: "Go out with friends",
    optionB: "Spend time alone",
  },
  {
    id: 3,
    question: "In group projects, I:",
    dimension: "EI",
    optionA: "Like to take the lead",
    optionB: "Prefer to work quietly",
  },
  {
    id: 4,
    question: "I work best:",
    dimension: "EI",
    optionA: "With other people around",
    optionB: "By myself",
  },
  {
    id: 5,
    question: "Meeting new people makes me feel:",
    dimension: "EI",
    optionA: "Excited and energized",
    optionB: "Tired and drained",
  },
  {
    id: 6,
    question: "On weekends, I prefer to:",
    dimension: "EI",
    optionA: "Go out and do activities",
    optionB: "Relax at home",
  },
  {
    id: 7,
    question: "When I have a problem, I:",
    dimension: "EI",
    optionA: "Talk it out with others",
    optionB: "Think about it alone first",
  },
  {
    id: 8,
    question: "I feel most comfortable:",
    dimension: "EI",
    optionA: "Being around lots of people",
    optionB: "In quiet, calm places",
  },
  {
    id: 9,
    question: "At school or work, I:",
    dimension: "EI",
    optionA: "Make friends easily",
    optionB: "Keep to myself mostly",
  },
  {
    id: 10,
    question: "I get my energy from:",
    dimension: "EI",
    optionA: "Being social and active",
    optionB: "Having alone time",
  },

  // Sensing (S) vs Intuition (N) - 16 questions
  {
    id: 11,
    question: "I prefer to focus on:",
    dimension: "SN",
    optionA: "What's real and practical",
    optionB: "What's possible and imaginative",
  },
  {
    id: 12,
    question: "When I learn something new, I like:",
    dimension: "SN",
    optionA: "Clear, step-by-step instructions",
    optionB: "Understanding why it works",
  },
  {
    id: 13,
    question: "I pay more attention to:",
    dimension: "SN",
    optionA: "Facts and details",
    optionB: "Ideas and meanings",
  },
  {
    id: 14,
    question: "I trust:",
    dimension: "SN",
    optionA: "What I can see and touch",
    optionB: "My gut feelings",
  },
  {
    id: 15,
    question: "When telling a story, I:",
    dimension: "SN",
    optionA: "Describe exactly what happened",
    optionB: "Focus on the main idea",
  },
  {
    id: 16,
    question: "I'm better at:",
    dimension: "SN",
    optionA: "Following proven methods",
    optionB: "Coming up with new ideas",
  },
  {
    id: 17,
    question: "I prefer tasks that are:",
    dimension: "SN",
    optionA: "Practical and useful",
    optionB: "Creative and original",
  },
  {
    id: 18,
    question: "When reading, I notice:",
    dimension: "SN",
    optionA: "Specific facts and details",
    optionB: "Hidden meanings and themes",
  },
  {
    id: 19,
    question: "I remember things by:",
    dimension: "SN",
    optionA: "Exact details of what happened",
    optionB: "Overall impressions",
  },
  {
    id: 20,
    question: "I like work that involves:",
    dimension: "SN",
    optionA: "Clear procedures",
    optionB: "New possibilities",
  },
  {
    id: 21,
    question: "When planning, I focus on:",
    dimension: "SN",
    optionA: "What needs to be done now",
    optionB: "What could happen later",
  },
  {
    id: 22,
    question: "I'm more interested in:",
    dimension: "SN",
    optionA: "How things work",
    optionB: "Why things exist",
  },
  {
    id: 23,
    question: "I notice more:",
    dimension: "SN",
    optionA: "What's right in front of me",
    optionB: "Patterns and connections",
  },
  {
    id: 24,
    question: "I prefer:",
    dimension: "SN",
    optionA: "Tried and tested ways",
    optionB: "Experimenting with new ways",
  },
  {
    id: 25,
    question: "When solving problems, I use:",
    dimension: "SN",
    optionA: "Past experience",
    optionB: "Imagination",
  },
  {
    id: 26,
    question: "I value:",
    dimension: "SN",
    optionA: "Being realistic",
    optionB: "Being innovative",
  },

  // Thinking (T) vs Feeling (F) - 12 questions
  {
    id: 27,
    question: "When making decisions, I consider:",
    dimension: "TF",
    optionA: "What makes sense logically",
    optionB: "How people will feel",
  },
  {
    id: 28,
    question: "I'm more convinced by:",
    dimension: "TF",
    optionA: "Facts and logic",
    optionB: "Personal stories",
  },
  {
    id: 29,
    question: "When there's a conflict, I:",
    dimension: "TF",
    optionA: "Find the fair solution",
    optionB: "Try to keep everyone happy",
  },
  {
    id: 30,
    question: "It's more important to be:",
    dimension: "TF",
    optionA: "Right",
    optionB: "Kind",
  },
  {
    id: 31,
    question: "When I critique something, I:",
    dimension: "TF",
    optionA: "Point out what's wrong",
    optionB: "Consider people's feelings",
  },
  {
    id: 32,
    question: "I make decisions based on:",
    dimension: "TF",
    optionA: "Pros and cons",
    optionB: "Personal values",
  },
  {
    id: 33,
    question: "In arguments, I focus on:",
    dimension: "TF",
    optionA: "Being correct",
    optionB: "Maintaining harmony",
  },
  {
    id: 34,
    question: "I prefer to be seen as:",
    dimension: "TF",
    optionA: "Competent",
    optionB: "Caring",
  },
  {
    id: 35,
    question: "When someone is upset, I:",
    dimension: "TF",
    optionA: "Try to fix the problem",
    optionB: "Offer comfort and support",
  },
  {
    id: 36,
    question: "I value:",
    dimension: "TF",
    optionA: "Truth and fairness",
    optionB: "Compassion and empathy",
  },
  {
    id: 37,
    question: "I'm better at:",
    dimension: "TF",
    optionA: "Analyzing things objectively",
    optionB: "Understanding people's emotions",
  },
  {
    id: 38,
    question: "When giving feedback, I:",
    dimension: "TF",
    optionA: "Say it directly",
    optionB: "Say it gently",
  },

  // Judging (J) vs Perceiving (P) - 10 questions
  {
    id: 39,
    question: "I prefer to:",
    dimension: "JP",
    optionA: "Plan things in advance",
    optionB: "Be spontaneous",
  },
  {
    id: 40,
    question: "With homework or projects, I:",
    dimension: "JP",
    optionA: "Start early",
    optionB: "Wait until the last minute",
  },
  {
    id: 41,
    question: "I feel better when things are:",
    dimension: "JP",
    optionA: "Organized and decided",
    optionB: "Flexible and open",
  },
  {
    id: 42,
    question: "My room is usually:",
    dimension: "JP",
    optionA: "Clean and organized",
    optionB: "A bit messy",
  },
  {
    id: 43,
    question: "I like to:",
    dimension: "JP",
    optionA: "Make a plan and follow it",
    optionB: "See what happens",
  },
  {
    id: 44,
    question: "When traveling, I prefer:",
    dimension: "JP",
    optionA: "A detailed schedule",
    optionB: "Going with the flow",
  },
  {
    id: 45,
    question: "Deadlines make me:",
    dimension: "JP",
    optionA: "Work ahead to finish early",
    optionB: "Work best under pressure",
  },
  {
    id: 46,
    question: "I feel stressed when:",
    dimension: "JP",
    optionA: "Things are unorganized",
    optionB: "I have too many rules",
  },
  {
    id: 47,
    question: "I prefer:",
    dimension: "JP",
    optionA: "Structure and routine",
    optionB: "Variety and change",
  },
  {
    id: 48,
    question: "I make decisions:",
    dimension: "JP",
    optionA: "Quickly",
    optionB: "After considering all options",
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
        <section className="bg-gradient-to-l from-blue-600 to-black text-white">
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

        {/* Cognitive Functions Section */}
        <section className="bg-white py-8 md:py-10 border-b">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6 text-center">
              8 Cognitive Functions
            </h2>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {/* Se - Experience */}
              <div className="bg-zinc-50 rounded-lg p-4 text-center hover:bg-zinc-100 transition-colors">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                  <Eye size={20} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-base text-zinc-900">Se</h3>
                <p className="text-xs text-zinc-600">Experience</p>
              </div>

              {/* Ne - Possibilities */}
              <div className="bg-zinc-50 rounded-lg p-4 text-center hover:bg-zinc-100 transition-colors">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                  <Leaf size={20} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-base text-zinc-900">Ne</h3>
                <p className="text-xs text-zinc-600">Possibilities</p>
              </div>

              {/* Te - Order */}
              <div className="bg-zinc-50 rounded-lg p-4 text-center hover:bg-zinc-100 transition-colors">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                  <ListChecks size={20} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-base text-zinc-900">Te</h3>
                <p className="text-xs text-zinc-600">Order</p>
              </div>

              {/* Fe - Harmony */}
              <div className="bg-zinc-50 rounded-lg p-4 text-center hover:bg-zinc-100 transition-colors">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                  <Handshake size={20} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-base text-zinc-900">Fe</h3>
                <p className="text-xs text-zinc-600">Harmony</p>
              </div>

              {/* Si - Memory */}
              <div className="bg-zinc-50 rounded-lg p-4 text-center hover:bg-zinc-100 transition-colors">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                  <BookOpen size={20} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-base text-zinc-900">Si</h3>
                <p className="text-xs text-zinc-600">Memory</p>
              </div>

              {/* Ni - Insight */}
              <div className="bg-zinc-50 rounded-lg p-4 text-center hover:bg-zinc-100 transition-colors">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                  <Lightbulb size={20} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-base text-zinc-900">Ni</h3>
                <p className="text-xs text-zinc-600">Insight</p>
              </div>

              {/* Ti - Logic */}
              <div className="bg-zinc-50 rounded-lg p-4 text-center hover:bg-zinc-100 transition-colors">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                  <Zap size={20} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-base text-zinc-900">Ti</h3>
                <p className="text-xs text-zinc-600">Logic</p>
              </div>

              {/* Fi - Values */}
              <div className="bg-zinc-50 rounded-lg p-4 text-center hover:bg-zinc-100 transition-colors">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                  <Heart size={20} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-base text-zinc-900">Fi</h3>
                <p className="text-xs text-zinc-600">Values</p>
              </div>
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
            <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
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
      <section className="bg-gradient-to-l from-blue-600 to-black text-white">
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
              Take our comprehensive 48-question MBTI assessment
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-blue-200">
              <span className="flex items-center gap-2">
                <CheckCircle size={16} />
                100% Free
              </span>
              <span className="text-blue-400">•</span>
              <span className="flex items-center gap-2">
                <Clock size={16} />7 Minutes
              </span>
              <span className="text-blue-400">•</span>
              <span>Instant Results</span>
            </div>
          </div>
        </div>
      </section>

      {/* Test Section */}
      <section className="max-w-6xl mx-auto  h-screen flex flex-col justify-center px-4 sm:px-6">
        {/* Progress Bar */}
        <div className="mb-6 max-w-2xl mx-auto w-full">
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
              className="bg-gradient-to-r from-blue-600 to-blue-700 h-2.5 rounded-full transition-all duration-500 shadow-lg shadow-blue-600/30"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-200">
          <h2 className="text-lg md:text-2xl font-semibold text-zinc-900 text-center leading-relaxed mb-8">
            {questions[currentQuestion].question}
          </h2>
          {/* Helper Text */}
          <div className="p-2 mb-6">
            <p className="text-center text-zinc-600">
              Choose <span className="font-semibold text-blue-600">A</span> or{" "}
              <span className="font-semibold text-green-600">B</span>, or{" "}
              <span className="font-semibold text-zinc-700">Neutral</span> if
              neither fits perfectly
            </p>
          </div>

          {/* Options + Scale */}
          <div className="mb-6 grid gap-4 md:grid-cols-[1fr_auto_1fr] items-center">
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <p className="text-xs font-semibold text-blue-600 mb-1 uppercase tracking-wide">
                Option A
              </p>
              <p className="text-sm md:text-lg font-medium text-zinc-900">
                {questions[currentQuestion].optionA}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-medium text-zinc-600 px-2">
                <span>A</span>
                <span className="text-zinc-500">Neutral</span>
                <span>B</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    onClick={() => handleAnswer(value)}
                    className={`flex h-12 w-12 items-center justify-center rounded-md border text-sm font-semibold transition-colors cursor-pointer ${
                      currentAnswer === value
                        ? value === 3
                          ? "border-zinc-500 bg-zinc-500 text-white"
                          : value < 3
                            ? "border-blue-600 bg-blue-600 text-white"
                            : "border-green-600 bg-green-600 text-white"
                        : "border-zinc-300 bg-white text-zinc-800 hover:border-blue-400"
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="text-xs font-semibold text-green-600 mb-1 uppercase tracking-wide">
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
                  : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 cursor-pointer"
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
