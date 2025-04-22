// @ts-ignore
import { defineCollection, z } from 'astro:content'
import { glob, file } from 'astro/loaders'

const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx,mdoc,yaml}', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      featuredImage: image().optional(),
      imageAlt: z.string().optional(),
    }),
})

const pages = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx,mdoc,yaml,json}', base: './src/content/pages' }),
  schema: ({ image }) =>
    z.object({
      hero: z.object({
        heroImage: image().optional(),
        heroImageAlt: z.string().optional(),
        heading: z.string(),
        subheading: z.string(),
        intro: z.string(),
        buttons: z.array(
          z.object({
            label: z.string(),
            link: z.string(),
            icon: z.string().optional(),
            style: z.enum(['primary', 'link', 'secondary', 'danger', 'success', 'warning', 'info', 'outline', 'neutral', 'ghost', '']).optional(),
            size: z.enum(['small', 'large', 'medium', 'tiny', 'wide', 'default', '' ]).optional(),
          }),
        ),
      }),
      posts: z.object({
        heading: z.string(),
        subheading: z.string(),

      }),
    }),
})

const branding = defineCollection({
  loader: file('./src/settings/branding.json'),
  schema: z.object({
    site: z.string().optional(),
  }),
})

const seo = defineCollection({
  loader: file('./src/settings/seo.json'),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    keywords: z.string().optional(),
    ogTitle: z.string().optional(),
    ogDescription: z.string().optional(),
    ogImage: z.string().optional(),
    twitterTitle: z.string().optional(),
    twitterDescription: z.string().optional(),
    twitterImage: z.string().optional(),
  }),
})

export const collections = { posts, branding, pages, seo }
