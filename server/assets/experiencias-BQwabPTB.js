import { U as jsxRuntimeExports } from "./server-CYDZ-g7l.js";
import { c as createLucideIcon, L as Link } from "./router-D-dRQkAs.js";
import { P as PageContainer } from "./PageContainer-CpDVB6jB.js";
import { S as SectionHeader } from "./SectionHeader-DP2-1M2d.js";
import { B as Badge } from "./badge-CnirNAIX.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode);
const experiences = [{
  company: "Softfocus",
  role: "Product Designer Pleno",
  period: "Jul / 2021 — Fev / 2026",
  location: "Remoto",
  summary: "Atuação em projetos de produtos digitais B2B SaaS, conduzindo discovery, pesquisa com usuários, prototipação e entrega de interfaces. Colaboração próxima com Product Managers, desenvolvedores e QA para evolução contínua de produto.",
  skills: ["UX Research", "Discovery", "Design System", "Prototyping", "Interface Design", "Stakeholders", "Product Design", "B2B SaaS"],
  tags: [],
  caseUrl: "/case_softfocus_novo"
}, {
  company: "Gamegather",
  role: "Product Designer - Freelancer",
  period: "Ago / 2025 — Jan / 2026",
  location: "Remoto",
  summary: "Criação de experiências digitais para uma plataforma com forte componente de comunidade. Design de interfaces, organização de fluxos, análise de usabilidade e evolução de produtos digitais com foco no engajamento.",
  skills: ["UI Design", "User Flow", "Usabilidade", "Wireframing", "Jornada do Usuário", "Comunidade", "Mobile First"],
  tags: [],
  caseUrl: "/case_gamegather"
}, {
  company: "Paper Express",
  role: "Supervisor de Produção",
  period: "Mar / 2002 — Fev / 2009",
  location: "Presencial",
  summary: "Planejamento e controle de produção, coordenação de cronogramas e equipes para cumprimento de prazos. Preparação de arquivos para impressão offset e digital. Liderança colaborativa de equipes em ambientes de alta demanda.",
  skills: ["Gestão de Produção", "Impressão Offset", "Pré-impressão", "Gestão de Equipes", "PCP", "Controle de Prazos", "Liderança", "Otimização de Processos"],
  tags: []
}, {
  company: "Revista Istoé Dinheiro",
  role: "Diagramador / Ilustrador",
  period: "Set / 2000 — Fev / 2002",
  location: "Presencial",
  summary: "Diagramação e ilustração de matérias para publicação semanal de circulação nacional, com alto nível de exigência editorial e prazos rígidos. Desenvolvimento de layouts para conteúdos financeiros e econômicos com clareza visual e identidade da marca. Colaboração direta com editores e redatores em ambiente de produção jornalística acelerada.",
  skills: ["Diagramação Editorial", "Ilustração", "Design Gráfico", "Identidade Visual", "Produção Jornalística", "Pré-impressão", "Colaboração com Redação", "Cumprimento de Prazos"],
  tags: []
}, {
  company: "Revista Caras",
  role: "Diagramador",
  period: "Fev / 2000 — Set / 2000",
  location: "Presencial",
  summary: "Diagramação de matérias e editoriais para publicação semanal de entretenimento e lifestyle de grande circulação nacional. Responsável pela digitalização e tratamento de imagens, garantindo qualidade visual e fidelidade na impressão. Atuação em ritmo acelerado de produção, com atenção a prazos editoriais e padrão visual da revista.",
  skills: ["Diagramação Editorial", "Escaneamento de Imagens", "Tratamento de Imagens", "Design Gráfico", "Pré-impressão", "Produção Editorial", "Controle de Qualidade", "Cumprimento de Prazos"],
  tags: []
}];
function ExperienciasPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "-mt-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Experiência profissional" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-6 md:mt-8", children: experiences.map((exp, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "animate-fade-up group rounded-3xl border border-border bg-card p-5 transition-all hover:border-foreground/20 md:p-6", style: {
      animationDelay: `${i * 0.08}s`
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold tracking-tight", children: exp.company }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: exp.role })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: exp.period })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: exp.location })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-pretty text-base leading-relaxed text-muted-foreground md:text-lg", children: exp.summary }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground", children: "Principais skills" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: exp.skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "rounded-full border border-border bg-secondary px-3 py-1 text-[12px] font-medium", children: s }, s)) })
        ] }),
        exp.caseUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: exp.caseUrl, className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted", children: "Ver Case" }) })
      ] })
    ] }) }, exp.company)) })
  ] }) });
}
export {
  ExperienciasPage as component
};
