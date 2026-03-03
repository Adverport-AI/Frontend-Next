"use client";

/**
 * Sanity Studio - /studio route
 * Sanity CMS yönetim paneline bu URL'den erişilir.
 */
import dynamic from "next/dynamic";
import config from "../../../../sanity.config";

const NextStudio = dynamic(
  () => import("next-sanity/studio").then((mod) => mod.NextStudio),
  { ssr: false }
);

export default function StudioPage() {
  return <NextStudio config={config} />;
}
