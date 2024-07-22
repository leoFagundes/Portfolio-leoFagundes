import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;

  width: 100vw;
  height: 120%;

  animation: onBlur 0.4s ease-in-out forwards;

  &:hover {
    cursor: pointer;
  }

  .modal-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 36px;

    max-width: 600px;
    min-height: 250px;

    position: relative;
    padding: 24px;
    opacity: 0;

    background-color: ${({ theme }) => theme.bgSecondary};
    box-shadow: ${({ theme }) => theme.shadows.strong.boxShadow};

    animation: shadeIn 0.8s ease-in-out forwards;

    .close-modal-icon {
      position: absolute;
      right: 8px;
      top: 8px;

      &:hover {
        cursor: pointer;
      }
    }

    &:hover {
      cursor: default;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      flex-wrap: wrap;
      width: 80%;
      max-width: auto;
      min-height: auto;

      img {
        height: 36px;
      }
    }
  }

  @keyframes onBlur {
    0% {
      backdrop-filter: blur(0);
    }
    100% {
      backdrop-filter: blur(4px);
    }
  }

  @keyframes shadeIn {
    0% {
      transform: translateY(-30px);
      opacity: 0;
    }
    80% {
      transform: translateY(1px);
      opacity: 1;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
