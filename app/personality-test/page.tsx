"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Brain,
  CheckCircle,
  Clock,
  User,
  PlayCircle,
  Check,
} from "lucide-react";
import Link from "next/link";
import PersonalitySection from "../components/home/PersonalitySection";

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

const personalityTypes = {
  INTJ: {
    name: "The Architect",
    description:
      "Strategic, analytical, and innovative. You excel at developing long-term plans and solving complex problems.",
    careers: ["Software Developer", "Data Scientist", "Strategic Planner"],
  },
  INTP: {
    name: "The Logician",
    description:
      "Curious, inventive, and logical. You love exploring theories and solving intellectual challenges.",
    careers: ["Researcher", "Software Engineer", "Analyst"],
  },
  ENTJ: {
    name: "The Commander",
    description:
      "Bold, decisive, and natural leaders. You excel at organizing people and resources toward goals.",
    careers: ["Executive", "Entrepreneur", "Project Manager"],
  },
  ENTP: {
    name: "The Debater",
    description:
      "Quick-witted, clever, and innovative. You love intellectual challenges and brainstorming ideas.",
    careers: ["Entrepreneur", "Marketing Strategist", "Consultant"],
  },
  INFJ: {
    name: "The Advocate",
    description:
      "Insightful, principled, and idealistic. You're driven to help others and make a positive impact.",
    careers: ["Counselor", "Writer", "HR Manager"],
  },
  INFP: {
    name: "The Mediator",
    description:
      "Creative, empathetic, and idealistic. You seek meaning and authenticity in your work.",
    careers: ["Writer", "Designer", "Therapist"],
  },
  ENFJ: {
    name: "The Protagonist",
    description:
      "Charismatic, inspiring, and empathetic. You naturally motivate and guide others.",
    careers: ["Teacher", "HR Manager", "Life Coach"],
  },
  ENFP: {
    name: "The Campaigner",
    description:
      "Enthusiastic, creative, and sociable. You're passionate about new ideas and helping people.",
    careers: ["Marketing Manager", "Creative Director", "Trainer"],
  },
  ISTJ: {
    name: "The Logistician",
    description:
      "Practical, organized, and reliable. You excel at creating order and following through.",
    careers: ["Accountant", "Project Manager", "Administrator"],
  },
  ISFJ: {
    name: "The Defender",
    description:
      "Caring, dedicated, and detail-oriented. You protect and support those around you.",
    careers: ["Nurse", "Teacher", "Administrator"],
  },
  ESTJ: {
    name: "The Executive",
    description:
      "Organized, practical, and decisive. You excel at managing people and processes.",
    careers: ["Business Manager", "Administrator", "Operations Manager"],
  },
  ESFJ: {
    name: "The Consul",
    description:
      "Warm, caring, and organized. You create harmony and help others feel valued.",
    careers: ["Event Coordinator", "HR Specialist", "Teacher"],
  },
  ISTP: {
    name: "The Virtuoso",
    description:
      "Bold, practical, and hands-on. You excel at understanding how things work.",
    careers: ["Engineer", "Mechanic", "Developer"],
  },
  ISFP: {
    name: "The Adventurer",
    description:
      "Flexible, artistic, and sensitive. You appreciate beauty and live in the moment.",
    careers: ["Designer", "Artist", "Chef"],
  },
  ESTP: {
    name: "The Entrepreneur",
    description:
      "Energetic, perceptive, and action-oriented. You thrive on excitement and solving problems.",
    careers: ["Sales Manager", "Entrepreneur", "Marketing Manager"],
  },
  ESFP: {
    name: "The Entertainer",
    description:
      "Outgoing, spontaneous, and enthusiastic. You love entertaining and helping others.",
    careers: ["Event Planner", "Performer", "Sales Representative"],
  },
};

