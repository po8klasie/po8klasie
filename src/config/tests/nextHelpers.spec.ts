import * as projectConfigIndex from '../index';
import { getProjectConfigStaticProps, getStaticPathsPerProject } from '../nextHelpers';
import { ProjectConfig } from '../types';

describe('config/nextHelpers', () => {
  describe('getProjectConfigStaticProps', () => {
    const fakeConfig = {
      filters: { someFilter: 'filter' },
      appearance: { someProp: false },
    };

    it('calls getProjectConfig with proper projectID', async () => {
      const spy = jest
        .spyOn(projectConfigIndex, 'getProjectConfig')
        .mockImplementation(() => (fakeConfig as unknown) as ProjectConfig);

      await getProjectConfigStaticProps(['appearance'])({ params: { projectID: 'foo' } });
      expect(spy).toHaveBeenCalledWith('foo');
    });

    it('returns props for project config', async () => {
      projectConfigIndex.getProjectConfig = jest.fn(() => fakeConfig);

      const result = await getProjectConfigStaticProps(['appearance'])({
        params: { projectID: 'bar' },
      });

      expect(result).toEqual({
        props: {
          PROJECT: {
            projectID: 'bar',
            appearance: fakeConfig.appearance,
          },
        },
      });
    });
  });
  describe('getStaticPathsPerProject', () => {
    it('returns proper paths', async () => {
      projectConfigIndex.projectsIDs = ['abc', 'foo'];

      const result = await getStaticPathsPerProject();
      expect(result.paths).toEqual([
        {
          params: {
            projectID: 'abc',
          },
        },
        {
          params: {
            projectID: 'foo',
          },
        },
      ]);
    });
  });
});
