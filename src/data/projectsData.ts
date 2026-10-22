import { ProjectDataProps } from "src/types/type";

// cada projeto tem a sua pasta de telas. Em `images`, a primeira é a capa do
// card e a ordem do array é a ordem da galeria

// Portfólio
import portfolioMain from "src/assets/image/projects/portfolio/portfolio-main.png";

// Carcassonne
import carcassonneMain from "src/assets/image/projects/carcassonne/carcassonne-main.png";
import carcassonneReservas from "src/assets/image/projects/carcassonne/reservas_borrada.png";
import carcassonneAcervo from "src/assets/image/projects/carcassonne/acervo.png";
import carcassonneCardapio from "src/assets/image/projects/carcassonne/cardapio.png";
import carcassonneMusic from "src/assets/image/projects/carcassonne/music.png";
import carcassonneEstatisticas from "src/assets/image/projects/carcassonne/estatisticas.png";
import carcassonneTemas from "src/assets/image/projects/carcassonne/temas.png";
import carcassonneLinks from "src/assets/image/projects/carcassonne/links.png";
import carcassonneCardapioCliente from "src/assets/image/projects/carcassonne/cardapio-cliente.png";
import carcassonneItem from "src/assets/image/projects/carcassonne/item.png";

// Alfredos
import alfredosMain from "src/assets/image/projects/alfredos/main.png";
import alfredosPedidos from "src/assets/image/projects/alfredos/pedidos_borrada.png";
import alfredosProdutos from "src/assets/image/projects/alfredos/produtos.png";
import alfredosLogs from "src/assets/image/projects/alfredos/logs_borrada.png";
import alfredosCardapio from "src/assets/image/projects/alfredos/cardapio.png";
import alfredosCardapioMenu from "src/assets/image/projects/alfredos/cardapio-menu.png";
import alfredosItem from "src/assets/image/projects/alfredos/item.png";
import alfredosCarrinho from "src/assets/image/projects/alfredos/carrinho.png";

// Herbalife
import herbalifeMain from "src/assets/image/projects/herbalife/herbalife-main.png";
import herbalifeSobre from "src/assets/image/projects/herbalife/herbalife-sobre.png";
import herbalifeProdutos from "src/assets/image/projects/herbalife/herbalife-produtos.png";
import herbalifeLogin from "src/assets/image/projects/herbalife/herbalife-login.png";

// Cine Drive-in · Site
import cineSiteMain from "src/assets/image/projects/cinedrivein/site/main.png";
import cineSitePrecos from "src/assets/image/projects/cinedrivein/site/precos.png";
import cineSiteDuvidas from "src/assets/image/projects/cinedrivein/site/duvidas.png";
import cineSiteAnunciante from "src/assets/image/projects/cinedrivein/site/anunciante.png";
import cineSiteAvaliacao from "src/assets/image/projects/cinedrivein/site/avaliacao.png";

// Cine Drive-in · Pedidos
import cinePedidosMain from "src/assets/image/projects/cinedrivein/pedidos/cardapio-main.png";
import cinePedidosHome from "src/assets/image/projects/cinedrivein/pedidos/home.png";
import cinePedidosLocalizacao from "src/assets/image/projects/cinedrivein/pedidos/localizacao.png";
import cinePedidosItem from "src/assets/image/projects/cinedrivein/pedidos/item.png";
import cinePedidosCarrinho from "src/assets/image/projects/cinedrivein/pedidos/carrinho.png";

// Cine Drive-in · Admin
import cineAdminMain from "src/assets/image/projects/cinedrivein/admin/main.png";
import cineAdminLogin from "src/assets/image/projects/cinedrivein/admin/login.png";
import cineAdminDashboard from "src/assets/image/projects/cinedrivein/admin/dashboard.png";
import cineAdminEstatisticas from "src/assets/image/projects/cinedrivein/admin/estatisticas.png";
import cineAdminPedidos from "src/assets/image/projects/cinedrivein/admin/pedidos.png";
import cineAdminEstoque from "src/assets/image/projects/cinedrivein/admin/estoque.png";
import cineAdminLogs from "src/assets/image/projects/cinedrivein/admin/logs.png";
import cineAdminConfigs from "src/assets/image/projects/cinedrivein/admin/configs.png";
import cineAdminAvaliacoes from "src/assets/image/projects/cinedrivein/admin/avaliacoes.png";
import cineAdminEstatisticasSite from "src/assets/image/projects/cinedrivein/admin/estatisticas-site.png";
import cineAdminAjuda from "src/assets/image/projects/cinedrivein/admin/ajuda.png";
import cineAdminVersionamento from "src/assets/image/projects/cinedrivein/admin/versionamento.png";
import cineAdminPerfil from "src/assets/image/projects/cinedrivein/admin/perfil.png";

// projetos com uma tela só
import effycityMain from "src/assets/image/projects/effycity/effycity-main.png";
import myBooksMain from "src/assets/image/projects/mybooks/mybooks-main.png";
import blackJackMain from "src/assets/image/projects/blackjack/blackjack-main.png";
import comunidadeProgramacaoMain from "src/assets/image/projects/comunidade-programacao/comunidade-programacao-main.png";
import weatherForecastMain from "src/assets/image/projects/weather-forecast/weather-forecast-main.png";
import imikinoMain from "src/assets/image/projects/imikino/imikino-main.png";
import codeLibraryMain from "src/assets/image/projects/code-library/code-library-main.png";

