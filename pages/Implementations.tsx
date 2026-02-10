
import React from 'react';
import Typewriter from '../components/Typewriter';

const Implementations: React.FC = () => {
  return (
    <article className="animate-in fade-in duration-700">
      <header className="mb-16">
        <h2 className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.5em] mb-4">
          <Typewriter text="Seção 06" delay={100} />
        </h2>
        <h1 className="text-4xl lg:text-5xl font-serif text-white leading-tight">
          <Typewriter text="Casos Reais e Implementações" delay={300} speed={30} />
        </h1>
      </header>
      
      <section className="text-narrative text-neutral-400 space-y-8 font-serif text-lg lg:text-xl">
        <Typewriter 
          as="p"
          delay={1000}
          text="A implementação prática dos princípios Web3 ReGen reflete a transição de experimentos teóricos para infraestruturas operacionais verificáveis. No domínio da alocação de capital, o Gitcoin consolidou-se como um estudo de caso central ao validar a eficácia do Financiamento Quadrático (QF) como um motor de crescimento secular para bens públicos digitais."
        />
        <Typewriter 
          as="p"
          delay={2000}
          text="A materialização da regeneração ecológica é exemplificada pela Regen Network, que implementou créditos bioculturais voltados à proteção de habitats críticos, integrando sabedoria tradicional com monitoramento tecnológico remoto. Estes casos reais operam em fases de consolidação, enfrentando barreiras estruturais mas demonstrando a viabilidade do modelo."
        />
      </section>
    </article>
  );
};

export default Implementations;
