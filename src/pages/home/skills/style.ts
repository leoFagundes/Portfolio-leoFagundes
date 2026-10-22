import styled from "styled-components";

export const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;

  .skills-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  .skills-content {
    display: flex;
    justify-content: center;
    height: 100%;

    .skills-items-content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 24px;
      width: 100%;

      @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
        gap: 12px;
      }
    }

    /* entrada em cascata: escondidos até a seção aparecer na tela */
    &:not(.is-visible) .skills-items-content > * {
      opacity: 0;
    }

    /* "backwards" só segura o estado inicial durante o atraso; depois
       o card volta aos estilos normais (hover continua funcionando) */
    &.is-visible .skills-items-content > * {
      animation: skill-in 0.5s ease backwards;
      animation-delay: calc(var(--index, 0) * 40ms);
    }
  }

  @keyframes skill-in {
    from {
      opacity: 0;
      transform: translateY(16px) scale(0.97);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .skills-content:not(.is-visible) .skills-items-content > * {
      opacity: 1;
    }

    .skills-content.is-visible .skills-items-content > * {
      animation: none;
    }
  }
`;

export const SkillItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  border: 1px solid transparent;

  width: 200px;
  height: 180px;

  font-family: inherit;
  color: ${({ theme }) => theme.whiteColor};
  background-color: ${({ theme }) => theme.bgPrimary};
  padding: 24px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;

  transition: 0.3s ease-in-out;

  &:hover,
  &:focus-visible {
    outline: none;
    background-color: ${({ theme }) => theme.bgSecondary};
    border: 1px solid ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.secondaryColor};
    text-shadow: ${({ theme }) => theme.shadows.text.textShadow};
  }

  img {
    height: 64px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 150px;
    height: 140px;
    gap: 12px;
    padding: 16px;

    img {
      height: 48px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: calc((100% - 24px) / 3);
    height: 115px;
    gap: 8px;
    padding: 12px 8px;

    img {
      height: 36px;
    }

    h3 {
      font-size: 14px;
      line-height: 125%;
    }
  }
`;

export const SkillModalContent = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;

  .modal-skill-info {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 8px;

    h3 {
      color: ${({ theme }) => theme.secondaryColor};
    }
  }

  .modal-skill-category {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.grayColor};
  }

  .modal-skill-text {
    color: ${({ theme }) => theme.grayColor};
  }

  .modal-skill-img {
    flex-shrink: 0;
    height: 96px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 16px;

    .modal-skill-img {
      height: 48px;
    }
  }
`;
