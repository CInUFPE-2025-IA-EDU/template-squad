# 🧩 Template Squad — LMF (FICR)

Fluxo padronizado para os squads do projeto **Lava-Jato** (HTML/CSS/JS).

## 🔄 Fluxo
1. Crie uma _branch_: `feat/SEM<n>-<slug>`
2. Desenvolva em `docs/`
3. Rode local: `npm run check`
4. Abra **PR** → aguarde **CI** → revisão do **professor** → **merge**
5. Deploy automático via **GitHub Pages** (branch `main`, pasta `/docs`)

## 🛠 Scripts
- `npm run check` → `eslint` + `html-validate` + `prettier --check`
- `npm run prettier-fix` → corrige formatação

## 📦 Estrutura
```
.github/
  workflows/ci.yml      # Actions (CI)
  ISSUE_TEMPLATE/...
docs/
  index.html            # ponto de entrada
  styles.css
  main.js
.eslintrc.json
package.json
```

## ✅ Requisitos
- Node 18+
- VS Code com ESLint e Prettier
- (Intervenção) GitHub Copilot

## 📄 Pages
Settings → Pages → Source: **Deploy from branch** → `main` → `/docs`.
