# Root & Reason — holistic healthcare brand concept

A fictional integrative-Ayurveda practice website ("Root & Reason"), built as a
**brand concept demonstration**. It shows how a modern Ayurveda practice might
present itself: longer consultations, honest limits, patient education, and a
calm editorial design language.

> Nothing here describes a real person, practice or service. All operational
> details (timings, fees, languages, contact details) are illustrative
> placeholders, clearly marked in the UI.

## Live site

**https://sayandeep-123.github.io/sample-ayurveda/**

Deployed with GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`):
every push to `main` builds the site and publishes `dist/` automatically.

## Stack

- [Vite](https://vite.dev) + [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com) (`@tailwindcss/vite`)
- [React Router](https://reactrouter.com) (HashRouter — no server rewrites needed)
- `vite-plugin-singlefile` — the whole app bundles into a single `dist/index.html`

## Develop

```sh
npm ci          # install (exact lockfile versions)
npm run dev     # dev server with hot reload
npm run build   # production build → dist/
npm run preview # serve the production build locally
npm run typecheck
```

## Structure

- `src/pages/` — Home, Approach, Care, Practitioner, Library, Article, Enquiry, NotFound
- `src/data/` — brand, content and sample data (all placeholder-marked)
- `public/images/` — demo imagery
- `public/robots.txt`, `public/sitemap.xml` — SEO files pointing at the live URL

## Notes

- Asset paths are relative (`base: "./"` in `vite.config.ts`) so the build works
  under the `/sample-ayurveda/` project subpath.
- The deploy workflow copies `index.html` to `404.html` so unknown paths load
  the app instead of a bare Pages error page.
