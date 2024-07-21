import styled from "styled-components";

export const HomeContainer = styled.main``;

export const SectionContainer = styled.section<{
  type: "primary" | "secondary";
  height?: string;
}>`
  background-color: ${(props) =>
    props.type === "primary" ? props.theme.bgPrimary : props.theme.bgSecondary};
  height: ${(props) => props.height || "100vh"};
  width: 100%;

  display: flex;
  justify-content: center;
  overflow-y: hidden;

  section {
    width: 67%;

    //background-color: rgba(200, 200, 200, 0.1); //grid view
  }
`;
