
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

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const FooterText = () => (
    <div className="flex flex-col gap-2">
      <p className="text-[9px] font-mono text-neutral-600 uppercase tracking-[0.2em]">
        Status: Sincronizado
      </p>
      <p className="text-[10px] font-mono text-neutral-500 leading-relaxed tracking-tight">
        © 2026 Observatório Web3 ReGen · Licença MIT <br/>
        Infraestrutura por CalangoFlux
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-300 selection:bg-white/10 flex flex-col relative">
      
      {/* Botão de Menu Flutuante - Arredondado e Glassmorphism */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`
          fixed top-6 right-6 lg:top-10 lg:right-10 z-[120]
          flex items-center gap-3 px-6 py-2.5 rounded-full
          bg-[#0d0d0d]/60 backdrop-blur-xl border border-white/10
          hover:border-white/30 transition-all duration-500 group
          ${isMenuOpen ? 'bg-white text-black border-white' : 'text-white'}
        `}
      >
        <span className="text-[9px] font-mono tracking-[0.3em] uppercase ml-1">
          {isMenuOpen ? 'Fechar' : 'Menu'}
        </span>
        <div className="flex flex-col gap-1 w-3.5">
          <span className={`h-px w-full bg-current transition-transform duration-500 ${isMenuOpen ? 'rotate-45 translate-y-[2px]' : ''}`}></span>
          <span className={`h-px w-full bg-current transition-transform duration-500 ${isMenuOpen ? '-rotate-45 -translate-y-[2px]' : ''}`}></span>
        </div>
      </button>

      {/* Identificador de Marca (Top Left) */}
      {!isHome && (
        <div className="fixed top-6 left-6 lg:top-10 lg:left-10 z-[40] pointer-events-none">
          <div className="text-[11px] font-serif text-white/30 tracking-widest uppercase">
            Web3 ReGen <span className="ml-1 font-mono text-[9px] opacity-30 tracking-normal italic">v4.0.2</span>
          </div>
        </div>
      )}

      {/* Overlay do Menu Drawer - Translúcido */}
      <div className={`
        fixed inset-0 z-[110] transition-all duration-700 ease-in-out
        ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}
      `}>
        <div 
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        <div className={`
          absolute right-0 top-0 h-full w-full lg:w-[400px] 
          bg-[#0d0d0d]/80 backdrop-blur-[40px] 
          border-l border-white/5 p-10 lg:p-16 flex flex-col justify-between
          transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div>
            <div className="mb-16">
              <h3 className="text-[9px] font-mono text-neutral-500 uppercase tracking-[0.5em] mb-4">Navegação</h3>
              <div className="h-px w-8 bg-white/20"></div>
            </div>

            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      text-left text-xl lg:text-2xl font-serif transition-all duration-500
                      ${activePage === item.id 
                        ? 'text-white pl-4 border-l border-white' 
                        : 'text-neutral-600 hover:text-neutral-200 hover:pl-2'}
                    `}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-10 border-t border-white/5">
            <FooterText />
          </div>
        </div>
      </div>

      {/* Área de Conteúdo Principal */}
      <main className={`
        flex-1 flex flex-col relative
        ${isHome ? 'p-0 h-screen overflow-hidden' : 'pt-28 pb-10 px-6 lg:px-0'}
      `}>
        <div className={`
          flex-1 w-full mx-auto flex flex-col
          ${isHome ? 'max-w-none' : 'max-w-2xl lg:max-w-3xl'}
        `}>
          <div className="flex-1 w-full">
            {children}
          </div>
          
          {!isHome && (
            <footer className="mt-24 pt-10 pb-16 border-t border-white/5 flex flex-col lg:flex-row justify-between items-start gap-8 opacity-30 hover:opacity-100 transition-opacity duration-700">
              <FooterText />
              <div className="flex gap-6">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[9px] font-mono uppercase tracking-widest hover:text-white transition-colors">Github</a>
                <a href="#" className="text-[9px] font-mono uppercase tracking-widest hover:text-white transition-colors">Docs</a>
                <a href="#" className="text-[9px] font-mono uppercase tracking-widest hover:text-white transition-colors">Regen</a>
              </div>
            </footer>
          )}
        </div>
      </main>
    </div>
  );
};

export default Layout;
