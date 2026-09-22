"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type ProjectType = "all" | "client" | "internal";

interface CaseStudy {
  n: string;
  type: "client" | "internal";
  title: string;
  category: string;
  status: "Live Production" | "In Development";
  summary: string;
  technologies: string[];
  image: string;
  alt: string;
  url?: string;
  github?: string;
  videoUrl?: string;
  highlights: string[];
}

const PROJECTS: CaseStudy[] = [
  {
    n: "01",
    type: "client",
    title: "FoodHub Cakes",
    category: "E-commerce / Food",
    status: "Live Production",
    summary:
      "A bespoke culinary e-commerce platform engineered to showcase artisanal cakes and bakery products online. Built with a high-conversion visual menu, customer ordering flow, and an appetizing food-first shopping experience.",
    technologies: ["React", "Node.js", "Express", "Database", "Tailwind CSS"],
    image: "/images/foodhub.jpg",
    alt: "FoodHub Cakes artisanal bakery e-commerce showcase",
    url: "https://foodhubcakes.in/",
    videoUrl: "/videos/foodhub-website-full.mp4",
    highlights: [
      "Custom product catalog with high-fidelity food imagery",
      "Streamlined mobile checkout & order submission",
      "Real-time customer interaction and enquiry flows",
    ],
  },
  {
    n: "02",
    type: "client",
    title: "Aurelia Villas",
    category: "Real Estate / Hospitality",
    status: "In Development",
    summary:
      "A luxury hospitality and villa reservation platform designed to present multiple premier estates in a single unified system. Features bespoke architectural photography, villa amenities, location mapping, and booking inquiry workflows.",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Database"],
    image: "/images/aurelia.jpg",
    alt: "Aurelia Villas luxury private villa showcase interface",
    url: "https://aurelia-villas-nu.vercel.app/",
    videoUrl: "/videos/aurelia-walkthrough-1080p.mp4",
    highlights: [
      "Multi-property architecture showcase with day/night modes",
      "Interactive villa specification and facility breakdown",
      "Integrated booking and enquiry pipeline for guests",
    ],
  },
  {
    n: "03",
    type: "client",
    title: "BS Smart Solution",
    category: "Business / Technology",
    status: "In Development",
    summary:
      "A corporate digital platform built to present smart industrial and enterprise solutions, strengthening corporate brand identity and client acquisition through a modern web presence.",
    technologies: ["React", "Next.js", "Web Technologies", "Responsive Architecture"],
    image: "/images/bs_smart.jpg",
    alt: "BS Smart Solution corporate technology website",
    url: "https://www.bs1solution.site/",
    highlights: [
      "Professional service hierarchy and technology positioning",
      "Fast load times and structured business inquiry pathways",
      "Clean corporate design system tailored for commercial clients",
    ],
  },
  {
    n: "04",
    type: "internal",
    title: "EduShield",
    category: "EdTech / AI",
    status: "In Development",
    summary:
      "An intelligent educational ecosystem designed to provide students with a secure, structured digital learning environment. Centralizes academic resources, safeguards learning sessions, and automates student support through AI.",
    technologies: ["Web Technologies", "AI / Automation", "React", "Node.js"],
    image: "/images/edushield.jpg",
    alt: "EduShield secure digital education and AI support platform",
    url: "https://edushield-fawn.vercel.app/",
    github: "https://github.com/Kishore-kumar-17/EduSheild",
    highlights: [
      "Automated educational resource governance and indexing",
      "AI-assisted student query resolution & guidance workflows",
      "Secure student-first interface built for distraction-free learning",
    ],
  },
  {
    n: "05",
    type: "internal",
    title: "Resource Hub",
    category: "Productivity / Developer Tools",
    status: "In Development",
    summary:
      "A centralized developer and designer directory indexing top-tier engineering libraries, UI frameworks, AI tooling, and productivity resources in one searchable, high-utility dashboard.",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    image: "/images/resource_hub.jpg",
    alt: "Resource Hub developer and designer curated directory",
    url: "https://resource-hub-beta-lake.vercel.app/",
    highlights: [
      "Curated repository of developer, design, and AI tooling",
      "Instant search, category tagging, and direct resource links",
      "Designed for minimal latency and maximum builder utility",
    ],
  },
  {
    n: "06",
    type: "internal",
    title: "AI Sale",
    category: "AI / Sales Automation",
    status: "In Development",
    summary:
      "An autonomous AI sales architecture designed to accelerate commercial revenue pipelines through automated lead scoring, conversational qualification, CRM synchronization, and multi-step deal nurturing.",
    technologies: ["Python", "AI Agents", "Automation Workflows", "Web Technologies"],
    image: "/images/ai_sale.jpg",
    alt: "AI Sale autonomous lead handling and sales pipeline engine",
    github: "https://github.com/Kishore-kumar-17/AI-Sale",
    highlights: [
      "Automated lead qualification and predictive score assignment",
      "Conversational AI handling for real-time customer inquiries",
      "Seamless integration hooks with enterprise sales systems",
    ],
  },
];

