import { ThemeType } from "src/types/type";

const theme: ThemeType = {
  primaryColor: "#056945",
  secondaryColor: "#01A66B",
  bgPrimary: "#0F0F0F",
  bgSecondary: "#0B0B0B",
  whiteColor: "#F9F9F9",
  grayColor: "#969597",
  errorColor: "#a74113",
  linearGradient:
    "140deg, #056945 -5.89%, #01A66B 34.61%, #01A66B 57.76%, #056945 109%",
  borderRadius: "10px",
  breakpoints: {
    large: "960px",
    medium: "720px",
    small: "576px",
    nav: "1040px",
  },
  typography: {
    h1: {
      fontSize: "48px",
      fontWeight: 600,
      lineHeight: "110%",
    },
    h2: {
      fontSize: "36px",
      fontWeight: 500,
      lineHeight: "110%",
    },
    h3: {
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "110%",
    },
    p1: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "140%",
    },
    p2: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "150%",
    },
    p3: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "150%",
    },
  },
  shadows: {
    light: {
      boxShadow: "0px 0px 4px 1px rgba(1, 166, 107, 0.6)",
    },
    strong: {
      boxShadow: "0px 0px 6px 2px rgba(1, 166, 107, 0.85)",
    },
    gray: {
      boxShadow: "0px 0px 4px 1px rgba(150, 149, 151, 0.5)",
    },
    sideWhite: {
      boxShadow: "1px 1px 2px rgba(249, 249, 249, 0.6)",
    },
    sideGreen: {
      boxShadow: "1px 1px 2px rgba(1, 166, 107, 0.6)",
    },
    text: {
      textShadow: "0px 0px 8px rgba(1, 166, 107, 0.8)",
    },
  },
};

export default theme;
