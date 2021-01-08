import React, { ComponentType, LazyExoticComponent, Suspense, FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import Loader from '../components/Loader';

const lazyLoaded = (
  Component: LazyExoticComponent<ComponentType<any>>,
): FC<RouteComponentProps> => {
  return (props: RouteComponentProps) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default lazyLoaded;
