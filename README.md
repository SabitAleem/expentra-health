# Expentra Health

Production-ready static marketing website for **Expentra Health** — US healthcare back-office support and revenue cycle management (RCM) services.

Built with Next.js (App Router), TypeScript, Tailwind CSS, and Lucide React. Configured for static export and GitHub Pages.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production static export to `out/` |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript `--noEmit` |

## Project structure

```text
src/
  app/                 # App Router entry (layout, page, globals)
  components/
    layout/            # TopBar, Header, MobileMenu, Footer
    sections/          # Homepage sections
    ui/                # Reusable UI primitives
  data/                # Navigation, services, testimonials, content
  types/               # Shared TypeScript interfaces
  lib/                 # Utilities
```

Content lives in `src/data/` so services, testimonials, and nav links can be updated without touching presentation components.

## Static export & base path

`next.config.ts` enables:

- `output: 'export'`
- `trailingSlash: true`
- `images: { unoptimized: true }`

### Base path for GitHub Pages

When hosting at `https://<user>.github.io/<repo>/`, set:

```bash
NEXT_PUBLIC_BASE_PATH=/<repo>
```

Copy `.env.example` to `.env.local` for local testing of a subpath:

```bash
NEXT_PUBLIC_BASE_PATH=/expentra-health
```

Leave `NEXT_PUBLIC_BASE_PATH` empty for custom domains or root hosting.

Optional site URL for metadata:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## GitHub Pages deployment

1. Push this repository to GitHub.
2. In **Settings → Pages**:
   - Source: **GitHub Actions**
3. Ensure the default branch is `main` (or `master`).
4. The workflow at `.github/workflows/deploy.yml` builds the static site and deploys the `out/` folder.
5. The workflow deploys with `NEXT_PUBLIC_BASE_PATH` empty for `www.expentrahealth.com`.

### Custom domain (`www.expentrahealth.com`)

The workflow and `public/CNAME` are configured for this domain.

1. In GitHub: **Settings → Pages → Custom domain** → enter `www.expentrahealth.com` → Save → enable **Enforce HTTPS** when available.
2. In GoDaddy DNS (see below), add the `www` CNAME to your GitHub Pages host.
3. Optional: in GoDaddy, forward `expentrahealth.com` (apex, no www) to `https://www.expentrahealth.com`.

## Design system

| Token | Value |
| --- | --- |
| Primary navy | `#102F63` |
| Primary blue | `#2161D9` |
| Dark blue | `#0D2B59` |
| Light blue | `#F2F7FD` |
| Secondary text | `#64748B` |
| Border | `#E2EAF4` |

## Feedback form

The client feedback form validates input in the browser and shows a confirmation message. It does **not** persist data. Wire `FeedbackForm` to an API, form service, or serverless endpoint when a backend is available.

## License

Proprietary — Expentra Health. All rights reserved.
