"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Camera, Globe, Code, MessageSquare, Printer, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "3D Visualization",
    subtitle: "Matterport / Digital Twin",
    description: "空間をデジタル化し、Web上で自由にウォークスルーできる体験を提供。",
    icon: <Camera className="w-8 h-8" />,
    color: "bg-[#1a1a1a]",
    textColor: "text-white",
    href: "https://matterport-service-hp.vercel.app/"
  },
  {
    id: 2,
    title: "TranslateJapan",
    subtitle: "Localization / Dubbing",
    description: "海外コンテンツの日本語ローカライズ。翻訳から吹き替えまでワンストップで提供。",
    icon: <Globe className="w-8 h-8" />,
    color: "bg-[#4338ca]", // Indigo 700
    textColor: "text-white",
    href: "https://translate-japan.vercel.app/"
  },
  {
    id: 3,
    title: "Local Business DX",
    subtitle: "Consulting / Development",
    description: "地域企業のデジタル変革を支援。Web制作、SNS運用、業務効率化。",
    icon: <Code className="w-8 h-8" />,
    color: "bg-[#059669]", // Emerald 600
    textColor: "text-white",
    href: "#"
  },
  {
    id: 4,
    title: "SNS Tools",
    subtitle: "SaaS Product",
    description: "チームのためのSNS投稿管理プラットフォーム。承認フローを効率化。",
    icon: <MessageSquare className="w-8 h-8" />,
    color: "bg-[#2563eb]", // Blue 600
    textColor: "text-white",
    href: "#"
  },
  {
    id: 5,
    title: "CrowdPrinting",
    subtitle: "Matching Platform",
    description: "3Dプリンターのシェアリングエコノミー。製造をもっと身近に。",
    icon: <Printer className="w-8 h-8" />,
    color: "bg-[#ea580c]", // Orange 600
    textColor: "text-white",
    href: "#"
  }
];

const Card = ({ i, project, progress, range, targetScale }: any) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className={`flex flex-col relative -top-[25%] h-[450px] w-[90%] md:w-[800px] rounded-3xl p-10 origin-top shadow-2xl ${project.color}`}
      >
        <div className="flex justify-between items-center mb-8">
          <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm text-white">
            {project.icon}
          </div>
          <a 
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors border px-4 py-2 rounded-full border-white/20 hover:bg-white/10"
          >
            Visit <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        
        <div className="flex-1 flex flex-col justify-end">
          <span className="text-white/60 font-semibold tracking-wider uppercase text-sm mb-2">{project.subtitle}</span>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-4">{project.title}</h3>
          <p className="text-white/80 text-lg md:text-xl max-w-xl leading-relaxed">{project.description}</p>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectStickyStack() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section className="bg-gray-100 pb-24">
      <div className="container px-4 md:px-6 mx-auto pt-24 pb-12">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-black text-white hover:bg-gray-800">案2: Sticky Parallax Stack</Badge>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-gray-900">Immersive Story</h2>
          <p className="text-gray-500">スクロールで物語を読み進めるような体験</p>
        </div>
      </div>

      <div ref={container} className="relative">
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return (
            <Card 
              key={i} 
              i={i} 
              project={project} 
              progress={scrollYProgress} 
              range={[i * .25, 1]} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
    </section>
  );
}

