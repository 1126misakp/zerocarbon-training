import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../Logo';

const CoverSlide: React.FC = () => {
  return (
    <div className="relative h-full w-full bg-white flex flex-col items-center justify-between overflow-hidden">
      {/* Header Logo - Increased size significantly to h-32 md:h-40 */}
      <div className="mt-16 z-20">
        <Logo className="h-32 md:h-40" />
      </div>

      {/* Title Content - Dark Blue color to stand out on white background */}
      <div className="flex-1 flex flex-col items-center justify-start pt-20 text-center z-10 px-6">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl md:text-8xl font-bold text-[#005094] mb-8 leading-tight tracking-tight"
        >
          零碳园区实施步骤<br />和关注点
        </motion.h1>
      </div>

      {/* Speaker Info */}
      <div className="mb-24 z-10 text-white font-medium flex gap-8 text-lg opacity-90 drop-shadow-md">
        <span>发言人：王鲁川</span>
        <span>|</span>
        <span>2026年1月9日</span>
      </div>

      {/* Background Waves (Recreating the PDF look) */}
      <div className="absolute inset-0 pointer-events-none -z-0">
        {/* Dark Blue Base Wave */}
        <div className="absolute bottom-0 w-full h-3/5 bg-gradient-to-t from-[#003d73] to-[#005094] rounded-t-[100%] scale-x-150 translate-y-1/4"></div>
        {/* Cyan/Green Accent Wave */}
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-r from-[#009a44] via-[#00a896] to-transparent opacity-60 rounded-t-[100%] scale-x-125 translate-y-1/3 -translate-x-1/4"></div>
      </div>
    </div>
  );
};

export default CoverSlide;