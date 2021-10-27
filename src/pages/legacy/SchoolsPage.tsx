import React, { FC } from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';
import getPathWithPreservedParams from '../../utils/url';

const defaultView = 'grid';

const SchoolsPage: FC<RouteComponentProps> = () => {
  return <Redirect to={getPathWithPreservedParams(`/schools/${defaultView}`)} noThrow />;
};

export default SchoolsPage;
