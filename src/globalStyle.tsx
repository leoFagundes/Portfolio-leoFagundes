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

.shake {
  animation: shake-top 3s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}

.jello {
  animation: jello-horizontal 4s both;
}

.scale-out-top {
	animation: scale-out-top 4s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}

.roll-out-left {
	animation: roll-out-left 4s ease-in both;
}

.roll-out-right {
	animation: roll-out-right 4s ease-in both;
}

.roll-out-top {
	animation: roll-out-top 4s ease-in both;
}

@keyframes roll-out-top {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: translateY(-800px) rotate(-540deg);
    opacity: 0;
  }
  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
}


@keyframes roll-out-right {
  0% {
    transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: translateX(1000px) rotate(540deg);
    opacity: 0;
  }
  100% {
    transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
}


@keyframes roll-out-left {
  0% {
    transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: translateX(-1000px) rotate(-540deg);
    opacity: 0;
  }
  100% {
    transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
}


@keyframes scale-out-top {
  0% {
    transform: scale(1);
    transform-origin: 50% 0%;
    opacity: 1;
  }
  70% {
    transform: scale(0.1);
    transform-origin: 50% 0%;
    opacity: 1;
  }
  100% {
    transform: scale(1);
    transform-origin: 50% 0%;
    opacity: 1;
  }
}

@keyframes shake-top {
  0%,
  100% {
    transform: translateX(0%);
    transform-origin: 50% 50%;
  }
  15% {
    transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    transform: translateX(15px) rotate(6deg);
  }
  45% {
    transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    transform: translateX(-6px) rotate(-1.2deg);
  }
}


@keyframes jello-horizontal {
  0% {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
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
