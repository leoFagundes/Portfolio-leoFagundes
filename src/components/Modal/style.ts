import styled, { css, keyframes } from "styled-components";

const overlayIn = keyframes`
  from {
    -webkit-backdrop-filter: blur(0);
    backdrop-filter: blur(0);
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const overlayOut = keyframes`
  from {
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    background-color: rgba(0, 0, 0, 0.3);
  }
  to {
    -webkit-backdrop-filter: blur(0);
    backdrop-filter: blur(0);
    background-color: rgba(0, 0, 0, 0);
  }
`;

const contentIn = keyframes`
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
`;

const contentOut = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(30px);
    opacity: 0;
  }
`;

export const ModalContainer = styled.div<{
  $isOpen: boolean;
  $size: "default" | "wide";
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  inset: 0;
  z-index: 1000;
  padding: 16px;

  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  animation: ${({ $isOpen }) =>
    $isOpen
      ? css`
          ${overlayIn} 0.4s ease-in-out forwards
        `
      : css`
          ${overlayOut} 0.4s ease-in-out forwards
        `};

  &:hover {
    cursor: pointer;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${({ $size }) => ($size === "wide" ? "1100px" : "600px")};
    min-height: 250px;
    max-height: 100%;
    overflow-y: auto;

    position: relative;
    padding: 40px 24px 24px;

    background-color: ${({ theme }) => theme.bgSecondary};
    box-shadow: ${({ theme }) => theme.shadows.strong.boxShadow};

    animation: ${({ $isOpen }) =>
      $isOpen
        ? css`
            ${contentIn} 0.8s ease-in-out forwards
          `
        : css`
            ${contentOut} 0.8s ease-in-out forwards
          `};

    & > * {
      margin-block: auto;
    }

    .close-modal-icon {
      display: flex;
      position: absolute;
      right: 8px;
      top: 8px;
      padding: 4px;
      border: none;
      background: none;
      color: ${({ theme }) => theme.whiteColor};
      cursor: pointer;
      transition: color 0.3s ease-in-out;

      &:hover,
      &:focus-visible {
        color: ${({ theme }) => theme.primaryColor};
      }
    }

    &:hover {
      cursor: default;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      min-height: auto;
    }
  }
`;
