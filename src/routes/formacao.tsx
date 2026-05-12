import { createFileRoute } from "@tanstack/react-router";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/formacao")({
  head: () => ({
    meta: [
      { title: "Formação — Décio D'Almeida | Product Designer" },
      {
        name: "description",
        content:
          "Formação acadêmica, cursos e certificações em Product Design, Product Design e pesquisa.",
      },
    ],
  }),
  component: FormacaoPage,
});

const items = [
  {
    type: "Graduação",
    title: "Publicidade e Propaganda",
    institution: "UNIP — Universidade Paulista",
    period: "1988 — 1992",
    description:
      "Formação em Publicidade e Propaganda — base que desenvolveu o olhar para comunicação visual, narrativa de marca e criação, habilidades que permeiam toda a minha trajetória em design.",
  },
  {
    type: "Pós-graduação",
    title: "História da Arte",
    institution: "FAAP — Fundação Armando Alvares Penteado",
    period: "2013 — 2015",
    description:
      "Formação em História da Arte pela FAAP — onde aprimorei minha sensibilidade estética, repertório visual e capacidade de leitura crítica da imagem, elementos que influenciam diretamente meu olhar como designer.",
  },
  {
    type: "Curso",
    title: "IxDF — The Interaction Design Foundation",
    institution:
      "Design Thinking: The Ultimate Guide (2023)\nUser Experience: The Beginner's Guide (2023)",
    period: "2023",
    description:
      "Formação em Design Thinking e User Experience pela IxDF — cursos que estruturaram a transição para o UX, consolidando metodologias de pesquisa, ideação e resolução de problemas centrada no usuário.",
  },
];

function FormacaoPage() {
  return (
    <PageContainer>
      <section className="-mt-6">
        <SectionHeader title="Formação acadêmica e contínua" />

        <ul className="mt-4 space-y-6 md:mt-8">
          {items.map((it, i) => (
            <li
              key={it.title}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <article className="rounded-2xl border border-border bg-card p-6 hover-lift md:p-8">
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  <span>{it.type}</span>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                  <span>{it.period}</span>
                </div>

                <h3 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
                  {it.title}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground whitespace-pre-line">
                  {it.institution}
                </p>

                <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                  {it.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </PageContainer>
  );
}
