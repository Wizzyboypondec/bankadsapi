import React from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { Home, AlertCircle } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8">
      <div className="card-premium max-w-lg w-full text-center py-16">
        <div className="w-20 h-20 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
          <AlertCircle size={40} />
        </div>
        <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Page Not Found</h2>
        <p className="text-slate-500 mb-10 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <button 
          onClick={() => window.location.href = '/'}
          className="btn-primary flex items-center gap-2 mx-auto"
        >
          <Home size={20} />
          Return to Dashboard
        </button>
      </div>
    </div>
  );
};
