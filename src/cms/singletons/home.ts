import { fields, singleton } from '@keystatic/core';
import { buttons } from '../fields';

export const home = singleton({
  label: 'Home Page',
  format: { data: 'json' },
  path: 'src/content/pages/home',
  schema: {
    title: fields.text({
      label: 'Page Title',
      description: 'The title of the page',
      defaultValue: 'Home',
    }),
    // Hero section
    hero: fields.object(
      {
        heroImage: fields.image({
          label: 'Hero Image',
          description: 'Hero image',
          directory: '/src/assets/images/pages/home',
          publicPath: '@assets/images/pages/home/',
        }),
        heroImageAlt: fields.text({ label: 'Hero Image Alt text' }),
        heading: fields.text({ label: 'Heading' }),
        subheading: fields.text({ label: 'Subheading' }),
        intro: fields.text({ label: 'Intro', multiline: true }),
        buttons,
      },
      {
        label: 'Hero Section',
        description: 'The intro section of home page',
      },
    ),
    // End Hero
    posts: fields.object(
      {
        heading: fields.text({ label: 'Posts Heading' }),
        subheading: fields.text({ label: 'Subheading', multiline: true }),
      },
      {
        label: 'Posts section',
      },
    ),
  },
})