export default function WorkIndex() {
  const [filter, setFilter] = useState<ProjectType>("all");
  const [activeVideo, setActiveVideo] = useState<{ src: string; title: string } | null>(null);

  const filteredProjects = PROJECTS.filter((item) => {
    if (filter === "client") return item.type === "client";
    if (filter === "internal") return item.type === "internal";
    return true;
  });

  return (
    <section className="band border-t border-line">
      <div className="shell">
        {/* Header & Filter Controls */}
        <div className="flex flex-col justify-between gap-6 border-b border-line pb-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow reveal text-mid">Portfolio &amp; Deployments</p>
            <h2 className="display mt-3 text-3xl md:text-4xl">Featured Systems</h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex max-w-full flex-nowrap items-center gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:pb-0">
            {[
              { key: "all", label: `All Projects (${PROJECTS.length})` },
              {
                key: "client",
                label: `Client Work (${PROJECTS.filter((p) => p.type === "client").length})`,
              },
              {
                key: "internal",
                label: `Alexons Labs (${PROJECTS.filter((p) => p.type === "internal").length})`,
              },
            ].map((tab) => {
              const active = filter === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setFilter(tab.key as ProjectType)}
                  className={`flex-shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-xs font-mono tracking-wider transition-all duration-200 ${
                    active
                      ? "bg-ink text-paper font-semibold shadow-sm"
                      : "border border-line bg-paper text-mid hover:border-ink hover:text-ink"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project List */}
        <ul className="mt-14 space-y-20 md:mt-16">
          {filteredProjects.map((item, i) => (
            <li
              key={item.title}
              className="reveal border-t border-line pt-12 md:pt-16"
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <div className="grid items-start gap-x-12 gap-y-10 lg:grid-cols-12">
                {/* Left Number */}
                <div className="flex items-baseline gap-4 lg:col-span-1">
                  <span className="numeral text-sm font-mono text-mid">{item.n}</span>
                </div>

                {/* Center Details & Tech Stack */}
                <div className="lg:col-span-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="eyebrow text-xs text-mid">{item.category}</span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-mono tracking-wide ${
                        item.status === "Live Production"
                          ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 font-medium"
                          : "border border-line bg-off text-mid"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          item.status === "Live Production"
                            ? "bg-emerald-500 animate-pulse"
                            : "bg-mid/50"
                        }`}
                      />
                      {item.status}
                    </span>
                  </div>

                  <h2 className="display mt-4 text-3xl md:text-4xl">{item.title}</h2>
                  <p className="mt-5 leading-relaxed text-dark">{item.summary}</p>

                  {/* Highlights */}
                  <div className="mt-6 rounded-lg border border-line bg-off p-4">
                    <p className="eyebrow text-xs text-mid">Key Architecture</p>
                    <ul className="mt-2.5 space-y-2">
                      {item.highlights.map((h) => (
                        <li key={h} className="flex items-baseline gap-2.5 text-xs text-dark">
                          <span aria-hidden className="arrow text-mid">&#8594;</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Badges */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-line bg-paper px-2.5 py-1 text-[11px] font-mono text-mid"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-solid group text-xs"
                      >
                        Visit Website
                        <span className="arrow arrow-ne">&#8599;</span>
                      </a>
                    )}
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-ghost group text-xs"
                      >
                        Source Code
                        <span className="arrow arrow-ne">&#8599;</span>
                      </a>
                    )}
                    {item.videoUrl && (
                      <button
                        type="button"
                        onClick={() =>
                          setActiveVideo({ src: item.videoUrl!, title: item.title })
                        }
                        className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-ink transition-colors hover:border-ink hover:bg-off"
                      >
                        <span className="text-xs">&#9654;</span>
                        Watch Walkthrough
                      </button>
                    )}
                  </div>
                </div>

                {/* Right Device / Browser Preview Mockup */}
                <div className="lg:col-span-6">
                  <div className="group relative overflow-hidden rounded-xl border border-line bg-off transition-all duration-500 hover:border-ink shadow-sm hover:shadow-md">
                    {/* Browser Chrome Header */}
                    <div className="flex items-center justify-between border-b border-line bg-paper/80 px-4 py-2.5 backdrop-blur-sm">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-ink/20" />
                        <span className="h-2 w-2 rounded-full bg-ink/20" />
                        <span className="h-2 w-2 rounded-full bg-ink/20" />
                      </div>
                      <div className="max-w-[200px] truncate rounded bg-off px-2 py-0.5 font-mono text-[10px] text-mid">
                        {item.url ? item.url.replace(/^https?:\/\//, "") : "alexons.internal"}
                      </div>
                      <span className="eyebrow text-[9px] uppercase tracking-wider text-mid">
                        {item.type === "client" ? "Client" : "Labs"}
                      </span>
                    </div>

                    {/* Image Container with Optional Click to Action */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-off">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />

                      {item.videoUrl && (
                        <button
                          type="button"
                          onClick={() =>
                            setActiveVideo({ src: item.videoUrl!, title: item.title })
                          }
                          aria-label={`Play walkthrough for ${item.title}`}
                          className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <span className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-paper/90 text-ink shadow-lg backdrop-blur-sm transition-transform duration-300 hover:scale-110">
                            <span className="ml-1 text-base sm:text-lg">&#9654;</span>
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Video Walkthrough Modal */}
        {activeVideo && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-line bg-paper shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-wider text-ink font-semibold">
                    {activeVideo.title} &mdash; Walkthrough
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="rounded-full border border-line px-3 py-1 font-mono text-xs text-mid transition-colors hover:border-ink hover:text-ink"
                >
                  Close &times;
                </button>
              </div>

              <div className="relative aspect-[16/9] w-full bg-black">
                <video
                  src={activeVideo.src}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        )}

        <div className="rule mt-20" />

        {/* Bottom Call to Action */}
        <div className="reveal mt-16 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h3 className="display text-2xl md:text-3xl">Have an idea worth building?</h3>
            <p className="mt-2 text-mid">
              We partner with founders and enterprises to ship products that matter.
            </p>
          </div>
          <Link href="/contact" className="btn btn-solid group">
            Start a Conversation
            <span className="arrow arrow-ne">&#8599;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}