import React from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { globalMetrics, performanceData, mockCampaigns } from '../utils/mockData';
import { ArrowUpRight, ArrowDownRight, Plus } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const MetricCard = ({ label, value, trend, isPositive }) => (
  <div className="card-premium">
    <div className="flex justify-between items-start mb-4">
      <span className="text-slate-500 font-medium text-sm">{label}</span>
      <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${
        isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
      }`}>
        {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {trend}
      </div>
    </div>
    <div className="text-3xl font-black text-slate-900">{value}</div>
  </div>
);

export const OverviewPage = ({ onNavigate }) => {
  return (
    <DashboardLayout activeTab="Overview" onNavigate={onNavigate}>
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">System Overview</h1>
          <p className="text-slate-500 mt-2">Real-time performance metrics for the Bank Ads Engine.</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus size={20} />
          Launch Campaign
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {globalMetrics.map((m, i) => (
          <MetricCard key={i} {...m} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 card-premium">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Traffic Analysis</h3>
              <p className="text-xs text-slate-400 mt-1">Impressions and Engagement over time.</p>
            </div>
            <div className="flex gap-2">
              <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                <div className="w-2 h-2 rounded-full bg-azure-600"></div> Impressions
              </span>
            </div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorImp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px', 
                    border: '1px solid rgba(255, 255, 255, 0.2)', 
                    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
                    padding: '12px'
                  }}
                  itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="impressions" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorImp)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card-premium h-fit">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-slate-900">Top Ads</h3>
            <button className="text-azure-600 text-xs font-bold hover:underline" onClick={() => onNavigate('Campaigns')}>View All</button>
          </div>
          <div className="flex flex-col gap-6">
            {mockCampaigns.slice(0, 3).map((camp) => (
              <div key={camp.id} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl object-cover overflow-hidden bg-slate-100 flex-shrink-0 transition-transform group-hover:scale-105 shadow-sm">
                  <img src={camp.image} alt={camp.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-800 truncate text-sm">{camp.title}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-bold uppercase">{camp.channels[0]}</span>
                    <p className="text-[10px] text-slate-400 font-medium">{camp.impressions.toLocaleString()} views</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-emerald-600">{camp.ctr}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">CTR</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-4 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl text-white shadow-xl">
             <p className="text-[10px] font-bold text-azure-400 uppercase tracking-widest mb-1">Growth Tip</p>
             <p className="text-xs leading-relaxed text-slate-300">Adding ATM channel to "Elite Wealth" could increase reach by <span className="text-white font-bold">22%</span> based on current trends.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
