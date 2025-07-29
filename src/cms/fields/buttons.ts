import { fields } from "@keystatic/core";

export const buttons = fields.array(
    fields.object({
        label: fields.text({ label: 'Button label' }),
        link: fields.text({ label: 'Button link' }),
        icon: fields.text({ label: 'Icon', description: 'Add SVG icon here', multiline: true }),
        style: fields.select({
          label: 'Style',
          description: "Style based on DaisyUI.com",
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'neutral', value: 'neutral' },
            { label: 'Info', value: 'info' },
            { label: 'success', value: 'success' },
            { label: 'warning', value: 'warning' },
            { label: 'error', value: 'error' },
          ],
          defaultValue: 'primary'
        }),
        type: fields.select({
          label: 'Button Type',
          description: "Button type",
          options: [
            { label: 'ghost', value: 'ghost' },
            { label: 'link', value: 'link' },
            { label: 'outline', value: 'outline' },
            { label: 'disabled', value: 'disabled' },
            { label: 'default', value: '' },
          ],
          defaultValue: ''
        }),
        size: fields.select({
            label: 'Size',
            description: "Button size",
            options: [
              { label: 'default', value: '' },
              { label: 'large', value: 'large' },
              { label: 'small', value: 'small' },
              { label: 'tiny', value: 'tiny' },
              { label: 'wide', value: 'wide' },
            ],
            defaultValue: ''
          })  
    }),
    {
        label: 'Buttons',
        itemLabel: props => props.fields.label.value,
    },
);