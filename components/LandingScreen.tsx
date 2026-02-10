
import React from 'react';
import Typewriter from '../components/Typewriter';

const Risks: React.FC = () => {
  return (
    <article className="animate-in fade-in duration-700 pb-32">
      <header className="mb-10">
        <h2 className="text-[9px] font-mono text-neutral-500 uppercase tracking-[0.5em] mb-4">
          <Typewriter text="Seção 07" delay={100} />
        </h2>
        <h1 className="text-3xl lg:text-4xl font-serif text-white leading-tight">
          <Typewriter text="Limites, Riscos e Próximos Passos" delay={300} speed={30} />
        </h1>
      </header>
      
      <section className="text-narrative text-neutral-400 space-y-8 font-serif text-base lg:text-lg">
        <Typewriter 
          as="p"
          delay={1000}
          text="A consolidação do ecossistema Web3 ReGen como uma infraestrutura socioeconômica viável exige o reconhecimento honesto de que o campo permanece em uma fase emergente, enfrentando limites técnicos, institucionais e regulatórios significativos. O amadurecimento desta arquitetura depende da superação de barreiras estruturais, começando pelos altos custos de implementação e pela complexidade do monitoramento digital (dMRV). A dependência de sensores de alta precisão e sensoriamento remoto enfrenta o desafio da escassez de dados de solo, o que pode resultar em imprecisões ou na criação de 'caixas pretas' algorítmicas."
        />
        
        <Typewriter 
          as="p"
          delay={2200}
          text="Os riscos de governança representam outra fronteira crítica. A evidência de baixas taxas de participação, aliada a uma alta concentração de poder propositivo, revela que a descentralização idealizada ainda luta para se traduzir em resiliência prática. Existe o perigo real de captura de governança por interesses velados ou elites tecnofinanceiras, onde a votação baseada em tokens pode reforçar estruturas plutocráticas."
        />

        <Typewriter 
          as="p"
          delay={3400}
          text="Sistemicamente, o Web3 ReGen enfrenta a tensão contínua entre a regeneração genuína e o risco de financeirização indevida da natureza. A transformação do Global Commons em uma 'fronteira de commodities' através da tokenização pode, se dissociada de princípios ecocêntricos, exacerbar lógicas extrativas sob o rótulo de inovação."
        />

        <Typewriter 
          as="p"
          delay={4600}
          text="No âmbito regulatório, a divergência global e a incerteza jurídica sobre tokens de impacto geram atritos que limitam a escala institucional. Próximos passos envolvem um processo de evolução voltado à profissionalização e à integração secular, conectando ativos do mundo real (RWA) à regeneração tangível. A transição exige uma mudança de foco: dos ciclos de especulação para a utilidade operacional."
        />
      </section>
    </article>
  );
};

export default Risks;
