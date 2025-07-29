import { fields, singleton } from "@keystatic/core";

export const footer = singleton({
  label: 'Footer',
  path: './src/settings/footer',
  format: { data: 'json' },
  schema: {
    menuItems: fields.array(
      fields.object({
        text: fields.text({ label: 'Menu Item Text' }),
        link: fields.url({ label: 'Link' }),
      }),
      {
        label: 'Footer Menu Items',
        itemLabel: (props) => props.fields.text.value || 'Menu Item',
      },
    ),
    copyright: fields.text({ 
      label: 'Copyright Text',
      defaultValue: '© 2025 TheWebsiteGuy. All rights reserved.'
    }),
    socialIcons: fields.array(
      fields.object({
        name: fields.text({ label: 'Social Platform Name' }),
        url: fields.url({ label: 'Social Link' }),
        icon: fields.text({ 
          label: 'Icon', 
          description: 'Add SVG icon code or icon name here',
          multiline: true
        }),
      }),
      {
        label: 'Social Icons',
        itemLabel: (props) => props.fields.name.value || 'Social Icon',
      },
    ),
  },
})