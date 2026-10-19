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
  }
`;

export const SkillItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border: 1px solid transparent;

  width: 200px;
  height: 200px;

  font-family: inherit;
  color: ${({ theme }) => theme.whiteColor};
  background-color: ${({ theme }) => theme.bgPrimary};
  padding: 20px;
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

  .skill-count {
    margin-top: -8px;
    font-size: 12px;
    color: ${({ theme }) => theme.grayColor};
    text-shadow: none;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 150px;
    height: 160px;
    gap: 12px;
    padding: 16px;

    img {
      height: 48px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: calc((100% - 24px) / 3);
    height: 130px;
    gap: 8px;
    padding: 12px 8px;

    img {
      height: 36px;
    }

    h3 {
      font-size: 14px;
      line-height: 125%;
    }

    .skill-count {
      margin-top: -4px;
      font-size: 11px;
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

  .modal-skill-projects {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;

    a {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 14px;
      color: ${({ theme }) => theme.secondaryColor};
      background-color: rgba(1, 166, 107, 0.1);
      box-shadow: inset 0 0 0 1px rgba(1, 166, 107, 0.3);
      transition: background-color 0.3s ease, box-shadow 0.3s ease;

      svg {
        transition: transform 0.3s ease;
      }

      &:hover,
      &:focus-visible {
        outline: none;
        background-color: rgba(1, 166, 107, 0.18);
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.secondaryColor};

        svg {
          transform: translateX(2px);
        }
      }
    }
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
