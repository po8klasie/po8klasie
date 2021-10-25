import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import { ProjectConfigProvider } from './projectConfigContext';
import { ProjectConfig } from './types';
import { getProjectConfig } from './index';

export interface ProjectConfigConsumerProps<T extends keyof ProjectConfig> {
  PROJECT: Pick<ProjectConfig, T>;
}

export const getProjectConfigStaticProps = (
  projectConfigKeys: (keyof ProjectConfig)[],
): GetStaticProps => () => {
  const projectConfig = getProjectConfig();

  const partialProjectConfig = Object.fromEntries(
    projectConfigKeys.map((key) => [key, projectConfig[key]]),
  );

  return {
    props: {
      PROJECT: partialProjectConfig,
    },
  };
};

export const withProjectConfig = <T extends ProjectConfigConsumerProps<any>>(
  WrappedComponent: FC<T>,
): FC<T> => (props) => (
  <ProjectConfigProvider value={props.PROJECT}>
    <WrappedComponent {...props} />
  </ProjectConfigProvider>
);

export default withProjectConfig;
