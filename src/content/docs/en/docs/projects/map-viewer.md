---
title: Map Viewer
description: The Three.js map engine behind Shadow Atlas.
---

Map Viewer is the vanilla-JavaScript map engine (Three.js) that powers [Shadow Atlas](../shadow-atlas/): it provides the `<map-viewer>` custom element for both the editor view inside Obsidian and the read-only table view that the local server delivers to the screen at your game table. Map Viewer is not a separately installable product — it is the engine underneath.

## Features

- Zoomable, pannable map view with recentering and 90° rotation.
- **Fog of war** with four tools: circle, square, rectangle and polygon.
- **Objects**: pins (15 shapes plus your own uploads, 12 colours), images and videos, each with a label, a Markdown description and links.
- **Layer system**: any number of object layers plus the always-present fog, grid and map layers, each with visibility, player visibility and a lock.
- **Live cursor**: broadcast your own pointer position to the table view.
- **Two visual themes**: `obsidian` (adopts the colours and font of the active Obsidian theme) and `default` (a fixed dark look).
- Automatic saving of fog, objects and the camera position after every change.

Full controls: [Shortcuts](../../reference/shortcuts/).

## Editor and table view

The same engine runs in two modes: the full editor view inside Obsidian (`player` attribute off) and the read-only table view on the shared screen (`player` attribute on). In table mode only zoom and pan are allowed, fog is always rendered fully opaque, and video audio stays muted — the sound deliberately comes from the game master's side.

## Standalone development

Without Obsidian, the engine can be tried directly via [index.html](https://github.com/Chronicle-of-Whispers) and a local web server:

```sh
python scripts/startServer.py   # or scripts/startServer.bat on Windows
```

Then open `http://localhost:8000`. Build, API and test details: [Development / API](../../reference/development-api/).
