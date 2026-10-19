import { Title } from "src/components/Title";
import * as S from "./style";
import * as T from "src/styled/typography";
import { projectsDataJSON } from "src/data/projectsData";
import { useEffect, useRef, useState } from "react";
import {
  ExternalLink,
  Figma,
  FileText,
  GitHub,
  Grid,
  Maximize2,
  Monitor,
  Smartphone,
  Star,
} from "react-feather";
import { CarouselControls } from "src/components/CarouselControls";
import { Modal } from "src/components/Modal";
import {
  SegmentedControl,
  SegmentedOption,
} from "src/components/SegmentedControl";
import { onSelectProject } from "src/utils/projectSelection";
import { ProjectDataProps } from "src/types/type";

type ProjectsMode = "AllProjects" | "ImportantProjects";
type DeviceMode = "DesktopDevice" | "MobileDevice";

const relevantProjects = projectsDataJSON.filter(
  (project) => project.isRelevant
);

const modeOptions: SegmentedOption<ProjectsMode>[] = [
  {
    value: "ImportantProjects",
    label: "Relevantes",
    icon: <Star size={16} />,
    count: relevantProjects.length,
  },
  {
    value: "AllProjects",
    label: "Todos",
    icon: <Grid size={16} />,
    count: projectsDataJSON.length,
  },
];

const deviceOptions: SegmentedOption<DeviceMode>[] = [
  { value: "DesktopDevice", label: "Computador", icon: <Monitor size={16} /> },
  { value: "MobileDevice", label: "Celular", icon: <Smartphone size={16} /> },
];

const getProjectImage = (project: ProjectDataProps, device: DeviceMode) =>
  device === "MobileDevice" && project.mobileImage
    ? project.mobileImage
    : project.image;

