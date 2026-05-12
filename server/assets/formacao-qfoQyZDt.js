import { W as jsxRuntimeExports } from "./server-Do46AUw2.js";
import { P as PageContainer } from "./PageContainer-BKScM67x.js";
import { S as SectionHeader } from "./SectionHeader-DYoumIUr.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const items = [{
  type: "Graduação",
  title: "Publicidade e Propaganda",
  institution: "UNIP — Universidade Paulista",
  period: "1988 — 1992",
  description: "Formação em Publicidade e Propaganda — base que desenvolveu o olhar para comunicação visual, narrativa de marca e criação, habilidades que permeiam toda a minha trajetória em design."
}, {
  type: "Pós-graduação",
  title: "História da Arte",
  institution: "FAAP — Fundação Armando Alvares Penteado",
  period: "2013 — 2015",
  description: "Formação em História da Arte pela FAAP — onde aprimorei minha sensibilidade estética, repertório visual e capacidade de leitura crítica da imagem, elementos que influenciam diretamente meu olhar como designer."
}, {
  type: "Curso",
  title: "IxDF — The Interaction Design Foundation",
  institution: "Design Thinking: The Ultimate Guide (2023)\nUser Experience: The Beginner's Guide (2023)",
  period: "2023",
  description: "Formação em Design Thinking e User Experience pela IxDF — cursos que estruturaram a transição para o UX, consolidando metodologias de pesquisa, ideação e resolução de problemas centrada no usuário."
}];
function FormacaoPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "-mt-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Formação acadêmica e contínua" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-6 md:mt-8", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "animate-fade-up", style: {
      animationDelay: `${i * 0.06}s`
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-2xl border border-border bg-card p-6 hover-lift md:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: it.type }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: it.period })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-xl font-semibold tracking-tight md:text-2xl", children: it.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground whitespace-pre-line", children: it.institution }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-pretty text-base leading-relaxed text-muted-foreground", children: it.description })
    ] }) }, it.title)) })
  ] }) });
}
export {
  FormacaoPage as component
};
