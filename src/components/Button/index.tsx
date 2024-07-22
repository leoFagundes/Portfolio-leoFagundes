import { ReactNode } from "react";
import * as S from "./style";

type ButtonProps = {
  children: ReactNode;
  width?: string;
  hoveredIcon?: ReactNode;
};

export const Button = ({ children, width, hoveredIcon }: ButtonProps) => {
  return (
    <S.ButtonContainer
      className={hoveredIcon ? "hoverAnimation" : ""}
      width={width}
    >
      <span>{children}</span>
      <div className={`icon`}>{hoveredIcon}</div>
    </S.ButtonContainer>
  );
};
