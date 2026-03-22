import type { Metadata } from "next";
import MarkalariPage from "./MarkalariPage";

export const metadata: Metadata = {
  title: "Markalar | Adverport",
  description:
    "Adverport'ta 57+ partner marka ile kazanç sağla. Türkiye'nin en sevilen markalarının affiliate kampanyalarına katıl.",
  alternates: { canonical: "/markalar" },
};

export default function Page() {
  return <MarkalariPage />;
}
