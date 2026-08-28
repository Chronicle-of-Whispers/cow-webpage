# Chronicle of Whispers — Website

Statische Projektwebsite und zentrale Dokumentation für **Chronicle of Whispers (COW)**. Die Startseite ist eine eigene Astro-Produktseite; die Dokumentation wird mit Starlight aus Markdown-Dateien erzeugt.

## Stack

- Astro
- Starlight
- statischer Build ohne Server-Adapter
- GitHub Pages
- GitHub Actions

## Lokal starten

Voraussetzung ist Node.js 22.12 oder neuer. Empfohlen wird Node.js 24 LTS, dieselbe Hauptversion wie im Deployment-Workflow.

```bash
npm install
npm run dev
```

Astro zeigt die lokale URL anschließend im Terminal an (standardmäßig `http://localhost:4321`).

## Produktions-Build

```bash
npm run build
npm run preview
```

Der statische Build wird in `dist/` geschrieben.

## Inhalte bearbeiten

- Landingpage (beide Sprachen): `src/components/LandingPage.astro`
- Sprachvarianten der Landingpage: `src/pages/index.astro` (DE) und `src/pages/en/index.astro` (EN)
- UI-Texte der Landingpage und des Layouts: `src/i18n/ui.ts`
- wiederverwendbare UI: `src/components/`
- Landingpage-CSS: `src/styles/global.css`
- Dokumentation DE: `src/content/docs/docs/`
- Dokumentation EN: `src/content/docs/en/docs/`
- Starlight-Design: `src/styles/starlight.css`
- austauschbare Logos: `public/logo/` und `src/assets/logo-mark.svg`
- austauschbare Screenshots: `public/screenshots/`
- Navigation und Seitenkonfiguration: `astro.config.mjs`

## Sprachen

Die Website ist vollständig zweisprachig. Deutsch ist die Standardsprache und liegt
im Wurzelpfad (`/`, `/docs/…`), Englisch unter `/en/` (`/en/`, `/en/docs/…`).

Eine neue Doku-Seite braucht daher immer zwei Dateien — `src/content/docs/docs/<pfad>.md`
und `src/content/docs/en/docs/<pfad>.md` — sowie einen Sidebar-Eintrag in
`astro.config.mjs`. Dort wird der `slug` ohne Sprachpräfix angegeben; Starlight
löst ihn pro Sprache selbst auf. Das Label wird über `translations: { en: '…' }`
übersetzt.

Neue Texte auf der Landingpage gehören in `src/i18n/ui.ts` und müssen dort in
beiden Sprachen gepflegt werden — fehlt ein Schlüssel, schlägt der Typecheck fehl.

GitHub-Organisation: [Chronicle-of-Whispers](https://github.com/Chronicle-of-Whispers). Kontakt: `chronicleofwhispers@outlook.com`.

## GitHub Pages

Der Workflow `.github/workflows/deploy.yml` baut und veröffentlicht die Seite bei jedem Push auf `main`. Im GitHub-Repository muss unter **Settings → Pages → Source** einmalig **GitHub Actions** ausgewählt werden.

Der Workflow erkennt den Hosting-Typ automatisch:

- `chronicle-of-whispers.github.io`: Veröffentlichung unter `/`
- normales Repository: Veröffentlichung unter `/<repository-name>/`

Dadurch funktionieren interne Links und öffentliche Assets in beiden Varianten.

### Eigene Domain

1. DNS-Einträge wie in der GitHub-Pages-Dokumentation beschrieben konfigurieren.
2. Im Repository eine Actions-Variable `SITE_URL` mit der vollständigen URL setzen, zum Beispiel `https://docs.example.com`.
3. Optional `BASE_PATH` auf `/` setzen.
4. Eine Datei `public/CNAME` mit genau dem Domainnamen anlegen.

`public/CNAME` ist absichtlich noch nicht enthalten, damit kein Platzhalter-Domainname ein späteres Deployment stört.

## Projektstruktur

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

## Lizenz

Vor der Veröffentlichung muss die endgültige Open-Source-Lizenz ausgewählt und als `LICENSE` hinzugefügt werden. Die Website trifft diese rechtliche Entscheidung bewusst nicht vorab.
