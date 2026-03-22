import type { Metadata } from "next";
import InfluencerPage from "./InfluencerPage";

export const metadata: Metadata = {
  title: "Influencer Programı | Adverport",
  description:
    "Adverport Influencer Programı ile içerik üretimini affiliate gelirine dönüştür, kampanya performansını tek panelden yönet.",
  alternates: { canonical: "/influencer" },
};

export default function Page() {
  return <InfluencerPage />;
}
