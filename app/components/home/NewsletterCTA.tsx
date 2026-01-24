"use client";
import Image from "next/image";

interface NewsletterCTAProps {
  title?: string;
  description?: string;
  imageSrc?: string;
}

export default function NewsletterCTA({
  title = "Subscribe our newsletter",
  description = "Subscribe to our newsletter and be the first to receive insights, updates, and expert tips on optimizing your career development.",
  imageSrc,
}: NewsletterCTAProps) {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto bg-linear-to-r from-blue-600 via-blue-500 to-indigo-600 text-white rounded-2xl px-2 md:px-4 lg:px-6 my-8">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="">
              <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-white">
                {title}
              </h2>
              <p className="text-lg text-white">{description}</p>
            </div>
            {/* Right Image */}
            <div className="flex items-center justify-center">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt="Newsletter"
                  width={500}
                  height={1000}
                  className="w-full h-84 rounded-2xl object-contain object-top"
                />
              ) : (
                <div className="w-full aspect-square bg-linear-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-blue-300">
                  <div className="text-center">
                    <p className="text-blue-600 font-semibold text-lg">
                      Image Placeholder
                    </p>
                    <p className="text-blue-500 text-sm mt-2">
                      Add your image via imageSrc prop
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
