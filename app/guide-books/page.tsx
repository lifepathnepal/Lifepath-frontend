"use client";

import { Clock, User, BookOpen } from "lucide-react";
import Image from "next/image";

export default function GuideBooksPage() {
  const guideBooks = [
    {
      id: 1,
      title: "Web Development 2026 (Guide Book)",
      author: "by Uchero D. Lucky",
      duration: "8hr 25min",
      chapters: "14 chapters",
      cover: "/sliders/fear.jpeg",
      price: "5200",
      originalPrice: "5200",
    },
    {
      id: 2,
      title: "Become a UX Designer in 2025 (Guide Book)",
      author: "by Uchero D. Lucky",
      duration: "8hr 25min",
      chapters: "14 chapters",
      cover: "/sliders/unguided.jpeg",
      price: "5200",
      originalPrice: "5200",
    },
    {
      id: 3,
      title: "MERN Stack Mastery 2026 (Guide Book)",
      author: "by Uchero D. Lucky",
      duration: "8hr 25min",
      chapters: "14 chapters",
      cover: "/sliders/you-love.jpeg",
      price: "5200",
      originalPrice: "5200",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-black to-blue-700 text-white">
        <div className="max-w-6xl mx-auto py-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
              LifePath Guide Books
            </h1>
            <p className="text-lg text-blue-100 mb-8">
              Your step-by-step companion for career clarity, skills, and
              growth.
            </p>
          </div>
        </div>
      </section>

      {/* Guide Books Grid */}
      <section className="max-w-6xl mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
          {guideBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-zinc-200 flex flex-col"
            >
              {/* Guide Book Info */}
              <div className="p-4 flex flex-col h-full group">
                {/* Title */}
                <h4 className="text-xl font-semibold text-zinc-900 mb-3 line-clamp-3 leading-tight group-hover:underline group-hover:text-blue-500">
                  {book.title}
                </h4>

                {/* Author */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <User size={14} className="text-white" />
                  </div>
                  <p className="text-xs text-zinc-600">{book.author}</p>
                </div>

                {/* Duration and Chapters */}
                <div className="flex items-center gap-3 text-xs text-zinc-600 mb-3 pb-3 border-b border-zinc-200">
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {book.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen size={14} />
                    {book.chapters}
                  </span>
                </div>

                {/* Guide Book Cover */}
                <div className="mb-4 bg-blue-50 border border-blue-300 rounded-lg p-3.5 grow">
                  <div className="relative w-full aspect-video rounded-md overflow-hidden bg-white">
                    <Image
                      src={book.cover}
                      alt={`${book.title} cover`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-blue-800">
                      Rs.{book.price}
                    </span>
                    <span className="text-xs text-zinc-500 line-through">
                      {book.originalPrice}
                    </span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 items-center justify-between w-full mt-auto">
                  <button className="w-full px-4 py-2 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold rounded-full transition-colors text-sm">
                    Get Guide Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
