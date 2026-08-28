---
title: Settings
description: Every Shadow Atlas setting at a glance.
---

All settings live under **Settings → Community plugins → Chronicle of Whispers - Shadow Atlas**.

## General

| Setting | Description |
| --- | --- |
| Language | `Auto` (follows your Obsidian display language), `English (US)` or `Deutsch (AT)`. Applies to plugin text and the table view. |
| Map viewer style | `Derive from Obsidian style` adopts the colours and font of your active Obsidian theme; `Default` uses the engine's fixed dark look. |

## Server

| Setting | Description |
| --- | --- |
| Port mode | `Fixed` (a single port) or `Range` (first free port from a range). |
| Port *(with Fixed)* | Fixed TCP port, 1024–65535. If it is taken, sharing stays disabled. |
| Port range start / end *(with Range)* | Range the first free port is picked from. Default: **8000–8099**. The end must be ≥ the start. |
| Allow access from other devices (LAN) | Default **on**: the server binds to `0.0.0.0`, so devices on the same network can connect. Off: `127.0.0.1` only (this machine). |
| Apply changes → Restart server | Changes to the port/LAN settings only take effect after restarting the local server. |

## Map defaults

| Setting | Description |
| --- | --- |
| Default live view | Starting state of **Live View** for newly created maps. Default: on. |
| Map history length | Number of entries in the Share Dock's map history. Default 5, max. 100. |
| Overlay history length | Number of entries in the Share Dock's overlay history. Default 5, max. 100. |
| Inline reading-mode share button | Shows a small share button when hovering reading-mode content. Default: on. |

## Layer templates

Defines which object layers every new map is created with (default: a single **Tokens** layer), plus the position of the always-present **Fog** layer within that stack (0 = frontmost). Order and visibility can be adjusted with the arrow buttons; the fog layer itself cannot be deleted and is always visible to the table view.

## Pin icons

Manages the pin icons available in the object property panel:

- 15 built-in shapes (teardrop, circle, square, diamond, star, chest, exclamation, NPC, cross, xmark, dot, X, triangle, heart, hexagon).
- Your own uploads via drag & drop: SVG, PNG, JPEG, WebP or GIF, **512 KB maximum**. Tintable SVGs (containing a `{{COLOR}}` placeholder) can take a pin colour just like the built-in shapes.
- Reorder by dragging or with the arrow buttons; **Restore default pins** resets the list to the 15 default shapes (your uploads stay on disk but disappear from the list).

## Other

| Setting | Description |
| --- | --- |
| Apply changes | Restarts the local server so port/LAN changes take effect. |
| Current address | Shows the address clients currently connect to (only visible while the server runs). |
