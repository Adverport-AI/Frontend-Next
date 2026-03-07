import type { Metadata } from "next";
import YardimMerkeziPage from "./YardimMerkeziPage";

export const metadata: Metadata = {
  title: "Yardım Merkezi | Adverport",
  description:
    "Adverport Yardım Merkezi ile hesap, ödeme, uygulama kullanımı, güvenlik ve premium süreçleri hakkında hızlıca bilgi alın.",
  alternates: { canonical: "/yardim-merkezi" },
};

export default function Page() {
  return <YardimMerkeziPage />;
}
