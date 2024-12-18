import { Title } from "src/components/Title";
import * as S from "./style";
import * as T from "src/styled/typography";
import { projectsDataJSON } from "src/data/projectsData";
import { Fragment, useEffect, useState } from "react";
import {
  Airplay,
  ArrowLeft,
  ArrowRight,
  Grid,
  Smartphone,
  Square,
} from "react-feather";
import { ProjectDataProps } from "src/types/type";

export const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [activeMode, setActiveMode] = useState<
    "AllProjects" | "ImportantProjects"
  >("AllProjects");
  const [activeDevice, setActiveDevice] = useState<
    "DesktopDevice" | "MobileDevice"
  >("DesktopDevice");
  const [projectsData, setProjectsData] = useState<ProjectDataProps[]>([]);

  useEffect(() => {
    setProjectsData(projectsDataJSON);
  }, []);

  useEffect(() => {
    if (activeMode === "AllProjects") {
      setProjectsData(projectsDataJSON);
    }

    if (activeMode === "ImportantProjects") {
      setProjectsData(projectsDataJSON.filter((project) => project.isRelevant));
    }

    setCurrentProjectIndex(0);
  }, [activeMode]);

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
      <div className="projects-header">
        <Title>Projetos</Title>
        <div className="project-options">
          <div>
            <Grid
              onClick={() => setActiveMode("AllProjects")}
              className={activeMode === "AllProjects" ? "active-project" : ""}
            />
            <Square
              onClick={() => setActiveMode("ImportantProjects")}
              className={
                activeMode === "ImportantProjects" ? "active-project" : ""
              }
            />
            <span>
              {activeMode === "AllProjects"
                ? "Todos os Projetos"
                : "Projetos Relevantes"}
            </span>
          </div>
          <hr />
          <div>
            <Airplay
              onClick={() => setActiveDevice("DesktopDevice")}
              className={
                activeDevice === "DesktopDevice" ? "active-project" : ""
              }
            />
            <Smartphone
              onClick={() => setActiveDevice("MobileDevice")}
              className={
                activeDevice === "MobileDevice" ? "active-project" : ""
              }
            />
            <span>
              {activeDevice === "DesktopDevice"
                ? "Tela de Computador"
                : "Tela de Celular"}
            </span>
          </div>
        </div>
      </div>

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
                    src={
                      activeDevice === "MobileDevice" && project.mobileImage
                        ? project.mobileImage
                        : project.image
                    }
                  />
                  <div className="project-info">
                    <T.H3 className="project-name">
                      {project.name}{" "}
                      {project.underConstruction && (
                        <T.P2>
                          <i>(Em construção)</i>
                        </T.P2>
                      )}
                    </T.H3>
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
