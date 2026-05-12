import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageContainer } from "./PageContainer";

const sections = [
  { id: "contexto", label: "Contexto" },
  { id: "problema", label: "Problema" },
  { id: "processo", label: "Processo" },
  { id: "solucao", label: "Solução" },
  { id: "resultado", label: "Resultado" },
];

export function CaseShell({
  company,
  project,
  role,
  period,
  tags,
  headline,
  cover,
  children,
}: {
  company: string;
  project: string;
  role: string;
  period: string;
  tags: string[];
  headline: string;
  cover: string;
  children?: ReactNode;
}) {
  return (
    <PageContainer>
      <Link
        to="/cases"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Todos os cases
      </Link>

      {/* HEADER */}
      <header className="mt-8 grid gap-10 md:mt-10 md:grid-cols-12">
        <div className="md:col-span-8">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {company} · Estudo de caso
          </span>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            {project}
          </h1>
          <p className="mt-6 max-w-4xl text-pretty text-lg text-muted-foreground md:text-xl">
            {headline}
          </p>
        </div>
        <div className="md:col-span-4">
          <dl className="grid grid-cols-2 gap-y-5 rounded-2xl border border-border bg-card p-6 text-sm">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Cargo
              </dt>
              <dd className="mt-1 font-medium">{role}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Período
              </dt>
              <dd className="mt-1 font-medium">{period}</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Tags
              </dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </header>

      {/* COVER */}
      <div
        className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border md:mt-16"
        style={{ background: cover }}
      >
        <div className="absolute inset-0 grain opacity-50" />
      </div>

      {/* ANCHOR NAV */}
      <nav className="sticky top-14 z-20 mt-12 -mx-6 border-y border-border bg-background/85 px-6 py-3 backdrop-blur md:mt-16">
        <ul className="flex flex-wrap gap-1 text-sm">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="inline-flex items-center rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* SECTIONS placeholder structure */}
      <div className="mt-14 space-y-20 md:space-y-28">
        {sections.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className="scroll-mt-32 grid gap-8 md:grid-cols-12"
          >
            <div className="md:col-span-4">
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                0{i + 1} · Seção
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                {s.label}
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="rounded-2xl border border-dashed border-border bg-card/50 p-8 md:p-10">
                <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                  Conteúdo detalhado deste case em breve. Aqui entram
                  descobertas, decisões de design, artefatos visuais e
                  resultados mensuráveis da etapa{" "}
                  <strong className="text-foreground">{s.label}</strong>.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="aspect-video rounded-xl bg-secondary" />
                  <div className="aspect-video rounded-xl bg-secondary" />
                  <div className="aspect-video rounded-xl bg-secondary" />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {children}

      <div className="mt-24 flex justify-between border-t border-border pt-8 text-sm">
        <Link
          to="/cases"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Todos os cases
        </Link>
        <Link
          to="/contato"
          className="font-medium text-foreground transition-colors hover:text-muted-foreground"
        >
          Vamos conversar →
        </Link>
      </div>
    </PageContainer>
  );
}
