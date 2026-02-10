
export interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
  author: string;
  category: string;
}

export enum Page {
  Home = 'inicio',
  Introduction = 'o-que-e-web3-regen',
  EconomicFoundations = 'fundamentos-economicos',
  Infrastructure = 'infraestrutura-e-protocolos',
  Governance = 'daos-e-governanca',
  Metrics = 'metricas-e-dmrv',
  Implementations = 'casos-e-implementacoes',
  Risks = 'limites-e-riscos',
  Blog = 'observatorio'
}
