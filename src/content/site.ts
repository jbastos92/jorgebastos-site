// Site content. Edit this file to change the About, Career and Projects pages.

export const profile = {
  name: "Jorge Bastos",
  role: "Full Stack Developer",
  location: "Florianópolis, Brazil",
  about: [
    "I’m a software engineer with about ten years of experience, working across frontend and backend development. My most recent work was on e.CETESB, the online services platform of CETESB, São Paulo’s state environmental agency.",
    "I helped build features and modules for Reclamações (complaints), Infrações (violations), and Inspeções (inspections). I built some of these modules end to end, across frontend and backend. I’m strengthening my system design skills and studying AI engineering, and I’m open to working with international teams.",
  ],
  links: [
    { label: "GitHub", href: "https://github.com/jbastos92" },
    // { label: "LinkedIn", href: "https://www.linkedin.com/in/your-profile" },
  ],
};

export type Job = {
  role: string;
  company: string;
  client?: string;
  period: string;
  highlights: string[];
};

export const career: Job[] = [
  {
    role: "Full Stack Developer",
    company: "Softplan",
    client: "CETESB (São Paulo’s state environmental agency)",
    period: "October 2020 – September 2026",
    highlights: [
      "Contributed to e.CETESB, CETESB's online services platform.",
      "Helped build features and modules for Reclamações (complaints), Infrações (violations), and Inspeções (inspections), some of them end to end, across frontend and backend. They were the most recent modules added to the platform.",
      "From January 2026, I worked directly in the production environment, fixing frontend and backend bugs, monitoring the system, resolving database issues, and building on-demand features and new reports.",
      "Stack: React and TypeScript on the frontend; Java and Spring Boot on the backend.",
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
    name: "e.CETESB",
    description:
      "I contributed features and modules to CETESB’s online services platform, including Reclamações (complaints), Infrações (violations), and Inspeções (inspections). I built some of these modules across frontend and backend.",
    stack: ["React", "TypeScript", "Java", "Spring Boot"],
    href: "https://e.cetesb.sp.gov.br/",
  },
  {
    name: "Jorge Bastos personal website",
    description: "My personal website presents my profile, career experience, projects, and learning notes.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare Pages"],
    href: "https://github.com/jbastos92/jorgebastos-site",
  },
];
