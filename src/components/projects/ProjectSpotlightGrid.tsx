"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Camera, Globe, Code, MessageSquare, Printer, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "3D Visualization Services",
    category: "Spatial Computing",
    description: "Matterportを活用した3Dバーチャルツアー撮影。空間のデジタルツイン化。",
    icon: <Camera className="w-8 h-8" />,
    href: "https://matterport-service-hp.vercel.app/"
  },
  {
    id: 2,
    title: "TranslateJapan",
    category: "AI Localization",
    description: "AIと人の手による高品質な翻訳・吹き替え。世界へコンテンツを届ける。",
    icon: <Globe className="w-8 h-8" />,
    href: "https://translate-japan.vercel.app/"
  },
  {
    id: 3,
    title: "Local Business DX",
    category: "Consulting",
    description: "地域企業のデジタル実装支援。Web, SNS, クラウドツールの導入と定着。",
    icon: <Code className="w-8 h-8" />,
    href: "#"
  },
  {
    id: 4,
    title: "SNS Management Tool",
    category: "SaaS Development",
    description: "投稿承認フローを効率化するチーム向け管理ツール。開発中。",
    icon: <MessageSquare className="w-8 h-8" />,
    href: "#"
  },
  {
    id: 5,
    title: "CrowdPrinting",
    category: "Platform",
    description: "3Dプリンターのクラウドソーシングプラットフォーム。ものづくりを民主化。",
    icon: <Printer className="w-8 h-8" />,
    href: "#"
  }
];

const SpotlightCard = ({ project }: { project: any }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      className="relative w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 text-neutral-200 shadow-2xl"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity: isFocused ? 1 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.1), transparent 40%)`,
        }}
      />
      <div className="relative flex h-full flex-col justify-between p-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-white shadow-inner">
            {project.icon}
          </div>
          <Badge variant="outline" className="border-neutral-700 text-neutral-400">
            {project.category}
          </Badge>
        </div>
        
        <div>
          <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-neutral-300 group-hover:text-white">
          <span>View Details</span>
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default function ProjectSpotlightGrid() {
  return (
    <section className="w-full py-24 md:py-32 bg-neutral-950 text-white">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-white text-black hover:bg-gray-200">案3: Interactive Spotlight Grid</Badge>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Tech & Innovation</h2>
          <p className="text-neutral-400">カーソルに反応するインタラクティブな体験</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <SpotlightCard key={project.id} project={project} />
          ))}
          
          {/* Empty card for grid balance or CTA */}
          <div className="relative w-full overflow-hidden rounded-xl border border-dashed border-neutral-800 bg-transparent flex items-center justify-center p-8 group cursor-pointer hover:border-neutral-600 hover:bg-neutral-900/50 transition-all">
            <div className="text-center">
              <p className="text-neutral-500 font-medium mb-2">Your Project Here</p>
              <p className="text-sm text-neutral-600">お気軽にご相談ください</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

