import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { RefreshCw, Monitor, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const energyData = [
  { name: '屋顶光伏', value: 50, color: '#10b981' }, // Green
  { name: '市电 (绿证)', value: 30, color: '#3b82f6' }, // Blue
  { name: '储能调节', value: 20, color: '#f59e0b' }, // Amber
];

const FocusDeepDiveSlide: React.FC = () => {
  return (
    <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Chart Section: Energy Structure */}
      <motion.div 
        className="bg-white p-6 rounded-2xl shadow-xl h-full flex flex-col justify-between"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-yellow-100 text-yellow-600 rounded-lg">
            <Zap size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">能源结构零碳化</h3>
            <p className="text-sm text-slate-500">建议能源配置比例示意</p>
          </div>
        </div>

        <div className="flex-1 min-h-[250px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={energyData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {energyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
            {/* Center Label */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center -mt-4">
              <span className="block text-2xl font-bold text-slate-700">50%+</span>
              <span className="text-xs text-slate-400">光伏利用</span>
            </div>
        </div>
        
        <div className="mt-4 bg-green-50 p-4 rounded-lg text-sm text-green-800">
          <strong>关键指标：</strong> 建设比例不低于50%屋顶面积的屋顶光伏；储能按装机容量 10-20% 配置。
        </div>
      </motion.div>

      {/* Diagram Section: Digital Platform */}
      <motion.div 
        className="bg-white p-6 rounded-2xl shadow-xl h-full flex flex-col"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
            <Monitor size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">数字化 MAOC 闭环</h3>
            <p className="text-sm text-slate-500">能碳管理平台逻辑</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center relative gap-4">
           {/* Circular Flow Visualization */}
           <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
                <div className="text-blue-600 font-bold mb-1">M</div>
                <div className="text-xs text-slate-600">Measurement<br/>核算</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 text-center">
                <div className="text-orange-600 font-bold mb-1">A</div>
                <div className="text-xs text-slate-600">Abatement<br/>减排</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
                <div className="text-purple-600 font-bold mb-1">C</div>
                <div className="text-xs text-slate-600">Certificate<br/>认证</div>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg border border-teal-200 text-center">
                <div className="text-teal-600 font-bold mb-1">O</div>
                <div className="text-xs text-slate-600">Offset<br/>抵消</div>
              </div>
           </div>
           
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
              <RefreshCw size={150} className="text-slate-400 animate-spin-slow" />
           </div>
        </div>

        <div className="mt-6 bg-slate-50 p-4 rounded-lg text-sm text-slate-600">
          通过 <strong>数字孪生</strong> 实现碳排放的“可测量、可报告、可验证”，构建数据闭环管理体系。
        </div>
      </motion.div>
    </div>
  );
};

export default FocusDeepDiveSlide;