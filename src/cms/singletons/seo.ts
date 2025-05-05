import { fields, singleton } from '@keystatic/core'

export const seo = singleton({
  label: 'SEO',
  path: 'src/settings/seo',
  format: { data: 'json' },
  schema: {
    title: fields.text({ label: 'Title' }),
    description: fields.text({ label: 'Description', multiline: true }),
    keywords: fields.text({ label: 'Keywords' }),
    canonical: fields.text({ label: 'Canonical' }),
    opengraph: fields.object({
      Title: fields.text({ label: 'OG Title' }),
      Description: fields.text({ label: 'OG Description', multiline: true }),
      Image: fields.image({ 
        label: 'OG Image',
        directory: '/src/assets/images/seo/opengraph/',
        publicPath: '/src/assets/images/seo/opengraph/',
      }),
    },
    {
      label: 'Opengraph (Facebook)',
      description: 'Opengraph options',
    }),
    twitter: fields.object({
      Title: fields.text({ label: 'Twitter Title' }),
      Description: fields.text({ label: 'Twitter Description', multiline: true }),
      Image: fields.image({ 
        label: 'Twitter Image',
        directory: '/src/assets/images/seo/twitter/',
        publicPath: '/src/assets/images/seo/twitter/',
      }),
    },
    {
      label: 'Twitter',
      description: 'Twitter options'
    }
  )},
})
