import React, { useState } from 'react';
import { FOCUS_POINTS_DATA } from '../../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { FocusPoint } from '../../types';
import { X, CheckCircle2, RefreshCw, CheckCircle, ArrowRight } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip as RechartsTooltip, ResponsiveContainer, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const FocusPointsSlide: React.FC = () => {
  const [selectedPoint, setSelectedPoint] = useState<FocusPoint | null>(null);

  // Helper to render visuals based on chartType
  const renderModalVisual = (data: FocusPoint) => {
    switch (data.chartType) {
      case 'PIE':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data.chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {data.chartData?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                ))}
              </Pie>
              <RechartsTooltip contentStyle={{borderRadius: '8px', border:'none', boxShadow:'0 4px 12px rgba(0,0,0,0.1)', fontSize: '14px', padding: '8px 12px'}} />
              <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{fontSize: '14px', paddingTop: '20px'}}/>
            </PieChart>
          </ResponsiveContainer>
        );
      case 'BAR':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.chartData} layout="vertical" margin={{left: 0, right: 20, top: 10, bottom: 0}}>
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" width={90} tick={{fontSize: 14, fill: '#64748b'}} axisLine={false} tickLine={false} />
              <RechartsTooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '8px', border:'none', fontSize: '14px', padding: '8px 12px'}} />
              <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={28}>
                 {data.chartData?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                 ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        );
      case 'FLOW':
        return (
          <div className="w-full h-full flex flex-col justify-center items-center relative p-4">
             <div className="grid grid-cols-2 gap-6 w-full max-w-[300px] z-10">
                {['M:核算', 'A:减排', 'O:抵消', 'C:认证'].map((step, i) => {
                  const colors = ['bg-blue-50 text-blue-700 border-blue-200', 'bg-green-50 text-green-700 border-green-200', 'bg-orange-50 text-orange-700 border-orange-200', 'bg-purple-50 text-purple-700 border-purple-200'];
                  return (
                    <div 
                      key={step}
                      className={`p-4 rounded-2xl border-2 ${colors[i]} text-center shadow-md flex flex-col items-center justify-center aspect-video transform hover:scale-105 transition-transform`}
                    >
                      <span className="text-lg font-black leading-tight">{step}</span>
                    </div>
                  )
                })}
             </div>
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                <RefreshCw size={200} className="text-slate-900 animate-spin-slow" />
             </div>
          </div>
        );
      case 'LIST':
        return (
          <div className="flex flex-col gap-3 h-full justify-center px-4">
             {['区域能评+碳评', '碳配额与积分', '绿色信贷支持', '标准制定'].map((item, i) => (
               <div 
                 key={i}
                 className="bg-orange-50 px-6 py-4 rounded-xl border-l-8 border-orange-400 shadow-sm flex items-center justify-between"
               >
                 <span className="text-lg font-bold text-slate-700">{item}</span>
                 <CheckCircle size={24} className="text-orange-400" />
               </div>
             ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-full w-full relative bg-white overflow-hidden p-6 font-sans">
      
      {/* Background/Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
         <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.5" />
               <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
               <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.5" />
            </linearGradient>
         </defs>
         {/* Lines from Center (50%, 50%) to roughly where corners anchor */}
         <motion.line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#e2e8f0" strokeWidth="4" strokeDasharray="8 8" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
         <motion.line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#e2e8f0" strokeWidth="4" strokeDasharray="8 8" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
         <motion.line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#e2e8f0" strokeWidth="4" strokeDasharray="8 8" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
         <motion.line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#e2e8f0" strokeWidth="4" strokeDasharray="8 8" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
      </svg>

      {/* Render Cards */}
      {FOCUS_POINTS_DATA.map((point) => {
        let positionProps = {};
        let cardStyle = "";
        let animationProps = {};
        let isCenter = false;

        switch (point.id) {
          case 3: // Center: Digital Platform
            isCenter = true;
            positionProps = { style: { top: '50%', left: '50%', zIndex: 50 } };
            animationProps = {
               initial: { x: "-50%", y: "-50%", scale: 0.5, opacity: 0 },
               animate: { x: "-50%", y: "-50%", scale: 1, opacity: 1 },
               whileHover: { scale: 1.05 },
               transition: { duration: 0.6, type: "spring" }
            };
            cardStyle = "w-[26%] aspect-square rounded-full border-[8px] border-indigo-100 bg-white shadow-2xl flex flex-col items-center justify-center text-center p-4 cursor-pointer";
            break;

          case 1: // Top Left
            positionProps = { style: { top: '4%', left: '4%', zIndex: 10 } };
            animationProps = { initial: { opacity: 0, x: -50, y: -50 }, animate: { opacity: 1, x: 0, y: 0 }, whileHover: { scale: 1.02 }, transition: { delay: 0.2 } };
            cardStyle = "w-[35%] bg-emerald-50 border-l-8 border-emerald-500 rounded-2xl shadow-lg p-5 cursor-pointer";
            break;

          case 2: // Top Right
            positionProps = { style: { top: '4%', right: '4%', zIndex: 10 } };
            animationProps = { initial: { opacity: 0, x: 50, y: -50 }, animate: { opacity: 1, x: 0, y: 0 }, whileHover: { scale: 1.02 }, transition: { delay: 0.3 } };
            cardStyle = "w-[35%] bg-blue-50 border-r-8 border-blue-500 rounded-2xl shadow-lg p-5 cursor-pointer";
            break;

          case 4: // Bottom Left
            positionProps = { style: { bottom: '4%', left: '4%', zIndex: 10 } };
            animationProps = { initial: { opacity: 0, x: -50, y: 50 }, animate: { opacity: 1, x: 0, y: 0 }, whileHover: { scale: 1.02 }, transition: { delay: 0.4 } };
            cardStyle = "w-[35%] bg-teal-50 border-l-8 border-teal-500 rounded-2xl shadow-lg p-5 cursor-pointer";
            break;

          case 5: // Bottom Right
            positionProps = { style: { bottom: '4%', right: '4%', zIndex: 10 } };
            animationProps = { initial: { opacity: 0, x: 50, y: 50 }, animate: { opacity: 1, x: 0, y: 0 }, whileHover: { scale: 1.02 }, transition: { delay: 0.5 } };
            cardStyle = "w-[35%] bg-orange-50 border-r-8 border-orange-500 rounded-2xl shadow-lg p-5 cursor-pointer";
            break;
            
          default: return null;
        }

        return (
          <motion.div
            key={point.id}
            onClick={() => setSelectedPoint(point)}
            {...positionProps}
            {...animationProps}
            className={`absolute ${cardStyle}`}
          >
            {/* Header: Centered Layout for all cards */}
            <div className={`flex flex-col items-center gap-3 w-full ${isCenter ? 'mb-2' : 'mb-4 border-b border-black/5 pb-3'}`}>
              <div className={`p-3 rounded-xl shadow-sm ${isCenter ? 'bg-indigo-600 text-white p-3' : 'bg-white'}`}>
                <point.icon size={isCenter ? 40 : 36} className={!isCenter ? getIconColor(point.id) : undefined} />
              </div>
              <div className="text-center">
                <h3 className={`${isCenter ? 'text-xl' : 'text-2xl'} font-bold text-slate-800 leading-tight`}>
                  {point.title}
                </h3>
                {!isCenter && (
                  <div className={`text-sm font-bold uppercase tracking-wider opacity-80 mt-1 ${getIconColor(point.id)}`}>
                    {point.category}
                  </div>
                )}
              </div>
            </div>

            {isCenter ? (
               <div className="flex flex-col gap-1.5 w-full px-2">
                  <div className="bg-indigo-50 px-3 py-1.5 rounded-lg font-bold text-indigo-800 text-sm text-center">MAOC 闭环管理</div>
                  <div className="bg-indigo-50 px-3 py-1.5 rounded-lg font-bold text-indigo-800 text-sm text-center">数字孪生可视化</div>
                  <div className="bg-indigo-50 px-3 py-1.5 rounded-lg font-bold text-indigo-800 text-sm text-center">智能策略控制</div>
                  <div className="mt-1 text-xs text-slate-400 font-bold tracking-widest uppercase text-center">核心大脑</div>
               </div>
            ) : (
               <ul className="space-y-3 w-full">
                 {point.keyActionItems.slice(0, 3).map((item, idx) => {
                    const parts = item.split(/[:：]/);
                    const title = parts[0];
                    const content = parts[1] || '';
                    return (
                       <li key={idx} className="text-base text-slate-700 leading-snug flex flex-col items-center text-center">
                          <strong className={`text-lg block mb-0.5 ${getIconColor(point.id).replace('text-', 'text-')}`}>{title}</strong>
                          <span className="text-slate-600 opacity-90 text-sm">{content}</span>
                       </li>
                    );
                 })}
               </ul>
            )}
            
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-black/10 p-1.5 rounded-full">
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* DETAILED MODAL */}
      <AnimatePresence>
        {selectedPoint && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPoint(null)}
          >
            <motion.div 
              className="bg-white rounded-3xl shadow-2xl w-full max-w-7xl h-[90vh] max-h-[720px] relative flex overflow-hidden"
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedPoint(null)}
                className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 transition-colors z-20"
              >
                <X size={24} />
              </button>

              {/* Left: Sidebar (30%) */}
              <div className={`w-[30%] p-10 ${getBgColor(selectedPoint.id)} flex flex-col justify-center items-center text-center relative overflow-hidden border-r border-slate-100/50`}>
                <div className="relative z-10">
                  <div className="bg-white p-6 rounded-3xl shadow-xl mb-8 inline-block ring-8 ring-white/40">
                    <selectedPoint.icon size={80} className={getIconColor(selectedPoint.id)} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-800 mb-3 leading-tight">{selectedPoint.title}</h2>
                  <span className="inline-block px-4 py-1.5 bg-white/80 rounded-full font-bold text-slate-700 backdrop-blur-sm shadow-sm uppercase tracking-wide text-xs">
                    {selectedPoint.category}
                  </span>
                  <p className="mt-8 text-base text-slate-600 leading-relaxed font-medium px-4">
                     {selectedPoint.description}
                  </p>
                </div>
                <selectedPoint.icon className="absolute -bottom-20 -right-20 text-black/5 w-80 h-80 z-0" />
              </div>

              {/* Right: Content (70%) */}
              <div className="w-[70%] p-10 flex flex-col h-full bg-white relative">
                 
                 {/* 1. Top Section: Details List */}
                 <div className="shrink-0 mb-8 space-y-6">
                    {selectedPoint.fullDetails && selectedPoint.fullDetails.length > 0 ? (
                      selectedPoint.fullDetails.map((detail, idx) => {
                        const hasColon = detail.includes('：') || detail.includes(':');
                        let title = '';
                        let content = detail;
                        
                        if (hasColon) {
                           const splitIndex = detail.indexOf('：') !== -1 ? detail.indexOf('：') : detail.indexOf(':');
                           title = detail.substring(0, splitIndex);
                           content = detail.substring(splitIndex + 1);
                        }

                        return (
                          <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                             {hasColon ? (
                               <>
                                 <div className={`text-xl font-bold mb-2 flex items-center gap-3 ${getIconColor(selectedPoint.id)}`}>
                                    <div className={`w-2 h-2 rounded-full ${getDotColor(selectedPoint.id)}`}></div>
                                    {title}
                                 </div>
                                 <p className="text-slate-600 text-base pl-5 border-l-2 border-slate-100 leading-relaxed">{content}</p>
                               </>
                             ) : (
                                <div className="flex gap-4">
                                   <div className={`mt-2.5 min-w-[8px] h-2 rounded-full ${getDotColor(selectedPoint.id)}`}></div>
                                   <p className="text-slate-600 text-base leading-relaxed">{detail}</p>
                                </div>
                             )}
                          </motion.div>
                        );
                      })
                    ) : (
                      <p className="text-slate-400 italic">暂无详细内容...</p>
                    )}
                 </div>

                 {/* 2. Middle Section: Benefits (Horizontal) */}
                 <div className="shrink-0 mb-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">关键收益</h4>
                    <div className="flex flex-wrap gap-4">
                       {selectedPoint.benefits.map((b, i) => (
                          <div key={i} className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
                             <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                             <span className="text-slate-700 text-sm font-bold">{b}</span>
                          </div>
                       ))}
                    </div>
                 </div>

                 {/* 3. Bottom Section: Visual (Fill Remaining Space) */}
                 <div className="flex-1 bg-slate-50 rounded-2xl border border-slate-100 p-4 relative flex flex-col min-h-[200px]">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 text-right px-2">
                       {selectedPoint.visualLabel || "示意图"}
                    </div>
                    <div className="flex-1 w-full relative">
                       {renderModalVisual(selectedPoint)}
                    </div>
                 </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

// Helper for colors based on ID
const getIconColor = (id: number) => {
  switch(id) {
    case 1: return 'text-emerald-600';
    case 2: return 'text-blue-600';
    case 3: return 'text-indigo-600';
    case 4: return 'text-teal-600';
    case 5: return 'text-orange-600';
    default: return 'text-slate-600';
  }
};

const getDotColor = (id: number) => {
    switch(id) {
      case 1: return 'bg-emerald-500';
      case 2: return 'bg-blue-500';
      case 3: return 'bg-indigo-500';
      case 4: return 'bg-teal-500';
      case 5: return 'bg-orange-500';
      default: return 'bg-slate-500';
    }
  };

const getBgColor = (id: number) => {
   switch(id) {
      case 1: return 'bg-emerald-50';
      case 2: return 'bg-blue-50';
      case 3: return 'bg-indigo-50';
      case 4: return 'bg-teal-50';
      case 5: return 'bg-orange-50';
      default: return 'bg-slate-50';
   }
}

export default FocusPointsSlide;