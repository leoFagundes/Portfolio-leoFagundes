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
    min-width: 440px;
    z-index: 2;

    h1 {
      animation: shadeIn 1s ease-in-out 0s forwards;
    }
    h2 {
      animation: shadeIn 1.4s ease-in-out 0s forwards;
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

        &.box-1 {
          animation: shadeIn 2.3s ease-in-out 0s forwards;
        }
        &.box-2 {
          animation: shadeIn 2s ease-in-out 0s forwards;
        }
        &.box-3 {
          animation: shadeIn 1.7s ease-in-out 0s forwards;
        }
      }

      @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
        margin-top: 12px;

        .social-media-box {
          height: 40px;
          width: 40px;
        }
      }
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
      min-width: 350px;
    }
  }

  #line1 {
    opacity: 0;
    width: 2px;
    height: 200px;
    background-image: linear-gradient(
      180deg,
      rgba(5, 105, 69, 0),
      rgb(1, 166, 107)
    );
    border-radius: 10px;

    &.move {
      animation: line-move-v-1 4s ease;
    }
  }

  #line2 {
    opacity: 0;
    width: 2px;
    height: 150px;
    background-image: linear-gradient(
      180deg,
      rgba(5, 105, 69, 0),
      rgb(1, 166, 107)
    );
    border-radius: 10px;

    &.move {
      animation: line-move-v-2 4s ease-in-out 1s;
    }
  }

  #line3 {
    opacity: 0;
    width: 180px;
    height: 3px;
    background-image: linear-gradient(
      270deg,
      rgba(5, 105, 69, 0),
      rgb(1, 166, 107)
    );
    border-radius: 10px;

    &.move {
      animation: line-move-h 4s ease 0.5s;
    }
  }

  @keyframes line-move-v-1 {
    from {
      transform: translateY(-100vh) translateX(-200px);
      opacity: 0;
    }
    to {
      transform: translateY(100vh) translateX(-200px);
      opacity: 1;
    }
  }

  @keyframes line-move-h {
    from {
      transform: translateX(100vw) translateY(100px);
      opacity: 0;
    }
    to {
      transform: translateX(-100vw) translateY(100px);
      opacity: 1;
    }
  }

  @keyframes line-move-v-2 {
    from {
      transform: translateY(-100vh) translateX(200px);
      opacity: 0;
    }
    to {
      transform: translateY(100vh) translateX(200px);
      opacity: 1;
    }
  }

  .svg {
    position: absolute;
    width: 70%;
    min-width: 450px;
    max-width: 650px;
    right: -30px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}) {
      display: none;
    }
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
    transform-origin: 50% 50%;
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
      filter: drop-shadow(0 0 0 rgba(1, 166, 107, 0.3));
    }
    70% {
      fill-opacity: 0;
      stroke-dasharray: 150 0;
      stroke-dashoffset: 0;
      stroke-width: 1;
      opacity: 1;
      filter: drop-shadow(0 0 10px rgba(1, 166, 107, 0.3));
    }
    100% {
      fill-opacity: 1;
      stroke-dasharray: 150 0;
      stroke-dashoffset: 0;
      stroke-width: 0;
      opacity: 1;
      filter: drop-shadow(0 0 10px rgba(1, 166, 107, 0.3));
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

  @keyframes shadeIn {
    0% {
      opacity: 0;
      transform: translateX(-100px);
      filter: blur(5px);
    }
    70% {
      opacity: 1;
      transform: translateX(10px);
      filter: blur(0);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
      filter: blur(0);
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}) {
    justify-content: center;
  }
`;
