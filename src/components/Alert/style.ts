import styled from "styled-components";

export const AlertContainer = styled.div<{
  type: "success" | "danger";
  top: string;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  background-color: aquamarine;
  padding: 16px;
  border-radius: 5px;
  min-width: 250px;

  position: absolute;
  top: ${(props) => props.top};

  animation: slideIn 0.8s ease forwards;
  z-index: 3;

  background-color: ${(props) =>
    props.type === "success"
      ? props.theme.secondaryColor
      : props.theme.errorColor};

  svg:hover {
    cursor: pointer;
  }

  @keyframes slideIn {
    0% {
      transform: translateY(-30px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
