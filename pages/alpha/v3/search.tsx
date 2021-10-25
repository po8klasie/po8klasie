import React, { FC } from 'react';
import {
  withProjectConfig,
  getProjectConfigStaticProps,
  ProjectConfigConsumerProps,
} from '../../../src/config/withProjectConfig';

type AlphaV3SearchPageProps = ProjectConfigConsumerProps<'appearance' | 'filters'>;

const AlphaV3SearchPage: FC<AlphaV3SearchPageProps> = ({
  PROJECT: {
    appearance: { appName },
  },
}) => <h1>Hello world from {appName}</h1>;

export default withProjectConfig<AlphaV3SearchPageProps>(AlphaV3SearchPage);

export const getStaticProps = getProjectConfigStaticProps(['appearance']);
