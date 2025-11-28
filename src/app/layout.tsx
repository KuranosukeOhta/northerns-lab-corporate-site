import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollHeader from "@/components/ScrollHeader";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Northerns合同会社 (Northerns LLC)",
  description: "Northerns合同会社（Northerns LLC）は、多様なプロジェクトを通じて新たな価値を創造するテックカンパニーです。",
  openGraph: {
    title: "Northerns合同会社 (Northerns LLC)",
    description: "Northerns合同会社（Northerns LLC）のコーポレートサイト。SaaS開発、動画翻訳・ローカライズ、3Dバーチャルツアー制作など、多様なプロジェクトで新しい価値を提供します。",
    url: "https://northerns.vercel.app",
    siteName: "Northerns合同会社",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Northerns合同会社 (Northerns LLC)",
    description: "Northerns合同会社（Northerns LLC）の公式サイト。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <ScrollHeader />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
