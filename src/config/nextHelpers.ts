import { GetStaticPathsResult } from 'next';
import { ProjectConfig } from './types';

export type GetProjectConfigStaticPropsContext = {
  params: { projectID: string };
};

export const getProjectConfigProps = async (
  projectConfigKeys: (keyof ProjectConfig)[],
  projectID: string,
) => {
  const { getProjectConfig } = await import('./index');
  const projectConfig = getProjectConfig(projectID);

  const partialProjectConfig = Object.fromEntries(
    projectConfigKeys.map((key) => [key, projectConfig[key]]),
  );

  return {
    projectID,
    ...partialProjectConfig,
  };
};

export const getProjectConfigStaticProps = (projectConfigKeys: (keyof ProjectConfig)[]) => async ({
  params: { projectID },
}: GetProjectConfigStaticPropsContext) => {
  return {
    props: {
      PROJECT: await getProjectConfigProps(projectConfigKeys, projectID),
    },
  };
};

export const getStaticPathsPerProject = async (): Promise<GetStaticPathsResult> => {
  const { projectsIDs } = await import('./index');
  const paths = projectsIDs.map((projectID) => ({
    params: { projectID },
  }));
  return { paths, fallback: false };
};
