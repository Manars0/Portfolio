import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ImageWithFallback } from "./ImageWithFallback";
import { ChevronDown } from "lucide-react";
function ProjectSection({ project }) {
  const [open, setOpen] = useState(false);
  const hasDetails = project.hasDesignDetails === true && (project.designDetails?.length ?? 0) > 0;
  const hasLink = project.hasLink === true;
  return /* @__PURE__ */ jsx("section", { className: "mb-[clamp(64px,10vh,140px)]", children: /* @__PURE__ */ jsxs("article", { className: "w-full max-w-5xl", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-6 flex items-center gap-3 text-neutral-400", children: /* @__PURE__ */ jsxs("span", { className: "text-xs uppercase tracking-[0.22em] md:text-[13px]", children: [
      project.number,
      " \u2014 ",
      project.category
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "h-[clamp(400px,70vh,900px)] w-full overflow-hidden rounded-2xl", children: /* @__PURE__ */ jsx(
      ImageWithFallback,
      {
        src: project.image,
        alt: project.imageAlt,
        className: "h-full w-full object-contain object-center"
      }
    ) }),
    /* @__PURE__ */ jsx("h3", { className: "mt-8 text-[clamp(1.7rem,2.55vw,2.3rem)] leading-[1.08] tracking-[-0.025em] text-[#111]", children: project.title }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-3xl text-[15px] leading-[1.75] text-neutral-600 md:text-[16px]", children: project.description }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: project.tools.map((tool) => /* @__PURE__ */ jsx(
      "span",
      {
        className: "rounded-full bg-[#f5f5f5] px-3 py-1.5 text-[12px] tracking-tight text-neutral-700",
        children: tool
      },
      tool
    )) }),
    (hasLink || hasDetails) && /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col items-start", children: [
      hasLink && /* @__PURE__ */ jsxs(
        "a",
        {
          href: project.link,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "group inline-flex w-fit items-center gap-2 border-b border-transparent pb-1 text-[15px] text-[#E85D2A] transition-colors hover:border-[#E85D2A] md:text-[16px]",
          children: [
            "View Project",
            /* @__PURE__ */ jsx(
              "span",
              {
                className: "transition-transform group-hover:translate-x-1",
                "aria-hidden": true,
                children: "\u2192"
              }
            )
          ]
        }
      ),
      hasDetails && /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => setOpen((v) => !v),
          className: `group inline-flex w-fit items-center gap-1 pb-1 text-[14px] font-normal text-[#E85D2A] opacity-80 transition hover:opacity-100 md:text-[15px] ${hasLink ? "mt-3" : "mt-0"}`,
          children: [
            /* @__PURE__ */ jsx("span", { className: "border-b border-transparent group-hover:border-[#E85D2A]", children: open ? "Hide Design Details \u2013" : "View Design Details +" }),
            /* @__PURE__ */ jsx(
              ChevronDown,
              {
                className: `size-4 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`,
                strokeWidth: 2,
                "aria-hidden": true
              }
            )
          ]
        }
      )
    ] }),
    hasDetails && /* @__PURE__ */ jsx(
      "div",
      {
        className: `mt-12 overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-10", children: project.designDetails.map((section) => /* @__PURE__ */ jsxs(
          "section",
          {
            className: "w-full max-w-2xl",
            children: [
              /* @__PURE__ */ jsx("h4", { className: "text-[15px] font-[600] tracking-[-0.01em] text-[#111] md:text-[16px]", children: section.title }),
              /* @__PURE__ */ jsx("p", { className: "mt-3 whitespace-pre-line text-[14px] leading-[1.8] text-neutral-500 md:text-[15px]", children: section.description }),
              section.image ? /* @__PURE__ */ jsx("div", { className: "max-w-full h-auto ", children: /* @__PURE__ */ jsx(
                ImageWithFallback,
                {
                  src: section.image,
                  alt: section.title,
                  className: "max-w-full h-auto"
                }
              ) }) : /* @__PURE__ */ jsxs("div", { className: "mt-5 flex h-[300px] w-full items-center justify-center rounded-2xl bg-[#f5f5f5] text-[14px] text-neutral-400", children: [
                section.title,
                " Image"
              ] })
            ]
          },
          section.title
        )) })
      }
    )
  ] }) });
}
export {
  ProjectSection
};
