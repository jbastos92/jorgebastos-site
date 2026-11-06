// Site content. Edit this file to change the About, Career and Projects pages.
// Entries marked "Example" are placeholders: replace them with real content.

export const profile = {
  name: "Jorge Bastos",
  role: "Full Stack Developer",
  location: "Florianópolis, Brazil",
  about: [
    "Example: I am a full stack developer based in Florianópolis, Brazil. Replace this paragraph with a short introduction: what you build, what you care about, and what you are looking for next.",
    "Example: A second paragraph can cover your main stack and the kind of problems you enjoy solving.",
  ],
  links: [
    { label: "GitHub", href: "https://github.com/jbastos92" },
    // { label: "LinkedIn", href: "https://www.linkedin.com/in/your-profile" },
  ],
};

export type Job = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export const career: Job[] = [
  {
    role: "Example: Full Stack Developer",
    company: "Example Company",
    period: "2022 – present",
    highlights: [
      "Example: one line on an outcome you delivered, with a number if you have one.",
      "Example: one line on the stack or the team.",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    name: "jorgebastos-site",
    description: "This website: a static Next.js site hosted on Cloudflare Pages, with Markdown posts.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare Pages"],
    href: "https://github.com/jbastos92/jorgebastos-site",
  },
];
