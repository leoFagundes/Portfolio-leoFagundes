import styled from "styled-components";

//prettier-ignore
export const DocumentModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .document-header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 12px 24px;
  }

  .document-info {
    display: flex;
    flex-direction: column;
    gap: 4px;

    h3 {
      color: ${({ theme }) => theme.secondaryColor};
    }
  }

  .document-subtitle {
    font-size: 14px;
    color: ${({ theme }) => theme.grayColor};
  }

  .document-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    a {
      display: flex;
      align-items: center;
      gap: 6px;
      height: 36px;
      padding: 0 14px;
      border-radius: 5px;
      font-size: 14px;
      color: ${({ theme }) => theme.whiteColor};
      background-color: ${({ theme }) => theme.bgPrimary};
      box-shadow: inset 0 0 0 1px rgba(249, 249, 249, 0.15);
      transition: color 0.3s ease, box-shadow 0.3s ease;

      &:hover,
      &:focus-visible {
        outline: none;
        color: ${({ theme }) => theme.secondaryColor};
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.secondaryColor};
      }

      &.primary {
        background-image: linear-gradient(${({ theme }) => theme.linearGradient});
        box-shadow: none;

        &:hover,
        &:focus-visible {
          color: ${({ theme }) => theme.whiteColor};
          box-shadow: ${({ theme }) => theme.shadows.light.boxShadow};
        }
      }
    }
  }

  .document-preview {
    display: block;
    width: 100%;
    height: calc(100vh - 220px);
    height: calc(100dvh - 220px);
    min-height: 320px;
    border: none;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.bgPrimary};
  }

  .document-fallback {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 40px 16px;
    border-radius: 6px;
    text-align: center;
    color: ${({ theme }) => theme.grayColor};
    background-color: ${({ theme }) => theme.bgPrimary};
  }
`;
