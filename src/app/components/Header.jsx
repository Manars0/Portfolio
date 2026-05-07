import { jsx, jsxs } from "react/jsx-runtime";
function Header() {
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-[1000] w-full bg-[rgba(255,255,255,0.5)] backdrop-blur-[12px]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1800px] lg:grid lg:grid-cols-[minmax(320px,38%)_minmax(0,1fr)]", children: [
    /* @__PURE__ */ jsx("div", { className: "flex h-[64px] items-center px-[clamp(32px,4vw,80px)]", children: /* @__PURE__ */ jsxs("span", { className: "text-[clamp(19px,1.5vw,22px)] font-[600] tracking-[-0.015em] text-[#111]", children: [
      "Manar S",
      /* @__PURE__ */ jsx("span", { className: "text-[#E85D2A]", children: "." })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "hidden lg:block h-[64px]" })
  ] }) });
}
export {
  Header
};
