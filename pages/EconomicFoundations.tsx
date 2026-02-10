
import React from 'react';
import Typewriter from '../components/Typewriter';

const EconomicFoundations: React.FC = () => {
  return (
    <article className="animate-in fade-in duration-700">
      <header className="mb-16">
        <h2 className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.5em] mb-4">
          <Typewriter text="Seção 02" delay={100} />
        </h2>
        <h1 className="text-4xl lg:text-5xl font-serif text-white leading-tight">
          <Typewriter text="Fundamentos Econômicos da Regeneração" delay={300} speed={30} />
        </h1>
      </header>
      
      <section className="text-narrative text-neutral-400 space-y-8 font-serif text-lg lg:text-xl">
        <Typewriter 
          as="p"
          delay={1000}
          text="Os fundamentos econômicos do ecossistema Web3 ReGen representam uma ruptura profunda com o paradigma neoclássico extrativo, fundamentando-se na premissa epistemológica de que a economia humana é um subsistema vivo, aninhado e dependente da biosfera. Enquanto os modelos financeiros tradicionais operam sob uma lógica linear, a economia regenerativa busca ativamente expandir a vitalidade e a capacidade evolutiva dos sistemas humanos."
        />
        <Typewriter 
          as="p"
          delay={2000}
          text="A transição para este modelo exige a substituição da lógica puramente transacional — onde o capital financeiro é tratado como um fim em si mesmo — pela supremacia do relacionamento e da relacionalidade. Na economia regenerativa, as finanças são redefinidas como um meio para atingir a saúde sistêmica, valorizando-se a transparência em detrimento da complexidade e harmonizando múltiplas formas de capital para a criação de riqueza real."
        />
      </section>
    </article>
  );
};

export default EconomicFoundations;
