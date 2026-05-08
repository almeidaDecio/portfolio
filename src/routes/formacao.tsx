import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/formacao")({
  head: () => ({
    meta: [
      { title: "Formação — Décio D'Almeida | UX/UI Designer" },
      {
        name: "description",
        content:
          "Formação acadêmica, cursos e certificações em UX/UI Design, Product Design e pesquisa.",
      },
    ],
  }),
  component: FormacaoPage,
});

const items = [
  {
    type: "Graduação",
    icon: GraduationCap,
    title: "Bacharelado em Design",
    institution: "Universidade Anhembi Morumbi",
    period: "2016 — 2020",
    description:
      "Formação em design com ênfase em interfaces digitais, tipografia, identidade visual e teoria do design.",
  },
  {
    type: "Curso",
    icon: BookOpen,
    title: "UX Design — Aela.io",
    institution: "Aela",
    period: "2021",
    description:
      "Pesquisa, arquitetura de informação, prototipação e testes de usabilidade aplicados a produtos digitais.",
  },
  {
    type: "Curso",
    icon: BookOpen,
    title: "Product Design — Tera",
    institution: "Tera",
    period: "2022",
    description:
      "Discovery, métricas de produto, design system e colaboração com PMs e engenheiros em times ágeis.",
  },
  {
    type: "Certificação",
    icon: Award,
    title: "Google UX Design Professional Certificate",
    institution: "Google / Coursera",
    period: "2023",
    description:
      "Programa completo cobrindo o ciclo de UX, do entendimento do usuário à entrega de protótipos validados.",
  },
];

function FormacaoPage() {
  return (
    <PageContainer>
      <SectionHeader
        eyebrow="Formação"
        title="Formação acadêmica e contínua"
        description="Graduação, cursos e certificações que sustentam minha prática de UX/UI Design e Product Design."
      />

      <div className="relative mt-14 md:mt-20">
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-[23px]" />
        <ul className="space-y-6">
          {items.map((it, i) => (
            <li
              key={it.title}
              className="animate-fade-up relative pl-14 md:pl-16"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <span className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card md:h-12 md:w-12">
                <it.icon className="h-4 w-4 md:h-5 md:w-5" />
              </span>
              <article className="rounded-2xl border border-border bg-card p-6 hover-lift md:p-8">
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  <span>{it.type}</span>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                  <span>{it.period}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
                  {it.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {it.institution}
                </p>
                <p className="mt-4 text-pretty text-base leading-relaxed text-foreground/90">
                  {it.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </PageContainer>
  );
}
