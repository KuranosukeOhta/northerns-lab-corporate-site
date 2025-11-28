"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

// 共通のロゴコンポーネント（案1採用）
const NorthernsLogo = () => (
  <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-white leading-none drop-shadow-2xl hover:scale-110 transition-all duration-500 ease-out cursor-pointer">
    Northerns<span className="inline-block animate-pulse hover:animate-none hover:scale-150 hover:rotate-12 transition-all duration-300 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] hover:drop-shadow-[0_0_25px_rgba(34,211,238,1)]">.</span>
  </h1>
);

// 共通のCTAボタン
const CTAButtons = ({ variant = "solid" }: { variant?: "solid" | "glass" | "outline" }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const baseClasses = "px-8 py-4 font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 group";
  
  let styles = {
    primary: "",
    secondary: ""
  };

  switch (variant) {
    case "glass":
      styles.primary = `${baseClasses} bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] rounded-full`;
      styles.secondary = `${baseClasses} bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40 rounded-full`;
      break;
    case "outline":
      styles.primary = `${baseClasses} bg-white text-black hover:bg-blue-500 hover:text-white border-2 border-white hover:border-blue-500 rounded-none`;
      styles.secondary = `${baseClasses} bg-transparent text-white border-2 border-white/50 hover:border-white hover:bg-white/5 rounded-none`;
      break;
    default: // solid
      styles.primary = `${baseClasses} bg-white text-gray-900 hover:bg-blue-50 hover:scale-105 shadow-lg rounded-lg`;
      styles.secondary = `${baseClasses} bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg`;
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
      <button onClick={() => scrollTo('projects')} className={styles.primary}>
        事業一覧 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
      <button onClick={() => scrollTo('contact')} className={styles.secondary}>
        お問い合わせ
      </button>
    </div>
  );
};

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

  return (
    <div className="relative w-full">
      {/* 共通背景動画 (Fixed) */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-50">
        {isMounted && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/background_movie.mp4" type="video/mp4" />
          </video>
        )}
        {/* 基本のオーバーレイ */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Design A: Ethereal Minimal */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded text-xs text-white font-mono">Design A: Ethereal Minimal</div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
        
        <div className="relative z-10 container px-4 text-center">
          <div className="mb-6 overflow-hidden">
            <span className="inline-block text-sm font-bold tracking-[0.3em] uppercase text-blue-200 mb-2 animate-fade-in-up">
              From Ideas to Impact
            </span>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
          </div>
          
          <div className="mb-8">
            <NorthernsLogo />
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg leading-tight">
              多様なプロジェクトで<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white">
                新たな価値を創造します
              </span>
            </h2>
            
            <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              小さく始めて、大きく育てる。<br />
              最新技術と柔軟な発想で、新しい価値を生み出します。
            </p>
          </div>
          
          <CTAButtons variant="solid" />
        </div>
        
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/50" />
        </div>
      </section>

      {/* Design B: Glass Prism */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden backdrop-blur-sm">
        <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded text-xs text-white font-mono z-20">Design B: Glass Prism</div>
        
        {/* 濃いめのオーバーレイでガラスを目立たせる */}
        <div className="absolute inset-0 bg-gray-900/40"></div>
        
        {/* Glass Card */}
        <div className="relative z-10 p-8 md:p-16 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.3)] max-w-6xl mx-4 w-full overflow-hidden">
          {/* 光の反射エフェクト */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
          <div className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              From Ideas to Impact
            </div>
            
            <div className="mb-8 transform hover:scale-105 transition-transform duration-700">
              <NorthernsLogo />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              多様なプロジェクトで<br />新たな価値を創造します
            </h2>
            
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto font-light">
              小さく始めて、大きく育てる。<br />
              最新技術と柔軟な発想で、新しい価値を生み出します。
            </p>
            
            <CTAButtons variant="glass" />
          </div>
        </div>
        
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/50" />
        </div>
      </section>

      {/* Design C: Tech Grid */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded text-xs text-white font-mono z-20">Design C: Tech Grid</div>
        
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Decorative Lines */}
        <div className="absolute top-0 left-10 w-px h-full bg-white/10 hidden md:block"></div>
        <div className="absolute top-0 right-10 w-px h-full bg-white/10 hidden md:block"></div>
        <div className="absolute top-20 left-0 w-full h-px bg-white/10 hidden md:block"></div>
        <div className="absolute bottom-20 left-0 w-full h-px bg-white/10 hidden md:block"></div>

        <div className="relative z-10 container px-4 text-center">
          {/* Tech Frame */}
          <div className="relative inline-block mb-10">
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-blue-500"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-blue-500"></div>
            
            <div className="px-8 py-4 border border-white/10 bg-black/40 backdrop-blur-sm">
              <span className="text-xs md:text-sm font-mono text-blue-400 tracking-[0.5em] uppercase">
                From Ideas to Impact
              </span>
            </div>
          </div>
          
          <div className="mb-10 relative">
            {/* Glitch effect elements could go here */}
            <NorthernsLogo />
          </div>
          
          <div className="max-w-3xl mx-auto border-l-2 border-blue-500/50 pl-6 md:pl-10 py-2 text-left bg-gradient-to-r from-black/40 to-transparent backdrop-blur-sm">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              多様なプロジェクトで<br />
              新たな価値を創造します
            </h2>
            <p className="text-gray-300 text-base md:text-lg font-mono">
              // 小さく始めて、大きく育てる。<br />
              // 最新技術と柔軟な発想で、新しい価値を生み出します。
            </p>
          </div>
          
          <div className="mt-12">
            <CTAButtons variant="outline" />
          </div>
        </div>
      </section>
    </div>
  );
}
