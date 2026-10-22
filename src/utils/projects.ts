import { ProjectApp, ProjectDataProps } from "src/types/type";

// projetos de uma aplicação só viram uma lista com um item,
// assim o card e as habilidades tratam os dois casos do mesmo jeito
export const getProjectApps = (project: ProjectDataProps): ProjectApp[] => {
  if (project.apps) return project.apps;

  const { isRelevant, underConstruction, previousVersion, apps, ...app } =
    project;
  return [app];
};
