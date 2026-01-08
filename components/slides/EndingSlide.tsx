import React from 'react';
import { motion } from 'framer-motion';

const EndingSlide: React.FC = () => {
  return (
    <div className="relative h-full w-full bg-white flex flex-col items-center justify-between overflow-hidden">
      
      {/* Upper Content - Adjusted positioning to be higher up on the white background */}
      <div className="flex-1 flex flex-col items-center justify-start pt-32 text-center z-10">
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-8xl font-black text-[#005094] mb-2 tracking-wider opacity-10"
        >
          THANKS
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold text-[#005094]"
        >
          谢谢观看
        </motion.p>
      </div>

      {/* Contact Footer Info */}
      <div className="mb-8 z-20 text-white/80 text-xs flex flex-col items-center gap-2 drop-shadow-md">
        <div className="flex gap-6">
          <span>杭州市西湖区文一西路588西溪首座A7</span>
          <span>Tel: 0571-88852888</span>
          <span>Fax: 0571-88852714</span>
        </div>
        <span className="font-bold">www.cecep.cn</span>
      </div>

      {/* Background Waves - Kept similar but text is now above it */}
      <div className="absolute inset-0 pointer-events-none -z-0">
        <div className="absolute bottom-0 w-full h-3/5 bg-gradient-to-t from-[#003d73] to-[#005094] rounded-t-[100%] scale-x-150 translate-y-1/4"></div>
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-r from-[#009a44] via-[#00a896] to-transparent opacity-60 rounded-t-[100%] scale-x-125 translate-y-1/3 -translate-x-1/4"></div>
      </div>
    </div>
  );
};

export default EndingSlide;
