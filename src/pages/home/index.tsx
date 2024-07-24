import { Nav } from "src/components/Nav";
import { AboutMe } from "./aboutMe";
import { Certificates } from "./certificates";
import { Contact } from "./contact";
import { Hero } from "./hero";
import { Projects } from "./projects";
import { Skills } from "./skills";
import * as S from "./style";

export const Home = () => {
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
