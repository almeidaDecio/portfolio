import { createFileRoute, Link } from "@tanstack/react-router";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/cases")({
  head: () => ({
    meta: [
      { title: "Cases — Décio D'Almeida | Product Designer" },
      {
        name: "description",
        content:
          "Estudos de caso selecionados de Product Design: contexto, problema, processo, solução e resultado.",
      },
    ],
  }),
  component: CasesPage,
});

const cases = [
  {
    slug: "/case_softfocus_novo" as const,
    company: "Softfocus",
    subtitle: "Softfocus — Zoom Rural",
    title: "Melhorando a experiência na análise e fiscalização do crédito rural",
    summary:
      "Solução que transforma o monitoramento de crédito rural em um processo mais simples, integrado e orientado a compliance para instituições financeiras.",
    cover: null,
    image: "/dashboard.png",
  },
  {
    slug: "/case_gamegather" as const,
    company: "Gamegather",
    subtitle: "Freelancer — Portal Gamegather",
    title: "Conectando jogadores pelo que realmente importa: comunidade e respeito",
    summary:
      "Plataforma social que une gamers com base em interesses e reputação comunitária — criando conexões mais saudáveis e experiências de jogo sem toxicidade.",
    cover: null,
    image: "/gamegather.png",
  },
];

function CasesPage() {
  return (
    <PageContainer>
      <section className="-mt-6">
        <SectionHeader title="Estudos de caso de produto" />

        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2">
          {cases.map((c, i) => (
            <Link
              key={c.slug}
              to={c.slug}
              className="animate-fade-up group block overflow-hidden rounded-3xl border border-border bg-card hover-lift"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div
                className="relative aspect-[4/2] w-full overflow-hidden"
                style={c.cover ? { background: c.cover } : undefined}
              >
                {c.image ? (
                  <img
                    src={c.image}
                    alt={c.company}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="absolute inset-0 grain opacity-60" />
                )}
              </div>

              <div className="p-7">
                {c.subtitle && (
                  <p className="text-sm font-medium text-muted-foreground">
                    {c.subtitle}
                  </p>
                )}
                <h3 className="mt-3 text-pretty text-lg font-semibold tracking-tight md:text-xl">
                  {c.title}
                </h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                  {c.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}