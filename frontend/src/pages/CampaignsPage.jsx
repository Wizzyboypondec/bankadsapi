import React from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { mockCampaigns } from '../utils/mockData';
import { Plus, Filter, MoreHorizontal, Eye, Edit3, Trash2 } from 'lucide-react';

const StatusBadge = ({ status }) => {
  const styles = {
    Active: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    Paused: 'bg-amber-100 text-amber-700 border-amber-200',
    Draft: 'bg-slate-100 text-slate-700 border-slate-200',
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${styles[status]}`}>
      {status}
    </span>
  );
};

export const CampaignsPage = ({ onNavigate }) => {
  return (
    <DashboardLayout activeTab="Campaigns" onNavigate={onNavigate}>
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Campaign Manager</h1>
          <p className="text-slate-500 mt-2">Manage and monitor your active advertisements across all channels.</p>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary flex items-center gap-2">
            <Filter size={20} />
            Filter
          </button>
          <button className="btn-primary flex items-center gap-2">
            <Plus size={20} />
            New Campaign
          </button>
        </div>
      </div>

      <div className="card-premium overflow-hidden !p-0">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100">
              <th className="px-6 py-4 text-sm font-bold text-slate-500">Campaign</th>
              <th className="px-6 py-4 text-sm font-bold text-slate-500">Status</th>
              <th className="px-6 py-4 text-sm font-bold text-slate-500">Channel</th>
              <th className="px-6 py-4 text-sm font-bold text-slate-500">Performance</th>
              <th className="px-6 py-4 text-sm font-bold text-slate-500 text-right">Budget</th>
              <th className="px-6 py-4 text-sm font-bold text-slate-500 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mockCampaigns.map((camp) => (
              <tr key={camp.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <img src={camp.image} alt="" className="w-12 h-12 rounded-xl object-cover" />
                    <span className="font-bold text-slate-900">{camp.title}</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <StatusBadge status={camp.status} />
                </td>
                <td className="px-6 py-5">
                  <div className="flex gap-1">
                    {camp.channels.map(ch => (
                      <span key={ch} className="px-2 py-0.5 bg-azure-50 text-azure-600 rounded text-[10px] font-bold uppercase tracking-wider">
                        {ch}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-900">{camp.impressions.toLocaleString()}</span>
                    <span className="text-xs text-slate-400">{camp.ctr} CTR</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-right font-bold text-slate-900">
                  {camp.budget}
                </td>
                <td className="px-6 py-5 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-azure-600 shadow-sm transition-all border border-transparent hover:border-slate-100">
                      <Eye size={18} />
                    </button>
                    <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-emerald-600 shadow-sm transition-all border border-transparent hover:border-slate-100">
                      <Edit3 size={18} />
                    </button>
                    <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-rose-600 shadow-sm transition-all border border-transparent hover:border-slate-100">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};
