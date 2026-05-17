import { createFileRoute } from "@tanstack/react-router";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { ExpandableImage } from "@/components/ExpandableImage";

export const Route = createFileRoute("/case_softfocus_novo")({
  head: () => ({
    meta: [
      { title: "Décio D'Almeida — Softfocus Zoom Rural" },
      {
        name: "description",
        content:
          "Case de produto: Softfocus Zoom Rural — plataforma de monitoramento e fiscalização de operações de crédito rural para instituições financeiras.",
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
        <SectionHeader title="Softfocus - Zoom rural" />
      </section>

      {/* IMAGEM ABRE — logo abaixo do título */}
      <div className="mt-4">
        <ExpandableImage
          src="/softfocus_abre.png"
          alt="Softfocus Zoom Rural"
          className="w-full rounded-2xl object-cover"
        />
      </div>

      {/* PRODUTO */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold tracking-tight">Produto</h2>
        <p className="mt-4 max-w-4xl text-pretty text-lg leading-relaxed text-muted-foreground">
          O Zoom Rural é uma plataforma SaaS desenvolvida para apoiar
          instituições financeiras no monitoramento e fiscalização de operações
          de crédito rural. O produto centraliza dados, automatiza validações e
          utiliza imagens de satélite para simplificar análises complexas,
          reduzir riscos operacionais e aumentar a eficiência em processos que
          envolvem compliance, documentação e acompanhamento das operações em
          larga escala.
        </p>

        {/* Números — tags */}
        <div className="mt-6 flex flex-wrap gap-3">
          {[
            { value: "+500", label: "Agências financeiras" },
            { value: "2 bi/ano", label: "transacionados" },
            { value: "100 mil", label: "Produtores Rurais impactados" },
          ].map((item) => (
            <div
              key={item.value}
              className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm"
            >
              <span className="font-semibold text-foreground">{item.value}</span>
              <span className="text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* DESAFIO */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight">Desafio</h2>
        <p className="mt-4 max-w-4xl text-pretty text-lg leading-relaxed text-muted-foreground">
          O principal desafio era transformar processos altamente fragmentados e
          dependentes de validações manuais em uma experiência mais eficiente,
          rastreável e escalável para instituições financeiras. O cenário
          envolvia grande volume documental, exigências regulatórias,
          fiscalização do Banco Central, validações fiscais e monitoramento
          contínuo das lavouras, tornando as operações lentas, suscetíveis a
          falhas e difíceis de escalar.
        </p>
      </section>

      {/* MINHA ATUAÇÃO */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight">
          Minha atuação
        </h2>
        <p className="mt-4 max-w-4xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Atuei por 3 anos na evolução do Zoom Rural como Product Designer,
          colaborando diretamente com Product Managers, engenharia, QA e
          stakeholders na construção de soluções para um ecossistema de
          operações financeiras complexas. Minha atuação envolveu discovery,
          definição de fluxos, pesquisas com clientes, prototipação e evolução
          contínua da experiência do produto.
        </p>
        <ul className="mt-4 space-y-2 text-lg text-muted-foreground">
          {[
            "Estruturação e evolução de Design Systems para garantir consistência visual, escalabilidade e eficiência na construção dos produtos",
            "Condução de entrevistas e validações com clientes para identificar oportunidades, mapear dores e orientar decisões de produto",
            "Colaboração com Product Managers na definição de regras de negócio, priorização e alinhamento estratégico das soluções",
            "Criação e refinamento de fluxos de navegação com foco em usabilidade, clareza e eficiência operacional",
            "Prototipação de novas funcionalidades e evolução contínua da experiência dos produtos digitais",
            "Elaboração de especificações funcionais e documentação técnica para desenvolvimento em ferramentas como Jira e YouTrack",
            "Handoff estruturado para desenvolvimento, garantindo alinhamento entre design, viabilidade técnica e implementação",
            "Validação e acompanhamento das entregas desenvolvidas para assegurar consistência visual, aderência ao Design System e conformidade com regras de negócio",
            "Atuação contínua na melhoria da experiência do produto com foco em evolução incremental e qualidade da entrega",
            "Produção e atualização de documentações e manuais para apoiar clientes internos e externos",
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
        <h2 className="text-2xl font-semibold tracking-tight">Processos e fluxos de trabalho</h2>

        {/* BAIXA */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">
            Demandas de baixa complexidade
          </h3>

          <ul className="mt-3 space-y-2 text-base text-muted-foreground">
            {[
              "Ajustes incrementais em fluxos, formulários e configurações para melhorar eficiência operacional e aderência às regras de negócio",
              "Implementação de novos campos e evoluções em componentes existentes, como filtros, dropdowns e listagens",
              "Melhorias de usabilidade identificadas em entrevistas com clientes e canais contínuos de suporte",
              "Pequenas evoluções funcionais com impacto direto na experiência operacional do usuário",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3">
            {[
              { label: "Research", steps: ["Conversa com PM / Stakeholder"] },
              { label: "Prototipagem", steps: ["Criação do protótipo", "Validação interna"] },
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
            <ExpandableImage
              src="/simples.png"
              alt="Demandas de baixa complexidade"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* MÉDIA */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold">
            Demandas de média complexidade
          </h3>

          <ul className="mt-3 space-y-2 text-base text-muted-foreground">
            {[
              "Evoluções em fluxos e funcionalidades com impacto em diferentes áreas da plataforma",
              "Adequações do produto a mudanças regulatórias e novas exigências da legislação",
              "Melhorias previstas no roadmap do produto para ganho de eficiência operacional",
              "Validação contínua de soluções junto a Product Managers e principais clientes",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3">
            {[
              { label: "Research", steps: ["Conversa com PM"] },
              { label: "Prototipagem", steps: ["Criação do protótipo", "Validação com PM", "Validação principais clientes", "Ajustes (se necessário)", "Alinhamento junto ao PM", "Nova validação clientes"] },
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
            <ExpandableImage
              src="/media.png"
              alt="Demandas de média complexidade"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* ALTA */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold">
            Demandas estratégicas e de alta complexidade
          </h3>

          <ul className="mt-3 space-y-2 text-base text-muted-foreground">
            {[
              "Desenvolvimento de novas funcionalidades com múltiplas conexões e impacto em fluxos críticos da plataforma",
              "Evoluções estratégicas previstas no roadmap do produto",
              "Mapeamento de oportunidades identificadas em entrevistas e pesquisas com clientes",
              "Definição de novos fluxos, validações e jornadas para apoiar operações complexas",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3">
            {[
              { label: "Research", steps: ["Conversa com PM", "Entrevista com clientes", "Benchmark", "Desenho do novo fluxo"] },
              { label: "Prototipagem", steps: ["Criação do protótipo", "Validação com PM", "Validação clientes", "Ajustes", "Alinhamento junto ao PM", "Nova validação clientes"] },
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
            <ExpandableImage
              src="/alta.png"
              alt="Demandas estratégicas e de alta complexidade"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

   {/* RESULTADOS */}
      <section className="mt-14 mb-16">
        <h2 className="text-2xl font-semibold tracking-tight">Resultados</h2>

        <p className="mt-4 max-w-4xl text-pretty text-lg leading-relaxed text-muted-foreground">
          As melhorias implementadas contribuíram para ampliar a adoção do
          produto, fortalecer a operação junto a grandes instituições
          financeiras e evoluir a experiência de uso em fluxos críticos da
          plataforma.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-5 md:px-6">
            <span className="text-5xl font-bold leading-none tracking-tight text-foreground md:text-6xl">
              2
            </span>

            <div>
              <p className="text-lg font-medium text-muted-foreground">
                novas instituições financeiras
              </p>

              <p className="text-sm text-muted-foreground">
                Santander e Banco do Brasil como novos clientes
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-5 md:px-6">
            <span className="text-5xl font-bold leading-none tracking-tight text-foreground md:text-6xl">
              30%
            </span>

            <div>
              <p className="text-lg font-medium text-muted-foreground">
                ampliação na adoção do produto
              </p>

              <p className="text-sm text-muted-foreground">
                crescimento da adoção entre clientes já ativos
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
