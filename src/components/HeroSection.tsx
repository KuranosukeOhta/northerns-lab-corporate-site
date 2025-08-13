"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="w-full py-8 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* From Ideas to Impact */}
          <div className="mb-4">
            <span className="text-sm font-semibold tracking-wide uppercase text-gray-500">
              From Ideas to Impact
            </span>
          </div>
          
          {/* Video Text Effect - Fixed SVG Mask */}
          <div className="relative flex justify-center items-center w-full mb-8">
            {/* SVG Mask Definition with proper dimensions */}
            <svg width="1000" height="400" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ width: '100%', height: 'auto', maxWidth: '100%' }}>
              <defs>
                <mask id="northerns-text-mask">
                  <rect width="100%" height="100%" fill="black" />
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    style={{ 
                      fontSize: '165px',
                      fontWeight: 'bold',
                      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    Northerns.
                  </text>
                </mask>
              </defs>
            </svg>
            
            {/* Video Container */}
            <div className="relative w-full max-w-4xl h-64 sm:h-80 md:h-96 lg:h-[28rem] flex items-center justify-center mx-auto">
              {isClient ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ 
                    mask: 'url(#northerns-text-mask)',
                    WebkitMask: 'url(#northerns-text-mask)'
                  }}
                >
                  <source src="/background_movie.mp4" type="video/mp4" />
                </video>
              ) : (
                <div 
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400"
                  style={{ 
                    mask: 'url(#northerns-text-mask)',
                    WebkitMask: 'url(#northerns-text-mask)'
                  }} 
                />
              )}
              
              {/* Fallback text */}
              <h1 className="relative text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mask-fallback leading-none">
                Northerns.
              </h1>
            </div>
          </div>
          
          {/* Subtitle */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white">
              多様なプロジェクトで<br />
              新たな価値を創造します
            </h2>
          </div>
          
          {/* Feature Points */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p>小さく始めて、大きく育てる。複数のプロジェクトを並行して進めています</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p>最新技術と柔軟な発想で、新しい価値を生み出します</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
              お問い合わせ
            </button>
            <button className="px-8 py-3 border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-colors">
              資料請求
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
