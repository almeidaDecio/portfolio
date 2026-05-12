import { createFileRoute } from "@tanstack/react-router";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/case_gamegather")({
  head: () => ({
    meta: [
      { title: "Décio D'Almeida — Softfocus Zoom Rural" },
      {
        name: "description",
        content:
          "Case de produto: Portal Gamegather — plataforma para conectar jogadores com base em comportamento e valores, promovendo encontros e atividades na comunidade gamer.",
      },
    ],
  }),
  component: CaseSoftfocusNovoPage,
});

function CaseSoftfocusNovoPage() {
  return (
    <PageContainer>
      {/* HERO */}
      <section className="-mt-6">
        <SectionHeader title="Portal Gamegather" />
      </section>

      {/* IMAGEM ABRE — logo abaixo do título */}
      <div className="mt-4">
        <img
          src="/gamegather_abre.png"
          alt="Game Gather"
          className="w-full object-cover rounded-2xl"
        />
      </div>

      {/* PRODUTO */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold tracking-tight">Produto</h2>
        <p className="mt-4 max-w-4xl text-pretty text-lg leading-relaxed text-muted-foreground">
          O Game Gather é uma plataforma digital focada em conectar usuários ao universo gamer por 
          comportamento, estilo de jogo e valores — para que a experiência multiplayer seja livre 
          de comportamentos tóxicos. O produto centraliza informações sobre encontros, atividades 
          e experiências relacionadas a jogos, oferecendo uma navegação simples e objetiva para 
          que usuários encontrem rapidamente conteúdos relevantes.
        </p>

      </section>

      {/* DESAFIO */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight">Desafio</h2>
        <p className="mt-4 max-w-4xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Experiências tóxicas, incompatibilidade entre perfis e dificuldade para encontrar pessoas com interesses semelhantes 
          são problemas comuns em jogos multiplayer e acabam prejudicando a experiência de jogo cooperativo. O Game 
          Gather foi criado para resolver esse cenário por meio de uma plataforma que conecta jogadores com base em comportamento,
           estilo de jogo e valores em comum, além de organizar encontros, atividades e experiências 
           em uma navegação simples, acessível e objetiva.
        </p>
      </section>

      {/* MINHA ATUAÇÃO */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight">
          Minha atuação
        </h2>
        <p className="mt-4 max-w-4xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Atuei por 6 meses como UX Designer no portal, contribuindo para a criação do site da Game gather. 
          Ao longo desse período, participei atuando nas seguintes atividades:
        </p>
        <ul className="mt-4 space-y-2 text-lg text-muted-foreground">
          {[
            "Participação na criação visual e de componentes",
            "Participação em entrevistas para mapear a interação entre os jogadores",
            "Desenho de fluxos de navegação",
            "Prototipação de funcionalidades",
            "Handoff para desenvolvimento",
            "Validação das telas após o desenvolvimento (layout, padrão de componentes e regras de negócio)",
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
        <h2 className="text-2xl font-semibold tracking-tight">Processos e fluxo de trabalho</h2>



        {/* Problemas de alta complexidade */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Estrutura desenvolvida para a criação do site</h3>
          <ul className="mt-3 space-y-2 text-base text-muted-foreground">
            {[
              "Visual do site e componentes criados do zero",
              "Validação de regras de negócio para a construção do site",
              "Melhorias solicitadas pelos jogadores em pesquisas / entrevistas",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            {[
              { label: "Research", steps: ["Conversa com os Stakeholders", "Entrevista com jogadores", "Benchmark", "Desenho do fluxo do site"] },
              { label: "Prototipagem", steps: ["Criação do protótipo", "Validação com os Stakeholders", "Validação com jogadores", "Ajustes", "Alinhamento com Stakeholders", "Nova validação jogadores"] },
              { label: "Desenvolvimento", steps: ["Escrita da tarefa", "Desenvolvimento", "Validação em homologação"] },
            ].map((lane) => (
              <div key={lane.label}>
                <p className="mb-1 text-xs font-medium text-muted-foreground">{lane.label}</p>
                <div className="flex flex-wrap items-center gap-2 rounded-xl border border-border p-3">
                  {lane.steps.map((step, i) => (
                    <span key={step} className="flex items-center gap-2">
                      <span className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-foreground">
                        {step}
                      </span>
                      {i < lane.steps.length - 1 && (
                        <span className="text-base font-semibold text-foreground/60">→</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <img src="/gamegather 2.png" alt="Game Gather" className="w-full object-cover rounded-2xl" />
          </div>
          <div className="mt-6">
            <img src="/gamegather 3.png" alt="Game Gather" className="w-full object-cover rounded-2xl" />
          </div>
        </div>
      </section>

    </PageContainer>
  );
}
