---
title: Shadow Atlas
description: Obsidian plugin that puts battle maps on the screen at your game table.
---

Shadow Atlas is built for the **game table with a screen**: a TV or monitor in the middle of the table, a second display next to the game master, or your players' tablets. The game master works on the full map inside Obsidian while the table screen only shows what the party is meant to see.

A `.samap` file in your vault becomes a fully interactive battle map: paint fog of war, place pins, images and videos, overlay a grid, and link map objects to other notes. A built-in local web server serves the table view — any device on the same network just opens a URL in its browser, no installation required.

## Typical setups

- **Table TV or projector**: a full-screen browser on the shared display shows the map you released.
- **Second monitor**: the game master keeps Obsidian on the main screen, the party watches the second one.
- **Players' own devices**: tablets or laptops connect to the same address in parallel.

## Features

- **Battle map view** for `.samap` files, powered by the bundled [Map Viewer engine](../map-viewer/).
- **Fog of war** with circle, rectangle, square and polygon reveal tools.
- **Pins, images, videos and a grid layer** you can place and move on the map.
- **Live table view** on your LAN — the table screen just opens a URL in a browser.
- **Live View** broadcasts every map change instantly, or you share on demand.
- **Live Pan & Zoom** so the table view follows the game master's camera.
- **Share Dock** — a sidebar for sharing and re-sharing maps, images, videos and note excerpts, each with its own history.
- **Overlay sharing** from the file menu, an editor selection, the active tab or reading-mode images and videos, with an optional inline share button.
- **Object links** connecting map objects to notes and headings in your vault.
- **Localisation** (English/German), following your Obsidian display language.

All settings are listed under [Settings](../../reference/settings/). Sharing and live features are covered in [Sharing](../../guides/sharing/).

## Workflow

1. Right-click a folder → **[CoW] - New shadow atlas map**, then open the new `.samap` file.
2. Drag an image or video onto the map to set the base map.
3. Use the header actions to enable **Share with players**, **Live Pan & Zoom** or **Live View**.
4. Place objects (pins, images, videos) and link them to notes (popover link) or directly to a vault file (Obsidian link).
5. If needed, share images, videos or note excerpts alongside the map from the [Share Dock](../../guides/sharing/).

## Data storage

Every `.samap` file stays a plain, readable JSON file in your vault. Its resources (fog mask, object graph, base image) sit next to it in a hidden `.cow-shadow-atlas/<map-id>/` folder. If you duplicate a `.samap` file via "Make a copy", the copy automatically receives a fresh id and its own copy of those resources, so both maps stay independent.

:::note[Requirements]
Shadow Atlas needs Obsidian 1.8.7 or newer and runs on the **desktop** only (the local server is Node-based). Any device with a modern browser on the same network works as the table screen.
:::

## Status

Current version: **1.0.0**, licensed [GPL-3.0-or-later](https://github.com/Chronicle-of-Whispers). The Obsidian community plugin review is still pending — until then, install manually from a GitHub release (see [Installation](../../installation/)).
