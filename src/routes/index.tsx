import { createFileRoute, Link } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Décio D'Almeida — Product Designer | Perfil" },
      {
        name: "description",
        content:
          "Product Designer com experiência em produtos digitais, design system, user research, prototipação e design centrado no usuário.",
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

function PerfilPage() {
  return (
    <PageContainer>
      {/* HERO */}
      <section className="-mt-6">
        <h1 className="animate-fade-up text-pretty text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          Transformando problemas
          <br />
          complexos em <span className="italic text-muted-foreground">
            experiências
            <br />
            digitais intuitivas
            <br />
          </span>
        </h1>

        <p className="animate-fade-up delay-200 mt-8 max-w-4xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Sou Décio D'Almeida, designer focado em produto. Comecei no gráfico há
          30 anos, onde erro não tem Ctrl+Z depois da impressão. Esse jeito de
          trabalhar — com cuidado, atenção e senso de responsabilidade — foi o
          que me trouxe para o UX e ainda guia tudo que eu faço.
        </p>

        <p className="animate-fade-up delay-200 mt-4 max-w-4xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Atuo há 5 anos como Product Designer, conduzindo pesquisas,
          validando soluções e colaborando com times de desenvolvimento, QA e
          stakeholders. Tenho experiência em discovery, design system,
          prototipação e entrega de interfaces com alto padrão visual e técnico
          — do problema ao pixel.
        </p>

        <div className="animate-fade-up delay-300 mt-10 flex flex-wrap items-center gap-3">
          <Link
            to="/cases"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm min-w-[200px] justify-center font-medium text-primary-foreground transition-all hover:gap-3 hover:bg-primary/90"
          >
            Cases
          </Link>

          <Link
            to="/contato"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm min-w-[200px] justify-center font-medium text-foreground transition-colors hover:bg-accent"
          >
            Contato
          </Link>

          <a
            href="/cv-decio-dalmeida.pdf"
            download
            className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Download className="h-4 w-4" />
            Baixar Curriculum
          </a>
        </div>
      </section>
    </PageContainer>
  );
}