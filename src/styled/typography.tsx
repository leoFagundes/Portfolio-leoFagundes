// src/components/Typography.tsx
import styled from "styled-components";

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
  line-height: ${({ theme }) => theme.typography.h1.lineHeight};
`;

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
  line-height: ${({ theme }) => theme.typography.h2.lineHeight};
`;

export const H3 = styled.h3`
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
  line-height: ${({ theme }) => theme.typography.h3.lineHeight};
`;

export const P1 = styled.p`
  font-size: ${({ theme }) => theme.typography.p1.fontSize};
  font-weight: ${({ theme }) => theme.typography.p1.fontWeight};
  line-height: ${({ theme }) => theme.typography.p1.lineHeight};
`;

export const P2 = styled.p`
  font-size: ${({ theme }) => theme.typography.p2.fontSize};
  font-weight: ${({ theme }) => theme.typography.p2.fontWeight};
  line-height: ${({ theme }) => theme.typography.p2.lineHeight};
`;

export const P3 = styled.p`
  font-size: ${({ theme }) => theme.typography.p3.fontSize};
  font-weight: ${({ theme }) => theme.typography.p3.fontWeight};
  line-height: ${({ theme }) => theme.typography.p3.lineHeight};
`;
