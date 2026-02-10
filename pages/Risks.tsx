
import React from 'react';
import Typewriter from '../components/Typewriter';

const Risks: React.FC = () => {
  return (
    <article className="animate-in fade-in duration-700 pb-40">
      <header className="mb-14">
        <h2 className="text-[8px] font-mono text-neutral-600 uppercase tracking-[0.6em] mb-4">
          <Typewriter text="Seção 07" delay={100} />
        </h2>
        <h1 className="text-2xl lg:text-3xl font-serif text-white leading-tight">
          <Typewriter text="Limites, Riscos e Próximos Passos" delay={300} speed={30} />
        </h1>
        <div className="h-px w-12 bg-white/10 mt-6"></div>
      </header>
      
      <section className="text-narrative text-neutral-400 space-y-10 font-serif text-sm lg:text-base leading-[1.8] max-w-none">
        <div className="relative pl-6 border-l border-white/5">
          <Typewriter 
            as="p" 
            delay={1000} 
            text="A consolidação do ecossistema Web3 ReGen exige o reconhecimento honesto de que o campo permanece em uma fase emergente. O amadurecimento desta arquitetura depende da superação de barreiras estruturais, começando pelos altos custos de implementação e pela complexidade do monitoramento digital (dMRV). A dependência de sensores de alta precisão enfrenta o desafio da escassez de dados de solo, o que pode resultar em imprecisões ou na criação de 'caixas pretas' algorítmicas que mascaram a realidade biofísica." 
          />
        </div>
        
        <div className="relative pl-6 border-l border-white/5">
          <Typewriter 
            as="p" 
            delay={2200} 
            text="Os riscos de governança representam outra fronteira crítica. A evidência de baixas taxas de participação em processos decisórios revela que a descentralização idealizada ainda luta para se traduzir em resiliência prática. Existe o perigo real de captura de governança por elites tecnofinanceiras, onde a votação baseada puramente em tokens pode reforçar estruturas plutocráticas em vez de meritocracias de impacto real." 
          />
        </div>

        <div className="relative pl-6 border-l border-white/5">
          <Typewriter 
            as="p" 
            delay={3400} 
            text="Sistemicamente, o Web3 ReGen enfrenta a tensão contínua entre a regeneração genuína e o risco de financeirização indevida da natureza. A transformação do Global Commons em uma 'fronteira de commodities' através da tokenização pode, se dissociada de princípios ecocêntricos rígidos, exacerbar lógicas extrativas sob o rótulo de inovação digital, perpetuando o ciclo de exploração que se propunha a resolver." 
          />
        </div>

        <div className="relative pl-6 border-l border-white/5">
          <Typewriter 
            as="p" 
            delay={4600} 
            text="No âmbito regulatório, a divergência global gera atritos que limitam a escala institucional. Próximos passos envolvem um processo de evolução voltado à profissionalização e à integração secular, conectando ativos do mundo real (RWA) à regeneração tangível. A transição exige uma mudança radical de foco: dos ciclos de especulação para a utilidade operacional e a prova biológica de impacto positivo." 
          />
        </div>
      </section>
    </article>
  );
};

export default Risks;
