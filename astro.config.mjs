import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = process.env.SITE_URL || 'https://chronicle-of-whispers.github.io';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  integrations: [
    starlight({
      title: 'Chronicle of Whispers',
      description:
        'Battle Maps aus dem Obsidian-Vault auf den Spieltisch-Bildschirm: Fog of War, Pins, Bilder und Videos, live an TV, zweiten Monitor oder Tablets im lokalen Netzwerk.',
      logo: {
        src: './src/assets/logo-mark.svg',
        alt: 'Chronicle of Whispers',
      },
      favicon: '/logo/favicon.svg',
      disable404Route: true,
      defaultLocale: 'root',
      locales: {
        root: { label: 'Deutsch', lang: 'de' },
        en: { label: 'English', lang: 'en' },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Chronicle-of-Whispers',
        },
      ],
      editLink: {
        baseUrl:
          'https://github.com/Chronicle-of-Whispers/cow-webpage/edit/main/',
      },
      customCss: ['./src/styles/starlight.css'],
      sidebar: [
        {
          label: 'Zur Projektseite',
          translations: { en: 'Back to the project site' },
          link: '/',
        },
        {
          label: 'Einstieg',
          translations: { en: 'Start here' },
          items: [
            {
              label: 'Übersicht',
              translations: { en: 'Overview' },
              slug: 'docs',
            },
            {
              label: 'Installation',
              translations: { en: 'Installation' },
              slug: 'docs/installation',
            },
            {
              label: 'Getting Started',
              translations: { en: 'Getting started' },
              slug: 'docs/getting-started',
            },
          ],
        },
        {
          label: 'Projekte',
          translations: { en: 'Projects' },
          items: [
            { label: 'Shadow Atlas', slug: 'docs/projects/shadow-atlas' },
            { label: 'Map Viewer', slug: 'docs/projects/map-viewer' },
          ],
        },
        {
          label: 'Betrieb & Spielleitung',
          translations: { en: 'Running a session' },
          items: [
            {
              label: 'Server',
              translations: { en: 'Server' },
              slug: 'docs/guides/server',
            },
            {
              label: 'Sharing',
              translations: { en: 'Sharing' },
              slug: 'docs/guides/sharing',
            },
            {
              label: 'Fog of War',
              translations: { en: 'Fog of war' },
              slug: 'docs/guides/fog-of-war',
            },
          ],
        },
        {
          label: 'Referenz',
          translations: { en: 'Reference' },
          items: [
            {
              label: 'Settings',
              translations: { en: 'Settings' },
              slug: 'docs/reference/settings',
            },
            {
              label: 'Shortcuts',
              translations: { en: 'Shortcuts' },
              slug: 'docs/reference/shortcuts',
            },
            {
              label: 'Development / API',
              translations: { en: 'Development / API' },
              slug: 'docs/reference/development-api',
            },
            {
              label: 'FAQ',
              translations: { en: 'FAQ' },
              slug: 'docs/faq',
            },
          ],
        },
      ],
    }),
  ],
});
