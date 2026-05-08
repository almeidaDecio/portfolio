import { createFileRoute } from "@tanstack/react-router";
import { CaseShell } from "@/components/CaseShell";

export const Route = createFileRoute("/cases/softfocus")({
  head: () => ({
    meta: [
      { title: "Case Softfocus — Alex Ribeiro | UX/UI Designer" },
      {
        name: "description",
        content:
          "Estudo de caso Softfocus: discovery, redesign de fluxo e design system aplicados a uma plataforma B2B.",
      },
    ],
  }),
  component: SoftfocusCase,
});

function SoftfocusCase() {
  return (
    <CaseShell
      company="Softfocus"
      project="Reformulando o fluxo de onboarding em uma plataforma B2B"
      role="UX/UI Designer"
      period="2023 — Atual"
      tags={["B2B SaaS", "Discovery", "Design System", "Prototyping"]}
      headline="Discovery, redesign de fluxo e design system aplicados para reduzir fricção e acelerar a ativação de novos usuários da plataforma."
      cover="linear-gradient(135deg, oklch(0.92 0.02 75) 0%, oklch(0.86 0.03 60) 100%)"
    />
  );
}