const recommendedCourses = [
  {
    id: 1,
    slug: "web-development-bootcamp",
    title: "Frontend Mastery-2026 (Beginner)",
    instructor: "by Uchero D. Lucky",
    duration: "8hr 25min",
    lessons: "14 lessons",
    price: "5200",
    originalPrice: "5200",
    includes: [
      "Psychology class",
      "Personality Development",
      "Life Books",
      "Personal Guidance",
      "Interview Practice",
      "100% Placement",
    ],
  },
  {
    slug: "ux-designer-bootcamp",
    id: 2,
    title: "Become a UX Designer in 2025 (Beginner)",
    instructor: "by Uchero D. Lucky",
    duration: "8hr 25min",
    lessons: "14 lessons",
    price: "5200",
    originalPrice: "5200",
    includes: [
      "Psychology class",
      "Personality Development",
      "Life Books",
      "Personal Guidance",
    ],
  },
  {
    slug: "mern-stack-mastery",
    id: 3,
    title: "MERN-Stack Mastery-2026 (Beginner)",
    instructor: "by Uchero D. Lucky",
    duration: "8hr 25min",
    lessons: "14 lessons",
    price: "5200",
    originalPrice: "5200",
    includes: ["Psychology class", "Personality Development", "Life Books"],
  },
  {
    id: 4,
    slug: "data-science-python",
    title: "Data Science with Python (Advanced)",
    instructor: "by Uchero D. Lucky",
    duration: "16hr 30min",
    lessons: "24 lessons",
    price: "7200",
    originalPrice: "8000",
    includes: [
      "Personality Development",
      "Life Books",
      "Personal Guidance",
      "100% Placement",
    ],
  },
  {
    id: 5,
    slug: "mobile-app-development",
    title: "Mobile App Development (Intermediate)",
    instructor: "by Uchero D. Lucky",
    duration: "12hr 45min",
    lessons: "18 lessons",
    price: "6200",
    originalPrice: "7000",
    includes: ["Psychology class", "Personal Guidance", "Interview Practice"],
  },
  {
    slug: "digital-marketing-mastery",
    id: 6,
    title: "Digital Marketing Mastery (Beginner)",
    instructor: "by Uchero D. Lucky",
    duration: "10hr 15min",
    lessons: "16 lessons",
    price: "4800",
    originalPrice: "5500",
    includes: [
      "Personality Development",
      "Life Books",
      "Interview Practice",
      "100% Placement",
    ],
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
    const personality =
      personalityTypes[result as keyof typeof personalityTypes];
    return (
      <div className="min-h-screen pt-16 pb-12 bg-white">
        {/* Hero Section */}
        <section className="bg-linear-to-r from-black to-blue-700 text-white">
          <div className="max-w-6xl mx-auto py-3 relative">
            {/* Back Button */}
            <button
              onClick={() => {
                setShowResult(false);
                setCurrentQuestion(0);
                setAnswers({});
                setResult(null);
              }}
              className="absolute top-3 left-6 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-full transition-colors shadow-md cursor-pointer flex items-center gap-1"
            >
              <ArrowLeft size={14} />
              Back to Test
            </button>

            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle size={32} className="text-white" />
              </div>
              <h1 className="text-lg md:text-2xl font-bold text-white mb-1">
                Test Completed!
              </h1>
              <p className="text-sm text-blue-100">
                Your personality profile and recommendations
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto py-6">
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-200 shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle
                size={48}
                className="text-blue-600"
                strokeWidth={2}
              />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-center text-zinc-900 mb-2">
              Your Personality Type
            </h1>
            <div className="text-center mb-6">
              <span className="inline-block px-5 py-2 bg-blue-600 text-white text-2xl font-bold rounded-lg">
                {result}
              </span>
              <h2 className="text-lg md:text-xl font-semibold text-blue-600 mt-3">
                {personality.name}
              </h2>
            </div>

            <div className="space-y-4">
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-base font-semibold text-zinc-900 mb-2">
                  About You
                </h3>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  {personality.description}
                </p>
              </div>

              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-base font-semibold text-zinc-900 mb-2">
                  Recommended Career Paths
                </h3>
                <div className="flex flex-wrap gap-2">
                  {personality.careers.map((career, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white text-blue-600 rounded-full text-sm font-medium border border-zinc-200"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
              <button
                onClick={() => {
                  setShowResult(false);
                  setCurrentQuestion(0);
                  setAnswers({});
                  setResult(null);
                }}
                className="px-5 py-2 border border-zinc-300 text-zinc-700 text-sm font-medium rounded-full hover:bg-zinc-50 transition-colors cursor-pointer"
              >
                Retake Test
              </button>
              <button className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors cursor-pointer">
                Explore Career Paths
              </button>
            </div>
          </div>

          {/* Recommended Courses Section */}
          <div className="mt-8 h-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl md:text-2xl font-bold text-zinc-900">
                Recommended Courses For You
              </h2>
              <Link
                href="/courses"
                className="text-sm text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
              {recommendedCourses.slice(0, 3).map((course) => (
                <Link
                  key={course.id}
                  href={`/courses/${course.slug}`}
                  className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-zinc-200 flex flex-col"
                >
                  {/* Course Info */}
                  <div className="p-4 flex flex-col h-full group cursor-pointer">
                    {/* Title */}
                    <h4 className="text-lg font-semibold text-zinc-900 mb-2 line-clamp-2 leading-tight group-hover:underline group-hover:text-blue-500">
                      {course.title}
                    </h4>

                    {/* Instructor */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                        <User size={12} className="text-white" />
                      </div>
                      <p className="text-xs text-zinc-600">
                        {course.instructor}
                      </p>
                    </div>

                    {/* Duration and Lessons */}
                    <div className="flex items-center gap-3 text-xs text-zinc-600 mb-2 pb-2 border-b border-zinc-200">
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <PlayCircle size={12} />
                        {course.lessons}
                      </span>
                    </div>

                    {/* What's Included */}
                    <div className="mb-3 bg-blue-50 border border-blue-300 rounded-lg p-2.5 grow">
                      <p className="text-[10px] font-bold text-zinc-800 mb-2 uppercase tracking-wide">
                        What&apos;s included
                      </p>
                      <div className="flex flex-col gap-1.5">
                        {course.includes.slice(0, 4).map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-1.5 text-[10px] text-zinc-700 hover:text-blue-600 transition-colors"
                          >
                            <div className="bg-green-500 rounded-full p-0.5 shrink-0">
                              <Check size={8} className="text-white" />
                            </div>
                            <span className="font-medium leading-tight">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-blue-800">
                          Rs.{course.price}
                        </span>
                        <span className="text-xs text-zinc-500 line-through">
                          {course.originalPrice}
                        </span>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 items-center justify-between w-full mt-auto">
                      <button className="w-full px-3 py-3 bg-zinc-100 text-blue-500 border cursor-pointer hover:bg-zinc-50 hover:text-blue-700 hover:border-blue-600 font-semibold rounded-full transition-colors text-xs">
                        View course
                      </button>
                      <button className="w-full px-3 py-3 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold rounded-full transition-colors text-xs">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" pt-16 pb-4 bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-black to-blue-700 text-white">
        <div className="max-w-6xl mx-auto py-3 relative">
          {/* Test Toggle Button */}
          <button
            onClick={jumpToResults}
            className="absolute top-3 right-6 px-3 py-1.5 bg-yellow-400 hover:bg-yellow-500 text-black text-xs font-semibold rounded-lg transition-colors shadow-md cursor-pointer"
          >
            🧪 Jump to Results (Test)
          </button>

          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Brain size={28} className="text-white" />
            </div>
            <h1 className="text-lg md:text-2xl font-bold text-white mb-1">
              Discover Your Personality Type
            </h1>
            <p className="text-sm text-blue-100">40-question MBTI assessment</p>
          </div>
        </div>
      </section>

      {/* Test Section */}
      <section className="max-w-4xl mx-auto px-6 py-4 overflow-y-auto">
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-medium text-zinc-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-xs font-medium text-blue-600">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-zinc-200 rounded-full h-1.5">
            <div
              className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl p-4 md:p-6 border border-zinc-200 shadow-sm">
          <h2 className="text-base md:text-lg font-semibold text-zinc-900 mb-4 text-center">
            {questions[currentQuestion].question}
          </h2>

          {/* Scale Options */}
          <div className="space-y-3 mb-4">
            {/* Option A Label */}
            <div className="bg-blue-50 rounded-lg p-2.5 border border-blue-200">
              <p className="text-xs font-medium text-blue-900 mb-0.5">
                Option A
              </p>
              <p className="text-xs md:text-sm font-medium text-zinc-900">
                {questions[currentQuestion].optionA}
              </p>
            </div>

            {/* 5-point Scale with clear labels */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[10px] text-zinc-500 px-1">
                <span>← Strongly A</span>
                <span>Neutral</span>
                <span>Strongly B →</span>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center gap-1.5 md:gap-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    onClick={() => handleAnswer(value)}
                    className={`flex flex-col items-center justify-center w-full md:w-16 h-16 md:h-18 rounded-lg border-2 transition-all cursor-pointer ${
                      currentAnswer === value
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-zinc-200 bg-white hover:border-blue-300 hover:bg-zinc-50"
                    }`}
                  >
                    <div
                      className={`text-xl font-bold mb-0.5 ${
                        currentAnswer === value ? "text-white" : "text-zinc-700"
                      }`}
                    >
                      {value}
                    </div>
                    <div
                      className={`text-[10px] font-medium text-center px-1 ${
                        currentAnswer === value ? "text-white" : "text-zinc-500"
                      }`}
                    >
                      {value === 1 && "Very A"}
                      {value === 2 && "Mostly A"}
                      {value === 3 && "Neutral"}
                      {value === 4 && "Mostly B"}
                      {value === 5 && "Very B"}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Option B Label */}
            <div className="bg-purple-50 rounded-lg p-2.5 border border-purple-200">
              <p className="text-xs font-medium text-purple-900 mb-0.5">
                Option B
              </p>
              <p className="text-xs md:text-sm font-medium text-zinc-900">
                {questions[currentQuestion].optionB}
              </p>
            </div>
          </div>

          {/* Helper Text */}
          <p className="text-center text-xs text-zinc-600 mb-3 bg-zinc-50 rounded-lg p-2 border border-zinc-200">
            <span className="font-medium">How it works:</span> Select{" "}
            <span className="font-semibold text-blue-600">1-2</span> if you
            relate more to{" "}
            <span className="font-semibold text-blue-600">Option A</span>,{" "}
            <span className="font-semibold text-zinc-700">3</span> if
            you&apos;re in between, or{" "}
            <span className="font-semibold text-purple-600">4-5</span> if you
            relate more to{" "}
            <span className="font-semibold text-purple-600">Option B</span>
          </p>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                currentQuestion === 0
                  ? "bg-zinc-100 text-zinc-400 cursor-not-allowed"
                  : "bg-white border border-zinc-300 text-zinc-700 hover:bg-zinc-50 cursor-pointer"
              }`}
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <div className="text-xs text-zinc-500">{isAnswered && "✓"}</div>

            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !isAnswered
                  ? "bg-zinc-100 text-zinc-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
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
        <PersonalitySection />
      </section>
    </div>
  );
}
