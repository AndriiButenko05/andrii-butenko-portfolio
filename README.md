# Andrii Butenko — Portfolio

Live: [andrii-butenko-portfolio.vercel.app](https://andrii-butenko-portfolio.vercel.app)

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)

## About me

Frontend Developer with 1.5+ years of commercial experience in React and TypeScript across an outsourced multi-brand platform (30+ locales), a regulated online casino platform, a multi-module CRM and a healthcare application. Based in Wrocław, open to remote.

- GitHub: [github.com/AndriiButenko05](https://github.com/AndriiButenko05)
- LinkedIn: [linkedin.com/in/andriibutenkodeveloper](https://www.linkedin.com/in/andriibutenkodeveloper/)
- Email: andrejbutik@gmail.com

## About this project

Single-page portfolio: Hero, tech-stack loop, About, Experience, Projects, Education & Languages, Links and Contact.

### Tech stack

- **Framework:** Next.js 16 (App Router, Turbopack), React 19, TypeScript
- **Styling:** CSS Modules (`app/page.module.css`), no CSS framework
- **Interactive components** (adapted from [React Bits](https://reactbits.dev)):
  - `Lanyard` — 3D badge in the hero (three.js, desktop only, code-split)
  - `LogoLoop` — scrolling tech-stack band (`react-icons`)
  - `ProfileCard` — tilting profile card in About
  - `TargetCursor` — custom cursor in Projects (fine pointers only)
- **Fonts:** Pathway Extreme + JetBrains Mono via `next/font/google`
- **Forms:** Formspree, with `react-hot-toast` for feedback
- **SEO:** `app/sitemap.ts`, `app/robots.ts`, Open Graph image, JSON-LD `Person` schema

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

Content is data-driven from JSON files in `public/data/` (`experience.json`, `education.json`, `skills.json`, `languages.json`, `projects.json`), typed via the matching files in `types/`. Update the JSON to change copy without touching component markup. The downloadable CV lives at `public/Andrii_Butenko_Frontend_Developer.pdf`.

## Environment variables

The contact form (`components/Contact/Contact.tsx`) posts to Formspree and requires:

```
NEXT_PUBLIC_MY_CODE=<your Formspree form id>
```

Set this in a local `.env.local` file (not committed).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint
