import gdyniaConfig from './gdynia';
import warszawaConfig from './warszawa';
import { ProjectConfig } from './types';

const projectConfigsList: ProjectConfig[] = [gdyniaConfig, warszawaConfig];

export const projectsIDs = projectConfigsList.map(({ projectID }) => projectID);

export const projectConfigs: Record<string, ProjectConfig> = projectConfigsList.reduce(
  (acc, projectConfig) => ({
    ...acc,
    [projectConfig.projectID]: projectConfig,
  }),
  {},
);

export const getProjectConfig = (projectID: string): ProjectConfig =>
  projectConfigs[projectID] as ProjectConfig;
