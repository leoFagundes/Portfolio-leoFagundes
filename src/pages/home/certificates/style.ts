import styled from "styled-components";

//prettier-ignore
export const CertificatesContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;

  .certificates-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  .certificates-filters {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    max-width: 100%;
  }

  .certificates-carousel {
    --slide-spacing: 24px;
    --slide-size: 324px;
    --edge-fade: 8%;

    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
      --slide-spacing: 16px;
      --slide-size: 85%;
      --edge-fade: 4%;
    }
  }

  .certificates-viewport {
    overflow: hidden;
    padding: 16px 0;
    user-select: none;
    -webkit-mask-image: linear-gradient(90deg, transparent, #000 var(--edge-fade), #000 calc(100% - var(--edge-fade)), transparent);
    mask-image: linear-gradient(90deg, transparent, #000 var(--edge-fade), #000 calc(100% - var(--edge-fade)), transparent);
  }

  .certificates-track {
    display: flex;
    touch-action: pan-y pinch-zoom;
    margin-left: calc(var(--slide-spacing) * -1);
  }

  .certificates-slide {
    flex: 0 0 var(--slide-size);
    min-width: 0;
    padding-left: var(--slide-spacing);
  }

  .certificate-card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100%;
    min-height: 260px;
    padding: 24px;
    border-radius: ${({ theme }) => theme.borderRadius};

    background-color: ${({ theme }) => theme.bgSecondary};
    box-shadow: ${({ theme }) => theme.shadows.light.boxShadow};
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &.is-selected {
      box-shadow: ${({ theme }) => theme.shadows.strong.boxShadow};
    }

    &:hover,
    &:has(:focus-visible) {
      transform: translateY(-4px);
      box-shadow: ${({ theme }) => theme.shadows.strong.boxShadow};

      .certificate-link svg {
        transform: scale(1.15);
      }
    }

    /* sem certificado ainda: o card não abre nada */
    &.is-static:hover {
      transform: none;
      box-shadow: ${({ theme }) => theme.shadows.light.boxShadow};
    }

    .certificate-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .certificate-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: ${({ theme }) => theme.borderRadius};
      color: ${({ theme }) => theme.secondaryColor};
      background-color: rgba(1, 166, 107, 0.1);
      box-shadow: inset 0 0 0 1px rgba(1, 166, 107, 0.3);
    }

    .certificate-year {
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 12px;
      color: ${({ theme }) => theme.grayColor};
      box-shadow: inset 0 0 0 1px rgba(249, 249, 249, 0.15);
    }

    .certificate-status {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 12px;
      color: ${({ theme }) => theme.secondaryColor};
      background-color: rgba(1, 166, 107, 0.1);
      box-shadow: inset 0 0 0 1px rgba(1, 166, 107, 0.5);

      &::before {
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.secondaryColor};
        animation: certificate-pulse 1.6s ease-in-out infinite;
      }
    }

    .certificate-body {
      display: flex;
      flex-direction: column;
      gap: 8px;
      flex: 1;
    }

    .certificate-institute {
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: ${({ theme }) => theme.secondaryColor};
    }

    .certificate-title {
      font-size: 20px;
      font-weight: 600;
      line-height: 125%;

      @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
        font-size: 18px;
      }
    }

    .certificate-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding-top: 16px;
      border-top: 1px solid rgba(249, 249, 249, 0.08);
      font-size: 14px;
    }

    .certificate-duration {
      display: flex;
      align-items: center;
      gap: 6px;
      color: ${({ theme }) => theme.grayColor};
    }

    .certificate-pending {
      margin-left: auto;
      font-size: 13px;
      font-style: italic;
      color: ${({ theme }) => theme.grayColor};
    }

    .certificate-link {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-left: auto;
      padding: 0;
      border: none;
      background: none;
      font-family: inherit;
      font-size: 14px;
      font-weight: 500;
      color: ${({ theme }) => theme.secondaryColor};
      cursor: pointer;

      /* deixa o card inteiro clicável */
      &::after {
        content: "";
        position: absolute;
        inset: 0;
      }

      &:focus-visible {
        outline: none;
      }

      svg {
        transition: transform 0.3s ease;
      }
    }
  }

  @keyframes certificate-pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .certificate-card,
    .certificate-link svg {
      transition: none;
    }

    .certificate-card .certificate-status::before {
      animation: none;
    }
  }
`;
