import React, { FC } from 'react';
import { ProjectConfigProvider } from './projectConfigContext';
import { ProjectConfig } from './types';

export interface ProjectConfigConsumerProps<T extends keyof ProjectConfig> {
  PROJECT: Pick<ProjectConfig, T>;
}

export const withProjectConfig = <T extends ProjectConfigConsumerProps<any>>(
  WrappedComponent: FC<T>,
): FC<T> => (props) => (
  <ProjectConfigProvider value={props.PROJECT}>
    <WrappedComponent {...props} />
  </ProjectConfigProvider>
);

export default withProjectConfig;
