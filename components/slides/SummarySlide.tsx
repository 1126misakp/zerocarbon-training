import React from 'react';
import { motion } from 'framer-motion';
import { Home, Search, Cpu, Sun, Recycle, Puzzle, Award, RefreshCw, Hammer, Droplets, ArrowRight } from 'lucide-react';

const SummarySlide: React.FC = () => {
  const items = [
    {
      term: "碳诊断",
      analogy: "检查房屋的漏水点",
      sub: "（减排潜力）",
      icon: Droplets, // Leaks
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200"
    },
    {
      term: "数字化能碳管理平台",
      analogy: "全屋植入的智能中控系统",
      sub: null,
      icon: Cpu, // Smart Control
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "border-indigo-200"
    },
    {
      term: "能源结构重构",
      analogy: "老旧燃气灶更换为太阳能电池组",
      sub: "（供应侧升级）",
      icon: Sun, // Solar/Energy
      color: "text-yellow-600",
      bg: "bg-yellow-50",
      border: "border-yellow-200"
    },
    {
      term: "循环经济",
      analogy: "家里的废水经过滤后还能浇花",
      sub: "（资源闭环）",
      icon: Recycle, // Recycle
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200"
    },
    {
      term: "查漏补缺",
      analogy: "用碳汇和碳信用填补最后的缝隙",
      sub: null,
      icon: Puzzle, // Gap filling
      color: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-200"
    }
  ];

  return (
    <div className="h-full flex flex-col px-4 py-2 font-sans relative">
      
      {/* 1. Metaphor Header */}
      <div className="flex justify-center mb-6 shrink-0 z-10">
        <motion.div 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-r from-slate-800 to-slate-700 text-white px-10 py-5 rounded-2xl shadow-xl flex items-center gap-5 border-4 border-slate-100"
        >
           <div className="bg-white/20 p-3 rounded-full">
             <Home size={32} strokeWidth={2.5} />
           </div>
           <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
             如果把零碳园区的建设比作一次“房屋翻新工程”
           </h2>
        </motion.div>
      </div>

      {/* 2. Analogy Cards - 5 Columns */}
      <div className="flex-1 grid grid-cols-5 gap-4 mb-6 z-10">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className={`flex flex-col items-center text-center p-6 rounded-3xl border-2 ${item.bg} ${item.border} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all h-full justify-center`}
          >
            {/* Icon - Increased size and padding */}
            <div className={`p-5 rounded-full bg-white shadow-md mb-6 ${item.color} ring-4 ring-white/60`}>
              <item.icon size={48} strokeWidth={2} />
            </div>
            
            {/* Term (Subject) - Larger Font */}
            <h3 className={`text-2xl font-black mb-3 ${item.color.replace('text-', 'text-slate-800 ')} leading-tight`}>
              {item.term}
            </h3>
            
            {/* Connector Line */}
            <div className="w-16 h-1.5 bg-slate-200/80 rounded-full mb-4"></div>
            
            {/* Analogy (Metaphor) - Larger Font */}
            <p className="text-xl font-bold text-slate-700 leading-snug px-1">
              {item.analogy}
            </p>
            
            {/* Sub-note - Larger Font */}
            {item.sub && (
              <span className={`text-base mt-3 font-bold opacity-80 ${item.color}`}>
                {item.sub}
              </span>
            )}
          </motion.div>
        ))}
      </div>

      {/* 3. Conclusion Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="bg-white rounded-3xl border-2 border-[#005094]/10 p-8 shadow-xl relative overflow-hidden shrink-0 z-10 flex flex-col md:flex-row items-center gap-8"
      >
        {/* Left: The "Certificate" Concept */}
        <div className="flex-1 flex gap-5 items-start border-r border-slate-100 pr-8">
           <div className="bg-[#005094] text-white p-4 rounded-2xl shadow-lg shrink-0">
             <Award size={40} />
           </div>
           <div>
             <h3 className="text-xl font-black text-slate-800 mb-2">获得零碳园区“毕业证”</h3>
             <p className="text-slate-600 text-lg leading-relaxed text-justify font-medium">
               即通过权威认证或达到相关标准指标，但这 <span className="text-red-500 font-black text-xl px-1">并非终点</span>。
             </p>
           </div>
        </div>

        {/* Right: The "Operations" Concept */}
        <div className="flex-1 flex gap-5 items-center pl-4">
           <div className="p-3 bg-green-50 rounded-full text-green-600 animate-spin-slow-reverse shrink-0">
              <RefreshCw size={32} />
           </div>
           <p className="text-slate-700 text-xl leading-relaxed font-bold">
             唯有 <span className="text-[#005094]">持续优化、动态调整</span>，才能构建起完整稳定、系统长效的零碳园区运营体系。
           </p>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-full blur-3xl -z-10 opacity-60 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-50 rounded-full blur-3xl -z-10 opacity-60 -translate-x-1/3 translate-y-1/3"></div>
      </motion.div>

    </div>
  );
};

export default SummarySlide;