import { W as jsxRuntimeExports } from "./server-Do46AUw2.js";
import { c as createLucideIcon, L as Link } from "./router-DvG2vRnI.js";
import { P as PageContainer } from "./PageContainer-BKScM67x.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode);
function PerfilPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "-mt-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "animate-fade-up text-pretty text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl", children: [
      "Transformando problemas",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "complexos em ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "italic text-muted-foreground", children: [
        "experiências",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "digitais intuitivas",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {})
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "animate-fade-up delay-200 mt-8 max-w-4xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl", children: "Sou Décio D'Almeida, designer focado em produto. comecei no ramo gráfico há 30 anos, onde erro não tem Ctrl+Z depois da impressão. Esse jeito de trabalhar — com cuidado, atenção e senso de responsabilidade — foi o que me trouxe para o UX e ainda guia tudo que faço." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "animate-fade-up delay-200 mt-4 max-w-4xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl", children: "Atuo há 5 anos como Product Designer, conduzindo pesquisas, validando soluções e colaborando com stakeholders, times de desenvolvimento e QAs. Tenho experiência em discovery, design system, prototipação e entrega de interfaces com alto padrão visual e técnico — do problema ao pixel." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up delay-300 mt-10 flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cases", className: "group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm min-w-[200px] justify-center font-medium text-primary-foreground transition-all hover:gap-3 hover:bg-primary/90", children: "Cases" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contato", className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm min-w-[200px] justify-center font-medium text-foreground transition-colors hover:bg-muted", children: "Contato" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/CV_Decio_UX.pdf", download: true, className: "inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
        "Baixar Curriculum"
      ] })
    ] })
  ] }) });
}
export {
  PerfilPage as component
};
