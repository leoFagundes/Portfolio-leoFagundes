import bootstrapLogo from "src/assets/svg/skills/bootstrap-logo.svg";
// import cssLogo from "src/assets/svg/skills/css-logo.svg";
import figmaLogo from "src/assets/svg/skills/figma-logo.svg";
// import htmlLogo from "src/assets/svg/skills/html-logo.svg";
import javascriptLogo from "src/assets/svg/skills/javascript-logo.svg";
import jestLogo from "src/assets/svg/skills/jest-logo.svg";
import nextLogo from "src/assets/svg/skills/next-logo.svg";
import nodeLogo from "src/assets/svg/skills/node-logo.svg";
import pythonLogo from "src/assets/svg/skills/python-logo.svg";
import reactLogo from "src/assets/svg/skills/react-logo.svg";
import reduxLogo from "src/assets/svg/skills/redux-logo.svg";
import sassLogo from "src/assets/svg/skills/sass-logo.svg";
import sqlLogo from "src/assets/svg/skills/sql-logo.svg";
import styledComponentsLogo from "src/assets/svg/skills/styled-components-logo.svg";
import tailwindLogo from "src/assets/svg/skills/tailwind-logo.svg";
import typescriptLogo from "src/assets/svg/skills/typescript-logo.svg";
import htmlCssLogo from "src/assets/svg/skills/html&css-logo.svg";
import firebaseLogo from "src/assets/svg/skills/firebase-logo.svg";
import mongodbLogo from "src/assets/svg/skills/mongodb-logo.svg";
import expressLogo from "src/assets/svg/skills/express-logo.svg";
import gitLogo from "src/assets/svg/skills/git-logo.svg";
import reactNativeLogo from "src/assets/svg/skills/react-native-logo.svg";
import { SkillDataProps } from "src/types/type";

export const skillsData: SkillDataProps[] = [
  {
    name: "Next.js",
    img: nextLogo,
    category: "Front-end",
    description:
      "Framework React para construção de aplicações web, oferecendo renderização do lado do servidor, geração de sites estáticos e roteamento automático.",
  },
  {
    name: "React",
    img: reactLogo,
    category: "Front-end",
    description:
      "Biblioteca JavaScript para construir interfaces de usuário, focada na criação de componentes reutilizáveis e na eficiência da atualização da interface.",
  },
  {
    name: "TypeScript",
    img: typescriptLogo,
    category: "Front-end",
    description:
      "Superset de JavaScript que adiciona tipagem estática opcional e outras funcionalidades, melhorando a robustez e a manutenção do código.",
  },
  {
    name: "Tailwind",
    img: tailwindLogo,
    category: "Estilização",
    description:
      "Framework de CSS utilitário que fornece classes pré-definidas para construir interfaces de usuário de forma rápida e personalizada.",
  },
  {
    name: "Firebase",
    img: firebaseLogo,
    category: "Back-end",
    description:
      "Plataforma do Google para desenvolvimento de aplicativos web e mobile, oferecendo banco de dados em tempo real, autenticação, hospedagem e diversas ferramentas integradas.",
  },
  {
    name: "JavaScript",
    img: javascriptLogo,
    category: "Front-end",
    description:
      "Linguagem de programação popular para desenvolvimento web, conhecida por sua flexibilidade e uso no lado do cliente e do servidor.",
  },
  {
    name: "HTML & CSS",
    img: htmlCssLogo,
    category: "Front-end",
    description:
      "HTML (HyperText Markup Language) é a linguagem de marcação para estruturar conteúdo na web, enquanto CSS (Cascading Style Sheets) é usado para estilizar e layoutizar essas páginas.",
  },
  {
    name: "Node.js",
    img: nodeLogo,
    category: "Back-end",
    description:
      "Ambiente de execução para JavaScript no lado do servidor, permitindo a construção de aplicações web escaláveis e de alto desempenho.",
  },
  {
    name: "Express",
    img: expressLogo,
    category: "Back-end",
    description:
      "Framework minimalista para Node.js, usado para criar APIs e servidores web com rotas, middlewares e integração simples com bancos de dados.",
  },
  {
    name: "MongoDB",
    img: mongodbLogo,
    category: "Back-end",
    description:
      "Banco de dados NoSQL orientado a documentos, que armazena as informações em um formato parecido com JSON e permite uma modelagem de dados flexível.",
  },
  {
    name: "Styled Components",
    img: styledComponentsLogo,
    category: "Estilização",
    description:
      "Biblioteca para estilização de componentes em aplicações React, utilizando uma abordagem de CSS-in-JS que permite criar estilos encapsulados e reutilizáveis.",
  },
  {
    name: "Sass",
    img: sassLogo,
    category: "Estilização",
    description:
      "Pré-processador CSS que adiciona funcionalidades como variáveis, aninhamento e mixins ao CSS, tornando a escrita de estilos mais eficiente e organizada.",
  },
  {
    name: "React Native",
    img: reactNativeLogo,
    category: "Front-end",
    description:
      "Framework para desenvolver aplicativos mobile nativos para Android e iOS usando React e JavaScript.",
  },
  {
    name: "Figma",
    img: figmaLogo,
    category: "Ferramentas",
    description:
      "Ferramenta de design de interface colaborativa baseada na web, que permite a criação de protótipos interativos e design de interfaces de forma colaborativa.",
  },
  {
    name: "Git",
    img: gitLogo,
    category: "Ferramentas",
    description:
      "Sistema de controle de versão distribuído, usado para registrar o histórico do código, trabalhar com branches e colaborar em equipe.",
  },
  {
    name: "Jest",
    img: jestLogo,
    category: "Ferramentas",
    description:
      "Framework de testes para JavaScript, projetado para garantir a qualidade do código com funcionalidades como mocks, testes assíncronos e cobertura de código.",
  },
  {
    name: "Python",
    img: pythonLogo,
    category: "Back-end",
    description:
      "Linguagem de programação de alto nível, conhecida por sua simplicidade e legibilidade, amplamente utilizada em desenvolvimento web, ciência de dados e automação.",
  },
  {
    name: "SQL",
    img: sqlLogo,
    category: "Back-end",
    description:
      "Linguagem de consulta estruturada utilizada para gerenciar e manipular dados em bancos de dados relacionais, permitindo operações como consultas, inserções e atualizações.",
  },
  {
    name: "Bootstrap",
    img: bootstrapLogo,
    category: "Estilização",
    description:
      "Framework de CSS e JavaScript que oferece componentes e utilitários prontos para criar interfaces responsivas e modernas rapidamente.",
  },
  {
    name: "Redux",
    img: reduxLogo,
    category: "Front-end",
    description:
      "Biblioteca para gerenciamento de estado global em aplicações JavaScript, frequentemente usada com React para gerenciar e centralizar o estado da aplicação.",
  },
];
