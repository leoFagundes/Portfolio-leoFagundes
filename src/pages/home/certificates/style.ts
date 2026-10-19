import styled from "styled-components";

//prettier-ignore
export const CertificatesContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;

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
    display: flex;
    flex-direction: column;
    gap: 20px;
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
    &:focus-visible {
      outline: none;
      transform: translateY(-4px);
      box-shadow: ${({ theme }) => theme.shadows.strong.boxShadow};

      .certificate-link svg {
        transform: translate(2px, -2px);
      }
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

    .certificate-link {
      display: flex;
      align-items: center;
      gap: 4px;
      font-weight: 500;
      color: ${({ theme }) => theme.secondaryColor};

      svg {
        transition: transform 0.3s ease;
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .certificate-card,
    .certificate-link svg {
      transition: none;
    }
  }
`;
