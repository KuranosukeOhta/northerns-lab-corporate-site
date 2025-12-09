"use client";

import Image from "next/image";
import FooterMarquee from "./FooterMarquee";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <FooterMarquee />
      <footer className="bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto py-6 sm:py-8 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <Image 
                src="/favicon.svg" 
                alt="Northerns Logo" 
                width={24} 
                height={24} 
                className="w-6 h-6"
              />
              <button 
                onClick={scrollToTop}
                className="font-bold text-base sm:text-lg cursor-pointer min-h-[44px] flex items-center"
              >
                Northerns
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center md:text-left">© 2025 Northerns（ノーザンズ） All rights reserved.</p>
          </div>
          <nav className="flex gap-1 sm:gap-4 mt-2 md:mt-0">
            <button 
              onClick={() => scrollToSection('news')}
              className="text-sm hover:underline underline-offset-4 cursor-pointer px-3 py-2 min-h-[44px] flex items-center"
            >
              プレスリリース
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm hover:underline underline-offset-4 cursor-pointer px-3 py-2 min-h-[44px] flex items-center"
            >
              お問い合わせ
            </button>
          </nav>
        </div>
      </footer>
    </>
  );
}
