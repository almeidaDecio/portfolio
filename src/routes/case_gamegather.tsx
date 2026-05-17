import { createFileRoute } from "@tanstack/react-router";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/case_gamegather")({
  head: () => ({
    meta: [
      {
        title:
          "Décio D'Almeida — Plataforma social para comunidade gamer",
      },
      {
        name: "description",
        content:
          "Case de produto: plataforma digital voltada à conexão entre jogadores, comunidades e experiências multiplayer com foco em navegação mobile-first e usabilidade.",
      },
    ],
  }),
  component: CaseGamegatherPage,
});

function CaseGamegatherPage() {
  return (
    <PageContainer>
      {/* HERO */}
      <section className="-mt-6">
        <SectionHeader title="Plataforma social para comunidade gamer" />
      </section>

      {/* IMAGEM ABRE */}
      <div className="mt-4">
        <img
          src="/gamegather_abre.png"
          alt="Game Gather"
          className="w-full rounded-2xl object-cover"
        />
      </div>

      {/* PRODUTO */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          Produto
        </h2>

        <p className="mt-4 max-w-4xl text-pretty text-lg leading-relaxed text-muted-foreground">
          O Gamegather é uma plataforma digital criada para conectar
          jogadores com base em comportamento, estilo de jogo e
          interesses em comum, promovendo experiências multiplayer mais
          saudáveis e colaborativas. O produto reúne funcionalidades
          voltadas à descoberta de grupos, encontros e atividades da
          comunidade gamer, com foco em navegação simples, interação
          social e experiência mobile-first.
        </p>
      </section>

      {/* DESAFIO */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight">
          Desafio
        </h2>

        <p className="mt-4 max-w-4xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Um dos principais desafios do produto era reduzir a fricção na
          conexão entre jogadores e criar uma experiência mais saudável
          dentro do ambiente multiplayer. Muitos usuários tinham
          dificuldade em encontrar grupos compatíveis com seu perfil,
          além de enfrentarem experiências tóxicas e navegação pouco
          intuitiva em plataformas semelhantes.
        </p>

        <p className="mt-4 max-w-4xl text-pretty text-lg leading-relaxed text-muted-foreground">
          O desafio de design envolvia estruturar uma experiência clara,
          acessível e escalável para descoberta de jogadores, interação
          entre comunidades e organização de atividades, mantendo
          fluidez principalmente em dispositivos móveis.
        </p>
      </section>

      {/* MINHA ATUAÇÃO */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight">
          Minha atuação
        </h2>

        <p className="mt-4 max-w-4xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Atuei na criação e evolução da experiência da plataforma ao
          longo de 6 meses, colaborando diretamente com stakeholders e
          desenvolvimento na estruturação dos fluxos, componentes e
          interface do produto. Minha atuação envolveu discovery,
          pesquisas com jogadores, definição de navegação,
          prototipação e acompanhamento da implementação das soluções.
        </p>

        <ul className="mt-4 space-y-2 text-lg text-muted-foreground">
          {[
            "Estruturação visual da plataforma e definição de componentes reutilizáveis",
            "Entrevistas e validações com jogadores para mapear comportamento, expectativas e pontos de fricção",
            "Desenho e refinamento de fluxos de navegação com foco em clareza e usabilidade",
            "Criação de wireframes e protótipos navegáveis para validação das funcionalidades",
            "Handoff para desenvolvimento com acompanhamento contínuo da implementação",
            "Validação das entregas garantindo consistência visual, comportamento dos componentes e aderência às regras de negócio",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* PROCESSO */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight">
          Processo de design e validação
        </h2>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">
            Estruturação da experiência e evolução da plataforma
          </h3>

          <ul className="mt-3 space-y-2 text-base text-muted-foreground">
            {[
              "Criação da base visual e dos componentes da interface da plataforma",
              "Definição de regras de negócio e estruturação dos fluxos principais",
              "Mapeamento de melhorias a partir de entrevistas e validações com jogadores",
              "Evolução contínua da experiência mobile e da clareza de navegação",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                {item}
              </li>
            ))}
          </ul>

          {/* FLUXO */}
          <div className="mt-6 flex flex-col gap-3">
            {[
              {
                label: "Research",
                steps: [
                  "Alinhamento com stakeholders",
                  "Entrevistas com jogadores",
                  "Benchmark",
                  "Mapeamento dos fluxos",
                ],
              },
              {
                label: "Prototipagem",
                steps: [
                  "Criação do protótipo",
                  "Validação com stakeholders",
                  "Validação com jogadores",
                  "Ajustes",
                  "Nova validação",
                ],
              },
              {
                label: "Desenvolvimento",
                steps: [
                  "Escrita das tarefas",
                  "Desenvolvimento",
                  "Validação em homologação",
                ],
              },
            ].map((lane) => (
              <div key={lane.label}>
                <p className="mb-1 text-xs font-medium text-muted-foreground">
                  {lane.label}
                </p>

                <div className="flex flex-wrap items-center gap-2 rounded-xl border border-border p-3">
                  {lane.steps.map((step, i) => (
                    <span key={step} className="flex items-center gap-2">
                      <span className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-foreground">
                        {step}
                      </span>

                      {i < lane.steps.length - 1 && (
                        <span className="text-base font-semibold text-foreground/60">
                          →
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <img
              src="/gamegather 2.png"
              alt="Game Gather"
              className="w-full rounded-2xl object-cover"
            />
          </div>

          <div className="mt-6">
            <img
              src="/gamegather 3.png"
              alt="Game Gather"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="mt-14 mb-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          Resultados
        </h2>

        <p className="mt-4 max-w-4xl text-pretty text-lg leading-relaxed text-muted-foreground">
          O trabalho contribuiu para estruturar uma experiência mais
          consistente e escalável para a plataforma, organizando fluxos
          críticos, fortalecendo a navegação e criando uma base
          visual reutilizável para evolução contínua do produto.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-lg font-medium">
              Navegação mais clara
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              Redução de fricção em fluxos principais da plataforma.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-lg font-medium">
              Base escalável de interface
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              Padronização visual e reutilização de componentes.
            </p>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}