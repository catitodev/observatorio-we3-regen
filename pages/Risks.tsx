
import React from 'react';
import Typewriter from '../components/Typewriter';

const Risks: React.FC = () => {
  return (
    <article className="animate-in fade-in duration-700 pb-20">
      <header className="mb-16">
        <h2 className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.5em] mb-4">
          <Typewriter text="Seção 07" delay={100} />
        </h2>
        <h1 className="text-4xl lg:text-5xl font-serif text-white leading-tight">
          <Typewriter text="Limites, Riscos e Próximos Passos" delay={300} speed={30} />
        </h1>
      </header>
      
      <section className="text-narrative text-neutral-400 space-y-12 font-serif text-lg lg:text-xl">
        <Typewriter 
          as="p"
          delay={1000}
          text="A consolidação do ecossistema Web3 ReGen como uma infraestrutura socioeconômica viável exige o reconhecimento honesto de que o campo permanece em uma fase emergente, enfrentando limites técnicos, institucionais e regulatórios significativos que não podem ser ignorados sob o pretexto de otimismo tecnológico. O amadurecimento desta nova arquitetura depende da superação de barreiras estruturais, começando pelos altos custos iniciais de implementação e pela complexidade técnica de sistemas como o Digital Monitoring, Reporting, and Verification (dMRV). A dependência atual de sensores de alta precisão e sensoriamento remoto enfrenta o desafio da escassez de dados de solo para a calibração de modelos de inteligência artificial, o que pode resultar em imprecisões ou na criação de 'caixas pretas' algorítmicas que ocultam falhas na observação física da biosfera."
        />
        
        <Typewriter 
          as="p"
          delay={2500}
          text="Os riscos de governança representam outra fronteira crítica para a sustentabilidade das Impact DAOs. A evidência empírica de baixas taxas de participação, frequentemente inferiores a 10%, aliada a uma alta concentração de poder propositivo, revela que a descentralização idealizada ainda luta para se traduzir em resiliência institucional prática. Existe o perigo real de captura de governança por interesses velados ou elites tecnofinanceiras, onde a votação baseada em tokens pode reforçar estruturas plutocráticas em vez de democratizar a alocação de bens públicos."
        />

        <Typewriter 
          as="p"
          delay={4000}
          text="Sistemicamente, o Web3 ReGen enfrenta a tensão contínua entre a regeneração genuína e o risco de financeirização indevida da natureza. A transformação do Global Commons em uma 'fronteira de commodities' através da tokenização e da criação de mercados hiperlíquidos pode, se dissociada de princípios ecocêntricos, exacerbar lógicas extrativas sob o róulo de inovação. O surgimento do 'greenwashing descentralizado' é uma ameaça latente."
        />

        <Typewriter 
          as="p"
          delay={5500}
          text="No âmbito regulatório, a divergência entre jurisdições globais e a incerteza sobre a classificação jurídica de tokens de impacto geram atritos que limitam a escala e a integração institucional. Barreiras como o rigor da diretiva MiCA na Europa e a evolução legislativa nos Estados Unidos criam desafios de conformidade que podem excluir projetos pequenos ou geograficamente isolados."
        />

        <Typewriter 
          as="p"
          delay={7000}
          text="Os próximos passos para a Web3 ReGen envolvem um processo de evolução coletiva voltado à profissionalização e à integração secular. Oportunidades estratégicas residem na maturidade de ferramentas de privacidade e na expansão para ativos do mundo real (RWA) que permitam conectar fluxos financeiros institucionais à regeneração tangível. A transição exige uma mudança de foco: dos ciclos de especulação para a utilidade operacional."
        />
      </section>
    </article>
  );
};

export default Risks;
