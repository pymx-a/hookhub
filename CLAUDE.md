# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start the development server on http://localhost:3000
- `npm run build` - Build the production application
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## Architecture

This is a Next.js 15.5.0 application using the App Router with TypeScript:

- **Framework**: Next.js with React 19.1.0 and App Router
- **Styling**: Tailwind CSS 4 with PostCSS plugin
- **TypeScript**: Strict mode enabled, path alias `@/*` → `./src/*`
- **Fonts**: Geist Sans and Geist Mono optimized with next/font
- **ESLint**: Flat config with Next.js core web vitals and TypeScript rules

## Key Files

- `src/app/layout.tsx` - Root layout with font variables and metadata
- `src/app/page.tsx` - Main landing page component
- `src/app/globals.css` - Global Tailwind styles
- `eslint.config.mjs` - Flat ESLint configuration
- `next.config.ts` - Next.js configuration (minimal)
- `tsconfig.json` - TypeScript configuration with strict settings