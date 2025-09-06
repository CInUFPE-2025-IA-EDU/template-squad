# Starter HTML/CSS/JS (público) — com CI e GitHub Pages

## Como começar

1. Instale **Node LTS** (https://nodejs.org) e **VS Code**.
2. Abra o terminal no repositório e rode:
   ```bash
   npm i
   npm run check   # eslint + html-validate + prettier check
   ```
3. Abra `docs/index.html` no VS Code (Live Server, se quiser).

## GitHub Pages

- Vá em **Settings → Pages** e selecione:
  - **Branch**: `main`
  - **Folder**: `/docs`
  - Salve. A página será publicada em alguns minutos.

## CI

- O workflow `.github/workflows/ci.yml` roda em cada _push/PR_:
  - `eslint` nos JS em `docs/`
  - `html-validate` nos HTML
  - `prettier --check` para formatação

## Extensões VS Code recomendadas

- **ESLint (dbaeumer.vscode-eslint)**
- **Prettier (esbenp.prettier-vscode)**
- **Live Server (ritwickdey.liveserver)**
