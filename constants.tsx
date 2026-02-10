
import { Page } from './types';

export const NAV_ITEMS = [
  { id: Page.Home, label: '00. Início' },
  { id: Page.Introduction, label: '01. O que é Web3 ReGen' },
  { id: Page.EconomicFoundations, label: '02. Fundamentos Econômicos' },
  { id: Page.Infrastructure, label: '03. Infraestrutura e Protocolos' },
  { id: Page.Governance, label: '04. DAOs e Governança' },
  { id: Page.Metrics, label: '05. Métricas e dMRV' },
  { id: Page.Implementations, label: '06. Casos Reais' },
  { id: Page.Risks, label: '07. Limites e Riscos' },
  { id: Page.Blog, label: '08. Blog Observatório ReGen' },
];

export const BLOG_POSTS = [
  {
    id: 'post-01',
    title: 'Post 01 — Por que impacto não é um KPI: uma introdução ao impacto verificável',
    date: '15 Jan 2026',
    author: 'Coordenação Técnica',
    category: 'Epistemologia',
    content: 'Durante décadas, impacto ambiental e social foi tratado como uma variável secundária, frequentemente reduzida a indicadores declarativos, relatórios anuais e compromissos voluntários. Esse modelo falhou não por falta de intenção, mas por ausência de verificabilidade. No contexto da Web3 Regenerativa, impacto deixa de ser um KPI isolado e passa a ser tratado como um fenômeno físico, ecológico e social mensurável. Isso implica reconhecer que dados de impacto precisam ter origem rastreável, método explícito e validação contínua. A distinção central é simples: métricas declaradas descrevem intenções; métricas verificadas descrevem estados do mundo. Apenas estas últimas podem sustentar mercados de impacto, alocação de capital responsável e políticas públicas baseadas em evidência.'
  },
  {
    id: 'post-02',
    title: 'Post 02 — dMRV: de auditorias pontuais à verificação contínua',
    date: '20 Jan 2026',
    author: 'Pesquisa e Infraestrutura',
    category: 'Tecnologia',
    content: 'O modelo tradicional de MRV foi desenhado para auditorias episódicas, baseadas em relatórios estáticos e validações ex post. Esse desenho é incompatível com sistemas vivos e dinâmicos. O dMRV (digital Measurement, Reporting and Verification) emerge como uma infraestrutura contínua, baseada em fluxos de dados provenientes de sensores, sensoriamento remoto e validação em solo. Quando ancorado em blockchain, o dMRV permite auditoria aberta, redução de intermediários e maior confiança sistêmica. Mais do que digitalizar relatórios, o dMRV redefine a própria noção de confiança, deslocando-a de instituições centrais para evidências verificáveis e acessíveis.'
  },
  {
    id: 'post-03',
    title: 'Post 03 — Blockchain não mede impacto: ela verifica evidências',
    date: '25 Jan 2026',
    author: 'Análise de Protocolos',
    category: 'Análise Crítica',
    content: 'Um erro comum no debate sobre Web3 e sustentabilidade é atribuir à blockchain a função de medir impacto. Blockchain não observa florestas, solos ou comunidades. Sua função é outra: registrar evidências, preservar integridade de dados e permitir verificação independente. Sensores, satélites e trabalho de campo continuam sendo essenciais. Essa separação clara de funções evita promessas irreais e protege projetos regenerativos de críticas legítimas sobre tecnosolucionismo.'
  },
  {
    id: 'post-04',
    title: 'Post 04 — Incerteza, erro e honestidade técnica em métricas ambientais',
    date: '02 Fev 2026',
    author: 'Métricas e dMRV',
    category: 'Ciência de Dados',
    content: 'Nenhum sistema de medição ecológica é perfeito. Satélites superestimam biomassa, sensores falham em biomas densos e dados sociais resistem à quantificação. Reconhecer limites não enfraquece projetos de impacto — ao contrário, fortalece sua credibilidade. Modelos regenerativos maduros incorporam margem de erro, calibração em solo e revisão metodológica contínua. Honestidade técnica é um ativo reputacional em mercados baseados em evidência.'
  },
  {
    id: 'post-05',
    title: 'Post 05 — Impacto como ativo público: Hypercerts e financiamento retroativo',
    date: '05 Fev 2026',
    author: 'Economia Regenerativa',
    category: 'Finanças',
    content: 'Quando evidências de impacto são verificáveis, elas podem ser representadas como bens públicos digitais. Hypercerts surgem como um padrão para registrar contribuições reais e duráveis. Ao se conectar com mecanismos de Financiamento Retroativo de Bens Públicos (RPGF), esse modelo inverte a lógica tradicional de subsídios: primeiro o impacto acontece, depois o capital é alocado. Isso reduz risco especulativo e realinha incentivos entre construtores, financiadores e comunidades.'
  },
  {
    id: 'post-06',
    title: 'Post 06 — Ecossistemas regenerativos em prática: iniciativas em rede',
    date: '07 Fev 2026',
    author: 'Relato de Campo',
    category: 'Ecossistemas',
    content: 'A Web3 Regenerativa não se constrói de forma isolada. Ela emerge de redes vivas de experimentação. Iniciativas como ReRe – Recursos Regenerativos, GreenPillBrasil, AgroforestDAO, Ekonavi, SheFi Brasil, ReCity e outras atuam em diferentes camadas: educação, governança, regeneração territorial, inclusão econômica e infraestrutura digital. Este blog observará e documentará essas iniciativas como estudos vivos, sem endosso automático, mas com análise crítica baseada em evidências públicas.'
  },
  {
    id: 'post-07',
    title: 'Post 07 — O papel do blog em infraestruturas regenerativas',
    date: '09 Fev 2026',
    author: 'Observatório',
    category: 'Institucional',
    content: 'Este blog não é um canal de notícias nem de marketing. Ele funciona como uma camada de atualização epistemológica do site Web3 ReGen. Aqui serão publicados: análises técnicas, atualizações conceituais, leituras críticas de protocolos e iniciativas e sínteses de aprendizados do ecossistema. O objetivo é manter o projeto intelectualmente vivo, auditável e alinhado com a evolução real do campo.'
  }
];
