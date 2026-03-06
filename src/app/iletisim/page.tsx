import type { Metadata } from "next";
import IletisimPage from "./IletisimPage";

export const metadata: Metadata = {
  title: "İletişim | Adverport",
  description:
    "Adverport ile iletişime geçin. Sorularınız, önerileriniz veya iş birliği talepleriniz için bize ulaşın.",
  alternates: { canonical: "/iletisim" },
};

export default function Page() {
  return <IletisimPage />;
}
