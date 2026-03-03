import { defineField, defineType } from "sanity";

export const brand = defineType({
  name: "brand",
  title: "Marka",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Marka Adı",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", type: "string", title: "Alt Metin" }),
      ],
    }),
    defineField({
      name: "websiteUrl",
      title: "Website URL",
      type: "url",
    }),
    defineField({
      name: "description",
      title: "Açıklama",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Moda", value: "moda" },
          { title: "Elektronik", value: "elektronik" },
          { title: "Anne & Bebek", value: "anne-bebek" },
          { title: "Spor", value: "spor" },
          { title: "Ev & Yaşam", value: "ev-yasam" },
          { title: "Güzellik", value: "guzellik" },
          { title: "Diğer", value: "diger" },
        ],
      },
    }),
    defineField({
      name: "isActive",
      title: "Aktif",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Sıra (düşük = önce)",
      type: "number",
      initialValue: 99,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "category", media: "logo" },
  },
});
