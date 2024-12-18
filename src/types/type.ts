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

export type SkillDataProps = {
  name: string;
  img: string;
  description: string;
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
  mobileImage: string;
  name: string;
  description: string;
  stack: string;
  repoLink: string;
  demoLink?: string;
  figmaLink?: string;
  underConstruction?: boolean;
  isRelevant: boolean;
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
