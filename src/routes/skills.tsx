import { createFileRoute } from "@tanstack/react-router";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Décio D'Almeida | Product Designer" },
      {
        name: "description",
        content:
          "Hard skills, ferramentas e soft skills de Décio D'Almeida, Product Designer.",
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
      "UI /UX Design",
      "Wireframing",
      "Prototipagem",
      "Design System",
      "Usabilidade",
      "Arquitetura da Informação",
      "User Flow",
      "Jornada do Usuário",
      "Design Thinking",
      "Discovery",
      "Análise de Usabilidade",
      "Handoff",
      "Controle de Qualidade",
    ],
  },
  {
    title: "Ferramentas",
    eyebrow: "Stack do dia a dia",
    items: [
      "Figma",
      "Adobe XD",
      "FigJam",
      "Miro",
      "Jira",
      "Hotjar",
      "Slack",
      "YouTrack",
      "Pacote Adobe",
      "Photoshop",
      "Illustrator",
      "Adobe Acrobat",
      "InDesign",
      "Pacote Office",
      "ChatGPT",
      "Lovable",
      "Stitch",
      "Claude Design",
      "Gemini",
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
      "Atenção a Detalhes",
      "Liderança",
      "Proatividade",
    ],
  },
];

function SkillsPage() {
  return (
    <PageContainer>
      <section className="-mt-6">
        <SectionHeader title="Stack de design e habilidades" />

        <div className="mt-4 grid gap-6 md:mt-8 md:grid-cols-3">
          {groups.map((g, i) => (
            <section
              key={g.title}
              className="animate-fade-up group rounded-3xl border border-border bg-card p-5 transition-all hover:border-foreground/20 md:p-6"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {g.eyebrow}
              </span>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                {g.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-[12px] font-medium"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}