import { fields, singleton } from '@keystatic/core';

export const settings = singleton({
    label:  'Settings',
    path: "src/content/pages/settings",
    schema:{
        site: fields.object({
           siteName: fields.text({ label: 'Site Name' })

        })
    }
});