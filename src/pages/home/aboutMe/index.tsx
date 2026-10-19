import { Title } from "src/components/Title";
import * as S from "./style";
import * as T from "src/styled/typography";
import LeoFagundesImg from "src/assets/image/leoFagundes.png";
import { FileText, Mail } from "react-feather";
import { projectsDataJSON } from "src/data/projectsData";
import { skillsData } from "src/data/skillsData";
import { certificateData } from "src/data/certificatesData";
import { careerData } from "src/data/careerData";

const CV_LINK = "pdf/Curriculo-Leonardo-Fagundes.pdf";

const certificateHours = certificateData.reduce(
  (total, certificate) => total + Number(certificate.duration),
  0,
);

// usado pela lista de números, que está comentada no JSX
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const stats = [
  { value: String(projectsDataJSON.length), label: "projetos" },
  {
    value: String(
      careerData.filter((item) => item.type === "freelance").length,
    ),
    label: "clientes",
  },
  { value: String(skillsData.length), label: "tecnologias" },
  {
    value: `${Math.floor(certificateHours / 100) * 100}+`,
    label: "horas de cursos",
  },
];

export const AboutMe = () => (
  <S.AboutMeContainer>
    <Title>Sobre mim</Title>
    <div className="info-content">
      <div className="leo-fagundes-img">
        <img src={LeoFagundesImg} alt="Foto de Leonardo Fagundes" />
        <div className="image-mask" />
      </div>
      <div className="aboutme-text">
        <T.P1>
          <span className="green">Olá!</span> Meu nome é{" "}
          <span className="green">Leonardo Cantieri Taube Fagundes</span> e
          nasci em Brasília no ano de 2001.
        </T.P1>
        <T.P1>
          Sempre fui <span className="green">apaixonado por tecnologia</span>{" "}
          desde criança, o que me levou a seguir uma carreira na área. Formei em
          Ciência da Computação na UniCEUB, e estou focado na área de front-end
          e UX/UI.
        </T.P1>
        <T.P1>
          Meu objetivo é me tornar um{" "}
          <span className="green">engenheiro de software front-end</span> e
          criar experiências incríveis na web. Desde que comecei essa jornada,
          tenho me dedicado a me especializar cada vez mais, sempre com a visão
          de como a tecnologia pode transformar o mundo ao nosso redor!
        </T.P1>

        {/* <ul className="aboutme-stats">
          {stats.map(({ value, label }) => (
            <li key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </li>
          ))}
        </ul> */}

        <div className="aboutme-actions">
          <a
            className="primary"
            href={CV_LINK}
            target="_blank"
            rel="noreferrer"
          >
            <FileText size={16} />
            Currículo
          </a>
          <a href="#contact">
            <Mail size={16} />
            Fale comigo
          </a>
        </div>
      </div>
    </div>
  </S.AboutMeContainer>
);
