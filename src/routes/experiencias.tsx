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
          "Experiência profissional em Product Design, produtos digitais B2B SaaS, design systems, discovery e evolução de plataformas digitais.",
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
      "Atuação no desenvolvimento e evolução de produtos digitais B2B SaaS voltados a operações complexas. Condução de discovery, pesquisas com usuários, prototipação e definição de fluxos para apoiar tomadas de decisão e otimizar jornadas operacionais. Colaboração contínua com Product Managers, engenharia e QA na construção de soluções escaláveis, alinhadas às necessidades do negócio e da experiência do usuário.",
    skills: [
      "Product Design",
      "UX Research",
      "Discovery",
      "Design System",
      "Prototyping",
      "Interface Design",
      "Stakeholders",
      "B2B SaaS",
    ],
    tags: [],
    caseUrl: "/case_softfocus_novo",
  },
  {
    company: "Gamegather",
    role: "Product Designer — Freelancer",
    period: "Ago / 2025 — Jan / 2026",
    location: "Remoto",
    summary:
      "Criação e evolução da experiência digital de uma plataforma orientada à comunidade e interação entre usuários. Desenvolvimento de fluxos, interfaces e melhorias de usabilidade com foco em engajamento, clareza de navegação e fortalecimento da experiência mobile. Participação ativa na estruturação da experiência do produto e refinamento contínuo das funcionalidades.",
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
      "Gestão de produção gráfica com foco em planejamento operacional, controle de prazos e coordenação de equipes em ambientes de alta demanda. Responsável pela preparação de arquivos para impressão offset e digital, garantindo qualidade, precisão técnica e eficiência nos processos produtivos. Experiência que consolidou uma forte base em organização, atenção aos detalhes e resolução de problemas complexos.",
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
      "Desenvolvimento de layouts editoriais e ilustrações para publicação semanal de circulação nacional, atuando em um ambiente de produção acelerada e alto nível de exigência editorial. Criação de soluções visuais para conteúdos financeiros e econômicos, equilibrando clareza da informação, identidade visual e consistência gráfica. Colaboração próxima com equipes de redação e edição.",
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
      "Atuação na diagramação editorial e tratamento de imagens para publicação semanal de grande circulação nacional. Responsável pela organização visual de conteúdos e preparação de materiais para impressão, garantindo qualidade gráfica, consistência visual e cumprimento de prazos em um ambiente dinâmico de produção editorial.",
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
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                      >
                        Ver case
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