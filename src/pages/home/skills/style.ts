import styled from "styled-components";

export const SkillsContainer = styled.section`
  position: relative;

  .skills-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 24px 0;

    .skills-items-content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 24px;
    }

    .modal-skill-info {
      display: flex;
      flex-direction: column;
      gap: 8px;

      h3 {
        color: ${({ theme }) => theme.secondaryColor};
      }
    }

    .modal-skill-img {
      height: 96px;
    }
  }
`;

export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  border: 1px solid transparent;

  width: 200px;
  height: 180px;

  background-color: ${({ theme }) => theme.bgPrimary};
  padding: 24px;
  border-radius: 10px;
  text-align: center;

  transition: 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
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
    height: 130px;

    img {
      height: 48px;
    }
  }
`;
