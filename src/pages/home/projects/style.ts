import styled, { keyframes } from "styled-components";

const imageFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

//prettier-ignore
export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  user-select: none;

  .projects-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  .project-options {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }

  .projects-content {
    --card-width: 500px;
    --side-offset: 150px;
    --side-scale: 0.75;

    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    max-width: 770px;
  }

  .project-slider {
    display: grid;
    justify-items: center;
    touch-action: pan-y;
  }

  .project-box {
    grid-area: 1 / 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: var(--card-width);
    padding: 32px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.bgSecondary};
    box-shadow: ${({ theme }) => theme.shadows.strong.boxShadow};
    transition: transform 0.5s ease, opacity 0.5s ease;

    &.current {
      z-index: 2;
    }

    &.prev,
    &.next {
      z-index: 1;
      opacity: 0.6;
      cursor: pointer;

      .project-image-box,
      .project-links {
        pointer-events: none;
      }
    }

    &.prev {
      transform: translateX(calc(var(--side-offset) * -1)) scale(var(--side-scale));
    }

    &.next {
      transform: translateX(var(--side-offset)) scale(var(--side-scale));
    }

    &.hide {
      opacity: 0;
      transform: scale(0.5);
      pointer-events: none;
    }
  }

  .project-image-box {
    display: block;
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    padding: 0;
    border: none;
    border-radius: 6px;
    overflow: hidden;
    font-family: inherit;
    cursor: zoom-in;
    background-color: ${({ theme }) => theme.bgPrimary};
    box-shadow: 0 0 1px 0px rgba(255, 255, 255, 0.8);

    .project-image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .project-badges {
      position: absolute;
      top: 10px;
      left: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
    }

    .project-badge {
      padding: 2px 10px;
      border-radius: 999px;
      font-size: 12px;
      color: ${({ theme }) => theme.secondaryColor};
      background-color: rgba(11, 11, 11, 0.85);
      box-shadow: inset 0 0 0 1px rgba(1, 166, 107, 0.5);
    }

    .project-expand {
      position: absolute;
      right: 10px;
      bottom: 10px;
      display: flex;
      padding: 6px;
      border-radius: 8px;
      color: ${({ theme }) => theme.whiteColor};
      background-color: rgba(11, 11, 11, 0.75);
      box-shadow: inset 0 0 0 1px rgba(249, 249, 249, 0.15);
      transition: color 0.3s ease, box-shadow 0.3s ease;
    }

    &:hover,
    &:focus-visible {
      .project-image {
        transform: scale(1.03);
      }

      .project-expand {
        color: ${({ theme }) => theme.secondaryColor};
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.secondaryColor};
      }
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.secondaryColor};
      outline-offset: 2px;
    }
  }

  .project-info {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .project-description {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      color: ${({ theme }) => theme.grayColor};
    }
  }

  .project-stack {
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

  .project-links {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: auto;

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

  .projects-controls {
    align-self: center;
    width: 100%;
    max-width: var(--card-width);
  }

  @media screen and (max-width: 1156px) {
    .projects-content {
      --card-width: 400px;
      --side-offset: 80px;

      max-width: 550px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    .projects-content {
      --card-width: calc(100% - 48px);
      --side-offset: 32px;
      --side-scale: 0.88;
    }

    .project-box {
      gap: 16px;
      padding: 20px;
    }

    .project-info .project-description {
      font-size: 14px;
      -webkit-line-clamp: 5;
    }

    .project-links a {
      height: 34px;
      padding: 0 12px;
      font-size: 13px;
    }
  }
`;

export const ProjectLightbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .lightbox-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .lightbox-note {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    color: ${({ theme }) => theme.grayColor};
  }

  .lightbox-image {
    display: block;
    width: 100%;
    max-height: calc(100vh - 220px);
    max-height: calc(100dvh - 220px);
    object-fit: contain;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.bgPrimary};
    box-shadow: 0 0 1px 0px rgba(255, 255, 255, 0.8);
    animation: ${imageFadeIn} 0.3s ease;
  }

  .lightbox-original {
    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: 6px;
    font-size: 14px;
    color: ${({ theme }) => theme.grayColor};
    transition: color 0.3s ease;

    &:hover,
    &:focus-visible {
      color: ${({ theme }) => theme.secondaryColor};
    }
  }
`;
