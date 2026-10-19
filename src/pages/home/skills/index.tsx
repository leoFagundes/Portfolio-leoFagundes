import { Title } from "src/components/Title";
import * as S from "./style";
import * as T from "src/styled/typography";
import { skillsData } from "src/data/skillsData";
import { projectsDataJSON } from "src/data/projectsData";
import { Modal } from "src/components/Modal";
import {
  SegmentedControl,
  SegmentedOption,
} from "src/components/SegmentedControl";
import { selectProject } from "src/utils/projectSelection";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "react-feather";
import {
  ProjectDataProps,
  SkillCategory,
  SkillDataProps,
} from "src/types/type";

type SkillFilter = "Todas" | SkillCategory;

const categories: SkillCategory[] = [
  "Front-end",
  "Estilização",
  "Back-end",
  "Ferramentas",
];

const filterOptions: SegmentedOption<SkillFilter>[] = [
  { value: "Todas", label: "Todas", count: skillsData.length },
  ...categories.map((category) => ({
    value: category,
    label: category,
    count: skillsData.filter((skill) => skill.category === category).length,
  })),
];

const getProjectTags = (project: ProjectDataProps) => [
  ...project.stack,
  ...(project.repoLink ? ["Git"] : []),
  ...(project.figmaLink ? ["Figma"] : []),
];

const getSkillProjects = (skill: SkillDataProps) =>
  projectsDataJSON.filter((project) =>
    getProjectTags(project).some((tag) => skill.matches.includes(tag))
  );

const formatProjectCount = (count: number) =>
  `${count} ${count === 1 ? "projeto" : "projetos"}`;

export const Skills = () => {
  const [activeFilter, setActiveFilter] = useState<SkillFilter>("Todas");
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
  const [currentSkillClicked, setCurrentSkillClicked] = useState<
    SkillDataProps | undefined
  >(undefined);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(closeTimeoutRef.current), []);

  const visibleSkills =
    activeFilter === "Todas"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeFilter);
  const currentSkillProjects = currentSkillClicked
    ? getSkillProjects(currentSkillClicked)
    : [];

  const handleOpenModal = (skill: SkillDataProps) => {
    clearTimeout(closeTimeoutRef.current);
    setCurrentSkillClicked(skill);
    setIsSkillModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsSkillModalOpen(false);
    closeTimeoutRef.current = setTimeout(() => {
      setCurrentSkillClicked(undefined);
    }, 800);
  };

  const handleProjectClick = (projectName: string) => {
    selectProject(projectName);
    handleCloseModal();
  };

  return (
    <S.SkillsContainer>
      <div className="skills-header">
        <Title>Habilidades</Title>
        <SegmentedControl
          label="Filtrar habilidades"
          options={filterOptions}
          value={activeFilter}
          onChange={setActiveFilter}
        />
      </div>
      <div className="skills-content">
        <div className="skills-items-content">
          {visibleSkills.map((skill) => {
            const projectCount = getSkillProjects(skill).length;

            return (
              <S.SkillItem
                key={skill.name}
                type="button"
                aria-haspopup="dialog"
                onClick={() => handleOpenModal(skill)}
              >
                <img src={skill.img} alt="" />
                <T.H3>{skill.name}</T.H3>
                {projectCount > 0 && (
                  <span className="skill-count">
                    {formatProjectCount(projectCount)}
                  </span>
                )}
              </S.SkillItem>
            );
          })}
        </div>
      </div>

      {currentSkillClicked && (
        <Modal
          isOpen={isSkillModalOpen}
          onClose={handleCloseModal}
          labelledBy="skill-modal-title"
        >
          <S.SkillModalContent>
            <div className="modal-skill-info">
              <span className="modal-skill-category">
                {currentSkillClicked.category}
              </span>
              <T.H3 id="skill-modal-title">{currentSkillClicked.name}</T.H3>
              {currentSkillProjects.length > 0 ? (
                <>
                  <T.P2 className="modal-skill-text">
                    Usei em {formatProjectCount(currentSkillProjects.length)}:
                  </T.P2>
                  <ul className="modal-skill-projects">
                    {currentSkillProjects.map((project) => (
                      <li key={project.name}>
                        <a
                          href="#projects"
                          onClick={() => handleProjectClick(project.name)}
                        >
                          {project.name}
                          <ArrowRight size={14} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <T.P2 className="modal-skill-text">
                  {currentSkillClicked.description}
                </T.P2>
              )}
            </div>
            <img
              className="modal-skill-img"
              src={currentSkillClicked.img}
              alt=""
            />
          </S.SkillModalContent>
        </Modal>
      )}
    </S.SkillsContainer>
  );
};
