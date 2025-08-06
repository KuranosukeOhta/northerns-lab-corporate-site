import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";

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
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
            <a className="font-bold text-lg" href="#">
              Northerns株式会社
            </a>
            <Button>お問い合わせ</Button>
          </div>
        </header>
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
              <a className="text-sm hover:underline underline-offset-4" href="#">
                プレスリリース
              </a>
              <a className="text-sm hover:underline underline-offset-4" href="#">
                お問い合わせ
              </a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
