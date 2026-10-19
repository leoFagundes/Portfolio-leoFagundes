import { CareerItemProps } from "src/types/type";

export const careerData: CareerItemProps[] = [
  {
    organization:"Caixa Econômica Federal",
    type: "job",
    current: true,
    roles: [
      { title: "Desenvolvedor Angular e ABAP", period: "abr 2026 – atual" },
      { title: "UX Designer", period: "out 2025 – abr 2026" },
    ],
    description:
      "Entrei na área de UX, onde passei seis meses trabalhando no design de interfaces, e hoje atuo como desenvolvedor Angular e ABAP.",
    stack: ["Angular", "TypeScript", "ABAP", "UX/UI"],
  },
  {
    organization:"CTIR Gov",
    type: "job",
    roles: [
      { title: "Estágio em desenvolvimento", period: "nov 2022 – nov 2024" },
    ],
    description:
      "Desenvolvi uma aplicação interna para monitorar os status da ReGIC, melhorando a visibilidade e o controle dos processos internos.",
    highlights: [
      "Interfaces no padrão visual da organização, com protótipos no Figma.",
      "Pipeline de CI/CD com GitHub Actions automatizando testes, build e deploy.",
      "Scripts em Python para automação, com foco na geração de tickets de resposta a incidentes de segurança.",
      "Trabalho em equipe ágil, com Trello e Git/GitLab.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "MongoDB",
      "Python",
      "Jest",
    ],
  },
  {
    organization:"Cine Drive-in de Brasília",
    type: "freelance",
    current: true,
    roles: [{ title: "Desenvolvedor full stack", period: "jan 2024 – atual" }],
    description:
      "Desenvolvi o site oficial e o sistema de pedidos da lanchonete, com áreas para clientes e administradores, o que reduziu o tempo de atendimento.",
    highlights: [
      "Protótipos de interface no Figma, fiéis à identidade do cinema.",
      "API RESTful com autenticação via bcrypt e operações de CRUD.",
      "Dashboards com vendas por dia, pedidos em tempo real e controle de estoque.",
      "Cerca de 20 mil acessos por mês no site principal.",
      "Em 2026, nova versão do sistema de pedidos e do painel administrativo com Next.js e Firebase.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "MongoDB",
      "Firebase",
    ],
    projectName: "Cine Drive-in Site",
    link: "https://cinedrivein.com/",
  },
  {
    organization:"Carcassonne Pub",
    type: "freelance",
    current: true,
    roles: [{ title: "Desenvolvedor full stack", period: "abr 2025 – atual" }],
    description:
      "Criei o sistema do pub, com cardápio digital, acervo de jogos de tabuleiro, reservas e uma área administrativa completa.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
    projectName: "Carcassonne - Aplicação Web",
    link: "https://www.carcassonnepub.com.br/clientMenu",
  },
  {
    organization:"Alfredos Pizzaria",
    type: "freelance",
    current: true,
    roles: [{ title: "Desenvolvedor full stack", period: "nov 2025 – atual" }],
    description:
      "Desenvolvi o sistema de pedidos online da pizzaria, com cardápio por loja, pizza meio a meio e pagamento via Pix com Mercado Pago, além de um painel administrativo de pedidos, estoque, lojas e usuários.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Firebase", "Mercado Pago"],
    link: "https://alfredos.vercel.app/",
  },
  {
    organization: "Faculdade Focus",
    type: "education",
    current: true,
    roles: [
      {
        title: "Pós-graduação em Desenvolvimento Fullstack (EAD)",
        period: "em andamento",
      },
    ],
    description:
      "Especialização a distância com foco em desenvolvimento fullstack, do front-end ao back-end.",
  },
  {
    organization: "CEUB – Centro Universitário de Brasília",
    type: "education",
    roles: [
      {
        title: "Bacharelado em Ciência da Computação",
        period: "jan 2021 – dez 2024",
      },
    ],
    description:
      "No projeto final desenvolvi o Effycity, um aplicativo de cidades inteligentes que conecta gestores com necessidades a empresas com projetos.",
    projectName: "Effycity",
  },
  {
    organization: "Ensino médio completo",
    type: "education",
    roles: [],
  },
];
