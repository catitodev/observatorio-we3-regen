
import React from 'react';
import Typewriter from '../components/Typewriter';

const Governance: React.FC = () => {
  return (
    <article className="animate-in fade-in duration-700">
      <header className="mb-16">
        <h2 className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.5em] mb-4">
          <Typewriter text="Seção 04" delay={100} />
        </h2>
        <h1 className="text-4xl lg:text-5xl font-serif text-white leading-tight">
          <Typewriter text="DAOs e Governança Regenerativa" delay={300} speed={30} />
        </h1>
      </header>
      
      <section className="text-narrative text-neutral-400 space-y-8 font-serif text-lg lg:text-xl">
        <Typewriter 
          as="p"
          delay={1000}
          text="As Organizações Autônomas Descentralizadas (DAOs) constituem a infraestrutura institucional central para a coordenação de ativos socioambientais. No paradigma Web3 ReGen, estas entidades transcendem a função de coletivos digitais para se tornarem arquiteturas de gestão do Global Commons, onde a governança é redefinida tecnicamente como a alocação sistemática de responsabilidades."
        />
        <Typewriter 
          as="p"
          delay={2000}
          text="O alinhamento de incentivos e a accountability representam os pilares de integridade dessas estruturas, permitindo que a transparência inerente à blockchain funcione como um mecanismo de prova contra o greenwashing. Diferente da governança extrativa, a governança regenerativa busca a saúde do sistema total, tratando a rentabilidade como um subproduto da restauração ecológica real."
        />
      </section>
    </article>
  );
};

export default Governance;
