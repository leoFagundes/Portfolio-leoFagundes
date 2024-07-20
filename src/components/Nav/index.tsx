import * as T from "src/styled/typography";
import * as S from "./style";
import { useState } from "react";
import { Code, Layers, Mail, Home, User, Award } from "react-feather";

export const Nav = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const toggleMenu = (e: React.MouseEvent<HTMLLabelElement>) => {
    if (e.target instanceof HTMLInputElement) {
      setIsNavBarOpen(!isNavBarOpen);
    }
  };

  return (
    <S.HeaderContainer>
      <nav>
        <T.H3 className="nav-logo">
          <span className="green">{"<"}</span>Léo Fagundes
          <span className="green">{"/>"}</span>
        </T.H3>

        <S.HamburguerMenuContainer onClick={toggleMenu} htmlFor="check">
          <input type="checkbox" id="check" />
          <span></span>
          <span></span>
          <span></span>
        </S.HamburguerMenuContainer>

        <ul className="name-list">
          <li>
            <a href="#hero">
              <T.P2>Início</T.P2>
            </a>
          </li>
          <li>
            <a href="#aboutMe">
              <T.P2>Sobre mim</T.P2>
            </a>
          </li>
          <li>
            <a href="#projects">
              <T.P2>Projetos</T.P2>
            </a>
          </li>
          <li>
            <a href="#skills">
              <T.P2>Habilidades</T.P2>
            </a>
          </li>
          <li>
            <a href="#certificates">
              <T.P2>Certificados</T.P2>
            </a>
          </li>
          <li>
            <a href="#contact">
              <T.P2>Contato</T.P2>
            </a>
          </li>
        </ul>
      </nav>
      <div className="mobile-nav-container">
        <ul className={`icon-list ${isNavBarOpen ? "nav-open" : "nav-close"}`}>
          <li>
            <a href="#hero">
              <Home size={"24px"} />
            </a>
          </li>
          <li>
            <a href="#aboutMe">
              <User size={"24px"} />
            </a>
          </li>
          <li>
            <a href="#projects">
              <Layers size={"24px"} />
            </a>
          </li>
          <li>
            <a href="#skills">
              <Code size={"24px"} />
            </a>
          </li>
          <li>
            <a href="#certificates">
              <Award size={"24px"} />
            </a>
          </li>
          <li>
            <a href="#contact">
              <Mail size={"24px"} />
            </a>
          </li>
        </ul>
      </div>
    </S.HeaderContainer>
  );
};
