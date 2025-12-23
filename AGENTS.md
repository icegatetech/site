# AGENTS.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

IceGate promotional website - a Next.js landing page showcasing IceGate, an open-source Observability Data Lake Engine. Built with Gravity UI design system.

## Commands

```bash
npm run dev      # Start development server (hot-reload)
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Tech Stack
- **Next.js 14** with App Router
- **React 18** with TypeScript (strict mode)
- **Gravity UI** (@gravity-ui/uikit, @gravity-ui/page-constructor, @gravity-ui/icons)

### Project Structure
```
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

### Key Patterns

**Content-as-Configuration**: All page content is defined in `landing.ts` as typed PageContent objects using Gravity UI PageConstructor block types (header-block, extended-features-block, icons-block, info-block, banner-block).

**Client Components**: `LandingPage.tsx` uses `'use client'` directive for system theme detection and responsive breakpoint handling (768px).

**Path Alias**: Use `@/` for src imports (e.g., `@/components/LandingPage`).

### Gravity UI PageConstructor

The site uses these block types:
- `header-block` - Hero sections with title, description, buttons, image
- `extended-features-block` - Feature grids with animated cards
- `icons-block` - Technology logo displays
- `info-block` - Two-column problem/solution layout
- `banner-block` - Call-to-action sections

Image configuration requires `disableCompress: true` for local images to prevent .webp conversion attempts.

### Next.js Config

`transpilePackages` is required for Gravity UI packages as they ship as ESM without pre-compiled bundles.

## Styling

- Global CSS uses Gravity UI CSS variables (`--g-*`)
- Dark theme is default with system preference detection
- Custom animations defined in globals.css (fadeInUp, hover transforms)
