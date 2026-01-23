import { Icon } from "@iconify/react";
import { IconifyIcon } from "../common/IconifyIcon";

export default function Footer() {
  const footerColumns = [
    {
      title: "Products",
      links: [
        { label: "Career Tools", href: "#" },
        { label: "Premium", href: "#" },
        { label: "Enterprise", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Roadmap", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Documentation", href: "#" },
        { label: "Guides", href: "#" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Career Assessment", href: "#" },
        { label: "Job Matching", href: "#" },
        { label: "Skill Development", href: "#" },
        { label: "Mentorship", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "FAQ", href: "#" },
      ],
    },
    {
      title: "Platform",
      links: [
        { label: "Features", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "Security", href: "#" },
        { label: "API", href: "#" },
        { label: "Updates", href: "#" },
        { label: "Changelog", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Contact Us", href: "#" },
        { label: "About", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        

        {/* Divider */}
        <div className="border-t border-zinc-200"></div>

        {/* Footer Links */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {footerColumns.map((column, index) => (
            <div key={index}>
              <h4 className="font-semibold text-blue-600 mb-6">
                {column.title}
              </h4>
              <ul className="space-y-4">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-600 hover:text-blue-800 transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <IconifyIcon
                        icon={"solar:arrow-right-up-line-duotone"}
                        width={20}
                        height={20}
                        className="text-zinc-300 group-hover:text-blue-500 hover-transition-colors duration-300"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-200"></div>

        {/* Copyright */}
        <div className="py-8 text-center">
          <p className="text-sm text-zinc-500">
            © 2026 LifePath Career Platform. All rights reserved.
          </p>
        </div>

        {/* Large Background Text */}
        <div className="relative py-10 overflow-hidden">
          <div className="text-center">
            <h2
              className="text-9xl md:text-[220px] font-black text-transparent"
              style={
                {
                  WebkitTextStroke: "2px #E0E2FE",
                  letterSpacing: "-0.05em",
                  lineHeight: "0.9",
                } as React.CSSProperties
              }
            >
              LifePath
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
}
