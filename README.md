# IceGate Website

Promotional website for [IceGate](https://icegate.tech) — an open-source Observability Data Lake Engine. Built with Next.js and [Gravity UI](https://gravity-ui.com/) design system.

## Tech Stack

- **Next.js 14** with App Router
- **React 18** with TypeScript
- **Gravity UI** (@gravity-ui/uikit, @gravity-ui/page-constructor, @gravity-ui/icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```text
src/
├── app/
│   ├── layout.tsx      # Root layout with SEO metadata
│   ├── page.tsx        # Home page entry
│   └── globals.css     # Global styles and animations
├── components/
│   └── LandingPage.tsx # Main client component (theme/mobile detection)
└── content/
    └── landing.ts      # Page content as PageConstructor blocks
```

## Deployment

The site is built as a **static export** (`output: 'export'` in `next.config.js`) and deployed to **GitHub Pages**.

### How it works

1. Push to `main` triggers the `deploy-page.yml` GitHub Actions workflow
2. The workflow runs `npm ci && npm run build`, which generates static files in `./out`
3. The `out` directory is uploaded and deployed to GitHub Pages

### CI

- **Lint** (`lint.yml`) — runs ESLint on every pull request to `main`
- **Deploy** (`deploy-page.yml`) — builds and deploys to GitHub Pages on every push to `main`

The deploy workflow can also be triggered manually via `workflow_dispatch`.

## Links

- **Website**: https://icegate.tech
- **Documentation**: https://docs.icegate.tech
- **GitHub**: https://github.com/icegatetech/icegate
- **Slack**: [Join the community](https://join.slack.com/t/icegate/shared_invite/zt-3ln3iae5z-YPz8piGJgbv~Zcc1Ev14OA)
- **Email**: contact@icegate.team
