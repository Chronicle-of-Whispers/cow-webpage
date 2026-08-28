---
title: Server
description: Den lokalen Server für die Spieleransicht konfigurieren und betreiben.
---

Shadow Atlas startet automatisch einen lokalen HTTP/WebSocket-Server, sobald das Plugin lädt. Er liefert die Ansicht für den Bildschirm am Spieltisch aus und läuft, solange Obsidian offen ist — ein separater Startbefehl ist nicht nötig.

## Adresse finden

- Die Kartenansicht zeigt die Adresse für den Tischbildschirm als kleine Pille unten links (z. B. `http://192.168.0.10:8000`).
- Der [Share Dock](../sharing/#share-dock) zeigt dieselbe Adresse am Kopf; ein Klick kopiert die vollständige URL.
- In den Plugin-Einstellungen erscheint sie zusätzlich unter **Current address**, sobald der Server läuft.

## Konfiguration

| Einstellung | Standard | Bedeutung |
| --- | --- | --- |
| Port mode | `Range` | `Fixed` (ein Port) oder `Range` (erster freier Port im Bereich). |
| Port / Port range | `8000`–`8099` | Gültiger Bereich: 1024–65535. |
| Allow access from other devices (LAN) | an | An: Server bindet an `0.0.0.0` (Tisch-TV, Tablets und andere Geräte im LAN). Aus: nur `127.0.0.1` — genügt für einen zweiten Monitor am selben Rechner. |

Änderungen wirken erst nach **Apply changes → Restart server** in den Einstellungen.

Vollständige Liste aller Einstellungen: [Settings](../../reference/settings/).

## Wenn kein Port frei ist

Findet Shadow Atlas beim Start keinen freien Port im konfigurierten Bereich, bleibt das Plugin voll funktionsfähig — nur die Tischansicht ist deaktiviert, bis ein Port frei wird oder die Einstellungen angepasst werden.

## Sicherheit

Der Server bietet **keine Authentifizierung und keine Verschlüsselung**. Jeder mit Zugriff auf den freigegebenen Port und die Adresse kann die geteilte Karte sehen. Aktiviere **Allow access from other devices** nur in einem vertrauenswürdigen lokalen Netzwerk und öffne den Port niemals zum Internet (z. B. per Port-Forwarding).
