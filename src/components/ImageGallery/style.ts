import styled from "styled-components";

//prettier-ignore
export const ImageGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .gallery-stage {
    position: relative;
  }

  .gallery-viewport {
    overflow: hidden;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.bgPrimary};
    box-shadow: 0 0 1px 0px rgba(255, 255, 255, 0.8);
  }

  .gallery-track {
    display: flex;
    touch-action: pan-y pinch-zoom;
  }

  .gallery-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 100%;
    min-width: 0;

    img {
      display: block;
      width: 100%;
      max-height: calc(100vh - 300px);
      max-height: calc(100dvh - 300px);
      object-fit: contain;
      user-select: none;
      -webkit-user-drag: none;
    }
  }

  .gallery-arrow {
    position: absolute;
    top: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    color: ${({ theme }) => theme.whiteColor};
    background-color: rgba(11, 11, 11, 0.75);
    box-shadow: inset 0 0 0 1px rgba(249, 249, 249, 0.15);
    transform: translateY(-50%);
    transition: color 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;

    &.prev {
      left: 12px;
    }

    &.next {
      right: 12px;
    }

    &:hover:not(:disabled),
    &:focus-visible {
      outline: none;
      color: ${({ theme }) => theme.secondaryColor};
      box-shadow: inset 0 0 0 1px ${({ theme }) => theme.secondaryColor};
    }

    &:disabled {
      opacity: 0.3;
      cursor: default;
    }
  }

  .gallery-counter {
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 2px 10px;
    border-radius: 999px;
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: ${({ theme }) => theme.whiteColor};
    background-color: rgba(11, 11, 11, 0.75);
    box-shadow: inset 0 0 0 1px rgba(249, 249, 249, 0.15);
  }

  .gallery-thumbs {
    display: flex;
    gap: 8px;
    padding: 2px;
    overflow-x: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    button {
      flex-shrink: 0;
      width: 88px;
      aspect-ratio: 16 / 9;
      padding: 0;
      border: none;
      border-radius: 6px;
      overflow: hidden;
      cursor: pointer;
      opacity: 0.45;
      background-color: ${({ theme }) => theme.bgPrimary};
      box-shadow: inset 0 0 0 1px rgba(249, 249, 249, 0.1);
      transition: opacity 0.3s ease, box-shadow 0.3s ease;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &:hover,
      &:focus-visible {
        outline: none;
        opacity: 0.8;
      }

      &.is-active {
        opacity: 1;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.secondaryColor};
      }
    }
  }

  .gallery-original {
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

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    .gallery-arrow {
      width: 32px;
      height: 32px;

      &.prev {
        left: 8px;
      }

      &.next {
        right: 8px;
      }
    }

    .gallery-thumbs button {
      width: 64px;
    }
  }
`;
