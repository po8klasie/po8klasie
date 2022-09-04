import React, { FC, useEffect, useState } from 'react';
import { ProjectConfigProvider } from './projectConfigContext';
import { ProjectConfig } from './types';
import { useRouter } from 'next/router';

export interface ProjectConfigConsumerProps<T extends keyof ProjectConfig> {
  PROJECT: Pick<ProjectConfig, T>;
}

// Disabling cause withProjectConfig will be removed soon
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withProjectConfig = <T extends ProjectConfigConsumerProps<any>>(
  WrappedComponent: FC<T>,
): FC<T> => (props) => {
  console.log(props.PROJECT);
  const [projectConfig, setProjectConfig] = useState(props.PROJECT ?? {});
  const router = useRouter();
  useEffect(() => {
    // TODO(micorix): Validate projectID from query
    const projectIdParam = router.query.projectID;
    if (Object.keys(projectConfig).length === 0 && projectIdParam) {
      setProjectConfig({
        projectID: projectIdParam,
        limitedProjectConfig: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ProjectConfigProvider value={projectConfig}>
      <WrappedComponent {...props} />
    </ProjectConfigProvider>
  );
};

export default withProjectConfig;
