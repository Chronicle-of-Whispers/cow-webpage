---
title: Fog of war
description: Paint, reveal and control hidden map areas for your table.
---

Fog of war separates the game master's complete view from the part the party has already discovered. On the table view fog is always rendered fully opaque — the opacity you set in the editor only affects your own view.

## Controls

1. Hold **Shift** while the pointer is over the map to enter fog mode (`Esc` leaves it again).
2. The **left mouse button** removes fog, the **right mouse button** adds it.
3. The **mouse wheel** changes the tool size (with the polygon tool the wheel keeps zooming instead).
4. Pick between **Circle**, **Square**, **Rectangle** and **Polygon** in the toolbar under **Fog Tool**.

Circle and square paint while you drag; the rectangle is dragged out and filled on release. With the polygon tool every click places a vertex — clicking the green check mark at the last vertex fills the area, `Esc` cancels.

**Fog** → **Clear All** removes all fog at once, **Restore All** covers the whole map again.

## The fog layer

Fog is always present and can be placed anywhere in the stack via the [layer templates](../../reference/settings/#layer-templates) — in front of or behind any number of object layers. Opacity and visibility of your own view are set in the fog layer's property panel.

:::danger[Not a security boundary]
Fog of war is a presentation feature, not access control. The table view and the local server use no authentication — anyone with network access to the exposed port can connect. Do not expose the server to the internet, and only share the network with people who are also allowed to see the full map content.
:::

## Synchronisation

With [Live View](../sharing/#live-view) enabled, the table view sees every fog change instantly. With it disabled, the current state is only transmitted on the next manual **Share with players**.
