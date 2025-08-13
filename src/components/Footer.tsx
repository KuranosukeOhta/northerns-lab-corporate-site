"use client";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto py-8 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-center md:items-start">
          <a className="font-bold text-lg mb-2" href="#">
            Northerns株式会社
          </a>
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Northerns株式会社 All rights reserved.</p>
        </div>
        <nav className="flex gap-4 sm:gap-6 mt-4 md:mt-0">
          <button 
            onClick={() => scrollToSection('news')}
            className="text-sm hover:underline underline-offset-4 cursor-pointer"
          >
            プレスリリース
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-sm hover:underline underline-offset-4 cursor-pointer"
          >
            お問い合わせ
          </button>
        </nav>
      </div>
    </footer>
  );
}
