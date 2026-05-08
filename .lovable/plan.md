# Correções no portfolio

## 1. Reduzir espaçamento vertical no topo da Home

Atualmente há muito respiro entre:
- a barra do topo (`Portfolio · 2026`)
- o chip do hero (`UX/UI Designer · Product Design`)
- a seção `Resumo profissional`

**Ajustes em `src/routes/index.tsx`:**
- Hero `<section>`: trocar `pt-4 ... md:pt-8` por `pt-0 md:pt-2` e reduzir o `gap` vertical.
- Divisor + bloco "Resumo profissional": trocar `mt-20 ... md:mt-28` por algo como `mt-10 md:mt-14`.
- Aplicar a mesma redução no divisor antes do CTA final para manter ritmo consistente.

**Ajuste em `src/routes/__root.tsx`:**
- Reduzir altura do header sticky de `h-14` para `h-12` para encostar mais o conteúdo abaixo.

## 2. Remover textos

- **`src/routes/__root.tsx` (linhas 141–144):** remover o bloco "Aberto a novas oportunidades" (incluindo a bolinha verde).
- **`src/components/AppSidebar.tsx` (SidebarFooter, ~linhas 97–106):** remover "Disponível para projetos" e "São Paulo, BR". O `SidebarFooter` inteiro fica vazio — remover o componente para não deixar borda solta.

## 3. Substituir "UX/UI Designer" / "UX/UI Design" por "Product Design(er)"

Trocar em todos os arquivos onde aparece (títulos `<head>`, descrições meta, labels visíveis, footer, sidebar, cases):

- `src/routes/__root.tsx` — title, og:title, footer
- `src/routes/index.tsx` — title meta, descrição, chip do hero ("Product Design"), parágrafo "Atuo há mais de 6 anos como…"
- `src/routes/contato.tsx` — title meta
- `src/routes/cases.tsx` — title + descrição meta
- `src/routes/cases.softfocus.tsx` — title meta + prop `role`
- `src/routes/cases.gamegather.tsx` — title meta + prop `role`
- `src/routes/experiencias.tsx` — title meta, descrição, `role` dos cards (`UX/UI Designer Pleno` → `Product Designer Pleno`, `UX/UI Designer` → `Product Designer`)
- `src/routes/formacao.tsx` — title meta, descrição
- `src/routes/skills.tsx` — title meta, descrição
- `src/components/AppSidebar.tsx` — subtítulo "UX/UI Designer" → "Product Designer"

Regra de tradução:
- "UX/UI Designer" → "Product Designer"
- "UX/UI Design" → "Product Design"

A keyword `UX Design` e `UI Design` listadas separadamente em `keywords` (`src/routes/index.tsx`) ficam como estão (são skills, não o título do papel) — confirmar se devem permanecer.

## Detalhes técnicos

Operação em sua maioria mecânica: `sed` para a substituição global do item 3, edits pontuais para itens 1 e 2. Sem mudança de lógica, rotas ou dependências.
