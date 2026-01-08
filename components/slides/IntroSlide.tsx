import React from 'react';
import { motion } from 'framer-motion';
import { PHASES_DATA } from '../../constants';

const IntroSlide: React.FC = () => {
  return (
    <div className="h-full w-full bg-white flex flex-col items-center justify-center relative overflow-hidden font-sans p-6">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-50 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-green-50 rounded-full blur-3xl opacity-40"></div>
      </div>

      {/* Quote Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-6xl mb-20"
      >
        <div className="relative inline-block px-4 py-4 md:px-12">
           {/* Big Quotes */}
           <span className="absolute -top-12 left-[-1rem] md:left-[-3rem] text-8xl md:text-9xl text-blue-200 font-serif opacity-50 font-black leading-none">“</span>
           
           <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-slate-700 tracking-wide flex flex-col items-center gap-10 md:gap-14">
             
             {/* Line 1 */}
             <div className="leading-snug">
               建设零碳园区是一个从
               <span className="inline-block relative mx-3 md:mx-5 font-bold text-[#005094]">
                  摸清底数
                  <span className="absolute bottom-1 left-0 w-full h-2 md:h-3 bg-blue-100/80 -z-10 rounded-sm"></span>
               </span>
               到
             </div>

             {/* Line 2 */}
             <div className="leading-snug">
               <span className="inline-block relative mx-3 md:mx-5 font-bold text-[#81BC00]">
                  系统重构
                  <span className="absolute bottom-1 left-0 w-full h-2 md:h-3 bg-green-100/80 -z-10 rounded-sm"></span>
               </span>
               的动态过程，
             </div>
             
             {/* Line 3 */}
             <div className="leading-snug">
               建议分为以下
               <span className="inline-block relative mx-3 md:mx-5 font-bold text-slate-900 border-b-4 md:border-b-8 border-slate-800 px-2 leading-none pb-1">
                  六个阶段
               </span>
               ：
             </div>

           </h2>

           <span className="absolute -bottom-20 -right-4 md:-right-12 text-8xl md:text-9xl text-blue-200 font-serif opacity-50 font-black leading-none">”</span>
        </div>
      </motion.div>

      {/* 6 Phases Horizontal List */}
      <div className="w-full max-w-[1400px] px-4 z-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 relative">
           
           {/* Connecting Line (Desktop Only) */}
           <motion.div 
             initial={{ scaleX: 0 }}
             animate={{ scaleX: 1 }}
             transition={{ delay: 0.5, duration: 0.8 }}
             className="hidden md:block absolute top-[3.5rem] left-[8%] right-[8%] h-1 bg-slate-100 -z-10 rounded-full origin-left"
           ></motion.div>

           {PHASES_DATA.map((phase, index) => (
             <motion.div
               key={phase.id}
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 + index * 0.1 }}
               className="flex flex-col items-center relative group"
             >
                {/* Icon */}
                <div className={`
                  w-24 h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center text-white shadow-xl mb-6
                  ${phase.color} transition-transform duration-300 group-hover:-translate-y-2 ring-8 ring-white
                `}>
                  <phase.icon size={40} strokeWidth={1.5} />
                </div>

                {/* Badge */}
                <div className="bg-slate-100 text-slate-400 text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-widest shadow-sm">
                  PHASE 0{phase.id}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-slate-800 text-center leading-tight">
                  {phase.title}
                </h3>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default IntroSlide;