# Design System — Referência para Figma

## 1. Cores — Light Mode

### Surfaces
| Token | Hex | Uso |
|---|---|---|
| Background | `#fcfcfa` | Fundo da página |
| Foreground | `#2d2e30` | Texto principal |
| Surface | `#f6f5f3` | Superfície secundária |
| Surface Foreground | `#212224` | Texto sobre surface |
| Card | `#ffffff` | Cards, containers |
| Card Foreground | `#151618` | Texto dentro de cards |

### Semânticas
| Token | Hex | Uso |
|---|---|---|
| Primary | `#2c2e32` | Botão primário, links |
| Primary Foreground | `#f9f8f7` | Texto em botão primário |
| Secondary | `#f1f2f4` | Badge secondary, bg secundário |
| Secondary Foreground | `#191a1e` | Texto sobre secondary |
| Muted | `#f1f2f4` | Fundo muted |
| Muted Foreground | `#60636a` | Texto descritivo, labels |
| Accent | `#f0e6da` | Tom quente (hover, destaque sutil) |
| Accent Foreground | `#3d2919` | Texto sobre accent |
| Border | `#e0e1e5` | Bordas de containers |
| Input | `#e0e1e5` | Borda de inputs |
| Ring | `#7b7f89` | Focus ring |
| Destructive | `#bf3030` | Erro, deletar |
| Destructive Foreground | `#fafafa` | Texto no destructive |

## 2. Cores — Dark Mode

| Token | Hex | Uso |
|---|---|---|
| Background | `#0c0d0f` | Fundo da página |
| Foreground | `#f2f2ef` | Texto principal |
| Card | `#151618` | Cards |
| Card Foreground | `#f2f2ef` | Texto em cards |
| Primary | `#efeeec` | Botão primário |
| Primary Foreground | `#151618` | Texto no primary |
| Secondary | `#222428` | Fundo secondary |
| Secondary Foreground | `#f2f2ef` | Texto no secondary |
| Muted | `#222428` | Fundo muted |
| Muted Foreground | `#9b9ea6` | Texto descritivo |
| Accent | `#342d23` | Tom quente escuro |
| Accent Foreground | `#f7ede0` | Texto sobre accent |
| Border | `rgba(255,255,255,0.10)` | Bordas |

## 3. Tipografia

### Fontes
- **Família:** Inter (sans-serif)
- **Weights usados:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Escala
| Nome | Tamanho | Tracking | Peso | Uso |
|---|---|---|---|---|
| h1 (hero) | 60px / 48px* | `-0.02em` | 600 | Título principal da home |
| h2 (section) | 36px / 30px* | `-0.02em` | 600 | Títulos de seção |
| h3 (sub) | 18px | 600 | Subtítulos |
| Body large | 20px / 18px* | — | 400 | Parágrafos descritivos |
| Body base | 16px | — | 400 | Texto corrente |
| Body small | 14px | — | 400 | Texto auxiliar |
| Caption | 12px | — | 400 | Labels pequenos |
| Eyebrow | 11px | `0.18em` uppercase | 500 | Rótulos de seção |

*valores mobile / desktop

### Line Height
- h1: `1.05`
- Parágrafos: `1.625` (leading-relaxed)
- Padrão: `1.5`

### Text Wrap
- Títulos: `text-balance`
- Parágrafos: `text-pretty`
- `text-wrap: pretty` / `balance` via CSS

## 4. Border Radius

| Token | Valor | Uso |
|---|---|---|
| sm | 8px | Buttons, inputs |
| md | 10px | Cards menores |
| lg | 12px | Cards padrão |
| xl | 16px | Cards grandes |
| 2xl | 20px | Containers, imagens |
| 3xl | 24px | Destaques |
| full | 9999px | Badges, pills, avatares |

## 5. Sombras

| Token | Valor |
|---|---|
| soft | `0 1px 2px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)` |
| elevated | `0 8px 30px rgba(0,0,0,0.08)` |

## 6. Espaçamentos (padding/margin)

Escala usada no layout (em rem):
- `2` → 8px
- `3` → 12px
- `4` → 16px
- `5` → 20px
- `6` → 24px
- `8` → 32px
- `10` → 40px
- `14` → 56px (entre seções)
- `16` → 64px
- `17` → 68px (padding lateral do container)
- `20` → 80px

### Container
- Max width: `72rem` (1152px)
- Padding lateral: `24px` (mobile) / `68px` (desktop)
- Padding vertical: `40px` (mobile) / `64px` (desktop)

## 7. Botões

### Primary (filled)
- Bg: Primary (`#2c2e32`)
- Text: Primary Foreground (`#f9f8f7`)
- Padding: `16px 24px` (py-3 px-6)
- Radius: `full` (9999px)
- Hover: opacity 90%

### Secondary (outline)
- Bg: Card (`#ffffff`)
- Border: Border (`#e0e1e5`)
- Text: Foreground (`#2d2e30`)
- Radius: `full` (9999px)
- Hover: bg Accent

### Link (tertiary)
- Text: Muted Foreground (`#60636a`)
- Hover: Foreground (`#2d2e30`)
- Ícone opcional à esquerda

## 8. Badges / Tags

- Bg: Secondary (`#f1f2f4`)
- Text: Secondary Foreground (`#191a1e`)
- Radius: `full` (9999px)
- Padding: `12px 16px` (px-3 py-1)
- Font: 12px, medium

## 9. Ícones

- Biblioteca: Lucide React
- Tamanho padrão: 16px (h-4 w-4)
- Ícones maiores: 18px (sidebar), 14px (calendário/localização)

## 10. Animações

| Nome | Duração | Easing | Descrição |
|---|---|---|---|
| fade-in | 0.6s | ease-out | Opacidade 0 → 1 |
| fade-up | 0.7s | cubic-bezier(0.2, 0.7, 0.2, 1) | Sobe 12px + fade |
| rise | 0.8s | cubic-bezier(0.2, 0.7, 0.2, 1) | Sobe 24px + fade |

Delays disponíveis: 100ms, 200ms, 300ms, 400ms, 500ms

## 11. Hover Lift (cards)

```css
transition: transform 0.3s cubic-bezier(0.2, 0.7, 0.2, 1),
            box-shadow 0.3s ease;
transform: translateY(-2px);
box-shadow: 0 8px 30px rgba(0,0,0,0.08);
```

## 12. Selection

- Bg: `#191a1e` (dark)
- Text: `#f9f8f7` (light)
