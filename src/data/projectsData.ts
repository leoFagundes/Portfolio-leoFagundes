import { ProjectDataProps } from "src/types/type";

import blackJackWeb from "src/assets/image/projects/blackjack.png";
import cineDriveinSnack from "src/assets/image/projects/cine-drivein-snack.png";
import cineDriveinSite from "src/assets/image/projects/cine-drivein-site.png";
import cineDriveinBack from "src/assets/image/projects/cine-drivein-back.png";
import comunidadeProgramacao from "src/assets/image/projects/comunidade-programacao.png";
import imikino from "src/assets/image/projects/imikino.png";
import myBooks from "src/assets/image/projects/mybooks.png";
import portfolio from "src/assets/image/projects/portfólio.png";
import weatherForecast from "src/assets/image/projects/weather-forecast.png";
import codeLibrary from "src/assets/image/projects/code-library.png";
import herbalife from "src/assets/image/projects/herbalife.png";
import effycity from "src/assets/image/projects/effycity.png";

import blackJackWebMobile from "src/assets/image/projects/blackjack-mobile.png";
import cineDriveinSiteMobile from "src/assets/image/projects/cinedrivein-site-mobile.png";
import cineDriveinSnackMobile from "src/assets/image/projects/cinedrivein-snack-mobile.png";
import codeLibraryMobile from "src/assets/image/projects/codelibrary-mobile.png";
import myBooksMobile from "src/assets/image/projects/mybooks-mobile.png";
import portfolioMobile from "src/assets/image/projects/portfolio-mobile.png";
import weatherMobile from "src/assets/image/projects/weather-mobile.png";
import herbalifeMobile from "src/assets/image/projects/herbalife-mobile.png";
import effycityMobile from "src/assets/image/projects/effycity-mobile.png";

import noMobile from "src/assets/image/projects/nomobile.png";

