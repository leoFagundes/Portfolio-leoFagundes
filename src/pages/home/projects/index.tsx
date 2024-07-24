import { Title } from "src/components/Title";
import * as S from "./style";
import * as T from "src/styled/typography";
import { projectsData } from "src/data/projectsData";
import { Fragment, useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";

export const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handlePrevProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? projectsData.length - 1 : prev - 1
    );
  };

  const handleNextProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === projectsData.length - 1 ? 0 : prev + 1
    );
  };

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
    <S.ProjectsContainer>
      <Title>Projetos</Title>

      <div className="projects-content">
        <ArrowLeft
          size={24}
          className="prev-button"
          onClick={handlePrevProject}
        />
        <div className="project-slider">
          {projectsData.map((project, index) => {
            const isCurrent = currentProjectIndex === index;
            const isPrev =
              index ===
              (currentProjectIndex - 1 + projectsData.length) %
                projectsData.length;
            const isNext =
              index === (currentProjectIndex + 1) % projectsData.length;
            const isHidden = !isCurrent && !isPrev && !isNext;

            const className = `project-box 
            ${isCurrent ? "current" : ""} 
            ${isPrev ? "prev" : ""} 
            ${isNext ? "next" : ""} 
            ${isHidden ? "hide" : ""}`.trim();

            return (
              <Fragment key={index}>
                <div
                  onClick={
                    isPrev
                      ? handlePrevProject
                      : isNext
                      ? handleNextProject
                      : () => {}
                  }
                  className={className}
                >
                  <img
                    className="project-image"
                    alt={`${project.name}`}
                    src={project.image}
                  />
                  <div className="project-info">
                    <T.H3 className="project-name">{project.name}</T.H3>
                    <T.P2 className="project-description">
                      {project.description}
                    </T.P2>
                  </div>
                  <div className="hovered-project-box">
                    <div className="hovered-content">
                      <T.H2 className="hovered-project-h2">{project.name}</T.H2>
                      <T.P2 className="hovered-project-p2">
                        {project.stack}
                      </T.P2>

                      <div className="hovered-project-links">
                        {project.repoLink && (
                          <a
                            rel="noreferrer"
                            target="_blank"
                            onMouseLeave={handleMouseLeave}
                            onMouseEnter={handleMouseEnter}
                            href={project.repoLink}
                          >
                            <T.H3>Repositório do Github</T.H3>
                          </a>
                        )}
                        {project.demoLink && (
                          <a
                            rel="noreferrer"
                            target="_blank"
                            onMouseLeave={handleMouseLeave}
                            onMouseEnter={handleMouseEnter}
                            href={project.demoLink}
                          >
                            <T.H3>Aplicação no ar</T.H3>
                          </a>
                        )}
                        {project.figmaLink && (
                          <a
                            rel="noreferrer"
                            target="_blank"
                            onMouseLeave={handleMouseLeave}
                            onMouseEnter={handleMouseEnter}
                            href={project.figmaLink}
                          >
                            <T.H3>Figma do projeto</T.H3>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
        <ArrowRight
          size={24}
          className="next-button"
          onClick={handleNextProject}
        />
      </div>
    </S.ProjectsContainer>
  );
};
