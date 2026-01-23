import { Icon } from "@iconify/react";

export default function CoursesSection() {
  const courses = [
    {
      title: "Frontend Mastery-2026 (Beginner)",
      instructor: "by Uchero D. Lucky",
      duration: "8hr 25min",
      lessons: "14 lessons",
      price: "5200",
      originalPrice: "5200",
      discount: "30% OFF",
      color: "from-zinc-50 to-zinc-100",
    },
    {
      title: "Become a UX Designer in 2025 (Beginner)",
      instructor: "by Uchero D. Lucky",
      duration: "8hr 25min",
      lessons: "14 lessons",
      price: "5200",
      originalPrice: "5200",
      discount: "30% OFF",
      isFree: true,
      color: "from-zinc-50 to-zinc-100",
    },
    {
      title: "Become a UX Designer in 2025 (Beginner)",
      instructor: "by Uchero D. Lucky",
      duration: "8hr 25min",
      lessons: "14 lessons",
      price: "1500.00",
      originalPrice: "5200",
      discount: "30% OFF",
      color: "from-zinc-50 to-zinc-100",
    },
    {
      title: "Become a UX Designer in 2025 (Beginner)",
      instructor: "by Uchero D. Lucky",
      duration: "8hr 25min",
      lessons: "14 lessons",
      price: "5200",
      originalPrice: "5200",
      discount: "30% OFF",
      color: "from-zinc-50 to-zinc-100",
    },
    {
      title: "Become a UX Designer in 2025 (Beginner)",
      instructor: "by Uchero D. Lucky",
      duration: "8hr 25min",
      lessons: "14 lessons",
      price: "5200",
      originalPrice: "5200",
      discount: "30% OFF",
      isFree: true,
      color: "from-zinc-50 to-zinc-100",
    },
    {
      title: "Become a UX Designer in 2025 (Beginner)",
      instructor: "by Uchero D. Lucky",
      duration: "8hr 25min",
      lessons: "14 lessons",
      price: "5200",
      originalPrice: "$52",
      discount: "30% OFF",
      color: "from-zinc-50 to-zinc-100",
    },
    {
      title: "Become a UX Designer in 2025 (Beginner)",
      instructor: "by Uchero D. Lucky",
      duration: "8hr 25min",
      lessons: "14 lessons",
      price: "5200",
      originalPrice: "5200",
      discount: "30% OFF",
      color: "from-zinc-50 to-zinc-100",
    },
    {
      title: "Become a UX Designer in 2025 (Beginner)",
      instructor: "by Uchero D. Lucky",
      duration: "8hr 25min",
      lessons: "14 lessons",
      price: "5200",
      originalPrice: "5200",
      discount: "30% OFF",
      color: "from-zinc-50 to-zinc-100",
    },
  ];

  return (
    <section id="courses" className="pb-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 rounded-xl bg-zinc-100 border px-3 py-2 border-zinc-200">
          <h3 className="text-3xl md:text-3xl font-semibold text-zinc-900">
            Explore Our Popular Courses
          </h3>
          <a
            href="#"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold"
          >
            See all
            <Icon icon="mdi:arrow-right" width={20} height={20} />
          </a>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-zinc-200 flex flex-col"
            >
              {/* Course Image/Thumbnail */}
              <div
                className={`bg-linear-to-br ${course.color} h-40 hidden items-center justify-center relative overflow-hidden`}
              >
                {/* Discount Badge */}
                {!course.isFree && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {course.discount}
                  </div>
                )}
                {course.isFree && (
                  <div className="absolute top-2 right-2 bg-blue-700 text-white text-xs font-bold px-2 py-1 rounded">
                    FREE COURSE
                  </div>
                )}

                {/* Image Placeholder */}
                <div className="text-center">
                  <Icon
                    icon="mdi:image-multiple"
                    width={48}
                    height={48}
                    className="text-blue-300 mx-auto mb-2 opacity-60"
                  />
                  <p className="text-blue-400 text-xs opacity-60">
                    Course Image
                  </p>
                </div>
              </div>

              {/* Course Info */}
              <div className="p-4 flex flex-col grow group cursor-pointer">
                {/* Title */}
                <h4 className="text-xl font-medium text-zinc-900 mb-3 line-clamp-3 leading-tight fornt-poppins group-hover:underline group-hover:text-blue-500">
                  {course.title}
                </h4>

                {/* Instructor */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <Icon
                      icon="mdi:account"
                      width={14}
                      height={14}
                      className="text-white"
                    />
                  </div>
                  <p className="text-xs text-zinc-600">{course.instructor}</p>
                </div>

                {/* Duration and Lessons */}
                <div className="flex items-center gap-3 text-xs text-zinc-600 mb-3 pb-3 border-b border-zinc-200">
                  <span className="flex items-center gap-1">
                    <Icon icon="mdi:clock" width={14} height={14} />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon icon="mdi:play-circle" width={14} height={14} />
                    {course.lessons}
                  </span>
                </div>

                {/* Pricing */}
                <div className="mb-4">
                  {course.isFree ? (
                    <p className="text-lg font-bold text-green-500">FREE</p>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-blue-800">
                        Rs.{course.price}
                      </span>
                      <span className="text-xs text-zinc-500 line-through">
                        {course.originalPrice}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex gap-2 items-center justify-between w-full">
                  {/* Enroll Button */}
                  <button className="w-full px-4 py-2 bg-zinc-100 text-blue-500 cursor-pointer hover:bg-blue-700 hover:text-white font-semibold rounded-full transition-colors text-sm mt-auto">
                    View course
                  </button>
                  <button className="w-full px-4 py-2 bg-zinc-600 cursor-pointer hover:bg-blue-700 text-white font-semibold rounded-full transition-colors text-sm mt-auto">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
