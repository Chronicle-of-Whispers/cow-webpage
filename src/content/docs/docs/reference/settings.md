---
title: Settings
description: Alle Einstellungen von Shadow Atlas im Überblick.
---

Alle Einstellungen befinden sich unter **Settings → Community plugins → Chronicle of Whispers - Shadow Atlas**.

## Allgemein

| Einstellung | Beschreibung |
| --- | --- |
| Language | `Auto` (folgt der Obsidian-Anzeigesprache), `English (US)` oder `Deutsch (AT)`. Wirkt auf Plugin-Texte und die Spieler-Seite. |
| Map viewer style | `Derive from Obsidian style` übernimmt Farben/Schrift aus dem aktiven Obsidian-Theme; `Default` verwendet das feste dunkle Erscheinungsbild der Engine. |

## Server

| Einstellung | Beschreibung |
| --- | --- |
| Port mode | `Fixed` (ein fester Port) oder `Range` (erster freier Port aus einem Bereich). |
| Port *(bei Fixed)* | Fester TCP-Port, 1024–65535. Ist er belegt, bleibt Sharing deaktiviert. |
| Port range start / end *(bei Range)* | Bereich, aus dem der erste freie Port gewählt wird. Standard: **8000–8099**. Ende muss ≥ Start sein. |
| Allow access from other devices (LAN) | Standard **an**: Server bindet an `0.0.0.0`, Spieler im selben Netzwerk können verbinden. Aus: nur `127.0.0.1` (dieser Rechner). |
| Apply changes → Restart server | Änderungen an Port/LAN-Einstellungen werden erst nach einem Neustart des lokalen Servers wirksam. |

## Map defaults

| Einstellung | Beschreibung |
| --- | --- |
| Default live view | Startzustand von **Live View** für neu erstellte Karten. Standard: an. |
| Map history length | Anzahl der Einträge im Karten-Verlauf des Share Docks. Standard 5, max. 100. |
| Overlay history length | Anzahl der Einträge im Overlay-Verlauf des Share Docks. Standard 5, max. 100. |
| Inline reading-mode share button | Zeigt beim Überfahren von Lesemodus-Inhalten einen kleinen Share-Button. Standard: an. |

## Layer templates

Legt fest, welche Objekt-Layer jede neue Karte automatisch erhält (Standard: ein Layer **Tokens**), sowie die Position der immer vorhandenen **Fog**-Ebene innerhalb dieses Stapels (0 = ganz vorne). Reihenfolge und Sichtbarkeit lassen sich per Pfeil-Buttons anpassen; die Fog-Ebene selbst ist unlöschbar und für Spieler immer sichtbar.

## Pin icons

Verwaltet die im Objekt-Eigenschaften-Panel verfügbaren Pin-Symbole:

- 15 eingebaute Formen (Teardrop, Circle, Square, Diamond, Star, Chest, Exclamation, NPC, Cross, Xmark, Dot, X, Triangle, Heart, Hexagon).
- Eigene Uploads per Drag & Drop: SVG, PNG, JPEG, WebP oder GIF, **maximal 512 KB**. Eingefärbte SVGs (mit `{{COLOR}}`-Platzhalter) können wie die eingebauten Formen eine Pin-Farbe annehmen.
- Reihenfolge per Drag oder Pfeil-Buttons; **Restore default pins** setzt die Liste auf die 15 Standard-Formen zurück (eigene Uploads bleiben auf der Festplatte, verschwinden aber aus der Liste).

## Other

| Einstellung | Beschreibung |
| --- | --- |
| Apply changes | Startet den lokalen Server neu, damit Port-/LAN-Änderungen greifen. |
| Current address | Zeigt die Adresse, unter der Spieler aktuell verbinden (nur sichtbar, wenn der Server läuft). |
