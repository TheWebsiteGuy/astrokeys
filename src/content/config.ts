// @ts-ignore
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({image}) => z.object({
    title: z.string(),
    featuredImage: image(),
    imgAlt: z.string(),
    excerpt: z.string(),
    // tags: z.array(z.string()),
    publishedDate: z.date(),
  }),
});

export const collections = { posts };
