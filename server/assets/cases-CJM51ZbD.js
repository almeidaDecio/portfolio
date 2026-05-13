import { U as jsxRuntimeExports } from "./server-LQPqZsNI.js";
import { L as Link } from "./router-yElVuMjX.js";
import { P as PageContainer } from "./PageContainer-CcHzwQD4.js";
import { S as SectionHeader } from "./SectionHeader-DANQHETT.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const cases = [{
  slug: "/case_softfocus_novo",
  company: "Softfocus",
  subtitle: "Softfocus — Zoom Rural",
  title: "Melhorando a experiência na análise e fiscalização do crédito rural",
  summary: "Solução que transforma o monitoramento de crédito rural em um processo mais simples, integrado e orientado a compliance para instituições financeiras.",
  cover: null,
  image: "/dashboard.png"
}, {
  slug: "/case_gamegather",
  company: "Gamegather",
  subtitle: "Freelancer — Portal Gamegather",
  title: "Conectando jogadores pelo que realmente importa: comunidade e respeito",
  summary: "Plataforma social que une gamers com base em interesses e reputação comunitária — criando conexões mais saudáveis e experiências de jogo sem toxicidade.",
  cover: null,
  image: "/gamegather.png"
}];
function CasesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "-mt-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Estudos de caso de produto" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-6 md:mt-10 md:grid-cols-2", children: cases.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: c.slug, className: "animate-fade-up group block overflow-hidden rounded-3xl border border-border bg-card hover-lift", style: {
      animationDelay: `${i * 0.08}s`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[4/2] w-full overflow-hidden", style: c.cover ? {
        background: c.cover
      } : void 0, children: c.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.image, alt: c.company, className: "h-full w-full object-cover object-top" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grain opacity-60" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7", children: [
        c.subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-muted-foreground", children: c.subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-pretty text-lg font-semibold tracking-tight md:text-xl", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base", children: c.summary })
      ] })
    ] }, c.slug)) })
  ] }) });
}
export {
  CasesPage as component
};
