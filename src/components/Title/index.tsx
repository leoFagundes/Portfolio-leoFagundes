import { ReactNode } from "react";
import * as S from "./style";
import * as T from "src/styled/typography";
import TitleBar from "src/assets/svg/title-bars.svg";

type TitleProps = {
  children: ReactNode;
};

export const Title = ({ children }: TitleProps) => {
  return (
    <S.TitleContainer>
      <img src={TitleBar} className="title-bar" alt="TitleBar" />
      <T.H2>{children}</T.H2>
      <img src={TitleBar} className="title-bar" alt="TitleBar" />
    </S.TitleContainer>
  );
};
