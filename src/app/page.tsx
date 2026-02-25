import type { Metadata } from "next";
import App from "./App";

export const metadata: Metadata = {
  title: "Adverport | Alışveriş Yap, Paylaş, Kazanç Sağla",
  description:
    "Adverport ile kampanyaları keşfet, link oluştur, paylaş ve tıklama/satışlardan kazanç sağla.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <App />;
}
