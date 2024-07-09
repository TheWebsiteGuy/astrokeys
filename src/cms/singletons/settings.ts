import { fields, singleton } from '@keystatic/core';

export const settings = singleton({
    label:  'Settings',
    schema:{
        site: fields.object({
           siteName: fields.text({ label: 'Site Name' })

        })
    }
});