/**
 * One source of truth for the selected-work list, used by both the homepage
 * section (components/Work.tsx) and the /work page (components/WorkIndex.tsx).
 * Replace the sample rows with real case studies before launch.
 */
export const PROJECTS = [
  {
    n: "01",
    name: "Project Name",
    tags: "AI / Software / Automation",
    body: "A short description of the product.",
    href: "/work",
  },
  {
    n: "02",
    name: "Project Name",
    tags: "Fintech / AI",
    body: "A short description of the product.",
    href: "/work",
  },
  {
    n: "03",
    name: "Project Name",
    tags: "Data / Platform",
    body: "A short description of the product.",
    href: "/work",
  },
] as const;