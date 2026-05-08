## Atualização de identidade

Trocar todas as referências de "Alex Ribeiro" para "Décio D'Almeida" e atualizar o link do LinkedIn em todo o portfolio.

### Alterações

1. **Nome "Alex Ribeiro" → "Décio D'Almeida"**
   - `src/components/AppSidebar.tsx` (nome na sidebar + inicial "A" → "D")
   - `src/routes/__root.tsx` (title, meta description, og:title, author, footer)
   - `src/routes/index.tsx` (hero, headline, textos)
   - `src/routes/contato.tsx` (title, description)
   - `src/routes/experiencias.tsx`, `formacao.tsx`, `skills.tsx`, `cases.tsx`, `cases.softfocus.tsx`, `cases.gamegather.tsx` (qualquer menção)

2. **E-mail**
   - Atualmente `alex.ribeiro@email.com` aparece em `contato.tsx`. Vou trocar para um placeholder `decio.dalmeida@email.com` (me avise se quiser outro e-mail).

3. **LinkedIn**
   - Trocar `https://linkedin.com` por `https://www.linkedin.com/in/d%C3%A9cio-d-almeida-74186621/`
   - Atualizar o label visível para `linkedin.com/in/décio-d-almeida` em `contato.tsx`.

4. **Behance**
   - Manter o card, mas atualizar o slug para `behance.net/deciodalmeida` (placeholder — me diga se tiver perfil real).

### Pontos abertos

- Confirma o e-mail a usar? Se não responder, sigo com `decio.dalmeida@email.com` como placeholder.
- O perfil do Behance deve ser removido ou tem um link real?
