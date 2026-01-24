"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, Brain, CheckCircle } from "lucide-react";

type Question = {
  id: number;
  question: string;
  dimension: "EI" | "SN" | "TF" | "JP";
  options: [string, string];
};

const questions: Question[] = [
  // Extraversion (E) vs Introversion (I)
  {
    id: 1,
    question: "At a party, do you:",
    dimension: "EI",
    options: [
      "Interact with many, including strangers",
      "Interact with a few, known to you",
    ],
  },
  {
    id: 2,
    question: "Are you more:",
    dimension: "EI",
    options: ["Outgoing and sociable", "Reserved and private"],
  },
  {
    id: 3,
    question: "Do you prefer to work:",
    dimension: "EI",
    options: ["In a team with others", "Alone or one-on-one"],
  },
  {
    id: 4,
    question: "After a long day, do you feel energized by:",
    dimension: "EI",
    options: ["Being around people", "Having time alone"],
  },

  // Sensing (S) vs Intuition (N)
  {
    id: 5,
    question: "Are you more interested in:",
    dimension: "SN",
    options: ["What is actual and real", "What is possible and theoretical"],
  },
  {
    id: 6,
    question: "Do you prefer to focus on:",
    dimension: "SN",
    options: ["Facts and details", "Big picture and patterns"],
  },
  {
    id: 7,
    question: "Are you more impressed by:",
    dimension: "SN",
    options: ["Practical solutions", "Creative innovations"],
  },
  {
    id: 8,
    question: "Do you prefer instructions that are:",
    dimension: "SN",
    options: ["Specific and literal", "General and open to interpretation"],
  },

  // Thinking (T) vs Feeling (F)
  {
    id: 9,
    question: "When making decisions, do you rely more on:",
    dimension: "TF",
    options: ["Logic and objectivity", "Personal values and empathy"],
  },
  {
    id: 10,
    question: "Are you more likely to:",
    dimension: "TF",
    options: ["Be firm and direct", "Be gentle and tactful"],
  },
  {
    id: 11,
    question: "Do you value:",
    dimension: "TF",
    options: ["Justice and fairness", "Harmony and compassion"],
  },
  {
    id: 12,
    question: "In arguments, are you more concerned with:",
    dimension: "TF",
    options: ["Being right", "Understanding feelings"],
  },

  // Judging (J) vs Perceiving (P)
  {
    id: 13,
    question: "Do you prefer to:",
    dimension: "JP",
    options: [
      "Have things decided and planned",
      "Keep options open and flexible",
    ],
  },
  {
    id: 14,
    question: "Are you more comfortable with:",
    dimension: "JP",
    options: ["Structure and schedules", "Spontaneity and improvisation"],
  },
  {
    id: 15,
    question: "Do you tend to:",
    dimension: "JP",
    options: [
      "Complete tasks well before deadlines",
      "Work close to deadlines",
    ],
  },
  {
    id: 16,
    question: "Do you prefer your life to be:",
    dimension: "JP",
    options: ["Organized and settled", "Open-ended and adaptable"],
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

export default function PersonalityTestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [result, setResult] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: optionIndex });
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
        if (answer === 0) {
          scores[firstType as keyof typeof scores]++;
        } else {
          scores[secondType as keyof typeof scores]++;
        }
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

  if (showResult && result) {
    const personality =
      personalityTypes[result as keyof typeof personalityTypes];
    return (
      <div className="min-h-screen pt-16 pb-10 bg-zinc-50">
        <div className="max-w-4xl mx-auto py-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-zinc-200 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle size={64} className="text-green-500" />
            </div>
            <h1 className="text-4xl font-bold text-center text-zinc-900 mb-2">
              Your Personality Type
            </h1>
            <div className="text-center mb-8">
              <span className="inline-block px-6 py-3 bg-blue-600 text-white text-3xl font-bold rounded-full">
                {result}
              </span>
              <h2 className="text-2xl font-bold text-blue-600 mt-4">
                {personality.name}
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  About You
                </h3>
                <p className="text-zinc-600">{personality.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-3">
                  Recommended Careers
                </h3>
                <div className="flex flex-wrap gap-2">
                  {personality.careers.map((career, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setShowResult(false);
                  setCurrentQuestion(0);
                  setAnswers({});
                  setResult(null);
                }}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors"
              >
                Retake Test
              </button>
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">
                Explore Career Paths
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 pb-10">
      {/* Hero Section */}
      <section className="bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto py-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Brain size={40} className="text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-4">
              Discover Your{" "}
              <span className="text-blue-600">Personality Type</span>
            </h1>
            <p className="text-lg text-zinc-600">
              Take our MBTI-based assessment to find careers that match your
              unique personality
            </p>
          </div>
        </div>
      </section>

      {/* Test Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-zinc-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-blue-600">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-zinc-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-zinc-200 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-8 text-center">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full p-6 text-left rounded-xl border-2 transition-all duration-200 ${
                  answers[questions[currentQuestion].id] === index
                    ? "border-blue-600 bg-blue-50 shadow-md"
                    : "border-zinc-200 hover:border-blue-300 hover:bg-zinc-50"
                }`}
              >
                <span className="text-lg font-medium text-zinc-900">
                  {option}
                </span>
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-colors ${
                currentQuestion === 0
                  ? "bg-zinc-100 text-zinc-400 cursor-not-allowed"
                  : "bg-zinc-200 text-zinc-700 hover:bg-zinc-300"
              }`}
            >
              <ArrowLeft size={18} />
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-colors ${
                !isAnswered
                  ? "bg-zinc-100 text-zinc-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {currentQuestion === questions.length - 1
                ? "See Results"
                : "Next"}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
