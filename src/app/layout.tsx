import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollHeader from "@/components/ScrollHeader";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Northerns株式会社",
  description: "Northerns株式会社 Corporate Site",
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
      </body>
    </html>
  );
}
