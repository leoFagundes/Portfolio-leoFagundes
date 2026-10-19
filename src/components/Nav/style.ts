import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;

  width: 100%;
  z-index: 99;

  position: fixed;
  backdrop-filter: blur(4px);
  white-space: nowrap;

  nav {
    width: 67%;
    min-width: 880px;
    max-width: 1200px;
    height: 56px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.nav}) {
      min-width: 0;
    }

    .nav-logo {
      margin-right: 32px;
      @media screen and (max-width: ${({ theme }) => theme.breakpoints.nav}) {
        display: none;
      }
    }

    .green {
      color: ${({ theme }) => theme.secondaryColor};
    }

    .signature {
      font-family: "Dancing Script", cursive;
    }

    .name-list {
      display: flex;
      gap: 16px;

      a {
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

      @media screen and (max-width: ${({ theme }) => theme.breakpoints.nav}) {
        display: none;
      }
    }
  }

  .mobile-nav-container {
    display: none;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 0;
    top: 56px;
    height: calc(100vh - 56px);
    height: calc(100dvh - 56px);
    pointer-events: none;

    .icon-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      padding: 8px;
      width: 60px;
      background-color: ${({ theme }) => theme.bgPrimary};
      border-radius: ${({ theme }) => theme.borderRadius} 0 0
        ${({ theme }) => theme.borderRadius};
      box-shadow: ${({ theme }) => theme.shadows.light.boxShadow};
      pointer-events: auto;
      transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out,
        visibility 0s linear 0.5s;

      &.nav-open {
        transform: translateX(0);
        visibility: visible;
        transition-delay: 0s;
      }

      &.nav-close {
        transform: translateX(calc(100% + 8px));
        opacity: 0;
        visibility: hidden;
      }

      @media (hover: hover) {
        li:hover {
          scale: 1.05;
        }
      }

      li:active {
        scale: 0.95;
      }

      a {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        border-radius: 8px;
        transition: color 0.3s ease, background-color 0.3s ease;

        &.active {
          color: ${({ theme }) => theme.secondaryColor};
          background-color: rgba(1, 166, 107, 0.12);

          svg {
            filter: drop-shadow(0 0 4px rgba(1, 166, 107, 0.8));
          }

          .icon-label {
            color: ${({ theme }) => theme.secondaryColor};
          }
        }
      }

      .icon-label {
        position: absolute;
        top: 50%;
        right: calc(100% + 16px);
        padding: 4px 10px;
        border-radius: 6px;
        font-size: 14px;
        color: ${({ theme }) => theme.whiteColor};
        background-color: ${({ theme }) => theme.bgSecondary};
        box-shadow: inset 0 0 0 1px rgba(1, 166, 107, 0.3);
        opacity: 0;
        transform: translate(8px, -50%);
        transition: opacity 0.3s ease, transform 0.3s ease;
      }

      &.nav-open .icon-label {
        opacity: 1;
        transform: translate(0, -50%);
        transition-delay: calc(var(--index) * 40ms + 200ms);
      }
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.nav}) {
      display: flex;
    }
  }
`;

export const HamburguerMenuContainer = styled.button`
  display: none;
  flex-direction: column;
  position: absolute;
  top: -29px;
  right: -29px;
  box-sizing: content-box;
  width: 70px;
  padding: 24px;
  border: none;
  background: none;
  cursor: pointer;
  scale: 0.4;
  z-index: 2;

  span {
    background: #fff;
    border-radius: 10px;
    height: 7px;
    margin: 7px 0;
    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);

    &:nth-of-type(1) {
      width: 50%;
    }

    &:nth-of-type(2) {
      width: 100%;
    }

    &:nth-of-type(3) {
      width: 75%;
    }
  }

  &[aria-expanded="true"] span:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotatez(45deg) translate(8px, 0px);
  }

  &[aria-expanded="true"] span:nth-of-type(2) {
    transform-origin: top;
    transform: rotatez(-45deg);
  }

  &[aria-expanded="true"] span:nth-of-type(3) {
    transform-origin: bottom;
    width: 50%;
    transform: translate(30px, -11px) rotatez(45deg);
  }

  &:focus-visible {
    outline: 5px solid ${({ theme }) => theme.secondaryColor};
    outline-offset: -12px;
    border-radius: 24px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.nav}) {
    display: flex;
  }
`;
