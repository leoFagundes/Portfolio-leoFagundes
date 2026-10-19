import styled from "styled-components";

//prettier-ignore
export const CarouselControlsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  .carousel-progress {
    flex: 1;
    height: 2px;
    border-radius: 2px;
    background-color: rgba(249, 249, 249, 0.1);
    overflow: hidden;
  }

  .carousel-progress-bar {
    height: 100%;
    border-radius: inherit;
    background-image: linear-gradient(90deg, ${({ theme }) => theme.primaryColor}, ${({ theme }) => theme.secondaryColor});
    transition: width 0.4s ease;
  }

  .carousel-counter {
    font-size: 14px;
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
    color: ${({ theme }) => theme.grayColor};

    strong {
      font-weight: 500;
      color: ${({ theme }) => theme.whiteColor};
    }
  }

  .carousel-buttons {
    display: flex;
    gap: 8px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border: none;
      border-radius: ${({ theme }) => theme.borderRadius};
      cursor: pointer;

      color: ${({ theme }) => theme.whiteColor};
      background-color: ${({ theme }) => theme.bgSecondary};
      box-shadow: ${({ theme }) => theme.shadows.sideWhite.boxShadow};
      transition: color 0.3s ease, box-shadow 0.3s ease, transform 0.1s ease;

      &:hover,
      &:focus-visible {
        outline: none;
        color: ${({ theme }) => theme.secondaryColor};
        box-shadow: ${({ theme }) => theme.shadows.sideGreen.boxShadow};
      }

      &:active {
        transform: scale(0.95);
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .carousel-progress-bar {
      transition: none;
    }
  }
`;
