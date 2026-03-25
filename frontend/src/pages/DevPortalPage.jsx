import React from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { Key, Copy, RefreshCw, Terminal, Globe, ShieldCheck } from 'lucide-react';

const ConfigCard = ({ icon: Icon, title, description, value, isMasked }) => (
  <div className="card-premium h-full flex flex-col justify-between">
    <div>
      <div className="w-12 h-12 bg-azure-50 text-azure-600 rounded-xl flex items-center justify-center mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 mb-6">{description}</p>
    </div>
    <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
      <code className="flex-1 text-sm font-mono text-slate-600 truncate">
        {isMasked ? '••••••••••••••••••••••••••••' : value}
      </code>
      <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-azure-600 transition-all">
        <Copy size={16} />
      </button>
    </div>
  </div>
);

export const DevPortalPage = ({ onNavigate }) => {
  return (
    <DashboardLayout activeTab="Dev Portal" onNavigate={onNavigate}>
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Developer Portal</h1>
          <p className="text-slate-500 mt-2">Access API keys, documentation, and webhook configurations.</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Terminal size={20} />
          View Docs
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <ConfigCard 
          icon={Key}
          title="Production API Key"
          description="Used to authenticate ad delivery requests in live environments."
          value="pk_live_51Mzk..."
          isMasked={true}
        />
        <ConfigCard 
          icon={Globe}
          title="Webhook URL"
          description="Endpoint where we send event notifications (e.g. low budget)."
          value="https://api.yourbank.com/hooks/ads"
          isMasked={false}
        />
        <ConfigCard 
          icon={ShieldCheck}
          title="Secret Key"
          description="Highly sensitive key for server-to-server management."
          value="sk_test_..."
          isMasked={true}
        />
      </div>

      <div className="card-premium">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-slate-900">API Usage (Requests/sec)</h3>
          <button className="text-azure-600 text-sm font-bold flex items-center gap-1 hover:underline">
            <RefreshCw size={14} />
            Refresh
          </button>
        </div>
        <div className="h-48 bg-slate-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-200">
          <p className="text-slate-400 font-medium italic">Usage visualization chart will load here...</p>
        </div>
      </div>
    </DashboardLayout>
  );
};
