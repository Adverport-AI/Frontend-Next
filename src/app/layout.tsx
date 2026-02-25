import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://adverport.com"),
  title: {
    default: "Adverport | Alışveriş Yap, Paylaş, Kazanç Sağla",
    template: "%s | Adverport",
  },
  description:
    "Adverport ile sevdiğin ürünlere link oluştur, paylaş ve tıklama/satışlardan kazanç sağla. Kampanyaları keşfet, kazancını yönet.",
  applicationName: "Adverport",
  keywords: ["affiliate marketing", "cashback", "adverport", "kampanya", "influencer link"],
  openGraph: {
    title: "Adverport | Alışveriş Yap, Paylaş, Kazanç Sağla",
    description:
      "Affiliate link oluştur, paylaş ve kazanç sağla. Adverport ile kampanyaları keşfet, gelirini büyüt.",
    type: "website",
    locale: "tr_TR",
    url: "https://adverport.com",
    siteName: "Adverport",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adverport | Alışveriş Yap, Paylaş, Kazanç Sağla",
    description: "Adverport ile affiliate link oluştur, paylaş ve kazanç sağla.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