export const projectsDataJSON: ProjectDataProps[] = [
  {
    image: portfolio,
    name: "Portfólio - LeoFagundes",
    description:
      "Esse é meu portfólio pessoal que criei para falar um pouco mais sobre mim e apresentar meus projetos, certificados e habilidades através de uma interface agradável!",
    stack: "React.js, TypeScript e Styled-Components",
    repoLink: "https://github.com/leoFagundes/Portfolio-leoFagundes",
    demoLink: "https://leofagundes.dev.br/",
    figmaLink:
      "https://www.figma.com/design/1fCsklI9Qg4WMEyEn4c2pO/Portf%C3%B3lio-3.0?node-id=0-1&t=LihCXgBqF5bw7fBc-1",
    isRelevant: true,
    mobileImage: portfolioMobile,
  },
  {
    image: herbalife,
    name: "Herbalife - Negócio Pessoal",
    description:
      "Site para o meu negócio pessoal na Herbalife, permite que cada usuário crie seu próprio perfil. Cada conta possui uma página personalizada de vendas, com seus prórprios contatos pessoais integrados!",
    stack: "Next.js, Tailwind, TypeScript e Firebase",
    repoLink: "https://github.com/leoFagundes/Herbalife-App",
    demoLink: "https://hbl-nutrition.vercel.app/Leonardo%20Fagundes/intro",
    figmaLink:
      "https://www.figma.com/design/Y6qf7rqOztNC9kReUBdah9/Herbalife?node-id=10-6&t=vxn96CblUH5DmUAX-1",
    isRelevant: true,
    mobileImage: herbalifeMobile,
  },
  {
    image: cineDriveinSite,
    name: "Cine Drive-in Site",
    description:
      "A aplicação Web, criada para o Cine Drive-in de Brasília, permite que os usuários visualizem todas as informações que necessitam como os filmes em cartaz, preços, a lanchonete, sua história e entre outros.",
    stack: "Next.js, Tailwind e TypeScript",
    repoLink: "https://github.com/leoFagundes/cine-drivein-site",
    demoLink: "https://cinedrivein.com/",
    figmaLink:
      "https://www.figma.com/design/Ncvt08SckbhsoT7WICYOqT/Cine-Drive-in-Design?node-id=513-19&t=RR8lyJ2Kc6cA9pHZ-1",
    isRelevant: true,
    mobileImage: cineDriveinSiteMobile,
  },
  {
    image: cineDriveinSnack,
    name: "Cine Drive-in Snack Bar",
    description:
      "Aplicação web desenvolvida para a lanchonete do Cine Drive-in, composta por duas interfaces front-end (cliente e administrador).",
    stack: "React.js, Sass, TypeScript e Jest",
    repoLink:
      "https://github.com/leoFagundes?tab=repositories&q=cine-drive-in+AND+NOT+%22backend%22&type=&language=&sort=",
    figmaLink:
      "https://www.figma.com/design/Ncvt08SckbhsoT7WICYOqT/Cine-Drive-in-Design?node-id=513-19&t=RR8lyJ2Kc6cA9pHZ-1",
    underConstruction: false,
    isRelevant: true,
    mobileImage: cineDriveinSnackMobile,
  },
  {
    image: cineDriveinBack,
    name: "Cine Drive-in API",
    description:
      "A API fornece a base para a gestão de filmes, pedidos da lanchonete, usuários, e relatórios administrativos. Além disso, permite operações de CRUD e autenticação criptografada para funcionários.",
    stack: "Node.js, Express e MongoDB",
    repoLink: "https://github.com/leoFagundes/cine-drivein-backend",
    underConstruction: false,
    isRelevant: true,
    mobileImage: noMobile,
  },
  {
    image: effycity,
    name: "Effycity",
    description:
      "Projeto final da faculdade, um aplicativo mobile com o tema de cidades inteligente onde Gestores com necessidades e Empresas com projetos conseguem se encontrar. ",
    stack:
      "React Native e Android Studio para o mobile, Next e Tailwind para a Web",
    repoLink:
      "https://github.com/leoFagundes?tab=repositories&q=effycity&type=&language=&sort=",
    externalLink:
      "https://docs.google.com/document/d/15qyAmYvshe0-fZrRQPgWawzxKsOai84LXrDPei9lB2o/edit?usp=sharing",
    figmaLink:
      "https://www.figma.com/design/LzC3mYXzNsv0estE8emeiF/Projeto-Integrador-IV?node-id=0-1&t=xyrv00toynovOVNX-1",
    isRelevant: true,
    mobileImage: effycityMobile,
  },
  {
    image: myBooks,
    name: "MyBooks",
    description:
      "Aplicação fullstack para que os usuários consigam ter sua própria coleção de livros em um só lugar de froma prática e minimalista.",
    stack: "Next.js, Tailwind, TypeScript, Node.js, Express e MongoDB",
    repoLink:
      "https://github.com/leoFagundes?tab=repositories&q=mybooks+AND+NOT+leo&type=&language=&sort=",
    demoLink: "https://mybooks-repo.vercel.app/",
    figmaLink:
      "https://www.figma.com/design/V2hiugqjTDX3Z6mo1sxLof/MyBooks?node-id=1-4&t=avP2MHjMuKyEMCtf-1",
    isRelevant: true,
    mobileImage: myBooksMobile,
  },
  {
    image: blackJackWeb,
    name: "Black Jack Web",
    description:
      "Jogo de baralho conhecido como 21 ou BlackJack, foi criado usando uma API pública para o controle do baralho e das cartas.",
    stack: "Next.js, Tailwind e TypeScript",
    repoLink: "https://github.com/leoFagundes/BlackJack-Web",
    demoLink: "https://black-jack-web.vercel.app/",
    figmaLink:
      "https://www.figma.com/design/Xsx9zO0C2LkGOOwYO2pjHj/BlackJack?node-id=68-42&t=mp6VrhPwUicgDd5c-1",
    isRelevant: true,
    mobileImage: blackJackWebMobile,
  },

  {
    image: comunidadeProgramacao,
    name: "Comunidade de Programação",
    description:
      "Site com sistema de login em que cada usuário pode postar/editar/excluir comentários e outros usuários podem adicionar respostas nesses comentários. Também é possível personalizar seu perfil.",
    stack: "Python (Flask), HTML, CSS, Bootstrap e SQL",
    repoLink:
      "https://github.com/leoFagundes/AplicacaoWeb-ComunidadeProgramacao",
    isRelevant: false,
    mobileImage: noMobile,
  },
  {
    image: weatherForecast,
    name: "Weather Forecast",
    description:
      "Site de previsão de tempo usando a API pública OpenWeatherMap",
    stack: "React.js, TypeScript e Tailwind",
    repoLink: "https://github.com/leoFagundes/Weather-API",
    demoLink: "https://weather-api-leo.vercel.app/",
    isRelevant: false,
    mobileImage: weatherMobile,
  },
  {
    image: imikino,
    name: "Imikino",
    description:
      "Site criado com o objetivo de avaliar jogos feito para o quinto semestre da faculdade. Possui sistema de login, ranking e avaliação",
    stack: "Python (Flask), HTML, CSS, JavaScript, Bootstrap e SQL",
    repoLink: "https://github.com/leoFagundes/AplicacaoWeb-Imikino",
    demoLink: "https://aplicacaoweb-imikino-production.up.railway.app/",
    isRelevant: false,
    mobileImage: noMobile,
  },
  {
    image: codeLibrary,
    name: "Code.Library",
    description:
      "Site criado com o objetivo de compartilhar tudo sobre programação como conhecimento, bibliotecas, extenções, links úteis e etc. Além disso você poderá escutar músicas Lofi enquanto navega!",
    stack: "React.js, TypeScript e Styled-Components",
    repoLink: "https://github.com/leoFagundes/code.library",
    demoLink: "https://code-library-dev.vercel.app",
    underConstruction: true,
    isRelevant: false,
    mobileImage: codeLibraryMobile,
  },
];
