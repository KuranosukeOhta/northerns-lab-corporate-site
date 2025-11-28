"use client";

import { useEffect, useState, useRef } from "react";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  useEffect(() => {
    // 動画の再生を確実にする
    if (isMounted && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay was prevented:", error);
      });
    }
  }, [isMounted]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video for entire hero section */}
      {isMounted && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src="/background_movie.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      
      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black/40" style={{ zIndex: 1 }}></div>
      
      {/* Left White Band - PC Only */}
      <div className="hidden md:block absolute left-0 top-0 w-[25px] h-full bg-white" style={{ zIndex: 20 }}></div>
      
      {/* Right White Band - PC Only */}
      <div className="hidden md:block absolute right-0 top-0 w-[25px] h-full bg-white" style={{ zIndex: 20 }}></div>
      
      {/* Content Container */}
      <div className="absolute inset-0 flex items-center justify-center px-4" style={{ zIndex: 10 }}>
        <div className="max-w-5xl w-full text-center">
          
          {/* From Ideas to Impact */}
          <div className="mb-4">
            <span className="text-sm font-semibold tracking-wide uppercase text-white">
              From Ideas to Impact
            </span>
          </div>
          
          {/* Northerns. Text */}
          <div className="mb-8">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-white leading-none drop-shadow-2xl hover:scale-110 transition-all duration-500 ease-out cursor-pointer">
              Northerns<span className="inline-block animate-pulse hover:animate-none hover:scale-150 hover:rotate-12 transition-all duration-300 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] hover:drop-shadow-[0_0_25px_rgba(34,211,238,1)]">.</span>
            </h1>
            
            {/* Test Variants - Temporary Display */}
            <div className="flex justify-center gap-12 mt-4 opacity-80 hover:opacity-100 transition-opacity">
              {/* Variant 2: Playful Bounce */}
              <div className="text-center">
                <p className="text-xs text-white/60 mb-1">Pattern 2: Bounce</p>
                <h2 className="text-4xl font-bold text-white">
                  N<span className="inline-block hover:animate-bounce transition-all duration-300 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">.</span>
                </h2>
              </div>

              {/* Variant 3: Spinning Color */}
              <div className="text-center">
                <p className="text-xs text-white/60 mb-1">Pattern 3: Spin</p>
                <h2 className="text-4xl font-bold text-white">
                  N<span className="inline-block hover:rotate-[360deg] transition-transform duration-700 ease-in-out bg-gradient-to-r from-pink-500 to-violet-500 hover:from-cyan-400 hover:to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(236,72,153,0.8)] hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">.</span>
                </h2>
              </div>
            </div>
          </div>
          
          {/* Subtitle */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white drop-shadow-lg">
              多様なプロジェクトで<br />
              新たな価値を創造します
            </h2>
          </div>
          
          {/* Feature Points */}
          <div className="mb-8">
            <div className="flex items-center justify-center">
              <p className="text-white drop-shadow-md text-center">
                小さく始めて、大きく育てる。<br />
                最新技術と柔軟な発想で、新しい価値を生み出します。
              </p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) {
                  element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-transparent hover:backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-300 drop-shadow-lg cursor-pointer"
            >
              事業一覧
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-transparent hover:backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-300 drop-shadow-lg cursor-pointer"
            >
              お問い合わせ
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
