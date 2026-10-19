import * as T from "src/styled/typography";
import * as S from "./style";
import { CSSProperties, useEffect, useRef, useState } from "react";
import {
  Code,
  Layers,
  Mail,
  Home,
  User,
  Award,
  Briefcase,
} from "react-feather";

const navItems = [
  { id: "hero", label: "Início", Icon: Home },
  { id: "aboutMe", label: "Sobre mim", Icon: User },
  { id: "career", label: "Trajetória", Icon: Briefcase },
  { id: "projects", label: "Projetos", Icon: Layers },
  { id: "skills", label: "Habilidades", Icon: Code },
  { id: "certificates", label: "Certificados", Icon: Award },
  { id: "contact", label: "Contato", Icon: Mail },
];

export const Nav = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(navItems[0].id);
  const menuRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isNavBarOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        !menuRef.current?.contains(target) &&
        !toggleRef.current?.contains(target)
      ) {
        setIsNavBarOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsNavBarOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isNavBarOpen]);

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.currentTarget) {
      e.currentTarget.classList.remove("hovered");
      e.currentTarget.classList.add("unhovered");
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.currentTarget) {
      e.currentTarget.classList.remove("unhovered");
      e.currentTarget.classList.add("hovered");
    }
  };

  return (
    <S.HeaderContainer>
      <nav>
        <T.H2 className="nav-logo">
          <span className="green signature">{"<"}</span>{" "}
          <span className="signature">Léo Fagundes</span>{" "}
          <span className="green signature">{"/>"}</span>
        </T.H2>

        <S.HamburguerMenuContainer
          ref={toggleRef}
          type="button"
          aria-label={isNavBarOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isNavBarOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsNavBarOpen((isOpen) => !isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </S.HamburguerMenuContainer>

        <ul className="name-list">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
              >
                <T.P2>{label}</T.P2>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mobile-nav-container">
        <ul
          id="mobile-nav"
          ref={menuRef}
          className={`icon-list ${isNavBarOpen ? "nav-open" : "nav-close"}`}
        >
          {navItems.map(({ id, label, Icon }, index) => (
            <li key={id} style={{ "--index": index } as CSSProperties}>
              <a
                href={`#${id}`}
                className={activeSection === id ? "active" : ""}
                aria-current={activeSection === id ? "location" : undefined}
                onClick={() => setIsNavBarOpen(false)}
              >
                <span className="icon-label">{label}</span>
                <Icon size={24} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </S.HeaderContainer>
  );
};
