# Beeno CRM — Central de Ajuda

Site estático da central de ajuda do Beeno CRM, gerado a partir da documentação oficial.

## Como publicar no GitHub Pages

1. Faça upload desta pasta para um repositório no GitHub
2. Vá em **Settings → Pages**
3. Em **Source**, selecione `main` branch e pasta `/ (root)`
4. Salve — o site estará disponível em `https://<seu-usuario>.github.io/<nome-do-repo>/`

## Estrutura

```
beeno-help-center/
├── index.html              # Página inicial
├── glossario-crm.html      # Artigos individuais
├── conta.html
├── ... (41 artigos no total)
├── assets/
│   ├── style.css           # Estilos Beeno
│   ├── main.js             # Interatividade
│   └── favicon.svg         # Ícone
└── README.md
```

## Tecnologias

- HTML estático puro (sem framework, sem build step)
- CSS com variáveis customizadas
- JavaScript vanilla
- Compatível com GitHub Pages, Netlify, Vercel, etc.
