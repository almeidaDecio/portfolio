import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin, Dribbble, ArrowUpRight } from "lucide-react";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Décio D'Almeida | UX/UI Designer" },
      {
        name: "description",
        content:
          "Entre em contato com Décio D'Almeida: e-mail, LinkedIn e Behance.",
      },
    ],
  }),
  component: ContatoPage,
});

const channels = [
  {
    icon: Mail,
    label: "E-mail",
    value: "decio.dalmeida@email.com",
    href: "mailto:decio.dalmeida@email.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/décio-d-almeida",
    href: "https://www.linkedin.com/in/d%C3%A9cio-d-almeida-74186621/",
  },
  {
    icon: Dribbble,
    label: "Behance",
    value: "behance.net/deciodalmeida",
    href: "https://behance.net",
  },
];

function ContatoPage() {
  return (
    <PageContainer>
      <section className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-7">
          <SectionHeader
            eyebrow="Contato"
            title={
              <>
                Vamos conversar sobre seu{" "}
                <span className="italic text-muted-foreground">
                  próximo produto.
                </span>
              </>
            }
            description="Aberto a oportunidades full-time, contratos e colaborações em projetos de produto digital. Respondo em até 48h."
          />

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:decio.dalmeida@email.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Mail className="h-4 w-4" />
              Enviar e-mail
            </a>
            <a
              href="https://www.linkedin.com/in/d%C3%A9cio-d-almeida-74186621/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-accent"
            >
              Conectar no LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <aside className="md:col-span-5">
          <div className="space-y-3">
            {channels.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="animate-fade-up group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-foreground/30"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background">
                  <c.icon className="h-4 w-4" />
                </span>
                <div className="flex-1">
                  <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-0.5 text-sm font-medium">{c.value}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:rotate-45 group-hover:text-foreground" />
              </a>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Disponível para novos projetos
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/90">
              Baseado em São Paulo, BR · Trabalho remoto, híbrido ou
              presencial.
            </p>
          </div>
        </aside>
      </section>
    </PageContainer>
  );
}
