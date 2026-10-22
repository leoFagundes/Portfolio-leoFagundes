import styled from "styled-components";

//prettier-ignore
export const EasterEggContainer = styled.main`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  min-height: 100dvh;
  padding: 32px 16px 48px;
  background:
    radial-gradient(circle at 50% 0%, rgba(1, 166, 107, 0.12), transparent 55%),
    ${({ theme }) => theme.bgPrimary};

  .easter-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
    width: 100%;
    max-width: 640px;
  }

  .easter-back {
    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: 6px;
    font-size: 14px;
    color: ${({ theme }) => theme.grayColor};
    transition: color 0.3s ease;

    &:hover,
    &:focus-visible {
      color: ${({ theme }) => theme.secondaryColor};
    }
  }

  .easter-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    text-align: center;
  }

  .easter-eyebrow {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.secondaryColor};
  }

  .easter-text {
    max-width: 520px;
    color: ${({ theme }) => theme.grayColor};
  }

  /* xícara de café animada */
  .coffee {
    width: 220px;
    max-width: 60vw;
    overflow: visible;
  }

  .coffee-saucer {
    fill: ${({ theme }) => theme.bgSecondary};
    stroke: rgba(1, 166, 107, 0.45);
    stroke-width: 2;
  }

  .coffee-mug {
    transform-box: fill-box;
    filter: drop-shadow(0 0 10px rgba(1, 166, 107, 0.2));
    transition: filter 0.6s ease;
    animation: coffee-float 4s ease-in-out infinite;
  }

  .coffee.is-playing .coffee-mug {
    filter: drop-shadow(0 0 18px rgba(1, 166, 107, 0.45));
  }

  .coffee-body {
    fill: ${({ theme }) => theme.bgSecondary};
    stroke: url(#coffee-mug-gradient);
    stroke-width: 3;
  }

  .coffee-handle {
    fill: none;
    stroke: url(#coffee-mug-gradient);
    stroke-width: 9;
    stroke-linecap: round;
  }

  .coffee-rim {
    fill: #141414;
    stroke: url(#coffee-mug-gradient);
    stroke-width: 3;
  }

  .coffee-liquid {
    fill: url(#coffee-liquid-gradient);
  }

  .coffee-shine {
    fill: rgba(255, 255, 255, 0.22);
    transform-box: fill-box;
    animation: coffee-shine 5s ease-in-out infinite alternate;
  }

  .coffee-logo {
    fill: url(#coffee-mug-gradient);
  }

  .coffee-steam {
    fill: none;
    stroke: rgba(249, 249, 249, 0.55);
    stroke-width: 4;
    stroke-linecap: round;
    opacity: 0;
    transform-box: fill-box;
    transform-origin: center bottom;
    animation: coffee-steam 3.6s ease-in-out infinite;

    &.steam-2 {
      animation-delay: 1.2s;
    }

    &.steam-3 {
      animation-delay: 2.4s;
    }
  }

  /* notinhas que só aparecem com a música tocando */
  .coffee-note {
    font-size: 18px;
    fill: ${({ theme }) => theme.secondaryColor};
    opacity: 0;
    transform-box: fill-box;
  }

  .coffee.is-playing .coffee-note {
    animation: coffee-note 3s ease-in-out infinite;

    &.note-2 {
      animation-delay: 1.5s;
    }
  }

  .easter-curiosity {
    max-width: 520px;
    text-align: center;

    span {
      display: block;
      margin-bottom: 8px;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: ${({ theme }) => theme.secondaryColor};
    }
  }

  .easter-linkedin {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    color: ${({ theme }) => theme.grayColor};
    transition: color 0.3s ease;

    &:hover,
    &:focus-visible {
      color: ${({ theme }) => theme.secondaryColor};
    }
  }

  @keyframes coffee-float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-4px);
    }
  }

  @keyframes coffee-steam {
    0% {
      opacity: 0;
      transform: translateY(10px) scaleY(0.85);
    }
    30% {
      opacity: 0.8;
    }
    100% {
      opacity: 0;
      transform: translateY(-16px) scaleY(1.1);
    }
  }

  @keyframes coffee-shine {
    from {
      transform: translateX(-6px);
    }
    to {
      transform: translateX(14px);
    }
  }

  @keyframes coffee-note {
    0% {
      opacity: 0;
      transform: translate(0, 8px) rotate(0deg);
    }
    25% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(14px, -28px) rotate(12deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .coffee-mug,
    .coffee-shine,
    .coffee.is-playing .coffee-note {
      animation: none;
    }

    .coffee-steam {
      animation: none;
      opacity: 0.5;
    }
  }
`;
