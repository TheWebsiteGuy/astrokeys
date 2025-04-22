import { config } from '@keystatic/core';
import { home, navbar, branding, seo } from 'src/cms/singletons';
import { posts } from 'src/cms/collections';

export default config({
  storage: {
    kind: 'local',
  },

  ui: {
    brand: { name: 'Astrokeys' },
    navigation: {
      'Content': ['home',  'posts',  ],
      'Components': [ 'navbar'],
      'Site Settings': [ 'branding', 'seo' ],
    },
  },

  collections: {
    posts,
  },

  singletons: {
    home,
    navbar,
    branding,
    seo
  },
});
