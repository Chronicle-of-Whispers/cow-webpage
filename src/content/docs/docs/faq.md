---
title: FAQ
description: Häufige Fragen zu Chronicle of Whispers.
---

## Ist Shadow Atlas bereits veröffentlicht?

Die aktuelle Version ist **1.0.0**. Ein Review durch den Obsidian Community-Plugin-Store steht noch aus, daher erfolgt die Installation vorerst manuell aus einem [GitHub Release](https://github.com/Chronicle-of-Whispers) (siehe [Installation](./installation/)).

## Ist die Nutzung kostenlos?

Ja. Shadow Atlas und der Map Viewer sind unter der [GPL-3.0-or-later](https://github.com/Chronicle-of-Whispers)-Lizenz quelloffen.

## Benötige ich Obsidian?

Für Shadow Atlas ja — und zwar die **Desktop**-Version (der lokale Server läuft nicht auf Obsidian Mobile). Der Bildschirm am Spieltisch braucht kein Obsidian, nur einen modernen Browser im selben Netzwerk.

## Brauche ich zwingend einen zweiten Bildschirm?

Shadow Atlas ist für genau dieses Szenario gebaut: Spielleitung in Obsidian, Gruppe am gemeinsamen Bildschirm. Technisch geht es auch ohne — ein Fenster mit `http://localhost:<port>` auf demselben Rechner reicht —, aber der Mehrwert (Fog of War, Layer nur für die Spielleitung) entfaltet sich erst mit einer getrennten Ansicht.

## Werden Kampagnendaten in eine Cloud geladen?

Nein. Jede Karte bleibt als `.samap`-Datei im Vault, ihre Ressourcen liegen daneben in `.cow-shadow-atlas/<id>/`. Der lokale Server läuft ausschließlich im eigenen Netzwerk; die Dokumentationswebsite selbst ist vollständig statisch und überträgt keine Kampagnendaten.

## Ist der Server sicher genug fürs Internet?

Nein. Der lokale Server bietet keine Authentifizierung oder Verschlüsselung. Aktiviere LAN-Zugriff nur in einem vertrauenswürdigen Netzwerk und öffne den Port niemals zum Internet. Details: [Server](./guides/server/).

## Funktioniert die Website ohne JavaScript?

Die Projektseite wird mit Astro statisch erzeugt und nutzt kein eigenes Client-JavaScript. Starlight kann für Komfortfunktionen wie Suche und Navigation kleine clientseitige Skripte ausliefern; die Dokumentationsinhalte werden statisch gerendert.

## Wie kann ich helfen?

Issues, Roadmap und Beitragshinweise finden sich in den jeweiligen Repositories unter [github.com/Chronicle-of-Whispers](https://github.com/Chronicle-of-Whispers). Der geplante Ablauf ist auf der [Development-/API-Seite](./reference/development-api/) beschrieben.

## Wo melde ich Fehler?

Über das Issue-Tracking im zuständigen GitHub-Repository unter [Chronicle-of-Whispers](https://github.com/Chronicle-of-Whispers). Für allgemeine Anfragen: [chronicleofwhispers@outlook.com](mailto:chronicleofwhispers@outlook.com).
