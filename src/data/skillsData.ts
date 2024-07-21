import bootstrapLogo from "src/assets/svg/skills/bootstrap-logo.svg";
import cssLogo from "src/assets/svg/skills/css-logo.svg";
import figmaLogo from "src/assets/svg/skills/figma-logo.svg";
import htmlLogo from "src/assets/svg/skills/html-logo.svg";
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
import { SkillDataProps } from "src/types/type";

export const skillsData: SkillDataProps[] = [
  {
    name: "React",
    img: reactLogo,
    description:
      "Biblioteca JavaScript para construir interfaces de usuário, focada na criação de componentes reutilizáveis e na eficiência da atualização da interface.",
  },
  {
    name: "Javascript",
    img: javascriptLogo,
    description:
      "Linguagem de programação popular para desenvolvimento web, conhecida por sua flexibilidade e uso no lado do cliente e do servidor.",
  },
  {
    name: "Typescript",
    img: typescriptLogo,
    description:
      "Superset de JavaScript que adiciona tipagem estática opcional e outras funcionalidades, melhorando a robustez e a manutenção do código.",
  },
  {
    name: "Next.js",
    img: nextLogo,
    description:
      "Framework React para construção de aplicações web, oferecendo renderização do lado do servidor, geração de sites estáticos e roteamento automático.",
  },
  {
    name: "Python",
    img: pythonLogo,
    description:
      "Linguagem de programação de alto nível, conhecida por sua simplicidade e legibilidade, amplamente utilizada em desenvolvimento web, ciência de dados e automação.",
  },
  {
    name: "Html & Css",
    img: htmlCssLogo,
    description:
      "HTML (HyperText Markup Language) é a linguagem de marcação para estruturar conteúdo na web, enquanto CSS (Cascading Style Sheets) é usado para estilizar e layoutizar essas páginas.",
  },
  {
    name: "Styled Components",
    img: styledComponentsLogo,
    description:
      "Biblioteca para estilização de componentes em aplicações React, utilizando uma abordagem de CSS-in-JS que permite criar estilos encapsulados e reutilizáveis.",
  },
  {
    name: "Sass",
    img: sassLogo,
    description:
      "Pré-processador CSS que adiciona funcionalidades como variáveis, aninhamento e mixins ao CSS, tornando a escrita de estilos mais eficiente e organizada.",
  },
  {
    name: "Tailwind",
    img: tailwindLogo,
    description:
      "Framework de CSS utilitário que fornece classes pré-definidas para construir interfaces de usuário de forma rápida e personalizada.",
  },
  {
    name: "Bootstrap",
    img: bootstrapLogo,
    description:
      "Framework de CSS e JavaScript que oferece componentes e utilitários prontos para criar interfaces responsivas e modernas rapidamente.",
  },
  {
    name: "Jest",
    img: jestLogo,
    description:
      "Framework de testes para JavaScript, projetado para garantir a qualidade do código com funcionalidades como mocks, testes assíncronos e cobertura de código.",
  },
  {
    name: "Redux",
    img: reduxLogo,
    description:
      "Biblioteca para gerenciamento de estado global em aplicações JavaScript, frequentemente usada com React para gerenciar e centralizar o estado da aplicação.",
  },
  {
    name: "Node.js",
    img: nodeLogo,
    description:
      "Ambiente de execução para JavaScript no lado do servidor, permitindo a construção de aplicações web escaláveis e de alto desempenho.",
  },
  {
    name: "Figma",
    img: figmaLogo,
    description:
      "Ferramenta de design de interface colaborativa baseada na web, que permite a criação de protótipos interativos e design de interfaces de forma colaborativa.",
  },
  {
    name: "SQL",
    img: sqlLogo,
    description:
      "Linguagem de consulta estruturada utilizada para gerenciar e manipular dados em bancos de dados relacionais, permitindo operações como consultas, inserções e atualizações.",
  },
];
