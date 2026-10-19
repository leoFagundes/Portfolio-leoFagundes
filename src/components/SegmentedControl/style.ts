import styled from "styled-components";

//prettier-ignore
export const SegmentedControlContainer = styled.div`
  display: flex;
  gap: 4px;
  max-width: 100%;
  padding: 4px;
  overflow-x: auto;
  scrollbar-width: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.bgSecondary};
  box-shadow: inset 0 0 0 1px rgba(249, 249, 249, 0.08);

  &::-webkit-scrollbar {
    display: none;
  }

  button {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    gap: 6px;
    height: 34px;
    padding: 0 12px;
    border: none;
    border-radius: 8px;
    font-family: inherit;
    font-size: 14px;
    white-space: nowrap;
    cursor: pointer;
    color: ${({ theme }) => theme.grayColor};
    background-color: transparent;
    transition: color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.whiteColor};
    }

    &[aria-pressed="true"] {
      color: ${({ theme }) => theme.whiteColor};
      background-color: rgba(1, 166, 107, 0.15);
      box-shadow: inset 0 0 0 1px rgba(1, 166, 107, 0.5);

      svg {
        color: ${({ theme }) => theme.secondaryColor};
      }
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.secondaryColor};
      outline-offset: -2px;
    }
  }

  .count {
    padding: 0 6px;
    border-radius: 999px;
    font-size: 12px;
    line-height: 18px;
    background-color: rgba(249, 249, 249, 0.08);
  }
`;
