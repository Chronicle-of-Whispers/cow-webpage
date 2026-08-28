---
title: Shadow Atlas
description: Obsidian-Plugin, das Battle Maps auf den Bildschirm am Spieltisch bringt.
---

Shadow Atlas ist für den **Spieltisch mit Bildschirm** konzipiert: einen Fernseher oder Monitor in der Tischmitte, einen zweiten Bildschirm neben der Spielleitung oder Tablets der Mitspielenden. Die Spielleitung arbeitet in Obsidian an der vollständigen Karte, während auf dem Tischbildschirm nur das erscheint, was die Gruppe sehen soll.

Eine `.samap`-Datei im Vault wird dabei zur voll interaktiven Battle Map: Fog of War malen, Pins, Bilder und Videos platzieren, ein Grid einblenden und Kartenobjekte mit anderen Notizen verknüpfen. Ein eingebauter lokaler Webserver liefert die Tischansicht — jedes Gerät im selben Netzwerk öffnet dafür nur eine URL im Browser, ohne Installation.

## Typische Aufbauten

- **Tisch-TV oder Beamer**: ein Browser im Vollbild auf dem gemeinsamen Bildschirm zeigt die freigegebene Karte.
- **Zweiter Monitor**: die Spielleitung behält Obsidian auf dem Hauptbildschirm, die Gruppe sieht den zweiten.
- **Eigene Geräte**: Tablets oder Laptops der Mitspielenden verbinden sich parallel auf dieselbe Adresse.

## Funktionen

- **Battle-Map-Ansicht** für `.samap`-Dateien, angetrieben von der gebündelten [Map-Viewer-Engine](../map-viewer/).
- **Fog of War** mit Circle-, Rectangle-, Square- und Polygon-Werkzeug.
- **Pins, Bilder, Videos und ein Grid**, die sich auf der Karte platzieren und verschieben lassen.
- **Live-Spieleransicht** im LAN — der Tischbildschirm öffnet einfach eine URL im Browser.
- **Live View** überträgt jede Kartenänderung sofort, oder du teilst bei Bedarf manuell.
- **Live Pan & Zoom**, damit die Spieleransicht der Kamera der Spielleitung folgt.
- **Share Dock** — eine Seitenleiste zum Teilen und erneuten Teilen von Karten, Bildern, Videos und Notizausschnitten, jeweils mit eigenem Verlauf.
- **Overlay-Sharing** aus dem Datei-Menü, einer Editor-Auswahl, dem aktiven Tab oder Lesemodus-Bildern/-Videos, optional mit einem Inline-Share-Button.
- **Objekt-Links**, die Kartenobjekte mit Notizen und Überschriften im Vault verbinden.
- **Lokalisierung** (Englisch/Deutsch), folgt der Obsidian-Anzeigesprache.

Details zu allen Einstellungen: [Settings](../../reference/settings/). Bedienung von Sharing und Live-Funktionen: [Sharing](../../guides/sharing/).

## Workflow

1. Rechtsklick auf einen Ordner → **[CoW] - New shadow atlas map**, dann die neue `.samap`-Datei öffnen.
2. Ein Bild oder Video auf die Karte ziehen, um das Basisbild zu setzen.
3. Über die Kopfleiste **Share with players**, **Live Pan & Zoom** oder **Live View** aktivieren.
4. Objekte (Pins, Bilder, Videos) platzieren, mit Notizen verlinken (Popover-Link) oder direkt zu einer Vault-Datei verlinken (Obsidian-Link).
5. Bei Bedarf im [Share Dock](../../guides/sharing/) Bilder, Videos oder Notizausschnitte zusätzlich teilen.

## Datenhaltung

Jede `.samap`-Datei bleibt eine gewöhnliche, lesbare JSON-Datei im Vault. Die zugehörigen Ressourcen (Fog-Maske, Objektgraph, Basisbild) liegen daneben in einem versteckten Ordner `.cow-shadow-atlas/<map-id>/`. Wird eine `.samap`-Datei per „Make a copy" dupliziert, erhält die Kopie automatisch eine neue ID und eine eigene Kopie ihrer Ressourcen, sodass beide Karten unabhängig voneinander bleiben.

:::note[Voraussetzungen]
Shadow Atlas benötigt Obsidian 1.8.7 oder neuer und läuft nur auf dem **Desktop** (der lokale Server ist Node-basiert). Für den Tischbildschirm genügt ein beliebiges Gerät mit modernem Browser im selben Netzwerk.
:::

## Status

Aktuelle Version: **1.0.0**, Lizenz [GPL-3.0-or-later](https://github.com/Chronicle-of-Whispers). Der Community-Plugin-Review bei Obsidian steht noch aus — bis dahin erfolgt die Installation manuell aus einem GitHub Release (siehe [Installation](../../installation/)).
