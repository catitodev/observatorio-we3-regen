
import React from 'react';
import { BLOG_POSTS } from '../constants';
import Typewriter from '../components/Typewriter';

const Observatory: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 pb-20">
      <header className="mb-16">
        <h2 className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.5em] mb-4">
          <Typewriter text="Seção 08" delay={100} />
        </h2>
        <h1 className="text-4xl lg:text-5xl font-serif text-white leading-tight">
          <Typewriter text="Blog Observatório ReGen" delay={300} speed={30} />
        </h1>
        <div className="mt-8 p-4 border-l border-white/10 bg-white/[0.02] max-w-2xl">
          <p className="text-neutral-500 font-mono text-[10px] uppercase leading-relaxed tracking-wider">
            <Typewriter 
              delay={1000}
              text="Monitoramento analítico contínuo de experimentos institucionais, desenvolvimentos técnicos e dinâmicas de campo. Isenção de endosso para iniciativas citadas. Camada de atualização epistemológica do ecossistema." 
            />
          </p>
        </div>
      </header>

      <div className="space-y-12 lg:space-y-20">
        {BLOG_POSTS.map((post, index) => (
          <article key={post.id} className="group border-t border-white/5 pt-12 first:border-none first:pt-0">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              <aside className="lg:w-48 shrink-0">
                <div className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mb-2">
                  <Typewriter text={post.date} delay={1200 + index * 300} />
                </div>
                <div className="text-[10px] font-mono text-green-500/60 uppercase tracking-widest font-semibold">
                  <Typewriter text={post.category} delay={1400 + index * 300} />
                </div>
                <div className="mt-4 h-px w-8 bg-white/10 group-hover:w-full transition-all duration-700"></div>
              </aside>
              <div className="flex-1">
                <h3 className="text-2xl font-serif text-white mb-6 group-hover:text-neutral-300 transition-colors leading-snug">
                  <Typewriter text={post.title} delay={1600 + index * 300} speed={25} />
                </h3>
                <div className="text-narrative text-neutral-400 font-serif text-lg leading-relaxed space-y-4">
                  <Typewriter 
                    as="p"
                    text={post.content} 
                    delay={2200 + index * 300} 
                    speed={5} 
                  />
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px w-4 bg-white/20"></div>
                  <div className="text-[10px] font-mono text-neutral-600 uppercase tracking-tighter">
                    <Typewriter text={`Relator: ${post.author}`} delay={3500 + index * 300} />
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Observatory;
