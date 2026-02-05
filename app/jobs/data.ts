export type JobRegion = "nepal" | "global";

export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  region: JobRegion;
  type: string;
  salary: string;
  experience: string;
  category: string;
  postedDate: string;
  img: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

export const jobs: Job[] = [
  {
    id: 1,
    title: "Software Developer",
    company: "F1 Soft",
    location: "Kathmandu only",
    region: "nepal",
    type: "Full time",
    salary: "80k-200k",
    experience: "1-5 yrs exp",
    category: "Software Developer",
    postedDate: "1 hour ago",
    img: "/company-logo/webx.png",
    summary:
      "Build and maintain production web apps, collaborate with cross-functional teams, and deliver high-quality features.",
    responsibilities: [
      "Develop and ship new product features",
      "Write clean, testable code",
      "Collaborate with design and QA",
      "Maintain and improve existing systems",
    ],
    requirements: [
      "Solid understanding of JavaScript/TypeScript",
      "Experience with React or similar frameworks",
      "Familiar with REST APIs",
      "Problem-solving mindset",
    ],
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Cursor",
    location: "Remote",
    region: "global",
    type: "Full time",
    salary: "60k-180k",
    experience: "1-4 yrs exp",
    category: "Product Designer",
    postedDate: "4 hours ago",
    img: "/company-logo/cursor.svg",
    summary:
      "Design intuitive digital experiences, create user flows, and collaborate closely with product and engineering teams.",
    responsibilities: [
      "Create wireframes and prototypes",
      "Run user research and usability testing",
      "Design UI components and design systems",
      "Collaborate with product managers",
    ],
    requirements: [
      "Portfolio demonstrating UX/UI work",
      "Proficiency with Figma",
      "Understanding of user-centered design",
      "Strong communication skills",
    ],
  },
  {
    id: 3,
    title: "Graphic Designer",
    company: "FonePay",
    location: "Nepal only",
    region: "nepal",
    type: "Full time",
    salary: "60k-150k",
    experience: "3-7 yrs exp",
    category: "Branding Designer",
    postedDate: "5 hours ago",
    img: "/company-logo/webx.png",
    summary:
      "Create brand visuals, marketing assets, and campaign creatives with strong visual consistency.",
    responsibilities: [
      "Design marketing and social assets",
      "Collaborate with marketing team",
      "Maintain brand guidelines",
      "Deliver assets in multiple formats",
    ],
    requirements: [
      "Proficiency in Adobe Suite or Figma",
      "Strong typography and layout skills",
      "Portfolio with branding work",
      "Ability to meet deadlines",
    ],
  },
  {
    id: 4,
    title: "Account Executive",
    company: "Nameste",
    location: "Nepal only",
    region: "nepal",
    type: "Part-time",
    salary: "90k-140k",
    experience: "2-6 yrs exp",
    category: "Finance",
    postedDate: "5 hours ago",
    img: "/company-logo/cursor.svg",
    summary:
      "Manage client relationships, drive revenue growth, and ensure customer success across accounts.",
    responsibilities: [
      "Maintain and grow client accounts",
      "Handle renewals and upsells",
      "Prepare proposals and presentations",
      "Track account performance",
    ],
    requirements: [
      "Strong communication and negotiation",
      "Experience in account management",
      "Ability to work with targets",
      "Organized and proactive",
    ],
  },
  {
    id: 5,
    title: "Junior Graphic Designer",
    company: "Logolab Global",
    location: "Lalitpur",
    region: "nepal",
    type: "Full time",
    salary: "45k-90k",
    experience: "0-2 yrs exp",
    category: "Graphic Design",
    postedDate: "2 hours ago",
    img: "/company-logo/webx.png",
    summary:
      "Support design team in creating brand assets, layouts, and social visuals.",
    responsibilities: [
      "Assist with daily design tasks",
      "Prepare assets for print and digital",
      "Iterate on feedback",
      "Organize design files",
    ],
    requirements: [
      "Basic design knowledge",
      "Familiarity with Figma or Adobe",
      "Willingness to learn",
      "Portfolio of student or personal work",
    ],
  },
  {
    id: 6,
    title: "Social Media Manager",
    company: "BrandNest",
    location: "Remote",
    region: "global",
    type: "Full time",
    salary: "70k-140k",
    experience: "2-4 yrs exp",
    category: "Digital Marketing",
    postedDate: "3 hours ago",
    img: "/company-logo/cursor.svg",
    summary:
      "Plan content, manage social channels, and grow community engagement with data-driven strategies.",
    responsibilities: [
      "Develop social content calendars",
      "Publish and optimize content",
      "Analyze performance metrics",
      "Collaborate with creative teams",
    ],
    requirements: [
      "Experience managing social channels",
      "Understanding of analytics",
      "Strong copywriting skills",
      "Creative mindset",
    ],
  },
  {
    id: 7,
    title: "Sales Executive",
    company: "Himalayan Ventures",
    location: "Kathmandu",
    region: "nepal",
    type: "Full time",
    salary: "50k-110k",
    experience: "1-3 yrs exp",
    category: "Sales",
    postedDate: "6 hours ago",
    img: "/company-logo/webx.png",
    summary:
      "Drive outbound sales, manage leads, and close deals to hit monthly targets.",
    responsibilities: [
      "Prospect and qualify leads",
      "Conduct sales calls",
      "Handle objections and close deals",
      "Maintain CRM updates",
    ],
    requirements: [
      "Strong communication skills",
      "Comfortable with targets",
      "Basic CRM knowledge",
      "Self-motivated",
    ],
  },
  {
    id: 8,
    title: "Web Designer",
    company: "PixelCraft Studio",
    location: "Remote",
    region: "global",
    type: "Full time",
    salary: "65k-150k",
    experience: "1-4 yrs exp",
    category: "Web Design",
    postedDate: "8 hours ago",
    img: "/company-logo/cursor.svg",
    summary:
      "Design modern web interfaces and landing pages with strong visual hierarchy and UX.",
    responsibilities: [
      "Design responsive web layouts",
      "Create UI kits and components",
      "Collaborate with developers",
      "Ensure brand consistency",
    ],
    requirements: [
      "Portfolio with web design work",
      "Figma proficiency",
      "Understanding of responsive design",
      "Attention to detail",
    ],
  },
  {
    id: 9,
    title: "Full Stack Developer",
    company: "Everest Digital",
    location: "Pokhara",
    region: "nepal",
    type: "Full time",
    salary: "90k-220k",
    experience: "2-5 yrs exp",
    category: "Full Stack",
    postedDate: "10 hours ago",
    img: "/company-logo/webx.png",
    summary:
      "Build end-to-end web applications with modern front-end and back-end technologies.",
    responsibilities: [
      "Develop APIs and front-end views",
      "Design database schemas",
      "Deploy and monitor services",
      "Collaborate on architecture",
    ],
    requirements: [
      "Experience with React and Node.js",
      "Database knowledge (SQL/NoSQL)",
      "Understanding of REST APIs",
      "Strong debugging skills",
    ],
  },
  {
    id: 10,
    title: "Brand Strategist",
    company: "Nova Growth",
    location: "Remote",
    region: "global",
    type: "Contract",
    salary: "80k-170k",
    experience: "3-6 yrs exp",
    category: "Brand Development",
    postedDate: "12 hours ago",
    img: "/company-logo/cursor.svg",
    summary:
      "Lead brand strategy, positioning, and messaging for growth-focused campaigns.",
    responsibilities: [
      "Define brand positioning",
      "Conduct market research",
      "Develop messaging frameworks",
      "Align marketing campaigns",
    ],
    requirements: [
      "Experience in brand strategy",
      "Strong writing and storytelling",
      "Analytical mindset",
      "Portfolio of strategic work",
    ],
  },
];
