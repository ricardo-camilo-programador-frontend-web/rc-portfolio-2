[![CI](https://github.com/ricardo-camilo-programador-frontend-web/portfolio2.0/actions/workflows/ci.yml/badge.svg)](https://github.com/ricardo-camilo-programador-frontend-web/portfolio2.0/actions)
# 💼 Ricardo Camilo | Portfolio

<div align="center">

**Frontend Engineer Portfolio**

Portfolio otimizado para performance maxima com React, TypeScript e Vite.

[Demo](https://ricardo-camilo-dev-frontend-web.netlify.app/) • [GitHub](https://github.com/ricardo-camilo-programador-frontend-web)

</div>

## 📋 Sobre

Portfolio pessoal com foco em performance, acessibilidade e experiencia do usuario.

## 🚀 Tecnologias

| Tecnologia | Versao | Uso |
|------------|--------|-----|
| React | 19.x | UI Library |
| Vite | 6.x | Build Tool |
| TypeScript | 5.x | Linguagem |
| TailwindCSS | 3.x | Estilizacao |
| Framer Motion | - | Animacoes |

## ⚡ Performance

Otimizado para pontuacao maxima no Lighthouse:

- ✅ **Code Splitting** - Componentes carregados sob demanda
- ✅ **Image Optimization** - WebP/AVIF com lazy loading
- ✅ **Tree Shaking** - Bundles otimizados
- ✅ **Font Optimization** - font-display: swap
- ✅ **Vendor Chunks** - React, Framer Motion, Icons separados

## 🏃 Quick Start

```bash
# Clonar repositorio
git clone https://github.com/ricardo-camilo-programador-frontend-web/portfolio2.0.git

# Instalar dependencias
pnpm install

# Copiar variaveis de ambiente
cp .env.example .env

# Rodar desenvolvimento
pnpm dev
```

## 🔧 Variaveis de Ambiente

Este projeto usa variaveis de ambiente com prefixo `VITE_` (padrao Vite). Copie `.env.example` para `.env` e preencha os valores.

| Variavel | Descricao | Exemplo |
|----------|-----------|---------|
| `VITE_PORTFOLIO_URL` | URL do portfolio | `https://ricardo-camilo-dev-frontend-web.netlify.app/` |
| `VITE_GITHUB_URL` | Perfil GitHub | `https://github.com/ricardo-camilo-programador-frontend-web` |
| `VITE_LINKEDIN_URL` | Perfil LinkedIn | `https://www.linkedin.com/in/ricardo-camilo-...` |
| `VITE_X_URL` | Perfil X (Twitter) | `https://x.com/Ricardo50993066` |
| `VITE_INSTAGRAM_URL` | Perfil Instagram | `https://www.instagram.com/ricardo.camilo.dev/` |
| `VITE_YOUTUBE_URL` | Canal YouTube | `https://www.youtube.com/@ricardocamilodev` |
| `VITE_99FREELAS_URL` | Perfil 99Freelas | `https://www.99freelas.com.br/user/...` |
| `VITE_WORKANA_URL` | Perfil Workana | `https://www.workana.com/freelancer/...` |
| `VITE_BUYMEACOFFEE_URL` | Buy Me a Coffee | `https://buymeacoffee.com/ricardo.camilo.frontend` |
| `VITE_FACEBOOK_URL` | Perfil Facebook | `https://www.facebook.com/profile.php?id=...` |
| `VITE_FIGMA_URL` | Perfil Figma | `https://www.figma.com/@riddhilimbachiy` |
| `VITE_CONTACT_EMAIL` | Email de contato | `ricardo.camilo.dev@gmail.com` |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics ID | `G-DLRDXGG3V1` |
| `VITE_GTM_ID` | Google Tag Manager ID | `GTM-5HWWCSZ4` |
| `VITE_COUNTER_DEV_ID` | Counter.dev ID | `f30df6f3-...` |
| `VITE_GEMINI_API_KEY` | Google Gemini API Key (opcional) | - |

> **Nota:** No Netlify, configure estas variaveis em Site settings > Environment variables. Apenas variaveis com prefixo `VITE_` sao expostas ao codigo client-side via `import.meta.env`.

## 📁 Estrutura

```
portfolio2.0/
├── src/
│   ├── components/         # Componentes React
│   ├── constants/          # Constantes e env vars
│   ├── icons/              # Icones customizados
│   ├── services/           # Servicos (analytics, AI)
│   └── assets/             # Assets
├── public/                 # Arquivos estaticos
├── docs/                   # Documentacao
│   └── github-workflow/    # Padroes GitHub
└── .github/                # Templates e CI/CD
```

## 📚 Documentacao

- [Workflow GitHub](./docs/github-workflow/README.md)
- [Padroes de Qualidade](./docs/github-workflow/CODE_QUALITY.md)
- [Padroes de Commit](./docs/github-workflow/COMMIT-PATTERN.md)
- [Deploy Guide](./DEPLOY.md)
- [Fixes Log](./FIXES.md)

## 📜 Scripts

| Comando | Descricao |
|---------|-----------|
| `pnpm dev` | Servidor desenvolvimento |
| `pnpm build` | Build producao |
| `pnpm preview` | Preview producao |
| `pnpm lint` | Verificacao de codigo |

## 👤 Contato

**Ricardo Camilo**
- Portfolio: [ricardo-camilo-dev-frontend-web.netlify.app](https://ricardo-camilo-dev-frontend-web.netlify.app/)
- GitHub: [@ricardo-camilo-programador-frontend-web](https://github.com/ricardo-camilo-programador-frontend-web)
- Email: [ricardo.camilo.dev@gmail.com](mailto:ricardo.camilo.dev@gmail.com)

## 📄 Licenca

MIT License
