---
title: Development / API
description: Build, Ordnerstruktur und die <map-viewer>-API von Chronicle of Whispers.
---

Shadow Atlas besteht aus zwei Projekten in einem gemeinsamen Workspace:

| Projekt | Rolle | Build |
| --- | --- | --- |
| **cow-shadow-atlas-viewer** | Vanilla-JS/Three.js-Kartenengine, liefert das `<map-viewer>`-Custom-Element. | Kein eigener Build — wird als Quelltext eingebunden. |
| **cow-shadow-atlas** | TypeScript-Obsidian-Plugin, bündelt die Engine per esbuild und ergänzt den lokalen Share-Server. | esbuild |

Das Plugin erwartet die Engine standardmäßig als Geschwisterordner (`../cow-shadow-atlas-viewer`, relativ zum Plugin-Ordner); überschreibbar über die Umgebungsvariable `MAPVIEWER_SRC`.

## Plugin bauen

```bash
npm install
npm run build
```

Das Script prüft zuerst die Typen (`tsc -noEmit -skipLibCheck`) und bündelt anschließend mit esbuild. Ergebnis: `main.js` (CommonJS, Obsidian-Plugin) und `www/mapviewer.bundle.js` (ESM, eigenständige Spieler-Seite).

Alternativ lässt sich der Bundle-Schritt ohne Typprüfung direkt aufrufen, etwa über die Wrapper-Scripts `scripts/build.ps1` / `scripts/build.sh`:

```bash
node esbuild.config.mjs production
```

Watch-Modus (kein Minify, Inline-Sourcemaps):

```bash
node esbuild.config.mjs
```

## `<map-viewer>` Custom Element

Definiert in `src/map-viewer-element.js` der Engine.

**Attribute:** `src`, `storage-key`, `lang`, `player`, `media-type`, `logs`, `theme`.

**Public API:** `setStorageAdapter(adapter)`, `setLinkProvider(provider)`, `setPinShapes(defs)`, `loadMap(url)`, `save()` / `load()`, `getData()` / `setData(data)`, `addImage(x, y, opts)`, `showToast(text, opts)`, `engine` (direkter Zugriff auf die `MapViewer`-Instanz).

**Events:** `map-ready`, `map-changed`, `map-saved`, `map-loaded`, `view-changed`, `object-transform`, `video-state`, `livecursor-change`, `livecursor-move`, `map-image-change`, `map-perf`.

## Datenlayout

Jede `.samap`-Datei ist lesbares JSON mit einer eindeutigen `id`. Ihre Ressourcen liegen daneben unter `.cow-shadow-atlas/<id>/`:

```text
.cow-shadow-atlas/<id>/
├── objects.json   # Objekt-Layer-Graph (Pins, Bilder, Videos, Layer-Definitionen)
├── fog.bin        # Fog-Maske
└── <basisbild>    # das gesetzte Kartenbild/-video
```

## Engine-Tests

```bash
cd tests
npm install
npm test        # node --test
npm run lint     # eslint src tests
```

## Beiträge

1. Prüfe bestehende Issues im jeweiligen Repository unter [Chronicle-of-Whispers](https://github.com/Chronicle-of-Whispers).
2. Halte Änderungen klein und thematisch fokussiert.
3. Dokumentiere sichtbares Verhalten und neue Konfiguration.
4. Ergänze Tests, wenn das jeweilige Repository ein Testgerüst bereitstellt.

Neue Doku-Seiten werden als Markdown unter `src/content/docs/docs/` (Englisch) und `src/content/docs/de/docs/` (Deutsch) angelegt und in `astro.config.mjs` in die Sidebar aufgenommen.
