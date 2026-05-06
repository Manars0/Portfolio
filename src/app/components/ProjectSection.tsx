import React, { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronDown } from "lucide-react";

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
  hasDesignDetails?: boolean;
  hasLink?: boolean;
  designDetails?: {
    title: string;
    description: string;
    image?: string;
  }[];
};

export function ProjectSection({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const hasDetails =
    project.hasDesignDetails === true && (project.designDetails?.length ?? 0) > 0;
  const hasLink = project.hasLink === true;

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
            className="h-full w-full object-contain object-center"
          />
        </div>

        <h3 className="mt-8 text-[clamp(1.7rem,2.55vw,2.3rem)] leading-[1.08] tracking-[-0.025em] text-[#111]">
          {project.title}
        </h3>

        <p className="mt-4 max-w-3xl text-[15px] leading-[1.75] text-neutral-600 md:text-[16px]">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-[#f5f5f5] px-3 py-1.5 text-[12px] tracking-tight text-neutral-700"
            >
              {tool}
            </span>
          ))}
        </div>

        {(hasLink || hasDetails) && (
          <div className="mt-8 flex flex-col items-start">
            {hasLink && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-2 border-b border-transparent pb-1 text-[15px] text-[#E85D2A] transition-colors hover:border-[#E85D2A] md:text-[16px]"
              >
                View Project
                <span
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden
                >
                  →
                </span>
              </a>
            )}

            {hasDetails && (
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className={`group inline-flex w-fit items-center gap-1 pb-1 text-[14px] font-normal text-[#E85D2A] opacity-80 transition hover:opacity-100 md:text-[15px] ${
                  hasLink ? "mt-3" : "mt-0"
                }`}
              >
                <span className="border-b border-transparent group-hover:border-[#E85D2A]">
                  {open ? "Hide Design Details –" : "View Design Details +"}
                </span>
                <ChevronDown
                  className={`size-4 transition-transform duration-300 ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                  strokeWidth={2}
                  aria-hidden
                />
              </button>
            )}
          </div>
        )}

        {hasDetails && (
          <div
            className={`mt-12 overflow-hidden transition-all duration-300 ease-in-out ${
              open ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-10">
              {project.designDetails!.map((section) => (
                <section
                  key={section.title}
                  className="w-full max-w-2xl"
                >
                  <h4 className="text-[15px] font-[600] tracking-[-0.01em] text-[#111] md:text-[16px]">
                    {section.title}
                  </h4>
                  <p className="mt-3 whitespace-pre-line text-[14px] leading-[1.8] text-neutral-500 md:text-[15px]">
                    {section.description}
                  </p>

                  {section.image ? (
                      <div className="max-w-full h-auto ">
                      <ImageWithFallback
                        src={section.image}
                        alt={section.title}
                        className="max-w-full h-auto"
                      />
                    </div>
                  ) : (
                    <div className="mt-5 flex h-[300px] w-full items-center justify-center rounded-2xl bg-[#f5f5f5] text-[14px] text-neutral-400">
                      {section.title} Image
                    </div>
                  )}
                </section>
              ))}
            </div>
          </div>
        )}
      </article>
    </section>
  );
}
