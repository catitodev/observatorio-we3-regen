
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Page } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHome = activePage === Page.Home;

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const FooterText = () => (
    <div className="flex flex-col gap-1.5">
      <p className="text-[8px] font-mono text-neutral-600 uppercase tracking-widest">Status: Sincronizado</p>
      <p className="text-[9px] font-mono text-neutral-500 leading-relaxed tracking-tight">
        © 2026 Web3 ReGen · Licença MIT <br/>
        Infraestrutura por CalangoFlux
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-300 flex flex-col relative">
      
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`
          fixed top-6 right-6 lg:top-8 lg:right-8 z-[120]
          flex items-center gap-3 px-5 py-2.5 rounded-full
          bg-[#0d0d0d]/60 backdrop-blur-xl border border-white/10
          hover:border-white/30 transition-all duration-500
          ${isMenuOpen ? 'bg-white text-black border-white' : 'text-white'}
        `}
      >
        <span className="text-[8px] font-mono tracking-[0.3em] uppercase ml-1">
          {isMenuOpen ? 'Fechar' : 'Menu'}
        </span>
        <div className="flex flex-col gap-1 w-3">
          <span className={`h-px w-full bg-current transition-transform duration-500 ${isMenuOpen ? 'rotate-45 translate-y-[2px]' : ''}`}></span>
          <span className={`h-px w-full bg-current transition-transform duration-500 ${isMenuOpen ? '-rotate-45 -translate-y-[2px]' : ''}`}></span>
        </div>
      </button>

      {!isHome && (
        <div className="fixed top-6 left-6 lg:top-8 lg:left-8 z-[40] pointer-events-none">
          <div className="text-[10px] font-serif text-white/20 tracking-[0.3em] uppercase">
            Web3 ReGen <span className="ml-1 font-mono text-[8px] opacity-40 italic">v4.0</span>
          </div>
        </div>
      )}

      <div className={`fixed inset-0 z-[110] transition-all duration-700 ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
        <div className={`
          absolute right-0 top-0 h-full w-full lg:w-[380px] 
          bg-[#0d0d0d]/80 backdrop-blur-[50px] border-l border-white/5 
          p-10 lg:p-14 flex flex-col justify-between transition-transform duration-700
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div>
            <div className="mb-12">
              <h3 className="text-[8px] font-mono text-neutral-500 uppercase tracking-[0.5em] mb-3">Navegação</h3>
              <div className="h-px w-6 bg-white/10"></div>
            </div>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      text-left text-lg lg:text-xl font-serif transition-all duration-500
                      ${activePage === item.id ? 'text-white pl-4 border-l border-white' : 'text-neutral-600 hover:text-neutral-200 hover:pl-2'}
                    `}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-8 border-t border-white/5">
            <FooterText />
          </div>
        </div>
      </div>

      <main className={`flex-1 flex flex-col ${isHome ? 'h-screen overflow-hidden' : 'pt-24 pb-10 px-6'}`}>
        <div className={`flex-1 w-full mx-auto flex flex-col ${isHome ? 'max-w-none' : 'max-w-2xl lg:max-w-3xl'}`}>
          <div className="flex-1">{children}</div>
          {!isHome && (
            <footer className="mt-20 pt-8 pb-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-start gap-6 opacity-30 hover:opacity-100 transition-opacity duration-700">
              <FooterText />
              <div className="flex gap-5">
                <a href="#" className="text-[8px] font-mono uppercase tracking-widest hover:text-white transition-colors">GitHub</a>
                <a href="#" className="text-[8px] font-mono uppercase tracking-widest hover:text-white transition-colors">Docs</a>
              </div>
            </footer>
          )}
        </div>
      </main>
    </div>
  );
};

export default Layout;
