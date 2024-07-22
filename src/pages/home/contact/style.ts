import styled from "styled-components";

//prettier-ignore
export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;
  position: relative;


  .contact-content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 36px;
    align-items: center;
    height: 100%;
    position: relative;

    .loading-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 450px;

      @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
        width: 300px;
      }
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      gap: 22px;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 22px;
      z-index: 2;

      .contact-email {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .email {
          color: ${({ theme }) => theme.secondaryColor};
        }
      }

      .contact-social-media {
        .social-media {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          margin-top: 16px;

          .github, .linkedin, .instagram {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .social-media-box {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 44px;
            width: 44px;

            background-color: ${({ theme }) => theme.bgSecondary};
            border-radius: 10px;
            padding: 8px;
            box-shadow: ${({ theme }) => theme.shadows.sideWhite.boxShadow};

            transition: all 0.5s ease;

            &:hover {
              color: ${({ theme }) => theme.secondaryColor};
              box-shadow: ${({ theme }) => theme.shadows.sideGreen.boxShadow};
            }
          }
        }
      }
    }
  }
`;
