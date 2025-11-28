"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ScrollHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // ヒーローセクションを超えたかチェック
      const shouldShow = currentScrollY > heroHeight;
      
      // スクロール方向を判定
      const scrollingUp = currentScrollY < lastScrollY.current;
      

      
      if (shouldShow) {
        setIsVisible(true);
        
        if (scrollingUp) {
          // 上スクロール時は即座に表示
          setIsScrollingUp(true);
        } else {
          // 下スクロール時は即座に非表示
          setIsScrollingUp(false);
          setIsVisible(false);
        }
      } else {
        // ヒーローセクション内では非表示
        setIsVisible(false);
        setIsScrollingUp(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out bg-white/80 backdrop-blur-sm ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-full opacity-0'
      }`}
    >
      <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-4 md:px-6">
        <a className="transition-colors duration-300 hover:opacity-80 min-h-[44px] flex items-center" href="#">
          <Image 
            src="/favicon.svg" 
            alt="Northerns Logo" 
            width={32} 
            height={32} 
            className="w-7 h-7 sm:w-8 sm:h-8"
          />
        </a>
        
        <Button 
          onClick={() => {
            const element = document.getElementById('contact');
            if (element) {
              element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }
          }}
          className="transition-all duration-300 hover:scale-105 active:scale-100 min-h-[44px] px-4 sm:px-6 text-sm"
        >
          お問い合わせ
        </Button>
      </div>
    </header>
  );
}
