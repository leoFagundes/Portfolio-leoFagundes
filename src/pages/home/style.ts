import styled from "styled-components";

export const HomeContainer = styled.main``;

export const SectionContainer = styled.section<{
  type: "primary" | "secondary";
  height?: string;
  minHeight?: string;
}>`
  background-color: ${(props) =>
    props.type === "primary" ? props.theme.bgPrimary : props.theme.bgSecondary};
  height: ${(props) => props.height || "100vh"};
  min-height: ${(props) => props.minHeight || "100vh"};
  width: 100%;

  display: flex;
  justify-content: center;
  overflow-y: hidden;

  section {
    width: 67%;
    max-width: 1200px;
    padding: 48px 0;
    /* background-color: rgba(200, 200, 200, 0.1); //grid view */

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}) {
      width: 85%;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      width: 90%;
    }
  }
`;
