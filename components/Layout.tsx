
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';
import { Page } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHome = activePage === Page.Home;

  const FooterText = () => (
    <p className="text-[11px] font-mono text-neutral-400 leading-relaxed tracking-tight">
      © 2026 Observatório Web3 ReGen · Licença MIT · Desenvolvido por CalangoFlux
    </p>
  );

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#0a0a0a]">
      {/* Mobile Header */}
      <header className="lg:hidden p-6 border-b border-white/10 flex justify-between items-center sticky top-0 bg-[#0a0a0a] z-[60]">
        <div className="text-sm font-serif text-white/70 tracking-tight">Web3 ReGen</div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white font-mono text-[10px] tracking-widest focus:outline-none"
        >
          {isMobileMenuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </header>

      {/* Navigation Sidebar */}
      <nav className={`
        ${isMobileMenuOpen ? 'fixed inset-0 pt-20' : 'hidden'} 
        lg:block lg:w-80 lg:sticky lg:top-0 lg:h-screen 
        ${isHome ? 'bg-black/80 backdrop-blur-md' : 'bg-[#0a0a0a]'} 
        border-r border-white/5 p-8 lg:p-12 z-[50] transition-colors duration-1000
      `}>
        <div className="hidden lg:block mb-12">
          <h1 className="text-xl font-serif text-white tracking-tight">Web3 ReGen</h1>
        </div>

        <ul className="space-y-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`
                  text-left text-sm font-mono transition-all duration-300
                  ${activePage === item.id 
                    ? 'text-white translate-x-2' 
                    : 'text-neutral-500 hover:text-neutral-300'}
                `}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-20 lg:absolute lg:bottom-12 lg:left-12 pr-12 hidden lg:block">
          <FooterText />
        </div>
      </nav>

      {/* Main Content Area */}
      <main className={`
        flex-1 relative z-10 flex flex-col
        ${isHome ? 'px-0 py-0 max-w-none' : 'px-6 lg:px-24 py-12 lg:py-20 max-w-5xl mx-auto w-full'}
      `}>
        <div className="flex-1">
          {children}
        </div>
        
        {!isHome && (
          <footer className="mt-24 pt-12 border-t border-white/5 pb-12">
            <FooterText />
          </footer>
        )}
      </main>
    </div>
  );
};

export default Layout;
