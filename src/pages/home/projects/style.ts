import styled from "styled-components";

export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  .projects-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    position: relative;
    min-width: 770px;
    max-width: 770px;
    width: 770px;

    .prev-button:hover,
    .next-button:hover {
      cursor: pointer;
    }

    .project-slider {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      position: relative;

      .project-box {
        display: flex;
        flex-direction: column;
        gap: 32px;
        border-radius: 4px;

        position: relative;

        height: 500px;
        width: 500px;
        background-color: ${({ theme }) => theme.bgSecondary};
        box-shadow: ${({ theme }) => theme.shadows.strong.boxShadow};
        transition: transform 0.5s ease, opacity 0.5s ease;

        padding: 48px;

        .project-image {
          height: 200px;
          width: 100%;
          box-shadow: 0 0 1px 0px rgba(255, 255, 255, 0.8);
        }

        .project-info {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }

        .hovered-project-box {
          display: flex;
          flex-direction: column;
          align-items: center;

          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          position: absolute;
          padding: 48px;
          background-color: ${({ theme }) => theme.bgSecondary};
          opacity: 0;
          transition: opacity 1s ease;

          pointer-events: none;

          .hovered-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            gap: 12px;
            transition: opacity 1.5s ease;
            opacity: 0;

            .hovered-project-h2 {
              color: ${({ theme }) => theme.secondaryColor};
              text-shadow: ${({ theme }) => theme.shadows.text.textShadow};
              text-align: center;
            }

            .hovered-project-p2 {
              color: ${({ theme }) => theme.secondaryColor};
              text-align: center;
            }

            .hovered-project-links {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 22px;
              flex: 1;

              a {
                text-align: center;
                position: relative;

                &:hover {
                  cursor: pointer;
                }

                &::before {
                  content: "";
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  width: 0;
                  height: 1px;
                  background-image: linear-gradient(
                    to right,
                    rgba(0, 0, 0, 0),
                    ${({ theme }) => theme.secondaryColor}
                  );
                  border-radius: 10px;
                  opacity: 0;
                }

                &:hover::before {
                  width: 100%;
                  opacity: 1;
                }

                &.hovered::before {
                  animation: HoverLineAnimation 0.6s ease forwards;
                }

                &.unhovered::before {
                  animation: UnhoverLineAnimation 0.6s ease forwards;
                }
              }
            }
          }
        }
      }

      .current {
        position: absolute;
        z-index: 2;

        &:hover {
          cursor: pointer;

          .hovered-project-box {
            opacity: 1;
            pointer-events: all;

            .hovered-content {
              opacity: 1;
            }
          }
        }
      }

      .next {
        position: absolute;
        transform: translate(150px) scale(0.75);
        opacity: 0.6;

        &:hover {
          cursor: pointer;
        }
      }

      .prev {
        position: absolute;
        transform: translate(-150px) scale(0.75);
        opacity: 0.6;

        &:hover {
          cursor: pointer;
        }
      }

      .hide {
        position: absolute;
        opacity: 0;
        transform: translate(0) scale(0.5);
      }
    }
  }

  @media screen and (max-width: 1156px) {
    .projects-content {
      min-width: 550px;
      max-width: 550px;
      width: 550px;

      .project-slider {
        .project-box {
          width: 400px;
          height: 500px;
        }

        .current {
          position: absolute;
          z-index: 2;
        }

        .next {
          position: absolute;
          transform: translate(80px) scale(0.75);
          opacity: 0.6;
        }

        .prev {
          position: absolute;
          transform: translate(-80px) scale(0.75);
          opacity: 0.6;
        }

        .hide {
          position: absolute;
          opacity: 0;
          transform: translate(0) scale(0.5);
        }
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    .projects-content {
      min-width: 360px;
      max-width: 360px;
      width: 360px;

      .project-slider {
        .project-box {
          width: 250px;
          height: 400px;

          .project-image {
            max-height: 100px;
            height: 100px;
            width: 100%;
            box-shadow: 0 0 1px 0px rgba(255, 255, 255, 0.8);
          }

          .project-info {
            .project-description {
              font-size: 12px;
            }
          }
        }

        .current {
          position: absolute;
          z-index: 2;
        }

        .next {
          position: absolute;
          transform: translate(60px) scale(0.75);
          opacity: 0.6;
        }

        .prev {
          position: absolute;
          transform: translate(-60px) scale(0.75);
          opacity: 0.6;
        }

        .hide {
          position: absolute;
          opacity: 0;
          transform: translate(0) scale(0.5);
        }
      }
    }
  }
`;
