"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Globe, Code, Printer, ArrowRight, Building2, Bot, Map } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AIポストラボ",
    category: "AIを活用したSNS運用支援ツール",
    description: "X(旧Twitter)等のSNS運用をサポートするソフトウェア。AIを活用することにより投稿文章の作成をサポートします。",
    icon: <Bot className="w-12 h-12" />,
    color: "bg-blue-600",
    textColor: "text-white",
    href: "https://www.aipostlab.net/",
    devPeriod: "2025年9月〜開発中",
    type: "service"
  },
  {
    id: 2,
    title: "LocalizeJapan",
    category: "YouTube動画の翻訳・吹替サービス",
    description: "海外コンテンツの日本語ローカライズに特化した、YouTube動画の翻訳・吹き替えサービス。",
    icon: <Globe className="w-12 h-12" />,
    color: "bg-indigo-600",
    textColor: "text-white",
    href: "https://www.localizejapan.com/",
    type: "service"
  },
  {
    id: 3,
    title: "3Dバーチャルツアー制作代行",
    category: "Matterportによる空間撮影サービス",
    description: "Matterportを活用した、没入感のある不動産・施設の3Dバーチャルツアー撮影サービス。",
    icon: <Camera className="w-12 h-12" />,
    color: "bg-gray-900",
    textColor: "text-white",
    href: "https://matterport-service-hp.vercel.app/",
    type: "service"
  },
  {
    id: 4,
    title: "CrowdPrinting",
    category: "3Dプリント印刷代行プラットフォーム",
    description: "3Dプリント印刷代行サービス。オンラインで簡単に3Dプリントを依頼できるプラットフォーム。",
    icon: <Printer className="w-12 h-12" />,
    color: "bg-orange-500",
    textColor: "text-white",
    href: "https://crowdprinting.jp/",
    devPeriod: "開発中",
    type: "service"
  },
  {
    id: 5,
    title: "東京3D不動産",
    category: "3Dマップで不動産を探せるWebアプリ",
    description: "GoogleMaps APIを活用した、不動産情報を3Dビューでインタラクティブに確認可能なマップ。",
    icon: <Map className="w-12 h-12" />,
    color: "bg-emerald-600",
    textColor: "text-white",
    href: "https://tokyo-3d-realestates.vercel.app/",
    devPeriod: "PoC段階",
    type: "case"
  },
  {
    id: 6,
    title: "Northerns株式会社",
    category: "自社コーポレートサイトの構築",
    description: "自社コーポレートサイトの設計・開発。Next.js + Tailwind CSSによるモダンなWebサイト。",
    icon: <Building2 className="w-12 h-12" />,
    color: "bg-gray-800",
    textColor: "text-white",
    href: "https://northerns.vercel.app/",
    type: "case"
  },
  {
    id: 7,
    title: "Yukikaze Technology",
    category: "中高生ロボコンチームの公式HP制作",
    description: "中高生ロボコンチーム「Yukikaze Technology」公式HPの開発実績。",
    icon: <Code className="w-12 h-12" />,
    color: "bg-cyan-600",
    textColor: "text-white",
    href: "https://www.yukikaze.tech/",
    type: "case"
  }
];

export default function ProjectHoverReveal() {
  const [activeTab, setActiveTab] = useState<"service" | "case">("service");
  const filteredProjects = projects.filter(p => p.type === activeTab);
  const [activeProject, setActiveProject] = useState(filteredProjects[0]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const filtered = projects.filter(p => p.type === activeTab);
    setActiveProject(filtered[0]);
  }, [activeTab]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="w-full py-24 md:py-32 bg-white overflow-hidden relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Mouse Follow Circle Outline */}
      <motion.div
        className="pointer-events-none absolute rounded-full border-[3px] border-black"
        style={{
          width: 120,
          height: 120,
          left: mousePosition.x - 60,
          top: mousePosition.y - 60,
        }}
        animate={{
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0.8,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          opacity: { duration: 0.15 }
        }}
      />

      <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
        <div className="mb-12 text-center md:text-left">
          <p className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-4">Our Works</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900 mb-6">
            Selected Works
          </h2>
          <p className="text-gray-600 max-w-2xl text-lg">
            最先端技術とクリエイティブな発想で、多様なビジネス課題を解決するプロジェクトを展開しています。
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-10">
          <button
            onClick={() => setActiveTab("service")}
            className={`px-6 py-3 rounded-full font-bold text-sm transition-all cursor-pointer ${activeTab === "service" ? 'bg-black text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
          >
            自社サービス
          </button>
          <button
            onClick={() => setActiveTab("case")}
            className={`px-6 py-3 rounded-full font-bold text-sm transition-all cursor-pointer ${activeTab === "case" ? 'bg-black text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
          >
            開発実績
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Project List */}
          <div className="space-y-2">
            {filteredProjects.map((project) => {
              const isActive = activeProject.id === project.id;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer"
                  onMouseEnter={() => setActiveProject(project)}
                >
                  <div className={`flex items-center justify-between border-b py-6 transition-colors duration-300 ${isActive ? 'border-black' : 'border-gray-200 hover:border-black'}`}>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <p className={`text-sm transition-colors ${isActive ? 'text-black' : 'text-gray-500'}`}>{project.category}</p>
                        {project.devPeriod && (
                          <span className={`text-xs px-2 py-0.5 rounded-full transition-colors ${isActive ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'}`}>
                            {project.devPeriod}
                          </span>
                        )}
                      </div>
                      <h3 className={`text-2xl md:text-4xl font-bold transition-colors duration-300 ${isActive ? 'text-black' : 'text-gray-300'}`}>
                        {project.title}
                      </h3>
                    </div>
                    <ArrowRight className={`w-6 h-6 shrink-0 transition-all duration-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Preview Area (Sticky) */}
          <div className="hidden lg:block sticky top-32 h-[500px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`w-full h-full rounded-3xl overflow-hidden shadow-2xl ${activeProject.color} relative flex items-center justify-center p-12`}
              >
                {/* Background Decoration */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

                <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-md">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="p-6 bg-white/10 backdrop-blur-md rounded-full"
                  >
                    <div className={activeProject.textColor}>
                      {activeProject.icon}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className={activeProject.textColor}
                  >
                    <h4 className="text-3xl font-bold mb-4">{activeProject.title}</h4>
                    <p className="text-lg opacity-90 leading-relaxed">
                      {activeProject.description}
                    </p>
                  </motion.div>

                  <motion.a
                    href={activeProject.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center gap-2"
                  >
                    View Project <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
