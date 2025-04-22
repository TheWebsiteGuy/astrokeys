import { fields, singleton } from '@keystatic/core'

export const branding = singleton({
  label: 'Branding',
  format: { data: 'json' },
  path: 'src/settings/branding',
  schema: {
    site: fields.object({
      siteName: fields.text({ label: 'Site Name' }),
      theme: fields.select({
        label: 'Select a theme',
        description: "Themes available from DaisyUI",
        options: [
          { label: 'Light', value: 'light' },
          { label: 'Dark', value: 'dark' },
          { label: 'Cupcake', value: 'cupcake' },
          { label: 'Bumblebee', value: 'bumblebee' },
          { label: 'Emerald', value: 'emerald' },
          { label: 'Corporate', value: 'corporate' },
          { label: 'Synthwave', value: 'synthwave' },
          { label: 'Retro', value: 'retro' },
          { label: 'Cyberpunk', value: 'cyberpunk' },
          { label: 'Valentine', value: 'valentine' },
          { label: 'Hallowen', value: 'hallowen' },
          { label: 'Garden', value: 'garden' },
          { label: 'Forest', value: 'forest' },
          { label: 'Aqua', value: 'aqua' },
          { label: 'Lofi', value: 'lofi' },
          { label: 'Pastel', value: 'pastel' },
          { label: 'Fantasy', value: 'fantasy' },
          { label: 'Wireframe', value: 'wireframe' },
        ],
        defaultValue: 'light',
      }), 
      favicon: fields.image({
        label: 'Favicon',
        description: 'Favicon for the site',
        directory: 'public/images',
        publicPath: '/images/',
      }),
    }),
  },
})
