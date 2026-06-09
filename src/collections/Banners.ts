import type { CollectionConfig } from "payload";

export const Banners: CollectionConfig = {
  slug: "banners",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "position", "active"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "position",
      type: "select",
      required: true,
      options: [
        { label: "サイドバー（正方形）", value: "sidebar" },
        { label: "トップ（横長）", value: "top" },
      ],
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "link",
      type: "text",
      label: "リンクURL",
    },
    {
      name: "active",
      type: "checkbox",
      defaultValue: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: {
        position: "sidebar",
      },
    },
  ],
};
