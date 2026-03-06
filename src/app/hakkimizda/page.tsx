import type { Metadata } from "next";
import HakkimizdaPage from "./HakkimizdaPage";

export const metadata: Metadata = {
  title: "Hakkımızda | Adverport",
  description:
    "Adverport'un markalar, içerik üreticileri ve kullanıcılar için kurduğu performans odaklı affiliate ekosistemini keşfedin.",
  alternates: { canonical: "/hakkimizda" },
};

export default function Page() {
  return <HakkimizdaPage />;
}
