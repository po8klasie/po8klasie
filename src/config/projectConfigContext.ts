import { createContext, useContext } from 'react';
import { ProjectConfig } from './types';

export const projectConfigContext = createContext<Partial<ProjectConfig>>({});

export const useProjectConfig = () => useContext(projectConfigContext);

export const ProjectConfigProvider = projectConfigContext.Provider;
