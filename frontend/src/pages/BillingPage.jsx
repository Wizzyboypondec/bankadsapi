import React from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { Check, Download, CreditCard, PieChart, Info } from 'lucide-react';

const PlanCard = ({ title, price, features, isPopular }) => (
  <div className={`card-premium relative transition-all ${isPopular ? 'border-azure-600 ring-4 ring-azure-600/5' : ''}`}>
    {isPopular && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-azure-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
        Most Popular
      </span>
    )}
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <div className="flex items-baseline gap-1 mb-6">
      <span className="text-3xl font-black text-slate-900">${price}</span>
      <span className="text-slate-500 font-medium">/mo</span>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
          <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
            <Check size={12} strokeWidth={3} />
          </div>
          {f}
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-xl font-bold transition-all ${
      isPopular ? 'bg-azure-600 text-white hover:bg-azure-700 shadow-lg shadow-azure-600/20' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
    }`}>
      {price === 'Custom' ? 'Contact Sales' : 'Select Plan'}
    </button>
  </div>
);

export const BillingPage = ({ onNavigate }) => {
  return (
    <DashboardLayout activeTab="Billing" onNavigate={onNavigate}>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Billing & Plans</h1>
        <p className="text-slate-500 mt-2">Manage your subscription, view usage, and download invoices.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <PlanCard 
          title="Startup" 
          price="49" 
          features={['10k Impressions/mo', 'Email Support', 'Basic Analytics', 'Web & Mobile']} 
        />
        <PlanCard 
          title="Business" 
          price="199" 
          isPopular={true}
          features={['100k Impressions/mo', 'Priority Support', 'Advanced Targeting', 'All Channels']} 
        />
        <PlanCard 
          title="Enterprise" 
          price="Custom" 
          features={['Unlimited Impressions', 'Dedicated Manager', 'Custom API Limits', 'Interswitch Integration']} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="card-premium lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-slate-900">Recent Invoices</h3>
            <button className="text-azure-600 text-sm font-bold hover:underline flex items-center gap-1">
              <Download size={14} /> View All
            </button>
          </div>
          <div className="divide-y divide-slate-100">
            {[1, 2, 3].map(i => (
              <div key={i} className="py-4 flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-azure-50 group-hover:text-azure-600 transition-colors">
                    <CreditCard size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Invoice #BA-202{i}-00{i}</h4>
                    <p className="text-xs text-slate-500">March {i + 10}, 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="font-bold text-slate-900">$199.00</span>
                  <button className="p-2 text-slate-400 hover:text-slate-600">
                    <Download size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-premium h-fit">
          <div className="flex items-center gap-2 mb-6">
            <PieChart className="text-azure-600" size={20} />
            <h3 className="text-xl font-bold text-slate-900">Usage Tracker</h3>
          </div>
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-500 font-medium">Impressions</span>
              <span className="text-slate-900 font-bold">84,520 / 100,000</span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200 shadow-inner">
              <div className="h-full bg-gradient-to-r from-azure-500 to-azure-700 rounded-full" style={{ width: '84%' }}></div>
            </div>
          </div>
          <div className="bg-azure-50 p-4 rounded-xl border border-azure-100 flex gap-3">
            <Info size={18} className="text-azure-600 flex-shrink-0" />
            <p className="text-xs text-azure-700 leading-relaxed">
              You've used 84% of your monthly allowance. We recommend upgrading to avoid service interruption.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
