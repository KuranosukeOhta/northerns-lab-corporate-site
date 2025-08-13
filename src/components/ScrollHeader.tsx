"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

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
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a className="transition-colors duration-300 hover:opacity-80" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" className="w-8 h-8">
            <rect width="32" height="32" fill="#000000" rx="4"/>
            <text x="16" y="22" font-family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="700" text-anchor="middle" fill="white">N.</text>
          </svg>
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
          className="transition-all duration-300 hover:scale-105"
        >
          お問い合わせ
        </Button>
      </div>
    </header>
  );
}
