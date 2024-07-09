import { fields, singleton } from "@keystatic/core";
import { buttons } from "../fields";


export const navbar = singleton({
  label: "Main Nav",
  path: "src/content/pages/navbar",
  schema: {
    links: fields.array(
      fields.object({
        text: fields.text({ label: "Link Text" }),

        isDropdown: fields.conditional(
          // First, we define a checkbox to drive the yes/no condition
          fields.checkbox({
            label: "Check if this item is just a dropdown with sublinks",
            defaultValue: false,
          }),
          // Then, we provide a set of fields for both the `true` and `false` scenarios
          {
            true: fields.array(
              fields.object({
                text: fields.text({ label: "Link Text" }),
                link: fields.url({ label: "Link" }),
                description: fields.text({ label: "Description of page" }),
              }),
              {
                label: "Sub Links",
                itemLabel: (props) => props.fields.text.value || "Nav Item",
              }
            ),
            // Empty fields are useful to show... no fields!
            false: fields.object({
              link: fields.url({ label: "Link" }),
            }),
          }
        ),
      }),
      {
        label: "Nav Items",
        itemLabel: (props) => props.fields.text.value || "Nav Item",
      }
    ),
    buttons,
  },
});