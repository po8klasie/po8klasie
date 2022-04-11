import { ParsedUrlQuery } from 'querystring';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { ProjectConfig } from '../../config/types';

const ProjectIndexPage = () => null;

export default ProjectIndexPage;

interface ProjectIndexPageParams extends ParsedUrlQuery {
  projectID: string;
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext<ProjectIndexPageParams>,
): Promise<GetServerSidePropsResult<{ PROJECT: Partial<ProjectConfig> }>> => {
  const projectID = context?.params?.projectID;

  if (!projectID) {
    return {
      notFound: true,
    };
  }

  return {
    redirect: {
      destination: `/${projectID}/search`,
      permanent: false,
    },
  };
};
