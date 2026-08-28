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
        'Battle maps from your Obsidian vault onto the screen at your game table: fog of war, pins, images and videos, live on a TV, a second monitor or tablets on your local network.',
      logo: {
        src: './src/assets/logo-mark.svg',
        alt: 'Chronicle of Whispers',
      },
      favicon: '/logo/favicon.svg',
      disable404Route: true,
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        de: { label: 'Deutsch', lang: 'de' },
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
          label: 'Back to the project site',
          translations: { de: 'Zur Projektseite' },
          link: '/',
        },
        {
          label: 'Start here',
          translations: { de: 'Einstieg' },
          items: [
            {
              label: 'Overview',
              translations: { de: 'Übersicht' },
              slug: 'docs',
            },
            {
              label: 'Installation',
              translations: { de: 'Installation' },
              slug: 'docs/installation',
            },
            {
              label: 'Getting started',
              translations: { de: 'Getting Started' },
              slug: 'docs/getting-started',
            },
          ],
        },
        {
          label: 'Projects',
          translations: { de: 'Projekte' },
          items: [
            { label: 'Shadow Atlas', slug: 'docs/projects/shadow-atlas' },
            { label: 'Map Viewer', slug: 'docs/projects/map-viewer' },
          ],
        },
        {
          label: 'Running a session',
          translations: { de: 'Betrieb & Spielleitung' },
          items: [
            {
              label: 'Server',
              translations: { de: 'Server' },
              slug: 'docs/guides/server',
            },
            {
              label: 'Sharing',
              translations: { de: 'Sharing' },
              slug: 'docs/guides/sharing',
            },
            {
              label: 'Fog of war',
              translations: { de: 'Fog of War' },
              slug: 'docs/guides/fog-of-war',
            },
          ],
        },
        {
          label: 'Reference',
          translations: { de: 'Referenz' },
          items: [
            {
              label: 'Settings',
              translations: { de: 'Settings' },
              slug: 'docs/reference/settings',
            },
            {
              label: 'Shortcuts',
              translations: { de: 'Shortcuts' },
              slug: 'docs/reference/shortcuts',
            },
            {
              label: 'Development / API',
              translations: { de: 'Development / API' },
              slug: 'docs/reference/development-api',
            },
            {
              label: 'FAQ',
              translations: { de: 'FAQ' },
              slug: 'docs/faq',
            },
          ],
        },
      ],
    }),
  ],
});
