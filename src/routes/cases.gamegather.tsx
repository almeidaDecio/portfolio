import { createFileRoute } from "@tanstack/react-router";
import { CaseShell } from "@/components/CaseShell";

export const Route = createFileRoute("/cases/gamegather")({
  head: () => ({
    meta: [
      { title: "Case Gamegather — Alex Ribeiro | UX/UI Designer" },
      {
        name: "description",
        content:
          "Estudo de caso Gamegather: pesquisa, arquitetura de informação e UI design para uma plataforma social com forte componente de comunidade.",
      },
    ],
  }),
  component: GamegatherCase,
});

function GamegatherCase() {
  return (
    <CaseShell
      company="Gamegather"
      project="Engajando uma comunidade através de uma experiência mobile fluida"
      role="UX/UI Designer"
      period="2021 — 2023"
      tags={["Consumer App", "Comunidade", "Mobile First", "User Research"]}
      headline="Pesquisa com usuários, arquitetura de informação e UI design para uma plataforma social com forte componente de identidade."
      cover="linear-gradient(135deg, oklch(0.86 0.04 250) 0%, oklch(0.78 0.05 280) 100%)"
    />
  );
}
