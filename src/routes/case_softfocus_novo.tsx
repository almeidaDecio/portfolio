import { createFileRoute } from "@tanstack/react-router";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";

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
        <img
          src="/softfocus_abre.png"
          alt="Softfocus Zoom Rural"
          className="w-full object-cover rounded-2xl"
        />
      </div>

      {/* PRODUTO */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold tracking-tight">Produto</h2>
        <p className="mt-4 max-w-4xl text-pretty text-lg leading-relaxed text-muted-foreground">
          O Zoom é uma plataforma voltada ao monitoramento e fiscalização de
          operações de crédito rural para instituições financeiras. O objetivo do produto
          é reduzir riscos operacionais, aumentar a transparência
          dos processos e simplificar análises complexas. A solução centraliza dados, automatiza
          validações e utiliza imagens de satélite para
          acompanhar operações rurais em larga escala com mais eficiência.
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
          Instituições financeiras enfrentam processos fragmentados, excesso
          de validações manuais e dificuldade no acompanhamento pós-contratação
          das operações de crédito rural. Além do alto volume documental,
          riscos relacionados a compliance, fiscalização do Banco Central, comprovação
          fiscal e monitoramento das lavouras, tornando a operação lenta,
          suscetível a falhas e com baixa escalabilidade.
        </p>
      </section>

      {/* MINHA ATUAÇÃO */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight">
          Minha atuação
        </h2>
        <p className="mt-4 max-w-4xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Atuei por 3 anos como UX Designer na Softfocus, contribuindo para a evolução do Zoom Rural. 
          Ao longo desse período, participei nas seguintes atividades:
        </p>
        <ul className="mt-4 space-y-2 text-lg text-muted-foreground">
          {[
            "Padronização visual e de componentes (Design System)",
            "Entrevistas com os clientes para mapear melhorias ou testar novas funcionalidades",
            "Alinhamento e definição das regras de negócio junto ao PM",
            "Desenho e refinamento de fluxos de navegação",
            "Prototipação de novas funcionalidades e evolução das funcionalidades existentes",
            "Descrição técnica das tarefas para os desenvolvedores em aplicativos como Jira e Youtrack",
            "Handoff para desenvolvimento",
            "Validação das telas após o desenvolvimento (layout, padrão de componentes e regras de negócio)",
            "Acompanhamento de melhorias contínuas do produto",
            "Atualização constante de manuais para os clientes internos e externos",
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

        {/* Problemas simples */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Problemas simples</h3>
          <ul className="mt-3 space-y-2 text-base text-muted-foreground">
            {[
              "Novas telas com funções simples e/ou ajustes simples em telas de configuração",
              "Novos campos em formulários e detalhes de produtos, contratos, etc",
              "Implementação de novos campos em componentes já existentes (filtros, dropdown, listagem, etc)",
              "Melhorias simples solicitadas pelos clientes através de entrevistas e/ou canais de comunicação (novo campo em dropdown, ajuste no limite de campo digitável, etc)",
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
            <img src="/simples.png" alt="Problemas simples" className="w-full object-cover rounded-2xl" />
          </div>
        </div>

        {/* Problemas de média complexidade */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold">Problemas de média complexidade</h3>
          <ul className="mt-3 space-y-2 text-base text-muted-foreground">
            {[
              "Novas telas / ajustes que envolvem conexões com outras partes da solução",
              "Adequação a uma nova norma da legislação que irá impactar o uso do produto",
              "Melhorias no produto presentes no planejamento do produto",
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
            <img src="/media.png" alt="Problemas de média complexidade" className="w-full object-cover rounded-2xl" />
          </div>
        </div>

        {/* Problemas de alta complexidade */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold">Problemas de alta complexidade</h3>
          <ul className="mt-3 space-y-2 text-base text-muted-foreground">
            {[
              "Novas funcionalidades que envolvem muitas conexões com outras partes da solução",
              "Upgrades no produto presentes no planejamento do produto",
              "Melhorias solicitadas pelos clientes em pesquisas / entrevistas",
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
            <img src="/alta.png" alt="Problemas de alta complexidade" className="w-full object-cover rounded-2xl" />
          </div>
        </div>
      </section>

   {/* RESULTADOS */}
      <section className="mt-14 mb-16">
        <h2 className="text-2xl font-semibold tracking-tight">Resultados</h2>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-5 md:px-6">
            <span className="text-5xl font-bold leading-none tracking-tight text-foreground md:text-6xl">2</span>
            <div>
               <p className="text-lg font-medium text-muted-foreground">novas instituições financeiras</p>
              <p className="text-sm text-muted-foreground">como clientes: Santander e Banco do Brasil</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-5 md:px-6">
            <span className="text-5xl font-bold leading-none tracking-tight text-foreground md:text-6xl">30%</span>
            <div>
               <p className="text-lg font-medium text-muted-foreground">ampliação do uso do produto</p>
              <p className="text-sm text-muted-foreground">pelos clientes que já usavam o sistema</p>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
