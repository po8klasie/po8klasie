import { createContext } from 'react';
import { ProjectConfig } from './types';

export const projectConfigContext = createContext<Partial<ProjectConfig>>({});

export const ProjectConfigProvider = projectConfigContext.Provider;
