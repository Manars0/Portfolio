import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

const expertise = [
  "UI/UX Design",
  "Frontend Development",
  "Business Analysis",
  "SQL & Data Analysis",
  "MVP Development",
  "Dashboards & Automation",
];

export function Sidebar() {
  return (
    <aside className="w-full border-b border-neutral-200/80 bg-[#F7F7F5] lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r lg:border-neutral-200/70">
      <div className="mx-auto flex h-full w-full max-w-[520px] flex-col gap-8 p-[clamp(32px,4vw,80px)]">
        <div className="flex items-baseline gap-3">
          <h1 className="text-[clamp(2rem,4.2vw,3.1rem)] leading-[0.95] tracking-[-0.03em] text-[#111]">
            Manar S
          </h1>
          <span className="size-2 rounded-full bg-[#E85D2A]" />
        </div>

        <h2 className="text-[clamp(1.35rem,2.1vw,1.85rem)] leading-[1.32] tracking-[-0.015em] text-[#111]">
          UI/UX Designer & Frontend Developer
        </h2>

        <p className="max-w-[36ch] text-[18px] leading-[1.7] text-neutral-600">
          I design, build, and think through digital products that solve real
          problems and deliver meaningful impact.
        </p>

        <div className="flex flex-col gap-5 pt-2">
          <h3 className="text-xs uppercase tracking-[0.22em] text-neutral-400">
            Expertise
          </h3>
          <ul className="flex flex-col gap-4">
            {expertise.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-[16px] tracking-tight text-[#111]"
              >
                <span className="size-1.5 rounded-full bg-[#E85D2A]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex items-center gap-4 pt-8 text-neutral-500">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="opacity-60 transition hover:opacity-100 hover:text-[#E85D2A]"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-[22px]" strokeWidth={1.5} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="opacity-60 transition hover:opacity-100 hover:text-[#E85D2A]"
            aria-label="GitHub"
          >
            <Github className="size-[22px]" strokeWidth={1.5} />
          </a>
          <a
            href="mailto:hello@example.com"
            className="opacity-60 transition hover:opacity-100 hover:text-[#E85D2A]"
            aria-label="Email"
          >
            <Mail className="size-[22px]" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </aside>
  );
}
