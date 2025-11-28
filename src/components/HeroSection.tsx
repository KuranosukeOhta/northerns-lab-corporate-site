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
      <div className="container px-4 md:px-6 relative h-full flex items-center justify-center" style={{ zIndex: 10 }}>
        <div className="max-w-5xl mx-auto text-center">
          
          {/* From Ideas to Impact */}
          <div className="mb-4">
            <span className="text-sm font-semibold tracking-wide uppercase text-white">
              From Ideas to Impact
            </span>
          </div>
          
          {/* Northerns. Text */}
          <div className="mb-8">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-white leading-none drop-shadow-2xl hover:scale-110 transition-all duration-500 ease-out cursor-pointer">
              Northerns.
            </h1>
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
