const SELECT_PROJECT_EVENT = "portfolio:select-project";

export const selectProject = (projectName: string) => {
  window.dispatchEvent(
    new CustomEvent<string>(SELECT_PROJECT_EVENT, { detail: projectName })
  );
};

export const onSelectProject = (callback: (projectName: string) => void) => {
  const listener = (event: Event) =>
    callback((event as CustomEvent<string>).detail);

  window.addEventListener(SELECT_PROJECT_EVENT, listener);
  return () => window.removeEventListener(SELECT_PROJECT_EVENT, listener);
};
