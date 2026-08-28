---
title: Development / API
description: Build, folder layout and the <map-viewer> API of Chronicle of Whispers.
---

Shadow Atlas consists of two projects in one shared workspace:

| Project | Role | Build |
| --- | --- | --- |
| **cow-shadow-atlas-viewer** | Vanilla-JS/Three.js map engine providing the `<map-viewer>` custom element. | None — consumed as source. |
| **cow-shadow-atlas** | TypeScript Obsidian plugin, bundles the engine with esbuild and adds the local share server. | esbuild |

By default the plugin expects the engine as a sibling folder (`../cow-shadow-atlas-viewer`, relative to the plugin folder); override it with the `MAPVIEWER_SRC` environment variable.

## Building the plugin

```bash
npm install
npm run build
```

The script first type-checks (`tsc -noEmit -skipLibCheck`) and then bundles with esbuild. Output: `main.js` (CommonJS, the Obsidian plugin) and `www/mapviewer.bundle.js` (ESM, the standalone table view page).

The bundle step can also be invoked without the type check, e.g. through the wrapper scripts `scripts/build.ps1` / `scripts/build.sh`:

```bash
node esbuild.config.mjs production
```

Watch mode (no minification, inline source maps):

```bash
node esbuild.config.mjs
```

## `<map-viewer>` custom element

Defined in the engine's `src/map-viewer-element.js`.

**Attributes:** `src`, `storage-key`, `lang`, `player`, `media-type`, `logs`, `theme`.

**Public API:** `setStorageAdapter(adapter)`, `setLinkProvider(provider)`, `setPinShapes(defs)`, `loadMap(url)`, `save()` / `load()`, `getData()` / `setData(data)`, `addImage(x, y, opts)`, `showToast(text, opts)`, `engine` (direct access to the `MapViewer` instance).

**Events:** `map-ready`, `map-changed`, `map-saved`, `map-loaded`, `view-changed`, `object-transform`, `video-state`, `livecursor-change`, `livecursor-move`, `map-image-change`, `map-perf`.

## Data layout

Every `.samap` file is readable JSON with a unique `id`. Its resources sit next to it under `.cow-shadow-atlas/<id>/`:

```text
.cow-shadow-atlas/<id>/
├── objects.json   # object layer graph (pins, images, videos, layer definitions)
├── fog.bin        # fog mask
└── <base image>   # the configured map image/video
```

## Engine tests

```bash
cd tests
npm install
npm test        # node --test
npm run lint     # eslint src tests
```

## Contributing

1. Check the existing issues in the relevant repository under [Chronicle-of-Whispers](https://github.com/Chronicle-of-Whispers).
2. Keep changes small and focused on one topic.
3. Document visible behaviour and new configuration.
4. Add tests where the repository provides a test harness.

New documentation pages are added as Markdown under `src/content/docs/docs/` (English) and `src/content/docs/de/docs/` (German), then registered in the sidebar in `astro.config.mjs`.
