import styled from "styled-components";

// prettier-ignore
export const AboutMeContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;

  .info-content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 48px;

    .leo-fagundes-img {
      position: relative;
      min-width: 300px;
      width: 300px;
      height: 400px;

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        box-shadow: ${({ theme }) => theme.shadows.sideWhite.boxShadow};
        filter: contrast(110%) saturate(105%);
      }

      .image-mask {
        z-index: 2;
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: 12px;
        background: linear-gradient(
          182.1deg,
          rgba(15, 15, 15, 0) 1.77%,
          rgba(11, 11, 11, 0.8) 80.3%
        );
      }

      @media screen and
      (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        min-width: 0;
        width: 140px;
        height: 140px;
        border-radius: 50%;
        box-shadow: ${({ theme }) => theme.shadows.strong.boxShadow};

        img {
          border-radius: 50%;
          object-fit: cover;
          object-position: center top;
          box-shadow: none;
        }

        .image-mask {
          display: none;
        }
      }
    }

    .aboutme-text {
      display: flex;
      flex-direction: column;
      gap: 20px;
      min-width: 300px;

      .green {
        color: ${({ theme }) => theme.secondaryColor};
      }
    }

    .aboutme-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      margin-top: 8px;

      li {
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 12px 14px;
        border-radius: ${({ theme }) => theme.borderRadius};
        background-color: ${({ theme }) => theme.bgPrimary};
        box-shadow: inset 0 0 0 1px rgba(249, 249, 249, 0.06);
      }

      strong {
        font-size: 28px;
        font-weight: 600;
        line-height: 110%;
        color: ${({ theme }) => theme.secondaryColor};
        text-shadow: ${({ theme }) => theme.shadows.text.textShadow};
      }

      span {
        font-size: 13px;
        color: ${({ theme }) => theme.grayColor};
      }

      @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .aboutme-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;

      a,
      button {
        display: flex;
        align-items: center;
        gap: 8px;
        height: 42px;
        padding: 0 20px;
        border: none;
        border-radius: 5px;
        font-family: inherit;
        font-size: 15px;
        cursor: pointer;
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

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      flex-direction: column;
      gap: 32px;
    }
  }
`;
