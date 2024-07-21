import { Title } from "src/components/Title";
import * as S from "./style";
import * as T from "src/styled/typography";
import { skillsData } from "src/data/skillsData";
import { Modal } from "src/components/Modal";
import { useState } from "react";
import { SkillDataProps } from "src/types/type";

export const Skills = () => {
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
  const [currentSkillClicked, setCurrentSkillClicked] = useState<
    SkillDataProps | undefined
  >(undefined);

  const handleOpenModal = (data: SkillDataProps) => {
    setIsSkillModalOpen(true);
    setCurrentSkillClicked(data);
  };

  const handleCloseModal = () => {
    setIsSkillModalOpen(false);
    setCurrentSkillClicked(undefined);
  };

  return (
    <>
      <S.SkillsContainer>
        <Title>Habilidades</Title>
        <div className="skills-content">
          <div className="skills-items-content">
            {skillsData.map((skill, index) => (
              <S.SkillItem key={index} onClick={() => handleOpenModal(skill)}>
                <img src={skill.img} alt={`${skill.name} logo`} />
                <T.H3>{skill.name}</T.H3>
              </S.SkillItem>
            ))}
          </div>
          {currentSkillClicked && (
            <Modal isOpen={isSkillModalOpen} onClose={handleCloseModal}>
              <div className="modal-skill-info">
                <T.H3>{currentSkillClicked.name}</T.H3>
                <T.P1>{currentSkillClicked.description}</T.P1>
              </div>
              <img
                className="modal-skill-img"
                src={currentSkillClicked.img}
                alt={`${currentSkillClicked.name} logo`}
              />
            </Modal>
          )}
        </div>
      </S.SkillsContainer>
    </>
  );
};
