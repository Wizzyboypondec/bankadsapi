import React from 'react';
import { LayoutDashboard, Megaphone, Code, CreditCard, Settings, LogOut, Bell, Search } from 'lucide-react';

const SidebarLink = ({ icon: Icon, label, active, onClick }) => (
  <div 
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${
    active ? 'bg-azure-600 text-white shadow-lg shadow-azure-600/20 font-bold' : 'text-slate-500 hover:bg-slate-100 font-medium'
  }`}>
    <Icon size={20} />
    <span>{label}</span>
  </div>
);

export const DashboardLayout = ({ children, activeTab = 'Overview', onNavigate }) => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 bg-white p-6 flex flex-col gap-8 sticky top-0 h-screen overflow-y-auto">
        <div className="flex items-center gap-2 px-2">
          <div className="w-8 h-8 bg-azure-600 rounded-lg flex items-center justify-center text-white font-bold">B</div>
          <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">BankAds</span>
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          <SidebarLink icon={LayoutDashboard} label="Overview" active={activeTab === 'Overview'} onClick={() => onNavigate('Overview')} />
          <SidebarLink icon={Megaphone} label="Campaigns" active={activeTab === 'Campaigns'} onClick={() => onNavigate('Campaigns')} />
          <SidebarLink icon={Code} label="Dev Portal" active={activeTab === 'Dev Portal'} onClick={() => onNavigate('Dev Portal')} />
          <SidebarLink icon={CreditCard} label="Billing" active={activeTab === 'Billing'} onClick={() => onNavigate('Billing')} />
          
          <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col gap-1">
            <SidebarLink icon={Settings} label="Settings" />
            <SidebarLink icon={LogOut} label="Logout" />
          </div>
        </nav>

        <div className="bg-slate-900 rounded-2xl p-4 text-white relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-azure-600/20 rounded-full blur-2xl group-hover:bg-azure-600/40 transition-all"></div>
          <h4 className="font-bold relative z-10">Pro Plan</h4>
          <p className="text-[10px] text-slate-400 mt-1 relative z-10 leading-relaxed italic">Get access to custom ATM targeting and real-time response logs.</p>
          <button className="mt-4 w-full py-2 bg-white text-slate-900 rounded-lg text-xs font-bold hover:bg-azure-50 transition-colors relative z-10">
            Upgrade Now
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-20 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-10 px-8 flex items-center justify-between">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search campaigns, analytics..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-azure-600/20 transition-all outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-xl relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900">King David</p>
                <p className="text-[10px] text-slate-500 font-medium">Administrator</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=King" alt="avatar" />
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 pb-16">
          {children}
        </div>
      </main>
    </div>
  );
};
