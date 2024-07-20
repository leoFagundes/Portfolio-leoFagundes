import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;

    &::selection {
    color: ${({ theme }) => theme.whiteColor};
    background-color: rgba(1, 166, 108, 0.5);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  }
}

body {
    font-family: "Saira", sans-serif;
    width: 100%;

    background-color: ${({ theme }) => theme.bgPrimary};
    color: ${({ theme }) => theme.whiteColor};
}

html {
  scroll-behavior: smooth;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: ${({ theme }) => theme.whiteColor};
}
`;

export default GlobalStyle;
