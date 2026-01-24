import { BookOpen, Map, GraduationCap, Briefcase } from "lucide-react";

interface CategoryCardProps {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  para?: string;
}

const CategoryCard = ({ title, icon: Icon, para }: CategoryCardProps) => {
  return (
    <div className="group cursor-pointer rounded-2xl bg-linear-to-br from-blue-100 to-sky-50 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 relative overflow-hidden">
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-400 via-blue-700 to-sky-500 animate-spin-slow blur-sm"
          style={{ animation: "spin 3s linear infinite" }}
        />
        <div className="absolute inset-0.5 rounded-2xl bg-linear-to-br from-blue-100 to-sky-50" />
      </div>

      <div className="flex flex-col gap-2 relative z-10">
        <div className="flex items-center gap-2">
          <div className="shrink-0">
            <Icon
              size={24}
              className="text-blue-600 group-hover:text-blue-700 transition-colors"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
        </div>
        <p className="text-sm text-zinc-700">{para}</p>
      </div>
    </div>
  );
};

const CategorySection = () => {
  const categories = [
    {
      title: "Career Discovery",
      icon: Map,
      para: "Find careers that match your personality, interest & market demand",
    },
    {
      title: "Skill Roadmaps",
      icon: BookOpen,
      para: "Learn only the skills companies in Nepal are hiring for",
    },
    {
      title: "Industry Certificati",
      icon: GraduationCap,
      para: "Job-ready certifications, not just theory",
    },
    {
      title: "Job Access",
      icon: Briefcase,
      para: "Internships, remote jobs & placement guidance",
    },
  ];

  return (
    <section className="w-full py-8 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              icon={category.icon}
              para={category.para}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
