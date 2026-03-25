import React, { useState } from 'react';
import { OverviewPage } from './pages/OverviewPage';
import { CampaignsPage } from './pages/CampaignsPage';
import { DevPortalPage } from './pages/DevPortalPage';
import { BillingPage } from './pages/BillingPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [currentPage, setCurrentPage] = useState('Overview');

  const renderPage = () => {
    switch(currentPage) {
      case 'Overview': return <OverviewPage onNavigate={setCurrentPage} />;
      case 'Campaigns': return <CampaignsPage onNavigate={setCurrentPage} />;
      case 'Dev Portal': return <DevPortalPage onNavigate={setCurrentPage} />;
      case 'Billing': return <BillingPage onNavigate={setCurrentPage} />;
      default: return <NotFoundPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <ThemeProvider>
      {renderPage()}
    </ThemeProvider>
  );
}

export default App;
