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

input::placeholder, textarea::placeholder {
  font-family: "Saira", sans-serif;
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


@keyframes HoverLineAnimation {
    0% {
      width: 0%;
      opacity: 0;
    }
    30% {
      width: 10%;
      opacity: 1;
    }
    100% {
      width: 100%;
      opacity: 1;
    }
  }

@keyframes UnhoverLineAnimation {
  0% {
    width: 100%;
    opacity: 1;
  }
  90% {
    left: 100%;
    right: 0;
    width: 0;
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
`;

export default GlobalStyle;
