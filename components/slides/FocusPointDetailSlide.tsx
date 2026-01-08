import React from 'react';
import { motion } from 'framer-motion';
import { FocusPoint } from '../../types';
import { 
  PieChart, Pie, Cell, Tooltip as RechartsTooltip, ResponsiveContainer, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from 'recharts';
import { RefreshCw, ArrowRight, CheckCircle } from 'lucide-react';

interface FocusPointDetailSlideProps {
  data: FocusPoint;
}

const FocusPointDetailSlide: React.FC<FocusPointDetailSlideProps> = ({ data }) => {
  
  // Render different chart types based on data.chartType
  const renderVisual = () => {
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
              <RechartsTooltip contentStyle={{borderRadius: '8px', border:'none', boxShadow:'0 4px 12px rgba(0,0,0,0.1)'}} />
              <Legend verticalAlign="bottom" height={36} iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        );
      case 'BAR':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.chartData} layout="vertical" margin={{left: 20}}>
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" width={80} tick={{fontSize: 12, fill: '#64748b'}} axisLine={false} tickLine={false} />
              <RechartsTooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '8px', border:'none'}} />
              <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={30}>
                 {data.chartData?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                 ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        );
      case 'FLOW':
        return (
          <div className="w-full h-full flex flex-col justify-center items-center relative">
             <div className="grid grid-cols-2 gap-6 w-full max-w-sm z-10">
                {['Measurement (核算)', 'Abatement (减排)', 'Offset (抵消)', 'Certificate (认证)'].map((step, i) => {
                  const colors = ['bg-blue-50 text-blue-700 border-blue-200', 'bg-green-50 text-green-700 border-green-200', 'bg-orange-50 text-orange-700 border-orange-200', 'bg-purple-50 text-purple-700 border-purple-200'];
                  const letters = ['M', 'A', 'O', 'C'];
                  return (
                    <motion.div 
                      key={step}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.15 }}
                      className={`p-4 rounded-xl border-2 ${colors[i]} text-center shadow-sm flex flex-col items-center justify-center aspect-square`}
                    >
                      <span className="text-4xl font-black mb-2 opacity-80">{letters[i]}</span>
                      <span className="text-xs font-bold leading-tight">{step}</span>
                    </motion.div>
                  )
                })}
             </div>
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                <RefreshCw size={240} className="text-slate-900 animate-spin-slow" />
             </div>
             {/* Connection Arrows Layer (Simplified) */}
             <div className="absolute inset-0 pointer-events-none">
                {/* SVG arrows could go here */}
             </div>
          </div>
        );
      case 'LIST':
        return (
          <div className="flex flex-col gap-4 h-full justify-center overflow-y-auto pr-2">
             {['区域能评+碳评机制', '碳配额奖励与碳积分', '绿色信贷与专项债', '零碳园区标准制定'].map((item, i) => (
               <motion.div 
                 key={i}
                 initial={{ x: 50, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{ delay: i * 0.1 }}
                 className="bg-gradient-to-r from-orange-50 to-white p-4 rounded-lg border-l-4 border-orange-400 shadow-sm flex items-center justify-between"
               >
                 <span className="font-bold text-slate-700">{item}</span>
                 <CheckCircle size={20} className="text-orange-400" />
               </motion.div>
             ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header Area */}
      <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
        <div className="p-3 bg-[#005094] rounded-xl text-white shadow-lg">
          <data.icon size={32} />
        </div>
        <div>
          <div className="flex items-center gap-3">
             <h2 className="text-3xl font-bold text-slate-800">{data.title}</h2>
             <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold border border-green-200">
               {data.category}
             </span>
          </div>
          <p className="text-slate-500 mt-1 max-w-2xl text-sm md:text-base">
            {data.description}
          </p>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-hidden">
        {/* Left: Content Text */}
        <div className="flex flex-col gap-6 overflow-y-auto pr-2">
          
          <div className="bg-white rounded-xl">
             <h3 className="text-lg font-bold text-[#005094] mb-3 flex items-center gap-2">
               关键举措
             </h3>
             <ul className="space-y-3">
               {data.keyActionItems.map((item, idx) => (
                 <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                    className="flex items-start gap-3 text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100"
                 >
                   <ArrowRight className="mt-1 text-[#81BC00] shrink-0" size={16} />
                   <span className="text-sm leading-relaxed">{item}</span>
                 </motion.li>
               ))}
             </ul>
          </div>

          <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100">
             <h3 className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wider">预期收益</h3>
             <div className="flex flex-wrap gap-2">
                {data.benefits.map((benefit, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white text-[#005094] text-xs font-bold rounded shadow-sm border border-blue-100">
                    {benefit}
                  </span>
                ))}
             </div>
          </div>
        </div>

        {/* Right: Visual/Chart */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 flex flex-col h-full min-h-[300px]"
        >
          <div className="mb-4 text-center">
             <span className="text-sm font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-1">
               {data.visualLabel || "数据分析"}
             </span>
          </div>
          <div className="flex-1 relative">
            {renderVisual()}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FocusPointDetailSlide;