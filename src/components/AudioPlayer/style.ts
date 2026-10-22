import styled from "styled-components";

//prettier-ignore
export const AudioPlayerContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas:
    "toggle info equalizer"
    "progress progress progress";
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 420px;
  padding: 20px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.bgSecondary};
  box-shadow: ${({ theme }) => theme.shadows.light.boxShadow};
  transition: box-shadow 0.4s ease;

  &.is-playing {
    box-shadow: ${({ theme }) => theme.shadows.strong.boxShadow};
  }

  .player-toggle {
    grid-area: toggle;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    color: ${({ theme }) => theme.whiteColor};
    background-image: linear-gradient(${({ theme }) => theme.linearGradient});
    transition: transform 0.2s ease, box-shadow 0.3s ease;

    /* anel que pulsa enquanto toca */
    &::after {
      content: "";
      position: absolute;
      inset: -6px;
      border-radius: 50%;
      box-shadow: inset 0 0 0 2px rgba(1, 166, 107, 0.6);
      opacity: 0;
    }

    &:hover {
      transform: scale(1.05);
      box-shadow: ${({ theme }) => theme.shadows.strong.boxShadow};
    }

    &:active {
      transform: scale(0.95);
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.secondaryColor};
      outline-offset: 4px;
    }

    /* o triângulo do play parece descentralizado sem esse ajuste */
    .icon-play {
      margin-left: 3px;
    }
  }

  &.is-playing .player-toggle::after {
    animation: player-ring 1.8s ease-out infinite;
  }

  .player-info {
    grid-area: info;
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;

    strong {
      overflow: hidden;
      font-weight: 600;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    span {
      font-size: 13px;
      color: ${({ theme }) => theme.grayColor};
    }
  }

  .player-equalizer {
    grid-area: equalizer;
    display: flex;
    align-items: flex-end;
    gap: 3px;
    height: 24px;

    span {
      width: 4px;
      height: 30%;
      border-radius: 2px;
      opacity: 0.4;
      background-color: ${({ theme }) => theme.secondaryColor};
      transition: opacity 0.3s ease;
    }
  }

  &.is-playing .player-equalizer span {
    opacity: 1;
    animation: player-equalizer 1s ease-in-out infinite;

    &:nth-child(2) {
      animation-delay: -0.4s;
    }

    &:nth-child(3) {
      animation-delay: -0.7s;
    }

    &:nth-child(4) {
      animation-delay: -0.2s;
    }
  }

  .player-progress {
    grid-area: progress;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: ${({ theme }) => theme.grayColor};

    input[type="range"] {
      flex: 1;
      height: 4px;
      margin: 0;
      border-radius: 2px;
      cursor: pointer;
      -webkit-appearance: none;
      appearance: none;
      background: linear-gradient(to right, ${({ theme }) => theme.secondaryColor} var(--progress), rgba(249, 249, 249, 0.12) var(--progress));

      &::-webkit-slider-thumb {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        -webkit-appearance: none;
        appearance: none;
        background-color: ${({ theme }) => theme.whiteColor};
        box-shadow: 0 0 0 3px rgba(1, 166, 107, 0.4);
      }

      &::-moz-range-thumb {
        width: 12px;
        height: 12px;
        border: none;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.whiteColor};
        box-shadow: 0 0 0 3px rgba(1, 166, 107, 0.4);
      }

      &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.secondaryColor};
        outline-offset: 6px;
      }
    }
  }

  @keyframes player-ring {
    0% {
      opacity: 0.8;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1.35);
    }
  }

  @keyframes player-equalizer {
    0%,
    100% {
      height: 25%;
    }
    50% {
      height: 100%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &.is-playing .player-toggle::after,
    &.is-playing .player-equalizer span {
      animation: none;
    }

    &.is-playing .player-equalizer span {
      height: 70%;
    }
  }
`;
