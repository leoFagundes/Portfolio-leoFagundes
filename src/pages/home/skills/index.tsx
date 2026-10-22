import { Title } from "src/components/Title";
import * as S from "./style";
import * as T from "src/styled/typography";
import { skillsData } from "src/data/skillsData";
import { Modal } from "src/components/Modal";
import {
  SegmentedControl,
  SegmentedOption,
} from "src/components/SegmentedControl";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { SkillCategory, SkillDataProps } from "src/types/type";

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

export const Skills = () => {
  const [activeFilter, setActiveFilter] = useState<SkillFilter>("Todas");
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
  const [currentSkillClicked, setCurrentSkillClicked] = useState<
    SkillDataProps | undefined
  >(undefined);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => () => clearTimeout(closeTimeoutRef.current), []);

  // dispara a entrada em cascata dos cards só quando a seção aparece na tela
  useEffect(() => {
    const element = contentRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const visibleSkills =
    activeFilter === "Todas"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeFilter);

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
      <div
        ref={contentRef}
        className={`skills-content ${isVisible ? "is-visible" : ""}`}
      >
        {/* a key recria a grade ao trocar de filtro, repetindo a cascata */}
        <div className="skills-items-content" key={activeFilter}>
          {visibleSkills.map((skill, index) => (
            <S.SkillItem
              key={skill.name}
              type="button"
              aria-haspopup="dialog"
              style={{ "--index": index } as CSSProperties}
              onClick={() => handleOpenModal(skill)}
            >
              <img src={skill.img} alt="" />
              <T.H3>{skill.name}</T.H3>
            </S.SkillItem>
          ))}
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
              <T.P2 className="modal-skill-text">
                {currentSkillClicked.description}
              </T.P2>
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
