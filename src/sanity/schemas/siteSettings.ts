import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Ayarları",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site Başlığı",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Açıklaması",
      type: "text",
      rows: 2,
      validation: (r) => r.max(160),
    }),
    defineField({
      name: "ogImage",
      title: "OG Görsel",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "socialLinks",
      title: "Sosyal Medya Linkleri",
      type: "object",
      fields: [
        defineField({ name: "instagram", title: "Instagram URL", type: "url" }),
        defineField({ name: "twitter", title: "Twitter/X URL", type: "url" }),
        defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
        defineField({ name: "youtube", title: "YouTube URL", type: "url" }),
      ],
    }),
  ],
  preview: {
    select: { title: "siteTitle" },
  },
});
