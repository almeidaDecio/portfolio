import { W as jsxRuntimeExports } from "./server-Do46AUw2.js";
function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: "flex flex-col gap-4 " + (align === "center" ? "items-center text-center" : "items-start"),
      children: [
        eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-foreground" }),
          eyebrow
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-pretty text-3xl font-semibold tracking-tight md:text-4xl", children: title }),
        description && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "max-w-4xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg " + (align === "center" ? "mx-auto" : ""),
            children: description
          }
        )
      ]
    }
  );
}
export {
  SectionHeader as S
};
