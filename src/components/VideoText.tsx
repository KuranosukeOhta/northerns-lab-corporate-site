"use client";

import { useState, useEffect } from "react";

interface VideoTextProps {
  text: string;
  videoSrc: string;
  className?: string;
}

export default function VideoText({ text, videoSrc, className = "" }: VideoTextProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const maskId = `text-mask-${text.replace(/[^a-zA-Z0-9]/g, '')}`;

  return (
    <div className={`relative w-full ${className}`}>
      {/* SVG Mask Definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <mask id={maskId}>
            <rect width="100%" height="100%" fill="black" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              style={{ 
                fontSize: 'clamp(3rem, 10vw, 8rem)',
                fontWeight: 'bold',
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
              }}
            >
              {text}
            </text>
          </mask>
        </defs>
      </svg>
      
      {/* Video Container */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 flex items-center justify-center overflow-hidden">
        {isClient ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ 
              mask: `url(#${maskId})`,
              WebkitMask: `url(#${maskId})`
            }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <div 
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400"
            style={{ 
              mask: `url(#${maskId})`,
              WebkitMask: `url(#${maskId})`
            }} 
          />
        )}
        
        {/* Fallback text for browsers that don't support masking */}
        <h1 
          className="relative font-bold tracking-tighter leading-none bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent opacity-0 mask-fallback"
          style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
        >
          {text}
        </h1>
      </div>
    </div>
  );
}
