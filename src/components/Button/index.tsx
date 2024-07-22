import { ComponentProps, ReactNode } from "react";
import * as S from "./style";

type ButtonProps = ComponentProps<"button"> & {
  children: ReactNode;
  width?: string;
  hoveredIcon?: ReactNode;
  iconDeslocation?: string;
};

export const Button = ({
  children,
  width,
  hoveredIcon,
  iconDeslocation,
  ...props
}: ButtonProps) => {
  return (
    <S.ButtonContainer
      {...props}
      className={hoveredIcon ? "hoverAnimation" : ""}
      width={width}
      iconDeslocation={iconDeslocation}
    >
      <span>{children}</span>
      <div className={`icon`}>{hoveredIcon}</div>
    </S.ButtonContainer>
  );
};
