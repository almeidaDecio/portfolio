import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, MapPin } from "lucide-react";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/experiencias")({
  head: () => ({
    meta: [
      { title: "Experiências — Décio D'Almeida | Product Designer" },
      {
        name: "description",
        content:
          "Experiência profissional como Product Designer em produtos digitais: Softfocus, Gamegather e mais.",
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
  caseUrl?: "/case_softfocus_novo" | "/case_gamegather";
};

const experiences: Experience[] = [
  {
    company: "Softfocus",
    role: "Product Designer Pleno",
    period: "Jul / 2021 — Fev / 2026",
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
      "Product Design",
      "B2B SaaS",
    ],
    tags: [],
    caseUrl: "/case_softfocus_novo",
  },
  {
    company: "Gamegather",
    role: "Product Designer - Freelancer",
    period: "Ago / 2025 — Jan / 2026",
    location: "Remoto",
    summary:
      "Criação de experiências digitais para uma plataforma com forte componente de comunidade. Design de interfaces, organização de fluxos, análise de usabilidade e evolução de produtos digitais com foco no engajamento.",
    skills: [
      "UI Design",
      "User Flow",
      "Usabilidade",
      "Wireframing",
      "Jornada do Usuário",
      "Comunidade",
      "Mobile First",
    ],
    tags: [],
    caseUrl: "/case_gamegather",
  },
  {
    company: "Paper Express",
    role: "Supervisor de Produção",
    period: "Mar / 2002 — Fev / 2009",
    location: "Presencial",
    summary:
      "Planejamento e controle de produção, coordenando cronogramas e equipes para cumprimento de prazos. Preparação de arquivos para impressão offset e digital. Liderança colaborativa de equipes em ambientes de alta demanda.",
    skills: [
      "Gestão de Produção",
      "Impressão Offset",
      "Pré-impressão",
      "Gestão de Equipes",
      "PCP",
      "Controle de Prazos",
      "Liderança",
      "Otimização de Processos",
    ],
    tags: [],
  },
  {
    company: "Revista Istoé Dinheiro",
    role: "Diagramador / Ilustrador",
    period: "Set / 2000 — Fev / 2002",
    location: "Presencial",
    summary:
      "Diagramação e ilustração de matérias para publicação semanal de circulação nacional, com alto nível de exigência editorial e prazos rígidos. Desenvolvimento de layouts para conteúdos financeiros e econômicos com clareza visual e identidade da marca. Colaboração direta com editores e redatores em ambiente de produção jornalística acelerada.",
    skills: [
      "Diagramação Editorial",
      "Ilustração",
      "Design Gráfico",
      "Identidade Visual",
      "Produção Jornalística",
      "Pré-impressão",
      "Colaboração com Redação",
      "Cumprimento de Prazos",
    ],
    tags: [],
  },
  {
    company: "Revista Caras",
    role: "Diagramador",
    period: "Fev / 2000 — Set / 2000",
    location: "Presencial",
    summary:
      "Diagramação de matérias e editoriais para publicação semanal de entretenimento e lifestyle de grande circulação nacional. Responsável pela digitalização e tratamento de imagens, garantindo qualidade visual e fidelidade na impressão. Atuação em ritmo acelerado de produção, com atenção a prazos editoriais e padrão visual da revista.",
    skills: [
      "Diagramação Editorial",
      "Escaneamento de Imagens",
      "Tratamento de Imagens",
      "Design Gráfico",
      "Pré-impressão",
      "Produção Editorial",
      "Controle de Qualidade",
      "Cumprimento de Prazos",
    ],
    tags: [],
  },
];

function ExperienciasPage() {
  return (
    <PageContainer>
      <section className="-mt-6">
        <SectionHeader title="Experiência profissional" />

        <div className="mt-4 space-y-6 md:mt-8">
          {experiences.map((exp, i) => (
            <article
              key={exp.company}
              className="animate-fade-up group rounded-3xl border border-border bg-card p-5 transition-all hover:border-foreground/20 md:p-6"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="grid gap-6 md:grid-cols-12">
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">
                        {exp.company}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        {exp.role}
                      </p>
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
                </div>

                <div className="md:col-span-8">
                  <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
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
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}