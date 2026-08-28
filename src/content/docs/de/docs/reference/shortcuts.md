---
title: Shortcuts
description: Maus- und Tastaturbedienung des Map Viewer.
---

Dieselbe Referenz ist in jeder Kartenansicht über die Toolbar-Schaltfläche **Help** verfügbar.

## Navigation

| Eingabe | Wirkung |
| --- | --- |
| Mausrad | Zoom zum Cursor |
| Linke Maustaste + Ziehen (leerer Bereich) | Karte verschieben |
| Mittlere Maustaste + Ziehen | Karte verschieben, auch über Objekten |
| Doppelklick auf Objekt | Objekt auswählen und Eigenschaften öffnen |
| Toolbar: **Center** | Kamera auf den Karteninhalt zentrieren |

## Fog of War

| Eingabe | Wirkung |
| --- | --- |
| Shift halten (Zeiger über der Karte) | Fog-Modus betreten, `Esc` verlässt ihn |
| Im Fog-Modus: linke Maustaste | Fog entfernen |
| Im Fog-Modus: rechte Maustaste | Fog hinzufügen |
| Im Fog-Modus: Mausrad | Werkzeuggröße ändern (beim Polygon-Werkzeug zoomt das Rad weiter) |
| Toolbar: **Fog Tool** | Form (Circle, Square, Rectangle, Polygon) und Größe wählen |
| Circle / Square vs. Rectangle | Circle und Square malen während des Ziehens; das Rechteck wird aufgezogen und erst beim Loslassen gefüllt |
| Polygon | Klicks setzen Eckpunkte; der grüne Haken am letzten Punkt füllt die Fläche, `Esc` bricht ab |
| Toolbar: **Fog** → **Clear All** | Gesamten Fog entfernen |
| Toolbar: **Fog** → **Restore All** | Gesamte Karte wieder mit Fog bedecken |

## Objekte

| Eingabe | Wirkung |
| --- | --- |
| Rechtsklick auf leeren Bereich | Kontextmenü → Objekt hinzufügen (Pin, Bild, Video) |
| Rechtsklick auf Objekt | Kontextmenü: Layer ändern, Eigenschaften, Popover lösen, Links öffnen, löschen |
| Linke Maustaste + Ziehen | Objekt auswählen und verschieben |
| Griffe am ausgewählten Objekt | Größe ändern und rotieren; Shift löst das Seitenverhältnis oder rastet den Winkel |
| Pfeiltasten (mit Shift größere Schritte) | Ausgewähltes Objekt verschieben |
| Entf | Ausgewähltes Objekt löschen |
| Strg+C / Strg+X / Strg+V | Kopieren / Ausschneiden / Einfügen |
| Bild- oder Videodatei auf die Karte ziehen | Objekt direkt aus der Datei erstellen |

## Live Cursor

| Eingabe | Wirkung |
| --- | --- |
| Leertaste halten | Eigene Zeigerposition an die Spieleransicht senden |
| Toolbar: **Live Cursor** | Größe und Farbe des übertragenen Zeigers einstellen |

## Layer

| Eingabe | Wirkung |
| --- | --- |
| Layer-Panel (unten links) | Klick auf den Kopf klappt es auf/zu |
| `+`-Button | Neuen Objekt-Layer anlegen und sofort benennen |
| Drag & Drop | Layer (inkl. Fog-Layer) neu anordnen |
| Augen-Symbol | Layer in dieser Ansicht ein-/ausblenden |
| Spieler-Symbol | Layer in der Spieleransicht ein-/ausblenden |
| Schloss-Symbol | Layer sperren: Objekte lassen sich nicht mehr auswählen oder verschieben |
| Klick auf Layer | Eigenschaften öffnen (Umbenennen, Sichtbarkeit, Sperre) |
| Rechtsklick auf Layer | Eigenschaften / Löschen |

## Speichern & Laden

Fog, Objekte und die Kameraposition werden nach jeder Änderung automatisch gespeichert — im Obsidian-Plugin in den Vault, im eigenständigen Viewer in die IndexedDB des Browsers. Der Punkt in der Statusleiste zeigt ungesicherte Änderungen an.
