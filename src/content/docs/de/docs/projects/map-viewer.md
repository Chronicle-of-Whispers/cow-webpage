---
title: Map Viewer
description: Die Three.js-Kartenengine hinter Shadow Atlas.
---

Map Viewer ist die vanilla-JavaScript-Kartenengine (Three.js), die [Shadow Atlas](../shadow-atlas/) antreibt: sie liefert das `<map-viewer>`-Custom-Element sowohl für die Editor-Ansicht in Obsidian als auch für die schreibgeschützte Tischansicht, die der lokale Server an den Bildschirm am Spieltisch ausliefert. Map Viewer ist kein eigenständig installierbares Produkt, sondern die Engine im Hintergrund.

## Funktionen

- Zoombare, per Maus/Touch verschiebbare Kartenansicht mit Zentrieren und 90°-Rotation.
- **Fog of War** mit vier Werkzeugen: Circle, Square, Rectangle, Polygon.
- **Objekte**: Pins (15 Formen + eigene Uploads, 12 Farben), Bilder und Videos, mit Label, Beschreibung (Markdown) und Links.
- **Layer-System**: beliebig viele Objekt-Layer plus die immer vorhandenen Fog-, Grid- und Map-Layer, jeweils mit Sichtbarkeit, Spieler-Sichtbarkeit und Sperre.
- **Live Cursor**: die eigene Zeigerposition an den Tischbildschirm senden.
- **Zwei visuelle Themes**: `obsidian` (übernimmt Farben/Schrift des aktiven Obsidian-Themes) und `default` (fester dunkler Look).
- Automatisches Speichern von Fog, Objekten und Kameraposition nach jeder Änderung.

Vollständige Bedienung: [Shortcuts](../../reference/shortcuts/).

## Editor- und Tischansicht

Dieselbe Engine läuft in zwei Modi: die volle Editor-Ansicht in Obsidian (`player`-Attribut aus) und die schreibgeschützte Tischansicht auf dem gemeinsamen Bildschirm (`player`-Attribut an). Im Tischmodus sind nur Zoom und Pan erlaubt, Fog wird immer vollständig deckend gerendert, und Video-Ton bleibt stets stummgeschaltet — der Ton kommt bewusst von der Spielleitung.

## Standalone-Entwicklung

Ohne Obsidian lässt sich die Engine direkt über [index.html](https://github.com/Chronicle-of-Whispers) und einen lokalen Webserver ausprobieren:

```sh
python scripts/startServer.py   # oder scripts/startServer.bat unter Windows
```

Anschließend `http://localhost:8000` öffnen. Details zu Build, API und Tests: [Development / API](../../reference/development-api/).
