"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  useEffect(() => {
    if (isMounted && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay was prevented:", error);
      });
    }
  }, [isMounted]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 背景動画 */}
      {isMounted && (
        <video
          ref={videoRef}
          autoPlay
          muted={true}
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src="/background_movie.mp4" type="video/mp4" />
        </video>
      )}
      
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-gray-900/50" style={{ zIndex: 1 }}></div>
      
      {/* Glass Card - ブラーなし */}
      <div className="relative p-8 md:p-16 rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_0_40px_rgba(0,0,0,0.3)] max-w-6xl mx-4 w-full overflow-hidden" style={{ zIndex: 10 }}>
        {/* 光の反射エフェクト */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
        <div className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-20 text-center">
          {/* From Ideas to Impact Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white text-xs font-bold tracking-widest uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            From Ideas to Impact
          </div>
          
          {/* Northerns Logo */}
          <div className="mb-8 transform hover:scale-105 transition-transform duration-700">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-white leading-none drop-shadow-2xl hover:scale-110 transition-all duration-500 ease-out cursor-pointer">
              Northerns<span className="inline-block animate-pulse hover:animate-none hover:scale-150 hover:rotate-12 transition-all duration-300 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] hover:drop-shadow-[0_0_25px_rgba(34,211,238,1)]">.</span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            多様なプロジェクトで<br />新たな価値を創造します
          </h2>
          
          {/* Description */}
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto font-light">
            小さく始めて、大きく育てる。<br />
            最新技術と柔軟な発想で、新しい価値を生み出します。
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button 
              onClick={() => scrollTo('projects')} 
              className="px-8 py-4 font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] rounded-full"
            >
              事業一覧 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollTo('contact')} 
              className="px-8 py-4 font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40 rounded-full"
            >
              お問い合わせ
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 animate-bounce" style={{ zIndex: 10 }}>
        <ChevronDown className="w-6 h-6 text-white/50" />
      </div>
    </section>
  );
}
