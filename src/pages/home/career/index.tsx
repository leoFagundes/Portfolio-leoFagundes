import { Title } from "src/components/Title";
import * as S from "./style";
import * as T from "src/styled/typography";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  ExternalLink,
  FileText,
  Users,
} from "react-feather";
import { careerData } from "src/data/careerData";
import {
  SegmentedControl,
  SegmentedOption,
} from "src/components/SegmentedControl";
import { DocumentFile, DocumentModal } from "src/components/DocumentModal";
import { selectProject } from "src/utils/projectSelection";
import { CareerItemProps } from "src/types/type";

type CareerType = CareerItemProps["type"];

const countByType = (type: CareerType) =>
  careerData.filter((item) => item.type === type).length;

const careerOptions: SegmentedOption<CareerType>[] = [
  {
    value: "job",
    label: "Trabalhos",
    icon: <Briefcase size={16} />,
    count: countByType("job"),
  },
  {
    value: "freelance",
    label: "Freelas",
    icon: <Users size={16} />,
    count: countByType("freelance"),
  },
  {
    value: "education",
    label: "Formação",
    icon: <BookOpen size={16} />,
    count: countByType("education"),
  },
];

export const Career = () => {
  const [activeType, setActiveType] = useState<CareerType>("job");
  const [openFile, setOpenFile] = useState<DocumentFile>();

  const visibleItems = careerData.filter((item) => item.type === activeType);

  return (
    <S.CareerContainer>
      <div className="career-header">
        <Title>Trajetória</Title>
        <SegmentedControl
          label="Tipo de experiência"
          options={careerOptions}
          value={activeType}
          onChange={setActiveType}
        />
      </div>

      <ol className="career-list">
        {visibleItems.map(
          ({
            organization,
            type,
            roles,
            description,
            highlights,
            stack,
            current,
            projectName,
            link,
            file,
          }) => (
            <li
              key={organization}
              className={`career-item ${current ? "current" : ""}`}
            >
              <div className="career-item-header">
                <T.H3 className="career-company">{organization}</T.H3>
                {current && (
                  <span className="career-badge">
                    {type === "education" ? "Cursando" : "Atual"}
                  </span>
                )}
              </div>

              {roles.length > 0 && (
                <ul
                  className={`career-roles ${
                    roles.length > 1 ? "is-timeline" : ""
                  }`}
                >
                  {roles.map((role) => (
                    <li key={role.title}>
                      <div className="career-role-header">
                        <span className="career-role">{role.title}</span>
                        <span className="career-period">{role.period}</span>
                      </div>
                      {role.description && (
                        <p className="career-role-description">
                          {role.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {description && (
                <T.P2 className="career-description">{description}</T.P2>
              )}

              {highlights && (
                <ul className="career-highlights">
                  {highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}

              {(stack || projectName || link || file) && (
                <div className="career-footer">
                  {stack && (
                    <ul className="career-stack">
                      {stack.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  )}

                  {(projectName || link || file) && (
                    <div className="career-links">
                      {file && (
                        <button
                          type="button"
                          onClick={() =>
                            setOpenFile({
                              title: roles[0]?.title ?? organization,
                              subtitle: organization,
                              link: file.link,
                            })
                          }
                        >
                          {file.label}
                          <FileText size={14} />
                        </button>
                      )}
                      {projectName && (
                        <a
                          href="#projects"
                          onClick={() => selectProject(projectName)}
                        >
                          Ver projeto
                          <ArrowRight size={14} />
                        </a>
                      )}
                      {link && (
                        <a href={link} target="_blank" rel="noreferrer">
                          Ver site
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              )}
            </li>
          )
        )}
      </ol>

      <DocumentModal file={openFile} onClose={() => setOpenFile(undefined)} />
    </S.CareerContainer>
  );
};
