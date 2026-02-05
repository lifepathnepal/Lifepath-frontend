import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const footerColumns = [
    {
      links: [
        { label: "Job Training", href: "/job-training" },
        { label: "Best Jobs", href: "/best-jobs" },
        { label: "Success Stories", href: "/success-stories" },
        { label: "About Us", href: "/about-us" },
        { label: "Contact Us", href: "/contact-us" },
      ],
    },
  ];

  return (
    <footer className="bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Large Background Text */}
        <div className="relative py-8 md:py-20 overflow-hidden w-full mx-auto">
          <div className="text-center">
            <h2
              className="text-[64px] sm:text-[90px] md:text-[160px] lg:text-[220px] font-black text-transparent"
              style={
                {
                  WebkitTextStroke: "2px #2b37e3",
                  letterSpacing: "-0.05em",
                  lineHeight: "0.9",
                } as React.CSSProperties
              }
            >
              LifePath
            </h2>
            {/* <Image
              src="/main-logo.png"
              alt="LifePath Logo"
              width={1300}
              height={160}
              className="mx-auto"
            /> */}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-200"></div>
        {/* Footer Links */}
        <div className="py-4">
          {footerColumns.map((column, index) => (
            <div key={index}>
              <ul className="flex justify-center gap-2 md:gap-4 flex-wrap">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-600 hover:text-blue-800 transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={20}
                        className="text-zinc-300 group-hover:text-blue-500 hover-transition-colors duration-300"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Copyright */}
        <div className="py-2 md:py-4 text-center">
          <p className="text-sm text-zinc-500">
            © 2026 LifePath Career Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
