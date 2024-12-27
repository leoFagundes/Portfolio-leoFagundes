import styled from "styled-components";
import { H1, H2 } from "src/styled/typography";

export const HeroContainer = styled.section<{ isMoonClickable: boolean }>`
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

    .name-letters {
      display: flex;
      user-select: none;
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
          opacity: 0;
          animation: shadeIn 1.4s ease-in-out 2.4s forwards;
        }
        &.box-2 {
          opacity: 0;

          animation: shadeIn 1.2s ease-in-out 2.2s forwards;
        }
        &.box-3 {
          opacity: 0;

          animation: shadeIn 1s ease-in-out 2s forwards;
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

  #logo,
  #bg-logo,
  #logo-svg,
  svg {
    overflow: visible;
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
        cursor: ${(props) => (props.isMoonClickable ? "pointer" : "default")};
        filter: ${(props) =>
          props.isMoonClickable &&
          "drop-shadow(0 5px 10px rgba(1, 166, 107, 1))"};
      }
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
      stroke-width: 4;
      opacity: 0.8;
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
      stroke-dasharray: 100 0;
      stroke-dashoffset: 20;
      stroke-width: 4;
      opacity: 1;
    }
  }

  @keyframes shadeIn {
    0% {
      opacity: 0;
      transform: translateX(-100px);
      filter: blur(5px);
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

export const StyledH1Letter = styled(H1)<{ index: number; total: number }>`
  opacity: 0;
  animation: shadeIn 0.8s ease-in-out forwards;
  animation-delay: ${({ index, total }) => (total - index - 1) * 0.1}s;
`;

export const StyledH2Letter = styled(H2)<{
  index: number;
  total: number;
  h1Total: number;
}>`
  opacity: 0;
  animation: shadeIn 0.8s ease-in-out forwards;
  animation-delay: ${({ index, total, h1Total }) =>
    h1Total * 0.08 + (total - index - 1) * 0.1}s; // Atraso baseado no H1
`;
