import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/cases")({
  head: () => ({
    meta: [
      { title: "Cases — Alex Ribeiro | UX/UI Designer" },
      {
        name: "description",
        content:
          "Estudos de caso selecionados de UX/UI Design: contexto, problema, processo, solução e resultado.",
      },
    ],
  }),
  component: CasesPage,
});

const cases = [
  {
    slug: "/cases/softfocus" as const,
    company: "Softfocus",
    title: "Reformulando o fluxo de onboarding em uma plataforma B2B",
    summary:
      "Discovery, redesign de fluxo e design system aplicados para reduzir fricção e acelerar a ativação de novos usuários.",
    tags: ["B2B SaaS", "Discovery", "Design System"],
    cover:
      "linear-gradient(135deg, oklch(0.92 0.02 75) 0%, oklch(0.86 0.03 60) 100%)",
  },
  {
    slug: "/cases/gamegather" as const,
    company: "Gamegather",
    title: "Engajando uma comunidade através de uma experiência mobile fluida",
    summary:
      "Pesquisa, arquitetura de informação e UI design para uma plataforma social com forte componente de identidade.",
    tags: ["Consumer", "Mobile", "Comunidade"],
    cover:
      "linear-gradient(135deg, oklch(0.86 0.04 250) 0%, oklch(0.78 0.05 280) 100%)",
  },
];

function CasesPage() {
  return (
    <PageContainer>
      <SectionHeader
        eyebrow="Cases selecionados"
        title="Estudos de caso de produto"
        description="Cada case está estruturado em contexto, problema, processo, solução e resultado — para leitura rápida ou aprofundada."
      />

      <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2">
        {cases.map((c, i) => (
          <Link
            key={c.slug}
            to={c.slug}
            className="animate-fade-up group block overflow-hidden rounded-3xl border border-border bg-card hover-lift"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div
              className="relative aspect-[4/3] w-full overflow-hidden"
              style={{ background: c.cover }}
            >
              <div className="absolute inset-0 grain opacity-60" />
              <div className="absolute left-6 top-6 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/70">
                {c.company}
              </div>
              <div className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-background/90 backdrop-blur transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
            <div className="p-7">
              <h3 className="text-pretty text-xl font-semibold tracking-tight md:text-2xl">
                {c.title}
              </h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                {c.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </PageContainer>
  );
}
