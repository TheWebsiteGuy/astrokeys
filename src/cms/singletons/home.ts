import { fields, singleton } from '@keystatic/core';
import { buttons } from '../fields';

export const home = singleton({
    label:  'Home Page',
    path: "src/content/pages/home",
    schema: {
      // Hero section
      hero: fields.object({
        heroImage: fields.image({
            label: "Hero Image",
            description: "Hero image",
            directory: "src/assets/images/pages/home",
            publicPath: "src/assets/images/pages/home/",
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
      }),

    // End Hero
    }
  });