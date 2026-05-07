import { jsx, jsxs } from "react/jsx-runtime";
import { Linkedin, Github, Mail } from "lucide-react";
const expertise = [
  "UI/UX Design",
  "Frontend Development",
  "Business Analysis",
  "SQL & Data Analysis",
  "MVP Development",
  "Dashboards & Automation"
];
function Sidebar() {
  return /* @__PURE__ */ jsx("aside", { className: "w-full bg-[#F7F7F5] lg:sticky lg:top-0 lg:h-screen", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-full w-full max-w-[520px] flex-col gap-7 p-[clamp(32px,4vw,80px)]", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-[clamp(1.25rem,1.95vw,1.7rem)] leading-[1.32] tracking-[-0.015em] text-[#111]", children: "UI/UX Designer & Frontend Developer" }),
    /* @__PURE__ */ jsx("p", { className: "max-w-[36ch] text-[17px] leading-[1.7] text-neutral-600", children: "I design, build, and think through digital products that solve real problems and deliver meaningful impact." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5 pt-2", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xs uppercase tracking-[0.22em] text-neutral-400", children: "Expertise" }),
      /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-4", children: expertise.map((item) => /* @__PURE__ */ jsxs(
        "li",
        {
          className: "flex items-center gap-3 text-[15px] tracking-tight text-[#111]",
          children: [
            /* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-[#E85D2A]" }),
            item
          ]
        },
        item
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-22 flex items-center gap-4 text-neutral-500", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://linkedin.com",
          target: "_blank",
          rel: "noreferrer",
          className: "opacity-60 transition hover:opacity-100 hover:text-[#E85D2A]",
          "aria-label": "LinkedIn",
          children: /* @__PURE__ */ jsx(Linkedin, { className: "size-[21px]", strokeWidth: 1.5 })
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://github.com",
          target: "_blank",
          rel: "noreferrer",
          className: "opacity-60 transition hover:opacity-100 hover:text-[#E85D2A]",
          "aria-label": "GitHub",
          children: /* @__PURE__ */ jsx(Github, { className: "size-[21px]", strokeWidth: 1.5 })
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "mailto:hello@example.com",
          className: "opacity-60 transition hover:opacity-100 hover:text-[#E85D2A]",
          "aria-label": "Email",
          children: /* @__PURE__ */ jsx(Mail, { className: "size-[21px]", strokeWidth: 1.5 })
        }
      )
    ] })
  ] }) });
}
export {
  Sidebar
};
