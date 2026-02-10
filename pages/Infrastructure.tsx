
import React from 'react';
import Typewriter from '../components/Typewriter';

const Infrastructure: React.FC = () => {
  return (
    <article className="animate-in fade-in duration-700">
      <header className="mb-16">
        <h2 className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.5em] mb-4">
          <Typewriter text="Seção 03" delay={100} />
        </h2>
        <h1 className="text-4xl lg:text-5xl font-serif text-white leading-tight">
          <Typewriter text="Infraestruturas e Protocolos" delay={300} speed={30} />
        </h1>
      </header>
      
      <section className="text-narrative text-neutral-400 space-y-8 font-serif text-lg lg:text-xl">
        <Typewriter 
          as="p"
          delay={1000}
          text="A materialização dos princípios econômicos regenerativos em arquiteturas digitais exige que a infraestrutura tecnológica atue como uma camada de coordenação sistêmica. Nesse contexto, os protocolos de blockchain e os contratos inteligentes operam como uma base de verificação e incentivo, permitindo que a lógica de sistemas vivos seja internalizada diretamente no código."
        />
        <Typewriter 
          as="p"
          delay={2000}
          text="A eficácia dessa arquitetura depende fundamentalmente da interoperabilidade e da composabilidade entre protocolos. A capacidade de diferentes módulos técnicos se comunicarem permite que o impacto gerado em um ecossistema possa ser reconhecido e recompensado em outro, criando fluxos de valor que mimetizam a interdependência dos sistemas biológicos naturais."
        />
      </section>
    </article>
  );
};

export default Infrastructure;
