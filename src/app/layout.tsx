import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollHeader from "@/components/ScrollHeader";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Northerns合同会社 (Northerns LLC)",
  description: "多様なプロジェクトで、新たな価値を創造します。",
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
