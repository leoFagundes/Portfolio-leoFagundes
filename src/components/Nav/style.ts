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
    max-width: 1200px;
    height: 56px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav-logo {
      @media screen and (max-width: ${({ theme }) => theme.breakpoints.nav}) {
        display: none;
      }
    }

    .green {
      color: ${({ theme }) => theme.secondaryColor};
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
    top: 50px;
    height: 100vh;
    pointer-events: none;

    .icon-list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 12px;
      padding: 12px;
      opacity: 1;
      width: 60px;
      height: auto;
      min-height: 100px;
      background-color: ${({ theme }) => theme.bgPrimary};
      border-radius: 2px;
      /* border: 2px solid ${({ theme }) => theme.bgSecondary}; */
      box-shadow: ${({ theme }) => theme.shadows.light.boxShadow};
      transition: all 0.5s ease-in-out;
      pointer-events: auto;

      &.nav-open {
        transform: translate(2px);
        z-index: 50;
      }

      &.nav-close {
        transform: translate(50px);
        z-index: 0;
        opacity: 0.5;
      }

      li:hover {
        scale: 1.05;
      }

      li:active {
        scale: 0.95;
      }
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.nav}) {
      display: flex;
    }
  }
`;

export const HamburguerMenuContainer = styled.label`
  display: none;
  flex-direction: column;
  position: absolute;
  top: -5px;
  right: -5px;
  width: 70px;
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

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"]:checked ~ span:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotatez(45deg) translate(8px, 0px);
  }

  input[type="checkbox"]:checked ~ span:nth-of-type(2) {
    transform-origin: top;
    transform: rotatez(-45deg);
  }

  input[type="checkbox"]:checked ~ span:nth-of-type(3) {
    transform-origin: bottom;
    width: 50%;
    transform: translate(30px, -11px) rotatez(45deg);
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.nav}) {
    display: flex;
  }
`;
