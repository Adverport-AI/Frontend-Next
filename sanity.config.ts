import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import type { DocumentActionComponent } from "sanity";

const BASE_URL = "https://adverport-next-seo-blog.vercel.app";

const OpenOnSiteAction: DocumentActionComponent = ({ draft, published }) => {
  const doc = draft ?? published;
  const slug = (doc as { slug?: { current?: string } })?.slug?.current;
  if (!slug) return null;
  return {
    label: "Siteyi Aç",
    tone: "positive" as const,
    onHandle: () => {
      window.open(`${BASE_URL}/blog/${slug}`, "_blank", "noopener");
    },
  };
};

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  apiVersion,
  schema: {
    types: schemaTypes,
  },
  document: {
    actions: (prev, { schemaType }) =>
      schemaType === "blogPost" ? [...prev, OpenOnSiteAction] : prev,
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("İçerik")
          .items([
            S.listItem()
              .title("Site Ayarları")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),
            S.listItem()
              .title("Blog Yazıları")
              .child(S.documentTypeList("blogPost").title("Blog Yazıları")),
            S.listItem()
              .title("Markalar")
              .child(S.documentTypeList("brand").title("Markalar")),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
