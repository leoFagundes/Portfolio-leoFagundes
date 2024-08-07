import styled from "styled-components";

//prettier-ignore
export const CertificatesContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  
  .certificates-content {
    display: flex;
    justify-content: center;
    height: 100%;

    .certificates-carousel {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 90%;

      .prev-button,
      .next-button {
        background-color: transparent;
        border: none;

        svg {
          color: ${({ theme }) => theme.whiteColor};
        }

        &:hover {
          cursor: pointer;
        }

        @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
          display: none;
        }
      }

      .disabled {
        display: none;
      }

      .slider {
        width: 100%;
        max-width: 1200px;

        .slick-slide {
          display: flex;
          justify-content: center;

          & > div {
            display: flex;
            flex-direction: column;
            max-width: 250px;
            min-width: 250px;
            width: 250px;
            height: 280px;
            scale: 0.95;
            border-radius: 10px;
            padding: 22px;

            background-color: ${({ theme }) => theme.bgSecondary};
            box-shadow: ${({ theme }) => theme.shadows.strong.boxShadow};
            
            &:hover {
              cursor: grab;
            }

            &:active {
              cursor: grabbing;
            }

            .certificate-title-box {
              flex: 1;

              .certificate-title {
                color: ${({ theme }) => theme.secondaryColor};
                text-shadow: ${({ theme }) => theme.shadows.text.textShadow};
              }
            }

            .certificate-info-button {
              display: flex;
              flex-direction: column;
              gap: 16px;

              .certificate-info {
                display: flex;
                flex-direction: column;
                gap: 8px;

                li {
                  display: flex;
                  align-items: center;
                  gap: 8px;

                  .list-topic {
                    color: ${({ theme }) => theme.grayColor};
                  }
                }
              }

              .button-content {
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
          }
        }

        .slick-prev,
        .slick-next {
          display: none !important;
        }

        .slick-dots {
          li {
            button::before {
              color: ${({ theme }) => theme.secondaryColor};
            }
          }

          @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
            transform: translateY(25px);
            height: 50px;
          }
        }
      }
    }
  }
`;
