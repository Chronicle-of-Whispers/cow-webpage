---
title: Sharing
description: Karten, Bilder, Videos und Notizen live auf den Spieltisch-Bildschirm bringen.
---

Shadow Atlas unterscheidet zwei Arten von Freigaben: eine **Karte** teilen und ein **Overlay** (Bild, Video oder Textausschnitt) teilen. Beide erscheinen auf der Tisch-/Spieleransicht, aber nie gleichzeitig — eine neu geteilte Karte beendet ein aktives Overlay und umgekehrt.

Die Tischansicht ist eine gewöhnliche Webseite: einmal im Browser des Tischbildschirms geöffnet (am besten im Vollbild), bleibt sie den ganzen Abend stehen und aktualisiert sich selbst.

## Eine Karte teilen

- Header-Aktion **Share with players** in der Kartenansicht, oder
- Rechtsklick auf den Tab / **⋮**-Menü → **[CoW] - Share in Shadow Atlas**, oder
- Befehl **Share current map with players**.

### Live View

Der Kopfleisten-Schalter **Live View** bestimmt, ob Änderungen automatisch übertragen werden:

- **aktiv** — jede Änderung (Fog, Objekte, Kartenbild) wird sofort an Spieler gesendet.
- **inaktiv** — Änderungen bleiben lokal, bis erneut **Share with players** gedrückt wird.

Der Startzustand neuer Karten wird über die Einstellung **Default live view** festgelegt.

### Live Pan & Zoom

Der Schalter **Live Pan & Zoom** spiegelt die Kamera (Position + Zoom) der Spielleitung live an alle verbundenen Spieler und sperrt währenddessen deren eigene Pan-/Zoom-Eingaben. Der Zustand ist bewusst **nicht persistent** und ohne eigene Einstellung — er startet nach jedem Obsidian-Neustart deaktiviert.

### Live Cursor

Leertaste gedrückt halten, um die eigene Zeigerposition als farbigen Punkt an die Spieler-Seite zu senden. Größe und Farbe lassen sich in der Toolbar unter **Live Cursor** einstellen.

## Ein Overlay teilen

Überträgt Bilder, Videos oder Textausschnitte als eigenständige Ansicht auf die Spieler-Seite, ohne die aktuell geteilte Karte zu verlassen (sie wird beim Beenden des Overlays wiederhergestellt).

Einstiegspunkte:

- **Datei-Menü** auf eine Markdown-, Bild-, Video- oder `.samap`-Datei.
- **Editor-Auswahl** — markierten Text per Kontextmenü teilen.
- **Aktiver Tab** über den Befehl **Share active tab with players** (teilt bevorzugt eine Lesemodus-Auswahl, sonst den ganzen Tab).
- **Lesemodus-Kontextmenü** auf einem Bild oder Video.
- **Inline-Share-Button**, der beim Überfahren von Bildern, Videos, Zitatblöcken und Überschriften im Lesemodus erscheint (abschaltbar über die Einstellung **Inline reading-mode share button**).

Geteilte Videos werden im Share Dock mit nativen Steuerelementen angezeigt; Play/Pause/Seek dort steuert die Wiedergabe auf der Spieler-Seite. Spieler hören dabei nie Ton — nur Bild und Zeitstempel werden synchronisiert.

## Share Dock

Rechte Seitenleiste (Befehl **Open share dock**), zwei Tabs:

- **Maps** — aktuell geteilte Karte plus Verlauf (Länge über **Map history length** einstellbar). Aktionen je Eintrag: **Go to source**, **Share again**, **Delete from history**; die aktive Karte zusätzlich **Stop sharing this map**.
- **Overlays** — aktuelles Overlay plus Verlauf (Länge über **Overlay history length**), gleiche Aktionen, zusätzlich **Close current share**.

Eine Adress-Pille am Kopf des Docks zeigt `ip:port`; ein Klick kopiert die vollständige Spieler-URL in die Zwischenablage.

## Über einen Obsidian-Neustart hinweg

Der aktuell geteilte Zustand (Karte, Overlay, beide Verläufe) wird persistiert und beim nächsten Start automatisch wiederhergestellt — die Freigabe muss nach einem Neustart nicht erneut gestartet werden.
