import type { Metadata } from "next";
import AlisverisSeverPage from "./AlisverisSeverPage";

export const metadata: Metadata = {
  title: "Alışveriş Sever | Adverport",
  description:
    "Adverport ile alışveriş yaparken nakit iade, kupon ve puan avantajlarını tek yerden yönet.",
  alternates: { canonical: "/alisveris-sever" },
};

export default function Page() {
  return <AlisverisSeverPage />;
}
