import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Décio D'Almeida | Product Designer" },
      {
        name: "description",
        content:
          "Entre em contato com Décio D'Almeida: e-mail e LinkedIn.",
      },
    ],
  }),
  component: ContatoPage,
});

const channels = [
  {
    icon: Mail,
    label: "E-mail",
    value: "decio.almeida.1969@gmail.com",
    href: "mailto:decio.almeida.1969@gmail.com",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/décio-d-almeida",
    href: "https://www.linkedin.com/in/d%C3%A9cio-d-almeida-74186621/",
  },
];

function ContatoPage() {
  return (
    <PageContainer>
      <section className="max-w-2xl -mt-6">
        <SectionHeader
          title={
            <>
              Vamos conversar?
            </>
          }
          description={
            <>
              Aberto a oportunidades full-time, contratos e colaborações
              <br />
              Baseado na cidade de Porecatu, PR
            </>
          }
        />

        <div className="mt-10 space-y-3">
          {channels.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="animate-fade-up group flex w-full items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-foreground/30"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background">
                <c.icon className="h-4 w-4" />
              </span>

              <div className="flex-1">
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {c.label}
                </div>

                <div className="mt-0.5 text-sm font-medium">
                  {c.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}