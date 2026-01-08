import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PHASES_DATA } from '../../constants';
import { PhaseStep, PhaseSubStep } from '../../types';
import { 
  Building2, 
  FileText, 
  Handshake, 
  ArrowDown, 
  Coins, 
  Landmark, 
  LayoutTemplate,
  Lightbulb,
  Zap,
  ArrowRight,
  Battery,
  Target,
  Factory,
  Leaf,
  RefreshCw,
  BadgeCheck,
  MonitorSmartphone,
  MapPin,
  Flame,
  Truck,
  Scan,
  Box,
  Globe,
  Filter,
  Medal,
  Fan,
  Thermometer,
  BookOpen,
  TrendingDown,
  Timer,
  Recycle,
  Award,
  Sun,
  Car,
  Activity,
  Grid,
  Share2,
  PieChart,
  BarChart4,
  SearchCheck,
  Calculator,
  Trees,
  Flower2,
  Sprout,
  Waves,
  ShoppingCart,
  ScrollText,
  BookOpenCheck,
  FileBarChart,
  Siren,
  Wrench,
  TrendingUp,
  CircleDollarSign
} from 'lucide-react';

const PhasesSlide: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);
  const [hoveredSubStep, setHoveredSubStep] = useState<number>(0);

  const activePhase = PHASES_DATA.find(p => p.id === activeId) as PhaseStep;

  // Component to render the specific visuals based on visualType
  const renderPhaseVisual = (subStep: PhaseSubStep) => {
    switch (subStep.visualType) {
      // --- PHASE 1 VISUALS ---
      case 'POLICY_ALIGNMENT':
        return (
          <div className="flex flex-col items-center justify-center h-full gap-8 w-full">
            <div className="flex items-center justify-around w-full px-4">
               <div className="flex flex-col items-center gap-4">
                 <div className="bg-blue-100 p-6 rounded-full text-blue-700 shadow-md"><Landmark size={64}/></div>
                 <span className="text-xl font-bold text-slate-800">政府政策</span>
               </div>
               <ArrowRight size={48} className="text-slate-300" />
               <div className="flex flex-col items-center gap-4">
                 <div className="bg-green-100 p-6 rounded-full text-green-700 shadow-md"><FileText size={64}/></div>
                 <span className="text-xl font-bold text-slate-800">实施方案</span>
               </div>
               <ArrowRight size={48} className="text-slate-300" />
               <div className="flex flex-col items-center gap-4">
                 <div className="bg-indigo-100 p-6 rounded-full text-indigo-700 shadow-md"><Handshake size={64}/></div>
                 <span className="text-xl font-bold text-slate-800">确立合作</span>
               </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 w-full">
               <h4 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">关键检查点</h4>
               <ul className="space-y-4 text-lg text-slate-600">
                  <li className="flex items-center gap-3">✅ 省级/市级双碳目标对标</li>
                  <li className="flex items-center gap-3">✅ 园区管委会合作意向书</li>
                  <li className="flex items-center gap-3">✅ 零碳示范园区申报标准</li>
               </ul>
            </div>
          </div>
        );
      case 'PROFIT_MODEL':
        return (
          <div className="flex flex-col items-center justify-center h-full w-full px-4">
             <div className="grid grid-cols-2 gap-6 w-full mb-8">
                <div className="bg-orange-50 p-6 rounded-2xl border-2 border-orange-100 flex flex-col items-center text-center shadow-sm">
                   <span className="text-4xl font-black text-orange-500 mb-2">Subsidies</span>
                   <span className="text-xl font-bold text-slate-700">政府补贴/奖补</span>
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-100 flex flex-col items-center text-center shadow-sm">
                   <span className="text-4xl font-black text-blue-500 mb-2">Investment</span>
                   <span className="text-xl font-bold text-slate-700">企业/社会投资</span>
                </div>
                <div className="col-span-2 bg-green-50 p-8 rounded-2xl border-2 border-green-100 flex flex-col items-center text-center shadow-md">
                   <div className="flex items-center gap-3 text-green-600 mb-2">
                      <Coins size={40} />
                      <span className="text-4xl font-black">ROI & IRR</span>
                   </div>
                   <span className="text-xl font-bold text-slate-700">全生命周期收益测算</span>
                </div>
             </div>
             <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <motion.div 
                   className="h-full bg-gradient-to-r from-orange-400 via-blue-400 to-green-400"
                   initial={{ width: 0 }}
                   animate={{ width: "100%" }}
                   transition={{ duration: 1.5, repeat: Infinity }}
                />
             </div>
             <p className="mt-4 text-lg font-medium text-slate-400">资金流动与平衡模型示意</p>
          </div>
        );
      case 'SERVICE_SCOPE':
        return (
          <div className="relative w-full h-full flex items-center justify-center p-4">
             {/* Connecting Lines Layer */}
             <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-visible opacity-30">
               <defs>
                 <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                   <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
                 </marker>
               </defs>
               <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="8,4" markerEnd="url(#arrowhead)" />
               <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="8,4" markerEnd="url(#arrowhead)" />
               <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="8,4" markerEnd="url(#arrowhead)" />
               <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="8,4" markerEnd="url(#arrowhead)" />
             </svg>

             {/* Center Hub */}
             <motion.div 
               className="absolute top-1/2 left-1/2 z-20"
               style={{ x: '-50%', y: '-50%' }}
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
             >
               <div className="bg-[#005094] w-56 h-56 rounded-full flex flex-col items-center justify-center text-white shadow-2xl border-8 border-blue-50/80 relative">
                  <span className="text-4xl font-black tracking-widest text-center leading-tight">顶层<br/>规划</span>
                  <div className="absolute -inset-8 border-4 border-dashed border-blue-200 rounded-full animate-spin-slow opacity-50"></div>
               </div>
             </motion.div>
             
             {/* Satellites */}
             <motion.div 
               className="absolute top-[5%] left-[2%] w-72 bg-white p-6 rounded-2xl shadow-xl border-l-8 border-green-500 z-10"
               initial={{ opacity: 0, x: -30, y: -30 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.1 }}
             >
                <div className="flex items-center gap-4">
                   <div className="bg-green-100 p-4 rounded-xl text-green-600"><Zap size={36}/></div>
                   <div>
                     <h4 className="text-xl font-bold text-slate-800">节能改造</h4>
                     <span className="text-sm font-bold text-slate-400 uppercase">Energy Saving</span>
                   </div>
                </div>
             </motion.div>

             <motion.div 
               className="absolute top-[5%] right-[2%] w-72 bg-white p-6 rounded-2xl shadow-xl border-l-8 border-yellow-500 z-10"
               initial={{ opacity: 0, x: 30, y: -30 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.2 }}
             >
                <div className="flex items-center gap-4">
                   <div className="bg-yellow-100 p-4 rounded-xl text-yellow-600"><Lightbulb size={36}/></div>
                   <div>
                     <h4 className="text-xl font-bold text-slate-800">分布式光伏</h4>
                     <span className="text-sm font-bold text-slate-400 uppercase">PV System</span>
                   </div>
                </div>
             </motion.div>

             <motion.div 
               className="absolute bottom-[5%] left-[2%] w-72 bg-white p-6 rounded-2xl shadow-xl border-l-8 border-orange-500 z-10"
               initial={{ opacity: 0, x: -30, y: 30 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.3 }}
             >
                <div className="flex items-center gap-4">
                   <div className="bg-orange-100 p-4 rounded-xl text-orange-600"><Battery size={36}/></div>
                   <div>
                     <h4 className="text-xl font-bold text-slate-800">储能配置</h4>
                     <span className="text-sm font-bold text-slate-400 uppercase">Storage</span>
                   </div>
                </div>
             </motion.div>

             <motion.div 
               className="absolute bottom-[5%] right-[2%] w-72 bg-white p-6 rounded-2xl shadow-xl border-l-8 border-indigo-500 z-10"
               initial={{ opacity: 0, x: 30, y: 30 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.4 }}
             >
                <div className="flex items-center gap-4">
                   <div className="bg-indigo-100 p-4 rounded-xl text-indigo-600"><LayoutTemplate size={36}/></div>
                   <div>
                     <h4 className="text-xl font-bold text-slate-800">数字化平台</h4>
                     <span className="text-sm font-bold text-slate-400 uppercase">Digital Platform</span>
                   </div>
                </div>
             </motion.div>
          </div>
        );

      // --- PHASE 2 VISUALS ---
      case 'BOUNDARY_MAPPING':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
             {/* Central Map Zone - Bigger */}
             <motion.div 
               className="relative z-10 bg-indigo-50 border-8 border-dashed border-indigo-300 w-64 h-64 rounded-full flex flex-col items-center justify-center text-indigo-700 shadow-2xl"
               initial={{ scale: 0.8 }} animate={{ scale: 1 }}
             >
                <MapPin size={80} className="mb-4 drop-shadow-md" />
                <span className="font-black text-2xl tracking-wide">园区物理边界</span>
                <span className="text-sm font-medium opacity-70 mt-1">Geographic Boundary</span>
             </motion.div>

             {/* Orbiting Assets - Bigger */}
             <motion.div className="absolute top-[5%] left-1/2 -translate-x-1/2 flex flex-col items-center p-4 bg-white shadow-xl rounded-2xl border-2 border-indigo-100 min-w-[140px]"
               initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
             >
                <Building2 size={40} className="text-indigo-500 mb-2"/>
                <span className="text-lg font-bold text-slate-700">建筑资产</span>
             </motion.div>

             <motion.div className="absolute bottom-[10%] left-[5%] flex flex-col items-center p-4 bg-white shadow-xl rounded-2xl border-2 border-indigo-100 min-w-[140px]"
               initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
             >
                <Scan size={40} className="text-indigo-500 mb-2"/>
                <span className="text-lg font-bold text-slate-700">公辅系统</span>
                <span className="text-sm text-slate-400 font-medium">供水/照明</span>
             </motion.div>

             <motion.div className="absolute bottom-[10%] right-[5%] flex flex-col items-center p-4 bg-white shadow-xl rounded-2xl border-2 border-indigo-100 min-w-[140px]"
               initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}
             >
                <Box size={40} className="text-indigo-500 mb-2"/>
                <span className="text-lg font-bold text-slate-700">租户设备</span>
                <span className="text-sm text-slate-400 font-medium">重点用能</span>
             </motion.div>

             {/* Connecting Lines */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-50">
                <line x1="50%" y1="50%" x2="50%" y2="18%" stroke="#818cf8" strokeWidth="4" strokeDasharray="8,8" />
                <line x1="50%" y1="50%" x2="18%" y2="80%" stroke="#818cf8" strokeWidth="4" strokeDasharray="8,8" />
                <line x1="50%" y1="50%" x2="82%" y2="80%" stroke="#818cf8" strokeWidth="4" strokeDasharray="8,8" />
             </svg>
          </div>
        );

      case 'ISO_ACCOUNTING':
        return (
          <div className="relative w-full h-full flex items-center justify-center p-4">
             {/* Scope 3: Outer Ring - Dashed */}
             <motion.div 
               className="absolute w-[92%] aspect-square rounded-full border-4 border-dashed border-slate-300 flex flex-col items-center pt-8"
               initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 }}
             >
                <span className="text-2xl font-bold text-slate-600 mb-1">范围三</span>
                <span className="text-lg font-medium text-slate-400 mb-2">其他间接排放 (供应链)</span>
                <Truck size={32} className="text-slate-300" />
             </motion.div>

             {/* Scope 2: Middle Ring - Solid Blue */}
             <motion.div 
               className="absolute w-[62%] aspect-square rounded-full border-4 border-indigo-200 bg-indigo-50 flex flex-col items-center pt-5 z-10 shadow-lg"
               initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }}
             >
                <div className="flex items-center gap-1 bg-indigo-600 text-white px-3 py-1 rounded-full mb-1 shadow-md transform -translate-y-1">
                   <Zap size={14} fill="currentColor" />
                   <span className="text-xs font-bold">重点关注</span>
                </div>
                <span className="text-3xl font-black text-indigo-700 leading-tight">范围二</span>
                <span className="text-lg font-bold text-indigo-500">能源间接排放</span>
             </motion.div>

             {/* Scope 1: Inner Circle - Dark */}
             <motion.div 
               className="absolute w-[32%] aspect-square rounded-full bg-slate-800 flex flex-col items-center justify-center text-white z-20 shadow-2xl"
               initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3 }}
             >
                <Flame size={48} className="mb-2 text-orange-500" fill="#f97316" />
                <span className="text-2xl font-bold leading-none mb-1">范围一</span>
                <span className="text-sm font-medium text-slate-300">直接排放</span>
             </motion.div>
          </div>
        );

      case 'EMISSION_SCENARIOS':
        return (
          <div className="flex w-full h-full gap-6 items-stretch p-2">
             {/* Manufacturing Side */}
             <motion.div 
               className="flex-1 bg-gradient-to-br from-orange-50 to-white rounded-3xl border-2 border-orange-200 p-6 flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl transition-shadow"
               initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
             >
                <div className="bg-orange-100 p-6 rounded-full mb-6 text-orange-600 ring-4 ring-orange-50">
                  <Factory size={64} />
                </div>
                <h4 className="font-black text-orange-900 text-2xl mb-4">生产制造型</h4>
                <div className="bg-white p-4 rounded-xl border border-orange-100 shadow-sm w-full mb-4">
                   <strong className="block text-orange-600 text-sm uppercase tracking-wider mb-1">关键排放源</strong>
                   <span className="text-xl font-bold text-slate-700">工业工艺过程</span>
                </div>
                <p className="text-lg text-slate-500 font-medium">化工 / 钢铁 / 建材</p>
             </motion.div>

             {/* Divider */}
             <div className="w-px bg-slate-200 relative mx-2">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full border-2 border-slate-200 text-slate-400 text-lg font-black shadow-sm z-10">
                  VS
                </div>
             </div>

             {/* Office Side */}
             <motion.div 
               className="flex-1 bg-gradient-to-br from-blue-50 to-white rounded-3xl border-2 border-blue-200 p-6 flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl transition-shadow"
               initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
             >
                <div className="bg-blue-100 p-6 rounded-full mb-6 text-blue-600 ring-4 ring-blue-50">
                  <Building2 size={64} />
                </div>
                <h4 className="font-black text-blue-900 text-2xl mb-4">商务办公型</h4>
                <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm w-full mb-4">
                   <strong className="block text-blue-600 text-sm uppercase tracking-wider mb-1">关键排放源</strong>
                   <span className="text-xl font-bold text-slate-700">建筑用能</span>
                </div>
                <p className="text-lg text-slate-500 font-medium">空调 / 照明 / 数据中心</p>
             </motion.div>
          </div>
        );

      case 'STRATEGY_PLANNING':
        return (
          <div className="flex flex-col items-center justify-between h-full w-full p-4 relative overflow-hidden">
             {/* Top Node */}
             <motion.div 
               className="bg-indigo-600 text-white px-10 py-6 rounded-2xl shadow-xl flex items-center gap-4 z-20 w-3/4 justify-center relative"
               initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
             >
                <FileText size={40} />
                <span className="font-bold text-2xl">制定差异化实施方案</span>
                {/* Connection Dot - I will keep this anchor dot as it's part of the box */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-indigo-600 rounded-full"></div>
             </motion.div>

             {/* Connecting Path Container */}
             <div className="flex-1 w-full relative z-10">
                <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                   {/* 1. Main Trunk: Top -> Center */}
                   <motion.path 
                      d="M 50 0 L 50 50"
                      fill="transparent"
                      stroke="#6366f1" // Indigo-500
                      strokeWidth="4px"
                      vectorEffect="non-scaling-stroke"
                      strokeLinecap="round" // Added round cap for smoother joints
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                   />
                   
                   {/* 2. Left Branch: Center -> Left -> Down */}
                   <motion.path 
                      d="M 50 50 L 25 50 L 25 100"
                      fill="transparent"
                      stroke="#f97316" // Orange-500
                      strokeWidth="4px"
                      vectorEffect="non-scaling-stroke"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
                   />

                   {/* 3. Right Branch: Center -> Right -> Down */}
                   <motion.path 
                      d="M 50 50 L 75 50 L 75 100"
                      fill="transparent"
                      stroke="#3b82f6" // Blue-500
                      strokeWidth="4px"
                      vectorEffect="non-scaling-stroke"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
                   />
                </svg>

                {/* Central Dot has been removed */}
             </div>

             {/* Bottom Nodes */}
             <div className="flex w-full gap-8 h-2/5 z-20">
                <motion.div 
                  className="flex-1 bg-orange-50 border-t-8 border-orange-500 rounded-2xl p-6 shadow-md flex flex-col items-center text-center justify-center hover:-translate-y-1 transition-transform relative"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
                >
                   {/* Top connection point */}
                   <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-orange-500 rounded-full"></div>
                   
                   <span className="text-sm font-black text-orange-400 uppercase tracking-widest mb-2">针对制造型</span>
                   <h5 className="font-bold text-2xl text-slate-800 mb-2">工艺低碳化改造</h5>
                   <p className="text-base text-slate-500 font-medium">能源梯级利用 + 设备能效提升</p>
                </motion.div>

                <motion.div 
                  className="flex-1 bg-blue-50 border-t-8 border-blue-500 rounded-2xl p-6 shadow-md flex flex-col items-center text-center justify-center hover:-translate-y-1 transition-transform relative"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
                >
                   {/* Top connection point */}
                   <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
                   
                   <span className="text-sm font-black text-blue-400 uppercase tracking-widest mb-2">针对商务型</span>
                   <h5 className="font-bold text-2xl text-slate-800 mb-2">建筑节能 + 绿色交通</h5>
                   <p className="text-base text-slate-500 font-medium">高性能围护结构 + 充电桩全覆盖</p>
                </motion.div>
             </div>
          </div>
        );

      // --- PHASE 3 VISUALS (PILOT) ---
      // Step 1: Selection
      case 'PILOT_SELECTION':
        return (
          <div className="flex flex-col items-center justify-center h-full w-full gap-6">
             <div className="flex gap-4 mb-4">
               {[1, 2, 3, 4].map((i) => (
                 <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`w-16 h-20 bg-slate-100 rounded-lg flex flex-col items-center justify-center border-2 ${i === 2 ? 'border-purple-300 bg-purple-50' : 'border-slate-200'}`}
                 >
                    <Building2 size={24} className={i === 2 ? 'text-purple-500' : 'text-slate-300'} />
                 </motion.div>
               ))}
             </div>
             <motion.div 
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{ delay: 0.5 }}
               className="bg-purple-100 p-4 rounded-full text-purple-600"
             >
               <Filter size={32} />
             </motion.div>
             <motion.div 
               className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-6 rounded-2xl shadow-xl flex flex-col items-center border-4 border-purple-200"
               initial={{ scale: 0.5, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ delay: 0.8, type: "spring" }}
             >
                <Medal size={48} className="mb-2 text-yellow-300" />
                <h4 className="text-3xl font-bold">标杆示范企业</h4>
                <div className="flex gap-2 mt-2">
                   <span className="text-sm bg-white/20 px-2 py-1 rounded">高潜力</span>
                   <span className="text-sm bg-white/20 px-2 py-1 rounded">高配合</span>
                </div>
             </motion.div>
          </div>
        );

      // Step 2: Retrofit
      case 'PILOT_RETROFIT':
        return (
          <div className="h-full w-full p-4 flex flex-col justify-center">
             <div className="grid grid-cols-2 gap-4 h-5/6">
                {[
                  { icon: Zap, label: "屋顶光伏", sub: "自发自用", color: "text-yellow-500", bg: "bg-yellow-50", border: "border-yellow-100" },
                  { icon: Fan, label: "高效电机", sub: "永磁变频", color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-100" },
                  { icon: Thermometer, label: "暖通优化", sub: "磁悬浮冷机", color: "text-cyan-500", bg: "bg-cyan-50", border: "border-cyan-100" },
                  { icon: Recycle, label: "余热利用", sub: "冷凝锅炉", color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100" },
                ].map((item, i) => (
                   <motion.div 
                     key={i}
                     className={`${item.bg} border-2 ${item.border} rounded-2xl flex flex-col items-center justify-center p-4 text-center hover:scale-105 transition-transform shadow-sm`}
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: i * 0.1 }}
                   >
                      <item.icon size={48} className={`${item.color} mb-2`} />
                      <h5 className="font-bold text-slate-700 text-2xl">{item.label}</h5>
                      <span className="text-base font-bold text-slate-400 bg-white px-2 py-1 rounded mt-1">{item.sub}</span>
                   </motion.div>
                ))}
             </div>
          </div>
        );
      
      // Step 3: Policy
      case 'PILOT_POLICY':
        return (
          <div className="flex flex-col items-center justify-center h-full w-full">
             <div className="flex w-full justify-between items-center px-8 mb-8">
                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex flex-col items-center">
                   <div className="bg-slate-100 p-4 rounded-full mb-2"><Landmark size={40} className="text-slate-600"/></div>
                   <span className="font-bold text-slate-700 text-xl">政府/园区</span>
                </motion.div>
                <div className="flex-1 h-1 bg-slate-200 mx-4 relative">
                   <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-8 w-full justify-center">
                      <motion.div 
                        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                        className="bg-red-50 text-red-600 px-3 py-1 rounded border border-red-100 text-sm font-bold flex items-center gap-1 shadow-sm"
                      >
                         <FileText size={16}/> 政策文件
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                        className="bg-yellow-50 text-yellow-600 px-3 py-1 rounded border border-yellow-100 text-sm font-bold flex items-center gap-1 shadow-sm"
                      >
                         <Coins size={16}/> 资金补贴
                      </motion.div>
                   </motion.div>
                </div>
                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex flex-col items-center">
                   <div className="bg-purple-100 p-4 rounded-full mb-2"><Factory size={40} className="text-purple-600"/></div>
                   <span className="font-bold text-slate-700 text-xl">试点企业</span>
                </motion.div>
             </div>
             <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-xl shadow-lg font-bold flex items-center gap-2 text-2xl"
             >
                <Award size={32} /> 激发参与积极性
             </motion.div>
          </div>
        );

      // Step 4: Evaluation
      case 'PILOT_EVALUATION':
        return (
          <div className="flex flex-col items-center justify-center h-full w-full gap-6 p-4">
             <div className="flex gap-4 w-full h-1/2">
                <motion.div initial={{ height: 0 }} animate={{ height: '100%' }} className="flex-1 bg-green-50 rounded-xl p-4 border border-green-100 flex flex-col items-center justify-center">
                   <TrendingDown size={32} className="text-green-600 mb-2" />
                   <span className="text-5xl font-black text-slate-700">-15%</span>
                   <span className="text-lg text-slate-500 mt-2">能耗/碳排</span>
                </motion.div>
                <motion.div initial={{ height: 0 }} animate={{ height: '100%' }} transition={{ delay: 0.2 }} className="flex-1 bg-blue-50 rounded-xl p-4 border border-blue-100 flex flex-col items-center justify-center">
                   <Timer size={32} className="text-blue-600 mb-2" />
                   <span className="text-5xl font-black text-slate-700">3年</span>
                   <span className="text-lg text-slate-500 mt-2">投资回报</span>
                </motion.div>
             </div>
             
             <div className="w-full flex justify-center">
               <ArrowDown className="text-slate-300 animate-bounce" />
             </div>

             <motion.div 
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
                className="w-full bg-purple-600 text-white p-4 rounded-xl shadow-lg flex items-center justify-between"
             >
                <div>
                   <h5 className="font-bold text-3xl">标准化实施手册</h5>
                   <span className="text-base text-purple-200 block mt-1">可复制推广的经验指南</span>
                </div>
                <BookOpen size={48} />
             </motion.div>
          </div>
        );

      // --- PHASE 4 VISUALS (CONSTRUCTION) ---
      // Step 1: Renewables
      case 'CONSTRUCTION_RENEWABLES':
        return (
          <div className="flex flex-col items-center justify-center h-full w-full gap-6 p-4">
             <div className="grid grid-cols-3 gap-4 w-full">
                <div className="bg-yellow-50 p-4 rounded-2xl flex flex-col items-center border border-yellow-200 shadow-sm">
                   <Sun size={48} className="text-yellow-500 mb-2"/>
                   <span className="font-bold text-lg text-slate-700">分布式光伏</span>
                </div>
                <div className="bg-green-50 p-4 rounded-2xl flex flex-col items-center border border-green-200 shadow-sm">
                   <Battery size={48} className="text-green-500 mb-2"/>
                   <span className="font-bold text-lg text-slate-700">用户侧储能</span>
                </div>
                <div className="bg-blue-50 p-4 rounded-2xl flex flex-col items-center border border-blue-200 shadow-sm">
                   <Grid size={48} className="text-blue-500 mb-2"/>
                   <span className="font-bold text-lg text-slate-700">智能微电网</span>
                </div>
             </div>
             <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-green-600 text-white p-6 rounded-3xl shadow-xl flex flex-col items-center justify-center w-full flex-1"
             >
                <span className="text-6xl font-black mb-2">95%+</span>
                <span className="text-2xl font-bold opacity-90">新能源消纳率</span>
             </motion.div>
          </div>
        );
      
      // Step 2: Scheduling
      case 'CONSTRUCTION_SCHEDULING':
         return (
           <div className="flex flex-col items-center justify-center h-full w-full gap-4 relative">
              <motion.div 
                 animate={{ rotate: [0, 5, 0, -5, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="w-full bg-slate-100 h-2 rounded-full relative mt-10"
              >
                 <div className="absolute left-[10%] -top-16 bg-red-50 p-4 rounded-xl border-2 border-red-200 shadow-md flex flex-col items-center">
                    <Activity size={32} className="text-red-500 mb-1"/>
                    <span className="font-bold text-slate-700">削峰</span>
                 </div>
                 <div className="absolute right-[10%] -top-16 bg-blue-50 p-4 rounded-xl border-2 border-blue-200 shadow-md flex flex-col items-center">
                    <Battery size={32} className="text-blue-500 mb-1"/>
                    <span className="font-bold text-slate-700">填谷</span>
                 </div>
                 {/* Pivot */}
                 <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-300 w-8 h-8 rounded-full border-4 border-white shadow-sm"></div>
              </motion.div>
              
              <div className="mt-8 grid grid-cols-2 gap-6 w-full">
                 <div className="bg-indigo-50 p-5 rounded-2xl flex items-center gap-4">
                    <div className="bg-white p-3 rounded-full text-indigo-600 shadow-sm"><Zap size={24}/></div>
                    <div>
                       <div className="font-bold text-xl text-slate-800">多能互补</div>
                       <div className="text-sm text-slate-500">电/热/冷协同</div>
                    </div>
                 </div>
                 <div className="bg-teal-50 p-5 rounded-2xl flex items-center gap-4">
                    <div className="bg-white p-3 rounded-full text-teal-600 shadow-sm"><ArrowRight size={24}/></div>
                    <div>
                       <div className="font-bold text-xl text-slate-800">交直流微网</div>
                       <div className="text-sm text-slate-500">高效互联</div>
                    </div>
                 </div>
              </div>
           </div>
         );

      // Step 3: Ecosystem
      case 'CONSTRUCTION_ECOSYSTEM':
         return (
            <div className="flex flex-col gap-6 h-full justify-center w-full">
               {/* Factory Sharing */}
               <div className="bg-orange-50 p-4 rounded-2xl flex items-center justify-between border border-orange-100">
                  <div className="flex flex-col items-center">
                     <Factory size={40} className="text-slate-400" />
                     <span className="text-xs font-bold text-slate-500">主机厂</span>
                  </div>
                  <div className="flex-1 px-4 flex flex-col items-center">
                     <motion.div 
                        animate={{ x: [-10, 10, -10] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="flex items-center gap-1 text-orange-500 font-bold bg-white px-3 py-1 rounded-full shadow-sm"
                     >
                        <Flame size={16} fill="currentColor" /> 余热共享
                     </motion.div>
                     <div className="w-full h-1 bg-orange-200 mt-2 rounded-full"></div>
                  </div>
                  <div className="flex flex-col items-center">
                     <Factory size={32} className="text-slate-400" />
                     <span className="text-xs font-bold text-slate-500">配套企业</span>
                  </div>
               </div>

               {/* EV Network */}
               <div className="flex gap-4">
                  <div className="flex-1 bg-blue-50 p-4 rounded-2xl flex flex-col items-center justify-center border border-blue-100">
                     <Car size={48} className="text-blue-600 mb-2" />
                     <span className="font-bold text-xl text-slate-700">绿色交通</span>
                  </div>
                  <div className="flex-1 bg-green-50 p-4 rounded-2xl flex flex-col items-center justify-center border border-green-100">
                     <span className="text-5xl font-black text-green-600 mb-1">80%</span>
                     <span className="font-bold text-sm text-slate-500">充电桩覆盖</span>
                  </div>
               </div>
            </div>
         );

      // Step 4: Platform
      case 'CONSTRUCTION_PLATFORM':
         return (
            <div className="flex flex-col h-full w-full bg-slate-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden text-white border-4 border-slate-700">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500"></div>
               <div className="flex justify-between items-center mb-6">
                  <h4 className="font-bold text-2xl flex items-center gap-3">
                     <MonitorSmartphone size={32} /> 能碳数智底座
                  </h4>
                  <div className="flex gap-1">
                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
               </div>
               
               <div className="grid grid-cols-2 gap-4 flex-1">
                  {[
                     { label: '实时监测', icon: Activity, color: 'text-blue-400' },
                     { label: '自动核算', icon: PieChart, color: 'text-green-400' },
                     { label: '异常预警', icon: Activity, color: 'text-red-400' }, // Reusing Activity for Alert
                     { label: '碳资产管理', icon: Coins, color: 'text-yellow-400' }
                  ].map((item, i) => (
                     <div key={i} className="bg-slate-700/50 rounded-xl p-4 flex flex-col items-center justify-center hover:bg-slate-700 transition-colors">
                        <item.icon size={36} className={`${item.color} mb-2`} />
                        <span className="font-bold text-lg">{item.label}</span>
                     </div>
                  ))}
               </div>
            </div>
         );

      // --- PHASE 5 VISUALS (GAP FILLING) ---
      // Step 1: Gap Calculation
      case 'GAP_CALCULATION':
        return (
          <div className="flex flex-col items-center justify-center h-full w-full px-4 gap-6">
             <div className="flex w-full items-center justify-between">
                <div className="bg-slate-100 p-6 rounded-2xl flex flex-col items-center w-1/3 border border-slate-200">
                   <span className="text-lg font-bold text-slate-400 mb-2">初始排放</span>
                   <div className="w-full h-24 bg-slate-300 rounded-lg relative">
                      <div className="absolute top-2 right-2 opacity-30"><Factory size={40}/></div>
                   </div>
                </div>
                <div className="text-4xl text-slate-400 font-black">-</div>
                <div className="bg-green-50 p-6 rounded-2xl flex flex-col items-center w-1/3 border border-green-200">
                   <span className="text-lg font-bold text-green-600 mb-2">技术减排</span>
                   <div className="w-full h-16 bg-green-400 rounded-lg relative mt-8"></div>
                </div>
                <div className="text-4xl text-slate-400 font-black">=</div>
             </div>
             
             <div className="bg-orange-50 border-4 border-orange-300 border-dashed rounded-3xl p-6 w-full flex items-center justify-between shadow-lg relative overflow-hidden">
                <div className="z-10">
                   <h5 className="text-3xl font-black text-orange-600 mb-1">剩余缺口</h5>
                   <span className="text-lg text-orange-800 font-bold">Hard-to-Abate Emissions</span>
                </div>
                <div className="flex gap-4 z-10">
                   <div className="bg-white p-4 rounded-full shadow-md text-orange-500">
                      <SearchCheck size={48} />
                   </div>
                   <div className="bg-white p-4 rounded-full shadow-md text-slate-500">
                      <Calculator size={48} />
                   </div>
                </div>
                {/* Background Pattern */}
                <div className="absolute -right-10 -bottom-10 opacity-10 rotate-12">
                   <Scan size={200} />
                </div>
             </div>
             
             <div className="bg-slate-800 text-white px-6 py-2 rounded-full text-lg font-bold shadow-md">
                第三方精准核算
             </div>
          </div>
        );

      // Step 2: Eco Sinks
      case 'ECO_SINKS':
         return (
            <div className="flex flex-col h-full w-full gap-4 justify-center p-2">
               <div className="grid grid-cols-2 gap-4 h-full">
                  <motion.div 
                     whileHover={{ scale: 1.02 }}
                     className="col-span-2 bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-3xl border border-emerald-200 flex items-center justify-between shadow-sm"
                  >
                     <div>
                        <h4 className="text-3xl font-bold text-emerald-800 mb-2">林业/湿地碳汇</h4>
                        <span className="text-lg text-emerald-600">自然生态系统</span>
                     </div>
                     <Trees size={80} className="text-emerald-500 opacity-80" />
                  </motion.div>
                  
                  <motion.div 
                     whileHover={{ scale: 1.02 }}
                     className="bg-lime-50 p-6 rounded-3xl border border-lime-200 flex flex-col items-center justify-center text-center shadow-sm"
                  >
                     <Flower2 size={56} className="text-lime-600 mb-3" />
                     <h5 className="text-xl font-bold text-lime-800">立体绿化</h5>
                     <span className="text-sm text-lime-600">屋顶/垂直花园</span>
                  </motion.div>

                  <motion.div 
                     whileHover={{ scale: 1.02 }}
                     className="bg-cyan-50 p-6 rounded-3xl border border-cyan-200 flex flex-col items-center justify-center text-center shadow-sm"
                  >
                     <Waves size={56} className="text-cyan-600 mb-3" />
                     <h5 className="text-xl font-bold text-cyan-800">蓝碳/土壤</h5>
                     <span className="text-sm text-cyan-600">创新碳汇路径</span>
                  </motion.div>
               </div>
            </div>
         );

      // Step 3: Offset Strategy
      case 'OFFSET_STRATEGY':
         return (
            <div className="flex flex-col h-full w-full items-center justify-center p-4">
               {/* Strategy Scale */}
               <div className="w-full flex justify-between items-end mb-8 relative">
                  <motion.div 
                     initial={{ y: -20 }} animate={{ y: 0 }} 
                     transition={{ repeat: Infinity, duration: 4, repeatType: 'mirror' }}
                     className="bg-white p-4 rounded-xl shadow-lg border-2 border-slate-200 w-1/3 flex flex-col items-center z-10"
                  >
                     <div className="bg-slate-100 p-3 rounded-full mb-2"><Coins size={32}/></div>
                     <span className="font-bold text-xl">购买成本</span>
                  </motion.div>
                  
                  {/* Balance Beam */}
                  <div className="h-2 bg-slate-400 w-full absolute bottom-8 rounded-full"></div>
                  <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-slate-600 absolute bottom-0 left-1/2 -translate-x-1/2"></div>

                  <motion.div 
                     initial={{ y: 20 }} animate={{ y: 0 }} 
                     transition={{ repeat: Infinity, duration: 4, repeatType: 'mirror' }}
                     className="bg-white p-4 rounded-xl shadow-lg border-2 border-green-200 w-1/3 flex flex-col items-center z-10"
                  >
                     <div className="bg-green-100 p-3 rounded-full mb-2"><ScrollText size={32} className="text-green-600"/></div>
                     <span className="font-bold text-xl">抵消效果</span>
                  </motion.div>
               </div>

               {/* Products */}
               <div className="flex gap-4 w-full">
                  <div className="flex-1 bg-orange-50 p-4 rounded-2xl border border-orange-200 flex items-center gap-3">
                     <Award size={40} className="text-orange-500" />
                     <div>
                        <div className="font-bold text-2xl text-slate-800">CCER</div>
                        <div className="text-sm text-slate-500">核证自愿减排量</div>
                     </div>
                  </div>
                  <div className="flex-1 bg-green-50 p-4 rounded-2xl border border-green-200 flex items-center gap-3">
                     <Leaf size={40} className="text-green-500" />
                     <div>
                        <div className="font-bold text-2xl text-slate-800">绿证</div>
                        <div className="text-sm text-slate-500">绿色电力证书</div>
                     </div>
                  </div>
               </div>

               <div className="mt-6 flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-lg text-slate-600 font-bold">
                  <TrendingDown size={20} />
                  策略：分批次采购，平抑价格波动风险
               </div>
            </div>
         );

      // --- PHASE 6 VISUALS (ACCEPTANCE) ---
      // Step 1: Certification
      case 'ACCEPTANCE_CERTIFICATION':
         return (
            <div className="flex flex-col h-full w-full items-center justify-center p-4 gap-6">
               <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-6 w-full flex items-center gap-4 shadow-sm">
                  <div className="bg-white p-3 rounded-full shadow-sm text-slate-600">
                     <BookOpenCheck size={40} />
                  </div>
                  <div>
                     <span className="block text-xl font-bold text-slate-800">权威对标</span>
                     <span className="text-sm text-slate-500">《零碳园区评价标准》</span>
                  </div>
               </div>

               <div className="flex gap-4 w-full h-1/2">
                  <motion.div 
                     initial={{ height: 0 }} animate={{ height: 'auto' }}
                     className="flex-1 bg-blue-50 rounded-2xl border border-blue-100 p-6 flex flex-col justify-end relative overflow-hidden"
                  >
                     <div className="absolute top-4 left-4 text-blue-800 font-bold">3年趋势</div>
                     <div className="flex items-end gap-2 h-32 w-full justify-center pb-2">
                        <div className="w-8 h-24 bg-blue-300 rounded-t-lg"></div>
                        <div className="w-8 h-16 bg-blue-400 rounded-t-lg"></div>
                        <div className="w-8 h-8 bg-blue-600 rounded-t-lg"></div>
                     </div>
                     <div className="w-full text-center border-t border-blue-200 pt-2 text-2xl font-black text-blue-700">
                        符合要求
                     </div>
                  </motion.div>

                  <motion.div 
                     initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }}
                     className="flex-1 bg-teal-500 rounded-2xl shadow-xl flex flex-col items-center justify-center text-white p-4"
                  >
                     <BadgeCheck size={80} className="mb-2 text-teal-100" />
                     <span className="text-3xl font-bold">认证通过</span>
                  </motion.div>
               </div>
            </div>
         );

      // Step 2: Mechanism
      case 'ACCEPTANCE_MECHANISM':
         return (
            <div className="flex flex-col h-full w-full justify-center p-4">
               <div className="grid grid-cols-3 gap-4">
                  <motion.div 
                     whileHover={{ y: -5 }}
                     className="bg-white rounded-2xl shadow-lg border-t-4 border-blue-500 p-6 flex flex-col items-center text-center h-64 justify-center"
                  >
                     <div className="bg-blue-50 p-4 rounded-full mb-4 text-blue-600">
                        <FileBarChart size={48} />
                     </div>
                     <h5 className="text-2xl font-bold text-slate-800 mb-2">数据报送</h5>
                     <p className="text-slate-500 font-medium">定期披露与监测</p>
                  </motion.div>

                  <motion.div 
                     whileHover={{ y: -5 }}
                     className="bg-white rounded-2xl shadow-lg border-t-4 border-red-500 p-6 flex flex-col items-center text-center h-64 justify-center"
                  >
                     <div className="bg-red-50 p-4 rounded-full mb-4 text-red-600">
                        <Siren size={48} />
                     </div>
                     <h5 className="text-2xl font-bold text-slate-800 mb-2">异常响应</h5>
                     <p className="text-slate-500 font-medium">快速处理机制</p>
                  </motion.div>

                  <motion.div 
                     whileHover={{ y: -5 }}
                     className="bg-white rounded-2xl shadow-lg border-t-4 border-orange-500 p-6 flex flex-col items-center text-center h-64 justify-center"
                  >
                     <div className="bg-orange-50 p-4 rounded-full mb-4 text-orange-600">
                        <Wrench size={48} />
                     </div>
                     <h5 className="text-2xl font-bold text-slate-800 mb-2">设施维保</h5>
                     <p className="text-slate-500 font-medium">全生命周期维护</p>
                  </motion.div>
               </div>
               
               <div className="mt-8 text-center bg-slate-100 py-3 rounded-full text-slate-600 font-bold text-lg">
                  制度化 • 常态化 • 规范化
               </div>
            </div>
         );

      // Step 3: Assets
      case 'ACCEPTANCE_ASSETS':
         return (
            <div className="flex flex-col h-full w-full items-center justify-center p-4">
               {/* Assets Input */}
               <div className="flex gap-4 mb-4">
                  <div className="flex flex-col items-center">
                     <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600 border border-yellow-200"><Sun size={32}/></div>
                     <span className="text-xs font-bold text-slate-400 mt-1">光伏</span>
                  </div>
                  <div className="flex flex-col items-center">
                     <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center text-green-600 border border-green-200"><Battery size={32}/></div>
                     <span className="text-xs font-bold text-slate-400 mt-1">储能</span>
                  </div>
                  <div className="flex flex-col items-center">
                     <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 border border-indigo-200"><MonitorSmartphone size={32}/></div>
                     <span className="text-xs font-bold text-slate-400 mt-1">平台</span>
                  </div>
               </div>

               {/* Process */}
               <div className="mb-4">
                  <ArrowDown size={32} className="text-slate-300" />
               </div>
               
               <motion.div 
                  initial={{ scale: 0.9 }} animate={{ scale: 1 }}
                  transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                  className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 py-4 rounded-full font-black text-2xl shadow-lg flex items-center gap-3 mb-6"
               >
                  <RefreshCw className="animate-spin-slow" /> 资产盘活运营
               </motion.div>

               {/* Outcome */}
               <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-white border-2 border-green-100 p-4 rounded-2xl shadow-sm flex items-center gap-4">
                     <div className="bg-green-50 p-3 rounded-full text-green-600"><TrendingUp size={32} /></div>
                     <div>
                        <span className="block text-xl font-bold text-slate-800">绿电/碳交易</span>
                        <span className="text-sm text-slate-500">增值收益</span>
                     </div>
                  </div>
                  <div className="bg-white border-2 border-blue-100 p-4 rounded-2xl shadow-sm flex items-center gap-4">
                     <div className="bg-blue-50 p-3 rounded-full text-blue-600"><CircleDollarSign size={32} /></div>
                     <div>
                        <span className="block text-xl font-bold text-slate-800">合同能源管理</span>
                        <span className="text-sm text-slate-500">服务收益</span>
                     </div>
                  </div>
               </div>
            </div>
         );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full gap-4">
      {/* Top Timeline Navigation */}
      <div className="flex justify-between items-center relative px-4 md:px-12 py-2 shrink-0">
        <div className="absolute top-1/2 left-12 right-12 h-1 bg-gray-100 -z-10 transform -translate-y-1/2"></div>
        {PHASES_DATA.map((phase) => (
          <button
            key={phase.id}
            onClick={() => {
              setActiveId(phase.id);
              setHoveredSubStep(0); // Reset hover on phase change
            }}
            className={`group relative flex flex-col items-center gap-2 transition-all duration-300 focus:outline-none`}
          >
            <div className={`
              w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-300 z-10
              ${activeId === phase.id ? `${phase.color} text-white scale-110 ring-4 ring-green-100` : 'bg-white text-slate-400 hover:text-green-600 hover:bg-green-50'}
            `}>
              <phase.icon size={20} className="md:w-6 md:h-6" />
            </div>
            <span className={`text-[10px] md:text-xs font-medium absolute -bottom-6 w-20 text-center ${activeId === phase.id ? 'text-green-800 font-bold' : 'text-slate-300'}`}>
              阶段{phase.id}
            </span>
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 mt-4 relative overflow-hidden">
        <AnimatePresence mode='wait'>
          <motion.div
            key={activePhase.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full pb-2">
              
              {/* Left Column: Interactive Steps Process - UNIFIED LAYOUT FOR ALL PHASES */}
              <div className="flex flex-col h-full bg-white rounded-2xl shadow-sm border border-slate-100 p-6 relative overflow-hidden">
                
                {/* Header Section - Restored Design */}
                <div className="flex items-center gap-6 mb-8 shrink-0">
                  <div className={`p-5 rounded-2xl ${activePhase.color} text-white shadow-xl shrink-0`}>
                    <activePhase.icon size={48} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${activePhase.color}`}>
                        阶段 {activePhase.id}
                      </span>
                      <h3 className="text-3xl font-bold text-slate-800">{activePhase.title}</h3>
                    </div>
                    <h4 className="text-xl font-bold text-green-700">
                      {activePhase.subtitle}
                    </h4>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-between pl-2 pr-2">
                    {activePhase.subSteps?.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <motion.div 
                          onMouseEnter={() => setHoveredSubStep(idx)}
                          className={`relative flex items-start gap-4 p-5 rounded-xl cursor-pointer transition-all duration-300 border-2 
                            ${hoveredSubStep === idx 
                              ? 'bg-blue-50 border-blue-400 shadow-md translate-x-2' 
                              : 'bg-slate-50 border-transparent hover:border-slate-200'
                            }
                          `}
                        >
                          {/* Circle Indicator */}
                          <div className={`mt-1 w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 z-10 bg-white font-bold
                            ${hoveredSubStep === idx ? 'border-blue-500 text-blue-500' : 'border-slate-300 text-slate-400'}
                          `}>
                            {idx + 1}
                          </div>

                          {/* Text Content */}
                          <div className="flex-1">
                            <h4 className={`font-bold text-lg mb-2 ${hoveredSubStep === idx ? 'text-blue-700' : 'text-slate-700'}`}>
                              {step.title}
                            </h4>
                            <p className={`text-sm leading-relaxed ${hoveredSubStep === idx ? 'text-blue-600/80' : 'text-slate-500'}`}>
                              {step.description}
                            </p>
                          </div>
                        </motion.div>

                        {/* Downward Arrow between steps */}
                        {idx < (activePhase.subSteps?.length || 0) - 1 && (
                          <motion.div 
                            className="flex justify-center items-center text-blue-300 py-1"
                            animate={{ y: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          >
                              <ArrowDown size={32} className="opacity-80 drop-shadow-sm" />
                          </motion.div>
                        )}
                      </React.Fragment>
                    ))}
                </div>
              </div>

              {/* Right Column: Dynamic Visual Visualization */}
              <div className="h-full bg-slate-50 rounded-2xl border border-slate-200 p-8 flex flex-col relative overflow-hidden shadow-inner">
                  <div className="absolute top-4 right-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    示意图解
                  </div>
                  
                  <AnimatePresence mode='wait'>
                    <motion.div
                      key={hoveredSubStep}
                      initial={{ opacity: 0, scale: 0.95, x: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="flex-1 w-full h-full"
                    >
                      {activePhase.subSteps && renderPhaseVisual(activePhase.subSteps[hoveredSubStep])}
                    </motion.div>
                  </AnimatePresence>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PhasesSlide;