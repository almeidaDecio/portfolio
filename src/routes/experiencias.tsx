import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/experiencias")({
  head: () => ({
    meta: [
      { title: "Experiências — Décio D'Almeida | UX/UI Designer" },
      {
        name: "description",
        content:
          "Experiência profissional como UX/UI Designer em produtos digitais: Softfocus, Gamegather e mais.",
      },
    ],
  }),
  component: ExperienciasPage,
});

type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  skills: string[];
  tags: string[];
  caseUrl?: "/cases/softfocus" | "/cases/gamegather";
};

const experiences: Experience[] = [
  {
    company: "Softfocus",
    role: "UX/UI Designer Pleno",
    period: "2023 — Atual",
    location: "Remoto",
    summary:
      "Atuação em projetos de produtos digitais B2B, conduzindo discovery, pesquisa com usuários, prototipação e entrega de interfaces. Colaboração próxima com Product Managers, engenheiros e stakeholders para evolução contínua de produto.",
    skills: [
      "UX Research",
      "Discovery",
      "Design System",
      "Prototyping",
      "Interface Design",
      "Stakeholders",
    ],
    tags: ["Product Design", "B2B SaaS", "Agile / Scrum"],
    caseUrl: "/cases/softfocus",
  },
  {
    company: "Gamegather",
    role: "UX/UI Designer",
    period: "2021 — 2023",
    location: "Híbrido — São Paulo",
    summary:
      "Criação de experiências digitais para uma plataforma com forte componente de comunidade. Design de interfaces, organização de fluxos, análise de usabilidade e evolução de produtos digitais com foco no engajamento.",
    skills: [
      "UI Design",
      "User Flow",
      "Usabilidade",
      "Wireframing",
      "Jornada do Usuário",
    ],
    tags: ["Consumer App", "Comunidade", "Mobile First"],
    caseUrl: "/cases/gamegather",
  },
];

function ExperienciasPage() {
  return (
    <PageContainer>
      <SectionHeader
        eyebrow="Trajetória"
        title="Experiência profissional"
        description="Empresas, contextos e impacto. Cada experiência reúne projetos relevantes, stack de design e principais entregas."
      />

      <div className="mt-14 space-y-6 md:mt-20">
        {experiences.map((exp, i) => (
          <article
            key={exp.company}
            className="animate-fade-up group rounded-3xl border border-border bg-card p-8 transition-all hover:border-foreground/20 md:p-10"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-lg font-semibold">
                    {exp.company[0]}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-muted-foreground">{exp.role}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-8">
                <p className="text-pretty text-base leading-relaxed text-foreground/90 md:text-lg">
                  {exp.summary}
                </p>

                <div className="mt-6">
                  <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Principais skills
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((s) => (
                      <Badge
                        key={s}
                        variant="secondary"
                        className="rounded-full border border-border bg-secondary px-3 py-1 text-[12px] font-medium"
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>

                {exp.caseUrl && (
                  <div className="mt-8">
                    <Link
                      to={exp.caseUrl}
                      className="group/btn inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      Ver Case Completo
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:rotate-45" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageContainer>
  );
}