export const projectsDataJSON: ProjectDataProps[] = [
  {
    images: [portfolioMain],
    name: "Portfólio - LeoFagundes",
    description:
      "Esse é meu portfólio pessoal que criei para falar um pouco mais sobre mim e apresentar meus projetos, certificados e habilidades através de uma interface agradável!",
    stack: ["React.js", "TypeScript", "Styled-Components"],
    repoLink: "https://github.com/leoFagundes/Portfolio-leoFagundes",
    demoLink: "https://leofagundes.dev.br/",
    figmaLink:
      "https://www.figma.com/design/1fCsklI9Qg4WMEyEn4c2pO/Portf%C3%B3lio-3.0?node-id=0-1&t=LihCXgBqF5bw7fBc-1",
    isRelevant: true,
  },
  {
    images: [
      carcassonneMain,
      carcassonneReservas,
      carcassonneAcervo,
      carcassonneCardapio,
      carcassonneMusic,
      carcassonneEstatisticas,
      carcassonneTemas,
      carcassonneLinks,
      carcassonneCardapioCliente,
      carcassonneItem,
    ],
    name: "Carcassonne - Aplicação Web",
    description:
      "Sistema desenvolvido para o Carcassonne Pub, com cardápio digital, acervo de jogos de tabuleiro e área administrativa completa.",
    stack: ["Next.js", "Tailwind", "TypeScript", "Firebase"],
    repoLink: "https://github.com/leoFagundes/Carcassonne-Admin",
    demoLink: "https://www.carcassonnepub.com.br/clientMenu",
    isRelevant: true,
  },
  {
    images: [
      alfredosMain,
      alfredosPedidos,
      alfredosProdutos,
      alfredosLogs,
      alfredosCardapio,
      alfredosCardapioMenu,
      alfredosItem,
      alfredosCarrinho,
    ],
    name: "Alfredos Pizzaria",
    description:
      "Sistema de pedidos online da pizzaria, com cardápio por loja, pizza meio a meio, pagamento via Pix com Mercado Pago e painel administrativo de pedidos, estoque, lojas e usuários.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Firebase", "Mercado Pago"],
    isPrivateRepo: true,
    demoLink: "https://alfredos.vercel.app/",
    isRelevant: true,
  },
  {
    images: [herbalifeMain, herbalifeSobre, herbalifeProdutos, herbalifeLogin],
    name: "Herbalife - Negócio Pessoal",
    description:
      "Site para o meu negócio pessoal na Herbalife, permite que cada usuário crie seu próprio perfil. Cada conta possui uma página personalizada de vendas, com seus prórprios contatos pessoais integrados!",
    stack: ["Next.js", "Tailwind", "TypeScript", "Firebase"],
    repoLink: "https://github.com/leoFagundes/Herbalife-App",
    demoLink: "https://hbl-nutrition.vercel.app/Leonardo%20Fagundes/intro",
    figmaLink:
      "https://www.figma.com/design/Y6qf7rqOztNC9kReUBdah9/Herbalife?node-id=10-6&t=vxn96CblUH5DmUAX-1",
    isRelevant: true,
  },
  {
    name: "Cine Drive-in",
    isRelevant: true,
    apps: [
      {
        name: "Site",
        description:
          "Site oficial do Cine Drive-in de Brasília, com a programação de filmes, preços, o cardápio da lanchonete e a história do cinema.",
        images: [
          cineSiteMain,
          cineSitePrecos,
          cineSiteDuvidas,
          cineSiteAnunciante,
          cineSiteAvaliacao,
        ],
        stack: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
        repoLink: "https://github.com/leoFagundes/cine-drivein-site",
        demoLink: "https://cinedrivein.com/",
        figmaLink:
          "https://www.figma.com/design/Ncvt08SckbhsoT7WICYOqT/Cine-Drive-in-Design?node-id=513-19&t=RR8lyJ2Kc6cA9pHZ-1",
      },
      {
        name: "Pedidos",
        description:
          "App mobile-first em que o cliente faz pedidos da lanchonete pelo celular durante a sessão, acompanha o andamento e fala com a equipe.",
        images: [
          cinePedidosMain,
          cinePedidosHome,
          cinePedidosLocalizacao,
          cinePedidosItem,
          cinePedidosCarrinho,
        ],
        stack: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
        isPrivateRepo: true,
      },
      {
        name: "Admin",
        description:
          "Painel da equipe para gerenciar pedidos, estoque, usuários e o conteúdo do site, com dashboard de vendas, logs e impressão dos pedidos. Acesso restrito.",
        images: [
          cineAdminMain,
          cineAdminLogin,
          cineAdminDashboard,
          cineAdminEstatisticas,
          cineAdminPedidos,
          cineAdminEstoque,
          cineAdminLogs,
          cineAdminConfigs,
          cineAdminAvaliacoes,
          cineAdminEstatisticasSite,
          cineAdminAjuda,
          cineAdminVersionamento,
          cineAdminPerfil,
        ],
        stack: ["Next.js", "TypeScript", "Tailwind", "Firebase", "Recharts"],
        repoLink: "https://github.com/leoFagundes/cinedrivein-admin-v2",
      },
    ],
    previousVersion: {
      label: "Versão anterior (2024)",
      description:
        "Lanchonete em React com Sass e Jest, e API própria em Node.js, Express e MongoDB.",
      stack: [
        "React.js",
        "Sass",
        "TypeScript",
        "Jest",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      links: [
        {
          label: "Front-end",
          url: "https://github.com/leoFagundes?tab=repositories&q=cine-drive-in+AND+NOT+%22backend%22&type=&language=&sort=",
        },
        {
          label: "API",
          url: "https://github.com/leoFagundes/cine-drivein-backend",
        },
      ],
    },
  },
  {
    images: [effycityMain],
    name: "Effycity",
    description:
      "Projeto final da faculdade, um aplicativo mobile com o tema de cidades inteligente onde Gestores com necessidades e Empresas com projetos conseguem se encontrar. ",
    stack: ["React Native", "Android Studio", "Next.js", "Tailwind"],
    repoLink:
      "https://github.com/leoFagundes?tab=repositories&q=effycity&type=&language=&sort=",
    externalLink:
      "https://docs.google.com/document/d/15qyAmYvshe0-fZrRQPgWawzxKsOai84LXrDPei9lB2o/edit?usp=sharing",
    figmaLink:
      "https://www.figma.com/design/LzC3mYXzNsv0estE8emeiF/Projeto-Integrador-IV?node-id=0-1&t=xyrv00toynovOVNX-1",
    isRelevant: true,
  },
  {
    images: [myBooksMain],
    name: "MyBooks",
    description:
      "Aplicação fullstack para que os usuários consigam ter sua própria coleção de livros em um só lugar de froma prática e minimalista.",
    stack: [
      "Next.js",
      "Tailwind",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    repoLink:
      "https://github.com/leoFagundes?tab=repositories&q=mybooks+AND+NOT+leo&type=&language=&sort=",
    demoLink: "https://mybooks-repo.vercel.app/",
    figmaLink:
      "https://www.figma.com/design/V2hiugqjTDX3Z6mo1sxLof/MyBooks?node-id=1-4&t=avP2MHjMuKyEMCtf-1",
    isRelevant: true,
  },
  {
    images: [blackJackMain],
    name: "Black Jack Web",
    description:
      "Jogo de baralho conhecido como 21 ou BlackJack, foi criado usando uma API pública para o controle do baralho e das cartas.",
    stack: ["Next.js", "Tailwind", "TypeScript"],
    repoLink: "https://github.com/leoFagundes/BlackJack-Web",
    demoLink: "https://black-jack-web.vercel.app/",
    figmaLink:
      "https://www.figma.com/design/Xsx9zO0C2LkGOOwYO2pjHj/BlackJack?node-id=68-42&t=mp6VrhPwUicgDd5c-1",
    isRelevant: false,
  },

  {
    images: [comunidadeProgramacaoMain],
    name: "Comunidade de Programação",
    description:
      "Site com sistema de login em que cada usuário pode postar/editar/excluir comentários e outros usuários podem adicionar respostas nesses comentários. Também é possível personalizar seu perfil.",
    stack: ["Python (Flask)", "HTML", "CSS", "Bootstrap", "SQL"],
    repoLink:
      "https://github.com/leoFagundes/AplicacaoWeb-ComunidadeProgramacao",
    isRelevant: false,
  },
  {
    images: [weatherForecastMain],
    name: "Weather Forecast",
    description:
      "Site de previsão de tempo usando a API pública OpenWeatherMap",
    stack: ["React.js", "TypeScript", "Tailwind"],
    repoLink: "https://github.com/leoFagundes/Weather-API",
    demoLink: "https://weather-api-leo.vercel.app/",
    isRelevant: false,
  },
  {
    images: [imikinoMain],
    name: "Imikino",
    description:
      "Site criado com o objetivo de avaliar jogos feito para o quinto semestre da faculdade. Possui sistema de login, ranking e avaliação",
    stack: ["Python (Flask)", "HTML", "CSS", "JavaScript", "Bootstrap", "SQL"],
    repoLink: "https://github.com/leoFagundes/AplicacaoWeb-Imikino",
    demoLink: "https://aplicacaoweb-imikino-production.up.railway.app/",
    isRelevant: false,
  },
  {
    images: [codeLibraryMain],
    name: "Code.Library",
    description:
      "Site criado com o objetivo de compartilhar tudo sobre programação como conhecimento, bibliotecas, extenções, links úteis e etc. Além disso você poderá escutar músicas Lofi enquanto navega!",
    stack: ["React.js", "TypeScript", "Styled-Components"],
    repoLink: "https://github.com/leoFagundes/code.library",
    demoLink: "https://code-library-dev.vercel.app",
    underConstruction: true,
    isRelevant: false,
  },
];
