import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';

interface SlideLayoutProps {
  children: React.ReactNode;
  currentSlideIndex: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  title?: string;
  isCover?: boolean;
}

const SlideLayout: React.FC<SlideLayoutProps> = ({
  children,
  currentSlideIndex,
  totalSlides,
  onNext,
  onPrev,
  title,
  isCover = false
}) => {
  const progress = ((currentSlideIndex + 1) / totalSlides) * 100;

  return (
    <div className="flex flex-col h-screen bg-white text-slate-800 overflow-hidden relative">
      {/* Top Header (Only on content slides) */}
      {!isCover && (
        <header className="relative flex items-center justify-between px-12 py-4 border-b-2 border-green-500 z-10 bg-white min-h-[5.5rem]">
          {/* Left: Title */}
          <div className="flex-1 flex justify-start items-center z-10">
            {title && (
              <h2 className="text-3xl font-bold text-slate-700 text-left">{title}</h2>
            )}
          </div>

          {/* Right: Logo (Replaces Page Number) */}
          <div className="flex-none z-10">
            {/* Logo placed in top-right */}
            <Logo className="h-16" />
          </div>
        </header>
      )}

      {/* Main Content Area */}
      <main className={`flex-1 relative w-full h-full overflow-hidden ${!isCover ? 'px-12 py-8' : ''}`}>
        <motion.div
          key={currentSlideIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </main>

      {/* Footer Branding (Only on content slides) */}
      {!isCover && currentSlideIndex !== totalSlides - 1 && (
        <footer className="px-12 py-3 bg-gray-100 flex justify-between items-center text-xs text-slate-400 z-10">
          <span>www.cecep.cn</span>
          <span>零碳园区建设培训资料</span>
        </footer>
      )}

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100 z-20">
        <motion.div 
          className="h-full bg-blue-600"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 right-12 flex gap-4 z-30">
        <button
          onClick={onPrev}
          disabled={currentSlideIndex === 0}
          className={`p-2 rounded-full shadow-md transition-all ${
            currentSlideIndex === 0 ? 'opacity-0' : 'bg-white/80 hover:bg-white text-blue-900 border border-blue-100'
          }`}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={onNext}
          disabled={currentSlideIndex === totalSlides - 1}
          className={`p-2 rounded-full shadow-md transition-all ${
            currentSlideIndex === totalSlides - 1 ? 'opacity-0' : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default SlideLayout;