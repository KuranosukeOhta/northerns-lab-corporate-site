import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollHeader from "@/components/ScrollHeader";

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
        <footer className="bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto py-8 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col items-center md:items-start">
              <a className="font-bold text-lg mb-2" href="#">
                Northerns株式会社
              </a>
              <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Northerns株式会社 All rights reserved.</p>
            </div>
            <nav className="flex gap-4 sm:gap-6 mt-4 md:mt-0">
              <a className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 transition-all duration-300 ease-in-out transform hover:-translate-y-1" href="#news">
                プレスリリース
              </a>
              <a className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 transition-all duration-300 ease-in-out transform hover:-translate-y-1" href="#contact">
                お問い合わせ
              </a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
