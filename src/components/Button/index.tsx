import { ComponentProps, ReactNode } from "react";
import * as S from "./style";

type ButtonProps = ComponentProps<"button"> & {
  children: ReactNode;
  width?: string;
  hoveredIcon?: ReactNode;
  iconDeslocation?: string;
  iconInitialPosition?: string;
};

export const Button = ({
  children,
  width,
  hoveredIcon,
  iconDeslocation,
  iconInitialPosition,
  ...props
}: ButtonProps) => {
  return (
    <S.ButtonContainer
      {...props}
      className={hoveredIcon ? "hoverAnimation" : ""}
      width={width}
      iconDeslocation={iconDeslocation}
      iconInitialPosition={iconInitialPosition}
    >
      <span>{children}</span>
      <div className={`icon`}>{hoveredIcon}</div>
    </S.ButtonContainer>
  );
};