export const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [activeMode, setActiveMode] =
    useState<ProjectsMode>("ImportantProjects");
  const [activeDevice, setActiveDevice] =
    useState<DeviceMode>("DesktopDevice");
  const [expandedProject, setExpandedProject] = useState<ProjectDataProps>();
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxDevice, setLightboxDevice] =
    useState<DeviceMode>("DesktopDevice");
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const closeLightboxTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const projectsData =
    activeMode === "AllProjects" ? projectsDataJSON : relevantProjects;

  useEffect(() => () => clearTimeout(closeLightboxTimeoutRef.current), []);

  useEffect(
    () =>
      onSelectProject((projectName) => {
        const index = projectsData.findIndex(
          (project) => project.name === projectName
        );

        if (index >= 0) {
          setCurrentProjectIndex(index);
          return;
        }

        const indexInAll = projectsDataJSON.findIndex(
          (project) => project.name === projectName
        );
        if (indexInAll < 0) return;

        setActiveMode("AllProjects");
        setCurrentProjectIndex(indexInAll);
      }),
    [projectsData]
  );

  const handleModeChange = (mode: ProjectsMode) => {
    setActiveMode(mode);
    setCurrentProjectIndex(0);
  };

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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevProject();
    if (e.key === "ArrowRight") handleNextProject();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    touchStartRef.current = null;

    if (Math.abs(deltaX) < 40 || Math.abs(deltaX) < Math.abs(deltaY)) return;

    if (deltaX < 0) {
      handleNextProject();
    } else {
      handlePrevProject();
    }
  };

  const handleOpenLightbox = (project: ProjectDataProps) => {
    clearTimeout(closeLightboxTimeoutRef.current);
    setLightboxDevice(project.mobileImage ? activeDevice : "DesktopDevice");
    setExpandedProject(project);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    closeLightboxTimeoutRef.current = setTimeout(() => {
      setExpandedProject(undefined);
    }, 800);
  };

  return (
    <S.ProjectsContainer>
      <div className="projects-header">
        <Title>Projetos</Title>
        <div className="project-options">
          <SegmentedControl
            label="Filtrar projetos"
            options={modeOptions}
            value={activeMode}
            onChange={handleModeChange}
          />
          <SegmentedControl
            label="Tipo de tela"
            options={deviceOptions}
            value={activeDevice}
            onChange={setActiveDevice}
          />
        </div>
      </div>

      <div
        className="projects-content"
        role="region"
        aria-roledescription="carrossel"
        aria-label="Projetos"
        onKeyDown={handleKeyDown}
      >
        <div
          className="project-slider"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {projectsData.map((project, index) => {
            const isCurrent = currentProjectIndex === index;
            const isPrev =
              index ===
              (currentProjectIndex - 1 + projectsData.length) %
                projectsData.length;
            const isNext =
              index === (currentProjectIndex + 1) % projectsData.length;
            const isHidden = !isCurrent && !isPrev && !isNext;
            const linkTabIndex = isCurrent ? undefined : -1;
            const isMissingMobileImage =
              activeDevice === "MobileDevice" && !project.mobileImage;

            const className = `project-box
            ${isCurrent ? "current" : ""}
            ${isPrev ? "prev" : ""}
            ${isNext ? "next" : ""}
            ${isHidden ? "hide" : ""}`.trim();

            return (
              <div
                key={project.name}
                className={className}
                role="group"
                aria-roledescription="slide"
                aria-label={project.name}
                aria-hidden={!isCurrent}
                onClick={
                  isPrev
                    ? handlePrevProject
                    : isNext
                    ? handleNextProject
                    : undefined
                }
              >
                <button
                  type="button"
                  className="project-image-box"
                  aria-label={`Ampliar imagem de ${project.name}`}
                  tabIndex={linkTabIndex}
                  onClick={() => handleOpenLightbox(project)}
                >
                  <img
                    className="project-image"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    src={getProjectImage(project, activeDevice)}
                  />
                  <span className="project-badges">
                    {project.underConstruction && (
                      <span className="project-badge">Em construção</span>
                    )}
                    {isMissingMobileImage && (
                      <span className="project-badge">Sem tela de celular</span>
                    )}
                  </span>
                  <span className="project-expand" aria-hidden="true">
                    <Maximize2 size={16} />
                  </span>
                </button>

                <div className="project-info">
                  <T.H3 className="project-name">{project.name}</T.H3>
                  <T.P2 className="project-description">
                    {project.description}
                  </T.P2>
                </div>

                <ul className="project-stack">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                <div className="project-links">
                  {project.demoLink && (
                    <a
                      className="primary"
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      tabIndex={linkTabIndex}
                    >
                      <ExternalLink size={16} />
                      Ver online
                    </a>
                  )}
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noreferrer"
                      tabIndex={linkTabIndex}
                    >
                      <GitHub size={16} />
                      Código
                    </a>
                  )}
                  {project.externalLink && (
                    <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noreferrer"
                      tabIndex={linkTabIndex}
                    >
                      <FileText size={16} />
                      Documento
                    </a>
                  )}
                  {project.figmaLink && (
                    <a
                      href={project.figmaLink}
                      target="_blank"
                      rel="noreferrer"
                      tabIndex={linkTabIndex}
                    >
                      <Figma size={16} />
                      Figma
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="projects-controls">
          <CarouselControls
            currentIndex={currentProjectIndex}
            total={projectsData.length}
            onPrev={handlePrevProject}
            onNext={handleNextProject}
            prevLabel="Projeto anterior"
            nextLabel="Próximo projeto"
          />
        </div>
      </div>

      {expandedProject && (
        <Modal
          isOpen={isLightboxOpen}
          onClose={handleCloseLightbox}
          labelledBy="project-lightbox-title"
          size="wide"
        >
          <S.ProjectLightbox>
            <div className="lightbox-header">
              <T.H3 id="project-lightbox-title">{expandedProject.name}</T.H3>
              {expandedProject.mobileImage ? (
                <SegmentedControl
                  label="Tipo de tela"
                  options={deviceOptions}
                  value={lightboxDevice}
                  onChange={setLightboxDevice}
                />
              ) : (
                <span className="lightbox-note">
                  <Monitor size={14} />
                  Sem tela de celular
                </span>
              )}
            </div>
            <img
              key={lightboxDevice}
              className="lightbox-image"
              src={getProjectImage(expandedProject, lightboxDevice)}
              alt={`Tela ${
                lightboxDevice === "MobileDevice" ? "de celular" : "de computador"
              } do projeto ${expandedProject.name}`}
            />
            <a
              className="lightbox-original"
              href={getProjectImage(expandedProject, lightboxDevice)}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={14} />
              Abrir imagem em tamanho original
            </a>
          </S.ProjectLightbox>
        </Modal>
      )}
    </S.ProjectsContainer>
  );
};
