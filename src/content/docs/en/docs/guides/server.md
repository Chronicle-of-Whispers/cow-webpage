---
title: Server
description: Configure and run the local server for the table view.
---

Shadow Atlas automatically starts a local HTTP/WebSocket server as soon as the plugin loads. It serves the view for the screen at your game table and keeps running as long as Obsidian is open — there is no separate start command.

## Finding the address

- The map view shows the table screen's address as a small pill in the bottom-left corner (e.g. `http://192.168.0.10:8000`).
- The [Share Dock](../sharing/#share-dock) shows the same address at the top; clicking it copies the full URL.
- The plugin settings show it under **Current address** whenever the server is running.

## Configuration

| Setting | Default | Meaning |
| --- | --- | --- |
| Port mode | `Range` | `Fixed` (one port) or `Range` (first free port in a range). |
| Port / Port range | `8000`–`8099` | Valid range: 1024–65535. |
| Allow access from other devices (LAN) | on | On: the server binds to `0.0.0.0` (table TV, tablets and other LAN devices). Off: `127.0.0.1` only — enough for a second monitor on the same machine. |

Changes take effect only after **Apply changes → Restart server** in the settings.

Complete list of all settings: [Settings](../../reference/settings/).

## When no port is free

If Shadow Atlas cannot find a free port in the configured range at startup, the plugin stays fully functional — only the table view is disabled until a port frees up or the settings are adjusted.

## Security

The server offers **no authentication and no encryption**. Anyone with access to the open port and the address can see the shared map. Only enable **Allow access from other devices** on a trusted local network, and never expose the port to the internet (e.g. through port forwarding).
