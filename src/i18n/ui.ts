import { sitePath } from '../utils/paths';

export const LANGUAGES = ['en', 'de'] as const;
export type Lang = (typeof LANGUAGES)[number];

export const DEFAULT_LANG: Lang = 'en';

/** Build a site-absolute path for the given language ('en' lives at the root, 'de' under /de). */
export function localePath(lang: Lang, path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return sitePath(lang === DEFAULT_LANG ? normalized : `/${lang}${normalized}`);
}

export const ui = {
  de: {
    htmlLang: 'de',
    ogLocale: 'de_DE',
    skipLink: 'Zum Inhalt springen',

    'meta.home.title': 'Chronicle of Whispers — Werkzeuge für jede Geschichte',
    'meta.home.description':
      'Battle Maps aus dem Obsidian-Vault auf den Spieltisch-Bildschirm — quelloffene Werkzeuge für Pen-&-Paper- und Tabletop-Kampagnen.',
    'meta.404.title': 'Seite nicht gefunden — Chronicle of Whispers',
    'meta.404.description': 'Die angeforderte Seite wurde nicht gefunden.',

    'brand.home': 'Chronicle of Whispers – Startseite',

    'nav.projects': 'Projekte',
    'nav.features': 'Funktionen',
    'nav.docs': 'Dokumentation',
    'nav.github': 'GitHub',
    'nav.language': 'Sprache wechseln',

    'hero.eyebrow': 'Quelloffene Kampagnen-Werkzeuge',
    'hero.titleLead': 'Jede Welt hat ihr',
    'hero.titleAccent': 'Flüstern.',
    'hero.lede':
      'Chronicle of Whispers bringt Karten, Wissen und Spielleitung zusammen — und die Karte dahin, wo sie hingehört: auf den Bildschirm am Spieltisch.',
    'hero.ctaDocs': 'Dokumentation',
    'hero.ctaGithub': 'Auf GitHub ansehen',
    'hero.meta1': 'Open Source',
    'hero.meta2': 'Für Obsidian',
    'hero.meta3': 'Für den Spieltisch',
    'hero.visualLabel': 'Abstrakte Vorschau einer Kampagnenkarte',
    'hero.imageAlt': 'Vorschau von Shadow Atlas',
    'hero.cardLabel': 'ENTDECKT',
    'hero.cardTitle': 'Die Aschenküste',

    'projects.eyebrow': 'Die Sammlung',
    'projects.title': 'Werkzeuge für das Verborgene.',
    'projects.text':
      'Jedes Projekt löst ein konkretes Problem am Spieltisch — offen, fokussiert und miteinander kombinierbar.',
    'projects.shadowAtlas.name': 'Shadow Atlas',
    'projects.shadowAtlas.description':
      'Battle Maps aus dem Obsidian-Vault auf den Bildschirm am Spieltisch: Fog of War, Pins, Bilder und Videos — live auf TV, zweitem Monitor oder Tablets.',
    'projects.shadowAtlas.status': 'v1.0.0',
    'projects.mapViewer.name': 'Map Viewer',
    'projects.mapViewer.description':
      'Die Three.js-Kartenengine hinter Shadow Atlas — liefert die Editor-Ansicht und die schreibgeschützte Tischansicht.',
    'projects.mapViewer.status': 'Engine',
    'projects.next.name': 'Was als Nächstes kommt',
    'projects.next.description':
      'Weitere kleine Werkzeuge entstehen entlang echter Kampagnen: modular, statisch dokumentiert und offen für Beiträge.',
    'projects.next.status': 'Roadmap',
    'projectCard.more': 'Mehr erfahren',
    'projectCard.soon': 'In Vorbereitung',
    'projectCard.download': 'Release herunterladen',
    'projectCard.source': 'Quellcode',

    'showcase.eyebrow': 'Ein Fenster in deine Welt',
    'showcase.title': 'Entworfen, um der Geschichte nicht im Weg zu stehen.',
    'showcase.text':
      'Eine ruhige, klare Oberfläche gibt Karten und Kampagnenwissen den Raum, den sie brauchen.',
    'gallery.mapViewer.alt': 'Abstrakte Vorschau des Map Viewers mit Karte und Markierungen',
    'gallery.mapViewer.label': 'Map Viewer',
    'gallery.mapViewer.caption': 'Karten erkunden, ohne Geheimnisse zu verraten.',
    'gallery.vault.alt': 'Abstrakte Vorschau einer Obsidian-Seitenleiste',
    'gallery.vault.label': 'Vault-nativ',
    'gallery.vault.caption': 'Deine Kampagne bleibt dort, wo sie hingehört.',

    'features.eyebrow': 'Mit Absicht gebaut',
    'features.title': 'Kampagnen-Werkzeuge ohne Ballast.',
    'features.obsidian.title': 'Obsidian zuerst',
    'features.obsidian.text':
      'Fügt sich in bestehende Vaults und Markdown-Workflows ein, statt ein neues Datensilo aufzubauen.',
    'features.fog.title': 'Fog of War',
    'features.fog.text':
      'Vier Werkzeuge — Circle, Square, Rectangle, Polygon — enthüllen nur, was die Gruppe wirklich sehen soll.',
    'features.server.title': 'Lokal & verbunden',
    'features.server.text':
      'Ein lokaler Server läuft automatisch mit — Tisch-TV, zweiter Monitor oder Tablets öffnen einfach eine URL.',
    'features.source.title': 'Offen von Haus aus',
    'features.source.text':
      'Quelloffen, erweiterbar und ohne Abhängigkeit von einer proprietären Hosting-Plattform.',

    'release.eyebrow': 'Folge der Spur',
    'release.title': 'Neues Flüstern nimmt Gestalt an.',
    'release.text': 'Folge Releases, Roadmap und Entwicklung direkt auf GitHub.',
    'release.cta': 'GitHub Releases',

    'footer.tagline': 'Werkzeuge für Welten, die weitererzählt werden wollen.',
    'footer.project': 'Projekt',
    'footer.docs': 'Dokumentation',
    'footer.github': 'GitHub',
    'footer.releases': 'Releases',
    'footer.legal': 'Rechtliches',
    'footer.license': 'GPL-3.0-or-later',
    'footer.contact': 'Kontakt',
    'footer.madeFor': 'Für Erzählerinnen und Erzähler.',

    '404.eyebrow': '404 · Spur verloren',
    '404.titleLead': 'Verloren im',
    '404.titleAccent': 'Flüstern.',
    '404.text': 'Diese Seite existiert nicht oder wurde an einen anderen Ort verschoben.',
    '404.cta': 'Zur Startseite',
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    skipLink: 'Skip to content',

    'meta.home.title': 'Chronicle of Whispers — Tools for every story',
    'meta.home.description':
      'Battle maps from your Obsidian vault onto the screen at your game table — open-source tools for pen-and-paper and tabletop campaigns.',
    'meta.404.title': 'Page not found — Chronicle of Whispers',
    'meta.404.description': 'The requested page could not be found.',

    'brand.home': 'Chronicle of Whispers – Home',

    'nav.projects': 'Projects',
    'nav.features': 'Features',
    'nav.docs': 'Documentation',
    'nav.github': 'GitHub',
    'nav.language': 'Switch language',

    'hero.eyebrow': 'Open-source campaign tools',
    'hero.titleLead': 'Every world has',
    'hero.titleAccent': 'whispers.',
    'hero.lede':
      'Chronicle of Whispers brings maps, knowledge and game mastering together — and puts the map where it belongs: on the screen at your game table.',
    'hero.ctaDocs': 'Documentation',
    'hero.ctaGithub': 'View on GitHub',
    'hero.meta1': 'Open source',
    'hero.meta2': 'For Obsidian',
    'hero.meta3': 'For the game table',
    'hero.visualLabel': 'Abstract preview of a campaign map',
    'hero.imageAlt': 'Preview of Shadow Atlas',
    'hero.cardLabel': 'DISCOVERED',
    'hero.cardTitle': 'The Ashen Coast',

    'projects.eyebrow': 'The collection',
    'projects.title': 'Tools for the unseen.',
    'projects.text':
      'Every project solves one concrete problem at the game table — open, focused and made to work together.',
    'projects.shadowAtlas.name': 'Shadow Atlas',
    'projects.shadowAtlas.description':
      'Battle maps from your Obsidian vault onto the screen at your table: fog of war, pins, images and videos — live on a TV, a second monitor or tablets.',
    'projects.shadowAtlas.status': 'v1.0.0',
    'projects.mapViewer.name': 'Map Viewer',
    'projects.mapViewer.description':
      'The Three.js map engine behind Shadow Atlas — it powers both the editor view and the read-only table view.',
    'projects.mapViewer.status': 'Engine',
    'projects.next.name': 'What comes next',
    'projects.next.description':
      'More small tools grow out of real campaigns: modular, statically documented and open to contributions.',
    'projects.next.status': 'Roadmap',
    'projectCard.more': 'Learn more',
    'projectCard.soon': 'In preparation',
    'projectCard.download': 'Download release',
    'projectCard.source': 'Source code',

    'showcase.eyebrow': 'A window into your world',
    'showcase.title': "Designed to stay out of the story's way.",
    'showcase.text':
      'A calm, uncluttered interface gives maps and campaign knowledge the room they need.',
    'gallery.mapViewer.alt': 'Abstract preview of the Map Viewer with a map and markers',
    'gallery.mapViewer.label': 'Map Viewer',
    'gallery.mapViewer.caption': 'Explore maps without giving away secrets.',
    'gallery.vault.alt': 'Abstract preview of an Obsidian sidebar',
    'gallery.vault.label': 'Vault-native',
    'gallery.vault.caption': 'Your campaign stays where it belongs.',

    'features.eyebrow': 'Built with intent',
    'features.title': 'Campaign tools, without the noise.',
    'features.obsidian.title': 'Obsidian-first',
    'features.obsidian.text':
      'Fits into existing vaults and Markdown workflows instead of building yet another data silo.',
    'features.fog.title': 'Fog of war',
    'features.fog.text':
      'Four tools — circle, square, rectangle, polygon — reveal only what the party is meant to see.',
    'features.server.title': 'Local & connected',
    'features.server.text':
      'A local server runs automatically — a table TV, a second monitor or tablets just open a URL.',
    'features.source.title': 'Open by default',
    'features.source.text':
      'Open source, extensible and free of any proprietary hosting platform.',

    'release.eyebrow': 'Follow the trail',
    'release.title': 'New whispers are taking shape.',
    'release.text': 'Follow releases, roadmap and development directly on GitHub.',
    'release.cta': 'GitHub releases',

    'footer.tagline': 'Tools for worlds that want to be told.',
    'footer.project': 'Project',
    'footer.docs': 'Documentation',
    'footer.github': 'GitHub',
    'footer.releases': 'Releases',
    'footer.legal': 'Legal',
    'footer.license': 'GPL-3.0-or-later',
    'footer.contact': 'Contact',
    'footer.madeFor': 'Made for storytellers.',

    '404.eyebrow': '404 · Trail lost',
    '404.titleLead': 'Lost in the',
    '404.titleAccent': 'whispers.',
    '404.text': 'This page does not exist or has been moved somewhere else.',
    '404.cta': 'Back to home',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)['de'];

/** Returns a lookup function for the given language. */
export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key];
  };
}
