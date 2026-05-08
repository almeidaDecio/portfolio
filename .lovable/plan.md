# Ajustes na página Perfil (`src/routes/index.tsx`)

## 1. Atualizar parágrafo do hero
Substituir o texto atual (`Sou Décio D'Almeida, designer focado em produto. Trabalho na interseção...`) por:

> Sou Décio D'Almeida, designer focado em produto. Comecei no gráfico, onde erro não tem Ctrl+Z depois da impressão. Esse jeito de trabalhar — com cuidado, atenção e senso de responsabilidade — foi o que me trouxe para o UX e ainda guia tudo que eu faço.

## 2. Remover elementos do hero
- Remover o chip superior "Product Design" (com o ícone Sparkles).
- Remover toda a `<aside>` da direita com os 4 stats (6+, 20+, 12, 98%) e a constante `stats`.
- Com a aside removida, o hero deixa de precisar do grid de 12 colunas — ajustar o `<section>` para um container simples (sem `md:col-span-8`), mantendo o conteúdo fluido em largura total dentro do `PageContainer`.
- Remover o import `Sparkles` se ficar sem uso.

## 3. Texto do H1
- Trocar o H1 para forçar quebra em 4 linhas e remover o ponto final:
  > Transformando<br/>problemas complexos em<br/>experiências digitais<br/>intuitivas
- Implementação: usar `<br />` explícitos entre as palavras-chave para garantir as 4 linhas no desktop. Manter `text-balance` removido (ou substituído por `text-pretty`) para que as quebras manuais não sejam reequilibradas pelo browser.

## 4. Botão CTA
- Trocar o label do primeiro botão de `Ver cases selecionados` para `Ver cases`.

## Notas técnicas
- Apenas edições no arquivo `src/routes/index.tsx`.
- Sem mudanças em rotas, estilos globais ou outros componentes.
