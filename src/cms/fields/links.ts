import { fields } from "@keystatic/core";

// Single link
export const link = fields.object({
  linkText: fields.text({ label: "Link Text" }),
  linkAltText: fields.text({ label: "Link Alt Text" }),
  linkDescription: fields.text({ label: "Link Description" }),
  isExternal: fields.conditional(
    // First, we define a checkbox to drive the yes/no condition
    fields.checkbox({
      label: "Check if link is external or not",
      defaultValue: true,
    }),
    // Then, we provide a set of fields for both the `true` and `false` scenarios
    {
      true: fields.url({ label: "External Link" }),
      // Empty fields are useful to show... no fields!
      false: fields.url({
        label: "Internal Link",
      }),
    }
  ),
});

// Multiple links
export const links = fields.array(link, {
  label: "Links",
  itemLabel: (props) => "Link: " + props?.fields?.linkText?.value,
});