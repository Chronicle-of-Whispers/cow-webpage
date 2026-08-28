---
title: Installation
description: Shadow Atlas manuell aus einem Release installieren.
---

Shadow Atlas durchläuft aktuell noch den Review-Prozess für den Obsidian Community-Plugin-Store. Bis dahin wird das Plugin manuell aus einem GitHub Release installiert.

## Voraussetzungen

- Obsidian **1.8.7** oder neuer.
- **Desktop** Obsidian (Windows, macOS, Linux) — das Plugin startet einen lokalen Node-Server und läuft nicht auf Obsidian Mobile.
- Ein Bildschirm für den Spieltisch: Tisch-TV, Beamer, zweiter Monitor oder die Tablets der Mitspielenden — jeweils mit einem modernen Browser im selben lokalen Netzwerk. Ein zweiter Monitor am selben Rechner kommt auch ohne Netzwerk aus (`http://localhost:<port>`).
- Für die Entwicklung aus dem Quellcode zusätzlich Node.js 18 oder neuer und Git.

## Installation aus einem Release

1. Öffne die [Repositories auf GitHub](https://github.com/Chronicle-of-Whispers).
2. Lade das Release-Archiv des Plugins herunter.
3. Entpacke es nach `<Vault>/.obsidian/plugins/cow-shadow-atlas/`. Das Archiv enthält `main.js`, `manifest.json`, `styles.css`, den `locales/`-Ordner und den `www/`-Ordner mit der Spieler-Seite.
4. In Obsidian unter **Settings → Community plugins** die Option **Restricted mode** deaktivieren (falls aktiv) und **Chronicle of Whispers - Shadow Atlas** aktivieren.

## Firewall

Damit Geräte im LAN — Tisch-TV, Tablets, ein zweiter Rechner — verbinden können, muss eingehender Traffic auf dem gewählten Port (Standard-Bereich `8000`–`8099`, siehe [Server](./guides/server/)) für Obsidian erlaubt sein. Für einen zweiten Monitor am selben Rechner ist das nicht nötig.

## Aus dem Quellcode

Das Plugin bündelt die [Map-Viewer-Engine](./projects/map-viewer/) aus einem Geschwisterordner. Details zu Build, Ordnerstruktur und dem `MAPVIEWER_SRC`-Override stehen unter [Development / API](./reference/development-api/).

## Nächster Schritt

Lege anschließend mit [Getting Started](./getting-started/) deine erste Karte an.
