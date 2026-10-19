import styled from "styled-components";

//prettier-ignore
export const CareerContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;

  .career-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  .career-list {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    max-width: 820px;
    margin: 0 auto;
    padding-left: 36px;

    &::before {
      content: "";
      position: absolute;
      top: 12px;
      bottom: 12px;
      left: 7px;
      width: 2px;
      border-radius: 2px;
      background-image: linear-gradient(to bottom, ${({ theme }) => theme.secondaryColor}, rgba(1, 166, 107, 0.1));
    }
  }

  .career-item {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 24px;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.bgPrimary};
    box-shadow: inset 0 0 0 1px rgba(249, 249, 249, 0.06);
    transition: box-shadow 0.3s ease;

    &::before {
      content: "";
      position: absolute;
      top: 28px;
      left: -36px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.bgSecondary};
      box-shadow: inset 0 0 0 2px ${({ theme }) => theme.secondaryColor};
    }

    &.current::before {
      background-color: ${({ theme }) => theme.secondaryColor};
      box-shadow: ${({ theme }) => theme.shadows.light.boxShadow};
    }

    &:hover {
      box-shadow: inset 0 0 0 1px rgba(1, 166, 107, 0.4);
    }
  }

  .career-item-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .career-badge {
    padding: 2px 10px;
    border-radius: 999px;
    font-size: 12px;
    color: ${({ theme }) => theme.secondaryColor};
    background-color: rgba(1, 166, 107, 0.1);
    box-shadow: inset 0 0 0 1px rgba(1, 166, 107, 0.5);
  }

  .career-roles {
    display: flex;
    flex-direction: column;
    gap: 4px;

    li {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      justify-content: space-between;
      gap: 2px 12px;
    }

    li:first-child .career-role {
      color: ${({ theme }) => theme.secondaryColor};
    }

    .career-role {
      font-weight: 500;
    }

    .career-period {
      font-size: 14px;
      font-variant-numeric: tabular-nums;
      color: ${({ theme }) => theme.grayColor};
    }
  }

  .career-description {
    color: ${({ theme }) => theme.grayColor};
  }

  .career-highlights {
    display: flex;
    flex-direction: column;
    gap: 6px;

    li {
      position: relative;
      padding-left: 16px;
      font-size: 14px;
      line-height: 150%;
      color: ${({ theme }) => theme.grayColor};

      &::before {
        content: "";
        position: absolute;
        top: 0.6em;
        left: 0;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.secondaryColor};
      }
    }
  }

  .career-footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding-top: 14px;
    border-top: 1px solid rgba(249, 249, 249, 0.06);
  }

  .career-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    li {
      padding: 2px 10px;
      border-radius: 999px;
      font-size: 12px;
      line-height: 20px;
      color: ${({ theme }) => theme.secondaryColor};
      background-color: rgba(1, 166, 107, 0.1);
      box-shadow: inset 0 0 0 1px rgba(1, 166, 107, 0.3);
    }
  }

  .career-links {
    display: flex;
    gap: 16px;

    a {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 14px;
      font-weight: 500;
      color: ${({ theme }) => theme.secondaryColor};

      svg {
        transition: transform 0.3s ease;
      }

      &:hover svg,
      &:focus-visible svg {
        transform: translateX(2px);
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    .career-list {
      padding-left: 24px;

      &::before {
        left: 5px;
      }
    }

    .career-item {
      padding: 18px;

      &::before {
        top: 22px;
        left: -24px;
        width: 12px;
        height: 12px;
      }
    }
  }
`;
