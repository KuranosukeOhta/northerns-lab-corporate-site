"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Globe, Code, MessageSquare, Printer, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "3D Visualization Services",
    category: "Spatial Computing",
    description: "Matterportを活用した、没入感のある不動産・施設の3Dバーチャルツアー撮影サービス。",
    icon: <Camera className="w-12 h-12" />,
    color: "bg-gray-900",
    textColor: "text-white",
    href: "https://matterport-service-hp.vercel.app/"
  },
  {
    id: 2,
    title: "TranslateJapan",
    category: "Localization",
    description: "海外コンテンツの日本語ローカライズに特化した、YouTube動画の翻訳・吹き替えサービス。",
    icon: <Globe className="w-12 h-12" />,
    color: "bg-indigo-600",
    textColor: "text-white",
    href: "https://translate-japan.vercel.app/"
  },
  {
    id: 3,
    title: "Local Business DX",
    category: "Consulting",
    description: "地域企業のデジタル化を包括的にサポート。Webサイト制作からSNS運用、業務効率化まで。",
    icon: <Code className="w-12 h-12" />,
    color: "bg-emerald-600",
    textColor: "text-white",
    href: "#"
  },
  {
    id: 4,
    title: "SNS Management Tool",
    category: "SaaS / In Development",
    description: "GitHubライクなレビューフローを取り入れた、チーム向けSNS運用管理プラットフォーム。",
    icon: <MessageSquare className="w-12 h-12" />,
    color: "bg-blue-600",
    textColor: "text-white",
    href: "#"
  },
  {
    id: 5,
    title: "CrowdPrinting",
    category: "Platform / In Development",
    description: "3Dプリンター所有者と印刷ニーズを持つユーザーをつなぐマッチングプラットフォーム。",
    icon: <Printer className="w-12 h-12" />,
    color: "bg-orange-500",
    textColor: "text-white",
    href: "#"
  }
];

export default function ProjectHoverReveal() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="w-full py-24 md:py-32 bg-white overflow-hidden relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Mouse Follow Highlight */}
      <motion.div
        className="pointer-events-none absolute w-[500px] h-[500px] rounded-full"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
          opacity: isHovering ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          opacity: { duration: 0.2 }
        }}
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0.03) 40%, transparent 70%)",
        }}
      />
      
      {/* Secondary smaller highlight for more depth */}
      <motion.div
        className="pointer-events-none absolute w-[200px] h-[200px] rounded-full"
        animate={{
          x: mousePosition.x - 100,
          y: mousePosition.y - 100,
          opacity: isHovering ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          opacity: { duration: 0.2 }
        }}
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 70%)",
        }}
      />
      
      <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
        <div className="mb-20 text-center md:text-left">
          <p className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-4">Our Works</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900 mb-6">
            Selected Works
          </h2>
          <p className="text-gray-600 max-w-2xl text-lg">
            最先端技術とクリエイティブな発想で、多様なビジネス課題を解決するプロジェクトを展開しています。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start relative">
          {/* Project List */}
          <div className="space-y-4 z-10">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: project.id * 0.1 }}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveProject(project)}
              >
                <div className="flex items-center justify-between border-b border-gray-200 py-8 group-hover:border-black transition-colors duration-300">
                  <div>
                    <p className="text-sm text-gray-500 mb-2 group-hover:text-black transition-colors">{project.category}</p>
                    <h3 className="text-2xl md:text-4xl font-bold text-gray-300 group-hover:text-black transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Preview Area (Sticky) */}
          <div className="hidden lg:block sticky top-32 h-[600px] w-full">
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

