import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  position: relative;

  h2 {
    color: ${({ theme }) => theme.secondaryColor};
    text-shadow: ${({ theme }) => theme.shadows.text.textShadow};
  }

  .apresentation-box {
    z-index: 2;
  }

  .social-media {
    display: flex;
    gap: 12px;
    margin-top: 16px;

    .social-media-box {
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: ${({ theme }) => theme.bgSecondary};
      border-radius: 10px;
      padding: 8px;
      box-shadow: ${({ theme }) => theme.shadows.sideWhite.boxShadow};

      transition: all 0.5s ease;

      &:hover {
        color: ${({ theme }) => theme.secondaryColor};
        box-shadow: ${({ theme }) => theme.shadows.sideGreen.boxShadow};
      }
    }
  }

  .svg {
    position: absolute;
    width: 70%;
    min-width: 450px;
    right: -30px;
    transform: translateY(30px);
  }

  #small-elipse {
    stroke-width: 3;
    stroke-dasharray: 10 15;

    animation: spin-dashed 7s ease 0s forwards;
  }

  #medium-elipse {
    stroke-width: 3;
    stroke-dasharray: 100 0;

    animation: spin-line 10s ease 0s forwards;
  }

  #big-elipse {
    stroke-width: 3;
    stroke-dasharray: 10 15;

    animation: spin-dashed 8s ease 0s forwards;
  }

  #lf {
    opacity: 1;
    animation: fn-logo 10s ease 0s forwards;
  }

  .orbit {
    animation: orbit 6s ease 1s forwards;
    transform-origin: 50% 42%;
    opacity: 0;

    #moon-1,
    #moon-2 {
      &:hover {
        cursor: pointer;
        filter: drop-shadow(0 5px 10px rgba(1, 166, 107, 1));
      }
    }
  }

  @keyframes fn-logo {
    0% {
      fill-opacity: 0;
      stroke-dasharray: 1 1000;
      stroke-dashoffset: 0;
      stroke-width: 0;
      opacity: 1;
      filter: drop-shadow(0 0 0 rgba(1, 166, 107, 0.3))
        drop-shadow(0 0 0 rgba(0, 0, 0, 0.5));
    }
    70% {
      fill-opacity: 0;
      stroke-dasharray: 150 0;
      stroke-dashoffset: 0;
      stroke-width: 1;
      opacity: 1;
      filter: drop-shadow(0 0 10px rgba(1, 166, 107, 0.3))
        drop-shadow(0 4px 20px rgba(0, 0, 0, 0.5));
    }
    100% {
      fill-opacity: 1;
      stroke-dasharray: 150 0;
      stroke-dashoffset: 0;
      stroke-width: 0;
      opacity: 1;
      filter: drop-shadow(0 0 10px rgba(1, 166, 107, 0.3))
        drop-shadow(0 4px 20px rgba(0, 0, 0, 0.5));
    }
  }

  @keyframes orbit {
    0% {
      transform: rotate(0deg);
      opacity: 0;
    }
    80% {
      transform: rotate(-400deg);
      opacity: 1;
    }
    100% {
      transform: rotate(-360deg);
      opacity: 1;
    }
  }

  @keyframes spin-dashed {
    0% {
      stroke-dasharray: 1 1000;
      stroke-dashoffset: 0;
      stroke-width: 0;
      opacity: 1;
    }
    80% {
      stroke-dasharray: 10 20;
      stroke-dashoffset: 0;
      stroke-width: 3;
      opacity: 0.3;
    }
    100% {
      stroke-dasharray: 10 20;
      stroke-dashoffset: -200;
      stroke-width: 3;
      opacity: 0.3;
    }
  }

  @keyframes spin-line {
    0% {
      stroke-dasharray: 1 1;
      stroke-dashoffset: 0;
      stroke-width: 0;
      opacity: 0;
    }
    70% {
      stroke-dasharray: 100 100;
      stroke-dashoffset: 0;
      stroke-width: 3;
      opacity: 1;
    }
    100% {
      stroke-dasharray: 100 1;
      stroke-dashoffset: 20;
      stroke-width: 3;
      opacity: 1;
    }
  }
`;
