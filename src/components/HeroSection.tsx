"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video for entire hero section */}
      {isClient ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="/background_movie.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 -z-10" />
      )}
      
      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>
      
      {/* Content Container */}
      <div className="container px-4 md:px-6 relative z-10 h-full flex items-center justify-center">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* From Ideas to Impact */}
          <div className="mb-4">
            <span className="text-sm font-semibold tracking-wide uppercase text-white">
              From Ideas to Impact
            </span>
          </div>
          
          {/* Northerns. Text */}
          <div className="mb-8">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-white leading-none drop-shadow-2xl hover:scale-110 hover:backdrop-blur-sm transition-all duration-500 ease-out cursor-pointer">
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
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center">
              <p className="text-white drop-shadow-md">小さく始めて、大きく育てる。複数のプロジェクトを並行して進めています</p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-white drop-shadow-md">最新技術と柔軟な発想で、新しい価値を生み出します</p>
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
              className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/70 hover:scale-105 active:scale-95 transition-all duration-300 drop-shadow-lg cursor-pointer backdrop-blur-sm"
            >
              事業一覧
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 drop-shadow-lg cursor-pointer">
              お問い合わせ
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
