// @ts-ignore
import { defineCollection, z } from 'astro:content'
import { glob, file } from 'astro/loaders'

const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.(md|mdx|mdoc|yaml|json)', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      featuredImage: image().optional(),
      imageAlt: z.string().optional(),
      excerpt: z.string().optional(),
      publishedDate: z.date().optional(),
    }),
})

const branding = defineCollection({
  loader: file('./src/settings/branding.json'),
  schema: z.object({
    siteName: z.string(),
    theme: z.string(),
    favicon: z.string(),
  }),
})

const seo = defineCollection({
  loader: file('./src/settings/seo.json'),
  schema: ({ image }) =>
    z.object({
      seo: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        keywords: z.string().optional(),
        canonical: z.string().optional(),
      }).optional(),
      opengraph: z
        .object({
          Title: z.string().optional(),
          Description: z.string().optional(),
          Image: image().optional(),
        })
        .optional(),
      twitter: z
        .object({
          Title: z.string().optional(),
          Description: z.string().optional(),
          Image: image().optional(),
        })
        .optional(),
    }),
})


const pages = defineCollection({
  loader: glob({ pattern: '**/[^_]*.(json)', base: './src/content/pages' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      hero: z.object({
        heroImage: image(),
        heroImageAlt: z.string(),
        heading: z.string(),
        subheading: z.string(),
        intro: z.string(),
        buttons: z.array(
          z.object({
            label: z.string(),
            link: z.string(),
            style: z.string(),
            type: z.string(),
            size: z.string(),
            icon: z.string().optional(),
          })
        ).optional(),
      }),
      posts: z.object({
        heading: z.string(),
        subheading: z.string(),
      }).optional(),
    }),
})


export const collections = { posts, branding, seo, pages }
