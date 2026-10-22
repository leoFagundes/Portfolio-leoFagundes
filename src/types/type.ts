type Typography = {
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
};

type BoxShadow = {
  boxShadow: string;
};

type TextShadow = {
  textShadow: string;
};

export type SkillCategory =
  | "Front-end"
  | "Estilização"
  | "Back-end"
  | "Ferramentas";

export type SkillDataProps = {
  name: string;
  img: string;
  description: string;
  category: SkillCategory;
};

export type CertificateProps = {
  name: string;
  institute: string;
  duration?: string;
  // ano de conclusão (ou o ano atual, se ainda estiver em andamento)
  conclusion: string;
  // PDF em public/; cursos em andamento podem ainda não ter certificado
  link?: string;
  // aparece no filtro "Relevantes" (o padrão da seção)
  isRelevant?: boolean;
  inProgress?: boolean;
};

// conteúdo mostrado no card: o projeto inteiro ou uma das suas aplicações
export type ProjectContent = {
  description: string;
  // telas do projeto: a primeira aparece no card e as outras na galeria
  // ao ampliar. Sem nenhuma, o card mostra "Print em breve"
  images?: string[];
  stack: string[];
  repoLink?: string;
  // repositório privado: mostra "Código privado" no lugar do link
  isPrivateRepo?: boolean;
  demoLink?: string;
  externalLink?: string;
  figmaLink?: string;
};

export type ProjectApp = ProjectContent & {
  // nome da aba no card, ex.: "Pedidos"
  name: string;
};

export type ProjectPreviousVersion = {
  label: string;
  description: string;
  stack: string[];
  links: { label: string; url: string }[];
};

type ProjectBase = {
  name: string;
  isRelevant: boolean;
  underConstruction?: boolean;
  previousVersion?: ProjectPreviousVersion;
};

// projeto com uma aplicação só, ou com várias (o card ganha abas)
export type ProjectDataProps =
  | (ProjectBase & ProjectContent & { apps?: undefined })
  | (ProjectBase & { apps: ProjectApp[] });

export type CareerRole = {
  title: string;
  period: string;
  description?: string;
};

export type CareerItemProps = {
  // empresa, cliente ou instituição de ensino
  organization: string;
  type: "job" | "freelance" | "education";
  // cargos/cursos do mais recente para o mais antigo
  roles: CareerRole[];
  description?: string;
  highlights?: string[];
  stack?: string[];
  current?: boolean;
  // nome do projeto em projectsData para o link "Ver projeto"
  projectName?: string;
  link?: string;
  // PDF (em public/) aberto no modal, ex.: diploma ou certificado
  file?: {
    label: string;
    link: string;
  };
};

export type ThemeType = {
  primaryColor: string;
  secondaryColor: string;
  bgPrimary: string;
  bgSecondary: string;
  whiteColor: string;
  grayColor: string;
  errorColor: string;
  linearGradient: string;
  borderRadius: string;
  breakpoints: {
    large: string;
    medium: string;
    small: string;
    nav: string;
  };
  typography: {
    h1: Typography;
    h2: Typography;
    h3: Typography;
    p1: Typography;
    p2: Typography;
    p3: Typography;
  };
  shadows: {
    light: BoxShadow;
    strong: BoxShadow;
    gray: BoxShadow;
    sideWhite: BoxShadow;
    sideGreen: BoxShadow;
    error: BoxShadow;
    text: TextShadow;
  };
};
