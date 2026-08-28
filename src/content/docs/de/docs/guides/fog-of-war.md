---
title: Fog of War
description: Verdeckte Kartenbereiche malen, freigeben und für Spieler steuern.
---

Fog of War trennt die vollständige Ansicht der Spielleitung von dem Ausschnitt, den die Gruppe bereits entdeckt hat. Auf der Spieler-Seite wird Fog immer vollständig deckend gerendert — die im Editor eingestellte Deckkraft betrifft nur die eigene Ansicht.

## Bedienung

1. **Shift** gedrückt halten, während der Zeiger über der Karte ist, um den Fog-Modus zu betreten (`Esc` verlässt ihn wieder).
2. **Linke Maustaste** entfernt Fog, **rechte Maustaste** fügt Fog hinzu.
3. **Mausrad** ändert die Werkzeuggröße (beim Polygon-Werkzeug zoomt das Rad stattdessen weiter).
4. In der Toolbar unter **Fog Tool** zwischen **Circle**, **Square**, **Rectangle** und **Polygon** wählen.

Circle und Square malen direkt während des Ziehens; das Rechteck wird aufgezogen und erst beim Loslassen gefüllt. Beim Polygon-Werkzeug setzt jeder Klick einen Eckpunkt — ein Klick auf den grünen Haken am letzten Punkt füllt die Fläche, `Esc` bricht ab.

Über **Fog** → **Clear All** lässt sich der gesamte Fog auf einen Schlag entfernen, über **Restore All** die ganze Karte wieder verdecken.

## Fog-Ebene

Fog ist immer vorhanden und kann in den [Layer-Templates](../../reference/settings/#layer-templates) an beliebiger Stelle im Stapel platziert werden — vor oder hinter beliebig vielen Objekt-Layern. Deckkraft und Sichtbarkeit der eigenen Ansicht lassen sich im Eigenschaften-Panel der Fog-Ebene einstellen.

:::danger[Keine Sicherheitsgrenze]
Fog of War ist eine Präsentationsfunktion, kein Zugriffsschutz. Die Spieler-Seite und der lokale Server verwenden keine Authentifizierung — jeder mit Netzwerkzugriff auf den freigegebenen Port kann sich verbinden. Öffne den Server nicht zum Internet und teile das Netzwerk nur mit Personen, die auch den vollständigen Karteninhalt sehen dürfen.
:::

## Synchronisation

Ist [Live View](../sharing/#live-view) aktiv, sehen Spieler jede Fog-Änderung sofort. Ist es deaktiviert, wird der aktuelle Stand erst beim nächsten manuellen **Share with players** übertragen.
