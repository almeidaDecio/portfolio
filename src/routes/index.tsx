import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Décio D'Almeida — UX/UI Designer | Perfil" },
      {
        name: "description",
        content:
          "UX/UI Designer com experiência em produtos digitais, design system, user research, prototipação e design centrado no usuário.",
      },
    ],
  }),
  component: PerfilPage,
});

const keywords = [
  "UX Design",
  "UI Design",
  "Design System",
  "User Research",
  "Prototyping",
  "Usabilidade",
  "Product Design",
  "Discovery",
  "Interface Design",
  "Design Thinking",
  "Jornada do Usuário",
  "Scrum / Agile",
];

const stats = [
  { value: "6+", label: "Anos de experiência" },
  { value: "20+", label: "Produtos digitais" },
  { value: "12", label: "Design systems" },
  { value: "98%", label: "Satisfação stakeholders" },
];

function PerfilPage() {
  return (
    <PageContainer>
      {/* HERO */}
      <section className="grid gap-12 pt-4 md:grid-cols-12 md:gap-16 md:pt-8">
        <div className="md:col-span-8">
          <span className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <Sparkles className="h-3 w-3" />
            UX/UI Designer · Product Design
          </span>

          <h1 className="animate-fade-up mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Transformando problemas complexos em{" "}
            <span className="italic text-muted-foreground">
              experiências digitais intuitivas.
            </span>
          </h1>

          <p className="animate-fade-up delay-200 mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Sou Décio D'Almeida, designer focado em produto. Trabalho na
            interseção entre pesquisa, estratégia e interface para criar
            soluções digitais com clareza, impacto de negócio e qualidade
            visual de produto.
          </p>

          <div className="animate-fade-up delay-300 mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/cases"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:gap-3 hover:bg-primary/90"
            >
              Ver cases selecionados
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Vamos conversar
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <aside className="md:col-span-4">
          <div className="animate-rise delay-200 grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-card p-5 hover-lift"
              >
                <div className="text-3xl font-semibold tracking-tight">
                  {s.value}
                </div>
                <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <div className="mt-20 h-px w-full bg-border md:mt-28" />

      {/* RESUMO PROFISSIONAL */}
      <section className="mt-20 grid gap-12 md:mt-28 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionHeader
            eyebrow="Resumo profissional"
            title="Design centrado no usuário, com foco em produto e impacto."
          />
        </div>
        <div className="md:col-span-7">
          <div className="space-y-6 text-pretty text-base leading-relaxed text-foreground/90 md:text-lg">
            <p>
              Atuo há mais de 6 anos como{" "}
              <strong className="font-semibold text-foreground">
                UX/UI Designer
              </strong>
              , liderando projetos de produtos digitais em times ágeis. Tenho
              experiência sólida em{" "}
              <strong className="font-semibold text-foreground">
                pesquisa com usuários, discovery, design system, prototipação
              </strong>{" "}
              e entrega de interfaces com alto padrão visual e técnico.
            </p>
            <p>
              Trabalho de forma colaborativa com{" "}
              <strong className="font-semibold text-foreground">
                Product Managers, engenheiros e stakeholders
              </strong>
              , conduzindo jornadas do usuário, fluxos de navegação e análise
              de usabilidade. Aplico Design Thinking e práticas Agile/Scrum
              para entregar soluções que combinam{" "}
              <strong className="font-semibold text-foreground">
                experiência do usuário
              </strong>{" "}
              com objetivos de negócio.
            </p>
            <p>
              Apaixonado por construir produtos com clareza visual,
              consistência e maturidade — do problema ao pixel.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {keywords.map((k) => (
              <Badge
                key={k}
                variant="secondary"
                className="rounded-full border border-border bg-secondary px-3 py-1 text-[12px] font-medium text-secondary-foreground hover:bg-accent"
              >
                {k}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-20 h-px w-full bg-border md:mt-28" />

      {/* CTA SECTION */}
      <section className="mt-20 md:mt-28">
        <div className="rounded-3xl border border-border bg-card p-10 md:p-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-end">
            <div>
              <h3 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Quer entender como penso processo, decisão e produto?
              </h3>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-pretty text-muted-foreground md:text-lg">
                Cada case mostra contexto, problema, processo, solução e
                resultado — com a clareza que recrutadores e gestores de
                produto esperam.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/experiencias"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Ver experiências
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/skills"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-accent"
                >
                  Skills & Ferramentas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
