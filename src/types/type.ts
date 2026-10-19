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
  // tags do "stack" dos projetos que contam como uso da habilidade
  // ("Figma" e "Git" vêm dos links de Figma e de repositório)
  matches: string[];
};

export type CertificateProps = {
  name: string;
  institute: string;
  duration: string;
  conclusion: string;
  link: string;
};

export type ProjectDataProps = {
  image: string;
  mobileImage?: string;
  name: string;
  description: string;
  stack: string[];
  repoLink: string;
  demoLink?: string;
  externalLink?: string;
  figmaLink?: string;
  underConstruction?: boolean;
  isRelevant: boolean;
};

export type CareerRole = {
  title: string;
  period: string;
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
