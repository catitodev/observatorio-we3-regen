
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Introduction from './pages/Introduction';
import EconomicFoundations from './pages/EconomicFoundations';
import Infrastructure from './pages/Infrastructure';
import Governance from './pages/Governance';
import Metrics from './pages/Metrics';
import Implementations from './pages/Implementations';
import Risks from './pages/Risks';
import Observatory from './pages/Observatory';
import LandingScreen from './components/LandingScreen';
import CustomCursor from './components/CustomCursor';
import { Page } from './types';

const App: React.FC = () => {
  // Inicializa estritamente no Home
  const [activePage, setActivePage] = useState<Page>(Page.Home);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (Object.values(Page).includes(hash)) {
        setActivePage(hash);
      } else {
        // Se não houver hash válido, mantém ou volta para Home
        setActivePage(Page.Home);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Na carga inicial, se houver hash, respeita, senão Home
    if (window.location.hash) {
      handleHashChange();
    } else {
      setActivePage(Page.Home);
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: Page) => {
    if (page === Page.Home) {
      window.location.hash = '';
    } else {
      window.location.hash = page;
    }
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (activePage) {
      case Page.Home: return <LandingScreen onEnter={() => handleNavigate(Page.Introduction)} />;
      case Page.Introduction: return <Introduction />;
      case Page.EconomicFoundations: return <EconomicFoundations />;
      case Page.Infrastructure: return <Infrastructure />;
      case Page.Governance: return <Governance />;
      case Page.Metrics: return <Metrics />;
      case Page.Implementations: return <Implementations />;
      case Page.Risks: return <Risks />;
      case Page.Blog: return <Observatory />;
      default: return <LandingScreen onEnter={() => handleNavigate(Page.Introduction)} />;
    }
  };

  return (
    <>
      <CustomCursor />
      <Layout activePage={activePage} onNavigate={handleNavigate}>
        {renderContent()}
      </Layout>
    </>
  );
};

export default App;
