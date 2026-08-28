---
title: Installation
description: Install Shadow Atlas manually from a release.
---

Shadow Atlas is still going through the review process for the Obsidian community plugin store. Until then, the plugin is installed manually from a GitHub release.

## Requirements

- Obsidian **1.8.7** or newer.
- **Desktop** Obsidian (Windows, macOS, Linux) — the plugin starts a local Node server and does not run on Obsidian Mobile.
- A screen for the game table: a table TV, a projector, a second monitor or your players' tablets — each with a modern browser on the same local network. A second monitor on the same machine works without a network too (`http://localhost:<port>`).
- For building from source: Node.js 18 or newer and Git.

## Installing from a release

1. Open the [repositories on GitHub](https://github.com/Chronicle-of-Whispers).
2. Download the plugin's release archive.
3. Extract it into `<Vault>/.obsidian/plugins/cow-shadow-atlas/`. The archive contains `main.js`, `manifest.json`, `styles.css`, the `locales/` folder and the `www/` folder with the table view.
4. In Obsidian, go to **Settings → Community plugins**, turn off **Restricted mode** if it is on, and enable **Chronicle of Whispers - Shadow Atlas**.

## Firewall

For devices on your LAN — a table TV, tablets, another computer — to connect, inbound traffic on the chosen port (default range `8000`–`8099`, see [Server](./guides/server/)) must be allowed for Obsidian. A second monitor on the same machine does not need this.

## From source

The plugin bundles the [Map Viewer engine](./projects/map-viewer/) from a sibling folder. Build instructions, folder layout and the `MAPVIEWER_SRC` override are documented under [Development / API](./reference/development-api/).

## Next step

Continue with [Getting started](./getting-started/) to create your first map.
