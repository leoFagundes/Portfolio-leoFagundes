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
  Image as ImageIcon,
  Layers,
  Lock,
  Maximize2,
  RotateCcw,
  Star,
} from "react-feather";
import { CarouselControls } from "src/components/CarouselControls";
import { ImageGallery } from "src/components/ImageGallery";
import { Modal } from "src/components/Modal";
import {
  SegmentedControl,
  SegmentedOption,
} from "src/components/SegmentedControl";
import { onSelectProject } from "src/utils/projectSelection";
import { getProjectApps } from "src/utils/projects";
import { ProjectApp } from "src/types/type";

type ProjectsMode = "AllProjects" | "ImportantProjects";

type ExpandedImages = {
  title: string;
  images: string[];
};

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

export const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [activeMode, setActiveMode] =
    useState<ProjectsMode>("ImportantProjects");
  // aba selecionada em cada projeto com várias aplicações
  const [selectedApps, setSelectedApps] = useState<Record<string, number>>(
    {}
  );
  const [expandedImages, setExpandedImages] = useState<ExpandedImages>();
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
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

  const handleSelectApp = (projectName: string, appIndex: number) => {
    setSelectedApps((current) => ({ ...current, [projectName]: appIndex }));
  };

  const handleOpenLightbox = (title: string, app: ProjectApp) => {
    if (!app.images?.length) return;

    clearTimeout(closeLightboxTimeoutRef.current);
    setExpandedImages({ title, images: app.images });
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    closeLightboxTimeoutRef.current = setTimeout(() => {
      setExpandedImages(undefined);
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

            const apps = getProjectApps(project);
            const hasApps = apps.length > 1;
            const appIndex = Math.min(
              selectedApps[project.name] ?? 0,
              apps.length - 1
            );
            const app = apps[appIndex];
            const title = hasApps ? `${project.name} · ${app.name}` : project.name;
            const cover = app.images?.[0];
            const screensCount = app.images?.length ?? 0;

            const badges = project.underConstruction && (
              <span className="project-badges">
                <span className="project-badge">Em construção</span>
              </span>
            );

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
                {hasApps && (
                  <div className="project-apps">
                    <SegmentedControl
                      label={`Aplicações do projeto ${project.name}`}
                      options={apps.map((item, itemIndex) => ({
                        value: String(itemIndex),
                        label: item.name,
                      }))}
                      value={String(appIndex)}
                      onChange={(value) =>
                        handleSelectApp(project.name, Number(value))
                      }
                      tabIndex={linkTabIndex}
                    />
                  </div>
                )}

                {cover ? (
                  <button
                    type="button"
                    className="project-image-box"
                    aria-label={
                      screensCount > 1
                        ? `Ver as ${screensCount} telas de ${title}`
                        : `Ampliar imagem de ${title}`
                    }
                    tabIndex={linkTabIndex}
                    onClick={() => handleOpenLightbox(title, app)}
                  >
                    <img
                      className="project-image"
                      alt=""
                      loading="lazy"
                      decoding="async"
                      src={cover}
                    />
                    {badges}
                    {screensCount > 1 && (
                      <span className="project-screens" aria-hidden="true">
                        <Layers size={12} />
                        {screensCount} telas
                      </span>
                    )}
                    <span className="project-expand" aria-hidden="true">
                      <Maximize2 size={16} />
                    </span>
                  </button>
                ) : (
                  <div className="project-image-box is-placeholder">
                    {badges}
                    <ImageIcon size={28} />
                    <span>Print em breve</span>
                  </div>
                )}

                <div className="project-info">
                  {hasApps && (
                    <span className="project-app-name">{app.name}</span>
                  )}
                  <T.H3 className="project-name">{project.name}</T.H3>
                  <T.P2 className="project-description">
                    {app.description}
                  </T.P2>
                </div>

                <ul className="project-stack">
                  {app.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                <div className="project-links">
                  {app.demoLink && (
                    <a
                      className="primary"
                      href={app.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      tabIndex={linkTabIndex}
                    >
                      <ExternalLink size={16} />
                      Ver online
                    </a>
                  )}
                  {app.repoLink && (
                    <a
                      href={app.repoLink}
                      target="_blank"
                      rel="noreferrer"
                      tabIndex={linkTabIndex}
                    >
                      <GitHub size={16} />
                      Código
                    </a>
                  )}
                  {!app.repoLink && app.isPrivateRepo && (
                    <span className="project-private">
                      <Lock size={14} />
                      Código privado
                    </span>
                  )}
                  {app.externalLink && (
                    <a
                      href={app.externalLink}
                      target="_blank"
                      rel="noreferrer"
                      tabIndex={linkTabIndex}
                    >
                      <FileText size={16} />
                      Documento
                    </a>
                  )}
                  {app.figmaLink && (
                    <a
                      href={app.figmaLink}
                      target="_blank"
                      rel="noreferrer"
                      tabIndex={linkTabIndex}
                    >
                      <Figma size={16} />
                      Figma
                    </a>
                  )}
                </div>

                {project.previousVersion && (
                  <div className="project-previous">
                    <RotateCcw size={14} className="project-previous-icon" />
                    <div className="project-previous-header">
                      <strong>{project.previousVersion.label}</strong>
                      {project.previousVersion.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          tabIndex={linkTabIndex}
                        >
                          {link.label}
                          <ExternalLink size={12} />
                        </a>
                      ))}
                    </div>
                    <p className="project-previous-description">
                      {project.previousVersion.description}
                    </p>
                  </div>
                )}
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

      {expandedImages && (
        <Modal
          isOpen={isLightboxOpen}
          onClose={handleCloseLightbox}
          labelledBy="project-lightbox-title"
          size="wide"
        >
          <S.ProjectLightbox>
            <div className="lightbox-header">
              <T.H3 id="project-lightbox-title">{expandedImages.title}</T.H3>
            </div>
            <ImageGallery
              images={expandedImages.images}
              title={expandedImages.title}
            />
          </S.ProjectLightbox>
        </Modal>
      )}
    </S.ProjectsContainer>
  );
};
