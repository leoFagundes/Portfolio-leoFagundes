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
      <S.SectionContainer id="aboutMe" type="secondary">
        <AboutMe />
      </S.SectionContainer>
      <S.SectionContainer id="projects" type="primary">
        <Projects />
      </S.SectionContainer>
      <S.SectionContainer id="skills" type="secondary" height="auto">
        <Skills />
      </S.SectionContainer>
      <S.SectionContainer
        id="certificates"
        type="primary"
        height="60vh"
        minHeight="60vh"
      >
        <Certificates />
      </S.SectionContainer>
      <S.SectionContainer
        id="contact"
        type="secondary"
        height="60vh"
        minHeight="60vh"
      >
        <Contact />
      </S.SectionContainer>
    </S.HomeContainer>
  );
};
