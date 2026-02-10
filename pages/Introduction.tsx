
import React from 'react';
import Typewriter from '../components/Typewriter';

const Introduction: React.FC = () => {
  return (
    <article className="animate-in fade-in duration-700">
      <header className="mb-16">
        <h2 className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.5em] mb-4">
          <Typewriter text="Seção 01" delay={100} />
        </h2>
        <h1 className="text-4xl lg:text-5xl font-serif text-white leading-tight">
          <Typewriter text="O que é Web3 ReGen" delay={300} speed={40} />
        </h1>
      </header>
      
      <section className="text-narrative text-neutral-400 space-y-8 font-serif text-lg lg:text-xl">
        <Typewriter 
          as="p"
          delay={1000}
          text="A Web3 Regenerativa, comumente referenciada sob o acrônimo Web3 ReGen, constitui um campo emergente de pesquisa e implementação tecnológica que busca utilizar sistemas de contabilidade distribuída para alinhar a atividade econômica humana com a saúde e a integridade dos sistemas vivos. Diferente de abordagens puramente financeiras ou extrativas, esta arquitetura socioeconômica parte da premissa de que a tecnologia não é um fim em si mesma, mas um meio para coordenar recursos, incentivos e ações em direção à regeneração da biosfera e do tecido social."
        />
        <Typewriter 
          as="p"
          delay={1800}
          text="O ecossistema Web3 ReGen define-se tecnicamente como um conjunto de arquiteturas financeiras e tecnológicas descentralizadas que utilizam protocolos de blockchain e contratos inteligentes para internalizar externalidades socioambientais e restaurar a capacidade evolutiva dos sistemas vivos. Diferente do modelo de finanças tradicionais (TradFi) ou das abordagens convencionais de ESG, que operam sob a lógica de mitigação de riscos e conformidade regulatória, o Web3 ReGen propõe uma transição da economia extrativa neoclássica para um paradigma de sistemas vivos."
        />
        <Typewriter 
          as="p"
          delay={2600}
          text="A distinção entre regeneração e sustentabilidade incremental é fundamental para a integridade desta infraestrutura. Enquanto a sustentabilidade clássica foca na redução de danos e na manutenção de limites finitos, a regeneração busca ativamente expandir a vitalidade e o potencial de evolução dos sistemas humanos e ecológicos. Portanto, o Web3 ReGen não se propõe a ser apenas um mecanismo de compensação simbólica ou mitigação marginal, mas sim uma fundação para uma economia ecocêntrica."
        />
      </section>
    </article>
  );
};

export default Introduction;
