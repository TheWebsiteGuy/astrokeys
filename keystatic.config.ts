import { config } from '@keystatic/core';
import { home, navbar, footer, branding, seo } from 'src/cms/singletons';
import { posts } from 'src/cms/collections';

export default config({
  storage: {
    kind: 'local',
  },

    ui: {
    brand: { name: 'Astrokeys' },
    navigation: {
      'Content': ['home',  'posts',  ],
      'Components': [ 'navbar', 'footer'],
      'Site Settings': [ 'branding', 'seo' ],
    },
  },

  collections: {
    posts,
  },

  singletons: {
    home,
    navbar,
    footer,
    branding,
    seo
  },
});
