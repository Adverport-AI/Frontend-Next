import type { Metadata } from "next";
import PremiumPage from "./PremiumPage";

export const metadata: Metadata = {
  title: "Premium | Adverport",
  description:
    "Adverport Premium ile kazancını maksimize et. Sınırsız kampanya, yüksek komisyon oranları, özel linkler ve daha fazlası.",
  alternates: { canonical: "/premium" },
};

export default function Page() {
  return <PremiumPage />;
}
