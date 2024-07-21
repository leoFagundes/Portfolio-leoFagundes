import styled from "styled-components";

// prettier-ignore
export const AboutMeContainer = styled.section`
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
        border-radius: 30px;
        box-shadow: ${({ theme }) => theme.shadows.gray.boxShadow};
      }

      .image-mask {
        z-index: 2;
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: aquamarine;
        border-radius: 30px;
        background: linear-gradient(
          182.1deg,
          rgba(15, 15, 15, 0) 1.77%,
          rgba(11, 11, 11, 0.8) 80.3%
        );
      }

      @media screen and 
      (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        display: none;
      }
    }

    .aboutme-text {
      display: flex;
      flex-direction: column;
      min-width: 300px;

      .green {
        color: ${({ theme }) => theme.secondaryColor};
      }
    }
  }
`;
