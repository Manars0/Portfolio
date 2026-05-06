import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  tools: string[];
  image: string;
  imageAlt: string;
  link: string;
  category: string;
};

export function ProjectSection({ project }: { project: Project }) {
  return (
    <section className="mb-[clamp(64px,10vh,140px)]">
      <article className="w-full max-w-5xl">
        <div className="mb-6 flex items-center gap-3 text-neutral-400">
          <span className="text-xs uppercase tracking-[0.22em] md:text-[13px]">
            {project.number} — {project.category}
          </span>
        </div>

        <div className="h-[clamp(400px,70vh,900px)] w-full overflow-hidden rounded-2xl">
          <ImageWithFallback
            src={project.image}
            alt={project.imageAlt}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <h3 className="mt-8 text-[clamp(1.85rem,2.8vw,2.5rem)] leading-[1.08] tracking-[-0.025em] text-[#111]">
          {project.title}
        </h3>

        <p className="mt-4 max-w-3xl text-[16px] leading-[1.75] text-neutral-600 md:text-[17px]">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-[#f5f5f5] px-3 py-1.5 text-[13px] tracking-tight text-neutral-700"
            >
              {tool}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          className="group mt-8 inline-flex w-fit items-center gap-2 border-b border-transparent pb-1 text-[#E85D2A] transition-colors hover:border-[#E85D2A]"
        >
          View Project
          <span
            className="transition-transform group-hover:translate-x-1"
            aria-hidden
          >
            →
          </span>
        </a>
      </article>
    </section>
  );
}
