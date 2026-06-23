# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — type-check (`tsc -b`) then build for production
- `npm run lint` — run ESLint over the project
- `npm run preview` — preview the production build locally

There is no test runner configured in this project.

## Architecture

This is a minimal Vite + React 19 + TypeScript template, not yet customized beyond the scaffold:

- `src/main.tsx` — entry point, mounts `<App />` into `#root` under `StrictMode`
- `src/App.tsx` — single root component (currently the default Vite/React starter content)
- `src/App.css`, `src/index.css` — styling
- `src/assets/` — static images used by `App.tsx`
- `index.html` — Vite HTML entry, references `/icons.svg` (sprite, expected in `public/`) and `/favicon.svg`

TypeScript config is split via project references: `tsconfig.json` references `tsconfig.app.json` (app source) and `tsconfig.node.json` (Vite config itself).

ESLint (`eslint.config.js`) uses the flat config format with `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh` (Vite-aware). No type-aware lint rules are enabled by default.

There is no git history yet (repository has untracked files only) — there are no established conventions to infer from past commits.