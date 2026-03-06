import type { Metadata } from "next";
import OzelliklerPage from "./OzelliklerPage";

export const metadata: Metadata = {
  title: "Özellikler | Adverport",
  description:
    "Adverport'un tüm özelliklerini keşfet. Kolay kazanç, geniş marka ağı, anlık istatistikler, güvenli ödeme ve çok daha fazlası.",
  alternates: { canonical: "/ozellikler" },
};

export default function Page() {
  return <OzelliklerPage />;
}
