---
title: Shortcuts
description: Mouse and keyboard controls of the Map Viewer.
---

The same reference is available in every map view through the toolbar's **Help** button.

## Navigation

| Input | Effect |
| --- | --- |
| Mouse wheel | Zoom to cursor |
| Left mouse button + drag (empty area) | Pan map |
| Middle mouse button + drag | Pan map, even over objects |
| Double-click on object | Select object and open properties |
| Toolbar: **Center** | Center the camera on the map content |

## Fog of war

| Input | Effect |
| --- | --- |
| Hold Shift (pointer over the map) | Enter fog mode, `Esc` leaves it |
| In fog mode: left mouse button | Remove fog |
| In fog mode: right mouse button | Add fog |
| In fog mode: mouse wheel | Change tool size (with the polygon tool the wheel keeps zooming) |
| Toolbar: **Fog Tool** | Choose shape (circle, square, rectangle, polygon) and size |
| Circle / square vs. rectangle | Circle and square paint while dragging; the rectangle is dragged out and filled on release |
| Polygon | Clicks place vertices; the green check mark at the last vertex fills the area, `Esc` cancels |
| Toolbar: **Fog** → **Clear All** | Remove all fog |
| Toolbar: **Fog** → **Restore All** | Cover the entire map with fog again |

## Objects

| Input | Effect |
| --- | --- |
| Right-click on empty area | Context menu → add object (pin, image, video) |
| Right-click on object | Context menu: change layer, properties, detach popover, open links, delete |
| Left mouse button + drag | Select and move object |
| Handles on the selected object | Resize and rotate; Shift frees the aspect ratio or snaps the angle |
| Arrow keys (larger steps with Shift) | Move the selected object |
| Del | Delete the selected object |
| Ctrl+C / Ctrl+X / Ctrl+V | Copy / cut / paste |
| Drop an image or video file onto the map | Create an object straight from the file |

## Live cursor

| Input | Effect |
| --- | --- |
| Hold Space | Broadcast your pointer position to the table view |
| Toolbar: **Live Cursor** | Set the size and colour of the broadcast cursor |

## Layers

| Input | Effect |
| --- | --- |
| Layer panel (bottom left) | Click the header to expand/collapse |
| `+` button | Add a new object layer and name it right away |
| Drag & drop | Reorder layers (including the fog layer) |
| Eye icon | Show/hide the layer in this view |
| Player icon | Show/hide the layer in the table view |
| Lock icon | Lock the layer: its objects can no longer be selected or moved |
| Click on a layer | Open properties (rename, visibility, lock) |
| Right-click on a layer | Properties / delete |

## Saving and loading

Fog, objects and the camera position are saved automatically after every change — inside the Obsidian plugin into the vault, in the standalone viewer into the browser's IndexedDB. The dot in the status bar indicates unsaved changes.
