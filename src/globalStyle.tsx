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
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.bgSecondary};
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.primaryColor}; 
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.grayColor};
    }
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
