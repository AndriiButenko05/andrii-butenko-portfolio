# Andrii Butenko — Portfolio

Live: [andrii-butenko-portfolio.vercel.app](https://andrii-butenko-portfolio.vercel.app)

## About me

I'm a Frontend Developer based in Wrocław, Poland, specializing in React, TypeScript, and Next.js. I have commercial experience across a multi-module CRM platform, a HIPAA-compliant healthcare application, and a client website delivered solo from requirements to launch — covering UI architecture, REST API integration, i18n localization, and backend work in Nest.js. I hold a B.Sc. in Cloud Application Development from WSB Merito University (2026).

- GitHub: [github.com/AndriiButenko05](https://github.com/AndriiButenko05)
- LinkedIn: [linkedin.com/in/andriibutenkodeveloper](https://www.linkedin.com/in/andriibutenkodeveloper/)
- Email: andrejbutik@gmail.com

## About this project

Personal portfolio site — a single-page layout covering Hero, About, Experience, Projects, Education & Languages, Links, and Contact.

### Tech stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **UI:** React 19
- **Styling:** CSS Modules (`app/page.module.css`), no CSS framework
- **Fonts:** Pathway Extreme + JetBrains Mono, self-hosted via `next/font/google`
- **Forms:** Formspree (contact form), `react-hot-toast` for submit feedback
- **Images:** `next/image` with optimized/compressed static assets (via `sharp`)
- **SEO:** `app/sitemap.ts`, `app/robots.ts`, Open Graph/Twitter metadata, JSON-LD `Person` schema
- **Tooling:** ESLint, `eslint-config-next`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Content

Most content is data-driven from JSON files in `public/data/` (`experience.json`, `education.json`, `skills.json`, `languages.json`, `projects.json`), typed via the matching files in `types/`. Update the JSON to change copy without touching component markup.

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
