# Sami Ahvenniemi — Homepage

Personal homepage for Sami Ahvenniemi, built with [Next.js](https://nextjs.org), [TypeScript](https://www.typescriptlang.org), and [Tailwind CSS](https://tailwindcss.com).

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Syne (sans) + JetBrains Mono (mono) via `next/font/google`
- **Analytics**: Vercel Analytics & Speed Insights
- **Linting/Formatting**: ESLint + Prettier
- **Git hooks**: Husky + lint-staged

## Structure

```
app/
  layout.tsx      # Root layout with fonts, metadata, analytics
  page.tsx        # Single-page composition
  globals.css     # Global styles
components/
  Nav.tsx         # Navigation
  Hero.tsx        # Hero section
  About.tsx       # About section
  Projects.tsx    # Projects section
  Contact.tsx     # Contact section
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` to deploy.
