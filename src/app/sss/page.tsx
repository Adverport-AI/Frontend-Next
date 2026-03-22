import type { Metadata } from "next";
import SssPage from "./SssPage";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular | Adverport",
  description:
    "Adverport hakkında en çok merak edilen soruların yanıtlarını, hesap, ödeme, güvenlik ve premium başlıkları altında inceleyin.",
  alternates: { canonical: "/sss" },
};

export default function Page() {
  return <SssPage />;
}
