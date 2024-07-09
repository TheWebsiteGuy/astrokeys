import { config, fields, collection, singleton } from '@keystatic/core';
import { home, navbar, settings } from 'src/cms/singletons';
import { posts } from 'src/cms/collections';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts,
  },

  singletons: {
    home,
    navbar,
    settings
  },
});
