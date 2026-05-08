import { createFileRoute } from "@tanstack/react-router";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Alex Ribeiro | UX/UI Designer" },
      {
        name: "description",
        content:
          "Hard skills, ferramentas e soft skills de Alex Ribeiro, UX/UI Designer.",
      },
    ],
  }),
  component: SkillsPage,
});

const groups = [
  {
    title: "Hard Skills",
    eyebrow: "Competências técnicas",
    items: [
      "UX Research",
      "UI Design",
      "Wireframing",
      "Prototyping",
      "Design System",
      "Usabilidade",
      "Arquitetura da Informação",
      "User Flow",
      "Jornada do Usuário",
      "Design Thinking",
      "Discovery",
      "Análise de Usabilidade",
    ],
  },
  {
    title: "Ferramentas",
    eyebrow: "Stack do dia a dia",
    items: [
      "Figma",
      "FigJam",
      "Miro",
      "Notion",
      "Jira",
      "Google Analytics",
      "Maze",
      "Hotjar",
      "Zeplin",
      "Slack",
    ],
  },
  {
    title: "Soft Skills",
    eyebrow: "Comportamentais",
    items: [
      "Comunicação",
      "Colaboração",
      "Pensamento Analítico",
      "Resolução de Problemas",
      "Empatia",
      "Facilitação",
      "Organização",
      "Pensamento Crítico",
      "Adaptabilidade",
    ],
  },
];

function SkillsPage() {
  return (
    <PageContainer>
      <SectionHeader
        eyebrow="Skills"
        title="Stack de design e habilidades"
        description="Habilidades técnicas, ferramentas e competências comportamentais aplicadas em produtos digitais."
      />

      <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-3">
        {groups.map((g, i) => (
          <section
            key={g.title}
            className="animate-fade-up rounded-3xl border border-border bg-card p-7 md:p-8"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {g.eyebrow}
            </span>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">
              {g.title}
            </h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-[13px] font-medium text-foreground/90 transition-colors hover:border-foreground/30"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageContainer>
  );
}
