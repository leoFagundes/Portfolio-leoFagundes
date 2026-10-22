import { Nav } from "src/components/Nav";
import { AboutMe } from "./aboutMe";
import { Career } from "./career";
import { Certificates } from "./certificates";
import { Contact } from "./contact";
import { Hero } from "./hero";
import { Projects } from "./projects";
import { Skills } from "./skills";
import * as S from "./style";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    // dica do easter egg para quem abre o console
    console.log(
      "%cPsiu... as palavras em verde do “Sobre mim” escondem um segredo.",
      "color: #01A66B; font-size: 14px; font-weight: 600;"
    );
  }, []);

  return (
    <S.HomeContainer>
      <Nav />
      <S.SectionContainer id="hero" type="primary">
        <Hero />
      </S.SectionContainer>
      <S.SectionContainer
        height="auto"
        minHeight="60vh"
        id="aboutMe"
        type="secondary"
      >
        <AboutMe />
      </S.SectionContainer>
      <S.SectionContainer
        height="auto"
        minHeight="60vh"
        id="career"
        type="secondary"
      >
        <Career />
      </S.SectionContainer>
      <S.SectionContainer
        height="auto"
        minHeight="700px"
        id="projects"
        type="primary"
      >
        <Projects />
      </S.SectionContainer>
      <S.SectionContainer
        height="auto"
        minHeight="60vh"
        id="skills"
        type="secondary"
      >
        <Skills />
      </S.SectionContainer>
      <S.SectionContainer
        id="certificates"
        type="primary"
        height="auto"
        minHeight="550px"
      >
        <Certificates />
      </S.SectionContainer>
      <S.SectionContainer
        id="contact"
        type="secondary"
        height="auto"
        minHeight="60vh"
      >
        <Contact />
      </S.SectionContainer>
    </S.HomeContainer>
  );
};
