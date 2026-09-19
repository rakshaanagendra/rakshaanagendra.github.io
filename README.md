# Portfolio Website

Personal portfolio for Raksha Nagendra — AI / LLM / Agentic Systems Engineer.
Built with **React + Vite + Tailwind CSS**, styled as a responsive glassmorphism
UI, and deployable to **GitHub Pages** with zero server infrastructure.

Content (About, Skills, and the five featured projects) is sourced from the
READMEs of:

- `Production-RAG-AI-Assistant-with-Reranking-and-Evaluation-Pipeline`
- `ai-redteam-harness`
- `agent-chaos-mesh`
- `financial-recon-mesh`
- `agent-logistics-mesh`

No personal contact details (email, phone, address) are included anywhere on
the site — only public GitHub and LinkedIn profile links.

## Local development

Requires [Node.js](https://nodejs.org/) 18+ (20 LTS recommended).

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The production build is written to `dist/`.

## Deploying to GitHub Pages

This repo ships a GitHub Actions workflow (`.github/workflows/deploy.yml`)
that builds the site and deploys it automatically on every push to `main`.

1. Push this folder to a new GitHub repository (e.g. `Portfolio-Website`, or
   `<your-username>.github.io` if you want it at the root of your GitHub
   Pages user site).
2. In the repository's **Settings → Pages**, set **Source** to
   **"GitHub Actions"**.
3. Push to `main` — the workflow builds the site with Vite and publishes
   `dist/` to GitHub Pages.

`vite.config.js` uses a relative base path (`base: "./"`), so the same build
works whether it's served from the root of a user site
(`https://<username>.github.io/`) or from a project path
(`https://<username>.github.io/Portfolio-Website/`) — no config changes
needed either way.

## Editing content

- `src/data/projects.js` — the five featured project cards (highlights,
  tech tags, metrics, GitHub links).
- `src/data/skills.js` — the skills/competencies grid.
- `src/data/links.js` — GitHub and LinkedIn URLs used in the nav and footer.
- `src/components/About.jsx` — bio copy and headline stats.

> Note: the GitHub links for `ai-redteam-harness`, `agent-chaos-mesh`,
> `financial-recon-mesh`, and `agent-logistics-mesh` in `src/data/projects.js`
> are inferred from the local folder names. Update them in
> `src/data/projects.js` if the actual repository names differ once pushed
> to GitHub.
