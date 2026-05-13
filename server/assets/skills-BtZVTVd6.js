import { U as jsxRuntimeExports } from "./server-CYDZ-g7l.js";
import { P as PageContainer } from "./PageContainer-CpDVB6jB.js";
import { S as SectionHeader } from "./SectionHeader-DP2-1M2d.js";
import { B as Badge } from "./badge-CnirNAIX.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-D-dRQkAs.js";
const groups = [{
  title: "Hard Skills",
  eyebrow: "Competências técnicas",
  items: ["UX Research", "UI /UX Design", "Wireframing", "Prototipagem", "Design System", "Usabilidade", "Arquitetura da Informação", "User Flow", "Jornada do Usuário", "Design Thinking", "Discovery", "Análise de Usabilidade", "Handoff", "Controle de Qualidade"]
}, {
  title: "Ferramentas",
  eyebrow: "Stack do dia a dia",
  items: ["Figma", "Adobe XD", "FigJam", "Miro", "Jira", "Hotjar", "Slack", "YouTrack", "Pacote Adobe", "Photoshop", "Illustrator", "Adobe Acrobat", "InDesign", "Pacote Office", "ChatGPT", "Lovable", "Stitch", "Claude Design", "Gemini"]
}, {
  title: "Soft Skills",
  eyebrow: "Comportamentais",
  items: ["Comunicação", "Colaboração", "Pensamento Analítico", "Resolução de Problemas", "Empatia", "Facilitação", "Organização", "Pensamento Crítico", "Adaptabilidade", "Atenção a Detalhes", "Liderança", "Proatividade"]
}];
function SkillsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "-mt-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Stack de design e habilidades" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid gap-6 md:mt-8 md:grid-cols-3", children: groups.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "animate-fade-up group rounded-3xl border border-border bg-card p-5 transition-all hover:border-foreground/20 md:p-6", style: {
      animationDelay: `${i * 0.08}s`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground", children: g.eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-2xl font-semibold tracking-tight", children: g.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: g.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "rounded-full border border-border bg-secondary px-3 py-1 text-[12px] font-medium", children: item }, item)) })
    ] }, g.title)) })
  ] }) });
}
export {
  SkillsPage as component
};
