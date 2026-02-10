
import React from 'react';
import Typewriter from '../components/Typewriter';

const Metrics: React.FC = () => {
  return (
    <article className="animate-in fade-in duration-700">
      <header className="mb-16">
        <h2 className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.5em] mb-4">
          <Typewriter text="Seção 05" delay={100} />
        </h2>
        <h1 className="text-4xl lg:text-5xl font-serif text-white leading-tight">
          <Typewriter text="Métricas de Impacto e Verificação" delay={300} speed={30} />
        </h1>
      </header>
      
      <section className="text-narrative text-neutral-400 space-y-8 font-serif text-lg lg:text-xl">
        <Typewriter 
          as="p"
          delay={1000}
          text="A integridade do ecossistema Web3 ReGen é indissociável da capacidade de converter o impacto ecológico em dados verificáveis. A transição é operada pela infraestrutura de Monitoramento Digital (dMRV), que substitui relatórios manuais por sistemas de evidência automatizados ancorados em blockchain, garantindo que o impacto gerado no Global Commons seja resistente à manipulação."
        />
        <Typewriter 
          as="p"
          delay={2000}
          text="Ao integrar sensores de IoT, imagens de satélite e inteligência artificial, a Web3 ReGen cria um nexo direto entre o estado biofísico do planeta e os incentivos financeiros. Estes dados geram trilhas de auditoria imutáveis que permitem que stakeholders acompanhem a evolução de um projeto em tempo real, desde a captura de carbono até a preservação da biodiversidade."
        />
      </section>
    </article>
  );
};

export default Metrics;
