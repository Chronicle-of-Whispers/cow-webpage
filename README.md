# Chronicle of Whispers — Website

Live: **<https://chronicle-of-whispers.github.io/cow-webpage/>**

Static project website and central documentation for **Chronicle of Whispers (COW)**. The landing page is a standalone Astro page; the documentation is generated with Starlight from Markdown files.

## Stack

- Astro
- Starlight
- static build, no server adapter
- GitHub Pages
- GitHub Actions

## Run locally

Requires Node.js 22.12 or newer. Node.js 24 LTS is recommended — the same major version the deployment workflow uses.

```bash
npm install
npm run dev
```

Astro then prints the local URL in the terminal (`http://localhost:4321` by default).

## Production build

```bash
npm run build
npm run preview
```

The static build is written to `dist/`.

## Editing content

- landing page (both languages): `src/components/LandingPage.astro`
- language variants of the landing page: `src/pages/index.astro` (EN) and `src/pages/de/index.astro` (DE)
- UI strings of the landing page and layout: `src/i18n/ui.ts`
- reusable UI: `src/components/`
- landing page CSS: `src/styles/global.css`
- documentation EN: `src/content/docs/docs/`
- documentation DE: `src/content/docs/de/docs/`
- Starlight theme: `src/styles/starlight.css`
- replaceable logos: `public/logo/` and `src/assets/logo-mark.svg`
- replaceable screenshots: `public/screenshots/`
- navigation and site configuration: `astro.config.mjs`

## Languages

The site is fully bilingual. English is the default language and lives at the root
path (`/`, `/docs/…`), German lives under `/de/` (`/de/`, `/de/docs/…`).

A new documentation page therefore always needs two files — `src/content/docs/docs/<path>.md`
and `src/content/docs/de/docs/<path>.md` — plus a sidebar entry in `astro.config.mjs`.
The `slug` there is given without a language prefix; Starlight resolves it per
language. Labels are translated via `translations: { de: '…' }`.

New landing page strings belong in `src/i18n/ui.ts` and must be maintained in both
languages there — a missing key fails the type check.

GitHub organisation: [Chronicle-of-Whispers](https://github.com/Chronicle-of-Whispers). Contact: `chronicleofwhispers@outlook.com`.

## GitHub Pages

The workflow `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`. In the GitHub repository, **Settings → Pages → Source** has to be set to **GitHub Actions** once.

The workflow detects the hosting type automatically:

- `chronicle-of-whispers.github.io`: published at `/`
- regular repository: published at `/<repository-name>/`

That way internal links and public assets work in both variants.

### Custom domain

1. Configure the DNS records as described in the GitHub Pages documentation.
2. Set an Actions variable `SITE_URL` in the repository to the full URL, for example `https://docs.example.com`.
3. Optionally set `BASE_PATH` to `/`.
4. Add a file `public/CNAME` containing exactly the domain name.

`public/CNAME` is intentionally not included yet so that no placeholder domain breaks a later deployment.

## Project structure

```text
.
├── .github/workflows/deploy.yml
├── public/
│   ├── logo/
│   └── screenshots/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/docs/docs/
│   ├── layouts/
│   ├── pages/index.astro
│   └── styles/
├── astro.config.mjs
├── package.json
└── README.md
```

## License

Before publishing, the final open-source license has to be chosen and added as `LICENSE`. The website deliberately does not make that legal decision in advance.
