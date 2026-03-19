# Estrutura do Projeto - Portfolio

## Visao Geral

Portfolio pessoal otimizado para performance maxima.

## Diretorios

```
portfolio2.0/
├── src/
│   ├── components/         # Componentes React
│   │   ├── ui/             # Componentes UI reutilizaveis
│   │   └── shared/         # Componentes compartilhados
│   ├── sections/           # Secoes da pagina
│   │   ├── Hero/           # Secao hero
│   │   ├── About/          # Secao sobre
│   │   ├── Projects/       # Secao projetos
│   │   ├── Skills/         # Secao skills
│   │   └── Contact/        # Secao contato
│   ├── hooks/              # Custom Hooks
│   ├── utils/              # Funcoes utilitarias
│   ├── types/              # Tipos TypeScript
│   └── assets/             # Assets (imagens, icones)
├── public/                 # Arquivos estaticos
│   └── images/             # Imagens otimizadas
├── docs/                   # Documentacao
│   └── github-workflow/    # Padroes GitHub
└── .github/                # Templates e CI/CD
```

## Convencoes

### Nomenclatura
- Componentes: PascalCase (ProjectCard.tsx)
- Hooks: camelCase com prefixo use (useScrollPosition.ts)
- Utilitarios: camelCase (formatDate.ts)
- Tipos: PascalCase com sufixo (ProjectType.ts)

### Code Splitting
- Secoes abaixo do fold sao lazy loaded
- Vendor chunks separados (React, Framer Motion)

### Performance
- Imagens em WebP/AVIF
- Lazy loading de componentes
- Tree shaking agressivo

## Stack

| Camada | Tecnologia |
|--------|------------|
| Build | Vite 6 |
| UI | React 19 |
| Estilos | TailwindCSS 3 |
| Animacoes | Framer Motion |
| Linguagem | TypeScript |
