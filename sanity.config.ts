import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";
import { apiVersion, dataset, projectId } from "./src/sanity/env";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  apiVersion,
  schema: {
    types: schemaTypes,
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
