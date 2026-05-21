import { createFileRoute, Link } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { PageContainer } from "@/components/PageContainer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Décio D'Almeida — Product Designer | Perfil" },
      {
        name: "description",
        content:
          "Product Designer com experiência em produtos digitais, design systems, discovery, prototipação e construção de experiências orientadas a negócio.",
      },
    ],
  }),
  component: PerfilPage,
});

const keywords = [
  "Product Design",
  "UX Design",
  "UI Design",
  "Design System",
  "Discovery",
  "User Research",
  "Prototyping",
  "Interface Design",
  "Usabilidade",
  "Jornada do Usuário",
  "Design Thinking",
  "SaaS",
  "Scrum / Agile",
];

function PerfilPage() {
  return (
    <PageContainer>
      {/* HERO */}
      <section className="-mt-6">
        <h1 className="animate-fade-up text-pretty text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          Transformando operações
          <br />
          complexas em{" "}
          <span className="italic text-muted-foreground">
            experiências
            <br />
            digitais mais claras
            <br />e eficientes
          </span>
        </h1>

        <p className="animate-fade-up delay-200 mt-8 max-w-4xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Sou Décio D'Almeida, Product Designer com foco na criação de
          produtos digitais escaláveis, unindo experiência do usuário,
          estratégia de produto e consistência visual para transformar fluxos
          complexos em soluções mais intuitivas e eficientes.
        </p>

        <p className="animate-fade-up delay-200 mt-4 max-w-4xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Minha trajetória começou no design gráfico há mais de 30 anos —
          um ambiente onde precisão, atenção aos detalhes e responsabilidade
          sempre foram essenciais. Hoje, aplico essa mesma mentalidade no
          desenvolvimento de plataformas digitais, atuando em discovery,
          pesquisas, prototipação, design systems e colaboração contínua com
          stakeholders, times de tecnologia e produto.
        </p>

        <p className="animate-fade-up delay-200 mt-4 max-w-4xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Tenho experiência na evolução de sistemas e produtos orientados a
          negócio, equilibrando usabilidade, clareza operacional e qualidade
          visual em todas as etapas do processo — da estratégia à entrega.
        </p>

        <div className="animate-fade-up delay-300 mt-10 flex flex-wrap items-center gap-3">
          <Link
            to="/cases"
            className="group inline-flex min-w-[200px] items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:gap-3 hover:bg-primary/90"
          >
            Ver cases
          </Link>

          <Link
            to="/contato"
            className="inline-flex min-w-[200px] items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Entrar em contato
          </Link>

          <a
            href="/CV_Decio_PD.pdf"
            download
            className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Download className="h-4 w-4" />
            Baixar currículo
          </a>
        </div>
      </section>
    </PageContainer>
  );
}