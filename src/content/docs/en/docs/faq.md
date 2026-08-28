---
title: FAQ
description: Frequently asked questions about Chronicle of Whispers.
---

## Is Shadow Atlas released yet?

The current version is **1.0.0**. A review by the Obsidian community plugin store is still pending, so installation happens manually from a [GitHub release](https://github.com/Chronicle-of-Whispers) for now (see [Installation](./installation/)).

## Is it free to use?

Yes. Shadow Atlas and Map Viewer are open source under the [GPL-3.0-or-later](https://github.com/Chronicle-of-Whispers) licence.

## Do I need Obsidian?

For Shadow Atlas, yes — and specifically the **desktop** version (the local server does not run on Obsidian Mobile). The screen at your game table does not need Obsidian, only a modern browser on the same network.

## Do I really need a second screen?

Shadow Atlas is built exactly for that scenario: the game master in Obsidian, the party on a shared screen. Technically it also works without one — a window pointing at `http://localhost:<port>` on the same machine is enough — but the benefit (fog of war, layers only the game master can see) really shows once the views are separate.

## Is campaign data uploaded to a cloud?

No. Every map stays a `.samap` file in your vault, with its resources next to it in `.cow-shadow-atlas/<id>/`. The local server only runs on your own network; the documentation website itself is fully static and transmits no campaign data.

## Is the server safe to expose to the internet?

No. The local server offers no authentication or encryption. Only enable LAN access on a trusted network and never expose the port to the internet. Details: [Server](./guides/server/).

## Does the website work without JavaScript?

The project site is generated statically with Astro and ships no client JavaScript of its own. Starlight may deliver small client-side scripts for convenience features such as search and navigation; the documentation content is rendered statically.

## How can I help?

Issues, roadmap and contribution notes live in the respective repositories under [github.com/Chronicle-of-Whispers](https://github.com/Chronicle-of-Whispers). The intended workflow is described on the [Development / API page](./reference/development-api/).

## Where do I report bugs?

Through the issue tracker of the relevant GitHub repository under [Chronicle-of-Whispers](https://github.com/Chronicle-of-Whispers). For general enquiries: [chronicleofwhispers@outlook.com](mailto:chronicleofwhispers@outlook.com).
