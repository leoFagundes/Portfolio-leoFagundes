import styled from "styled-components";

export const ButtonContainer = styled.button<{
  width?: string;
  iconDeslocation?: string;
  iconInitialPosition?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 4px;
  min-width: ${(props) => props.width || "auto"};
  height: 42px;
  padding: 12px 20px;
  border-radius: 5px;
  border: none;
  font-size: 15px;
  color: ${({ theme }) => theme.whiteColor};
  background-image: linear-gradient(${({ theme }) => theme.linearGradient});
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;

  .icon {
    display: flex;
    align-items: center;
    height: 100%;
    position: absolute;
    right: auto;
    opacity: 0;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  }

  span {
    transition: transform 0.5s ease-in-out;
  }

  &.hoverAnimation:hover {
    span {
      transform: translateX(-16px);
    }

    .icon {
      opacity: 1;
      transform: translateX(${(props) => props.iconDeslocation || "0"});
    }
  }

  &:hover {
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.shadows.light.boxShadow};
  }

  &:not(:hover) {
    span {
      transform: translateX(0);
    }

    .icon {
      opacity: 0;
      transform: translateX(${(prosp) => prosp.iconInitialPosition || "0"});
    }
  }
`;
