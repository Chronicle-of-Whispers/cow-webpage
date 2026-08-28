---
title: Sharing
description: Put maps, images, videos and notes live on the game table screen.
---

Shadow Atlas distinguishes two kinds of share: sharing a **map** and sharing an **overlay** (an image, video or text excerpt). Both appear on the table/player view, but never at the same time — sharing a new map ends an active overlay and vice versa.

The table view is an ordinary web page: opened once in the browser of your table screen (ideally in full screen), it stays up all evening and refreshes itself.

## Sharing a map

- The **Share with players** header action in the map view, or
- right-click the tab / **⋮** menu → **[CoW] - Share in Shadow Atlas**, or
- the **Share current map with players** command.

### Live View

The **Live View** header toggle controls whether changes are pushed automatically:

- **on** — every change (fog, objects, map image) is sent to the table view immediately.
- **off** — changes stay local until you press **Share with players** again.

The starting state for new maps is controlled by the **Default live view** setting.

### Live Pan & Zoom

The **Live Pan & Zoom** toggle mirrors the game master's camera (position and zoom) to all connected clients and locks their own pan/zoom input while active. The state is deliberately **not persisted** and has no setting of its own — it starts disabled after every Obsidian restart.

### Live cursor

Hold the space bar to broadcast your own pointer position as a coloured dot to the table view. Size and colour can be adjusted in the toolbar under **Live Cursor**.

## Sharing an overlay

Overlays put images, videos or text excerpts on the table view as a standalone display without giving up the currently shared map (it is restored when the overlay closes).

Entry points:

- **File menu** on a Markdown, image, video or `.samap` file.
- **Editor selection** — share selected text via the context menu.
- **Active tab** via the **Share active tab with players** command (prefers a reading-mode selection, otherwise the whole tab).
- **Reading-mode context menu** on an image or video.
- **Inline share button** shown when hovering images, videos, blockquotes and headings in reading mode (can be turned off with the **Inline reading-mode share button** setting).

Shared videos appear in the Share Dock with native controls; play/pause/seek there drives playback on the table view. Viewers never hear audio — only the picture and the timestamp are synchronised.

## Share Dock

Right sidebar (command **Open share dock**), with two tabs:

- **Maps** — the currently shared map plus history (length configurable via **Map history length**). Per-entry actions: **Go to source**, **Share again**, **Delete from history**; the active map additionally offers **Stop sharing this map**.
- **Overlays** — the current overlay plus history (length via **Overlay history length**), the same actions plus **Close current share**.

An address pill at the top of the dock shows `ip:port`; clicking it copies the full URL to your clipboard.

## Across an Obsidian restart

The currently shared state (map, overlay and both histories) is persisted and restored automatically on the next start — you do not have to re-share after a restart.
