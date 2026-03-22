import { defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Başlık",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Yayın Tarihi",
      type: "datetime",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "updatedAt",
      title: "Güncelleme Tarihi",
      type: "datetime",
    }),
    defineField({
      name: "author",
      title: "Yazar",
      type: "string",
      initialValue: "Adverport",
    }),
    defineField({
      name: "excerpt",
      title: "Özet",
      type: "text",
      rows: 3,
      validation: (r) => r.required().max(500),
    }),
    defineField({
      name: "coverImage",
      title: "Kapak Görseli",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Metin",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "İçerik",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", type: "string", title: "Alt Metin" }),
            defineField({ name: "caption", type: "string", title: "Açıklama" }),
          ],
        },
      ],
    }),
    defineField({
      name: "categories",
      title: "Kategoriler",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Başlığı",
      type: "string",
      group: "seo",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Açıklaması",
      type: "text",
      rows: 2,
      validation: (r) => r.max(160),
      group: "seo",
    }),
    defineField({
      name: "ogImage",
      title: "OG Görsel",
      type: "image",
      group: "seo",
    }),
  ],
  groups: [{ name: "seo", title: "SEO" }],
  preview: {
    select: { title: "title", subtitle: "publishedAt", media: "coverImage" },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString("tr-TR") : "",
        media,
      };
    },
  },
});
