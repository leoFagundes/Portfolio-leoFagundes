import { Title } from "src/components/Title";
import * as S from "./style";
import * as T from "src/styled/typography";
import LeoFagundesImg from "src/assets/image/leoFagundes.png";

export const AboutMe = () => {
  return (
    <S.AboutMeContainer>
      <Title>Sobre mim</Title>
      <div className="info-content">
        <div className="leo-fagundes-img">
          <img src={LeoFagundesImg} alt="LeoFagundes" />
          <div className="image-mask" />
        </div>
        <div className="aboutme-text">
          <T.P1>
            <span className="green">Olá!</span> Meu nome é{" "}
            <span className="green">Leonardo Cantieri Taube Fagundes</span> e
            nasci em Brasília no ano de 2001.
          </T.P1>
          <br />
          <T.P1>
            Sempre fui <span className="green">apaixonado por tecnologia</span>{" "}
            desde criança, o que me levou a seguir uma carreira na área.
            Atualmente, sou estudante de Ciência da Computação na UniCEUB,
            focado na área de front-end e UX/UI.
          </T.P1>
          <br />
          <T.P1>
            Meu objetivo é me tornar um{" "}
            <span className="green">engenheiro de software front-end</span> e
            criar experiências incríveis na web. Desde que comecei essa jornada,
            tenho me dedicado a me especializar cada vez mais, sempre com a
            visão de como a tecnologia pode transformar o mundo ao nosso redor!
          </T.P1>
        </div>
      </div>
    </S.AboutMeContainer>
  );
};
