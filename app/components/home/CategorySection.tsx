import Image from "next/image";

interface CategoryCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  para?: string;
}

const CategoryCard = ({
  title,
  imageSrc,
  imageAlt,
  para,
}: CategoryCardProps) => {
  return (
    <div className="group rounded-2xl bg-white transition-all duration-300 border border-slate-200 hover:border-blue-200 hover:shadow-lg overflow-hidden">
      <div className="flex items-stretch gap-4">
        <div className="shrink-0 bg-blue-50 ring-1 ring-blue-100 flex items-center justify-center w-20 md:w-44 md:h-44 p-4">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={56}
            height={56}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="flex-1 py-4 md:py-5">
          <h3 className="text-base md:text-2xl font-semibold text-slate-900 leading-tight">
            {title}
          </h3>
          <p className="text-sm text-slate-600 mt-1.5">{para}</p>
        </div>
      </div>
    </div>
  );
};

const CategorySection = () => {
  const categories = [
    {
      title: "Choosing careers based on salary or pressure",
      imageSrc: "/problem/pressure.png",
      imageAlt: "Salary pressure",
      para: "It feels safe, but it rarely feels right.",
    },
    {
      title: "Feeling capable but directionless",
      imageSrc: "/problem/directionless.png",
      imageAlt: "Directionless",
      para: "You know you can do more, but the path is foggy.",
    },
    {
      title: "Switching paths without understanding why",
      imageSrc: "/problem/switching.png",
      imageAlt: "Switching paths",
      para: "Change after change, yet the same uncertainty remains.",
    },
    {
      title: "Advice that ignores personality",
      imageSrc: "/problem/ignore.png",
      imageAlt: "Personality ignored",
      para: "Generic tips don't match who you are.",
    },
  ];

  return (
    <section className="w-full px-4 bg-linear-to-b from-blue-50 to-zinc-50">
      <div className="max-w-6xl mx-auto py-14">
        <div className="text-center mb-10">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-blue-500/80">
            The Problem
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-semibold leading-tight text-transparent bg-clip-text bg-linear-to-r from-black to-blue-600">
            Most people don&apos;t fail <br />
            they&apos;re just on the wrong path.
          </h2>
          <p className="text-sm md:text-base text-zinc-700 mt-3">
            This is where emotional trust begins — acknowledging the common
            struggles our users face.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              imageSrc={category.imageSrc}
              imageAlt={category.imageAlt}
              para={category.para}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
