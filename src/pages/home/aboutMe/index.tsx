import { Title } from "src/components/Title";
import * as S from "./style";
import * as T from "src/styled/typography";
import LeoFagundesImg from "src/assets/image/leoFagundes.png";
import { FileText, Mail } from "react-feather";
import { useState } from "react";
import { DocumentFile, DocumentModal } from "src/components/DocumentModal";
import { projectsDataJSON } from "src/data/projectsData";
import { skillsData } from "src/data/skillsData";
import { certificateData } from "src/data/certificatesData";
import { careerData } from "src/data/careerData";

// PDF gerado a partir de curriculo/curriculo.html
const CV_FILE: DocumentFile = {
  title: "Currículo",
  subtitle: "Leonardo Fagundes · Desenvolvedor Full Stack",
  link: "pdf/Curriculo-Leonardo-Fagundes-2026.pdf",
};

const certificateHours = certificateData.reduce(
  (total, certificate) => total + Number(certificate.duration ?? 0),
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

export const AboutMe = () => {
  const [openFile, setOpenFile] = useState<DocumentFile>();

  return (
    <S.AboutMeContainer>
      <Title>Sobre mim</Title>
      <div className="info-content">
        <div className="leo-fagundes-img">
          <img src={LeoFagundesImg} alt="Foto de Leonardo Fagundes" />
          <div className="image-mask" />
        </div>
        <div className="aboutme-text">
          <span className="green">/</span>
          <T.P1>
            Olá! Meu nome é Leonardo Fagundes, desenvolvedor de Brasília,
            formado em Ciência da Computação pelo CEUB e pós-graduado em
            Desenvolvimento Full Stack.
          </T.P1>
          <T.P1>
            Hoje trabalho como desenvolvedor na{" "}
            <span className="green">Caixa Econômica Federal</span>, onde comecei
            na área de UX e atualmente atuo com{" "}
            <span className="green">Angular</span> e ABAP. Em paralelo, crio
            soluções web para negócios reais como{" "}
            <span className="green">Freelancer</span>.
          </T.P1>
          <T.P1>
            Fora do código, gosto de jogos de tabuleiro, enigmas e amo livros.
            Além disso, tenho uma estranha mania de esconder{" "}
            <span className="green">Easter eggs</span> nos meus projetos
            pessoais.
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
            <button
              type="button"
              className="primary"
              onClick={() => setOpenFile(CV_FILE)}
            >
              <FileText size={16} />
              Currículo
            </button>
            <a href="#contact">
              <Mail size={16} />
              Fale comigo
            </a>
          </div>
        </div>
      </div>

      <DocumentModal file={openFile} onClose={() => setOpenFile(undefined)} />
    </S.AboutMeContainer>
  );
};
