"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function ScrollHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // ヒーローセクションを超えたかチェック
      const shouldShow = currentScrollY > heroHeight;
      
      // スクロール方向を判定
      const scrollingUp = currentScrollY < lastScrollY.current;
      
      // スクロールタイムアウトをクリア
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      if (shouldShow) {
        setIsVisible(true);
        
        if (scrollingUp) {
          // 上スクロール時は即座に表示
          setIsScrollingUp(true);
        } else {
          // 下スクロール時は少し遅延して非表示
          setIsScrollingUp(false);
          scrollTimeout.current = setTimeout(() => {
            if (currentScrollY > heroHeight) {
              setIsVisible(false);
            }
          }, 1000); // 1秒後に非表示
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
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
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
        <a className="font-bold text-lg transition-colors duration-300 hover:text-blue-600" href="#">
          Northerns株式会社
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
