import warszawaConfig from './warszawa';
import { ProjectConfig } from './types';

export const projectConfigs: ProjectConfig[] = [warszawaConfig];

export const getProjectConfig = (): ProjectConfig =>
  projectConfigs.find(
    ({ projectId }) => projectId === 'WARSZAWA', // TODO: Use env var
  ) as ProjectConfig;
